export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 px-6 py-10 sm:px-8 lg:px-12">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 text-sm text-zinc-500 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-[family-name:var(--font-space-grotesk)] text-lg font-semibold text-white">
            Elouatikifreres
          </p>
          <p>IA, BIM, pilotage data et execution BTP.</p>
        </div>
        <div className="flex flex-wrap gap-4">
          <a href="mailto:contact@elouatikifreres.com" className="transition hover:text-white">
            Contact
          </a>
          <a href="#methodologie" className="transition hover:text-white">
            Methode
          </a>
          <a href="#" className="transition hover:text-white">
            Mentions legales
          </a>
        </div>
      </div>
    </footer>
  );
}
