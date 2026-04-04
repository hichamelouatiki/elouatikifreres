/**
 * Pied de page minimal : marque stylisée, contacts, mentions légales.
 */

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 px-5 py-12 sm:px-8 lg:px-12">
      <div className="mx-auto flex max-w-7xl flex-col gap-10 md:flex-row md:items-start md:justify-between">
        {/* Logo textuel stylisé */}
        <div className="space-y-2">
          <p
            className="font-[family-name:var(--font-space-grotesk)] text-2xl font-bold tracking-tight"
            aria-label="Elouatikifreres"
          >
            <span className="bg-gradient-to-r from-cyan-300 via-white to-orange-300 bg-clip-text text-transparent">
              elouati
            </span>
            <span className="text-white">kifreres</span>
          </p>
          <p className="max-w-xs text-sm leading-relaxed text-zinc-500">
            IA, BIM, pilotage data et exécution BTP — intelligence artificielle au service du
            terrain.
          </p>
        </div>

        <nav
          className="flex flex-col gap-6 text-sm text-zinc-500 sm:flex-row sm:flex-wrap sm:gap-x-10 sm:gap-y-4"
          aria-label="Pied de page"
        >
          <div className="space-y-3">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-600">
              Contact
            </p>
            <ul className="flex flex-col gap-2">
              <li>
                <a
                  href="mailto:contact@elouatikifreres.com"
                  className="transition-colors hover:text-white"
                >
                  contact@elouatikifreres.com
                </a>
              </li>
              <li>
                <a href="tel:+212766738969" className="transition-colors hover:text-white">
                  +212 7 66 73 89 69
                </a>
              </li>
            </ul>
          </div>
          <div className="space-y-3">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-600">
              Liens
            </p>
            <ul className="flex flex-col gap-2">
              <li>
                <a href="#notre-methode" className="transition-colors hover:text-white">
                  Notre méthode
                </a>
              </li>
              <li>
                <a href="#methodologie" className="transition-colors hover:text-white">
                  Méthodologie
                </a>
              </li>
              <li>
                <a href="#nos-realisations" className="transition-colors hover:text-white">
                  Nos réalisations
                </a>
              </li>
              <li>
                <a href="#contact" className="transition-colors hover:text-white">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="transition-colors hover:text-white">
                  Mentions légales
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>

      <div className="mx-auto mt-10 max-w-7xl border-t border-white/5 pt-8 text-center text-xs text-zinc-600 sm:text-left">
        © {new Date().getFullYear()} Elouatikifreres. Tous droits réservés.
      </div>
    </footer>
  );
}
