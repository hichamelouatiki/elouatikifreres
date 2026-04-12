import Image from "next/image";

import { cn } from "@/lib/utils";

/**
 * Logo principal (header, footer, favicon / OG via `layout.tsx`).
 * Fichier attendu : `public/images/logo_header.png`.
 */
export const SITE_LOGO_SRC = "/images/logo_header.png";

/** Dimensions réelles du fichier PNG (métadonnées OG / ratio de référence). */
export const SITE_LOGO_INTRINSIC = { width: 402, height: 413 } as const;

/** Taille d’affichage header : hauteur inférieure à la barre `h-16` (64px) pour éviter rognage / débordement. */
export const SITE_LOGO_HEADER_DISPLAY = {
  height: 48,
  width: Math.round((48 * SITE_LOGO_INTRINSIC.width) / SITE_LOGO_INTRINSIC.height),
} as const;

/** Footer : un peu plus grand que le header, toujours en dimensions explicites. */
export const SITE_LOGO_FOOTER_DISPLAY = {
  width: 160,
  height: Math.round((160 * SITE_LOGO_INTRINSIC.height) / SITE_LOGO_INTRINSIC.width),
} as const;

type SiteLogoProps = {
  className?: string;
  width?: number;
  height?: number;
  priority?: boolean;
};

export function SiteLogo({
  className,
  width = SITE_LOGO_INTRINSIC.width,
  height = SITE_LOGO_INTRINSIC.height,
  priority = false,
}: SiteLogoProps) {
  return (
    <Image
      src={SITE_LOGO_SRC}
      alt="El Ouatiki Frères — logo"
      width={width}
      height={height}
      sizes={`${width}px`}
      className={cn(
        "block h-auto max-h-full w-auto max-w-full shrink-0 object-contain object-left",
        className,
      )}
      priority={priority}
    />
  );
}
