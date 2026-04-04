"use client";

/**
 * Carte « Livraison & Jumeau Numérique » + drawer (DOE, réception, exploitation).
 * Même pattern portail + Framer Motion que les autres feature cards.
 */

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "framer-motion";
import { Building2, ChevronRight, FileCheck2, FolderKanban, Network, X } from "lucide-react";

import { DigitalTwinVisual } from "@/components/digital-twin-visual";
import { FadeUp } from "@/components/fade-up";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

export type ManagementFeatureCardProps = {
  open: boolean;
  onOpen: () => void;
  onClose: () => void;
  animationDelay?: number;
};

export function ManagementFeatureCard({
  open,
  onOpen,
  onClose,
  animationDelay = 0,
}: ManagementFeatureCardProps) {
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
            aria-label="Fermer le panneau livraison et jumeau numérique"
            className="fixed inset-0 z-[100] bg-black/45 backdrop-blur-xl backdrop-saturate-150"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />
          <motion.aside
            role="dialog"
            aria-modal="true"
            aria-labelledby="management-drawer-title"
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
              <DigitalTwinVisual />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-transparent to-transparent" />
              <div className="absolute left-3 top-3 sm:left-4 sm:top-4">
                <span className="inline-flex items-center rounded-full border border-green-500/40 bg-green-500/15 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-green-100 backdrop-blur-md sm:text-xs">
                  {"Jumeau numérique & DOE synchronisés"}
                </span>
              </div>
            </div>

            <div className="mb-8 space-y-4">
              <h3
                id="management-drawer-title"
                className="font-[family-name:var(--font-space-grotesk)] text-2xl font-semibold leading-tight text-white sm:text-3xl"
              >
                De la réception à l&apos;exploitation : un actif entièrement numérique.
              </h3>
              <p className="text-base leading-relaxed text-zinc-400">
                La livraison n&apos;est pas une fin : c&apos;est le point de bascule vers la valeur
                long terme. Nous consolidons le DOE, les preuves de conformité et le jumeau
                d&apos;exploitation pour que chaque décision après livraison s&apos;appuie sur des
                données à jour, structurées et exploitables.
              </p>
            </div>

            <ul className="mb-8 space-y-5">
              <li className="flex gap-4">
                <div className="flex size-11 shrink-0 items-center justify-center rounded-xl border border-cyan-500/30 bg-cyan-500/10">
                  <FileCheck2 className="size-5 text-cyan-400" aria-hidden />
                </div>
                <div>
                  <p className="font-semibold text-white">
                    DOE &amp; réception numérique :{" "}
                    <span className="font-normal text-zinc-400">
                      Dossiers homogènes, preuves traçables et clôture de lots sans friction
                      documentaire.
                    </span>
                  </p>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="flex size-11 shrink-0 items-center justify-center rounded-xl border border-orange-500/30 bg-orange-500/10">
                  <Building2 className="size-5 text-orange-400" aria-hidden />
                </div>
                <div>
                  <p className="font-semibold text-white">
                    Jumeau d&apos;exploitation :{" "}
                    <span className="font-normal text-zinc-400">
                      Le modèle BIM enrichi des as-built et des capteurs pour suivre l&apos;ouvrage
                      comme un système vivant.
                    </span>
                  </p>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="flex size-11 shrink-0 items-center justify-center rounded-xl border border-green-500/30 bg-green-500/10">
                  <Network className="size-5 text-green-400" aria-hidden />
                </div>
                <div>
                  <p className="font-semibold text-white">
                    Pilotage financier &amp; GMAO :{" "}
                    <span className="font-normal text-zinc-400">
                      Tableaux de bord et intégrations pour prolonger la rentabilité et réduire les
                      coûts cachés du cycle de vie.
                    </span>
                  </p>
                </div>
              </li>
            </ul>

            <div className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
              {[
                { value: "+21%", label: "Rentabilité" },
                { value: "+31%", label: "Productivité" },
                { value: "0", label: "Papier" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-[20px] border border-white/10 bg-white/5 p-4 text-center sm:text-left"
                >
                  <p className="text-2xl font-bold text-green-400 sm:text-3xl">{stat.value}</p>
                  <p className="mt-1 text-sm text-zinc-400">{stat.label}</p>
                </div>
              ))}
            </div>

            <Button
              type="button"
              variant="green"
              size="lg"
              className="w-full hover:bg-green-400"
              onClick={onClose}
            >
              Structurer ma livraison
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
              "group cursor-pointer overflow-hidden border border-green-500/30 p-1 transition-[transform,box-shadow,border-color] duration-300 hover:-translate-y-1",
              "border-white/10 bg-zinc-900/35 hover:border-green-400/50 hover:shadow-[0_0_32px_rgba(34,197,94,0.14),inset_0_0_0_1px_rgba(34,197,94,0.1)]",
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
            <div className="h-full rounded-[24px] bg-gradient-to-br from-green-500/25 to-transparent p-6">
              <CardHeader className="px-0 pt-0">
                <div className="mb-4 inline-flex size-12 items-center justify-center rounded-2xl border border-green-500/30 bg-black/30">
                  <FolderKanban className="size-5 text-green-400" aria-hidden />
                </div>
                <CardTitle>{"Livraison & Jumeau Numérique"}</CardTitle>
                <CardDescription>
                  Réception, DOE numérique et jumeau d&apos;exploitation pour prolonger la valeur
                  de l&apos;ouvrage après livraison.
                </CardDescription>
              </CardHeader>
              <CardContent className="flex items-center justify-between px-0 pb-0">
                <span className="text-sm text-zinc-500">Ouvrir le détail</span>
                <ChevronRight
                  className="size-5 text-green-400 transition-transform group-hover:translate-x-1"
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
