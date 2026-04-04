"use client";

/**
 * Animation type Gantt / convoi : blocs (camions) qui changent de voie pour éviter le blocage.
 */

import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

import { cn } from "@/lib/utils";

const LANES = 5;

type BlockSpec = {
  id: string;
  w: string;
  color: string;
  /** Positions en % de gauche, phase 0 = congestion partielle, phase 1 = résolue */
  phases: [{ lane: number; left: string }, { lane: number; left: string }];
};

const BLOCKS: BlockSpec[] = [
  {
    id: "a",
    w: "18%",
    color: "bg-orange-500",
    phases: [
      { lane: 1, left: "8%" },
      { lane: 1, left: "6%" },
    ],
  },
  {
    id: "b",
    w: "14%",
    color: "bg-cyan-400",
    phases: [
      { lane: 1, left: "38%" },
      { lane: 2, left: "40%" },
    ],
  },
  {
    id: "c",
    w: "16%",
    color: "bg-green-500",
    phases: [
      { lane: 2, left: "22%" },
      { lane: 0, left: "24%" },
    ],
  },
  {
    id: "d",
    w: "12%",
    color: "bg-orange-400/90",
    phases: [
      { lane: 3, left: "12%" },
      { lane: 3, left: "10%" },
    ],
  },
  {
    id: "e",
    w: "15%",
    color: "bg-cyan-500/80",
    phases: [
      { lane: 3, left: "52%" },
      { lane: 4, left: "55%" },
    ],
  },
  {
    id: "f",
    w: "20%",
    color: "bg-amber-500",
    phases: [
      { lane: 4, left: "28%" },
      { lane: 2, left: "62%" },
    ],
  },
];

/** Lignes de grille type Gantt (temps) */
function GanttGrid() {
  return (
    <div
      className="pointer-events-none absolute inset-0 opacity-[0.12]"
      aria-hidden
    >
      {Array.from({ length: 8 }).map((_, i) => (
        <div
          key={i}
          className="absolute top-0 h-full w-px bg-white"
          style={{ left: `${(i + 1) * 12.5}%` }}
        />
      ))}
    </div>
  );
}

export function LogisticsFlowVisual() {
  const reduceMotion = useReducedMotion();
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    if (reduceMotion) return;
    const id = window.setInterval(() => setPhase((p) => (p === 0 ? 1 : 0)), 3200);
    return () => window.clearInterval(id);
  }, [reduceMotion]);

  const laneHeightPct = 100 / LANES;

  return (
    <div className="relative h-full min-h-[140px] w-full">
      <GanttGrid />

      {/* Voies horizontales (repères type Gantt) */}
      <div className="absolute inset-x-0 top-[8%] bottom-[8%] flex flex-col justify-between">
        {Array.from({ length: LANES }).map((_, lane) => (
          <div
            key={lane}
            className="h-px w-full bg-gradient-to-r from-transparent via-white/18 to-transparent"
          />
        ))}
      </div>

      {BLOCKS.map((block) => {
        const pos = block.phases[reduceMotion ? 1 : phase];
        const topPct = pos.lane * laneHeightPct + laneHeightPct * 0.2;

        return (
          <motion.div
            key={block.id}
            className={cn(
              "absolute rounded-md shadow-lg shadow-black/40 ring-1 ring-white/10",
              block.color,
            )}
            initial={false}
            animate={{
              top: `${topPct}%`,
              left: pos.left,
              scale: reduceMotion ? 1 : phase === 1 ? 1 : 0.96,
            }}
            transition={{
              type: "spring",
              stiffness: 120,
              damping: 18,
              mass: 0.8,
            }}
            style={{
              width: block.w,
              height: "14%",
              minHeight: 10,
            }}
          />
        );
      })}
    </div>
  );
}
