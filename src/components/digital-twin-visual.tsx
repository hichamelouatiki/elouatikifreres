"use client";

/**
 * Visuel Livraison / Jumeau numérique : silhouette d’ouvrage, courbe de performance
 * et synchronisation physique ↔ modèle (ligne de scan + nœuds).
 */

import { motion, useReducedMotion } from "framer-motion";

const CURVE_PATH =
  "M 8 78 C 22 72, 28 48, 42 42 S 58 22, 72 18 S 88 8, 94 12";

export function DigitalTwinVisual() {
  const reduceMotion = useReducedMotion();

  return (
    <div className="relative h-full min-h-[140px] w-full overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_20%,rgba(34,197,94,0.12),transparent_50%)]" />

      {/* Couche « physique » vs « jumeau » (deux plans léger décalés) */}
      <motion.div
        className="absolute bottom-[18%] left-[12%] h-[38%] w-[28%] rounded-sm border border-zinc-600/70 bg-zinc-900/40"
        aria-hidden
        animate={
          reduceMotion
            ? { opacity: 0.85 }
            : { opacity: [0.65, 0.95, 0.65], x: [0, 2, 0] }
        }
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-[20%] left-[14%] h-[38%] w-[28%] rounded-sm border border-emerald-500/35 bg-emerald-500/5"
        aria-hidden
        animate={
          reduceMotion
            ? { opacity: 0.5 }
            : { opacity: [0.35, 0.7, 0.35], x: [0, -3, 0] }
        }
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
      />

      {/* Grille type maquette numérique */}
      <div
        className="pointer-events-none absolute inset-[10%] opacity-[0.15]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgb(161 161 170) 1px, transparent 1px), linear-gradient(to bottom, rgb(161 161 170) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
        aria-hidden
      />

      {/* Courbe financière / performance */}
      <svg
        className="absolute inset-[8%] h-[84%] w-[84%]"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        aria-hidden
      >
        <defs>
          <linearGradient id="twin-curve-grad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgb(34 197 94)" stopOpacity="0.2" />
            <stop offset="50%" stopColor="rgb(52 211 153)" stopOpacity="0.9" />
            <stop offset="100%" stopColor="rgb(34 197 94)" stopOpacity="0.5" />
          </linearGradient>
        </defs>
        <motion.path
          d={CURVE_PATH}
          fill="none"
          stroke="url(#twin-curve-grad)"
          strokeWidth={1.2}
          vectorEffect="non-scaling-stroke"
          initial={false}
          animate={reduceMotion ? { pathLength: 1 } : { pathLength: [0, 1] }}
          transition={{
            duration: 2.8,
            repeat: Infinity,
            repeatDelay: 2,
            ease: "easeInOut",
          }}
        />
      </svg>

      {/* Ligne de synchronisation verticale */}
      <div className="pointer-events-none absolute inset-y-[12%] left-0 right-0">
        <motion.div
          className="absolute top-0 h-full w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-green-400/70 to-transparent shadow-[0_0_16px_rgba(74,222,128,0.4)]"
          initial={false}
          animate={
            reduceMotion
              ? { left: "50%" }
              : { left: ["12%", "88%", "12%"] }
          }
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* Nœuds de données */}
      {[
        { top: "24%", left: "72%", delay: 0 },
        { top: "52%", left: "48%", delay: 0.4 },
        { top: "68%", left: "28%", delay: 0.8 },
      ].map((node) => (
        <motion.div
          key={`${node.top}-${node.left}`}
          className="absolute z-10 size-2 rounded-full bg-green-400 shadow-[0_0_10px_rgba(74,222,128,0.8)]"
          style={{ top: node.top, left: node.left }}
          animate={
            reduceMotion
              ? { scale: 1, opacity: 0.9 }
              : { scale: [1, 1.35, 1], opacity: [0.5, 1, 0.5] }
          }
          transition={{
            duration: 2.2,
            repeat: Infinity,
            delay: node.delay,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}
