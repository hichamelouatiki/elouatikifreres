"use client";

import { useMemo } from "react";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

import { NeutralAmpersandText } from "@/components/neutral-ampersand-text";
import { Button } from "@/components/ui/button";

export function MethodologySection() {
  const t = useTranslations("Methodology");

  const steps = useMemo(
    () =>
      [
        { titleKey: "step1Title" as const, descKey: "step1Desc" as const },
        { titleKey: "step2Title" as const, descKey: "step2Desc" as const },
        { titleKey: "step3Title" as const, descKey: "step3Desc" as const },
        { titleKey: "step4Title" as const, descKey: "step4Desc" as const },
      ] as const,
    [],
  );

  return (
    <section className="px-6 py-24 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-5xl">
        <div className="mb-14 text-center">
          <p className="text-sm font-medium uppercase tracking-[0.24em] text-orange-400">
            {t("eyebrow")}
          </p>
          <h2 className="mt-4 font-[family-name:var(--font-space-grotesk)] text-4xl font-bold text-white sm:text-5xl">
            {t("title")}
          </h2>
        </div>

        <div className="relative mx-auto max-w-3xl">
          <div className="absolute left-[23px] top-0 h-full w-px bg-gradient-to-b from-cyan-400 via-orange-500 to-green-500" />
          <div className="space-y-10">
            {steps.map((step, index) => (
              <motion.div
                key={step.titleKey}
                initial={{ opacity: 0, y: 26 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{ duration: 0.55, delay: index * 0.08 }}
                className="relative pl-16"
              >
                <div className="absolute left-0 top-1 flex size-12 items-center justify-center rounded-full border border-cyan-400/30 bg-zinc-900 text-sm font-bold text-cyan-300">
                  {index + 1}
                </div>
                <div className="rounded-[28px] border border-white/10 bg-white/5 p-6 backdrop-blur-md">
                  <h3 className="font-[family-name:var(--font-space-grotesk)] text-2xl font-semibold text-white">
                    <NeutralAmpersandText text={t(step.titleKey)} />
                  </h3>
                  <p className="mt-3 leading-7 text-zinc-400">{t(step.descKey)}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="mt-14 text-center">
          <Button size="lg">{t("cta")}</Button>
        </div>
      </div>
    </section>
  );
}
