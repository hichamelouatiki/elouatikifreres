"use client";

/**
 * Section « Nos réalisations » : mise en page type Bento (grille asymétrique).
 * Alternance blocs texte / placeholders image (gris foncé).
 */

import { useTranslations } from "next-intl";

import { FadeUp } from "@/components/fade-up";
import { BentoCell } from "@/components/bento-cell";

export function RealisationsSection() {
  const t = useTranslations("Realisations");

  return (
    <section
      id="nos-realisations"
      className="scroll-mt-24 px-5 py-20 sm:px-8 sm:py-24 lg:px-12"
      aria-labelledby="titre-realisations"
    >
      <div className="mx-auto max-w-7xl space-y-10 sm:space-y-12">
        <FadeUp inView className="max-w-3xl space-y-4">
          <p className="text-sm font-medium uppercase tracking-[0.24em] text-cyan-400">
            {t("eyebrow")}
          </p>
          <h2
            id="titre-realisations"
            className="font-[family-name:var(--font-space-grotesk)] text-3xl font-bold text-white sm:text-4xl md:text-5xl"
          >
            {t("title")}
          </h2>
        </FadeUp>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-5 lg:grid-cols-4 lg:grid-rows-3 lg:gap-5">
          <BentoCell
            index={0}
            gridClassName="lg:[grid-column:1/3] lg:[grid-row:1/2]"
            visual={false}
          >
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-zinc-500">
                {t("cell1Eyebrow")}
              </p>
              <h3 className="mt-3 font-[family-name:var(--font-space-grotesk)] text-2xl font-bold text-white sm:text-3xl">
                {t("cell1Title")}
              </h3>
            </div>
            <p className="max-w-xl text-sm leading-relaxed text-zinc-300 sm:text-base">
              {t("cell1Body")}
            </p>
          </BentoCell>

          <BentoCell
            index={1}
            gridClassName="lg:[grid-column:3/5] lg:[grid-row:1/3]"
            visual={false}
          >
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-zinc-500">
                {t("cell2Eyebrow")}
              </p>
              <h3 className="mt-3 font-[family-name:var(--font-space-grotesk)] text-2xl font-bold text-white sm:text-3xl">
                {t("cell2Title")}
              </h3>
            </div>
            <p className="max-w-xl text-sm leading-relaxed text-zinc-300 sm:text-base">
              {t("cell2Body")}
            </p>
            <div
              className="mt-6 min-h-[120px] flex-1 rounded-2xl bg-gradient-to-br from-zinc-800 via-zinc-900 to-zinc-950 ring-1 ring-inset ring-white/5"
              role="img"
              aria-label={t("cell2VisualAria")}
            />
          </BentoCell>

          <BentoCell
            index={2}
            gridClassName="lg:[grid-column:1/3] lg:[grid-row:2/3]"
            visual={false}
          >
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-zinc-500">
                {t("cell3Eyebrow")}
              </p>
              <h3 className="mt-3 font-[family-name:var(--font-space-grotesk)] text-2xl font-bold text-white sm:text-3xl">
                {t("cell3Title")}
              </h3>
            </div>
            <p className="max-w-xl text-sm leading-relaxed text-zinc-300 sm:text-base">
              {t("cell3Body")}
            </p>
          </BentoCell>

          <BentoCell
            index={3}
            gridClassName="lg:[grid-column:1/5] lg:[grid-row:3/4]"
            visual
            visualLabel={t("cell4VisualAria")}
          />
        </div>
      </div>
    </section>
  );
}
