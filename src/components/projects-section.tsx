"use client";

import { motion } from "framer-motion";

const items = [
  {
    title: "Dépassement de budget : 0%",
    text: "Rehabilitation pilotee par IA avec arbitrage quotidien entre avancement, marge et disponibilite materiaux.",
    wide: true,
  },
  {
    title: "Tour logistique augmentee",
    text: "Placeholder visuel premium pour chantier multisites et coordination d&apos;intervenants.",
    visual: true,
  },
  {
    title: "-40% de reporting",
    text: "Capture automatisee des faits terrain et preuves d&apos;execution centralisees.",
  },
  {
    title: "DOE digital livre sans friction",
    text: "Bento final valorisant la continuite entre production, reception et exploitation.",
    visual: true,
  },
];

export function ProjectsSection() {
  return (
    <section className="px-6 py-24 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl space-y-12">
        <div className="max-w-3xl space-y-4">
          <p className="text-sm font-medium uppercase tracking-[0.24em] text-cyan-400">
            Nos Realisations
          </p>
          <h2 className="font-[family-name:var(--font-space-grotesk)] text-4xl font-bold text-white sm:text-5xl">
            Des operations qui parlent en resultats, pas en promesses.
          </h2>
        </div>

        <div className="grid auto-rows-[240px] gap-6 md:grid-cols-2 lg:grid-cols-3">
          {items.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.6, delay: index * 0.06 }}
              className={[
                "rounded-[30px] border border-white/10 p-7",
                item.visual
                  ? "bg-[linear-gradient(140deg,#18181b,#27272a,#3f3f46)]"
                  : "glass-panel",
                item.wide ? "md:col-span-2" : "",
              ].join(" ")}
            >
              <div className="flex h-full flex-col justify-between">
                <div>
                  <p className="text-sm uppercase tracking-[0.18em] text-zinc-500">
                    Cas client
                  </p>
                  <h3 className="mt-4 font-[family-name:var(--font-space-grotesk)] text-3xl font-bold text-white">
                    {item.title}
                  </h3>
                </div>
                <div>
                  <p className="max-w-md leading-7 text-zinc-300">{item.text}</p>
                  {item.visual ? (
                    <div className="mt-6 h-20 rounded-2xl border border-white/10 bg-black/20" />
                  ) : null}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
