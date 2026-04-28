import type { Metadata } from "next";
import {
  ArrowLeft,
  ArrowRight,
  BriefcaseBusiness,
  Building2,
  CheckCircle2,
  ClipboardList,
  Clock3,
  GraduationCap,
  Mail,
  MapPin,
  Rocket,
  Target,
} from "lucide-react";
import { notFound } from "next/navigation";
import { setRequestLocale } from "next-intl/server";

import { SiteFooter } from "@/components/site-footer";
import { Link } from "@/i18n/navigation";
import { isValidLocale } from "@/i18n/routing";

type Props = {
  params: Promise<{ locale: string }>;
};

const jobTitle = "Chef de Projet Réhabilitation BTP – Orienté(e) Data et IA (H/F)";
const applyEmail = "rh@elouatikifreres.com";
const applySubject = "Candidature : Chef de Projet Réhabilitation et IA";
const applyHref = `mailto:${applyEmail}?subject=${encodeURIComponent(applySubject)}`;

const responsibilities = [
  {
    title: "Pilotage de la Réhabilitation et Gestion de Projet (Cœur de métier)",
    items: [
      "Coordination globale : Diriger les projets de rénovation depuis l'étude de faisabilité jusqu'à la livraison finale.",
      "Management : Superviser et gérer efficacement les équipes de travail ainsi que les sous-traitants sur le chantier.",
      "Rigueur d'exécution : Veiller au respect strict des budgets alloués et à la conformité des travaux vis-à-vis des normes réglementaires.",
      "Expertise technique : Mener à bien les opérations en respectant scrupuleusement l'intégrité structurelle des bâtiments existants.",
    ],
  },
  {
    title: "Optimisation Énergétique et Environnementale",
    items: [
      "Bâtiment durable : Définir et mettre en œuvre des solutions techniques visant à améliorer les performances énergétiques et environnementales des ouvrages réhabilités.",
    ],
  },
  {
    title: "Synergie Data et Collaboration Technologique (Nouveauté)",
    items: [
      "Interface avec l'équipe Data : Travailler en étroite collaboration avec nos ingénieurs de la donnée pour faire remonter des informations qualifiées du chantier et entraîner nos modèles d'IA.",
      "Exploitation Technologique : S'appuyer sur la maquette numérique (BIM) et nos algorithmes pour anticiper les aléas, optimiser les séquences et simuler les coûts.",
      "Culture de l'innovation : Accompagner le déploiement de nos outils digitaux (tableaux de bord, Computer Vision) auprès des équipes opérationnelles.",
    ],
  },
];

const profileItems = [
  "Formation : De formation supérieure type Bac+5, vous possédez un diplôme en ingénierie civile, en architecture, ou dans un domaine connexe.",
  "Expérience : Vous justifiez d'une expérience pratique sur des postes progressifs dans la gestion de projets, avec une forte expertise technique en réhabilitation.",
  "Compétences techniques : Excellente compréhension des processus de construction, solides compétences budgétaires et maîtrise de l'optimisation énergétique.",
  "Appétence Tech/Data : Vous comprenez les enjeux de la donnée et de l'IA appliqués au BTP. Une expérience préalable avec le BIM est un atout majeur.",
  "Savoir-être : Excellent leadership, grande capacité de résolution de problèmes et communication fluide pour dialoguer aussi bien avec les ouvriers qu'avec les data scientists.",
];

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  if (!isValidLocale(locale)) return {};

  return {
    title: "Chef de Projet Réhabilitation BTP orienté Data et IA | El Ouatiki Frères",
    description:
      "Rejoignez El Ouatiki Frères comme Chef de Projet Réhabilitation BTP orienté Data et IA pour piloter des rénovations complexes et connecter le terrain aux outils numériques.",
    alternates: {
      canonical: `/${locale}/carrieres/chef-de-projet-rehabilitation-btp-data-ia/`,
    },
    openGraph: {
      title: "Chef de Projet Réhabilitation BTP orienté Data et IA",
      description:
        "Une offre BTP hybride entre réhabilitation, pilotage projet, BIM, IA et optimisation énergétique.",
      type: "article",
      locale,
    },
  };
}

function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex min-h-9 items-center rounded-full border border-slate-200 bg-white/80 px-4 text-sm font-semibold text-slate-700 shadow-sm">
      {children}
    </span>
  );
}

