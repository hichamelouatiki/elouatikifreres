/**
 * Article de blog : « Enveloppes haute performance — béton, bois, mise en œuvre ».
 *
 * Structure alignée sur innovation-achats-article.tsx et bim-fluides-article.tsx.
 * Contenu FR / EN ; locale AR → EN (fallback anglais).
 */

import { CalendarDays, Clock } from "lucide-react";
import { getLocale, getTranslations } from "next-intl/server";
import type { ReactNode } from "react";

import { ArticleFigure } from "@/components/article-figure";
import { Link } from "@/i18n/navigation";
import type { AppLocale } from "@/i18n/routing";

const MEDIA_BASE = "/media/blog/enveloppes-haute-performance";

const COVER_IMAGE_SRC = `${MEDIA_BASE}/cover.png`;
const IMAGE1_SRC = `${MEDIA_BASE}/image1.png`;
const IMAGE2_SRC = `${MEDIA_BASE}/image2.png`;
const IMAGE3_SRC = `${MEDIA_BASE}/image3.png`;
const IMAGE4_SRC = `${MEDIA_BASE}/image4.png`;

const ARTICLE_AUTHOR = "EL OUATIKI Yasser";
const ARTICLE_PUBLISHED_AT = "2022-06-14";
const ARTICLE_READING_MINUTES = 11;

function B({ children }: { children: ReactNode }) {
  return <strong className="font-semibold text-white">{children}</strong>;
}

type TableRow = [ReactNode, ReactNode, ReactNode];

type ArticleContent = {
  eyebrow: string;
  title: string;
  intro: ReactNode;
  coverAlt: string;
  coverCaption: ReactNode;
  s1Title: string;
  s1Intro: ReactNode;
  image1Alt: string;
  image1Caption: ReactNode;
  s1TrapTitle: string;
  s1TrapBody: ReactNode;
  s1TipTitle: string;
  s1TipBody: ReactNode;
  s1HumidityTitle: string;
  s1HumidityBody: ReactNode;
  s2Title: string;
  s2Intro: ReactNode;
  image2Alt: string;
  image2Caption: ReactNode;
  s2ConflictBody: ReactNode;
  s2ProtocolTitle: string;
  s2Steps: [ReactNode, ReactNode, ReactNode];
  s2GoldenRule: ReactNode;
  s3Title: string;
  s3Intro: ReactNode;
  s3WeatherTitle: string;
  s3WeatherIntro: ReactNode;
  s3WeatherBullets: [ReactNode, ReactNode];
  image3Alt: string;
  image3Caption: ReactNode;
  s3QATitle: string;
  s3QAIntro: ReactNode;
  tableHeadPhase: string;
  tableHeadControl: string;
  tableHeadGoal: string;
  tableRows: [TableRow, TableRow, TableRow];
  s3CheckpointsTitle: string;
  s3Checkpoints: [ReactNode, ReactNode, ReactNode, ReactNode];
  image4Alt: string;
  image4Caption: ReactNode;
  s3InfiltroBody: ReactNode;
  conclusionTitle: string;
  conclusionBody: ReactNode;
  conclusionBullets: [ReactNode, ReactNode, ReactNode];
  conclusionOutro: ReactNode;
  signatureBrand: ReactNode;
  ctaText: string;
};

