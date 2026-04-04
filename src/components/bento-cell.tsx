"use client";

/**
 * Tuile pour la grille Bento : bloc texte ou placeholder visuel.
 */

import type { ReactNode } from "react";
import { motion } from "framer-motion";

import { cn } from "@/lib/utils";

export type BentoCellProps = {
  /** Positionnement sur la grande grille (desktop). */
  gridClassName: string;
  /** Contenu texte (titres, paragraphes). */
  children?: ReactNode;
  /** Si vrai, affiche un bloc image placeholder (gris foncé). */
  visual?: boolean;
  /** Libellé d’accessibilité pour les blocs visuels. */
  visualLabel?: string;
  index?: number;
};

export function BentoCell({
  gridClassName,
  children,
  visual = false,
  visualLabel = "Visuel projet — image à venir",
  index = 0,
}: BentoCellProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.55, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        "relative min-h-[200px] overflow-hidden rounded-[28px] border border-white/10",
        visual
          ? "bg-zinc-800"
          : "glass-panel",
        gridClassName,
      )}
    >
      {visual ? (
        <div
          className="flex h-full min-h-[220px] flex-col items-center justify-center gap-3 p-6 sm:min-h-[260px]"
          role="img"
          aria-label={visualLabel}
        >
          {/* Placeholder jusqu’aux vraies photos */}
          <div className="h-full w-full rounded-2xl bg-gradient-to-br from-zinc-800 via-zinc-900 to-zinc-950 ring-1 ring-inset ring-white/5" />
          <span className="sr-only">{visualLabel}</span>
        </div>
      ) : (
        <div className="flex h-full flex-col justify-between gap-6 p-6 sm:p-8">
          {children}
        </div>
      )}
    </motion.article>
  );
}
