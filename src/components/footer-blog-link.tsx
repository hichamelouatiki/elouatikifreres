"use client";

import { useLocale, useTranslations } from "next-intl";

import { displayTextWithGroteskSafeAmpersand } from "@/components/display-text-with-safe-ampersand";
import { blogListingPath } from "@/i18n/blog-routes";
import { Link } from "@/i18n/navigation";
import type { AppLocale } from "@/i18n/routing";

type Props = {
  className?: string;
};

export function FooterBlogLink({ className }: Props) {
  const locale = useLocale() as AppLocale;
  const t = useTranslations("Blog");
  return (
    <Link className={className} href={blogListingPath(locale)}>
      {displayTextWithGroteskSafeAmpersand(t("title"))}
    </Link>
  );
}
