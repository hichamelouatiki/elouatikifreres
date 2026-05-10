"use client";

import { Clock } from "lucide-react";
import Image from "next/image";
import { useMemo, useState } from "react";
import { useTranslations } from "next-intl";

import {
  BLOG_CATEGORY_IDS,
  type BlogArticleCard,
  type BlogCategoryId,
} from "@/data/blog-articles";
import { Link } from "@/i18n/navigation";

type FilterValue = "ALL" | BlogCategoryId;

function categoryBadgeClass(category: BlogCategoryId): string {
  switch (category) {
    case "IA":
      return "border-violet-400/35 bg-violet-500/15 text-violet-200";
    case "BATIMENT":
      return "border-amber-400/35 bg-amber-500/15 text-amber-100";
    case "BIM":
      return "border-cyan-400/40 bg-cyan-500/15 text-cyan-200";
    case "INNOVATION":
      return "border-emerald-400/35 bg-emerald-500/15 text-emerald-200";
    case "TECH":
      return "border-sky-400/35 bg-sky-500/15 text-sky-200";
  }
}

function filterButtonClass(active: boolean): string {
  if (active) {
    return "border-cyan-400/50 bg-cyan-500/20 text-white shadow-md shadow-cyan-500/10";
  }
  return "border-white/10 bg-white/5 text-zinc-300 hover:border-white/20 hover:bg-white/10 hover:text-white";
}

type Props = {
  articles: BlogArticleCard[];
};

export function BlogNewsView({ articles }: Props) {
  const t = useTranslations("Blog");
  const [filter, setFilter] = useState<FilterValue>("ALL");

  const filtered = useMemo(() => {
    if (filter === "ALL") return articles;
    return articles.filter((a) => a.category === filter);
  }, [articles, filter]);

  const filters: { value: FilterValue; label: string }[] = [
    { value: "ALL", label: t("filterAll") },
    ...BLOG_CATEGORY_IDS.map((id) => ({
      value: id,
      label: t(`categories.${id}`),
    })),
  ];

  return (
    <div className="mx-auto max-w-7xl px-5 pb-20 pt-10 sm:px-8 sm:pb-24 sm:pt-14 lg:px-12">
      <header className="mb-10 max-w-3xl space-y-4 sm:mb-14">
        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-400">
          {t("eyebrow")}
        </p>
        <h1 className="font-[family-name:var(--font-space-grotesk)] text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl">
          {t("title")}
        </h1>
        <p className="text-base leading-relaxed text-zinc-400 sm:text-lg">{t("subtitle")}</p>
      </header>

      <div
        className="mb-10 flex flex-wrap gap-2 sm:gap-3"
        role="group"
        aria-label={t("filterAria")}
      >
        {filters.map(({ value, label }) => (
          <button
            key={value}
            type="button"
            onClick={() => setFilter(value)}
            className={`rounded-full border px-4 py-2 text-sm font-semibold transition ${filterButtonClass(filter === value)}`}
            aria-pressed={filter === value}
          >
            {label}
          </button>
        ))}
      </div>

      {filtered.length === 0 ? (
        <p className="rounded-2xl border border-white/10 bg-zinc-900/40 px-6 py-12 text-center text-zinc-400">
          {t("empty")}
        </p>
      ) : (
        <div
          id="blog-grid"
          className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3"
        >
          {filtered.map((article) => (
            <article
              key={article.id}
              id={article.id}
              className="group flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-zinc-900/45 shadow-xl shadow-black/20 transition duration-300 hover:-translate-y-1 hover:border-cyan-500/25 hover:shadow-cyan-500/5"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-zinc-800">
                <Image
                  src={article.imageSrc}
                  alt=""
                  fill
                  className="object-cover transition duration-500 group-hover:scale-[1.03]"
                  sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw"
                />
                <div
                  className="pointer-events-none absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-transparent to-transparent"
                  aria-hidden
                />
              </div>

              <div className="flex flex-1 flex-col gap-4 p-5 sm:p-6">
                <span
                  className={`w-fit rounded-full border px-3 py-1 text-xs font-semibold uppercase tracking-wider ${categoryBadgeClass(article.category)}`}
                >
                  {t(`categories.${article.category}`)}
                </span>

                <h2 className="font-[family-name:var(--font-space-grotesk)] text-xl font-semibold leading-snug text-white sm:text-[1.35rem]">
                  {article.title}
                </h2>

                <p className="flex-1 text-sm leading-relaxed text-zinc-400 sm:text-base">
                  {article.excerpt}
                </p>

                {article.readingMinutes ? (
                  <p className="inline-flex items-center gap-1.5 text-xs font-medium text-zinc-500">
                    <Clock className="size-3.5" aria-hidden />
                    {t("readingTime", { minutes: article.readingMinutes })}
                  </p>
                ) : null}

                <Link
                  href={
                    article.slug
                      ? `/blog-et-actualites/${article.slug}`
                      : "/#contact"
                  }
                  className="inline-flex w-fit items-center gap-2 rounded-xl border border-cyan-500/40 bg-cyan-500/10 px-4 py-2.5 text-sm font-semibold text-cyan-200 transition hover:border-cyan-400/60 hover:bg-cyan-500/20 hover:text-white"
                >
                  {t("readMore")}
                  <span aria-hidden className="transition-transform group-hover:translate-x-0.5">
                    →
                  </span>
                </Link>
              </div>
            </article>
          ))}
        </div>
      )}
    </div>
  );
}