const FR_CONTENT: ArticleContent = {
  eyebrow: "Bâtiment & enveloppe thermique",
  title:
    "Enveloppes haute performance : béton, bois et mise en œuvre sans surprise",
  intro: (
    <>
      <p className="text-base leading-relaxed text-zinc-300 sm:text-lg">
        Sur le papier, concevoir un bâtiment à haute performance environnementale
        est une science presque parfaite : exigences <B>RE2020</B>, coefficients
        thermiques optimisés en simulation thermique dynamique (STD), alliance
        béton–bois pour l&apos;inertie et le bilan carbone. Puis le chantier
        commence — et la physique du terrain rattrape les plus beaux modèles
        numériques.
      </p>
      <p className="text-base leading-relaxed text-zinc-300 sm:text-lg">
        Une enveloppe thermique et étanche n&apos;est pas une addition de lignes
        sur un BPU. C&apos;est un système interdépendant où la moindre
        négligence millimétrique se paie en sinistres majeurs cinq ans plus tard.
        Le défi n&apos;est plus le choix des matériaux, mais l&apos;orchestration
        de leur cohabitation : tolérances, interfaces, météo et contrôle qualité.
      </p>
    </>
  ),
  coverAlt:
    "Enveloppe haute performance mixte béton et bois : façade contemporaine et structure hybride",
  coverCaption: (
    <>
      Illustration de couverture — enveloppe performante béton / bois en
      exécution.
    </>
  ),

  s1Title: "1. Béton et dalles bois : l'alliance de la performance… et le choc des tolérances",
  s1Intro: (
    <p className="leading-relaxed text-zinc-300">
      Marier le béton et le bois, c&apos;est associer l&apos;assise lourde
      (infrastructure, noyau) à la flexibilité des dalles <B>CLT</B> (bois
      lamellé-croisé) ou des façades à ossature bois (FOB). Excellente réponse
      aux exigences constructives actuelles — si l&apos;assemblage est pensé en
      phase EXE.
    </p>
  ),
  image1Alt:
    "Le choc des tolérances entre gros œuvre béton et dalle bois CLT sur chantier",
  image1Caption: (
    <>
      Le choc des tolérances — béton (DTU 21) face au bois préfabriqué au
      millimètre.
    </>
  ),
  s1TrapTitle: "Le piège absolu : le choc des tolérances",
  s1TrapBody: (
    <>
      <p className="leading-relaxed text-zinc-300">
        Le gros œuvre béton travaille au centimètre : la norme{" "}
        <B>NF DTU 21</B> autorise des écarts de verticalité et planéité pouvant
        atteindre <B>±20&nbsp;mm</B> sur une hauteur d&apos;étage. Les dalles
        ou panneaux bois, eux, raisonnent au millimètre (généralement{" "}
        <B>±2&nbsp;mm</B>).
      </p>
      <p className="leading-relaxed text-zinc-300">
        Sans anticipation en EXE : dalles CLT hors appui théorique sur voiles
        béton, fixations décalées, efforts excentrés sur corbeaux métalliques.
      </p>
    </>
  ),
  s1TipTitle: "Le conseil du pro",
  s1TipBody: (
    <p className="leading-relaxed text-zinc-300">
      Ne demandez pas au maçon une précision de menuisier. Intégrez dès la
      conception des <B>ancrages réglables</B> (platines à trous oblongs) ou des
      bandes de feutre résilient d&apos;épaisseurs variables capables de rattraper
      jusqu&apos;à <B>30&nbsp;mm</B> de faux niveau ou faux aplomb sans altérer
      la descente de charges.
    </p>
  ),
  s1HumidityTitle: "Humidité différentielle et ponts thermiques d'interface",
  s1HumidityBody: (
    <p className="leading-relaxed text-zinc-300">
      Le béton libère massivement l&apos;eau de gâchage pendant des mois ; le
      bois déteste l&apos;humidité stagnante. L&apos;interface dalle bois / mur
      béton exige une <B>barrière capillaire</B> stricte (bande d&apos;arase,
      membrane dédiée). Le nœud about de dalle / voile extérieur est un nid à
      ponts thermiques : validez-le par un carnet de détails EXE précisant
      l&apos;enveloppement de l&apos;isolant sur la liaison.
    </p>
  ),

  s2Title: "2. Coordination des corps d'état : le secret de la barrière continue",
  s2Intro: (
    <p className="leading-relaxed text-zinc-300">
      L&apos;étanchéité à l&apos;air et à l&apos;eau d&apos;un bâtiment performant
      ne souffre aucune rupture. Pourtant l&apos;enveloppe est un champ de bataille
      où les lots se succèdent — et se sabotent parfois sans le vouloir.
    </p>
  ),
  image2Alt:
    "Barrière continue d'étanchéité à l'air : membrane et jonctions de dalles bois",
  image2Caption: (
    <>
      La barrière continue d&apos;étanchéité — aucune rupture entre lots.
    </>
  ),
  s2ConflictBody: (
    <p className="leading-relaxed text-zinc-300">
      <B>Le cas d&apos;école :</B> le lot structure bois pose les dalles CLT et
      scotche les jonctions. Le lot menuiserie pose les châssis. Le lot fluides
      perce pour les réseaux. Sans <B>OPC</B> rigoureux, l&apos;électricien ou le
      plombier sort la scie cloche, traverse la dalle et la membrane pare-vapeur
      sans manchette d&apos;étanchéité : la performance s&apos;effondre avant la
      livraison.
    </p>
  ),
  s2ProtocolTitle: "Formaliser la passation de support",
  s2Steps: [
    <>
      <B>Étape A :</B> Le lot structure/bois termine la pose et signe un PV
      d&apos;autocontrôle de l&apos;étanchéité des joints.
    </>,
    <>
      <B>Étape B :</B> Le lot doublage/réseaux inspecte le support avant
      intervention. S&apos;il accepte, il devient garant du maintien de
      l&apos;intégrité.
    </>,
    <>
      <B>Étape C :</B> Tout percement obligatoire est tracé sur plan de synthèse
      et traité avec collerettes <B>EPDM</B> et adhésifs acryliques à haute
      durabilité.
    </>,
  ],
  s2GoldenRule: (
    <p className="rounded-2xl border border-amber-400/25 bg-amber-500/5 px-5 py-4 text-sm leading-relaxed text-zinc-200 sm:text-base">
      <B>Règle d&apos;or chantier :</B> interdiction du silicone bas de gamme pour
      colmater un percement sauvage autour d&apos;un PVC traversant une dalle bois.
      Seuls les manchons souples certifiés par l&apos;avis technique du fabricant
      de membrane sont tolérés.
    </p>
  ),

  s3Title: "3. Jalons météo et plan de contrôle qualité : zéro place pour le hasard",
  s3Intro: (
    <p className="leading-relaxed text-zinc-300">
      Attendre la fin du chantier pour vérifier l&apos;enveloppe est une erreur
      stratégique. Le contrôle qualité doit être séquentiel, rythmé par le climat
      et les jalons constructifs.
    </p>
  ),
  s3WeatherTitle: "Maîtriser le risque météo sur dalles bois et biosourcés",
  s3WeatherIntro: (
    <p className="leading-relaxed text-zinc-300">
      Poser du CLT ou des isolants biosourcés (laine de bois, paille, ouate de
      cellulose) sous pluie battante sans protection, c&apos;est piéger
      l&apos;humidité : une fois les finitions posées, condensation, baisse
      d&apos;isolant et moisissures invisibles.
    </p>
  ),
  s3WeatherBullets: [
    <>
      <B>Taux d&apos;humidité (NF DTU 31.2) :</B> avant fermeture des
      complexes, mesure à l&apos;humidimètre à pointes sur plusieurs points de
      la dalle CLT — <B>≤18&nbsp;%</B> (idéalement &lt;15&nbsp;%).
    </>,
    <>
      <B>Jalon «&nbsp;mise hors d&apos;eau&nbsp;» :</B> le planning OPC sanctuarise
      le bâchage systématique des dalles CLT à l&apos;arrêt de travail ou un film
      d&apos;étanchéité temporaire en usine avant tout lot second œuvre.
    </>,
  ],
  image3Alt:
    "Le murmure de l'humidité : protection météo des dalles bois CLT sur chantier",
  image3Caption: (
    <>
      Le murmure de l&apos;humidité — jalons météo et protection des dalles bois.
    </>
  ),
  s3QATitle: "Le plan de contrôle qualité non négociable",
  s3QAIntro: (
    <p className="leading-relaxed text-zinc-300">
      Pour sécuriser finitions (placo, peintures, parquets) et éviter les désordres
      post-livraison, trois examens techniques structurent la phase :
    </p>
  ),
  tableHeadPhase: "Phase du chantier",
  tableHeadControl: "Type de contrôle",
  tableHeadGoal: "Objectif technique",
  tableRows: [
    [
      <B key="r1">En cours de second œuvre</B>,
      <>
        <B>Pré-test d&apos;infiltrométrie</B> (blower door intermédiaire)
      </>,
      <>
        Détecter les fuites d&apos;air aux liaisons dalle/voile et traversées
        réseaux avant faux-plafonds et doublages.
      </>,
    ],
    [
      <B key="r2">Avant fermeture des complexes</B>,
      <>
        <B>Thermographie infrarouge</B> (couplée au pré-test)
      </>,
      <>
        Visualiser discontinuités d&apos;isolant (trous, tassements) et flux
        d&apos;air parasites aux interfaces béton/bois.
      </>,
    ],
    [
      <B key="r3">Fin de second œuvre</B>,
      <B>Contrôle visuel finitions et interfaces</B>,
      <>
        Vérifier l&apos;absence d&apos;humidité résiduelle sous supports de sol
        pour éviter le tuilage des parquets.
      </>,
    ],
  ],
  s3CheckpointsTitle: "Jalons d'autocontrôle séquentiels",
  s3Checkpoints: [
    <>
      <B>1. Humidité des dalles bois :</B> arrêt de phase — humidimètre multi-points,
      seuil &lt;18&nbsp;% avant isolant ou couche résiliente.
    </>,
    <>
      <B>2. Interfaces réseaux :</B> avant fermeture — réservations planifiées,
      manchettes EPDM collées acrylique sur chaque pénétration.
    </>,
    <>
      <B>3. Pré-test infiltrométrie + thermographie :</B> pression/dépression du
      bâtiment, traque des fuites jonctions dalle bois / voile béton (fumigène +
      caméra thermique).
    </>,
    <>
      <B>4. Validation et fermeture :</B> PV de levée des réserves d&apos;étanchéité,
      autorisation chapes sèches/fluides et parements finition.
    </>,
  ],
  image4Alt:
    "Traque invisible : caméra thermique et infiltrométrie sur enveloppe mixte",
  image4Caption: (
    <>
      La traque invisible — thermographie et infiltrométrie en autocontrôle.
    </>
  ),
  s3InfiltroBody: (
    <p className="leading-relaxed text-zinc-300">
      Le pré-test d&apos;infiltrométrie fait passer d&apos;une logique curative
      (casser les finitions après le test réglementaire final) à une logique
      préventive : réparer une fuite sur membrane accessible prend 30&nbsp;secondes
      ; la réparer sous finitions appliquées relève du cauchemar logistique et
      financier.
    </p>
  ),

  conclusionTitle: "Conclusion : l'enveloppe performante est une culture collective",
  conclusionBody: (
    <p className="leading-relaxed text-zinc-300">
      Réussir un bâtiment RE2020 n&apos;est pas qu&apos;une affaire de calculs
      d&apos;études ou de qualité intrinsèque des matériaux. Le point de jonction
      béton/bois reste sous responsabilité humaine. La réussite exige :
    </p>
  ),
  conclusionBullets: [
    <>
      <B>Anticipation graphique</B> des tolérances en phase EXE (DTU 21 / DTU
      31.2).
    </>,
    <>
      <B>Intransigeance sur les supports</B> lors des interfaces entre corps
      d&apos;état.
    </>,
    <>
      <B>Suivi météo rigoureux</B> des dalles et composants bois avant fermeture.
    </>,
  ],
  conclusionOutro: (
    <p className="leading-relaxed text-zinc-300">
      C&apos;est à ce prix que l&apos;on élimine les surprises de chantier,
      sécurise la durabilité des finitions et livre aux usagers le confort
      thermique réel pour lequel le bâtiment a été conçu.
    </p>
  ),

  signatureBrand: (
    <strong>
      Elouatiki Frères : enveloppes performantes maîtrisées de la conception au
      contrôle terrain.
    </strong>
  ),
  ctaText: "Discutons de votre enveloppe béton–bois",
};

