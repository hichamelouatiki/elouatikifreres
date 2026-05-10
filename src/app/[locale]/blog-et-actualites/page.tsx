import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";

import { BlogNewsView } from "@/components/blog-news-view";
import { SiteFooter } from "@/components/site-footer";
import { getBlogArticles } from "@/data/blog-articles";
import { isValidLocale, type AppLocale } from "@/i18n/routing";

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

  const t = await getTranslations({ locale, namespace: "Blog" });
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

  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-100">
      <BlogNewsView articles={articles} />
      <SiteFooter />
    </main>
  );
}
