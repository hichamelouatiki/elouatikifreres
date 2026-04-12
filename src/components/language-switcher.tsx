"use client";

import { useLocale, useTranslations } from "next-intl";

import { Link, usePathname } from "@/i18n/navigation";
import type { AppLocale } from "@/i18n/routing";
import { routing } from "@/i18n/routing";
import { cn } from "@/lib/utils";

type LanguageSwitcherProps = {
  /** `vertical` : FR / EN / AR empilés (ex. à gauche du logo). */
  orientation?: "horizontal" | "vertical";
};

export function LanguageSwitcher({ orientation = "horizontal" }: LanguageSwitcherProps) {
  const pathname = usePathname();
  const locale = useLocale() as AppLocale;
  const t = useTranslations("Nav");
  const vertical = orientation === "vertical";

  return (
    <div
      className={cn(
        "flex rounded-lg border border-white/10 bg-white/5 font-semibold uppercase tracking-wide text-zinc-400",
        vertical ? "p-px text-[10px]" : "p-0.5 text-[11px]",
        vertical ? "flex-col items-stretch gap-px" : "items-center gap-1",
      )}
      role="navigation"
      aria-label={t("langSwitcherAria")}
    >
      {routing.locales.map((loc) => (
        <Link
          key={loc}
          href={pathname}
          locale={loc}
          className={cn(
            "rounded-md text-center transition-colors",
            vertical ? "min-w-[1.75rem] px-1 py-0.5 leading-tight" : "px-2 py-1",
            loc === locale ? "bg-cyan-500/20 text-cyan-200" : "hover:text-white",
          )}
          hrefLang={loc}
        >
          {loc === "fr" ? t("langFr") : loc === "en" ? t("langEn") : t("langAr")}
        </Link>
      ))}
    </div>
  );
}
