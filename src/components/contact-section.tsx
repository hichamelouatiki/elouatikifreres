"use client";

import { Mail, MapPin, Phone } from "lucide-react";

import { ContactLeadForm } from "@/components/contact-lead-form";

export function ContactSection() {
  return (
    <section id="contact" className="scroll-mt-24 px-5 py-20 sm:px-8 sm:py-24 lg:px-12">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)] lg:items-start lg:gap-12 xl:gap-16">
        <div className="space-y-5 lg:sticky lg:top-28">
          <p className="text-sm font-medium uppercase tracking-[0.24em] text-cyan-400">
            Contact Projet
          </p>
          <h2 className="font-[family-name:var(--font-space-grotesk)] text-3xl font-bold text-white sm:text-4xl">
            Simulez votre chantier et recevez un premier cadrage.
          </h2>
          <p className="leading-relaxed text-zinc-400">
            Prêt à transformer l&apos;exécution de vos chantiers ? Décrivez-nous votre projet en
            quelques lignes et obtenez une première simulation et un cadrage stratégique de la part de
            nos experts.
          </p>
          <div className="space-y-4 border-t border-white/10 pt-6 text-zinc-300">
            <div className="flex items-center gap-3">
              <Mail className="size-5 shrink-0 text-cyan-400" aria-hidden />
              <a href="mailto:contact@elouatikifreres.com" className="transition hover:text-white">
                contact@elouatikifreres.com
              </a>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="size-5 shrink-0 text-orange-400" aria-hidden />
              <a href="tel:+212766738969" className="transition hover:text-white">
                +212 7 66 73 89 69
              </a>
            </div>
            <div className="flex items-center gap-3">
              <MapPin className="size-5 shrink-0 text-green-400" aria-hidden />
              <span>Maroc · Interventions nationales</span>
            </div>
          </div>
        </div>

        <ContactLeadForm />
      </div>
    </section>
  );
}
