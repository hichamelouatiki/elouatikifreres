import type { Metadata } from "next";
import { ArrowLeft } from "lucide-react";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";

import { IaChantierArticle } from "@/components/ia-chantier-article";
import { SiteFooter } from "@/components/site-footer";
import { getArticleBySlug } from "@/data/blog-articles";
import { blogListingPath } from "@/i18n/blog-routes";
import { Link } from "@/i18n/navigation";
import { isValidLocale, type AppLocale } from "@/i18n/routing";

const ARTICLE_SLUG = "ia-chantier-vision-ordinateur";

type Props = {
  params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
  return [{ locale: "fr" }, { locale: "en" }, { locale: "ar" }];
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  if (!isValidLocale(locale)) {
    return {};
  }

  const article = getArticleBySlug(ARTICLE_SLUG, locale as AppLocale);
  if (!article) return {};

  return {
    title: article.title,
    description: article.excerpt,
    openGraph: {
      title: article.title,
      description: article.excerpt,
      type: "article",
      images: [{ url: article.imageSrc }],
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.excerpt,
      images: [article.imageSrc],
    },
  };
}

export default async function IaChantierVisionOrdinateurPage({
  params,
}: Props) {
  const { locale } = await params;

  if (!isValidLocale(locale)) {
    notFound();
  }

  setRequestLocale(locale);

  const article = getArticleBySlug(ARTICLE_SLUG, locale as AppLocale);
  if (!article) {
    notFound();
  }

  // AR -> on affiche la page en anglais (cf. spec produit).
  // Tous les libellés UI annexes (« Retour au blog ») doivent donc être en EN.
  const uiLocale: AppLocale = locale === "ar" ? "en" : (locale as AppLocale);
  const t = await getTranslations({ locale: uiLocale, namespace: "Blog" });

  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-100">
      <div
        className="mx-auto max-w-4xl px-5 pt-10 sm:px-8 sm:pt-14 lg:px-12"
        dir={locale === "ar" ? "ltr" : undefined}
      >
        <Link
          href={blogListingPath(locale as AppLocale)}
          className="inline-flex items-center gap-2 text-sm font-medium text-cyan-300 transition hover:text-cyan-200"
        >
          <ArrowLeft className="size-4" aria-hidden />
          {t("backToBlog")}
        </Link>
      </div>

      <IaChantierArticle />
      <SiteFooter />
    </main>
  );
}
