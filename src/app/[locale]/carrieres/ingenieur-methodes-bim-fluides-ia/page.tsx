import type { Metadata } from "next";
import {
  ArrowLeft,
  ArrowRight,
  BriefcaseBusiness,
  Building2,
  CheckCircle2,
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

const jobTitle =
  "Ingénieur(e) Méthodes de Modélisation et Expert(e) BIM Fluides (CVC/MEP) – Orienté(e) IA et Data";
const applyEmail = "rh@elouatikifreres.com";
const applySubject = "Candidature : Ingénieur BIM Fluides et IA";
const applyHref = `mailto:${applyEmail}?subject=${encodeURIComponent(applySubject)}`;

const responsibilities = [
  {
    title: "Expertise BIM et Fluides (Cœur de métier)",
    items: [
      "Modélisation 3D et Maquette Numérique : Élaborer des maquettes numériques 3D détaillées pour les lots fluides (CVC - Chauffage, Ventilation, Climatisation, Plomberie, Désenfumage, Électricité et Fluides spéciaux).",
      "Synthèse Technique et Coordination : Assurer la coordination interdisciplinaire. Réaliser des simulations avancées et la détection préventive des conflits (Clash Detection).",
      "Production Graphique : Réaliser les pièces graphiques de conception et d'exécution : plans de réservations, de réseaux, de détails, coupes, aménagement de chaufferies.",
      "Études Techniques : Réaliser les notes de calculs normées, les dimensionnements des systèmes fluides, ainsi que les études thermiques.",
      "Scan to BIM : Traiter les relevés 3D (nuages de points) pour la numérisation de bâtiments existants.",
    ],
  },
  {
    title: "Synergie Data et Intelligence Artificielle (Innovation)",
    items: [
      "Gestion et Structuration des Données : Assurer le stockage et la gestion de la base de données de la maquette BIM pour entraîner nos modèles d'IA.",
      'Collaboration IA et "Generative Design" : Travailler avec l\'équipe Data pour définir les contraintes permettant à l\'IA de générer des variantes de conception BIM optimisées.',
      "Optimisation par l'IA : Proposer automatiquement des solutions de routage alternatif pour les réseaux fluides (MEP).",
      "Jumeau Numérique (Digital Twin) : Participer au développement de jumeaux numériques cognitifs en connectant le BIM (BIM 7D) et les capteurs IoT.",
    ],
  },
];

const profileItems = [
  "Formation : Diplôme d'Ingénieur (Bac+5) en Génie Climatique, Énergétique, ou Ingénierie du Bâtiment avec une forte spécialisation en méthodologie BIM.",
  "Expertise Logicielle : Maîtrise impérative des logiciels REVIT (Architecture et MEP), AUTOCAD, NOVA, et NOVABIM. (Navisworks est un atout).",
  "Compétences Techniques : Excellente connaissance technique MEP, calculs de déperditions, dimensionnement des réseaux fluides, et maîtrise des conventions BIM.",
  "Savoir-être : Rigueur, fort esprit de synthèse, réelle volonté d'innovation technologique et esprit collaboratif pour faire le pont entre l'ingénierie et la Data.",
];

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  if (!isValidLocale(locale)) return {};

  return {
    title: "Ingénieur BIM Fluides CVC/MEP et IA | El Ouatiki Frères",
    description:
      "Rejoignez El Ouatiki Frères comme Ingénieur Méthodes de Modélisation et Expert BIM Fluides CVC/MEP orienté IA et Data.",
    alternates: {
      canonical: `/${locale}/carrieres/ingenieur-methodes-bim-fluides-ia/`,
    },
    openGraph: {
      title: "Ingénieur(e) Méthodes de Modélisation et Expert(e) BIM Fluides",
      description:
        "Une offre BIM Fluides CVC/MEP orientée IA, Data, jumeau numérique et optimisation énergétique.",
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

export default async function IngenieurBimFluidesJobPage({ params }: Props) {
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
                <Tag>BIM Fluides</Tag>
                <Tag>MEKNES, Maroc</Tag>
              </div>
              <p className="mt-7 max-w-3xl text-lg leading-8 text-slate-700">
                Pilotez la méthodologie BIM Fluides et connectez la donnée technique aux nouveaux
                usages IA, de la conception jusqu&apos;au jumeau numérique.
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
                  Expert en modélisation BIM, El Ouatiki Frères déploie son savoir-faire pour
                  répondre à des projets &quot;Full BIM&quot; sur le territoire marocain et en
                  Afrique, notamment sur des projets hospitaliers, laboratoires, tertiaires,
                  industriels et résidentiels.
                </p>
                <p>
                  Nous accompagnons les maîtres d&apos;ouvrages, architectes et entreprises dans la
                  numérisation de leurs bâtiments et l&apos;optimisation énergétique, de la phase de
                  conception (AVP/PRO) jusqu&apos;au suivi de chantier et la livraison.
                </p>
                <p>
                  Aujourd&apos;hui, l&apos;intégration de l&apos;IA dans nos flux de travail BIM est
                  un avantage concurrentiel majeur pour notre entreprise. Nous considérons que le BIM
                  fournit la donnée structurée, et que l&apos;IA exploite cette donnée pour analyser,
                  prédire et optimiser.
                </p>
                <p>
                  En nous rejoignant, vous participez à cette boucle vertueuse pour construire plus
                  vite, moins cher, et de manière plus durable.
                </p>
              </div>
            </SectionCard>

            <SectionCard id="missions" icon={Target} title="🎯 Vos Missions Principales">
              <p className="mb-7 text-base leading-8 text-slate-700">
                Au sein d&apos;une équipe de plus de 5 ingénieurs, techniciens et dessinateurs, vous
                êtes le garant de la méthodologie BIM et de la qualité des livrables techniques.
                Véritable pivot technologique, vos missions se divisent entre l&apos;expertise métier
                et l&apos;innovation orientée Data :
              </p>
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
                  En intégrant El Ouatiki Frères, vous évoluerez dans des bureaux dynamiques et
                  interviendrez sur des projets de haute technicité (hôpitaux modernes,
                  laboratoires).
                </p>
                <p>
                  Nous mettons un point d&apos;honneur sur la formation constante de nos équipes aux
                  meilleurs logiciels et process du marché pour booster l&apos;efficacité énergétique
                  de nos bâtiments.
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
                    <dd className="text-slate-600">MEKNES, Maroc</dd>
                  </div>
                </div>
                <div className="flex gap-3">
                  <Clock3 className="mt-0.5 size-4 text-amber-700" aria-hidden />
                  <div>
                    <dt className="font-semibold text-slate-950">Expérience</dt>
                    <dd className="text-slate-600">
                      Ingénieur (Bac+5), Expérience confirmée en BIM Fluides
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
