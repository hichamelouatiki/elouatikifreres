"use client";

import { motion } from "framer-motion";

import { Button } from "@/components/ui/button";

const steps = [
  {
    title: "Audit Stratégique",
    description:
      "Analyse approfondie de vos processus métiers et de vos chantiers pour identifier les frictions logistiques. Nous définissons ensemble une feuille de route digitale et des KPI clairs avant toute intervention.",
  },
  {
    title: "Jumeau Numérique",
    description:
      "Création d'une maquette numérique intelligente pour simuler les coûts, détecter proactivement les conflits de conception et valider les choix techniques avant le premier coup de pioche.",
  },
  {
    title: "Pilotage Terrain",
    description:
      "Supervision en temps réel grâce à l'analyse de données. Nous optimisons l'ordonnancement, synchronisons les équipes et automatisons les reportings pour garantir le respect des délais et du budget.",
  },
  {
    title: "Livraison & DOE Numérique",
    description:
      "Remise d'un Dossier d'Ouvrages Exécutés (DOE) 100% digitalisé. Au-delà des clés, nous vous livrons un véritable actif data prêt à l'emploi pour la maintenance et l'exploitation future du bâtiment.",
  },
] as const;

export function MethodologySection() {
  return (
    <section className="px-6 py-24 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-5xl">
        <div className="mb-14 text-center">
          <p className="text-sm font-medium uppercase tracking-[0.24em] text-orange-400">
            Notre méthodologie
          </p>
          <h2 className="mt-4 font-[family-name:var(--font-space-grotesk)] text-4xl font-bold text-white sm:text-5xl">
            Une frise de décisions claires, du diagnostic initial au DOE numérique.
          </h2>
        </div>

        <div className="relative mx-auto max-w-3xl">
          <div className="absolute left-[23px] top-0 h-full w-px bg-gradient-to-b from-cyan-400 via-orange-500 to-green-500" />
          <div className="space-y-10">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 26 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{ duration: 0.55, delay: index * 0.08 }}
                className="relative pl-16"
              >
                <div className="absolute left-0 top-1 flex size-12 items-center justify-center rounded-full border border-cyan-400/30 bg-zinc-900 text-sm font-bold text-cyan-300">
                  {index + 1}
                </div>
                <div className="rounded-[28px] border border-white/10 bg-white/5 p-6 backdrop-blur-md">
                  <h3 className="font-[family-name:var(--font-space-grotesk)] text-2xl font-semibold text-white">
                    {step.title}
                  </h3>
                  <p className="mt-3 leading-7 text-zinc-400">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="mt-14 text-center">
          <Button size="lg">Démarrer par un audit de mes chantiers</Button>
        </div>
      </div>
    </section>
  );
}
