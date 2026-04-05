"use client";

/**
 * En-tête plein viewport : titre, sous-titre, CTA.
 * Animations fade-up via le composant FadeUp (Framer Motion).
 */

import { ArrowRight } from "lucide-react";

import { FadeUp } from "@/components/fade-up";
import { SiteLogo } from "@/components/site-logo";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function HeroSection() {
  return (
    <section
      className={cn(
        "relative flex min-h-[100svh] flex-col justify-center overflow-hidden px-5 py-20 sm:px-8 sm:py-24 lg:px-12",
      )}
    >
      {/* Fond structuré : base, halos, grille, grain, fondu bas de page */}
      <div className="absolute inset-0 bg-zinc-950" aria-hidden />
      <div className="hero-backdrop absolute inset-0" aria-hidden />
      <div className="grid-pattern absolute inset-0 opacity-[0.14]" aria-hidden />
      <div className="hero-noise absolute inset-0 mix-blend-overlay" aria-hidden />
      <div
        className="pointer-events-none absolute -left-[20%] top-[5%] h-[min(520px,55vh)] w-[min(520px,85vw)] rounded-full bg-cyan-500/[0.07] blur-[100px]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-[15%] bottom-[10%] h-[min(400px,45vh)] w-[min(440px,70vw)] rounded-full bg-orange-500/[0.06] blur-[90px]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-zinc-950 via-zinc-950/80 to-transparent sm:h-48"
        aria-hidden
      />

      <div className="relative mx-auto flex w-full max-w-7xl flex-col gap-9 sm:gap-11 lg:gap-12">
        <FadeUp delay={0}>
          <div className="max-w-5xl space-y-8">
            <SiteLogo
              priority
              className="max-h-56 w-auto sm:max-h-64 md:max-h-[18rem]"
            />
            <h1 className="text-balance font-[family-name:var(--font-space-grotesk)] text-4xl font-bold leading-[1.06] tracking-tight text-white drop-shadow-[0_0_60px_rgba(34,211,238,0.08)] sm:text-5xl md:text-6xl lg:text-7xl xl:text-[5.25rem]">
              L&apos;intelligence des données.{" "}
              <span className="bg-gradient-to-r from-white via-zinc-100 to-cyan-200/95 bg-clip-text text-transparent">
                L&apos;excellence sur le terrain.
              </span>
            </h1>
          </div>
        </FadeUp>

        <FadeUp delay={0.1}>
          <p className="max-w-2xl text-base leading-relaxed text-zinc-400 sm:text-lg sm:leading-relaxed md:text-xl md:leading-relaxed">
            De la conception algorithmique à la livraison finale, nous redéfinissons la réalisation
            de travaux avec rigueur data et exécution terrain irréprochable.
          </p>
        </FadeUp>

        <FadeUp delay={0.2}>
          <div className="flex w-full flex-col gap-3 pt-1 sm:flex-row sm:flex-wrap sm:gap-4">
            <a
              href="#contact"
              className={cn(
                buttonVariants({ size: "lg" }),
                "w-full justify-center shadow-[0_0_0_1px_rgba(34,211,238,0.15)] sm:w-auto",
              )}
            >
              Simuler mon projet
              <ArrowRight className="size-4 shrink-0" aria-hidden />
            </a>
            <a
              href="#notre-methode"
              className={cn(
                buttonVariants({ variant: "secondary", size: "lg" }),
                "w-full border-white/12 bg-white/[0.04] justify-center backdrop-blur-sm sm:w-auto",
              )}
            >
              Découvrir notre méthode
            </a>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
