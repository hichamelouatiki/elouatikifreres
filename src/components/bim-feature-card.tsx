"use client";

/**
 * Carte « Conception Intelligente & BIM » + drawer dédié (visuel clash).
 * Même pattern que LogisticsFeatureCard pour cohérence d’équipe.
 */

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "framer-motion";
import { Blocks, ChevronRight, Layers, Ruler, ShieldCheck, X } from "lucide-react";

import { FadeUp } from "@/components/fade-up";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

import { BimClashVisual } from "@/components/bim-clash-visual";

export type BimFeatureCardProps = {
  open: boolean;
  onOpen: () => void;
  onClose: () => void;
  animationDelay?: number;
};

export function BimFeatureCard({
  open,
  onOpen,
  onClose,
  animationDelay = 0,
}: BimFeatureCardProps) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    const id = requestAnimationFrame(() => setMounted(true));
    return () => cancelAnimationFrame(id);
  }, []);

  const drawer = (
    <AnimatePresence>
      {open ? (
        <>
          <motion.button
            type="button"
            aria-label="Fermer le panneau BIM"
            className="fixed inset-0 z-[100] bg-black/45 backdrop-blur-xl backdrop-saturate-150"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />
          <motion.aside
            role="dialog"
            aria-modal="true"
            aria-labelledby="bim-drawer-title"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 220, damping: 26 }}
            className="fixed right-0 top-0 z-[101] flex h-full w-full max-w-[600px] flex-col overflow-y-auto border-l border-white/10 bg-zinc-950/95 px-5 py-8 shadow-2xl backdrop-blur-md sm:px-6"
          >
            <div className="mb-6 flex justify-end">
              <button
                type="button"
                className="rounded-full border border-white/10 p-3 text-zinc-400 transition hover:text-white"
                onClick={onClose}
              >
                <X className="size-5" aria-hidden />
              </button>
            </div>

            <div className="relative mb-8 aspect-video w-full overflow-hidden rounded-2xl bg-zinc-950 ring-1 ring-white/10">
              <BimClashVisual />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-zinc-950/85 via-transparent to-transparent" />
              <div className="absolute left-3 top-3 sm:left-4 sm:top-4">
                <span className="inline-flex items-center rounded-full border border-cyan-500/40 bg-cyan-500/15 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-cyan-100 backdrop-blur-md sm:text-xs">
                  Détection de conflits BIM active
                </span>
              </div>
            </div>

            <div className="mb-8 space-y-4">
              <h3
                id="bim-drawer-title"
                className="font-[family-name:var(--font-space-grotesk)] text-2xl font-bold leading-tight text-white sm:text-3xl"
              >
                Simulateur Clash Detection
              </h3>
              <p className="text-base leading-relaxed text-zinc-400">
                Maquette numérique, détection de conflits et arbitrages data dès la conception pour
                sécuriser coûts et délais.
              </p>
            </div>

            <ul className="mb-8 space-y-5">
              <li className="flex gap-4">
                <div className="flex size-11 shrink-0 items-center justify-center rounded-xl border border-cyan-500/30 bg-cyan-500/10">
                  <Layers className="size-5 text-cyan-400" aria-hidden />
                </div>
                <p className="font-semibold text-white">
                  Modèles fédérés :{" "}
                  <span className="font-normal text-zinc-400">
                    Agrégation multi-lots avec règles de collision automatiques avant exécution.
                  </span>
                </p>
              </li>
              <li className="flex gap-4">
                <div className="flex size-11 shrink-0 items-center justify-center rounded-xl border border-orange-500/30 bg-orange-500/10">
                  <Ruler className="size-5 text-orange-400" aria-hidden />
                </div>
                <p className="font-semibold text-white">
                  Quantités & coûts :{" "}
                  <span className="font-normal text-zinc-400">
                    Extraction BIM reliée aux bordereaux pour suivre l&apos;écart budget / réalisé.
                  </span>
                </p>
              </li>
              <li className="flex gap-4">
                <div className="flex size-11 shrink-0 items-center justify-center rounded-xl border border-green-500/30 bg-green-500/10">
                  <ShieldCheck className="size-5 text-green-400" aria-hidden />
                </div>
                <p className="font-semibold text-white">
                  Conformité :{" "}
                  <span className="font-normal text-zinc-400">
                    Scénarios de reprise et preuves numériques pour la coordination MOEX / entreprises.
                  </span>
                </p>
              </li>
            </ul>

            <div className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
              {[
                { value: "−15%", label: "Dépassement budget" },
                { value: "100%", label: "Conflits résolus" },
                { value: "0", label: "Jour de retard" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-[20px] border border-white/10 bg-white/5 p-4 text-center sm:text-left"
                >
                  <p className="text-2xl font-bold text-cyan-400 sm:text-3xl">{stat.value}</p>
                  <p className="mt-1 text-sm text-zinc-400">{stat.label}</p>
                </div>
              ))}
            </div>

            <Button type="button" variant="default" size="lg" className="w-full" onClick={onClose}>
              Lancer la simulation BIM
            </Button>
          </motion.aside>
        </>
      ) : null}
    </AnimatePresence>
  );

  return (
    <>
      <li>
        <FadeUp inView delay={animationDelay}>
          <Card
            className={cn(
              "group cursor-pointer overflow-hidden border border-cyan-400/30 p-1 transition-[transform,box-shadow,border-color] duration-300 hover:-translate-y-1",
              "border-white/10 bg-zinc-900/35 hover:border-cyan-400/45 hover:shadow-[0_0_32px_rgba(34,211,238,0.12),inset_0_0_0_1px_rgba(34,211,238,0.08)]",
            )}
            onClick={onOpen}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                onOpen();
              }
            }}
            role="button"
            tabIndex={0}
          >
            <div className="h-full rounded-[24px] bg-gradient-to-br from-cyan-400/25 to-transparent p-6">
              <CardHeader className="px-0 pt-0">
                <div className="mb-4 inline-flex size-12 items-center justify-center rounded-2xl border border-cyan-400/30 bg-black/30">
                  <Blocks className="size-5 text-cyan-400" aria-hidden />
                </div>
                <CardTitle>Conception Intelligente & BIM</CardTitle>
                <CardDescription>
                  Maquette numérique, détection de conflits et arbitrages data dès la conception pour
                  sécuriser coûts et délais.
                </CardDescription>
              </CardHeader>
              <CardContent className="flex items-center justify-between px-0 pb-0">
                <span className="text-sm text-zinc-500">Ouvrir le détail</span>
                <ChevronRight
                  className="size-5 text-cyan-400 transition-transform group-hover:translate-x-1"
                  aria-hidden
                />
              </CardContent>
            </div>
          </Card>
        </FadeUp>
      </li>
      {mounted ? createPortal(drawer, document.body) : null}
    </>
  );
}
