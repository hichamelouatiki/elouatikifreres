export { default, generateMetadata } from "../../blog-et-actualites/enveloppes-haute-performance/page";

export function generateStaticParams() {
  return [{ locale: "en" }];
}
