import { notFound } from "next/navigation";
import { setRequestLocale } from "next-intl/server";

import { SiteFooter } from "@/components/site-footer";
import { isValidLocale } from "@/i18n/routing";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateStaticParams() {
  return [{ locale: "fr" }, { locale: "en" }, { locale: "ar" }];
}

export async function generateMetadata() {
  return {
    title: "Politique de Confidentialité / RGPD / Loi 09-08 | El Ouatiki Frères",
    description:
      "Politique de confidentialité d'El Ouatiki Frères, conforme au RGPD et à la Loi 09-08 relative à la protection des personnes physiques à l'égard du traitement des données à caractère personnel (Maroc).",
    robots: { index: false },
  };
}

export default async function PolitiqueConfidentialitePage({ params }: Props) {
  const { locale } = await params;
  if (!isValidLocale(locale)) notFound();
  setRequestLocale(locale);

  return (
    <>
      <main className="mx-auto w-full max-w-4xl px-5 pb-24 pt-16 sm:px-8 lg:px-12">
        {/* En-tête */}
        <div className="mb-12 space-y-4 border-b border-white/10 pb-10">
          <p className="text-sm font-medium uppercase tracking-[0.24em] text-cyan-400">
            Document légal
          </p>
          <h1 className="font-[family-name:var(--font-space-grotesk)] text-3xl font-bold leading-tight text-white sm:text-4xl">
            Politique de Confidentialité
          </h1>
          <p className="text-zinc-400">
            Conforme au{" "}
            <span className="font-semibold text-white">RGPD</span> (Règlement
            européen 2016/679) et à la{" "}
            <span className="font-semibold text-white">Loi 09-08</span> relative
            à la protection des personnes physiques à l&apos;égard du traitement
            des données à caractère personnel (Maroc).
          </p>
          <p className="text-sm text-zinc-500">
            Dernière mise à jour : avril 2025
          </p>
        </div>

        <div className="space-y-14 text-zinc-300">

          {/* 1 — Responsable du traitement */}
          <section id="responsable">
            <SectionTitle number="1" title="Identification du Responsable du traitement" />
            <Prose>
              <p>
                Le responsable du traitement des données à caractère personnel
                collectées via le site{" "}
                <strong className="text-white">www.elouatikifreres.com</strong>{" "}
                est :
              </p>
              <InfoTable
                rows={[
                  ["Raison sociale", "El Ouatiki Frères"],
                  ["Forme juridique", "Société à Responsabilité Limitée (SARL)"],
                  ["Siège social", "Casablanca, Maroc"],
                  ["Email de contact", "contact@elouatikifreres.com"],
                  ["Délégué à la protection des données (DPO)", "rh@elouatikifreres.com"],
                ]}
              />
            </Prose>
          </section>

          {/* 2 — Données collectées */}
          <section id="donnees">
            <SectionTitle number="2" title="Nature des données collectées" />
            <Prose>
              <p>
                Dans le cadre de l&apos;utilisation du site, nous sommes susceptibles
                de collecter les catégories de données suivantes :
              </p>
              <ul>
                <li>
                  <strong className="text-white">Données d&apos;identité :</strong>{" "}
                  nom, prénom, civilité.
                </li>
                <li>
                  <strong className="text-white">Données de contact :</strong>{" "}
                  adresse e-mail, numéro de téléphone, société ou organisation.
                </li>
                <li>
                  <strong className="text-white">Données de navigation :</strong>{" "}
                  adresse IP, type de navigateur, pages visitées, durée de
                  visite, données de cookies (voir section 10).
                </li>
                <li>
                  <strong className="text-white">
                    Données de candidature :
                  </strong>{" "}
                  CV, lettre de motivation, compétences professionnelles,
                  expériences, transmis volontairement via le formulaire de
                  candidature.
                </li>
                <li>
                  <strong className="text-white">Données de messages :</strong>{" "}
                  contenu des messages envoyés via le formulaire de contact.
                </li>
              </ul>
              <p>
                Nous ne collectons aucune donnée sensible au sens de l&apos;article
                7 de la Loi 09-08 et de l&apos;article 9 du RGPD (origine raciale,
                opinions politiques, données de santé, etc.).
              </p>
            </Prose>
          </section>

          {/* 3 — Finalités */}
          <section id="finalites">
            <SectionTitle number="3" title="Finalités du traitement" />
            <Prose>
              <p>
                Les données personnelles collectées sont utilisées aux fins
                suivantes :
              </p>
              <ul>
                <li>
                  Répondre aux demandes de contact, de devis ou de renseignements.
                </li>
                <li>
                  Traiter les candidatures spontanées ou en réponse à une offre
                  d&apos;emploi publiée.
                </li>
                <li>
                  Assurer le bon fonctionnement technique du site (logs, sécurité).
                </li>
                <li>
                  Mesurer l&apos;audience et améliorer l&apos;expérience utilisateur
                  (analytics anonymisés).
                </li>
                <li>
                  Respecter nos obligations légales et réglementaires.
                </li>
              </ul>
              <p>
                Nous n&apos;effectuons aucun traitement à des fins de prospection
                commerciale sans votre consentement explicite préalable.
              </p>
            </Prose>
          </section>

          {/* 4 — Base légale */}
          <section id="base-legale">
            <SectionTitle number="4" title="Base légale du traitement" />
            <Prose>
              <p>
                Conformément à l&apos;article 3 de la Loi 09-08 et à l&apos;article 6
                du RGPD, chaque traitement repose sur l&apos;une des bases légales
                suivantes :
              </p>
              <ul>
                <li>
                  <strong className="text-white">Consentement</strong> — pour
                  l&apos;utilisation de cookies non essentiels et les communications
                  marketing (art. 6-1-a RGPD / art. 3 Loi 09-08).
                </li>
                <li>
                  <strong className="text-white">
                    Exécution d&apos;un contrat
                  </strong>{" "}
                  — pour le traitement des demandes commerciales et
                  propositions de service (art. 6-1-b RGPD).
                </li>
                <li>
                  <strong className="text-white">
                    Obligation légale
                  </strong>{" "}
                  — pour la conservation de certains documents conformément à
                  la réglementation marocaine et européenne applicable
                  (art. 6-1-c RGPD).
                </li>
                <li>
                  <strong className="text-white">
                    Intérêt légitime
                  </strong>{" "}
                  — pour la sécurité informatique, la prévention de la fraude
                  et l&apos;amélioration du site (art. 6-1-f RGPD / art. 3 Loi
                  09-08).
                </li>
              </ul>
            </Prose>
          </section>

          {/* 5 — Durée de conservation */}
          <section id="conservation">
            <SectionTitle number="5" title="Durée de conservation des données" />
            <Prose>
              <InfoTable
                rows={[
                  ["Données de contact / demandes", "3 ans à compter du dernier contact"],
                  ["Candidatures non retenues", "2 ans après la fin du processus de recrutement"],
                  ["Données de navigation / logs", "13 mois maximum (CNIL / CNDP)"],
                  ["Cookies analytiques", "13 mois maximum"],
                  ["Documents contractuels", "10 ans (obligation légale comptable)"],
                ]}
              />
              <p>
                Au-delà de ces durées, les données sont supprimées ou
                anonymisées de façon irréversible.
              </p>
            </Prose>
          </section>

          {/* 6 — Destinataires */}
          <section id="destinataires">
            <SectionTitle number="6" title="Destinataires des données" />
            <Prose>
              <p>
                Vos données personnelles sont destinées exclusivement aux
                personnes habilitées au sein d&apos;El Ouatiki Frères (direction,
                RH, équipe commerciale).
              </p>
              <p>
                Elles peuvent être transmises à des prestataires techniques
                agissant en qualité de <strong className="text-white">sous-traitants</strong>{" "}
                (hébergeur, outil d&apos;emailing, solution d&apos;analytics) dans le strict
                cadre de l&apos;exécution de leurs missions et sous notre
                responsabilité contractuelle.
              </p>
              <p className="rounded-xl border border-cyan-500/20 bg-cyan-500/5 px-5 py-4 text-sm">
                <strong className="text-white">
                  Nous ne vendons, ne louons et ne cédons jamais vos données
                  personnelles à des tiers à des fins commerciales.
                </strong>
              </p>
            </Prose>
          </section>

          {/* 7 — Transfert hors Maroc */}
          <section id="transfert">
            <SectionTitle
              number="7"
              title="Transfert de données hors du Maroc"
            />
            <Prose>
              <p>
                Certains sous-traitants techniques (hébergement, analytics)
                peuvent être établis en dehors du Maroc, notamment dans l&apos;Union
                Européenne ou aux États-Unis.
              </p>
              <p>
                Tout transfert de données vers des pays n&apos;offrant pas un niveau
                de protection adéquat reconnu par la{" "}
                <strong className="text-white">
                  Commission Nationale de contrôle de la protection des Données
                  à caractère Personnel (CNDP)
                </strong>{" "}
                est encadré par des garanties appropriées conformément à
                l&apos;article 43 de la Loi 09-08 :
              </p>
              <ul>
                <li>
                  Clauses contractuelles types approuvées par la CNDP ou la
                  Commission Européenne.
                </li>
                <li>
                  Mécanismes équivalents reconnus par la réglementation
                  applicable.
                </li>
              </ul>
            </Prose>
          </section>

          {/* 8 — Droits des utilisateurs */}
          <section id="droits">
            <SectionTitle number="8" title="Droits des utilisateurs" />
            <Prose>
              <p>
                Conformément à la Loi 09-08 (articles 7 à 12) et au RGPD
                (articles 15 à 22), vous disposez des droits suivants sur vos
                données personnelles :
              </p>
              <ul>
                <li>
                  <strong className="text-white">Droit d&apos;accès</strong> —
                  obtenir une copie des données vous concernant.
                </li>
                <li>
                  <strong className="text-white">Droit de rectification</strong>{" "}
                  — corriger des données inexactes ou incomplètes.
                </li>
                <li>
                  <strong className="text-white">Droit à l&apos;effacement</strong>{" "}
                  — demander la suppression de vos données (« droit à
                  l&apos;oubli »).
                </li>
                <li>
                  <strong className="text-white">
                    Droit à la limitation du traitement
                  </strong>{" "}
                  — suspendre temporairement l&apos;utilisation de vos données.
                </li>
                <li>
                  <strong className="text-white">
                    Droit à la portabilité
                  </strong>{" "}
                  — recevoir vos données dans un format structuré et lisible
                  par machine (RGPD uniquement).
                </li>
                <li>
                  <strong className="text-white">Droit d&apos;opposition</strong> —
                  s&apos;opposer à un traitement fondé sur l&apos;intérêt légitime ou à
                  des fins de prospection.
                </li>
                <li>
                  <strong className="text-white">
                    Droit de retrait du consentement
                  </strong>{" "}
                  — à tout moment, sans affecter la licéité des traitements
                  antérieurs.
                </li>
              </ul>
              <p>
                Pour exercer ces droits, adressez votre demande par e-mail
                à{" "}
                <a
                  href="mailto:rh@elouatikifreres.com"
                  className="text-cyan-400 underline underline-offset-2 hover:text-cyan-300"
                >
                  rh@elouatikifreres.com
                </a>{" "}
                en précisant votre nom, prénom et, si nécessaire, une pièce
                d&apos;identité. Nous répondons dans un délai de{" "}
                <strong className="text-white">30 jours</strong> maximum.
              </p>
            </Prose>
          </section>

          {/* 9 — Sécurité */}
          <section id="securite">
            <SectionTitle number="9" title="Sécurité des données" />
            <Prose>
              <p>
                El Ouatiki Frères met en œuvre des mesures techniques et
                organisationnelles appropriées pour protéger vos données contre
                tout accès non autorisé, altération, divulgation ou destruction
                accidentelle ou illicite, conformément à l&apos;article 23 de la
                Loi 09-08 et à l&apos;article 32 du RGPD :
              </p>
              <ul>
                <li>
                  Chiffrement des communications par protocole{" "}
                  <strong className="text-white">HTTPS / TLS</strong>.
                </li>
                <li>
                  Accès aux données restreint aux seules personnes habilitées,
                  sous contrôle d&apos;accès.
                </li>
                <li>
                  Hébergement chez un prestataire certifié disposant de
                  garanties de sécurité physique et logique.
                </li>
                <li>
                  Sensibilisation régulière du personnel aux bonnes pratiques
                  de protection des données.
                </li>
              </ul>
              <p>
                En cas de violation de données susceptible d&apos;engendrer un risque
                pour vos droits et libertés, nous procéderons à la notification
                dans les délais réglementaires auprès de la{" "}
                <strong className="text-white">CNDP</strong> (72 h — RGPD) et
                vous en informerons si nécessaire.
              </p>
            </Prose>
          </section>

          {/* 10 — Cookies */}
          <section id="cookies">
            <SectionTitle number="10" title="Politique de Cookies" />
            <Prose>
              <p>
                Notre site utilise des cookies et technologies similaires pour
                améliorer votre expérience de navigation.
              </p>
              <InfoTable
                header={["Type", "Finalité", "Durée"]}
                rows={[
                  ["Cookies essentiels", "Fonctionnement technique du site (session, sécurité)", "Session"],
                  ["Cookies analytiques", "Mesure d'audience anonymisée (ex. Google Analytics)", "13 mois"],
                  ["Cookies de préférences", "Mémorisation de la langue choisie", "12 mois"],
                ]}
              />
              <p>
                Lors de votre première visite, une bannière vous invite à
                accepter ou refuser les cookies non essentiels. Vous pouvez
                modifier vos préférences à tout moment via le lien{" "}
                <strong className="text-white">« Gestion des Cookies »</strong>{" "}
                en bas de page.
              </p>
              <p>
                Vous pouvez également paramétrer votre navigateur pour bloquer
                ou supprimer les cookies. Notez que la désactivation des cookies
                essentiels peut affecter le bon fonctionnement du site.
              </p>
            </Prose>
          </section>

          {/* 11 — CNDP */}
          <section id="cndp">
            <SectionTitle
              number="11"
              title="Mention légale CNDP — Commission Nationale de contrôle de la protection des Données à caractère Personnel"
            />
            <Prose>
              <p>
                Conformément à la Loi 09-08 et à ses décrets d&apos;application, les
                traitements de données à caractère personnel mis en œuvre par
                El Ouatiki Frères ont fait l&apos;objet des formalités requises auprès
                de la{" "}
                <strong className="text-white">CNDP</strong> (déclaration ou
                demande d&apos;autorisation selon la nature du traitement).
              </p>
              <p>
                Si vous estimez que vos droits ne sont pas respectés, vous
                pouvez adresser une réclamation à la CNDP :
              </p>
              <InfoTable
                rows={[
                  ["Site officiel", "www.cndp.ma"],
                  ["Adresse", "Angle Rue Tichka et Rue Arfoud, Hay Riad, Rabat, Maroc"],
                  ["Email", "contact@cndp.ma"],
                ]}
              />
              <p>
                Les utilisateurs résidant dans l&apos;Union Européenne peuvent
                également saisir l&apos;autorité de contrôle compétente de leur pays
                de résidence (ex. CNIL en France —{" "}
                <strong className="text-white">www.cnil.fr</strong>).
              </p>
            </Prose>
          </section>

          {/* 12 — Modification */}
          <section id="modification">
            <SectionTitle number="12" title="Modification de la présente politique" />
            <Prose>
              <p>
                El Ouatiki Frères se réserve le droit de modifier la présente
                politique à tout moment, notamment pour se conformer à
                l&apos;évolution de la réglementation applicable. La date de
                dernière mise à jour figure en haut du document.
              </p>
              <p>
                En cas de modification substantielle, une notification sera
                affichée sur le site lors de votre prochaine visite.
              </p>
            </Prose>
          </section>

        </div>
      </main>
      <SiteFooter />
    </>
  );
}

