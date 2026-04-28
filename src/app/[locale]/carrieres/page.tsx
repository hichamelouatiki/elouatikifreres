import { ArrowRight, BriefcaseBusiness, Building2, MapPin, Network, Send } from "lucide-react";
import { notFound } from "next/navigation";
import { setRequestLocale } from "next-intl/server";

import { SiteFooter } from "@/components/site-footer";
import { Link } from "@/i18n/navigation";
import { isValidLocale } from "@/i18n/routing";

type Props = {
  params: Promise<{ locale: string }>;
};

type Job = {
  title: string;
  location: string;
  contract: string;
  href?: string;
};

type HiringPole = {
  title: string;
  description: string;
  icon: typeof Building2;
  accent: "navy" | "amber";
  jobs: Job[];
};

const hiringPoles: HiringPole[] = [
  {
    title: "Pôle Bâtiment et Exécution",
    description: "L'excellence opérationnelle, du premier coup de pioche à la remise des clés.",
    icon: Building2,
    accent: "amber",
    jobs: [
      {
        title: 'Conducteur de Travaux "Data-Driven"',
        location: "Meknès / Hybride",
        contract: "CDI",
        href: "/carrieres/conducteur-travaux-tce-referent-data",
      },
      {
        title: "Ingénieur Méthodes et BIM",
        location: "Meknès / Hybride",
        contract: "CDI",
        href: "/carrieres/ingenieur-methodes-bim-fluides-ia",
      },
      {
        title: "Chef de Projet Réhabilitation",
        location: "Maroc / Chantiers",
        contract: "CDI",
        href: "/carrieres/chef-de-projet-rehabilitation-btp-data-ia",
      },
      {
        title: "Technicien Maintenance Multitechnique",
        location: "Itinérant",
        contract: "CDD 6 mois",
        href: "/carrieres/technicien-maintenance-multitechnique-smart-building-iot",
      },
    ],
  },
  {
    title: "Pôle Data et Intelligence Artificielle",
    description: "La puissance algorithmique au service exclusif de la réalité du chantier.",
    icon: Network,
    accent: "navy",
    jobs: [
      {
        title: "Senior Data Scientist Spécialiste IA et BTP",
        location: "Meknès / Hybride",
        contract: "CDI",
        href: "/carrieres/senior-data-scientist-specialiste-ia-btp",
      },
      {
        title: "Développeur Full Stack Python AWS - IoT et CV",
        location: "Meknès / Hybride",
        contract: "CDI",
        href: "/carrieres/developpeur-full-stack-python-aws-iot-cv",
      },
    ],
  },
];

function poleAccentClasses(accent: HiringPole["accent"]) {
  if (accent === "amber") {
    return {
      icon: "border-amber-300 bg-amber-100 text-amber-700",
      border: "border-amber-200",
      eyebrow: "text-amber-700",
      button:
        "bg-amber-500 text-zinc-950 shadow-amber-200/70 hover:bg-amber-400 hover:shadow-lg",
    };
  }

  return {
    icon: "border-slate-300 bg-slate-100 text-slate-800",
    border: "border-slate-200",
    eyebrow: "text-slate-700",
    button: "bg-slate-950 text-white shadow-slate-300/50 hover:bg-slate-800 hover:shadow-lg",
  };
}

