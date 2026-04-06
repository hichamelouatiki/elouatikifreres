"use client";

/**
 * Section « Ils nous font confiance » : bandeau infini.
 * N&B partout sauf dans une fenêtre horizontale centrée sur le viewport (couleur pleine au centre,
 * retour progressif au gris en sortant de la fenêtre).
 */

import { Fragment, useCallback, useLayoutEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import { motion, useAnimationFrame, useReducedMotion } from "framer-motion";

import { PARTNER_LOGOS, type PartnerLogo } from "@/data/partner-logos";
import { cn } from "@/lib/utils";

/**
 * `dist` = distance du centre du logo à l’axe vertical milieu de l’écran.
 * Plateau couleur si dist ≤ innerHalf, puis fondu jusqu’au gris sur `feather` px.
 */
function grayscaleForCenterWindow(distPx: number, vw: number): number {
  const innerHalf = vw * 0.14;
  const feather = Math.max(80, vw * 0.09);
  if (distPx <= innerHalf) return 0;
  if (distPx >= innerHalf + feather) return 100;
  const t = (distPx - innerHalf) / feather;
  const smooth = t * t * (3 - 2 * t);
  return smooth * 100;
}

type LogoCellProps = {
  logo: PartnerLogo;
  setRef: (el: HTMLDivElement | null) => void;
};

function LogoCell({ logo, setRef }: LogoCellProps) {
  return (
    <div
      ref={setRef}
      className={cn(
        "box-border flex h-14 w-[96px] shrink-0 items-center justify-center overflow-hidden px-1 sm:h-[4rem] sm:w-[116px] md:h-20 md:w-[140px] lg:h-[5.25rem] lg:w-[158px]",
        "transition-[filter] duration-300 ease-out",
      )}
    >
      <Image
        src={logo.src}
        alt={logo.alt}
        width={220}
        height={110}
        className="max-h-full max-w-full object-contain object-center"
        sizes="(max-width: 640px) 88px, (max-width: 768px) 108px, (max-width: 1024px) 132px, 150px"
      />
    </div>
  );
}

function LogoRow({
  logos,
  baseIndex,
  setRefAt,
  className,
}: {
  logos: PartnerLogo[];
  baseIndex: number;
  setRefAt: (index: number, el: HTMLDivElement | null) => void;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex items-center gap-12 pr-12 sm:gap-14 sm:pr-14 md:gap-16 md:pr-16 lg:gap-[4.5rem] lg:pr-[4.5rem]",
        className,
      )}
    >
      {logos.map((logo, i) => (
        <LogoCell key={`${baseIndex}-${i}-${logo.src}`} logo={logo} setRef={(el) => setRefAt(baseIndex + i, el)} />
      ))}
    </div>
  );
}

