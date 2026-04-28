"use client";

/**
 * Comparateur visuel BIM (numérique) vs chantier réel.
 * Contrôle par <input type="range" /> natif (souris + tactile), sans librairie externe.
 * Visuels servis depuis public/images/.
 */

import { useTranslations } from "next-intl";
import { useId, useState } from "react";

/** Plan / maquette BIM */
const BIM_IMAGE_SRC = "/images/Villa_BIM.png";
/** Photo de chantier — même cadrage approximatif que le BIM pour un effet crédible */
const REAL_IMAGE_SRC = "/images/Villa_beton.png";

export function BimVsRealitySlider() {
  const t = useTranslations("BimCompare");
  const [position, setPosition] = useState(50);
  const rangeId = useId();

  return (
    <section
      className="w-full min-w-0 bg-slate-50 px-5 py-16 sm:px-8 sm:py-20 lg:px-12"
      aria-labelledby={`${rangeId}-heading`}
    >
      <div className="mx-auto w-full min-w-0 max-w-5xl">
        {/* En-tête */}
        <header className="mx-auto mb-10 w-full min-w-0 max-w-3xl text-center sm:mb-12">
          <h2
            id={`${rangeId}-heading`}
            className="font-[family-name:var(--font-space-grotesk)] text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl md:text-4xl"
          >
            {t("title")}
          </h2>
          <p className="mt-4 text-lg font-medium text-cyan-700 sm:text-xl">
            <span className="bg-gradient-to-r from-cyan-700 via-cyan-600 to-slate-700 bg-clip-text text-transparent">
              {t("slogan")}
            </span>
          </p>
        </header>

        {/* Zone de comparaison */}
        <div className="w-full min-w-0 rounded-2xl bg-white p-2 shadow-lg ring-1 ring-slate-200/80 sm:p-3">
          <div
            className="relative aspect-video w-full min-h-0 overflow-hidden rounded-xl"
            style={{ touchAction: "pan-y" }}
          >
            {/* Couche basse : chantier réel (plein cadre) */}
            <img
              src={REAL_IMAGE_SRC}
              alt={t("altReal")}
              className="absolute inset-0 h-full w-full object-cover"
              draggable={false}
            />

            {/* Couche haute : BIM, rognée depuis la droite selon position (0–100 %) */}
            <img
              src={BIM_IMAGE_SRC}
              alt={t("altBim")}
              className="absolute inset-0 h-full w-full object-cover select-none"
              style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
              draggable={false}
            />

            {/* Bandeau droit (béton) : badge près du séparateur */}
            <div
              className="pointer-events-none absolute inset-y-0 flex items-end justify-start pb-3 pl-3 sm:pb-4 sm:pl-4"
              style={{ left: `${position}%`, right: 0 }}
            >
              <span className="max-w-[min(100%,11rem)] rounded-full border border-slate-200/90 bg-white/95 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-wider text-slate-700 shadow-md backdrop-blur-sm sm:text-xs">
                {t("labelReal")}
              </span>
            </div>

            {/* Bandeau gauche (BIM) : badge près du séparateur */}
            <div
              className="pointer-events-none absolute inset-y-0 flex items-end justify-end pb-3 pr-3 sm:pb-4 sm:pr-4"
              style={{ left: 0, width: `${position}%` }}
            >
              <span className="max-w-[min(100%,11rem)] rounded-full border border-cyan-200/90 bg-white/95 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-wider text-cyan-900 shadow-md backdrop-blur-sm sm:text-xs">
                {t("labelBim")}
              </span>
            </div>

            {/* Barre + poignée (lecture seule, suit la valeur) */}
            <div
              className="pointer-events-none absolute inset-y-0 z-[1] w-px bg-white/90 shadow-[0_0_12px_rgba(0,0,0,0.35)]"
              style={{ left: `${position}%`, transform: "translateX(-50%)" }}
              aria-hidden
            />
            <div
              className="pointer-events-none absolute top-1/2 z-[1] flex size-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-2 border-white bg-cyan-500 shadow-lg ring-4 ring-cyan-500/25 sm:size-12"
              style={{ left: `${position}%` }}
              aria-hidden
            >
              <span className="block h-1 w-4 rounded-full bg-white/90" />
            </div>

            {/* Contrôle interactif : toute la surface est draggable */}
            <label htmlFor={rangeId} className="sr-only">
              {t("sliderLabel")}
            </label>
            <input
              id={rangeId}
              type="range"
              min={0}
              max={100}
              value={position}
              onChange={(e) => setPosition(Number(e.target.value))}
              className="absolute inset-0 z-[2] h-full w-full cursor-ew-resize appearance-none bg-transparent opacity-0 [&::-moz-range-thumb]:h-full [&::-moz-range-thumb]:w-14 [&::-webkit-slider-thumb]:h-full [&::-webkit-slider-thumb]:w-14 [&::-webkit-slider-thumb]:appearance-none"
            />
          </div>

          <p className="mt-3 text-center text-xs text-slate-500 sm:text-sm">
            {t("hint")}
          </p>
        </div>
      </div>
    </section>
  );
}
