import type { Metadata } from "next";
import {
  ArrowLeft,
  ArrowRight,
  BarChart3,
  BriefcaseBusiness,
  Building2,
  CheckCircle2,
  Clock3,
  HardHat,
  Mail,
  MapPin,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { notFound } from "next/navigation";
import { setRequestLocale } from "next-intl/server";

import { SiteFooter } from "@/components/site-footer";
import { Link } from "@/i18n/navigation";
import { isValidLocale } from "@/i18n/routing";

type Props = {
  params: Promise<{ locale: string }>;
};

const jobTitle = "🏗️ Conducteur de Travaux TCE et Référent Data Chantier (H/F)";
const applyEmail = "contact@elouatikifreres.com";
const applySubject = "Candidature : Conducteur de Travaux TCE et Référent Data";
const applyHref = `mailto:${applyEmail}?subject=${encodeURIComponent(applySubject)}`;

const responsibilities = [
  {
    title: "Pilotage opérationnel et Synergie Data",
    items: [
      "Collaborer étroitement avec l'équipe Data et IA : Remonter les informations qualifiées du terrain pour nourrir nos algorithmes et déployer nos outils technologiques sur site.",
      "Exploiter la donnée : S'appuyer sur nos tableaux de bord et nos modèles BIM pour anticiper les aléas, optimiser les délais et réduire les coûts.",
      "Préparer les chantiers et planifier les différentes phases.",
      "Assurer le suivi quotidien de l’exécution : avancement, qualité, sécurité, respect des délais.",
    ],
  },
  {
    title: "Gestion financière et contractuelle",
    items: [
      "Suivre les budgets et contrôler les coûts en temps réel grâce aux indicateurs de nos systèmes prédictifs.",
      "Gérer les situations de travaux, avenants et éventuelles modifications avec une traçabilité numérique rigoureuse.",
    ],
  },
  {
    title: "Coordination et management",
    items: [
      "Encadrer et animer les équipes travaux et les sous-traitants, en les accompagnant dans l'adoption de nos nouveaux outils digitaux.",
      "Coordonner l’ensemble des corps d’état dans une logique TCE.",
      "Maintenir une communication fluide avec les clients et partenaires via des reportings data fiables.",
    ],
  },
  {
    title: "Qualité, sécurité et reporting",
    items: [
      "Garantir l'application stricte des règles de sécurité sur le chantier.",
      "Veiller au respect des normes techniques et réglementaires.",
      "Assurer un reporting régulier auprès de la direction.",
    ],
  },
];

const profileItems = [
  "Formation : Diplôme Bac +3 minimum dans le domaine du BTP, un niveau Bac +5 ou diplôme d'ingénieur est idéal.",
  "Expérience : Au moins 5 ans en conduite de travaux TCE, idéalement en entreprise générale. Une expérience sur des projets de réhabilitation/rénovation est très appréciée.",
  "Compétences : Appétence forte pour l'innovation (Data, IA, BIM), solides connaissances techniques TCE.",
  "Soft skills : Aisance relationnelle (faire le lien entre le chantier et les ingénieurs de la donnée), autonomie, rigueur et sens de l'organisation.",
];

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  if (!isValidLocale(locale)) return {};

  return {
    title: "Conducteur de Travaux TCE et Référent Data Chantier | El Ouatiki Frères",
    description:
      "Rejoignez El Ouatiki Frères comme Conducteur de Travaux TCE et Référent Data Chantier pour connecter expertise terrain, BIM, IA et pilotage data.",
    alternates: {
      canonical: `/${locale}/carrieres/conducteur-travaux-tce-referent-data/`,
    },
    openGraph: {
      title: "Conducteur de Travaux TCE et Référent Data Chantier",
      description:
        "Une offre BTP hybride entre conduite de travaux TCE, réhabilitation, BIM, IA et reporting data.",
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

export default async function ConducteurTravauxJobPage({ params }: Props) {
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
                <Tag>Hybride / Chantier</Tag>
                <Tag>Meknès</Tag>
              </div>
              <p className="mt-7 max-w-3xl text-lg leading-8 text-slate-700">
                Faites le pont entre la réalité brute du terrain et notre pôle technologique pour
                accélérer le pilotage data des chantiers TCE.
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
                  Notre entreprise, El Ouatiki Frères, est spécialisée dans le BTP et la révolution
                  du pilotage de chantier par l&apos;Intelligence Artificielle. Solidement implantés
                  dans le Royaume, nous sommes reconnus pour notre savoir-faire en construction,
                  réhabilitation et rénovation Tous Corps d’État (TCE).
                </p>
                <p>
                  Notre force ? Allier l&apos;expertise constructive traditionnelle à
                  l&apos;intelligence prédictive. Comme le porte l&apos;ambition de notre site, nous
                  construisons les outils de demain (BIM, IoT, Computer Vision) pour résoudre les
                  problèmes de synchronisation, optimiser la rentabilité et offrir une exécution
                  irréprochable à notre clientèle variée.
                </p>
                <p>
                  Dans un contexte de forte croissance, nous recherchons un(e) Conducteur de Travaux
                  TCE expérimenté(e) pour faire le pont entre la réalité brute du terrain et notre
                  pôle technologique.
                </p>
              </div>
            </SectionCard>

            <SectionCard id="role" icon={Sparkles} title="🎯 Votre Rôle Stratégique">
              <p className="text-base leading-8 text-slate-700">
                Rattaché(e) à la direction travaux, vous prenez en charge la gestion complète de
                chantiers TCE (principalement orientés vers la réhabilitation), depuis la préparation
                jusqu’à la livraison. Au-delà de la conduite de travaux classique, vous êtes un
                acteur clé de notre transformation digitale.
              </p>
            </SectionCard>

            <SectionCard id="responsibilities" icon={BarChart3} title="Vos responsabilités">
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

            <SectionCard id="profile" icon={HardHat} title="🎓 Profil Recherché">
              <BulletList items={profileItems} />
            </SectionCard>

            <SectionCard id="why" icon={ShieldCheck} title="🚀 Pourquoi nous rejoindre ?">
              <div className="space-y-4 text-base leading-8 text-slate-700">
                <p>
                  Vous souhaitez vous investir dans une entreprise en pleine croissance qui redéfinit
                  les standards du BTP ?
                </p>
                <p>
                  Vous cherchez une réelle autonomie dans vos fonctions et voulez voir votre
                  expertise terrain décuplée par la puissance de la technologie ?
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

          <aside className="hidden space-y-4 lg:sticky lg:top-24 lg:block">
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
                    <dd className="text-slate-600">Meknès / Hybride / Chantier</dd>
                  </div>
                </div>
                <div className="flex gap-3">
                  <Clock3 className="mt-0.5 size-4 text-amber-700" aria-hidden />
                  <div>
                    <dt className="font-semibold text-slate-950">Expérience</dt>
                    <dd className="text-slate-600">5 ans minimum en conduite de travaux TCE</dd>
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
