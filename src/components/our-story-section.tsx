"use client";

/**
 * Section « Notre histoire » — identité EL OUATIKI Frères.
 * Grille 2 colonnes (image | texte), animations au scroll (Framer Motion).
 */

import Image from "next/image";
import { motion } from "framer-motion";

/** Fichier servi depuis /public/images/ (copie de media/Histoire_elouatiki_freres.png). */
const STORY_IMAGE_SRC = "/images/Histoire_elouatiki_freres.png";

const textBlock = {
  hidden: { opacity: 0, y: 18 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1] as const,
      delay: 0.05 + i * 0.09,
    },
  }),
};

export function OurStorySection() {
  return (
    <section
      id="histoire"
      className="w-full scroll-mt-24 bg-zinc-950 px-5 py-20 sm:px-8 sm:py-24 lg:px-12"
      aria-labelledby="titre-notre-histoire"
    >
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
        {/* Colonne gauche — image */}
        <motion.div
          className="relative w-full"
          initial={{ opacity: 0, x: -32 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.28 }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] as const }}
        >
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl border border-white/10 bg-zinc-900 shadow-2xl shadow-black/40">
            <Image
              src={STORY_IMAGE_SRC}
              alt="Deux associés sur un chantier, casques de sécurité, consultation d&apos;un plan sur tablette — expertise terrain et numérique"
              fill
              className="object-cover grayscale-0 transition-all duration-700 ease-out lg:grayscale lg:hover:grayscale-0"
              sizes="(max-width: 1024px) 100vw, 50vw"
              unoptimized
            />
            <div className="absolute bottom-4 right-4 z-10 max-w-[min(100%,calc(100%-2rem))] rounded-xl border border-white/10 bg-black/90 px-4 py-3 shadow-lg backdrop-blur-sm sm:bottom-5 sm:right-5">
              <p className="text-left text-xs font-semibold leading-snug sm:text-sm">
                <span className="text-white">EL OUATIKI Frères</span>
                <span className="text-cyan-400"> — Bâtisseurs d&apos;Avenir</span>
              </p>
            </div>
          </div>
        </motion.div>

        {/* Colonne droite — texte */}
        <motion.div
          className="p-8 md:p-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.22 }}
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.08, delayChildren: 0.06 },
            },
          }}
        >
          <motion.p
            variants={textBlock}
            custom={0}
            className="mb-4 text-sm font-bold uppercase tracking-wider text-orange-500"
          >
            L&apos;HISTOIRE D&apos;EL OUATIKI FRÈRES
          </motion.p>

          <motion.h2
            id="titre-notre-histoire"
            variants={textBlock}
            custom={1}
            className="mb-6 font-[family-name:var(--font-space-grotesk)] text-4xl font-bold leading-tight tracking-tight text-white md:text-5xl"
          >
            L&apos;expérience du terrain. La puissance de la donnée.
          </motion.h2>

          <motion.p
            variants={textBlock}
            custom={2}
            className="mb-4 text-lg leading-relaxed text-zinc-300"
          >
            Chez EL OUATIKI Frères, le bâtiment est une histoire de famille. Après des années
            passées sur les chantiers à gérer les équipes et les imprévus, nous avons décidé de
            résoudre le plus grand problème du BTP : le manque de synchronisation.
          </motion.p>

          <motion.p
            variants={textBlock}
            custom={3}
            className="mb-4 text-lg leading-relaxed text-zinc-300"
          >
            Nous avons transformé notre ADN pour allier le savoir-faire traditionnel à
            l&apos;Intelligence Artificielle (BIM, IoT, Computer Vision).
          </motion.p>

          <motion.p
            variants={textBlock}
            custom={4}
            className="mb-8 text-lg font-semibold leading-relaxed text-white"
          >
            Aujourd&apos;hui, nous ne sommes pas qu&apos;une entreprise technologique. Nous sommes
            des bâtisseurs qui offrent à vos équipes les outils de demain.
          </motion.p>

          <motion.p
            variants={textBlock}
            custom={5}
            className="font-[family-name:var(--font-caveat)] text-3xl text-cyan-300 md:text-4xl"
          >
            Les Frères El Ouatiki
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
