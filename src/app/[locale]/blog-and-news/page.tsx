/** Route miroir anglaise : même contenu, exporté uniquement pour `en` (évite /fr/blog-and-news en double). */
export { default, generateMetadata } from "../blog-et-actualites/page";

export function generateStaticParams() {
  return [{ locale: "en" }];
}
