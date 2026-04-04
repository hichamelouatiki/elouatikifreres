"use client";

/**
 * Animation type détection de conflits BIM : volumes qui se chevauchent puis se répartissent.
 */

import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

export function BimClashVisual() {
  const reduceMotion = useReducedMotion();
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    if (reduceMotion) return;
    const id = window.setInterval(() => setPhase((p) => (p === 0 ? 1 : 0)), 2800);
    return () => window.clearInterval(id);
  }, [reduceMotion]);

  const congested = reduceMotion || phase === 0;

  return (
    <div className="relative flex h-full min-h-[140px] w-full items-center justify-center">
      <div className="absolute inset-0 opacity-20" aria-hidden>
        <div className="absolute left-1/4 top-1/4 size-24 rotate-12 rounded-lg border border-cyan-400/40" />
        <div className="absolute right-1/4 bottom-1/4 size-20 -rotate-6 rounded-lg border border-white/20" />
      </div>

      <motion.div
        className="absolute h-[42%] w-[55%] rounded-xl bg-gradient-to-br from-cyan-400/35 to-cyan-600/20 ring-1 ring-cyan-400/50"
        animate={{
          x: congested ? -28 : -52,
          y: congested ? 8 : -4,
          rotate: congested ? -2 : -6,
        }}
        transition={{ type: "spring", stiffness: 100, damping: 16 }}
      />
      <motion.div
        className="absolute h-[38%] w-[48%] rounded-xl bg-gradient-to-br from-orange-400/40 to-orange-600/25 ring-1 ring-orange-400/55"
        animate={{
          x: congested ? 24 : 48,
          y: congested ? -6 : 10,
          rotate: congested ? 4 : 8,
        }}
        transition={{ type: "spring", stiffness: 100, damping: 16 }}
      />
      <motion.div
        className="absolute h-[28%] w-[40%] rounded-lg bg-white/10 ring-1 ring-white/25"
        animate={{
          x: congested ? 0 : 0,
          y: congested ? 0 : -18,
          opacity: congested ? 0.95 : 0.75,
        }}
        transition={{ type: "spring", stiffness: 120, damping: 18 }}
      />
    </div>
  );
}
