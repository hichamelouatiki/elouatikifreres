"use client";

import { motion } from "framer-motion";
import { ArrowRight, Cog, SearchCheck, Users } from "lucide-react";

import { NeutralAmpersandText } from "@/components/neutral-ampersand-text";
import { Button } from "@/components/ui/button";

const pillars = [
  {
    icon: SearchCheck,
    title: "Audit Operationnel",
    text: "Nous partons des frictions du terrain avant de parler outils, automatisation ou dashboards.",
  },
  {
    icon: Cog,
    title: "Deploiement Sur-Mesure",
    text: "Chaque brique digitale est calibree autour de vos lots, contraintes et cycles de validation.",
  },
  {
    icon: Users,
    title: "Conduite du Changement",
    text: "Les equipes adoptent mieux les solutions quand elles servent d&apos;abord l&apos;execution quotidienne.",
  },
];

export function ConsultingSection() {
  return (
    <section
      id="consulting"
      className="light-grid-pattern scroll-mt-24 bg-zinc-50 px-6 py-24 text-zinc-950 sm:px-8 lg:px-12"
    >
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="space-y-8"
        >
          <div className="space-y-4">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-orange-500">
              <NeutralAmpersandText text="Consulting & Transformation Digitale" />
            </p>
            <h2 className="font-[family-name:var(--font-space-grotesk)] text-4xl font-bold sm:text-5xl">
              L&apos;humain avant la machine, pour des transformations qui tiennent dans le temps.
            </h2>
          </div>

          <div className="space-y-5">
            {pillars.map((pillar) => {
              const Icon = pillar.icon;

              return (
                <div key={pillar.title} className="rounded-[24px] border border-zinc-200 bg-white/85 p-5 shadow-lg shadow-zinc-200/60">
                  <div className="mb-3 inline-flex size-12 items-center justify-center rounded-2xl bg-orange-100 text-orange-500">
                    <Icon className="size-5" />
                  </div>
                  <h3 className="text-xl font-semibold">{pillar.title}</h3>
                  <p className="mt-2 leading-7 text-zinc-600">{pillar.text}</p>
                </div>
              );
            })}
          </div>

          <Button variant="dark" size="lg">
            Reserver mon Audit
            <ArrowRight className="size-4" />
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="relative"
        >
          <div className="aspect-[4/3] overflow-hidden rounded-[32px] bg-[radial-gradient(circle_at_top_left,rgba(249,115,22,0.35),transparent_30%),linear-gradient(135deg,#0f172a,#27272a_45%,#52525b)] shadow-xl shadow-zinc-400/20" />
          <div className="absolute bottom-6 left-6 max-w-xs rounded-3xl border border-white/40 bg-white/75 p-5 backdrop-blur-md">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-orange-500">
              Point d&apos;alerte
            </p>
            <p className="mt-2 text-lg font-medium text-zinc-950">
              70% des transformations digitales echouent faute d&apos;ancrage operationnel.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
