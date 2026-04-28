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
  Wrench,
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
  "Technicien(ne) de Maintenance Multitechnique – Orienté(e) Smart Building et IoT (H/F)";
const applyEmail = "contact@elouatikifreres.com";
const applySubject = "Candidature Technicien Maintenance et IoT";
const applyHref = `mailto:${applyEmail}?subject=${encodeURIComponent(applySubject)}`;

const responsibilities = [
  {
    title: "Maintenance Multitechnique (Cœur de métier)",
    items: [
      "Interventions Curatives : Diagnostiquer les pannes complexes et réaliser les dépannages rapides en électricité, plomberie et CVC.",
      "Maintenance Préventive : Exécuter le planning d'entretien pour garantir la pérennité des équipements.",
      "Sécurité et Normes : Assurer la mise en conformité des installations et réaliser les tests réglementaires.",
    ],
  },
  {
    title: "Smart Building et Synergie Data (Innovation)",
    items: [
      "GMAO et Reporting Digital : Assurer une traçabilité numérique rigoureuse de vos interventions via tablette pour nourrir nos algorithmes.",
      "Gestion des Capteurs IoT : Participer à l'installation et au calibrage des capteurs connectés alimentant notre IA.",
      "Exploitation du BIM : Utiliser la maquette numérique 3D sur tablette pour localiser les réseaux encastrés avant d'intervenir.",
    ],
  },
];

const profileItems = [
  "Formation : Bac Pro, BTS ou DUT en Maintenance des Bâtiments, Électrotechnique ou Génie Climatique.",
  "Expérience : Au moins 3 ans d'expérience en maintenance multitechnique ou Facility Management.",
  "Compétences techniques : Polyvalence CVC/Élec/Plomberie et habilitations électriques à jour.",
  "Appétence Tech : Très à l'aise avec les outils digitaux (tablettes, GMAO) et curieux des technologies Smart Building.",
  "Savoir-être : Sens du service client, autonomie et capacité à remonter des informations structurées.",
];

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  if (!isValidLocale(locale)) return {};

  return {
    title: "Technicien de Maintenance Multitechnique Smart Building et IoT | El Ouatiki Frères",
    description:
      "Rejoignez El Ouatiki Frères comme Technicien de Maintenance Multitechnique orienté Smart Building et IoT pour connecter maintenance terrain, BIM et maintenance prédictive.",
    alternates: {
      canonical: `/${locale}/carrieres/technicien-maintenance-multitechnique-smart-building-iot/`,
    },
    openGraph: {
      title: "Technicien de Maintenance Multitechnique orienté Smart Building et IoT",
      description:
        "Une offre terrain entre maintenance multitechnique, GMAO, capteurs IoT, BIM 7D et optimisation énergétique.",
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

export default async function TechnicienMaintenanceJobPage({ params }: Props) {
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
                <Tag>CDD 6 mois</Tag>
                <Tag>Itinérant</Tag>
                <Tag>Sites clients</Tag>
                <Tag>Smart Building</Tag>
              </div>
              <p className="mt-7 max-w-3xl text-lg leading-8 text-slate-700">
                Devenez le relais terrain de notre maintenance prédictive en connectant interventions
                multitechniques, données IoT et maquette BIM d&apos;exploitation.
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
                  Chez El Ouatiki Frères, nous réinventons le secteur du BTP et de la gestion de
                  patrimoine en fusionnant le savoir-faire technique traditionnel et l&apos;Intelligence
                  Artificielle.
                </p>
                <p>
                  Notre force ? Allier l&apos;expertise TCE (Tous Corps d’État) à l&apos;intelligence
                  prédictive grâce au BIM, à l&apos;IoT et à l&apos;analyse de données.
                </p>
                <p>Nous ne nous contentons plus de réparer les pannes : nous les anticipons.</p>
              </div>
            </SectionCard>

            <SectionCard id="role" icon={Target} title="🎯 Votre Rôle Stratégique">
              <p className="text-base leading-8 text-slate-700">
                Véritable &quot;médecin du bâtiment&quot;, vous êtes le garant du bon fonctionnement,
                de la sécurité et de l&apos;optimisation énergétique des infrastructures de nos
                clients. Au-delà de l&apos;intervention technique classique, vous êtes les
                &quot;yeux et les mains&quot; de notre équipe Data sur le terrain, en interagissant
                avec nos systèmes de maintenance prédictive (BIM 7D).
              </p>
            </SectionCard>

            <SectionCard id="responsibilities" icon={Wrench} title="Vos responsabilités">
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
                  En intégrant El Ouatiki Frères, vous ne ferez plus seulement de la maintenance
                  &quot;subie&quot; : vous ferez de la maintenance &quot;intelligente&quot;.
                </p>
                <p>
                  Vous travaillerez avec des outils de pointe (BIM, IA) et jouerez un rôle clé dans
                  la transition énergétique de nos clients.
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
                    <dd className="text-slate-600">CDD de 6 mois après embauche</dd>
                  </div>
                </div>
                <div className="flex gap-3">
                  <MapPin className="mt-0.5 size-4 text-amber-700" aria-hidden />
                  <div>
                    <dt className="font-semibold text-slate-950">Lieu</dt>
                    <dd className="text-slate-600">Itinérant sur sites clients</dd>
                  </div>
                </div>
                <div className="flex gap-3">
                  <Clock3 className="mt-0.5 size-4 text-amber-700" aria-hidden />
                  <div>
                    <dt className="font-semibold text-slate-950">Expérience</dt>
                    <dd className="text-slate-600">Bac Pro / BTS, Min. 3 ans d&apos;expérience</dd>
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
