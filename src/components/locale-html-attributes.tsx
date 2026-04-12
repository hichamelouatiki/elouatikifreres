"use client";

import { useLayoutEffect } from "react";

import type { AppLocale } from "@/i18n/routing";

type Props = {
  locale: AppLocale;
};

/** Met à jour `lang` et `dir` sur `<html>` selon la locale (RTL pour l’arabe). */
export function LocaleHtmlAttributes({ locale }: Props) {
  useLayoutEffect(() => {
    document.documentElement.lang = locale;
    document.documentElement.dir = locale === "ar" ? "rtl" : "ltr";
  }, [locale]);

  return null;
}
