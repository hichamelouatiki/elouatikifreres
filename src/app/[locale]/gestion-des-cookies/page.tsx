"use client";

/**
 * Page Gestion des Cookies — bandeau de consentement + tableau détaillé.
 * Le bouton "Tout accepter / Tout refuser / Sauvegarder" stocke les préférences
 * dans localStorage sous la clé "cookie_consent".
 */

import { useEffect, useState } from "react";
import { CheckCircle2, Cookie, Info, RefreshCw, ShieldCheck, XCircle } from "lucide-react";

import { SiteFooter } from "@/components/site-footer";

type ConsentState = {
  analytics: boolean;
  preferences: boolean;
};

const DEFAULT_CONSENT: ConsentState = {
  analytics: false,
  preferences: false,
};

const STORAGE_KEY = "cookie_consent";

function loadConsent(): ConsentState | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as ConsentState) : null;
  } catch {
    return null;
  }
}

function saveConsent(state: ConsentState) {
  if (typeof window === "undefined") return;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

export default function GestionDesCookiesPage() {
  const [consent, setConsent] = useState<ConsentState>(DEFAULT_CONSENT);
  const [saved, setSaved] = useState(false);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const stored = loadConsent();
    if (stored) setConsent(stored);
    setLoaded(true);
  }, []);

  function handleSave() {
    saveConsent(consent);
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  }

  function handleAcceptAll() {
    const all: ConsentState = { analytics: true, preferences: true };
    setConsent(all);
    saveConsent(all);
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  }

  function handleRefuseAll() {
    const none: ConsentState = { analytics: false, preferences: false };
    setConsent(none);
    saveConsent(none);
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  }

  return (
    <>
      <main className="mx-auto w-full max-w-4xl px-5 pb-24 pt-16 sm:px-8 lg:px-12">

        {/* En-tête */}
        <div className="mb-12 space-y-4 border-b border-white/10 pb-10">
          <p className="text-sm font-medium uppercase tracking-[0.24em] text-cyan-400">
            Paramètres de confidentialité
          </p>
          <h1 className="font-[family-name:var(--font-space-grotesk)] text-3xl font-bold leading-tight text-white sm:text-4xl">
            Gestion des Cookies
          </h1>
          <p className="text-zinc-400">
            Nous utilisons des cookies pour améliorer votre expérience. Vous
            pouvez accepter ou refuser chaque catégorie ci-dessous. Vos
            préférences sont enregistrées localement sur votre appareil et
            peuvent être modifiées à tout moment.
          </p>
          <p className="text-sm text-zinc-500">
            Conformément au{" "}
            <strong className="text-white">RGPD</strong> et à la{" "}
            <strong className="text-white">Loi 09-08 (Maroc)</strong>.
          </p>
        </div>

        <div className="space-y-6">

          {/* Cookies essentiels — toujours actifs */}
          <CookieCard
            icon={<ShieldCheck className="size-5 text-emerald-400" />}
            accent="emerald"
            title="Cookies essentiels"
            tag="Toujours actifs"
            tagColor="emerald"
            description="Indispensables au fonctionnement du site. Ils permettent la navigation sécurisée, la gestion de la session et l'accès aux fonctionnalités de base. Ils ne peuvent pas être désactivés."
            cookies={[
              { name: "session", purpose: "Maintien de la session utilisateur", duration: "Session", provider: "elouatikifreres.com" },
              { name: "__csrf", purpose: "Protection contre les attaques CSRF", duration: "Session", provider: "elouatikifreres.com" },
            ]}
            checked={true}
            disabled={true}
            onChange={() => {}}
          />

          {/* Cookies analytiques */}
          <CookieCard
            icon={<Info className="size-5 text-cyan-400" />}
            accent="cyan"
            title="Cookies analytiques"
            description="Nous permettent de mesurer l'audience et d'analyser le comportement des visiteurs (pages vues, durée de visite, provenance). Ces données sont anonymisées et ne permettent pas de vous identifier personnellement."
            cookies={[
              { name: "_ga", purpose: "Identifiant unique de visiteur Google Analytics", duration: "13 mois", provider: "Google LLC" },
              { name: "_gid", purpose: "Identifiant de session Google Analytics", duration: "24 heures", provider: "Google LLC" },
              { name: "_gat", purpose: "Limitation du taux de requêtes", duration: "1 minute", provider: "Google LLC" },
            ]}
            checked={loaded ? consent.analytics : false}
            onChange={(val) => setConsent((c) => ({ ...c, analytics: val }))}
          />

          {/* Cookies de préférences */}
          <CookieCard
            icon={<Cookie className="size-5 text-orange-400" />}
            accent="orange"
            title="Cookies de préférences"
            description="Permettent de mémoriser vos choix (langue, région, affichage) pour personnaliser votre expérience lors de vos prochaines visites."
            cookies={[
              { name: "locale", purpose: "Mémorisation de la langue choisie (fr / en / ar)", duration: "12 mois", provider: "elouatikifreres.com" },
              { name: "theme", purpose: "Préférence d'affichage", duration: "12 mois", provider: "elouatikifreres.com" },
            ]}
            checked={loaded ? consent.preferences : false}
            onChange={(val) => setConsent((c) => ({ ...c, preferences: val }))}
          />

          {/* Boutons d'action */}
          <div className="flex flex-wrap items-center gap-3 pt-4">
            <button
              type="button"
              onClick={handleAcceptAll}
              className="inline-flex items-center gap-2 rounded-xl bg-cyan-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-cyan-500"
            >
              <CheckCircle2 className="size-4" aria-hidden />
              Tout accepter
            </button>
            <button
              type="button"
              onClick={handleRefuseAll}
              className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              <XCircle className="size-4" aria-hidden />
              Tout refuser
            </button>
            <button
              type="button"
              onClick={handleSave}
              className="inline-flex items-center gap-2 rounded-xl border border-cyan-500/30 bg-cyan-500/10 px-5 py-2.5 text-sm font-semibold text-cyan-300 transition hover:bg-cyan-500/20"
            >
              <RefreshCw className="size-4" aria-hidden />
              Sauvegarder mes choix
            </button>
            {saved && (
              <span className="flex items-center gap-1.5 text-sm text-emerald-400">
                <CheckCircle2 className="size-4" aria-hidden />
                Préférences enregistrées
              </span>
            )}
          </div>

          {/* Note légale */}
          <div className="mt-8 rounded-xl border border-white/8 bg-white/3 px-5 py-4 text-sm text-zinc-500">
            <p>
              Pour plus d&apos;informations sur l&apos;utilisation de vos données, consultez
              notre{" "}
              <a
                href="/fr/politique-de-confidentialite/"
                className="text-cyan-400 underline underline-offset-2 hover:text-cyan-300"
              >
                Politique de Confidentialité
              </a>
              . Vous pouvez également paramétrer votre navigateur pour bloquer
              tous les cookies — certaines fonctionnalités du site pourraient
              alors être affectées.
            </p>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}

