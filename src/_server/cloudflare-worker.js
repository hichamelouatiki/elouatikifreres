/**
 * Cloudflare Worker — Proxy sécurisé pour le formulaire de contact.
 *
 * Déployer sur : https://dash.cloudflare.com → Workers & Pages → Create Worker
 *
 * Variables d'environnement à définir dans le dashboard Worker (Settings → Variables) :
 *   WEB3FORMS_KEY   = ta clé Web3Forms (2461cd16-...)
 *   TURNSTILE_SECRET = ta Secret Key Turnstile (0x4AAAA...)
 *   ALLOWED_ORIGIN  = https://elouatikifreres.com
 */

const WEB3FORMS_API = "https://api.web3forms.com/submit";
const TURNSTILE_VERIFY_URL = "https://challenges.cloudflare.com/turnstile/v0/siteverify";

export default {
  async fetch(request, env) {
    // Gestion CORS pre-flight
    if (request.method === "OPTIONS") {
      return corsResponse(null, 204, env);
    }

    if (request.method !== "POST") {
      return corsResponse({ success: false, message: "Méthode non autorisée" }, 405, env);
    }

    // Vérification de l'origine
    const origin = request.headers.get("Origin") || "";
    const allowedOrigin = env.ALLOWED_ORIGIN || "https://elouatikifreres.com";

    if (origin && origin !== allowedOrigin) {
      return corsResponse({ success: false, message: "Origine non autorisée" }, 403, env);
    }

    // Lecture du formulaire
    let formData;
    try {
      formData = await request.formData();
    } catch {
      return corsResponse({ success: false, message: "Données invalides" }, 400, env);
    }

    // Validation du token Turnstile côté serveur (gratuit)
    const turnstileToken = formData.get("cf-turnstile-response");
    if (!turnstileToken) {
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

    // Relais vers Web3Forms avec la clé côté serveur (jamais exposée au client)
    const secureForm = new FormData();
    secureForm.set("access_key", env.WEB3FORMS_KEY);

    for (const [key, value] of formData.entries()) {
      if (key !== "access_key" && key !== "cf-turnstile-response") {
        secureForm.set(key, value);
      }
    }

    try {
      const upstream = await fetch(WEB3FORMS_API, {
        method: "POST",
        body: secureForm,
      });

      const json = await upstream.json();
      return corsResponse(json, upstream.status, env);
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
    "Content-Type": "application/json",
  };

  return new Response(body ? JSON.stringify(body) : null, { status, headers });
}
