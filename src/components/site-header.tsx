"use client";

import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";

import { LanguageSwitcher } from "@/components/language-switcher";
import { SiteLogo, SITE_LOGO_HEADER_DISPLAY } from "@/components/site-logo";
import { Link } from "@/i18n/navigation";

/** Largeur mini pour considérer l’affichage « bureau » (ex. fenêtre 1024×720). */
const DESKTOP_MIN_WIDTH_PX = 1024;

const NAV_LINKS = [
  { href: "/#methodologie", labelKey: "methodologie" as const },
  { href: "/#consulting", labelKey: "consulting" as const },
  { href: "/#histoire", labelKey: "histoire" as const },
] as const;

/** Icône menu : trois traits (fermé) ; croix (panneau ouvert). */
function HamburgerIcon({ open }: { open: boolean }) {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="text-white"
      aria-hidden
    >
      {open ? (
        <path
          d="M6 6l12 12M18 6L6 18"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      ) : (
        <>
          <path d="M4 7h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          <path d="M4 12h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          <path d="M4 17h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </>
      )}
    </svg>
  );
}

export function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const t = useTranslations("Header");

  useEffect(() => {
    const mq = window.matchMedia(`(min-width: ${DESKTOP_MIN_WIDTH_PX}px)`);
    const onChange = () => {
      if (mq.matches) setMobileOpen(false);
    };
    mq.addEventListener("change", onChange);
    onChange();
    return () => mq.removeEventListener("change", onChange);
  }, []);

  return (
    <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-zinc-950/80 backdrop-blur-md supports-[backdrop-filter]:bg-zinc-950/70">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-3 overflow-hidden px-4 md:px-6 min-[1024px]:gap-4 min-[1024px]:px-8">
        <div className="flex min-h-0 min-w-0 max-h-full shrink-0 items-center gap-2 overflow-hidden sm:gap-3">
          <LanguageSwitcher orientation="vertical" />
          <Link
            href="/"
            className="flex h-11 max-h-11 shrink-0 items-center overflow-hidden leading-none sm:h-12 sm:max-h-12"
            aria-label={t("homeAria")}
            onClick={() => setMobileOpen(false)}
          >
            <SiteLogo
              priority
              width={SITE_LOGO_HEADER_DISPLAY.width}
              height={SITE_LOGO_HEADER_DISPLAY.height}
              className="h-full max-h-full w-auto max-w-[min(9rem,46vw)] object-contain object-left"
            />
          </Link>
        </div>

        {/* Bureau : largeur ≥ 1024px — menu horizontal complet */}
        <nav
          className="hidden min-[1024px]:flex items-center gap-8 text-sm font-medium text-zinc-300"
          aria-label={t("mainNav")}
        >
          {NAV_LINKS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="transition-colors hover:text-white"
            >
              {t(item.labelKey)}
            </Link>
          ))}
          <Link
            href="/#contact"
            className="rounded-xl bg-cyan-500 px-4 py-2 text-sm font-semibold text-zinc-950 shadow-md shadow-cyan-500/20 transition hover:bg-cyan-400"
          >
            {t("contact")}
          </Link>
        </nav>

        {/* Sous 1024px de large : uniquement le bouton hamburger */}
        <div className="min-[1024px]:hidden">
          <button
            type="button"
            className="inline-flex size-10 items-center justify-center rounded-lg text-white transition hover:bg-white/10"
            aria-label={mobileOpen ? t("closeMenu") : t("openMenu")}
            aria-expanded={mobileOpen}
            aria-controls="site-header-mobile-nav"
            onClick={() => setMobileOpen((o) => !o)}
          >
            <HamburgerIcon open={mobileOpen} />
          </button>
        </div>
      </div>

      {mobileOpen ? (
        <div
          className="border-t border-white/10 bg-zinc-950/95 px-4 py-4 backdrop-blur-md min-[1024px]:hidden"
          id="site-header-mobile-nav"
        >
          <nav className="flex flex-col gap-1" aria-label={t("mobileNav")}>
            {NAV_LINKS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-lg px-3 py-2.5 text-sm font-medium text-zinc-200 transition hover:bg-white/5 hover:text-white"
                onClick={() => setMobileOpen(false)}
              >
                {t(item.labelKey)}
              </Link>
            ))}
            <Link
              href="/#contact"
              className="mt-2 inline-flex items-center justify-center rounded-xl bg-cyan-500 px-4 py-3 text-sm font-semibold text-zinc-950 shadow-sm shadow-cyan-500/20 transition hover:bg-cyan-400"
              onClick={() => setMobileOpen(false)}
            >
              {t("contact")}
            </Link>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
