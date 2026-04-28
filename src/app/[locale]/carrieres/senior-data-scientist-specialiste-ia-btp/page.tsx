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
  ShieldCheck,
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

const jobTitle = "Senior Data Scientist – Spécialiste IA et BTP (H/F)";
const applyEmail = "rh@elouatikifreres.com";
const applySubject = "Candidature Senior Data Scientist BTP";
const applyHref = `mailto:${applyEmail}?subject=${encodeURIComponent(applySubject)}`;

const responsibilities = [
  "Conception d'Algorithmes Avancés : Développer et déployer des modèles de Machine Learning et Deep Learning de pointe pour la prédiction des retards, l'optimisation des ressources et la détection d'anomalies.",
  "Computer Vision et IoT : Travailler sur le traitement d'images de chantier (drones/caméras) pour le suivi d'avancement automatisé et la détection d'erreurs d'exécution en temps réel.",
  "Graphes et BIM : Exploiter les structures de données complexes du BIM (Graph Neural Networks) pour optimiser le routage des réseaux (MEP) et la synthèse technique.",
  "Maintenance Prédictive : Concevoir des modèles basés sur les capteurs IoT pour le pilotage intelligent des bâtiments et la gestion des pannes avant leur occurrence (BIM 7D).",
  "Gouvernance de la Donnée : Structurer et nettoyer les bases de données relationnelles issues du terrain pour garantir la haute fidélité des modèles d'entraînement.",
];

const profileItems = [
  "Formation : Diplôme d'Ingénieur ou Doctorat (PhD) en Data Science, Mathématiques Appliquées ou Intelligence Artificielle.",
  "Expérience : Minimum 5 à 7 ans d'expérience, avec une expertise démontrée dans l'application de l'IA au secteur industriel ou à la construction.",
  "Maîtrise Technique (État de l'art) : Maîtrise profonde des architectures récentes (Transformers, GNN, GANs, Reinforcement Learning) et expertise en Computer Vision (YOLOv8+, segmentation, photogrammétrie).",
  "Stack Technologique : Maîtrise de Python (PyTorch, TensorFlow, JAX, Scikit-learn) et expérience en déploiement (MLOps, Docker, Kubernetes, Cloud).",
  "Soft Skills : Excellente capacité de vulgarisation pour faire le lien entre les algorithmes complexes et les équipes sur le terrain.",
];

const whyItems = [
  "Impact Réel : Vos algorithmes ne resteront pas dans un laboratoire ; ils seront déployés sur des projets d'envergure (hôpitaux, complexes industriels).",
  "Innovation sans limites : Accès à des jeux de données uniques combinant BIM, relevés 3D (nuages de points) et flux IoT.",
  "Autonomie : Vous jouez un rôle clé dans la définition de la feuille de route technologique d'une entreprise en pleine croissance.",
];

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  if (!isValidLocale(locale)) return {};

  return {
    title: "Senior Data Scientist spécialiste IA et BTP | El Ouatiki Frères",
    description:
      "Rejoignez El Ouatiki Frères comme Senior Data Scientist spécialiste IA et BTP pour transformer les données de chantier en intelligence opérationnelle.",
    alternates: {
      canonical: `/${locale}/carrieres/senior-data-scientist-specialiste-ia-btp/`,
    },
    openGraph: {
      title: "Senior Data Scientist spécialiste IA et BTP",
      description:
        "Une offre Data Science orientée BTP, Computer Vision, IoT, BIM et modèles prédictifs.",
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

export default async function SeniorDataScientistJobPage({ params }: Props) {
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
                <Tag>MEKNÈS, Maroc</Tag>
                <Tag>Hybride</Tag>
                <Tag>Data Science / BTP</Tag>
              </div>
              <p className="mt-7 max-w-3xl text-lg leading-8 text-slate-700">
                Transformez les données de chantier massives et hétérogènes en décisions
                opérationnelles capables de réduire les coûts, les délais et les risques terrain.
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
                  Chez El Ouatiki Frères, nous ne nous contentons pas de construire des bâtiments ;
                  nous construisons le futur de la construction. Notre mission est d&apos;allier
                  l&apos;expertise constructive traditionnelle (TCE, Réhabilitation) à
                  l&apos;intelligence prédictive.
                </p>
                <p>
                  En utilisant le BIM, l&apos;IoT et la Computer Vision, nous résolvons les problèmes
                  de synchronisation et optimisons la rentabilité sur le terrain.
                </p>
                <p>
                  Nous recherchons un(e) Senior Data Scientist passionné(e) par les défis concrets du
                  monde physique, capable de transformer des données de chantier massives et
                  hétérogènes en décisions stratégiques.
                </p>
              </div>
            </SectionCard>

            <SectionCard id="role" icon={Target} title="🎯 Votre Rôle Stratégique">
              <p className="text-base leading-8 text-slate-700">
                Rattaché(e) à la Direction Technologique, vous êtes le cerveau derrière nos modèles
                prédictifs. Vous collaborez étroitement avec nos ingénieurs BIM, nos conducteurs de
                travaux et nos chefs de projet pour intégrer l&apos;IA au cœur du cycle de vie des
                bâtiments. Votre objectif : passer de la donnée brute à une intelligence
                opérationnelle qui réduit les coûts et les délais.
              </p>
            </SectionCard>

            <SectionCard id="responsibilities" icon={ClipboardList} title="Vos responsabilités">
              <BulletList items={responsibilities} />
            </SectionCard>

            <SectionCard id="profile" icon={GraduationCap} title="🎓 Profil Recherché">
              <BulletList items={profileItems} />
            </SectionCard>

            <SectionCard id="why" icon={ShieldCheck} title="🚀 Pourquoi nous rejoindre ?">
              <BulletList items={whyItems} />
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
                    <dd className="text-slate-600">CDI</dd>
                  </div>
                </div>
                <div className="flex gap-3">
                  <MapPin className="mt-0.5 size-4 text-amber-700" aria-hidden />
                  <div>
                    <dt className="font-semibold text-slate-950">Lieu</dt>
                    <dd className="text-slate-600">MEKNÈS, Maroc / Hybride</dd>
                  </div>
                </div>
                <div className="flex gap-3">
                  <Clock3 className="mt-0.5 size-4 text-amber-700" aria-hidden />
                  <div>
                    <dt className="font-semibold text-slate-950">Expérience</dt>
                    <dd className="text-slate-600">5 à 7 ans en Data Science/BTP</dd>
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
