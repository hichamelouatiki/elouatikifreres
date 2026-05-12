import type { AppLocale } from "@/i18n/routing";

/** Segment de liste : anglais `/blog-and-news/`, autres langues `/blog-et-actualites/`. */
export function blogListingPath(locale: AppLocale): "/blog-et-actualites" | "/blog-and-news" {
  return locale === "en" ? "/blog-and-news" : "/blog-et-actualites";
}

export function blogArticlePath(locale: AppLocale, slug: string): string {
  return `${blogListingPath(locale)}/${slug}`;
}

/**
 * Harmonise le segment blog entre locales (sélecteur de langue — évite /fr/blog-and-news inexistant).
 */
export function blogPathForLocaleSwitcher(pathname: string, targetLocale: AppLocale): string {
  const isBlogMirror =
    pathname === "/blog-and-news" || pathname.startsWith("/blog-and-news/");
  const isBlogFr =
    pathname === "/blog-et-actualites" ||
    pathname.startsWith("/blog-et-actualites/");

  if (targetLocale === "en") {
    if (isBlogFr) {
      return pathname.replace("/blog-et-actualites", "/blog-and-news");
    }
  } else if (isBlogMirror) {
    return pathname.replace("/blog-and-news", "/blog-et-actualites");
  }
  return pathname;
}
