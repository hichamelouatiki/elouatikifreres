import type { ReactNode } from "react";

/** U+0026 et esperluette pleine largeur (copier-coller depuis Word, etc.) */
const AMPERSAND_SPLIT_RE = /(&|＆)/g;

/**
 * Space Grotesk peut retomber sur une police serif pour « & ».
 * On isole le glyphe dans `.space-grotesk-safe-amp` (Inter forcée, voir globals.css).
 */
export function displayTextWithGroteskSafeAmpersand(
  text: string,
  weightClass: "" | "font-semibold" | "font-bold" = "",
): ReactNode {
  if (!text.includes("&") && !text.includes("＆")) {
    return text;
  }

  return text.split(AMPERSAND_SPLIT_RE).map((segment, idx) => {
    if (segment === "&" || segment === "＆") {
      return (
        <span key={`amp-${idx.toString()}`} className={["space-grotesk-safe-amp text-inherit", weightClass].filter(Boolean).join(" ")}>
          {/* Toujours afficher U+0026 : l’esperluette pleine largeur vient souvent du collage bureautique. */}
          &
        </span>
      );
    }
    return segment;
  });
}