/* ─── Composants utilitaires locaux ─────────────────────────────────────── */

function SectionTitle({ number, title }: { number: string; title: string }) {
  return (
    <div className="mb-5 flex items-start gap-4">
      <span className="mt-1 flex size-8 shrink-0 items-center justify-center rounded-lg border border-cyan-500/30 bg-cyan-500/10 text-sm font-bold text-cyan-400">
        {number}
      </span>
      <h2 className="font-[family-name:var(--font-space-grotesk)] text-xl font-semibold leading-snug text-white sm:text-2xl">
        {title}
      </h2>
    </div>
  );
}

function Prose({ children }: { children: React.ReactNode }) {
  return (
    <div className="ml-12 space-y-4 text-sm leading-relaxed sm:text-base [&_strong]:font-semibold [&_ul]:space-y-2 [&_ul]:pl-5 [&_ul]:list-disc">
      {children}
    </div>
  );
}

function InfoTable({
  rows,
  header,
}: {
  rows: [string, string][] | [string, string, string][];
  header?: [string, string, string];
}) {
  return (
    <div className="overflow-x-auto rounded-xl border border-white/10">
      <table className="w-full text-sm">
        {header && (
          <thead>
            <tr className="border-b border-white/10 bg-white/5">
              {header.map((h) => (
                <th
                  key={h}
                  className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-zinc-400"
                >
                  {h}
                </th>
              ))}
            </tr>
          </thead>
        )}
        <tbody>
          {rows.map((row, i) => (
            <tr
              key={i}
              className="border-b border-white/5 last:border-0 odd:bg-white/[0.02]"
            >
              {row.map((cell, j) => (
                <td
                  key={j}
                  className={`px-4 py-3 ${j === 0 ? "font-medium text-white" : "text-zinc-400"}`}
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
