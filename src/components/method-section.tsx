"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  BarChart3,
  Blocks,
  Camera,
  ChevronRight,
  FolderKanban,
  X,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

type DrawerConfig = {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
  header: string;
  accent: "default" | "orange" | "green";
  stats: Array<{ value: string; label: string }>;
  icon: React.ComponentType<{ className?: string }>;
  cta: string;
};

const features: DrawerConfig[] = [
  {
    id: "bim",
    eyebrow: "Notre Methode",
    title: "Conception Intelligente & BIM",
    description: "Detection proactive des conflits, simulation des couts et arbitrages data des la maquette numerique.",
    header: "Simulateur Clash Detection",
    accent: "default",
    stats: [
      { value: "-15%", label: "depassement budget" },
      { value: "100%", label: "conflits resolus" },
      { value: "0", label: "jour retard" },
    ],
    icon: Blocks,
    cta: "Lancer la simulation BIM",
  },
  {
    id: "logistics",
    eyebrow: "Notre Methode",
    title: "Pilotage & Logistique Data",
    description: "Ordonnancement fin, allocation materiaux et synchronisation des equipes grace a la donnee chantier.",
    header: "Gantt anime",
    accent: "orange",
    stats: [
      { value: "-30%", label: "couts de stockage" },
      { value: "+20%", label: "productivite" },
      { value: "0", label: "temps mort" },
    ],
    icon: BarChart3,
    cta: "Optimiser ma logistique",
  },
  {
    id: "tracking",
    eyebrow: "Notre Methode",
    title: "Realisation Connectee & Suivi 360°",
    description: "Vision ordinateur, reporting automatise et indicateurs temps reel pour garder le chantier sous controle.",
    header: "Computer Vision",
    accent: "default",
    stats: [
      { value: "100%", label: "tracabilite" },
      { value: "-40%", label: "reporting" },
      { value: "0", label: "defaut securite" },
    ],
    icon: Camera,
    cta: "Activer le suivi 360°",
  },
  {
    id: "management",
    eyebrow: "Notre Methode",
    title: "Livraison & Jumeau Numerique / Gestion",
    description: "Pilotage financier, DOE numerique et exploitation d&apos;un actif data pour la suite du cycle de vie.",
    header: "Courbe financiere",
    accent: "green",
    stats: [
      { value: "+21%", label: "rentabilite" },
      { value: "+31%", label: "productivite" },
      { value: "0", label: "papier" },
    ],
    icon: FolderKanban,
    cta: "Structurer ma livraison",
  },
];

function accentClasses(accent: DrawerConfig["accent"]) {
  if (accent === "orange") {
    return {
      border: "border-orange-500/30",
      text: "text-orange-400",
      button: "orange" as const,
      glow: "from-orange-500/25",
    };
  }

  if (accent === "green") {
    return {
      border: "border-green-500/30",
      text: "text-green-400",
      button: "green" as const,
      glow: "from-green-500/25",
    };
  }

  return {
    border: "border-cyan-400/30",
    text: "text-cyan-400",
    button: "default" as const,
    glow: "from-cyan-400/25",
  };
}

