"use client";

/**
 * Section témoignages B2B (preuve sociale).
 * Données fictives — tableau `TESTIMONIALS` modifiable dans ce fichier.
 */

type Testimonial = {
  quote: string;
  /** Intitulé / fonction du signataire (ligne principale en gras). */
  role: string;
  /** Organisation (ligne d’accent, plus petite). */
  organization: string;
};

const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "Grâce à leur modélisation BIM et au pilotage par la donnée, nous avons évité des conflits majeurs en phase de conception. Le budget a été respecté au centime près.",
    role: "Directeur de Projet",
    organization: "OCP Group",
  },
  {
    quote:
      "L'approche d'El Ouatiki Frères est unique : ils comprennent la réalité brute du chantier tout en maîtrisant les outils prédictifs de demain. Un gain de temps inestimable.",
    role: "Maître d'Ouvrage",
    organization: "Ministère de l'Équipement",
  },
  {
    quote:
      "Le déploiement du suivi par vision par ordinateur a fluidifié toute notre logistique. Enfin une IA qui sert vraiment les équipes sur le terrain.",
    role: "Directeur des Opérations",
    organization: "Veolia",
  },
  {
    quote:
      "Le DOE numérique livré à la fin du chantier est un actif précieux pour notre exploitation future. Une exécution irréprochable du premier coup de pioche à la remise des clés.",
    role: "Chef de Projet BTP",
    organization: "ANEP Maroc",
  },
];

function DecorativeQuote() {
  return (
    <span
      className="pointer-events-none absolute left-4 top-2 font-[Georgia,'Times_New_Roman',serif] text-[4.5rem] font-light leading-none text-gray-200/90 select-none sm:left-5 sm:top-3 sm:text-[5.25rem]"
      aria-hidden
    >
      &ldquo;
    </span>
  );
}

export function Testimonials() {
  return (
    <section
      className="scroll-mt-24 bg-zinc-50 px-5 py-20 sm:px-8 sm:py-24 lg:px-12"
      aria-labelledby="titre-temoignages"
    >
      <div className="mx-auto max-w-7xl">
        <header className="mx-auto mb-12 max-w-3xl text-center md:mb-14">
          <h2
            id="titre-temoignages"
            className="font-[family-name:var(--font-space-grotesk)] text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl md:text-[2.35rem] md:leading-tight"
          >
            La donnée au service de ceux qui bâtissent
          </h2>
          <p className="mt-3 text-sm font-medium tracking-wide text-gray-500">
            Ce que disent nos partenaires
          </p>
        </header>

        <ul className="grid list-none grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
          {TESTIMONIALS.map((item) => (
            <li key={`${item.organization}-${item.role}`}>
              <article className="relative h-full rounded-2xl border border-gray-100 bg-white p-8 shadow-sm transition-shadow duration-300 hover:shadow-lg">
                <DecorativeQuote />
                <blockquote className="relative z-[1] pt-10">
                  <p className="text-pretty text-base italic leading-relaxed text-slate-700 sm:text-[1.05rem] sm:leading-relaxed">
                    {item.quote}
                  </p>
                  <footer className="mt-8 border-t border-gray-100 pt-6">
                    <p className="font-semibold text-gray-900">{item.role}</p>
                    <p className="mt-1 text-sm font-medium text-cyan-700">{item.organization}</p>
                  </footer>
                </blockquote>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
