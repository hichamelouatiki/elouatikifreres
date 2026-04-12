import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, getTranslations, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";

import { LocaleHtmlAttributes } from "@/components/locale-html-attributes";
import { SiteHeader } from "@/components/site-header";
import { SITE_LOGO_INTRINSIC, SITE_LOGO_SRC } from "@/components/site-logo";
import { isValidLocale, routing } from "@/i18n/routing";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  if (!isValidLocale(locale)) {
    return {};
  }

  const t = await getTranslations({ locale, namespace: "Metadata" });
  const title = t("title");
  const description = t("description");
  const ogLocale = t("ogLocale");
  const brandAlt = t("brandAlt");

  return {
    metadataBase: new URL("https://elouatikifreres.com"),
    title,
    description,
    openGraph: {
      title,
      description,
      locale: ogLocale,
      type: "website",
      images: [
        {
          url: SITE_LOGO_SRC,
          width: SITE_LOGO_INTRINSIC.width,
          height: SITE_LOGO_INTRINSIC.height,
          alt: brandAlt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [SITE_LOGO_SRC],
    },
    icons: {
      icon: SITE_LOGO_SRC,
    },
    alternates: {
      languages: {
        fr: "/fr/",
        en: "/en/",
        ar: "/ar/",
      },
    },
  };
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;

  if (!isValidLocale(locale)) {
    notFound();
  }

  setRequestLocale(locale);
  const messages = await getMessages();

  return (
    <NextIntlClientProvider messages={messages}>
      <LocaleHtmlAttributes locale={locale} />
      <SiteHeader />
      <div className="flex flex-1 flex-col pt-16">{children}</div>
    </NextIntlClientProvider>
  );
}
