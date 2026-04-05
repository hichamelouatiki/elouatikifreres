import Image from "next/image";

import { cn } from "@/lib/utils";

/**
 * Source canonique : `media/Logo/logo.png` — copie déployée dans `public/images/logo.png`.
 */
export const SITE_LOGO_SRC = "/images/logo.png";

/** Dimensions intrinsèques du PNG (pour `next/image` et métadonnées OG). */
export const SITE_LOGO_INTRINSIC = { width: 862, height: 669 } as const;

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
      className={cn("h-auto w-auto object-contain", className)}
      priority={priority}
    />
  );
}