/* ─── Composants locaux ──────────────────────────────────────────────────── */

type CookieRow = {
  name: string;
  purpose: string;
  duration: string;
  provider: string;
};

type CookieCardProps = {
  icon: React.ReactNode;
  accent: "emerald" | "cyan" | "orange";
  title: string;
  tag?: string;
  tagColor?: "emerald";
  description: string;
  cookies: CookieRow[];
  checked: boolean;
  disabled?: boolean;
  onChange: (val: boolean) => void;
};

const accentMap = {
  emerald: {
    border: "border-emerald-500/20",
    bg: "bg-emerald-500/5",
    iconBg: "bg-emerald-500/10 border-emerald-500/20",
    toggle: "bg-emerald-500",
  },
  cyan: {
    border: "border-cyan-500/20",
    bg: "bg-cyan-500/5",
    iconBg: "bg-cyan-500/10 border-cyan-500/20",
    toggle: "bg-cyan-500",
  },
  orange: {
    border: "border-orange-500/20",
    bg: "bg-orange-500/5",
    iconBg: "bg-orange-500/10 border-orange-500/20",
    toggle: "bg-orange-500",
  },
};

function CookieCard({
  icon,
  accent,
  title,
  tag,
  description,
  cookies,
  checked,
  disabled = false,
  onChange,
}: CookieCardProps) {
  const cls = accentMap[accent];

  return (
    <div className={`rounded-2xl border ${cls.border} ${cls.bg} p-5 sm:p-6`}>
      <div className="mb-4 flex items-start justify-between gap-4">
        <div className="flex items-start gap-3">
          <div className={`mt-0.5 flex size-9 shrink-0 items-center justify-center rounded-xl border ${cls.iconBg}`}>
            {icon}
          </div>
          <div>
            <div className="flex flex-wrap items-center gap-2">
              <h2 className="font-[family-name:var(--font-space-grotesk)] text-base font-semibold text-white sm:text-lg">
                {title}
              </h2>
              {tag && (
                <span className="rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-emerald-400">
                  {tag}
                </span>
              )}
            </div>
            <p className="mt-1 text-sm text-zinc-400">{description}</p>
          </div>
        </div>

        {/* Toggle */}
        <button
          type="button"
          role="switch"
          aria-checked={checked}
          disabled={disabled}
          onClick={() => !disabled && onChange(!checked)}
          className={`relative mt-1 inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 ${
            checked ? cls.toggle : "bg-zinc-700"
          } ${disabled ? "cursor-not-allowed opacity-70" : ""}`}
        >
          <span
            className={`pointer-events-none inline-block size-5 rounded-full bg-white shadow-lg transition-transform ${
              checked ? "translate-x-5" : "translate-x-0"
            }`}
          />
        </button>
      </div>

      {/* Tableau des cookies */}
      <div className="overflow-x-auto rounded-xl border border-white/8">
        <table className="w-full text-xs">
          <thead>
            <tr className="border-b border-white/8 bg-white/5">
              {["Nom", "Finalité", "Durée", "Émetteur"].map((h) => (
                <th
                  key={h}
                  className="px-3 py-2 text-left font-semibold uppercase tracking-wider text-zinc-500"
                >
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {cookies.map((row, i) => (
              <tr
                key={i}
                className="border-b border-white/5 last:border-0 odd:bg-white/[0.02]"
              >
                <td className="px-3 py-2.5 font-mono font-medium text-white">{row.name}</td>
                <td className="px-3 py-2.5 text-zinc-400">{row.purpose}</td>
                <td className="px-3 py-2.5 text-zinc-400">{row.duration}</td>
                <td className="px-3 py-2.5 text-zinc-400">{row.provider}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
