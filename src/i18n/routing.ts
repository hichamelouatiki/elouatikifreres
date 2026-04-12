import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["fr", "en", "ar"],
  defaultLocale: "fr",
  /** Export statique : préfixe obligatoire, pas de négociation Accept-Language côté serveur */
  localePrefix: "always",
  localeDetection: false,
});

export type AppLocale = (typeof routing.locales)[number];

export function isValidLocale(locale: string | undefined): locale is AppLocale {
  return locale !== undefined && (routing.locales as readonly string[]).includes(locale);
}