const EN_CONTENT: ArticleContent = {
  eyebrow: "Building & thermal envelope",
  title:
    "High-performance envelopes: concrete, wood, and predictable execution",
  intro: (
    <>
      <p className="text-base leading-relaxed text-zinc-300 sm:text-lg">
        On paper, designing a high environmental performance building looks
        almost perfect: <B>RE2020</B> requirements, thermal coefficients tuned in
        dynamic thermal simulation (DTS), concrete–timber pairing for inertia and
        carbon balance. Then the site starts — and field physics catches up with
        the best digital models.
      </p>
      <p className="text-base leading-relaxed text-zinc-300 sm:text-lg">
        A thermal and airtight envelope is not a stack of BOQ line items. It is an
        interdependent system where a millimetre of neglect can become a major
        claim five years later. The challenge is no longer material choice but
        orchestrating coexistence: tolerances, trade interfaces, weather gates and
        quality control.
      </p>
    </>
  ),
  coverAlt:
    "High-performance mixed concrete and timber envelope: contemporary façade and hybrid structure",
  coverCaption: (
    <>
      Cover illustration — concrete / timber high-performance envelope on site.
    </>
  ),

  s1Title:
    "1. Concrete and timber floor slabs: performance gains… and tolerance clash",
  s1Intro: (
    <p className="leading-relaxed text-zinc-300">
      Pairing concrete and timber means combining heavy support (cores,
      infrastructure) with <B>CLT</B> (cross-laminated timber) slabs or timber
      frame façades (TFF). A strong answer to current build requirements — if
      assembly is engineered in the execution phase.
    </p>
  ),
  image1Alt:
    "Tolerance clash between concrete shell and CLT timber slab on site",
  image1Caption: (
    <>
      Tolerance clash — concrete (DTU 21) versus millimetre-precise prefabricated
      timber.
    </>
  ),
  s1TrapTitle: "The absolute trap: tolerance clash",
  s1TrapBody: (
    <>
      <p className="leading-relaxed text-zinc-300">
        Concrete shell works at centimetre scale: <B>NF DTU 21</B> allows verticality
        and flatness deviations up to <B>±20&nbsp;mm</B> per storey. Timber slabs
        or panels are prefabricated at millimetre scale (typically{" "}
        <B>±2&nbsp;mm</B>).
      </p>
      <p className="leading-relaxed text-zinc-300">
        Without EXE planning: CLT slabs off theoretical bearing on concrete walls,
        misaligned fixings, unintended eccentric loads on steel brackets.
      </p>
    </>
  ),
  s1TipTitle: "Pro tip",
  s1TipBody: (
    <p className="leading-relaxed text-zinc-300">
      Do not ask the mason for joiner-level precision. Design in{" "}
      <B>adjustable anchors</B> (slotted plates) or variable resilient felt strips
      able to absorb up to <B>30&nbsp;mm</B> of level or plumb error without
      altering load paths.
    </p>
  ),
  s1HumidityTitle: "Differential moisture and interface thermal bridges",
  s1HumidityBody: (
    <p className="leading-relaxed text-zinc-300">
      Concrete releases massive mixing water over months; timber hates stagnant
      moisture. The timber slab / concrete wall interface needs a strict{" "}
      <B>capillary break</B> (damp-proof course, dedicated membrane). The slab end
      / external wall node is a thermal bridge hotspot: validate it in an EXE
      detail book specifying insulation wrap at the joint.
    </p>
  ),

  s2Title: "2. Trade coordination: the secret of a continuous barrier",
  s2Intro: (
    <p className="leading-relaxed text-zinc-300">
      Airtightness and watertightness tolerate no break. Yet the envelope is a
      battlefield where packages follow one another — sometimes undermining each
      other unintentionally.
    </p>
  ),
  image2Alt:
    "Continuous airtight barrier: membrane and timber slab joint sealing",
  image2Caption: (
    <>Continuous airtight barrier — no break between trades.</>
  ),
  s2ConflictBody: (
    <p className="leading-relaxed text-zinc-300">
      <B>Classic scenario:</B> the timber structure package installs CLT slabs and
      tapes joints. The joinery package fits windows. MEP drills for services.
      Without rigorous <B>construction management</B>, the electrician or plumber
      hole-saws through slab and vapour control layer without a sealing collar:
      performance collapses before handover.
    </p>
  ),
  s2ProtocolTitle: "Formalise substrate handover",
  s2Steps: [
    <>
      <B>Step A:</B> Structure/timber package completes installation and signs a
      joint airtightness self-check record.
    </>,
    <>
      <B>Step B:</B> Lining/services package inspects the substrate before work. If
      accepted, it owns integrity maintenance.
    </>,
    <>
      <B>Step C:</B> Any mandatory penetration is coordinated on a combined layout
      and sealed with <B>EPDM</B> collars and durable acrylic adhesives.
    </>,
  ],
  s2GoldenRule: (
    <p className="rounded-2xl border border-amber-400/25 bg-amber-500/5 px-5 py-4 text-sm leading-relaxed text-zinc-200 sm:text-base">
      <B>Site golden rule:</B> no low-grade silicone to patch an unplanned PVC
      penetration through a timber slab. Only manufacturer-approved flexible
      collars per membrane technical approval are allowed.
    </p>
  ),

  s3Title: "3. Weather milestones and QA plan: no room for chance",
  s3Intro: (
    <p className="leading-relaxed text-zinc-300">
      Waiting until the end to check the envelope is a strategic mistake. Quality
      control must be sequential, paced by climate and construction milestones.
    </p>
  ),
  s3WeatherTitle: "Control weather risk on timber slabs and bio-based layers",
  s3WeatherIntro: (
    <p className="leading-relaxed text-zinc-300">
      Installing CLT or bio-based insulation (wood fibre, straw, cellulose) in
      driving rain without protection traps moisture: once finishes are closed,
      condensation, reduced insulation performance and hidden mould follow.
    </p>
  ),
  s3WeatherBullets: [
    <>
      <B>Moisture content (NF DTU 31.2):</B> before closing build-ups,
      pin-type moisture meter readings on multiple CLT points —{" "}
      <B>≤18%</B> (ideally &lt;15%).
    </>,
    <>
      <B>&laquo;&nbsp;Weathertight&nbsp;&raquo; milestone:</B> the master schedule
      enforces systematic CLT tarping at shutdown or a temporary factory-applied
      sealing film before any finishing trade.
    </>,
  ],
  image3Alt:
    "Moisture risk: weather protection of CLT timber slabs on site",
  image3Caption: (
    <>Moisture management — weather gates and timber slab protection.</>
  ),
  s3QATitle: "The non-negotiable QA plan",
  s3QAIntro: (
    <p className="leading-relaxed text-zinc-300">
      To secure finishes (drywall, paint, timber flooring) and avoid post-handover
      defects, three technical inspections structure the phase:
    </p>
  ),
  tableHeadPhase: "Construction phase",
  tableHeadControl: "Control type",
  tableHeadGoal: "Technical objective",
  tableRows: [
    [
      <B key="r1">During fit-out</B>,
      <>
        <B>Intermediate airtightness pre-test</B> (blower door)
      </>,
      <>
        Detect air leaks at slab/wall joints and service penetrations before
        ceilings and linings close.
      </>,
    ],
    [
      <B key="r2">Before closing build-ups</B>,
      <>
        <B>Infrared thermography</B> (with pre-test)
      </>,
      <>
        Visualise insulation discontinuities (voids, settlement) and parasitic
        airflow at concrete/timber interfaces.
      </>,
    ],
    [
      <B key="r3">End of fit-out</B>,
      <B>Visual check of finishes and interfaces</B>,
      <>
        Confirm no residual moisture under floor substrates to prevent timber
        floor cupping.
      </>,
    ],
  ],
  s3CheckpointsTitle: "Sequential self-check milestones",
  s3Checkpoints: [
    <>
      <B>1. Timber slab moisture:</B> phase hold — multi-point meter readings,
      &lt;18% threshold before insulation or resilient layer.
    </>,
    <>
      <B>2. Service interfaces:</B> before closing — planned reservations, EPDM
      collars bonded with acrylic adhesive on every penetration.
    </>,
    <>
      <B>3. Blower door pre-test + thermography:</B> pressurise/depressurise the
      building, trace leaks at timber slab / concrete wall joints (smoke +
      thermal camera).
    </>,
    <>
      <B>4. Validation and closing:</B> airtightness snag clearance record,
      authorisation for dry/liquid screeds and finish packages.
    </>,
  ],
  image4Alt:
    "Invisible tracking: thermal camera and airtightness testing on hybrid envelope",
  image4Caption: (
    <>
      Invisible tracking — thermography and airtightness testing in self-check.
    </>
  ),
  s3InfiltroBody: (
    <p className="leading-relaxed text-zinc-300">
      An intermediate blower door test shifts from curative logic (breaking
      finishes after the final regulatory test) to preventive logic: fixing a leak
      on an accessible membrane takes 30&nbsp;seconds; fixing it under applied
      finishes is a logistical and financial nightmare.
    </p>
  ),

  conclusionTitle: "Conclusion: a high-performance envelope is a collective culture",
  conclusionBody: (
    <p className="leading-relaxed text-zinc-300">
      Delivering a RE2020-level building is not only about design calculations or
      intrinsic material quality. The concrete/timber joint remains a human
      responsibility. Success requires:
    </p>
  ),
  conclusionBullets: [
    <>
      <B>Graphical anticipation</B> of tolerances in EXE (DTU 21 / DTU 31.2).
    </>,
    <>
      <B>Zero compromise on substrates</B> at trade interfaces.
    </>,
    <>
      <B>Rigorous weather tracking</B> of timber slabs and components before
      closing.
    </>,
  ],
  conclusionOutro: (
    <p className="leading-relaxed text-zinc-300">
      That is how we remove site surprises, secure finish durability and deliver
      the real thermal comfort the building was designed for.
    </p>
  ),

  signatureBrand: (
    <strong>
      Elouatiki Frères: high-performance envelopes controlled from design to field
      QA.
    </strong>
  ),
  ctaText: "Let's discuss your concrete–timber envelope",
};

