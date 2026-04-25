"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";

import { ContactLeadForm } from "@/components/contact-lead-form";

type TrustLogo = {
  id: "ocp" | "veolia" | "ministeres" | "jesa";
  label: string;
  src?: string;
};

const trustLogos: TrustLogo[] = [
  {
    id: "ocp",
    label: "OCP Group",
    src: "/media/Partener/ocp-group.svg",
  },
  {
    id: "veolia",
    label: "Veolia",
    src: "/media/Partener/veolia-transport.svg",
  },
  {
    id: "ministeres",
    label: "Ministères",
  },
  {
    id: "jesa",
    label: "JESA",
  },
];

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

        <div className="grid min-w-0 gap-6 lg:grid-cols-[0.88fr_1.35fr] lg:items-start lg:gap-8">
          <aside className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-zinc-950/80 p-6 shadow-2xl shadow-cyan-950/10 sm:p-8 lg:sticky lg:top-24">
            <div className="space-y-6">
              <div className="space-y-3">
                <p className="text-sm font-medium uppercase tracking-[0.24em] text-cyan-400">
                  {t("trustEyebrow")}
                </p>
                <h3 className="font-[family-name:var(--font-space-grotesk)] text-2xl font-bold leading-tight text-white sm:text-3xl">
                  {t("trustTitle")}
                </h3>
                <p className="text-sm leading-relaxed text-zinc-400 sm:text-base">
                  {t("trustBody")}
                </p>
              </div>

              <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-2">
                {trustLogos.map((logo) => (
                  <div
                    key={logo.id}
                    className="flex min-h-20 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 grayscale opacity-70 transition hover:opacity-90"
                  >
                    {logo.src ? (
                      <Image
                        src={logo.src}
                        alt={t(`trustLogos.${logo.id}`)}
                        width={132}
                        height={48}
                        className="max-h-10 w-auto object-contain"
                      />
                    ) : (
                      <span className="text-center font-[family-name:var(--font-space-grotesk)] text-sm font-semibold uppercase tracking-[0.18em] text-zinc-300">
                        {logo.label}
                      </span>
                    )}
                  </div>
                ))}
              </div>

              <div className="rounded-3xl border border-cyan-400/20 bg-cyan-400/5 p-4">
                <p className="text-sm leading-relaxed text-zinc-300">{t("trustProof")}</p>
              </div>
            </div>
          </aside>

          <div className="min-w-0">
            <ContactLeadForm />
          </div>
        </div>
      </div>
    </section>
  );
}
