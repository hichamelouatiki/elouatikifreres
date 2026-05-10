/**
 * Cloudflare Worker — Proxy sécurisé pour le formulaire de contact.
 *
 * Déployer sur : https://dash.cloudflare.com → Workers & Pages → Create Worker
 *
 * Variables d'environnement à définir dans le dashboard Worker (Settings → Variables) :
 *   WEB3FORMS_KEY    = ta clé Web3Forms (ex. xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx)
 *   TURNSTILE_SECRET = ta Secret Key Turnstile (ex. 0xXXXXXXXXXXXXXXXXXXXXXXXXXXX)
 *   ALLOWED_ORIGIN   = https://elouatikifreres.com
 *
 * Pipeline de filtrage (dans l'ordre) :
 *   1. Méthode + CORS pre-flight
 *   2. Origin strict (rejet si absent ou ≠ ALLOWED_ORIGIN)
 *   3. Lecture multipart
 *   4. Honeypot `botcheck` (réponse silencieuse 200 si rempli — anti-scraper)
 *   5. Validation Turnstile côté serveur (gratuit)
 *   6. Validation des pièces jointes (taille / type / extension) — défense en profondeur
 *   7. Relais vers Web3Forms avec la clé serveur
 */

const WEB3FORMS_API = "https://api.web3forms.com/submit";
const TURNSTILE_VERIFY_URL = "https://challenges.cloudflare.com/turnstile/v0/siteverify";

// ─────────────────────────────────────────────
// Liste blanche pièces jointes
// (synchroniser avec src/lib/contact-schema.ts — il n'est pas importable ici)
// ─────────────────────────────────────────────

const MAX_ATTACHMENT_BYTES = 15 * 1024 * 1024;

const ALLOWED_ATTACHMENT_EXTENSIONS = new Set([
  "pdf",
  "doc",
  "docx",
  "zip",
  "rar",
  "dwg",
  "jpg",
  "jpeg",
  "png",
]);

const ALLOWED_ATTACHMENT_TYPES = new Set([
  "application/pdf",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  "application/zip",
  "application/x-zip-compressed",
  "application/vnd.rar",
  "application/x-rar-compressed",
  "image/jpeg",
  "image/png",
]);

function getFileExtension(fileName) {
  const parts = String(fileName || "").split(".");
  return parts.length > 1 ? parts.pop().toLowerCase() : "";
}

function isAllowedAttachment(file) {
  return (
    file &&
    typeof file.size === "number" &&
    file.size > 0 &&
    file.size <= MAX_ATTACHMENT_BYTES &&
    ALLOWED_ATTACHMENT_EXTENSIONS.has(getFileExtension(file.name)) &&
    ALLOWED_ATTACHMENT_TYPES.has(file.type)
  );
}

export default {
  async fetch(request, env) {
    if (request.method === "OPTIONS") {
      return corsResponse(null, 204, env);
    }

    if (request.method !== "POST") {
      return corsResponse({ success: false, message: "Méthode non autorisée" }, 405, env);
    }

    // Vérification de l'origine — rejet strict si absente ou non autorisée.
    // Les navigateurs envoient toujours Origin sur les requêtes cross-origin ;
    // son absence indique un client non-navigateur (script, outil) : on refuse.
    const origin = request.headers.get("Origin");
    const allowedOrigin = env.ALLOWED_ORIGIN || "https://elouatikifreres.com";

    if (!origin || origin !== allowedOrigin) {
      return corsResponse({ success: false, message: "Origine non autorisée" }, 403, env);
    }

    let formData;
    try {
      formData = await request.formData();
    } catch {
      return corsResponse({ success: false, message: "Données invalides" }, 400, env);
    }

    // Honeypot : un humain laisse `botcheck` vide. S'il est rempli, c'est un bot.
    // On répond silencieusement 200 (pas d'indice donné au bot) sans rien relayer.
    const botcheck = formData.get("botcheck");
    if (typeof botcheck === "string" && botcheck.trim() !== "") {
      return corsResponse({ success: true, message: "Message envoyé avec succès" }, 200, env);
    }

    const turnstileToken = formData.get("cf-turnstile-response");
    if (typeof turnstileToken !== "string" || !turnstileToken) {
      return corsResponse({ success: false, message: "Token de sécurité manquant" }, 422, env);
    }

    const turnstileValid = await verifyTurnstile(
      turnstileToken,
      env.TURNSTILE_SECRET,
      request.headers.get("CF-Connecting-IP") || ""
    );

    if (!turnstileValid) {
      return corsResponse({ success: false, message: "Vérification de sécurité échouée" }, 422, env);
    }

    // Validation pièces jointes — défense en profondeur. Le client (navigateur)
    // valide déjà mais un attaquant peut contourner via cURL avec Origin spoofé.
    for (const value of formData.values()) {
      if (value instanceof File && !isAllowedAttachment(value)) {
        return corsResponse(
          { success: false, message: "Pièce jointe non autorisée" },
          422,
          env,
        );
      }
    }

    // Construction du payload relayé : on ne propage NI la clé client, NI le token Turnstile,
    // NI le honeypot vers Web3Forms.
    const secureForm = new FormData();
    secureForm.set("access_key", env.WEB3FORMS_KEY);

    for (const [key, value] of formData.entries()) {
      if (key === "access_key" || key === "cf-turnstile-response" || key === "botcheck") {
        continue;
      }
      secureForm.set(key, value);
    }

    try {
      const upstream = await fetch(WEB3FORMS_API, {
        method: "POST",
        body: secureForm,
      });

      // Mapper vers un schéma fixe pour ne jamais exposer les détails upstream au client.
      let upstreamSuccess = false;
      try {
        const raw = await upstream.json();
        upstreamSuccess = raw?.success === true;
      } catch {
        // upstream non-JSON : considéré comme un échec
      }

      if (upstreamSuccess) {
        return corsResponse({ success: true, message: "Message envoyé avec succès" }, 200, env);
      }
      return corsResponse(
        { success: false, message: "Envoi échoué" },
        upstream.status >= 400 ? upstream.status : 502,
        env,
      );
    } catch {
      return corsResponse({ success: false, message: "Erreur réseau" }, 502, env);
    }
  },
};

async function verifyTurnstile(token, secretKey, ip) {
  const body = new FormData();
  body.set("secret", secretKey);
  body.set("response", token);
  if (ip) body.set("remoteip", ip);

  try {
    const res = await fetch(TURNSTILE_VERIFY_URL, { method: "POST", body });
    const data = await res.json();
    return data.success === true;
  } catch {
    return false;
  }
}

function corsResponse(body, status, env) {
  const allowedOrigin = env?.ALLOWED_ORIGIN || "https://elouatikifreres.com";
  const headers = {
    "Access-Control-Allow-Origin": allowedOrigin,
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
    "Content-Type": "application/json; charset=utf-8",
    // Durcissement réponse JSON : empêche tout sniffing / framing / cache d'erreurs.
    "X-Content-Type-Options": "nosniff",
    "X-Frame-Options": "DENY",
    "Referrer-Policy": "no-referrer",
    "Cache-Control": "no-store",
  };

  return new Response(body ? JSON.stringify(body) : null, { status, headers });
}