function getContent(locale: AppLocale): ArticleContent {
  if (locale === "fr") return FR_CONTENT;
  return EN_CONTENT;
}

export async function EnveloppesHautePerformanceArticle() {
  const locale = (await getLocale()) as AppLocale;
  const blogUiLocale = locale === "ar" ? "en" : locale;
  const t = await getTranslations({ locale: blogUiLocale, namespace: "Blog" });
  const c = getContent(locale);

  const publishedDate = new Date(ARTICLE_PUBLISHED_AT);
  const formattingLocale = locale === "fr" ? "fr-FR" : "en-US";
  const formattedDate = new Intl.DateTimeFormat(formattingLocale, {
    dateStyle: "long",
  }).format(publishedDate);
  const readingTimeLabel = t("readingTime", {
    minutes: ARTICLE_READING_MINUTES,
  });

  return (
    <article
      dir={locale === "ar" ? "ltr" : undefined}
      className="article-container mx-auto max-w-4xl px-5 py-16 text-zinc-200 sm:px-8 sm:py-20 lg:px-12"
    >
      <header className="article-header space-y-6">
        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-400">
          {c.eyebrow}
        </p>
        <h1 className="font-[family-name:var(--font-space-grotesk)] text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl">
          {c.title}
        </h1>

        <div className="article-meta flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-zinc-400">
          <span className="inline-flex items-center gap-2">
            <CalendarDays className="size-4" aria-hidden />
            <time dateTime={ARTICLE_PUBLISHED_AT}>{formattedDate}</time>
          </span>
          <span aria-hidden className="text-zinc-600">
            ·
          </span>
          <span className="inline-flex items-center gap-2">
            <Clock className="size-4" aria-hidden />
            {readingTimeLabel}
          </span>
        </div>

        {c.intro}
      </header>

      <ArticleFigure
        src={COVER_IMAGE_SRC}
        alt={c.coverAlt}
        caption={c.coverCaption}
        priority
      />

      <section className="content-block mt-12 space-y-6">
        <h2 className="section-title font-[family-name:var(--font-space-grotesk)] text-2xl font-bold text-white sm:text-3xl">
          {c.s1Title}
        </h2>
        {c.s1Intro}

        <ArticleFigure
          src={IMAGE1_SRC}
          alt={c.image1Alt}
          caption={c.image1Caption}
          compact
        />

        <div className="space-y-5">
          <h3 className="font-[family-name:var(--font-space-grotesk)] text-xl font-semibold text-white sm:text-2xl">
            {c.s1TrapTitle}
          </h3>
          {c.s1TrapBody}
        </div>

        <div className="space-y-5">
          <h3 className="font-[family-name:var(--font-space-grotesk)] text-xl font-semibold text-white sm:text-2xl">
            {c.s1TipTitle}
          </h3>
          {c.s1TipBody}
        </div>

        <div className="space-y-5">
          <h3 className="font-[family-name:var(--font-space-grotesk)] text-xl font-semibold text-white sm:text-2xl">
            {c.s1HumidityTitle}
          </h3>
          {c.s1HumidityBody}
        </div>
      </section>

      <section className="content-block mt-12 space-y-6">
        <h2 className="section-title font-[family-name:var(--font-space-grotesk)] text-2xl font-bold text-white sm:text-3xl">
          {c.s2Title}
        </h2>
        {c.s2Intro}

        <ArticleFigure
          src={IMAGE2_SRC}
          alt={c.image2Alt}
          caption={c.image2Caption}
          compact
        />

        {c.s2ConflictBody}

        <div className="space-y-4">
          <h3 className="font-[family-name:var(--font-space-grotesk)] text-xl font-semibold text-white sm:text-2xl">
            {c.s2ProtocolTitle}
          </h3>
          <ul className="list-disc space-y-3 pl-6 text-zinc-300 marker:text-cyan-400">
            {c.s2Steps.map((step, idx) => (
              <li key={idx}>{step}</li>
            ))}
          </ul>
        </div>

        {c.s2GoldenRule}
      </section>

      <section className="content-block mt-12 space-y-6">
        <h2 className="section-title font-[family-name:var(--font-space-grotesk)] text-2xl font-bold text-white sm:text-3xl">
          {c.s3Title}
        </h2>
        {c.s3Intro}

        <div className="space-y-5">
          <h3 className="font-[family-name:var(--font-space-grotesk)] text-xl font-semibold text-white sm:text-2xl">
            {c.s3WeatherTitle}
          </h3>
          {c.s3WeatherIntro}
          <ul className="list-disc space-y-2 pl-6 text-zinc-300 marker:text-cyan-400">
            {c.s3WeatherBullets.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </div>

        <ArticleFigure
          src={IMAGE3_SRC}
          alt={c.image3Alt}
          caption={c.image3Caption}
          compact
        />

        <div className="space-y-5">
          <h3 className="font-[family-name:var(--font-space-grotesk)] text-xl font-semibold text-white sm:text-2xl">
            {c.s3QATitle}
          </h3>
          {c.s3QAIntro}

          <div className="overflow-hidden rounded-xl border border-white/10 shadow-xl shadow-black/30">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[640px] border-collapse text-sm sm:text-base">
                <thead>
                  <tr className="bg-zinc-800/90 text-left text-white">
                    <th className="border-b border-white/15 px-4 py-3 font-semibold sm:px-5 sm:py-4">
                      {c.tableHeadPhase}
                    </th>
                    <th className="border-b border-white/15 px-4 py-3 font-semibold sm:px-5 sm:py-4">
                      {c.tableHeadControl}
                    </th>
                    <th className="border-b border-white/15 px-4 py-3 font-semibold sm:px-5 sm:py-4">
                      {c.tableHeadGoal}
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-zinc-900/40 text-zinc-300">
                  {c.tableRows.map(([phase, control, goal], idx) => (
                    <tr
                      key={idx}
                      className="border-b border-white/8 transition hover:bg-white/[0.03]"
                    >
                      <td className="align-top px-4 py-3 font-medium text-cyan-100/95 sm:px-5 sm:py-4">
                        {phase}
                      </td>
                      <td className="align-top px-4 py-3 leading-relaxed sm:px-5 sm:py-4">
                        {control}
                      </td>
                      <td className="align-top px-4 py-3 leading-relaxed sm:px-5 sm:py-4">
                        {goal}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <h4 className="font-[family-name:var(--font-space-grotesk)] text-lg font-semibold text-white">
            {c.s3CheckpointsTitle}
          </h4>
          <ol className="list-decimal space-y-3 pl-6 text-zinc-300 marker:text-cyan-400">
            {c.s3Checkpoints.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ol>
        </div>

        <ArticleFigure
          src={IMAGE4_SRC}
          alt={c.image4Alt}
          caption={c.image4Caption}
          compact
        />

        {c.s3InfiltroBody}
      </section>

      <section className="content-block mt-12 space-y-5">
        <h2 className="section-title font-[family-name:var(--font-space-grotesk)] text-2xl font-bold text-white sm:text-3xl">
          {c.conclusionTitle}
        </h2>
        {c.conclusionBody}
        <ul className="list-disc space-y-3 pl-6 text-zinc-300 marker:text-cyan-400">
          {c.conclusionBullets.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
        {c.conclusionOutro}
      </section>

      <footer className="article-footer mt-16 space-y-8">
        <div className="byline border-t border-white/10 pt-8 sm:pt-10">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-400">
            {t("author")}
          </p>
          <p className="mt-3 font-[family-name:var(--font-space-grotesk)] text-2xl font-bold text-white sm:text-3xl">
            {ARTICLE_AUTHOR}
          </p>
          <p className="mt-3 inline-flex items-center gap-2 text-sm text-zinc-400">
            <CalendarDays className="size-4" aria-hidden />
            <span>
              {t("publishedOn")}{" "}
              <time dateTime={ARTICLE_PUBLISHED_AT}>{formattedDate}</time>
            </span>
          </p>
        </div>

        <div className="author-signature rounded-2xl border border-cyan-500/25 bg-gradient-to-br from-cyan-500/10 via-zinc-900/40 to-zinc-900/60 p-6 text-center sm:p-8">
          <p className="font-[family-name:var(--font-space-grotesk)] text-lg font-semibold text-white sm:text-xl">
            {c.signatureBrand}
          </p>
          <Link
            href="/#contact"
            className="btn-primary mt-6 inline-flex items-center gap-2 rounded-xl border border-cyan-400/50 bg-cyan-500/15 px-6 py-3 text-sm font-semibold text-cyan-100 transition hover:border-cyan-300/70 hover:bg-cyan-500/25 hover:text-white sm:text-base"
          >
            {c.ctaText}
            <span aria-hidden>→</span>
          </Link>
        </div>
      </footer>
    </article>
  );
}
