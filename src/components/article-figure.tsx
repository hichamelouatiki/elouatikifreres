import Image from "next/image";
import type { ReactNode } from "react";

type ArticleFigureProps = {
  src: string;
  alt: string;
  caption: ReactNode;
  /** Priorité LCP (équivalent loading="eager"). */
  priority?: boolean;
  /** Variante compacte pour figures in-section. */
  compact?: boolean;
};

/**
 * Figure d'article blog avec next/image (évite no-img-element, LCP).
 * Le projet utilise `images.unoptimized: true` pour l'export statique.
 */
export function ArticleFigure({
  src,
  alt,
  caption,
  priority = false,
  compact = false,
}: ArticleFigureProps) {
  return (
    <figure
      className={
        compact
          ? "image-figure my-6 overflow-hidden rounded-2xl border border-white/10 bg-zinc-900/40 shadow-lg shadow-black/30"
          : "image-figure my-8 overflow-hidden rounded-2xl border border-white/10 bg-zinc-900/40 shadow-lg shadow-black/30 sm:my-10"
      }
    >
      <div className="relative aspect-[16/9] w-full">
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          sizes="(max-width: 1024px) 100vw, 896px"
          className="object-cover"
        />
      </div>
      <figcaption className="px-5 py-3 text-center text-sm italic text-zinc-400">
        {caption}
      </figcaption>
    </figure>
  );
}
