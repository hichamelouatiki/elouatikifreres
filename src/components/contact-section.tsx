"use client";

import { Mail, MapPin, Phone } from "lucide-react";

import { Button } from "@/components/ui/button";

export function ContactSection() {
  return (
    <section id="contact" className="scroll-mt-24 px-6 py-24 sm:px-8 lg:px-12">
      <div className="mx-auto grid max-w-7xl gap-8 rounded-[36px] border border-white/10 bg-white/5 p-8 backdrop-blur-md lg:grid-cols-[0.9fr_1.1fr] lg:p-10">
        <div className="space-y-5">
          <p className="text-sm font-medium uppercase tracking-[0.24em] text-cyan-400">
            Contact Projet
          </p>
          <h2 className="font-[family-name:var(--font-space-grotesk)] text-4xl font-bold text-white">
            Simulez votre chantier et recevez un premier cadrage.
          </h2>
          <p className="leading-8 text-zinc-400">
            Le formulaire reste 100% statique et peut etre connecte a Web3Forms en renseignant la cle publique dans `.env.local`.
          </p>
          <div className="space-y-4 text-zinc-300">
            <div className="flex items-center gap-3">
              <Mail className="size-5 text-cyan-400" />
              <span>contact@elouatikifreres.com</span>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="size-5 text-orange-400" />
              <span>+212 6 00 00 00 00</span>
            </div>
            <div className="flex items-center gap-3">
              <MapPin className="size-5 text-green-400" />
              <span>Maroc · Interventions nationales</span>
            </div>
          </div>
        </div>

        <form
          action="https://api.web3forms.com/submit"
          method="POST"
          className="grid gap-4"
        >
          <input
            type="hidden"
            name="access_key"
            value={process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY ?? ""}
          />
          <input type="hidden" name="subject" value="Nouvelle demande projet Elouatikifreres" />
          <input
            type="text"
            name="name"
            placeholder="Nom et prenom"
            className="h-12 rounded-2xl border border-white/10 bg-zinc-950 px-4 text-white outline-none placeholder:text-zinc-500"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email professionnel"
            className="h-12 rounded-2xl border border-white/10 bg-zinc-950 px-4 text-white outline-none placeholder:text-zinc-500"
            required
          />
          <textarea
            name="message"
            placeholder="Decrivez rapidement votre chantier, vos objectifs et vos contraintes."
            rows={6}
            className="rounded-3xl border border-white/10 bg-zinc-950 px-4 py-3 text-white outline-none placeholder:text-zinc-500"
            required
          />
          <Button type="submit" size="lg" className="w-full sm:w-fit">
            Envoyer ma demande
          </Button>
        </form>
      </div>
    </section>
  );
}