export function PartnerCarousel({ className }: { className?: string }) {
  const logos = PARTNER_LOGOS;
  const logosCount = logos.length;
  const count = logos.length * 2;
  const cellRefs = useRef<(HTMLDivElement | null)[]>([]);

  const rowRef = useRef<HTMLDivElement>(null);
  const [loopWidth, setLoopWidth] = useState(0);
  const [activeLogoIndex, setActiveLogoIndex] = useState<number>(0);
  const lastActiveIndexRef = useRef<number>(-1);

  const setRefAt = useCallback((index: number, el: HTMLDivElement | null) => {
    cellRefs.current[index] = el;
  }, []);

  const reduceMotion = useReducedMotion();
  const lastPaintMsRef = useRef<number>(0);

  useLayoutEffect(() => {
    const el = rowRef.current;
    if (!el) return;

    const measure = () => setLoopWidth(el.offsetWidth);
    measure();

    const ro = new ResizeObserver(measure);
    ro.observe(el);
    window.addEventListener("resize", measure);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, [logos]);

  useAnimationFrame((t) => {
    // Réduit le coût: pas besoin de repeindre à 60fps pour un simple filtre.
    if (t - lastPaintMsRef.current < 33) return; // ~30fps
    lastPaintMsRef.current = t;

    const refs = cellRefs.current;
    if (!refs.length) return;

    const vw = window.innerWidth;
    const cx = vw / 2;

    // 1) Trouver le logo le plus proche du centre
    let bestIndex = -1;
    let bestDist = Number.POSITIVE_INFINITY;

    for (let i = 0; i < count; i++) {
      const el = refs[i];
      if (!el) continue;
      const r = el.getBoundingClientRect();
      const logoCx = r.left + r.width / 2;
      const dist = Math.abs(logoCx - cx);
      if (dist < bestDist) {
        bestDist = dist;
        bestIndex = i;
      }
    }

    if (bestIndex < 0) return;

    // Mettre à jour l’index actif (sans rerender à chaque frame)
    const logicalIndex = logosCount > 0 ? bestIndex % logosCount : 0;
    if (logicalIndex !== lastActiveIndexRef.current) {
      lastActiveIndexRef.current = logicalIndex;
      setActiveLogoIndex(logicalIndex);
    }

    // 2) Appliquer: un seul logo en couleur (fenêtre centrée), tous les autres en N&B
    for (let i = 0; i < count; i++) {
      const el = refs[i];
      if (!el) continue;
      if (i !== bestIndex) {
        el.style.filter = "grayscale(100%)";
        continue;
      }
      el.style.filter = `grayscale(${grayscaleForCenterWindow(bestDist, vw)}%)`;
    }
  });

  const duration = loopWidth > 0 ? Math.max(28, loopWidth / 45) : 0;
  const activeAlt = useMemo(() => logos[activeLogoIndex]?.alt ?? "", [logos, activeLogoIndex]);
  const activeAltLines = useMemo(() => {
    // Règle demandée : quand on trouve " - ", on passe à la ligne.
    // On gère aussi les séparateurs typographiques fréquents.
    return activeAlt
      .split(/\s(?:-|—|–)\s/g)
      .map((s) => s.trim())
      .filter(Boolean);
  }, [activeAlt]);

  return (
    <section
      className={cn(
        "border-y border-white/[0.06] bg-zinc-950/80 px-5 py-16 sm:px-8 sm:py-20 lg:px-12",
        className,
      )}
      aria-labelledby="titre-partenaires"
    >
      <div className="mx-auto max-w-7xl">
        <header className="mx-auto max-w-3xl text-center">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.24em] text-cyan-400/90">
            Références
          </p>
          <h2
            id="titre-partenaires"
            className="font-[family-name:var(--font-space-grotesk)] text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-[2.5rem]"
          >
            Ils nous font confiance
          </h2>
          <p className="mt-4 text-pretty text-base leading-relaxed text-zinc-400 sm:text-lg">
            Des acteurs majeurs de la construction, du service public et de l&apos;innovation
            s&apos;appuient sur notre méthode pour sécuriser l&apos;exécution de leurs projets
            complexes.
          </p>
        </header>

        <div
          className={cn(
            "relative mt-10 overflow-hidden sm:mt-12",
            "[mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]",
          )}
        >
          <motion.div
            className="flex w-max will-change-transform"
            animate={reduceMotion || loopWidth <= 0 ? { x: 0 } : { x: [0, -loopWidth] }}
            transition={
              !reduceMotion && loopWidth > 0
                ? {
                    duration,
                    repeat: Infinity,
                    ease: "linear",
                  }
                : undefined
            }
          >
            <div ref={rowRef} className="flex">
              <LogoRow logos={logos} baseIndex={0} setRefAt={setRefAt} />
            </div>
            <div className="flex" aria-hidden>
              <LogoRow logos={logos} baseIndex={logos.length} setRefAt={setRefAt} />
            </div>
          </motion.div>
        </div>

        {activeAltLines.length ? (
          <p
            className="mt-5 text-center text-sm text-zinc-500"
            aria-live="polite"
          >
            {activeAltLines.map((line, idx) => (
              <Fragment key={`${idx}-${line.slice(0, 16)}`}>
                {idx > 0 ? <br /> : null}
                {line}
              </Fragment>
            ))}
          </p>
        ) : null}
      </div>
    </section>
  );
}