function SectionCard({
  id,
  icon: Icon,
  title,
  children,
}: {
  id: string;
  icon: typeof Building2;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-title`}
      className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-xl shadow-slate-200/60 sm:p-8"
    >
      <div className="mb-5 flex items-center gap-3">
        <span className="inline-flex size-12 items-center justify-center rounded-2xl bg-slate-950 text-white">
          <Icon className="size-5" aria-hidden />
        </span>
        <h2
          id={`${id}-title`}
          className="font-[family-name:var(--font-space-grotesk)] text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl"
        >
          {title}
        </h2>
      </div>
      {children}
    </section>
  );
}

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-3">
      {items.map((item) => (
        <li key={item} className="flex gap-3 text-slate-700">
          <CheckCircle2 className="mt-1 size-5 shrink-0 text-amber-600" aria-hidden />
          <span className="leading-7">{item}</span>
        </li>
      ))}
    </ul>
  );
}

export default async function ChefProjetRehabilitationJobPage({ params }: Props) {
  const { locale } = await params;

  if (!isValidLocale(locale)) {
    notFound();
  }

  setRequestLocale(locale);

  return (
    <main className="bg-[#f7f4ec] text-slate-950">
      <section className="relative overflow-hidden px-5 py-16 sm:px-8 sm:py-20 lg:px-12">
        <div className="absolute inset-0" aria-hidden>
          <div className="absolute inset-x-0 top-0 h-[40rem] bg-[radial-gradient(circle_at_15%_10%,rgba(245,158,11,0.2),transparent_34%),radial-gradient(circle_at_80%_18%,rgba(15,23,42,0.18),transparent_34%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(15,23,42,0.055)_1px,transparent_1px),linear-gradient(to_bottom,rgba(15,23,42,0.055)_1px,transparent_1px)] bg-[size:56px_56px] opacity-60" />
        </div>

        <div className="relative mx-auto max-w-7xl">
          <Link
            href="/carrieres"
            className="mb-8 inline-flex items-center gap-2 text-sm font-semibold text-slate-600 transition hover:text-slate-950"
          >
            <ArrowLeft className="size-4" aria-hidden />
            Retour aux offres
          </Link>

          <div className="grid gap-10 lg:grid-cols-[1fr_360px] lg:items-end">
            <div>
              <p className="mb-5 inline-flex rounded-full border border-amber-200 bg-amber-100 px-4 py-2 text-sm font-semibold uppercase tracking-[0.18em] text-amber-800 shadow-sm">
                Offre d&apos;emploi
              </p>
              <h1 className="max-w-5xl font-[family-name:var(--font-space-grotesk)] text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
                {jobTitle}
              </h1>
              <div className="mt-6 flex flex-wrap gap-3" aria-label="Informations clés du poste">
                <Tag>CDI</Tag>
                <Tag>Temps plein</Tag>
                <Tag>Maroc / Chantiers</Tag>
                <Tag>Réhabilitation</Tag>
              </div>
              <p className="mt-7 max-w-3xl text-lg leading-8 text-slate-700">
                Dirigez des projets complexes de rénovation tout en connectant la réalité du terrain
                aux usages Data, BIM et IA de notre pôle technologique.
              </p>
            </div>

            <aside className="rounded-[2rem] border border-slate-200 bg-white/90 p-6 shadow-2xl shadow-slate-300/50 backdrop-blur lg:sticky lg:top-24">
              <p className="font-[family-name:var(--font-space-grotesk)] text-xl font-bold text-slate-950">
                Prêt(e) à postuler ?
              </p>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Envoyez votre candidature avec CV. Le sujet de l&apos;e-mail est pré-rempli.
              </p>
              <a
                href={applyHref}
                className="mt-5 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-slate-950 px-5 text-base font-semibold text-white shadow-lg shadow-slate-300 transition hover:-translate-y-0.5 hover:bg-slate-800"
              >
                <Mail className="size-4" aria-hidden />
                Postuler maintenant
              </a>
            </aside>
          </div>
        </div>
      </section>

      <div className="px-5 pb-24 sm:px-8 lg:px-12">
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[minmax(0,1fr)_320px] lg:items-start">
          <div className="space-y-6">
            <SectionCard id="about" icon={Building2} title="À propos de nous">
              <div className="space-y-4 text-base leading-8 text-slate-700">
                <p>
                  Chez El Ouatiki Frères, nous fusionnons le savoir-faire traditionnel du BTP avec la
                  puissance de l&apos;Intelligence Artificielle. Solidement implantés dans le Royaume,
                  nous sommes reconnus pour notre expertise en construction et en réhabilitation Tous
                  Corps d’État (TCE).
                </p>
                <p>
                  Notre ambition ? Réinventer la gestion de projet en exploitant les outils de demain
                  (BIM, IoT, Computer Vision) pour optimiser la rentabilité, sécuriser les délais et
                  offrir une exécution irréprochable.
                </p>
                <p>
                  Dans le cadre du développement de notre pôle Rénovation, nous recherchons un(e)
                  Chef de Projet Réhabilitation innovant(e).
                </p>
              </div>
            </SectionCard>

            <SectionCard id="role" icon={Target} title="🎯 Votre Rôle Stratégique">
              <p className="text-base leading-8 text-slate-700">
                En tant que Chef de Projet Réhabilitation, vous dirigez des projets complexes de
                rénovation. Votre rôle est hybride : vous assurez la valorisation et la transformation
                d&apos;espaces existants tout en agissant comme le maillon essentiel entre la réalité
                du terrain et notre équipe Data.
              </p>
            </SectionCard>

            <SectionCard id="responsibilities" icon={ClipboardList} title="Vos responsabilités">
              <div className="space-y-7">
                {responsibilities.map((group, index) => (
                  <div key={group.title}>
                    <h3 className="mb-3 font-[family-name:var(--font-space-grotesk)] text-xl font-semibold text-slate-950">
                      {index + 1}. {group.title}
                    </h3>
                    <BulletList items={group.items} />
                  </div>
                ))}
              </div>
            </SectionCard>

            <SectionCard id="profile" icon={GraduationCap} title="🎓 Profil Recherché">
              <BulletList items={profileItems} />
            </SectionCard>

            <SectionCard id="why" icon={Rocket} title="🚀 Pourquoi nous rejoindre ?">
              <div className="space-y-4 text-base leading-8 text-slate-700">
                <p>
                  En rejoignant El Ouatiki Frères, vous ne gérez pas seulement la rénovation de
                  bâtiments, vous participez à la transformation technologique d&apos;un secteur tout
                  entier.
                </p>
                <p>
                  Nous vous offrons une réelle autonomie et l&apos;opportunité de voir votre expertise
                  terrain décuplée par la puissance de nos outils numériques.
                </p>
              </div>
              <a
                href={applyHref}
                className="mt-7 inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-amber-500 px-6 text-base font-bold text-slate-950 shadow-lg shadow-amber-200 transition hover:-translate-y-0.5 hover:bg-amber-400"
              >
                Postuler à cette offre ({applyEmail})
                <ArrowRight className="size-4" aria-hidden />
              </a>
            </SectionCard>
          </div>

          <aside className="space-y-4 lg:sticky lg:top-24">
            <div className="rounded-[2rem] border border-slate-200 bg-white p-5 shadow-xl shadow-slate-200/60">
              <p className="font-[family-name:var(--font-space-grotesk)] text-lg font-bold text-slate-950">
                Résumé du poste
              </p>
              <dl className="mt-4 space-y-4 text-sm">
                <div className="flex gap-3">
                  <BriefcaseBusiness className="mt-0.5 size-4 text-amber-700" aria-hidden />
                  <div>
                    <dt className="font-semibold text-slate-950">Contrat</dt>
                    <dd className="text-slate-600">CDI, Temps plein</dd>
                  </div>
                </div>
                <div className="flex gap-3">
                  <MapPin className="mt-0.5 size-4 text-amber-700" aria-hidden />
                  <div>
                    <dt className="font-semibold text-slate-950">Lieu</dt>
                    <dd className="text-slate-600">Maroc / Déplacements sur chantiers</dd>
                  </div>
                </div>
                <div className="flex gap-3">
                  <Clock3 className="mt-0.5 size-4 text-amber-700" aria-hidden />
                  <div>
                    <dt className="font-semibold text-slate-950">Expérience</dt>
                    <dd className="text-slate-600">
                      Bac+5, Expérience confirmée en réhabilitation
                    </dd>
                  </div>
                </div>
              </dl>
            </div>
          </aside>
        </div>
      </div>

      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-slate-200 bg-white/95 px-4 py-3 shadow-2xl backdrop-blur lg:hidden">
        <a
          href={applyHref}
          className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-slate-950 px-5 text-base font-semibold text-white"
        >
          <Mail className="size-4" aria-hidden />
          Postuler maintenant
        </a>
      </div>

      <SiteFooter />
    </main>
  );
}
