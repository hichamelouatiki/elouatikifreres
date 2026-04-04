"use client";

/**
 * En-tête plein viewport : titre, sous-titre, CTA.
 * Animations fade-up via le composant FadeUp (Framer Motion).
 */

import { ArrowRight, Sparkles } from "lucide-react";

import { FadeUp } from "@/components/fade-up";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function HeroSection() {
  return (
    <section
      className={cn(
        "relative flex min-h-[100svh] flex-col justify-center overflow-hidden px-5 py-16 sm:px-8 sm:py-20 lg:px-12",
        /* 100vh / svh : hauteur viewport demandée, mobile first */
      )}
    >
      <div className="grid-pattern absolute inset-0 opacity-30" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.18),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(249,115,22,0.18),transparent_24%)]" />

      <div className="relative mx-auto flex w-full max-w-7xl flex-col gap-8 sm:gap-10">
        {/* Pastille d’accroche (ancienne version) + animation nouvelle version */}
        <FadeUp delay={0}>
          <div className="inline-flex w-fit max-w-full items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs text-zinc-300 sm:text-sm">
            <Sparkles className="size-4 shrink-0 text-cyan-400" aria-hidden />
            <span>IA, BIM, logistique et exécution terrain</span>
          </div>
        </FadeUp>

        <FadeUp delay={0.08}>
          <h1 className="text-balance font-[family-name:var(--font-space-grotesk)] text-4xl font-bold leading-[1.05] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl">
            L&apos;intelligence des données. L&apos;excellence sur le terrain.
          </h1>
        </FadeUp>

        <FadeUp delay={0.18}>
          <p className="max-w-2xl text-base leading-relaxed text-zinc-300 sm:text-lg sm:leading-8 md:text-xl">
            De la conception algorithmique à la livraison finale, nous
            redéfinissons la réalisation de travaux grâce à l&apos;IA.
          </p>
        </FadeUp>

        <FadeUp delay={0.28}>
          <div className="flex w-full flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
            <a
              href="#contact"
              className={cn(buttonVariants({ size: "lg" }), "w-full justify-center sm:w-auto")}
            >
              Simuler mon projet
              <ArrowRight className="size-4 shrink-0" aria-hidden />
            </a>
            <a
              href="#notre-methode"
              className={cn(
                buttonVariants({ variant: "secondary", size: "lg" }),
                "w-full justify-center sm:w-auto",
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
