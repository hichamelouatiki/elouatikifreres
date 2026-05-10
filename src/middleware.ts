/**
 * Middleware Next.js — Contrôle d'accès, en-têtes de sécurité, validation de locale.
 *
 * ╔══════════════════════════════════════════════════════════════════════╗
 * ║  ATTENTION : ce fichier est INACTIF en mode `output: "export"`.    ║
 * ║  Pour l'activer, retirer `output: "export"` de next.config.ts et   ║
 * ║  déployer sur un runtime Node.js (Vercel, VPS, Cloudflare Workers). ║
 * ╚══════════════════════════════════════════════════════════════════════╝
 *
 * Architecture en 3 couches (exécution dans l'ordre) :
 *  1. Validation de locale  — centralise l'équivalent de isValidLocale() + notFound()
 *  2. En-têtes de sécurité  — fallback du .htaccess, indépendant de l'hébergeur
 *  3. Garde-barrière admin  — à activer quand un espace connecté est ajouté
 */

import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// ─────────────────────────────────────────────
// 1. Configuration
// ─────────────────────────────────────────────

const LOCALES = ["fr", "en", "ar"] as const;
const DEFAULT_LOCALE = "fr";

/**
 * Routes protégées par authentification.
 * À remplir quand un espace admin / dashboard est créé.
 * Exemple : ["/admin", "/dashboard"]
 */
const PROTECTED_PREFIXES: string[] = [];

/** Nom du cookie de session (à définir lors de l'ajout d'un système d'auth). */
const SESSION_COOKIE = "session";

// ─────────────────────────────────────────────
// 2. En-têtes de sécurité
// ─────────────────────────────────────────────

/**
 * Retourne les en-têtes de sécurité à ajouter sur chaque réponse.
 * Miroir du .htaccess pour les déploiements sans Apache.
 * Turnstile (challenges.cloudflare.com) est inclus dans script-src, frame-src et connect-src.
 */
function buildSecurityHeaders(): Record<string, string> {
  const csp = [
    "default-src 'self'",
    "base-uri 'self'",
    "object-src 'none'",
    "frame-ancestors 'none'",
    "form-action 'self' https://api.web3forms.com",
    "connect-src 'self' https://api.web3forms.com https://challenges.cloudflare.com",
    "img-src 'self' data: blob:",
    "font-src 'self' data:",
    "frame-src https://challenges.cloudflare.com",
    "script-src 'self' 'unsafe-inline' https://challenges.cloudflare.com",
    "style-src 'self' 'unsafe-inline'",
    "upgrade-insecure-requests",
  ].join("; ");

  return {
    "Content-Security-Policy": csp,
    "X-Content-Type-Options": "nosniff",
    "X-Frame-Options": "DENY",
    "Referrer-Policy": "strict-origin-when-cross-origin",
    "Permissions-Policy":
      "camera=(), microphone=(), geolocation=(), payment=(), usb=(), interest-cohort=()",
    "Strict-Transport-Security": "max-age=31536000; includeSubDomains; preload",
  };
}

// ─────────────────────────────────────────────
// 3. Helpers
// ─────────────────────────────────────────────

function isValidLocale(locale: string): boolean {
  return (LOCALES as readonly string[]).includes(locale);
}

function extractLocaleFromPath(pathname: string): string | null {
  const segment = pathname.split("/")[1];
  return segment && isValidLocale(segment) ? segment : null;
}

function isProtectedRoute(pathname: string): boolean {
  return PROTECTED_PREFIXES.some((prefix) => pathname.startsWith(prefix));
}

function hasValidSession(request: NextRequest): boolean {
  const sessionCookie = request.cookies.get(SESSION_COOKIE);
  if (!sessionCookie?.value) return false;

  /**
   * Validation minimale : vérifie que le cookie existe et n'est pas vide.
   *
   * Pour une implémentation complète selon votre système d'auth :
   *
   * — NextAuth v5 :
   *   import { auth } from "@/auth";
   *   const session = await auth();
   *   return !!session?.user;
   *
   * — JWT maison (jose) :
   *   import { jwtVerify } from "jose";
   *   const secret = new TextEncoder().encode(process.env.JWT_SECRET);
   *   try { await jwtVerify(sessionCookie.value, secret); return true; }
   *   catch { return false; }
   *
   * — Clerk :
   *   import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
   *   (Utiliser directement clerkMiddleware() à la place de cette fonction)
   */
  return sessionCookie.value.length > 0;
}

// ─────────────────────────────────────────────
// 4. Middleware principal
// ─────────────────────────────────────────────

export function middleware(request: NextRequest): NextResponse {
  const { pathname } = request.nextUrl;
  const response = NextResponse.next();

  // — Couche 2 : En-têtes de sécurité sur toutes les réponses —
  const securityHeaders = buildSecurityHeaders();
  for (const [key, value] of Object.entries(securityHeaders)) {
    response.headers.set(key, value);
  }

  // — Couche 3 : Garde-barrière pour les routes protégées (auth) —
  if (PROTECTED_PREFIXES.length > 0 && isProtectedRoute(pathname)) {
    if (!hasValidSession(request)) {
      const loginUrl = new URL(
        `/${DEFAULT_LOCALE}/login`,
        request.url,
      );
      loginUrl.searchParams.set("callbackUrl", pathname);
      return NextResponse.redirect(loginUrl);
    }
  }

  // — Couche 1 : Validation de locale —
  const locale = extractLocaleFromPath(pathname);

  // Redirection / vers /fr/ (locale par défaut)
  if (pathname === "/") {
    return NextResponse.redirect(new URL(`/${DEFAULT_LOCALE}/`, request.url));
  }

  // Locale invalide dans l'URL → 404
  if (pathname.startsWith("/") && pathname.split("/")[1] && !locale) {
    const firstSegment = pathname.split("/")[1];
    // Ne pas intercepter les assets statiques (_next, favicon, etc.)
    if (!firstSegment.startsWith("_") && !firstSegment.includes(".")) {
      return NextResponse.rewrite(new URL("/404", request.url));
    }
  }

  return response;
}

// ─────────────────────────────────────────────
// 5. Matcher — routes auxquelles le middleware s'applique
// ─────────────────────────────────────────────

export const config = {
  matcher: [
    /*
     * Appliqué à toutes les routes SAUF :
     * - _next/static   (assets compilés)
     * - _next/image    (optimisation d'images)
     * - favicon.ico    (icône navigateur)
     * - fichiers avec extension (images, fonts, etc.)
     *
     * Pour ajouter les routes protégées, ajouter les prefixes ici aussi :
     * "/(admin|dashboard)(.*)"
     */
    "/((?!_next/static|_next/image|favicon.ico|.*\\..*).*)",
  ],
};
