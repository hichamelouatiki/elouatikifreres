"use client";

import { motion } from "framer-motion";

export function StorySection() {
  return (
    <section className="bg-zinc-950 px-6 py-24 sm:px-8 lg:px-12">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:items-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.7 }}
          className="relative"
        >
          <div className="aspect-[4/5] overflow-hidden rounded-[32px] border border-white/10 bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.18),transparent_20%),linear-gradient(145deg,#18181b,#0a0a0a_65%,#1f2937)] grayscale transition duration-700 hover:grayscale-0" />
          <div className="absolute left-6 top-6 rounded-full border border-cyan-400/25 bg-black/40 px-4 py-2 text-sm uppercase tracking-[0.2em] text-cyan-300 backdrop-blur-md">
            Batisseurs d&apos;Avenir
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="space-y-6"
        >
          <p className="text-sm font-medium uppercase tracking-[0.24em] text-zinc-500">
            Notre Histoire
          </p>
          <h2 className="font-[family-name:var(--font-space-grotesk)] text-4xl font-bold text-white sm:text-5xl">
            L&apos;experience du terrain. La puissance de la donnee.
          </h2>
          <p className="leading-8 text-zinc-300">
            El Ouatiki Freres est ne d&apos;une culture chantier, de l&apos;exigence des delais et de la responsabilite vis-a-vis des maitres d&apos;ouvrage. Nous avons grandi avec les contraintes reelles du terrain, pas avec des promesses de laboratoire.
          </p>
          <p className="leading-8 text-zinc-300">
            En observant les pertes invisibles, les frictions logistiques et les decisions prises trop tard, nous avons fait evoluer l&apos;entreprise familiale vers une logique augmentee par l&apos;IA, le BIM et les systemes data.
          </p>
          <p className="leading-8 text-zinc-300">
            Notre ambition reste simple : transmettre une execution plus fiable, plus rentable et plus lisible aux acteurs du BTP qui veulent construire vite sans sacrifier la qualite.
          </p>
          <p className="font-[family-name:var(--font-space-grotesk)] text-2xl italic text-cyan-300">
            Les Freres El Ouatiki
          </p>
        </motion.div>
      </div>
    </section>
  );
}
