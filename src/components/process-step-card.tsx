"use client";

/**
 * Carte d’étape du processus « Notre méthode ».
 * Au survol : bordure légèrement illuminée (glow discret).
 */

import type { ReactNode } from "react";

import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

export type ProcessStepCardProps = {
  title: string;
  description: string;
  /** Icône ou numéro d’étape (optionnel). */
  decoration?: ReactNode;
};

export function ProcessStepCard({
  title,
  description,
  decoration,
}: ProcessStepCardProps) {
  return (
    <Card
      className={cn(
        "group h-full overflow-hidden border border-white/10 bg-zinc-900/35 p-0 shadow-none transition-[border-color,box-shadow] duration-300",
        "hover:border-cyan-400/45 hover:shadow-[0_0_32px_rgba(34,211,238,0.12),inset_0_0_0_1px_rgba(34,211,238,0.08)]",
      )}
    >
      <div className="p-6 sm:p-7">
        {decoration ? (
          <div className="mb-4 text-cyan-400/90 [&_svg]:size-6">{decoration}</div>
        ) : null}
        <CardHeader className="space-y-3 p-0">
          <CardTitle className="text-lg sm:text-xl">{title}</CardTitle>
          <CardDescription className="text-base leading-relaxed">
            {description}
          </CardDescription>
        </CardHeader>
      </div>
    </Card>
  );
}
