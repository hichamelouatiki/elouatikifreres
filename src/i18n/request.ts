import { getRequestConfig } from "next-intl/server";

import ar from "../../messages/ar.json";
import en from "../../messages/en.json";
import fr from "../../messages/fr.json";

import { isValidLocale, routing, type AppLocale } from "./routing";

const messagesByLocale: Record<AppLocale, typeof fr> = {
  fr,
  en,
  ar,
};

export default getRequestConfig(async ({ requestLocale }) => {
  const requested = await requestLocale;
  const locale = isValidLocale(requested) ? requested : routing.defaultLocale;

  return {
    locale,
    messages: messagesByLocale[locale],
  };
});
