"use client";

import { useTranslations } from "next-intl";

import { ContactLeadForm } from "@/components/contact-lead-form";

export function ContactSection() {
  const t = useTranslations("Contact");

  return (
    <section id="contact" className="scroll-mt-24 px-5 py-20 sm:px-8 sm:py-24 lg:px-12">
      <div className="mx-auto max-w-7xl space-y-8">
        <div className="mx-auto max-w-prose space-y-6 text-center lg:mx-0 lg:max-w-3xl lg:text-left">
          <p className="text-sm font-medium uppercase tracking-[0.24em] text-cyan-400">
            {t("eyebrow")}
          </p>
          <h2 className="font-[family-name:var(--font-space-grotesk)] text-3xl font-bold leading-tight text-white sm:text-4xl">
            {t("title")}
          </h2>
          <p className="leading-relaxed text-zinc-400">{t("intro")}</p>
        </div>

        <div className="mx-auto max-w-prose space-y-3 text-center lg:mx-0 lg:max-w-3xl lg:text-left">
          <h3 className="font-[family-name:var(--font-space-grotesk)] text-2xl font-bold leading-tight text-white sm:text-3xl">
            {t("formTitle")}
          </h3>
          <p className="text-sm leading-relaxed text-zinc-500 sm:text-base">{t("formHint")}</p>
        </div>

        <div className="min-w-0">
          <ContactLeadForm />
        </div>
      </div>
    </section>
  );
}