export function MethodSection() {
  const [activeId, setActiveId] = useState<string | null>(null);
  const activeFeature = useMemo(
    () => features.find((feature) => feature.id === activeId) ?? null,
    [activeId],
  );

  return (
    <section className="px-6 py-24 sm:px-8 lg:px-12">
      <div className="mx-auto flex max-w-7xl flex-col gap-12">
        <div className="max-w-3xl space-y-4">
          <p className="text-sm font-medium uppercase tracking-[0.24em] text-cyan-400">
            Notre Methode
          </p>
          <h2 className="font-[family-name:var(--font-space-grotesk)] text-4xl font-bold text-white sm:text-5xl">
            Quatre systemes interconnectes pour un chantier pilote comme un produit.
          </h2>
          <p className="text-lg leading-8 text-zinc-400">
            Chaque carte ouvre un niveau de lecture plus detaille avec ses indicateurs, son usage et sa valeur directe sur la rentabilite terrain.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {features.map((feature) => {
            const Icon = feature.icon;
            const accent = accentClasses(feature.accent);

            return (
              <Card
                key={feature.id}
                className={cn(
                  "group cursor-pointer overflow-hidden border-white/10 p-1 transition-transform duration-300 hover:-translate-y-1",
                  accent.border,
                )}
                onClick={() => setActiveId(feature.id)}
              >
                <div className={cn("h-full rounded-[24px] bg-gradient-to-br to-transparent p-6", accent.glow)}>
                  <CardHeader className="px-0 pt-0">
                    <div className={cn("mb-4 inline-flex size-12 items-center justify-center rounded-2xl border bg-black/30", accent.border)}>
                      <Icon className={cn("size-5", accent.text)} />
                    </div>
                    <CardTitle>{feature.title}</CardTitle>
                    <CardDescription>{feature.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="flex items-center justify-between px-0 pb-0">
                    <span className="text-sm text-zinc-500">Ouvrir le detail</span>
                    <ChevronRight className={cn("size-5 transition-transform group-hover:translate-x-1", accent.text)} />
                  </CardContent>
                </div>
              </Card>
            );
          })}
        </div>
      </div>

      <AnimatePresence>
        {activeFeature ? (
          <>
            <motion.button
              aria-label="Fermer le panneau"
              className="fixed inset-0 z-40 bg-black/50 backdrop-blur-md"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveId(null)}
            />
            <motion.aside
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 220, damping: 24 }}
              className="fixed right-0 top-0 z-50 h-full w-full max-w-[600px] overflow-y-auto border-l border-white/10 bg-zinc-950 px-6 py-8 shadow-2xl"
            >
              <div className="mb-10 flex items-start justify-between gap-4">
                <div className="space-y-3">
                  <p className="text-sm uppercase tracking-[0.24em] text-zinc-500">
                    {activeFeature.eyebrow}
                  </p>
                  <h3 className="font-[family-name:var(--font-space-grotesk)] text-3xl font-bold text-white">
                    {activeFeature.header}
                  </h3>
                  <p className="max-w-md leading-7 text-zinc-400">
                    {activeFeature.description}
                  </p>
                </div>
                <button
                  className="rounded-full border border-white/10 p-3 text-zinc-400 transition hover:text-white"
                  onClick={() => setActiveId(null)}
                >
                  <X className="size-5" />
                </button>
              </div>

              <div className="mb-8 grid gap-4 sm:grid-cols-3">
                {activeFeature.stats.map((stat) => (
                  <div key={stat.label} className="rounded-[24px] border border-white/10 bg-white/5 p-5">
                    <p className={cn("text-3xl font-bold", accentClasses(activeFeature.accent).text)}>
                      {stat.value}
                    </p>
                    <p className="mt-2 text-sm text-zinc-400">{stat.label}</p>
                  </div>
                ))}
              </div>

              <div className="mb-8 rounded-[28px] border border-white/10 bg-white/4 p-6">
                <div className="mb-6 flex items-center gap-3">
                  <div className={cn("size-3 rounded-full", accentClasses(activeFeature.accent).text.replace("text-", "bg-"))} />
                  <span className="text-sm text-zinc-400">Visualisation operationnelle</span>
                </div>
                <div className="space-y-4">
                  {[55, 82, 68, 92].map((width, index) => (
                    <motion.div
                      key={index}
                      initial={{ width: 0 }}
                      animate={{ width: `${width}%` }}
                      transition={{ delay: index * 0.12, duration: 0.6 }}
                      className={cn(
                        "h-3 rounded-full bg-gradient-to-r to-transparent",
                        activeFeature.accent === "orange"
                          ? "from-orange-500"
                          : activeFeature.accent === "green"
                            ? "from-green-500"
                            : "from-cyan-400",
                      )}
                    />
                  ))}
                </div>
              </div>

              <Button
                variant={accentClasses(activeFeature.accent).button}
                size="lg"
                className="w-full"
              >
                {activeFeature.cta}
              </Button>
            </motion.aside>
          </>
        ) : null}
      </AnimatePresence>
    </section>
  );
}