export default async function CareersPage({ params }: Props) {
  const { locale } = await params;

  if (!isValidLocale(locale)) {
    notFound();
  }

  setRequestLocale(locale);

  return (
    <main className="overflow-hidden bg-[#f7f4ec] text-slate-950">
      <section className="relative px-5 py-20 sm:px-8 sm:py-24 lg:px-12">
        <div className="absolute inset-0" aria-hidden>
          <div className="absolute inset-x-0 top-0 h-[36rem] bg-[radial-gradient(circle_at_15%_10%,rgba(245,158,11,0.18),transparent_34%),radial-gradient(circle_at_85%_15%,rgba(15,23,42,0.16),transparent_32%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(15,23,42,0.055)_1px,transparent_1px),linear-gradient(to_bottom,rgba(15,23,42,0.055)_1px,transparent_1px)] bg-[size:56px_56px] opacity-60" />
        </div>

        <div className="relative mx-auto max-w-7xl">
          <div className="max-w-4xl">
            <p className="mb-5 inline-flex rounded-full border border-slate-200 bg-white/70 px-4 py-2 text-sm font-semibold uppercase tracking-[0.18em] text-slate-600 shadow-sm backdrop-blur">
              Carrières / Recrutement
            </p>
            <h1 className="font-[family-name:var(--font-space-grotesk)] text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl md:text-6xl lg:text-7xl">
              Rejoignez les Bâtisseurs d&apos;Avenir.
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-700 sm:text-xl sm:leading-9">
              Ne vous contentez plus de suivre les plans. Rejoignez la convergence exacte entre
              l&apos;expertise du terrain et l&apos;intelligence artificielle pour construire le
              BTP de demain.
            </p>
            <div className="mt-9">
              <a
                href="mailto:rh@elouatikifreres.com?subject=Candidature%20spontan%C3%A9e%20-%20El%20Ouatiki%20Fr%C3%A8res"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-slate-950/20 bg-white/50 px-6 text-base font-semibold text-slate-950 shadow-sm backdrop-blur transition hover:-translate-y-0.5 hover:border-slate-950 hover:bg-white hover:shadow-lg"
              >
                <Send className="size-4" aria-hidden />
                Envoyer une candidature spontanée
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 pb-20 sm:px-8 sm:pb-24 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-700">
                Offres ouvertes
              </p>
              <h2 className="mt-3 font-[family-name:var(--font-space-grotesk)] text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
                Deux pôles, une même ambition : transformer le chantier.
              </h2>
            </div>
            <p className="max-w-md text-sm leading-7 text-slate-600 sm:text-base">
              Nos équipes réunissent la rigueur du terrain, la culture projet et les outils data
              qui rendent l&apos;exécution plus fiable.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            {hiringPoles.map((pole) => {
              const Icon = pole.icon;
              const accent = poleAccentClasses(pole.accent);

              return (
                <section
                  key={pole.title}
                  className={`rounded-[2rem] border bg-white/85 p-5 shadow-xl shadow-slate-200/70 backdrop-blur sm:p-7 ${accent.border}`}
                >
                  <div className="mb-6 flex items-start gap-4">
                    <span
                      className={`inline-flex size-13 shrink-0 items-center justify-center rounded-2xl border ${accent.icon}`}
                    >
                      <Icon className="size-6" aria-hidden />
                    </span>
                    <div>
                      <p className={`text-sm font-semibold uppercase tracking-[0.18em] ${accent.eyebrow}`}>
                        Département
                      </p>
                      <h3 className="mt-2 font-[family-name:var(--font-space-grotesk)] text-2xl font-bold text-slate-950">
                        {pole.title}
                      </h3>
                      <p className="mt-2 leading-7 text-slate-600">{pole.description}</p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    {pole.jobs.map((job) => (
                      <article
                        key={job.title}
                        className="group rounded-3xl border border-slate-200 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-slate-300 hover:shadow-lg"
                      >
                        <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
                          <div className="min-w-0">
                            <div className="mb-4 flex size-10 items-center justify-center rounded-xl bg-slate-950 text-white">
                              <BriefcaseBusiness className="size-5" aria-hidden />
                            </div>
                            <h4 className="font-[family-name:var(--font-space-grotesk)] text-xl font-semibold leading-tight text-slate-950">
                              {job.title}
                            </h4>
                            <div className="mt-4 flex flex-wrap gap-2">
                              <span className="inline-flex items-center gap-1.5 rounded-full bg-slate-100 px-3 py-1.5 text-xs font-semibold text-slate-700">
                                <MapPin className="size-3.5" aria-hidden />
                                {job.location}
                              </span>
                              <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-100 px-3 py-1.5 text-xs font-semibold text-amber-800">
                                {job.contract}
                              </span>
                            </div>
                          </div>

                          {job.href ? (
                            <Link
                              href={job.href}
                              className={`inline-flex min-h-11 shrink-0 items-center justify-center gap-2 rounded-full px-4 text-sm font-semibold transition duration-300 group-hover:-translate-y-0.5 ${accent.button}`}
                            >
                              Découvrir le poste
                              <ArrowRight
                                className="size-4 transition-transform group-hover:translate-x-1"
                                aria-hidden
                              />
                            </Link>
                          ) : (
                            <a
                              href={`mailto:rh@elouatikifreres.com?subject=Candidature%20-%20${encodeURIComponent(job.title)}`}
                              className={`inline-flex min-h-11 shrink-0 items-center justify-center gap-2 rounded-full px-4 text-sm font-semibold transition duration-300 group-hover:-translate-y-0.5 ${accent.button}`}
                            >
                              Découvrir le poste
                              <ArrowRight
                                className="size-4 transition-transform group-hover:translate-x-1"
                                aria-hidden
                              />
                            </a>
                          )}
                        </div>
                      </article>
                    ))}
                  </div>
                </section>
              );
            })}
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
