"use client";

/**
 * Animation type Computer Vision : mur scanné par une ligne verticale lumineuse
 * et bounding boxes qui apparaissent de façon pseudo-aléatoire.
 */

import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

type Box = {
  id: string;
  top: string;
  left: string;
  width: string;
  height: string;
};

const POOL: Omit<Box, "id">[] = [
  { top: "22%", left: "18%", width: "22%", height: "18%" },
  { top: "28%", left: "52%", width: "18%", height: "14%" },
  { top: "48%", left: "24%", width: "28%", height: "22%" },
  { top: "52%", left: "58%", width: "20%", height: "16%" },
  { top: "18%", left: "42%", width: "14%", height: "12%" },
  { top: "62%", left: "38%", width: "24%", height: "18%" },
];

function pickRandomBoxes(count: number): Box[] {
  const shuffled = [...POOL].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count).map((b) => ({
    ...b,
    id:
      typeof crypto !== "undefined" && "randomUUID" in crypto
        ? crypto.randomUUID()
        : `${b.top}-${b.left}-${Math.random().toString(36).slice(2)}`,
  }));
}

export function ComputerVisionVisual() {
  const reduceMotion = useReducedMotion();
  const [boxes, setBoxes] = useState<Box[]>(() => pickRandomBoxes(3));

  const refreshBoxes = useCallback(() => {
    setBoxes(pickRandomBoxes(2 + Math.floor(Math.random() * 3)));
  }, []);

  useEffect(() => {
    if (reduceMotion) return;
    const id = window.setInterval(refreshBoxes, 2200);
    return () => window.clearInterval(id);
  }, [reduceMotion, refreshBoxes]);

  return (
    <div className="relative h-full min-h-[140px] w-full overflow-hidden">
      {/* Mur / scène stylisée */}
      <div
        className="absolute inset-[12%] rounded-lg border border-zinc-700/80 bg-gradient-to-br from-zinc-900 via-zinc-950 to-zinc-900 shadow-inner"
        aria-hidden
      />
      <div
        className="absolute inset-[12%] rounded-lg bg-[linear-gradient(105deg,transparent_40%,rgba(16,185,129,0.04)_50%,transparent_60%)]"
        aria-hidden
      />

      {/* Ligne de scan verticale (laser) se déplaçant horizontalement */}
      <div className="pointer-events-none absolute inset-x-0 top-[10%] z-10 h-[80%]">
        <motion.div
          className="absolute top-0 h-full w-px -translate-x-1/2"
          style={{
            background:
              "linear-gradient(to bottom, transparent 0%, rgba(52,211,153,0.2) 15%, rgb(52,211,153) 50%, rgba(52,211,153,0.2) 85%, transparent 100%)",
            boxShadow:
              "0 0 20px 4px rgba(52,211,153,0.45), 0 0 40px 8px rgba(52,211,153,0.15)",
          }}
          initial={false}
          animate={
            reduceMotion
              ? { left: "50%" }
              : {
                  left: ["6%", "94%", "6%"],
                }
          }
          transition={{
            duration: 5.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Bounding boxes (détections IA) */}
      <AnimatePresence mode="popLayout">
        {boxes.map((box) => (
          <motion.div
            key={box.id}
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ type: "spring", stiffness: 320, damping: 24 }}
            className="pointer-events-none absolute z-20 rounded-sm border-2 border-emerald-400/90 shadow-[0_0_0_1px_rgba(16,185,129,0.3),inset_0_0_12px_rgba(52,211,153,0.15)]"
            style={{
              top: box.top,
              left: box.left,
              width: box.width,
              height: box.height,
            }}
          >
            <span className="absolute -left-px -top-5 text-[9px] font-mono font-medium uppercase tracking-wider text-emerald-400/90">
              DET
            </span>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}
