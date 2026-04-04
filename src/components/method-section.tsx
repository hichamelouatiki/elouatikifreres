"use client";

/**
 * Section « Notre méthode » : grille de 4 cartes + panneau de détail (version fusionnée).
 * Titres / accroche de la nouvelle version, interaction drawer de l’ancienne version.
 */

import { useMemo, useState, type ComponentType } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  BarChart3,
  Blocks,
  Camera,
  ChevronRight,
  FolderKanban,
  X,
} from "lucide-react";

import { BimFeatureCard } from "@/components/bim-feature-card";
import { FadeUp } from "@/components/fade-up";
import { LogisticsFeatureCard } from "@/components/logistics-feature-card";
import { ManagementFeatureCard } from "@/components/management-feature-card";
import { TrackingFeatureCard } from "@/components/tracking-feature-card";
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
  icon: ComponentType<{ className?: string }>;
  cta: string;
};

const features: DrawerConfig[] = [
  {
    id: "bim",
    eyebrow: "Notre méthode",
    title: "Conception Intelligente & BIM",
    description:
      "Maquette numérique, détection de conflits et arbitrages data dès la conception pour sécuriser coûts et délais.",
    header: "Simulateur Clash Detection",
    accent: "default",
    stats: [
      { value: "−15%", label: "dépassement budget" },
      { value: "100%", label: "conflits résolus" },
      { value: "0", label: "jour de retard" },
    ],
    icon: Blocks,
    cta: "Lancer la simulation BIM",
  },
  {
    id: "logistics",
    eyebrow: "Notre méthode",
    title: "Pilotage & Logistique Data",
    description:
      "Ordonnancement fin, flux matériaux et synchronisation des équipes pilotés par la donnée chantier en temps réel.",
    header: "Gantt animé",
    accent: "orange",
    stats: [
      { value: "−30%", label: "coûts de stockage" },
      { value: "+20%", label: "productivité" },
      { value: "0", label: "temps mort" },
    ],
    icon: BarChart3,
    cta: "Optimiser ma logistique",
  },
  {
    id: "tracking",
    eyebrow: "Notre méthode",
    title: "Réalisation Connectée & Suivi 360°",
    description:
      "Capteurs, reporting automatisé et indicateurs terrain pour une visibilité complète sur l’exécution.",
    header: "Computer Vision",
    accent: "default",
    stats: [
      { value: "100%", label: "traçabilité" },
      { value: "−40%", label: "reporting manuel" },
      { value: "0", label: "défaut sécurité" },
    ],
    icon: Camera,
    cta: "Activer le suivi 360°",
  },
  {
    id: "management",
    eyebrow: "Notre méthode",
    title: "Livraison & Jumeau Numérique",
    description:
      "Réception, DOE numérique et jumeau d’exploitation pour prolonger la valeur de l’ouvrage après livraison.",
    header: "Courbe financière",
    accent: "green",
    stats: [
      { value: "+21%", label: "rentabilité" },
      { value: "+31%", label: "productivité" },
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
    <section
      id="notre-methode"
      className="scroll-mt-24 px-5 py-20 sm:px-8 sm:py-24 lg:px-12"
      aria-labelledby="titre-notre-methode"
    >
      <div className="mx-auto flex max-w-7xl flex-col gap-12 lg:gap-14">
        <FadeUp inView className="max-w-4xl space-y-4">
          <p className="text-sm font-medium uppercase tracking-[0.24em] text-cyan-400">
            Notre méthode
          </p>
          <h2
            id="titre-notre-methode"
            className="font-[family-name:var(--font-space-grotesk)] text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl"
          >
            Du Bit au Béton : L&apos;Intelligence au Cœur du Chantier
          </h2>
          <p className="text-base leading-relaxed text-zinc-400 sm:text-lg">
            Chaque carte ouvre un niveau de détail : indicateurs, usage opérationnel et valeur
            directe sur la rentabilité terrain — le processus elouatikifreres de bout en bout.
          </p>
        </FadeUp>

        <ul className="grid list-none grid-cols-1 gap-5 sm:gap-6 md:grid-cols-2">
          {features.map((feature, index) => {
            if (feature.id === "bim") {
              return (
                <BimFeatureCard
                  key={feature.id}
                  open={activeId === "bim"}
                  onOpen={() => setActiveId("bim")}
                  onClose={() => setActiveId(null)}
                  animationDelay={index * 0.08}
                />
              );
            }
            if (feature.id === "logistics") {
              return (
                <LogisticsFeatureCard
                  key={feature.id}
                  open={activeId === "logistics"}
                  onOpen={() => setActiveId("logistics")}
                  onClose={() => setActiveId(null)}
                  animationDelay={index * 0.08}
                />
              );
            }
            if (feature.id === "tracking") {
              return (
                <TrackingFeatureCard
                  key={feature.id}
                  open={activeId === "tracking"}
                  onOpen={() => setActiveId("tracking")}
                  onClose={() => setActiveId(null)}
                  animationDelay={index * 0.08}
                />
              );
            }
            if (feature.id === "management") {
              return (
                <ManagementFeatureCard
                  key={feature.id}
                  open={activeId === "management"}
                  onOpen={() => setActiveId("management")}
                  onClose={() => setActiveId(null)}
                  animationDelay={index * 0.08}
                />
              );
            }

            const Icon = feature.icon;
            const accent = accentClasses(feature.accent);

            return (
              <li key={feature.id}>
                <FadeUp inView delay={index * 0.08}>
                  <Card
                    className={cn(
                      "group cursor-pointer overflow-hidden border p-1 transition-[transform,box-shadow,border-color] duration-300 hover:-translate-y-1",
                      "border-white/10 bg-zinc-900/35 hover:border-cyan-400/45 hover:shadow-[0_0_32px_rgba(34,211,238,0.12),inset_0_0_0_1px_rgba(34,211,238,0.08)]",
                      accent.border,
                    )}
                    onClick={() => setActiveId(feature.id)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault();
                        setActiveId(feature.id);
                      }
                    }}
                    role="button"
                    tabIndex={0}
                  >
                    <div
                      className={cn(
                        "h-full rounded-[24px] bg-gradient-to-br to-transparent p-6",
                        accent.glow,
                      )}
                    >
                      <CardHeader className="px-0 pt-0">
                        <div
                          className={cn(
                            "mb-4 inline-flex size-12 items-center justify-center rounded-2xl border bg-black/30",
                            accent.border,
                          )}
                        >
                          <Icon className={cn("size-5", accent.text)} aria-hidden />
                        </div>
                        <CardTitle>{feature.title}</CardTitle>
                        <CardDescription>{feature.description}</CardDescription>
                      </CardHeader>
                      <CardContent className="flex items-center justify-between px-0 pb-0">
                        <span className="text-sm text-zinc-500">Ouvrir le détail</span>
                        <ChevronRight
                          className={cn("size-5 transition-transform group-hover:translate-x-1", accent.text)}
                          aria-hidden
                        />
                      </CardContent>
                    </div>
                  </Card>
                </FadeUp>
              </li>
            );
          })}
        </ul>
      </div>

      <AnimatePresence>
        {activeFeature &&
        activeFeature.id !== "bim" &&
        activeFeature.id !== "logistics" &&
        activeFeature.id !== "tracking" &&
        activeFeature.id !== "management" ? (
          <>
            <motion.button
              type="button"
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
              className="fixed right-0 top-0 z-50 h-full w-full max-w-[600px] overflow-y-auto border-l border-white/10 bg-zinc-950 px-5 py-8 shadow-2xl sm:px-6"
            >
              <div className="mb-10 flex items-start justify-between gap-4">
                <div className="space-y-3">
                  <p className="text-sm uppercase tracking-[0.24em] text-zinc-500">
                    {activeFeature.eyebrow}
                  </p>
                  <h3 className="font-[family-name:var(--font-space-grotesk)] text-3xl font-bold text-white">
                    {activeFeature.header}
                  </h3>
                  <p className="max-w-md leading-7 text-zinc-400">{activeFeature.description}</p>
                </div>
                <button
                  type="button"
                  className="shrink-0 rounded-full border border-white/10 p-3 text-zinc-400 transition hover:text-white"
                  onClick={() => setActiveId(null)}
                >
                  <X className="size-5" aria-hidden />
                </button>
              </div>

              <div className="mb-8 grid gap-4 sm:grid-cols-3">
                {activeFeature.stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-[24px] border border-white/10 bg-white/5 p-5"
                  >
                    <p className={cn("text-3xl font-bold", accentClasses(activeFeature.accent).text)}>
                      {stat.value}
                    </p>
                    <p className="mt-2 text-sm text-zinc-400">{stat.label}</p>
                  </div>
                ))}
              </div>

              <div className="mb-8 rounded-[28px] border border-white/10 bg-white/4 p-6">
                <div className="mb-6 flex items-center gap-3">
                  <div
                    className={cn(
                      "size-3 rounded-full",
                      activeFeature.accent === "orange"
                        ? "bg-orange-400"
                        : activeFeature.accent === "green"
                          ? "bg-green-400"
                          : "bg-cyan-400",
                    )}
                  />
                  <span className="text-sm text-zinc-400">Visualisation opérationnelle</span>
                </div>
                <div className="space-y-4">
                  {[55, 82, 68, 92].map((width, i) => (
                    <motion.div
                      key={i}
                      initial={{ width: 0 }}
                      animate={{ width: `${width}%` }}
                      transition={{ delay: i * 0.12, duration: 0.6 }}
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
