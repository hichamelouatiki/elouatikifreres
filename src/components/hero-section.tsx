"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden px-6 py-24 sm:px-8 lg:px-12">
      <div className="grid-pattern absolute inset-0 opacity-30" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.18),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(249,115,22,0.18),transparent_24%)]" />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative mx-auto flex w-full max-w-7xl flex-col gap-8"
      >
        <div className="inline-flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-zinc-300">
          <Sparkles className="size-4 text-cyan-400" />
          IA, BIM, logistique et execution terrain
        </div>

        <div className="max-w-4xl space-y-6">
          <h1 className="text-balance font-[family-name:var(--font-space-grotesk)] text-5xl font-bold leading-none tracking-tight text-white sm:text-6xl lg:text-8xl">
            L&apos;intelligence des donnees. L&apos;excellence sur le terrain.
          </h1>
          <p className="max-w-2xl text-lg leading-8 text-zinc-300 sm:text-xl">
            De la conception algorithmique a la livraison finale, nous
            redefinissons la realisation de travaux grace a l&apos;IA. SDDDDAAAA
          </p>
        </div>

        <div className="flex flex-col gap-4 sm:flex-row">
          <Button size="lg">
            Simuler mon projet
            <ArrowRight className="size-4" />
          </Button>
          <Button size="lg" variant="secondary">
            Decouvrir notre methode
          </Button>
        </div>
      </motion.div>
    </section>
  );
}
