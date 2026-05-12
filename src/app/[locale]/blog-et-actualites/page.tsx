import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import {
  getMessages,
  getTranslations,
  setRequestLocale,
} from "next-intl/server";
import { notFound } from "next/navigation";

import { BlogNewsView } from "@/components/blog-news-view";
import { SiteFooter } from "@/components/site-footer";
import { getBlogArticles } from "@/data/blog-articles";
import { isValidLocale, type AppLocale } from "@/i18n/routing";
import en from "../../../../messages/en.json";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateStaticParams() {
  return [{ locale: "fr" }, { locale: "en" }, { locale: "ar" }];
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  if (!isValidLocale(locale)) {
    return {};
  }

  const blogUiLocale: AppLocale =
    locale === "ar" ? "en" : (locale as AppLocale);
  const t = await getTranslations({ locale: blogUiLocale, namespace: "Blog" });
  return {
    title: t("metaTitle"),
    description: t("metaDescription"),
  };
}

export default async function BlogEtActualitesPage({ params }: Props) {
  const { locale } = await params;

  if (!isValidLocale(locale)) {
    notFound();
  }

  setRequestLocale(locale);

  const articles = getBlogArticles(locale as AppLocale);
  const messages = await getMessages();
  const blogListingMessages =
    locale === "ar" ? { ...messages, Blog: en.Blog } : messages;

  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-100">
      <NextIntlClientProvider messages={blogListingMessages}>
        <BlogNewsView articles={articles} />
      </NextIntlClientProvider>
      <SiteFooter />
    </main>
  );
}
