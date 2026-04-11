"use client";

import { ContactLeadForm } from "@/components/contact-lead-form";

export function ContactSection() {
  return (
    <section id="contact" className="scroll-mt-24 px-5 py-20 sm:px-8 sm:py-24 lg:px-12">
      <div className="mx-auto max-w-7xl space-y-8">
        <div className="mx-auto max-w-prose space-y-6 text-center lg:mx-0 lg:max-w-3xl lg:text-left">
          <p className="text-sm font-medium uppercase tracking-[0.24em] text-cyan-400">
            Contact Projet
          </p>
          <h2 className="font-[family-name:var(--font-space-grotesk)] text-3xl font-bold leading-tight text-white sm:text-4xl">
            Simulez votre chantier et recevez un premier cadrage.
          </h2>
          <p className="leading-relaxed text-zinc-400">
            Prêt à transformer l&apos;exécution de vos chantiers ? Décrivez-nous votre projet en
            quelques lignes et obtenez une première simulation et un cadrage stratégique de la part de
            nos experts.
          </p>
        </div>

        <div className="mx-auto max-w-prose space-y-3 text-center lg:mx-0 lg:max-w-3xl lg:text-left">
          <h3 className="font-[family-name:var(--font-space-grotesk)] text-2xl font-bold leading-tight text-white sm:text-3xl">
            Parlez-nous de votre projet
          </h3>
          <p className="text-sm leading-relaxed text-zinc-500 sm:text-base">
            Remplissez ce formulaire pour obtenir une simulation et un cadrage stratégique.
          </p>
        </div>

        <div className="min-w-0">
          <ContactLeadForm />
        </div>
      </div>
    </section>
  );
}
