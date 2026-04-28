"use client";

import { motion } from "framer-motion";
import { ArrowRight, Cog, SearchCheck, Users } from "lucide-react";
import { useTranslations } from "next-intl";

import { Button } from "@/components/ui/button";

export function ConsultingSection() {
  const t = useTranslations("Consulting");

  const pillars = [
    { icon: SearchCheck, title: t("pillar1Title"), text: t("pillar1Text") },
    { icon: Cog, title: t("pillar2Title"), text: t("pillar2Text") },
    { icon: Users, title: t("pillar3Title"), text: t("pillar3Text") },
  ];

  return (
    <section
      id="consulting"
      className="light-grid-pattern scroll-mt-24 bg-zinc-50 px-6 py-24 text-zinc-950 sm:px-8 lg:px-12"
    >
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="space-y-8"
        >
          <div className="space-y-4">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-orange-500">
              {t("eyebrow")}
            </p>
            <h2 className="font-[family-name:var(--font-space-grotesk)] text-4xl font-bold sm:text-5xl">
              {t("title")}
            </h2>
          </div>

          <div className="space-y-5">
            {pillars.map((pillar) => {
              const Icon = pillar.icon;

              return (
                <div
                  key={pillar.title}
                  className="rounded-[24px] border border-zinc-200 bg-white/85 p-5 shadow-lg shadow-zinc-200/60"
                >
                  <div className="mb-3 inline-flex size-12 items-center justify-center rounded-2xl bg-orange-100 text-orange-500">
                    <Icon className="size-5" />
                  </div>
                  <h3 className="text-xl font-semibold">{pillar.title}</h3>
                  <p className="mt-2 leading-7 text-zinc-600">{pillar.text}</p>
                </div>
              );
            })}
          </div>

          <Button variant="dark" size="lg">
            {t("ctaAudit")}
            <ArrowRight className="size-4" />
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="relative"
        >
          <div className="aspect-[4/3] overflow-hidden rounded-[32px] bg-[radial-gradient(circle_at_top_left,rgba(249,115,22,0.35),transparent_30%),linear-gradient(135deg,#0f172a,#27272a_45%,#52525b)] shadow-xl shadow-zinc-400/20" />
          <div className="absolute bottom-6 left-6 max-w-xs rounded-3xl border border-white/40 bg-white/75 p-5 backdrop-blur-md">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-orange-500">
              {t("alertEyebrow")}
            </p>
            <p className="mt-2 text-lg font-medium text-zinc-950">{t("alertBody")}</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
