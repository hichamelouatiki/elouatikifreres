/**
 * Fat footer : marque, solutions, entreprise, contact + fine print.
 */

import { SiteLogo } from "@/components/site-logo";
import {
  Camera,
  Link,
  Mail,
  MapPin,
  Play,
  Phone,
} from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-zinc-950 px-5 py-14 sm:px-8 sm:py-16 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-4 lg:gap-10">
          {/* Colonne 1 : Identité */}
          <div className="space-y-5">
            <SiteLogo className="max-h-16 w-auto opacity-90 grayscale contrast-125 brightness-125" />
            <p className="max-w-sm text-sm leading-relaxed text-zinc-400">
              Elouatiki Frères : L&apos;alliance de l&apos;expertise constructive et de
              l&apos;intelligence prédictive.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="#"
                aria-label="LinkedIn"
                className="inline-flex size-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-zinc-300 transition hover:border-cyan-400/40 hover:text-white"
              >
                <Link className="size-5" aria-hidden />
              </a>
              <a
                href="#"
                aria-label="YouTube"
                className="inline-flex size-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-zinc-300 transition hover:border-orange-400/35 hover:text-white"
              >
                <Play className="size-5" aria-hidden />
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="inline-flex size-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-zinc-300 transition hover:border-white/20 hover:text-white"
              >
                <Camera className="size-5" aria-hidden />
              </a>
            </div>
          </div>

          {/* Colonne 2 : Solutions */}
          <nav aria-label="Pôles d'Expertise" className="space-y-5">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-zinc-500">
              Pôles d&apos;Expertise
            </p>
            <ul className="space-y-3 text-sm text-zinc-400">
              <li>
                <a className="transition hover:text-white" href="#">
                  IA pour le BTP
                </a>
              </li>
              <li>
                <a className="transition hover:text-white" href="#">
                  Gros Œuvre &amp; Construction
                </a>
              </li>
              <li>
                <a className="transition hover:text-white" href="#">
                  BIM intelligent (Building Information Modeling)
                </a>
              </li>
              <li>
                <a className="transition hover:text-white" href="#">
                  Maintenance Prédictive
                </a>
              </li>
              <li>
                <a className="transition hover:text-white" href="#">
                  Rénovation Énergétique
                </a>
              </li>
            </ul>
          </nav>

          {/* Colonne 3 : Entreprise */}
          <nav aria-label="Qui sommes-nous ?" className="space-y-5">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-zinc-500">
              Qui sommes-nous ?
            </p>
            <ul className="space-y-3 text-sm text-zinc-400">
              <li>
                <a className="transition hover:text-white" href="#">
                  À propos de nous
                </a>
              </li>
              <li>
                <a className="transition hover:text-white" href="#nos-realisations">
                  Nos Réalisations / Portfolio
                </a>
              </li>
              <li>
                <a className="transition hover:text-white" href="#">
                  Carrières / Recrutement
                </a>
              </li>
              <li>
                <a className="transition hover:text-white" href="#">
                  Blog / Actualités
                </a>
              </li>
            </ul>
          </nav>

          {/* Colonne 4 : Contact */}
          <div className="space-y-5">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-zinc-500">
              Nous joindre
            </p>
            <ul className="space-y-4 text-sm text-zinc-400">
              <li className="flex gap-3">
                <span className="mt-0.5 inline-flex size-9 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-cyan-300/90">
                  <MapPin className="size-4" aria-hidden />
                </span>
                <span>179 LOT KAMILA, ROUTE D'AGOURAI, 50000 MEKNES, MAROC</span>
              </li>
              <li className="flex gap-3">
                <span className="mt-0.5 inline-flex size-9 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-orange-200/90">
                  <Phone className="size-4" aria-hidden />
                </span>
                <a className="transition hover:text-white" href="tel:+212766738969">
                +212766738969
                </a>
              </li>
              <li className="flex gap-3">
                <span className="mt-0.5 inline-flex size-9 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-zinc-200/90">
                  <Mail className="size-4" aria-hidden />
                </span>
                <a className="transition hover:text-white" href="mailto:contact@elouatikifreres.com">
                  contact@elouatikifreres.com
                </a>
              </li>
              <li className="flex gap-3">
                <span className="mt-0.5 inline-flex size-9 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-green-200/90">
                  <MapPin className="size-4" aria-hidden />
                </span>
                <span>Zone d&apos;intervention : Maroc &amp; International</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Fine print */}
        <div className="mt-12 flex flex-col gap-4 border-t border-white/5 pt-8 text-xs text-zinc-500 md:flex-row md:items-center md:justify-between">
          <p>© 2025 Elouatiki Frères. Tous droits réservés.</p>
          <div className="flex flex-col gap-2 sm:flex-row sm:gap-5">
            <a className="transition hover:text-white" href="#">
              Mentions Légales
            </a>
            <a className="transition hover:text-white" href="#">
              Politique de Confidentialité / RGPD
            </a>
            <a className="transition hover:text-white" href="#">
              Gestion des Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
