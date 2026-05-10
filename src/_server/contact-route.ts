/**
 * Route API sécurisée — Proxy Web3Forms côté serveur.
 *
 * ╔══════════════════════════════════════════════════════════════════════╗
 * ║  ACTIVATION : copier ce fichier vers                               ║
 * ║    src/app/api/contact/route.ts                                    ║
 * ║  puis :                                                            ║
 * ║    1. Retirer output: "export" de next.config.ts                   ║
 * ║    2. Renommer WEB3FORMS_ACCESS_KEY (retirer NEXT_PUBLIC_)         ║
 * ║    3. Définir NEXT_PUBLIC_CONTACT_ENDPOINT=/api/contact            ║
 * ║       dans .env.local                                              ║
 * ╚══════════════════════════════════════════════════════════════════════╝
 *
 * Avantages vs envoi direct depuis le navigateur :
 *  - La clé Web3Forms ne quitte JAMAIS le serveur (variable non NEXT_PUBLIC_)
 *  - Rate limiting par IP intégré (10 req / 10 min)
 *  - Validation de l'Origin contre le domaine autorisé
 *  - Validation Zod du corps de la requête avant relais
 *  - Timeout explicite sur le fetch vers Web3Forms
 */

import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { z } from "zod";

// ─────────────────────────────────────────────
// Configuration
// ─────────────────────────────────────────────

const ALLOWED_ORIGIN = process.env.NEXT_PUBLIC_SITE_URL ?? "https://elouatikifreres.com";
const WEB3FORMS_API = "https://api.web3forms.com/submit";
const FETCH_TIMEOUT_MS = 10_000;

/** Rate limiting en mémoire (simple — en production, préférer Upstash Redis). */
const rateLimitMap = new Map<string, { count: number; resetAt: number }>();
const RATE_LIMIT_MAX = 10;
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000; // 10 minutes

// ─────────────────────────────────────────────
// Schéma de validation des champs attendus
// ─────────────────────────────────────────────

const contactBodySchema = z.object({
  "cf-turnstile-response": z.string().min(1, "Token Turnstile manquant"),
  subject: z.string().optional(),
  from_name: z.string().optional(),
  replyto: z.string().email().optional(),
  Nom_Contact: z.string().min(1).max(120),
  Entreprise_Societe: z.string().min(1).max(160),
  email: z.string().email().max(254),
  Telephone: z.string().min(1).max(40),
  Type_de_Construction: z.string().min(1),
  Budget_Estime: z.string().min(1),
  Details_du_Projet: z.string().max(2000).optional(),
  botcheck: z.string().optional(),
});

// ─────────────────────────────────────────────
// Helpers
// ─────────────────────────────────────────────

function getClientIp(req: NextRequest): string {
  return (
    req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
    req.headers.get("x-real-ip") ??
    "unknown"
  );
}

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimitMap.get(ip);

  if (!entry || now > entry.resetAt) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
    return false;
  }

  if (entry.count >= RATE_LIMIT_MAX) return true;

  entry.count++;
  return false;
}

function isAllowedOrigin(req: NextRequest): boolean {
  const origin = req.headers.get("origin");
  const referer = req.headers.get("referer");
  const allowedHost = new URL(ALLOWED_ORIGIN).hostname;

  if (origin) {
    try {
      return new URL(origin).hostname === allowedHost;
    } catch {
      return false;
    }
  }

  if (referer) {
    try {
      return new URL(referer).hostname === allowedHost;
    } catch {
      return false;
    }
  }

  return false;
}

// ─────────────────────────────────────────────
// Handler POST
// ─────────────────────────────────────────────

export async function POST(req: NextRequest): Promise<NextResponse> {
  // 1. Vérification de l'origine
  if (!isAllowedOrigin(req)) {
    return NextResponse.json(
      { success: false, message: "Origin non autorisée" },
      { status: 403 },
    );
  }

  // 2. Rate limiting par IP
  const ip = getClientIp(req);
  if (isRateLimited(ip)) {
    return NextResponse.json(
      { success: false, message: "Trop de requêtes — réessayez dans 10 minutes" },
      { status: 429, headers: { "Retry-After": "600" } },
    );
  }

  // 3. Lecture du corps
  let rawBody: FormData;
  try {
    rawBody = await req.formData();
  } catch {
    return NextResponse.json(
      { success: false, message: "Corps de requête invalide" },
      { status: 400 },
    );
  }

  // 4. Validation Zod des champs
  const rawObject = Object.fromEntries(rawBody.entries());
  const parsed = contactBodySchema.safeParse(rawObject);

  if (!parsed.success) {
    return NextResponse.json(
      { success: false, message: "Données invalides", errors: parsed.error.flatten().fieldErrors },
      { status: 422 },
    );
  }

  // 5. Ajout de la clé côté serveur (jamais exposée au client)
  const accessKey = process.env.WEB3FORMS_ACCESS_KEY;
  if (!accessKey) {
    console.error("[contact/route] WEB3FORMS_ACCESS_KEY manquante");
    return NextResponse.json(
      { success: false, message: "Configuration serveur incomplète" },
      { status: 500 },
    );
  }

  const secureFormData = new FormData();
  secureFormData.set("access_key", accessKey);

  for (const [key, value] of rawBody.entries()) {
    if (key !== "access_key") {
      secureFormData.set(key, value);
    }
  }

  // 6. Relais vers Web3Forms avec timeout
  try {
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), FETCH_TIMEOUT_MS);

    const upstream = await fetch(WEB3FORMS_API, {
      method: "POST",
      body: secureFormData,
      signal: controller.signal,
    });

    clearTimeout(timer);
    const json: unknown = await upstream.json();

    return NextResponse.json(json, { status: upstream.status });
  } catch (err) {
    const isTimeout = err instanceof Error && err.name === "AbortError";
    console.error("[contact/route] Erreur relais Web3Forms :", err);

    return NextResponse.json(
      { success: false, message: isTimeout ? "Délai dépassé" : "Erreur réseau" },
      { status: 502 },
    );
  }
}

// OPTIONS — réponse CORS pré-flight
export function OPTIONS(): NextResponse {
  return new NextResponse(null, {
    status: 204,
    headers: {
      "Access-Control-Allow-Origin": ALLOWED_ORIGIN,
      "Access-Control-Allow-Methods": "POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
    },
  });
}
