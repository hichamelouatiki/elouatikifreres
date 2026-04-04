"use client";

/**
 * Carte « Pilotage & Logistique » + panneau latéral riche (Gantt / flux animé).
 * Le drawer est rendu via portail pour rester conforme au DOM (ul > li uniquement).
 */

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "framer-motion";
import { BarChart3, ChevronRight, Package, RefreshCw, TrafficCone, X } from "lucide-react";

import { FadeUp } from "@/components/fade-up";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

import { LogisticsFlowVisual } from "@/components/logistics-flow-visual";

export type LogisticsFeatureCardProps = {
  open: boolean;
  onOpen: () => void;
  onClose: () => void;
  animationDelay?: number;
};

export function LogisticsFeatureCard({
  open,
  onOpen,
  onClose,
  animationDelay = 0,
}: LogisticsFeatureCardProps) {
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
            aria-label="Fermer le panneau logistique"
            className="fixed inset-0 z-[100] bg-black/45 backdrop-blur-xl backdrop-saturate-150"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />
          <motion.aside
            role="dialog"
            aria-modal="true"
            aria-labelledby="logistics-drawer-title"
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

            {/* 1. Header visuel 16:9 */}
            <div className="relative mb-8 aspect-video w-full overflow-hidden rounded-2xl bg-zinc-950 ring-1 ring-white/10">
              <LogisticsFlowVisual />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-transparent to-transparent" />
              <div className="absolute left-3 top-3 sm:left-4 sm:top-4">
                <span className="inline-flex items-center rounded-full border border-orange-500/40 bg-orange-500/15 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-orange-200 backdrop-blur-md sm:text-xs">
                  Synchronisation Logistique IA Active
                </span>
              </div>
            </div>

            {/* 2. Accroche */}
            <div className="mb-8 space-y-4">
              <h3
                id="logistics-drawer-title"
                className="font-[family-name:var(--font-space-grotesk)] text-2xl font-bold leading-tight text-white sm:text-3xl"
              >
                Le bon matériau, au bon endroit, à la seconde près.
              </h3>
              <p className="text-base leading-relaxed text-zinc-400">
                Sur un chantier traditionnel, 30% du temps est perdu à attendre. Notre IA connecte
                votre chaîne d&apos;approvisionnement directement à l&apos;avancement réel du
                terrain.
              </p>
            </div>

            {/* 3. Avantages */}
            <ul className="mb-8 space-y-5">
              <li className="flex gap-4">
                <div className="flex size-11 shrink-0 items-center justify-center rounded-xl border border-orange-500/30 bg-orange-500/10">
                  <TrafficCone className="size-5 text-orange-400" aria-hidden />
                </div>
                <div>
                  <p className="font-semibold text-white">
                    Prévision des goulots :{" "}
                    <span className="font-normal text-zinc-400">
                      L&apos;algorithme anticipe les conflits de co-activité et la saturation des
                      équipements des jours à l&apos;avance.
                    </span>
                  </p>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="flex size-11 shrink-0 items-center justify-center rounded-xl border border-cyan-500/30 bg-cyan-500/10">
                  <Package className="size-5 text-cyan-400" aria-hidden />
                </div>
                <div>
                  <p className="font-semibold text-white">
                    Flux Juste-à-Temps :{" "}
                    <span className="font-normal text-zinc-400">
                      Déclenchement des livraisons exactement quand l&apos;équipe est prête.
                      Réduction massive du gaspillage matériel.
                    </span>
                  </p>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="flex size-11 shrink-0 items-center justify-center rounded-xl border border-green-500/30 bg-green-500/10">
                  <RefreshCw className="size-5 text-green-400" aria-hidden />
                </div>
                <div>
                  <p className="font-semibold text-white">
                    Planning Dynamique :{" "}
                    <span className="font-normal text-zinc-400">
                      En cas d&apos;imprévu (météo, retard), l&apos;IA recalcule le chemin critique
                      et réaffecte les équipes instantanément.
                    </span>
                  </p>
                </div>
              </li>
            </ul>

            {/* 4. Data points */}
            <div className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
              {[
                { value: "−30%", label: "Coûts de stockage" },
                { value: "+20%", label: "Productivité" },
                { value: "0", label: "Temps mort" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-[20px] border border-white/10 bg-white/5 p-4 text-center sm:text-left"
                >
                  <p className="text-2xl font-bold text-orange-400 sm:text-3xl">{stat.value}</p>
                  <p className="mt-1 text-sm text-zinc-400">{stat.label}</p>
                </div>
              ))}
            </div>

            {/* 5. CTA */}
            <Button
              type="button"
              variant="orange"
              size="lg"
              className="w-full hover:bg-orange-600"
              onClick={onClose}
            >
              Voir une démo du pilotage temps réel
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
              "group cursor-pointer overflow-hidden border border-orange-500/30 p-1 transition-[transform,box-shadow,border-color] duration-300 hover:-translate-y-1",
              "border-white/10 bg-zinc-900/35 hover:border-orange-400/55 hover:shadow-[0_0_32px_rgba(249,115,22,0.15),inset_0_0_0_1px_rgba(249,115,22,0.1)]",
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
            <div className="h-full rounded-[24px] bg-gradient-to-br from-orange-500/25 to-transparent p-6">
              <CardHeader className="px-0 pt-0">
                <div className="mb-4 inline-flex size-12 items-center justify-center rounded-2xl border border-orange-500/30 bg-black/30">
                  <BarChart3 className="size-5 text-orange-400" aria-hidden />
                </div>
                <CardTitle>Pilotage & Logistique Data</CardTitle>
                <CardDescription>
                  Ordonnancement fin, flux matériaux et synchronisation des équipes pilotés par la
                  donnée chantier en temps réel.
                </CardDescription>
              </CardHeader>
              <CardContent className="flex items-center justify-between px-0 pb-0">
                <span className="text-sm text-zinc-500">Ouvrir le détail</span>
                <ChevronRight
                  className="size-5 text-orange-400 transition-transform group-hover:translate-x-1"
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
