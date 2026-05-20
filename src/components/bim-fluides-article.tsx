/**
 * Article de blog : « BIM fluides — coordination MEP sans clash silencieux ».
 *
 * Structure alignée sur dam-inspection-article.tsx (référence ia-inspection-barrages).
 * Contenu FR / EN ; locale AR → EN.
 */

import { CalendarDays, Clock, FileText } from "lucide-react";
import { getLocale, getTranslations } from "next-intl/server";
import type { ReactNode } from "react";

import { Link } from "@/i18n/navigation";
import type { AppLocale } from "@/i18n/routing";

const MEDIA_BASE = "/media/blog/BIM%20fluides";

const COVER_IMAGE_SRC = `${MEDIA_BASE}/cover.png`;
const IFC_DATA_IMAGE_SRC = `${MEDIA_BASE}/image%20(1).png`;
const SMART_BUILDING_IMAGE_SRC = `${MEDIA_BASE}/image%20(2).png`;
const PDF_GUIDE_SRC = `${MEDIA_BASE}/BIM_Fluides_Coordination_Clashs_Silencieux.pdf`;

const ARTICLE_AUTHOR = "EL OUATIKI Yasser";
const ARTICLE_PUBLISHED_AT = "2023-06-14";
const ARTICLE_READING_MINUTES = 12;

function B({ children }: { children: ReactNode }) {
  return <strong className="font-semibold text-white">{children}</strong>;
}

type SeverityTone = "emerald" | "amber" | "cyan";

type SeverityClass = {
  badge: string;
  title: string;
  bullets: ReactNode[];
  tone: SeverityTone;
};

type ArticleContent = {
  eyebrow: string;
  title: string;
  intro: ReactNode;
  coverAlt: string;
  coverCaption: ReactNode;
  s1Title: string;
  s1Intro: ReactNode;
  s1Items: [ReactNode, ReactNode, ReactNode];
  s1RuleTitle: string;
  s1RuleBody: ReactNode;
  s2Title: string;
  s2Body: ReactNode;
  s3Title: string;
  s3Intro: ReactNode;
  s3a: { title: string; body: ReactNode; bullet: ReactNode };
  s3b: { title: string; alt: string; caption: ReactNode; body: ReactNode };
  s3c: {
    title: string;
    alt: string;
    caption: ReactNode;
    body: ReactNode;
    bullets: [ReactNode, ReactNode];
  };
  s4Title: string;
  s4Intro: ReactNode;
  s4Classes: [SeverityClass, SeverityClass, SeverityClass];
  s5Title: string;
  s5Intro: ReactNode;
  s5Bullets: [ReactNode, ReactNode, ReactNode, ReactNode];
  s6Title: string;
  s6Body: ReactNode;
  s6ImageAlt: string;
  s6ImageCaption: ReactNode;
  pdfNote: ReactNode;
  pdfSectionTitle: string;
  pdfLinkLabel: string;
  pdfAriaLabel: string;
  signatureBrand: ReactNode;
  ctaText: string;
};

const FR_CONTENT: ArticleContent = {
  eyebrow: "BIM MEP & coordination fluides",
  title:
    "BIM fluides : coordination CVC / plomberie / électricité sans clash silencieux",
  intro: (
    <>
      <p className="text-base leading-relaxed text-zinc-300 sm:text-lg">
        Le déploiement du BIM dans les lots techniques (MEP — Mechanical,
        Electrical, Plumbing) a transformé la synthèse de projet. Pourtant, la
        simple disparition des conflits géométriques durs dans Navisworks ou
        Solibri ne garantit ni la constructibilité ni la maintenabilité
        d&apos;un bâtiment.
      </p>
      <p className="text-base leading-relaxed text-zinc-300 sm:text-lg">
        Un modèle fédéré peut afficher «&nbsp;zéro collision&nbsp;» tout en
        restant inexploitable sur chantier ou en exploitation. Ce guide
        détaille les processus pour éradiquer ces{" "}
        <B>clashs silencieux</B> : charte de nommage, niveaux de détail (LOD /
        LOIN) et revues hebdomadaires de coordination.
      </p>
    </>
  ),
  coverAlt:
    "Ingénieur sur chantier consultant une maquette BIM MEP sur tablette, flux de données vers équipements CVC",
  coverCaption: (
    <>
      Illustration de couverture — coordination BIM fluides sur le terrain.
    </>
  ),

  s1Title: "1. Anatomie du « clash silencieux » en BIM MEP",
  s1Intro: (
    <>
      Contrairement au clash physique (une gaine traversant une poutre), le{" "}
      <B>clash silencieux</B> est une non-conformité fonctionnelle,
      réglementaire ou logique : le logiciel ne détecte aucune intersection,
      car les volumes ne se touchent pas — pourtant l&apos;erreur est réelle.
      <br />
      <br />
      <B>Exemple concret :</B> une armoire électrique modélisée fidèlement,
      avec une canalisation d&apos;eau glacée à 20&nbsp;cm en façade. Zéro
      clash détecté — mais impossible d&apos;ouvrir les portes et les distances
      NF&nbsp;C&nbsp;15-100 ne sont pas respectées.
    </>
  ),
  s1Items: [
    <>
      <B>Oubli du calorifugeage :</B> tuyaux «&nbsp;nus&nbsp;» sans épaisseur
      d&apos;isolant ; une fois posé, les réseaux se chevauchent ou bloquent
      le passage.
    </>,
    <>
      <B>Pentes gravitaires non respectées :</B> collecteur EU modélisé à
      l&apos;horizontale stricte ; en exécution, la pente de 1 à 2&nbsp;% provoque
      collision ou faux-plafond abaissé.
    </>,
    <>
      <B>Inaccessibilité des organes :</B> vannes, clapets coupe-feu ou boîtes
      VAV masqués derrière un faisceau de câbles, inaccessibles sans démontage
      massif.
    </>,
  ],
  s1RuleTitle: "Règle d'or : hiérarchie de flexibilité des réseaux",
  s1RuleBody: (
    <ol className="list-decimal space-y-2 pl-6 text-zinc-300 marker:text-cyan-400">
      <li>
        <B>Écoulements gravitaires</B> (EU, EV, EP) — priorité absolue (pente
        fixe).
      </li>
      <li>
        <B>Grosses gaines CVC</B> — encombrement majeur, déviation coûteuse.
      </li>
      <li>
        <B>Tuyauteries sous pression</B> (chauffage, EF, ECS) — baïonnettes
        possibles.
      </li>
      <li>
        <B>CFO / CFA</B> — chemins de câbles les plus flexibles si l&apos;espace
        est anticipé.
      </li>
    </ol>
  ),

  s2Title: "2. La charte de nommage : premier rempart contre la confusion",
  s2Body: (
    <>
      <p className="leading-relaxed text-zinc-300">
        Sans nomenclature inspirée de l&apos;ISO&nbsp;19650, le modèle fédéré
        devient opaque. Chaque maquette et chaque système doit suivre une
        structure stricte.
      </p>
      <p className="leading-relaxed text-zinc-300">
        <B>Fichiers de maquettes :</B>{" "}
        <code className="rounded bg-zinc-800 px-1.5 py-0.5 text-cyan-200">
          [PROJET]-[ZONE]-[NIVEAU]-[LOT]-[DISCIPLINE]-[TYPE].ext
        </code>
        <br />
        Exemple :{" "}
        <code className="rounded bg-zinc-800 px-1.5 py-0.5 text-cyan-200">
          PRV-BATA-R+1-CVC-GAI-EXE.rvt
        </code>{" "}
        — gaines CVC du bâtiment&nbsp;A, R+1, phase exécution.
      </p>
      <p className="leading-relaxed text-zinc-300">
        <B>Systèmes dans Revit / Nova :</B> normaliser les abréviations —
        CVC_SOU / CVC_REP, PLM_EF / PLM_EU / PLM_EP, ELE_CFO_BT / ELE_CFA_SSI.
        Ne jamais laisser les noms par défaut du logiciel («&nbsp;Avis
        d&apos;alimentation d&apos;air&nbsp;2&nbsp;»).
      </p>
    </>
  ),

  s3Title: "3. LOD / LOIN et zones de maintenance",
  s3Intro: (
    <>
      Le sur-modélisation (boulons, logos fabricant) sature la mémoire et
      masque les vrais encombrements. La sous-modélisation empêche toute
      synthèse fiable. Il faut un{" "}
      <B>LOIN (Level of Information Need)</B> contractuel en phase
      d&apos;exécution.
    </>
  ),
  s3a: {
    title: "Matrice LOD en synthèse fluides",
    body: (
      <>
        <ul className="list-disc space-y-2 pl-6 text-zinc-300 marker:text-cyan-400">
          <li>
            <B>Gaines CVC — LOD&nbsp;350 :</B> dimensions extérieures exactes
            + volume virtuel de calorifuge (+50&nbsp;mm).
          </li>
          <li>
            <B>Tuyauteries — LOD&nbsp;350 :</B> diamètre extérieur réel, pas le
            DN nominal ; espace pour serrage et isolation.
          </li>
          <li>
            <B>Chemins de câbles — LOD&nbsp;300/350 :</B> zone tampon de
            30&nbsp;cm libre pour le tirage.
          </li>
          <li>
            <B>Armoires / TGBT — LOD&nbsp;350 :</B> volume d&apos;exclusion devant
            les portes (≈1&nbsp;m de profondeur libre).
          </li>
        </ul>
      </>
    ),
    bullet: (
      <>
        <B>Boîtes d&apos;espace de maintenance :</B> sous-volumes transparents
        (catégorie <code className="text-cyan-200">MEP-Maintenance-Zone</code>
        ) dans chaque famille d&apos;équipement ; tests de clash contre les
        réseaux rigides des autres lots dans Navisworks.
      </>
    ),
  },
  s3b: {
    title: "De la maquette IFC aux données structurées",
    alt: "Maquette BIM 3D avec flux de données vers table IFC listant tuyauteries PVC-U et éléments pipework",
    caption: (
      <>
        Extraction IFC : de la géométrie MEP à une base de données exploitable
        (pipework, quantités, statuts).
      </>
    ),
    body: (
      <p className="leading-relaxed text-zinc-300">
        La coordination fluides repose sur une donnée structurée, pas seulement
        sur un joli rendu 3D. Chaque élément (ID, catégorie, matériau,
        dimensions) doit être validé avant fédération — condition sine qua non
        pour des filtres de clash ciblés et des exports COBie fiables.
      </p>
    ),
  },
  s3c: {
    title: "Protocole de revue hebdomadaire",
    alt: "Interface de gestion Smart Building superposée à un hall : statuts HVAC, sécurité incendie et alertes maintenance",
    caption: (
      <>
        Objectif final : un actif «&nbsp;Day One Ready&nbsp;» pour
        l&apos;exploitation (HVAC, SSI, maintenance préventive).
      </>
    ),
    body: (
      <p className="leading-relaxed text-zinc-300">
        La synthèse MEP se pilote au rythme hebdomadaire, pas en réunion
        mensuelle improvisée. Le BIM Coordinator compile, filtre et isole les
        clashs silencieux avant la réunion — jamais une détection brute de
        4&nbsp;500 collisions inutiles.
      </p>
    ),
    bullets: [
      <>
        <B>Méthode des 3 temps (2&nbsp;h max) :</B> statut des sujets précédents
        (20&nbsp;min), résolution des nœuds denses — locaux techniques,
        plénums (80&nbsp;min), clôture et attribution BCF au vendredi suivant
        (20&nbsp;min).
      </>,
      <>
        <B>Format BCF :</B> vue 3D, GUID des objets, lot responsable, description
        claire — via BIM Track, Revizto ou équivalent sur l&apos;EDC/CDE.
      </>,
    ],
  },

  s4Title: "4. Agenda type de la semaine de synthèse",
  s4Intro: (
    <>
      Trois jalons cadencent la responsabilité de chaque lot (CVC, plomberie,
      électricité) :
    </>
  ),
  s4Classes: [
    {
      badge: "Vendredi 16h",
      title: "Gel et dépôt des maquettes",
      bullets: [
        <>
          Export sur l&apos;EDC/CDE : maquette purgée (sans lignes de
          construction), nomenclature conforme.
        </>,
        <>
          Chaque lot livre sa version EXE de la semaine avant le week-end.
        </>,
      ],
      tone: "emerald",
    },
    {
      badge: "Lundi matin",
      title: "Analyse par le BIM Coordinator",
      bullets: [
        <>
          Fédération + matrices de tests ciblées (ex. chemins de câbles vs
          gaines &gt;&nbsp;200&nbsp;mm).
        </>,
        <>
          Rapport de pré-coordination : clashs durs + clashs silencieux (zones
          de maintenance, pentes, isolants).
        </>,
      ],
      tone: "amber",
    },
    {
      badge: "Mercredi 10h",
      title: "Revue hebdomadaire (2 h)",
      bullets: [
        <>
          BIM Manager, Coordinator et coordinateurs de lots — arbitrage MOE
          selon la matrice de priorités réseaux.
        </>,
        <>
          Pas de conception en direct pour 50 sujets : focus sur les nœuds non
          résolus en asynchrone.
        </>,
      ],
      tone: "cyan",
    },
  ],

  s5Title: "5. Cas pratiques : nœuds de coordination critiques",
  s5Intro: (
    <>
      Deux situations récurrentes où le «&nbsp;zéro clash&nbsp;» trompe
      l&apos;équipe projet :
    </>
  ),
  s5Bullets: [
    <>
      <B>Plénum hospitalier (2,20&nbsp;m) :</B> désenfumage 600×400, soufflage,
      CFO, CFA, fluides médicaux. Solution : strates altimétriques — gaines
      lourdes en sous-face de dalle, tuyauteries sur support trapèze, câbles
      juste au-dessus du faux-plafond amovible.
    </>,
    <>
      <B>Local technique central :</B> pompes et ballons sans clash géométrique,
      mais collecteurs au-dessus des moteurs — impossible de remplacer une
      pompe en exploitation. Correction : décalage des collecteurs + zone
      d&apos;élingage virtuelle interdisant les petits réseaux.
    </>,
    <>
      <B>Couloirs de bureaux :</B> regrouper les réseaux sur multi-supports
      plutôt que superposer «&nbsp;à plat&nbsp;» en largeur seule.
    </>,
    <>
      <B>Exploitation :</B> chaque décision de synthèse doit anticiper la
      maintenance préventive (filtres HVAC, accès vannes, SSI).
    </>,
  ],

  s6Title: "6. Conclusion : la discipline collective avant l'algorithme",
  s6Body: (
    <>
      <p className="leading-relaxed text-zinc-300">
        La réussite d&apos;un projet BIM fluides ne réside pas dans la
        sophistication des moteurs de clash automatiques, mais dans la{" "}
        <B>gouvernance du projet</B>. Éradiquer les clashs silencieux exige une
        charte de nommage verrouillée, un LOIN maîtrisé et des revues
        hebdomadaires centrées sur la constructibilité et l&apos;exploitation
        réelle.
      </p>
      <p className="leading-relaxed text-zinc-300">
        Chez <B>Elouatiki Frères</B>, nous accompagnons les maîtres
        d&apos;ouvrage et les lots techniques pour livrer un modèle fédéré
        fiable sur toute la durée de vie du bâtiment — pas seulement un
        rapport de synthèse vert le jour de la réception.
      </p>
    </>
  ),
  s6ImageAlt:
    "Tableau de bord Smart Building en réalité augmentée : HVAC, éclairage, sécurité incendie et alertes de maintenance préventive",
  s6ImageCaption: (
    <>
      Le modèle fédéré bien coordonné alimente l&apos;exploitation : capteurs,
      GMAO et maintenance préventive dès le premier jour.
    </>
  ),

  pdfNote: (
    <p className="text-sm leading-relaxed text-zinc-300 sm:text-base">
      Pour davantage de détails techniques (matrices LOD, chartes de nommage,
      protocole de revue hebdomadaire, cas pratiques hospitaliers),{" "}
      <B>cliquez sur le PDF</B> ci-dessous.
    </p>
  ),
  pdfSectionTitle: "Guide technique PDF",
  pdfLinkLabel: "Ouvrir le guide PDF complet",
  pdfAriaLabel:
    "Télécharger le guide PDF BIM Fluides — Coordination CVC, plomberie et électricité sans clash silencieux",

  signatureBrand: (
    <strong>
      Elouatiki Frères : coordination BIM MEP au service de la
      constructibilité.
    </strong>
  ),
  ctaText: "Discutons de votre coordination BIM fluides",
};

const EN_CONTENT: ArticleContent = {
  eyebrow: "MEP BIM & fluid coordination",
  title:
    "MEP BIM: coordinating HVAC, plumbing, and electrical without silent clashes",
  intro: (
    <>
      <p className="text-base leading-relaxed text-zinc-300 sm:text-lg">
        BIM deployment across technical packages (MEP) has transformed design
        coordination. Yet clearing hard geometric clashes in Navisworks or
        Solibri does not guarantee buildability or maintainability.
      </p>
      <p className="text-base leading-relaxed text-zinc-300 sm:text-lg">
        A federated model can show &laquo;&nbsp;zero collisions&nbsp;&raquo;
        while remaining unusable on site or in operations. This guide explains
        how to eradicate <B>silent clashes</B> through naming rules, LOD / LOIN
        management and weekly coordination reviews.
      </p>
    </>
  ),
  coverAlt:
    "Engineer on site reviewing an MEP BIM model on a tablet, data streams to HVAC equipment",
  coverCaption: (
    <>Cover illustration — MEP BIM fluid coordination in the field.</>
  ),

  s1Title: "1. Anatomy of the MEP « silent clash »",
  s1Intro: (
    <>
      Unlike a physical clash (a duct through a beam), a{" "}
      <B>silent clash</B> is a functional, regulatory or logical
      non-compliance: the software finds no intersection because volumes do
      not touch — yet the error is real.
      <br />
      <br />
      <B>Concrete example:</B> a switchboard modelled accurately with a chilled
      water pipe 20&nbsp;cm in front. Zero clash detected — yet doors cannot
      fully open and NF C 15-100 clearance rules are breached.
    </>
  ),
  s1Items: [
    <>
      <B>Missing insulation:</B> bare pipes without insulation thickness; once
      installed, networks overlap or block access.
    </>,
    <>
      <B>Gravity slopes ignored:</B> wastewater modelled perfectly horizontal;
      applying the required 1–2&nbsp;% slope triggers clashes or lowered
      ceilings.
    </>,
    <>
      <B>Inaccessible devices:</B> valves, fire dampers or VAV boxes hidden
      behind cable trays, unmaintainable without major dismantling.
    </>,
  ],
  s1RuleTitle: "Golden rule: network flexibility hierarchy",
  s1RuleBody: (
    <ol className="list-decimal space-y-2 pl-6 text-zinc-300 marker:text-cyan-400">
      <li>
        <B>Gravity systems</B> (wastewater, storm) — absolute priority (fixed
        slope).
      </li>
      <li>
        <B>Large HVAC ducts</B> — major bulk, costly to reroute.</li>
      <li>
        <B>Pressurised piping</B> (heating, cold/hot water) — offsets possible.
      </li>
      <li>
        <B>Power / low current</B> — most flexible if space is planned early.
      </li>
    </ol>
  ),

  s2Title: "2. The naming convention: first line of defence",
  s2Body: (
    <>
      <p className="leading-relaxed text-zinc-300">
        Without ISO&nbsp;19650-inspired nomenclature, the federated model
        becomes opaque. Every model and system needs a strict structure.
      </p>
      <p className="leading-relaxed text-zinc-300">
        <B>Model files:</B>{" "}
        <code className="rounded bg-zinc-800 px-1.5 py-0.5 text-cyan-200">
          [PROJECT]-[ZONE]-[LEVEL]-[PACKAGE]-[DISCIPLINE]-[TYPE].ext
        </code>
        <br />
        Example:{" "}
        <code className="rounded bg-zinc-800 px-1.5 py-0.5 text-cyan-200">
          PRV-BATA-R+1-CVC-GAI-EXE.rvt
        </code>{" "}
        — HVAC ducts, Building&nbsp;A, Level&nbsp;1, execution phase.
      </p>
      <p className="leading-relaxed text-zinc-300">
        <B>Systems in Revit / Nova:</B> standardise abbreviations — CVC_SOU /
        CVC_REP, PLM_EF / PLM_EU / PLM_EP, ELE_CFO_BT / ELE_CFA_SSI. Never
        leave default software names (&laquo;&nbsp;Supply Air 2&nbsp;&raquo;).
      </p>
    </>
  ),

  s3Title: "3. LOD / LOIN and maintenance zones",
  s3Intro: (
    <>
      Over-modelling (bolts, manufacturer logos) saturates memory and hides real
      bulk issues. Under-modelling makes coordination unreliable. Contractual{" "}
      <B>LOIN (Level of Information Need)</B> is required in execution phase.
    </>
  ),
  s3a: {
    title: "LOD matrix for MEP coordination",
    body: (
      <>
        <ul className="list-disc space-y-2 pl-6 text-zinc-300 marker:text-cyan-400">
          <li>
            <B>HVAC ducts — LOD&nbsp;350:</B> exact outside dimensions + virtual
            insulation volume (+50&nbsp;mm).
          </li>
          <li>
            <B>Piping — LOD&nbsp;350:</B> real outside diameter, not nominal DN;
            space for tools and insulation.
          </li>
          <li>
            <B>Cable trays — LOD&nbsp;300/350:</B> 30&nbsp;cm free zone for
            pulling cables.
          </li>
          <li>
            <B>Switchboards — LOD&nbsp;350:</B> exclusion volume in front of
            doors (≈1&nbsp;m clear depth).
          </li>
        </ul>
      </>
    ),
    bullet: (
      <>
        <B>Maintenance clearance boxes:</B> transparent sub-volumes (
        <code className="text-cyan-200">MEP-Maintenance-Zone</code>) in each
        equipment family; clash tests against other trades&apos; rigid networks
        in Navisworks.
      </>
    ),
  },
  s3b: {
    title: "From the IFC model to structured data",
    alt: "3D BIM model with data flow to IFC table listing PVC-U pipes and pipework elements",
    caption: (
      <>
        IFC extraction: from MEP geometry to an operable database (pipework,
        quantities, status).
      </>
    ),
    body: (
      <p className="leading-relaxed text-zinc-300">
        Fluid coordination relies on structured data, not just pretty 3D renders.
        Every element (ID, category, material, dimensions) must be validated
        before federation — a prerequisite for targeted clash filters and
        reliable COBie exports.
      </p>
    ),
  },
  s3c: {
    title: "Weekly coordination protocol",
    alt: "Smart Building management UI overlaid on a lobby: HVAC status, fire safety and maintenance alerts",
    caption: (
      <>
        End goal: a &laquo;&nbsp;Day One Ready&nbsp;&raquo; asset for operations
        (HVAC, fire safety, preventive maintenance).
      </>
    ),
    body: (
      <p className="leading-relaxed text-zinc-300">
        MEP coordination runs weekly, not in a monthly catch-up meeting. The
        BIM Coordinator compiles, filters and isolates silent clashes before the
        meeting — never a raw 4,500-clash dump.
      </p>
    ),
    bullets: [
      <>
        <B>Three-step method (2&nbsp;h max):</B> previous items status
        (20&nbsp;min), dense-node resolution — plant rooms, ceiling plenums
        (80&nbsp;min), closure and BCF assignment for next Friday (20&nbsp;min).
      </>,
      <>
        <B>BCF format:</B> 3D view, object GUIDs, responsible package, clear
        description — via BIM Track, Revizto or equivalent on the CDE.
      </>,
    ],
  },

  s4Title: "4. Typical weekly coordination agenda",
  s4Intro: (
    <>
      Three milestones lock each package&apos;s accountability (HVAC, plumbing,
      electrical):
    </>
  ),
  s4Classes: [
    {
      badge: "Friday 4pm",
      title: "Freeze and model upload",
      bullets: [
        <>
          CDE upload: purged model (no construction lines), compliant naming.
        </>,
        <>Each package delivers its weekly EXE version before the weekend.</>,
      ],
      tone: "emerald",
    },
    {
      badge: "Monday morning",
      title: "BIM Coordinator analysis",
      bullets: [
        <>
          Federation + targeted test matrices (e.g. cable trays vs ducts
          &gt;&nbsp;200&nbsp;mm).
        </>,
        <>
          Pre-coordination report: hard clashes + silent clashes (maintenance
          zones, slopes, insulation).
        </>,
      ],
      tone: "amber",
    },
    {
      badge: "Wednesday 10am",
      title: "Weekly review (2 h)",
      bullets: [
        <>
          BIM Manager, Coordinator and package leads — design-team arbitration
          per network priority matrix.
        </>,
        <>
          No live design for 50 topics: focus on nodes not resolved
          asynchronously.
        </>,
      ],
      tone: "cyan",
    },
  ],

  s5Title: "5. Case studies: critical coordination nodes",
  s5Intro: (
    <>
      Two recurring situations where &laquo;&nbsp;zero clash&nbsp;&raquo;
      misleads the project team:
    </>
  ),
  s5Bullets: [
    <>
      <B>Hospital corridor plenum (2.20&nbsp;m):</B> smoke exhaust 600×400, supply
      air, power, low current, medical gases. Solution: altitude strata — heavy
      ducts at slab soffit, piping on trapeze supports, cables just above
      removable ceiling.
    </>,
    <>
      <B>Central plant room:</B> pumps and tanks with no geometric clash, yet
      headers above motors — impossible pump motor replacement in operations.
      Fix: offset headers + virtual lifting zone blocking small services.
    </>,
    <>
      <B>Office corridors:</B> group services on multi-trade supports instead of
      stacking &laquo;&nbsp;flat&nbsp;&raquo; in width only.
    </>,
    <>
      <B>Operations:</B> every coordination decision must anticipate preventive
      maintenance (HVAC filters, valve access, fire safety).
    </>,
  ],

  s6Title: "6. Conclusion: collective discipline before algorithms",
  s6Body: (
    <>
      <p className="leading-relaxed text-zinc-300">
        MEP BIM success is not about clash-engine sophistication but{" "}
        <B>project governance</B>. Eradicating silent clashes requires a locked
        naming convention, controlled LOIN and weekly reviews focused on
        buildability and real operations.
      </p>
      <p className="leading-relaxed text-zinc-300">
        At <B>Elouatiki Frères</B>, we support owners and trade contractors to
        deliver a federated model reliable for the building&apos;s entire
        lifecycle — not just a green clash report on handover day.
      </p>
    </>
  ),
  s6ImageAlt:
    "Smart Building dashboard in augmented reality: HVAC, lighting, fire safety and preventive maintenance alerts",
  s6ImageCaption: (
    <>
      A well-coordinated federated model feeds operations: sensors, CMMS and
      preventive maintenance from day one.
    </>
  ),

  pdfNote: (
    <p className="text-sm leading-relaxed text-zinc-300 sm:text-base">
      For more technical detail (LOD matrices, naming conventions, weekly
      review protocol, hospital case studies),{" "}
      <B>click the PDF</B> below.
    </p>
  ),
  pdfSectionTitle: "Technical PDF guide",
  pdfLinkLabel: "Open the full PDF guide",
  pdfAriaLabel:
    "Download the MEP BIM guide PDF — Coordinating HVAC, plumbing and electrical without silent clashes",

  signatureBrand: (
    <strong>
      Elouatiki Frères: MEP BIM coordination for buildable, maintainable assets.
    </strong>
  ),
  ctaText: "Let's discuss your MEP BIM coordination",
};

function getContent(locale: AppLocale): ArticleContent {
  if (locale === "fr") return FR_CONTENT;
  return EN_CONTENT;
}

const SEVERITY_TONE_CLASS: Record<
  SeverityTone,
  { card: string; badge: string }
> = {
  emerald: {
    card: "border-emerald-400/25 bg-emerald-500/5",
    badge: "text-emerald-300",
  },
  amber: {
    card: "border-amber-400/25 bg-amber-500/5",
    badge: "text-amber-300",
  },
  cyan: {
    card: "border-cyan-400/25 bg-cyan-500/5",
    badge: "text-cyan-300",
  },
};

export async function BimFluidesArticle() {
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

      <aside
        className="my-8 rounded-2xl border border-cyan-500/30 bg-gradient-to-br from-cyan-500/10 via-zinc-900/50 to-zinc-900/80 p-5 sm:my-10 sm:p-6"
        aria-labelledby="bim-fluides-pdf-title"
      >
        <div className="flex items-start gap-3 sm:gap-4">
          <span className="flex size-11 shrink-0 items-center justify-center rounded-xl border border-cyan-400/40 bg-cyan-500/15 text-cyan-300 sm:size-12">
            <FileText className="size-5 sm:size-6" aria-hidden />
          </span>
          <div className="min-w-0 flex-1 space-y-3">
            <p
              id="bim-fluides-pdf-title"
              className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-400"
            >
              {c.pdfSectionTitle}
            </p>
            {c.pdfNote}
            <a
              href={PDF_GUIDE_SRC}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={c.pdfAriaLabel}
              className="inline-flex items-center gap-2 rounded-xl border border-cyan-400/50 bg-cyan-500/15 px-4 py-2.5 text-sm font-semibold text-cyan-100 transition hover:border-cyan-300/70 hover:bg-cyan-500/25 hover:text-white sm:text-base"
            >
              {c.pdfLinkLabel}
              <span aria-hidden>→</span>
            </a>
          </div>
        </div>
      </aside>

      <figure className="image-figure my-10 overflow-hidden rounded-2xl border border-white/10 bg-zinc-900/40 shadow-xl shadow-black/30 sm:my-14">
        <img
          src={COVER_IMAGE_SRC}
          alt={c.coverAlt}
          className="aspect-[16/9] w-full object-cover"
          loading="eager"
        />
        <figcaption className="px-5 py-3 text-center text-sm italic text-zinc-400">
          {c.coverCaption}
        </figcaption>
      </figure>

      <section className="content-block mt-12 space-y-5">
        <h2 className="section-title font-[family-name:var(--font-space-grotesk)] text-2xl font-bold text-white sm:text-3xl">
          {c.s1Title}
        </h2>
        <div className="space-y-4 leading-relaxed text-zinc-300">{c.s1Intro}</div>
        <ol className="list-decimal space-y-3 pl-6 text-zinc-300 marker:text-cyan-400">
          {c.s1Items.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ol>
        <h3 className="font-[family-name:var(--font-space-grotesk)] text-xl font-semibold text-white sm:text-2xl">
          {c.s1RuleTitle}
        </h3>
        {c.s1RuleBody}
      </section>

      <section className="content-block mt-12 space-y-5">
        <h2 className="section-title font-[family-name:var(--font-space-grotesk)] text-2xl font-bold text-white sm:text-3xl">
          {c.s2Title}
        </h2>
        {c.s2Body}
      </section>

      <section className="content-block mt-12 space-y-6">
        <h2 className="section-title font-[family-name:var(--font-space-grotesk)] text-2xl font-bold text-white sm:text-3xl">
          {c.s3Title}
        </h2>
        <div className="leading-relaxed text-zinc-300">{c.s3Intro}</div>

        <div className="space-y-5">
          <h3 className="font-[family-name:var(--font-space-grotesk)] text-xl font-semibold text-white sm:text-2xl">
            {c.s3a.title}
          </h3>
          {c.s3a.body}
          <ul className="list-disc space-y-2 pl-6 text-zinc-300 marker:text-cyan-400">
            <li>{c.s3a.bullet}</li>
          </ul>
        </div>

        <div className="space-y-5">
          <h3 className="font-[family-name:var(--font-space-grotesk)] text-xl font-semibold text-white sm:text-2xl">
            {c.s3b.title}
          </h3>

          <figure className="image-figure my-6 overflow-hidden rounded-2xl border border-white/10 bg-zinc-900/40 shadow-lg shadow-black/30">
            <img
              src={IFC_DATA_IMAGE_SRC}
              alt={c.s3b.alt}
              className="aspect-[16/9] w-full object-cover"
              loading="lazy"
            />
            <figcaption className="px-5 py-3 text-center text-sm italic text-zinc-400">
              {c.s3b.caption}
            </figcaption>
          </figure>

          {c.s3b.body}
        </div>

        <div className="space-y-5">
          <h3 className="font-[family-name:var(--font-space-grotesk)] text-xl font-semibold text-white sm:text-2xl">
            {c.s3c.title}
          </h3>

          <figure className="image-figure my-6 overflow-hidden rounded-2xl border border-white/10 bg-zinc-900/40 shadow-lg shadow-black/30">
            <img
              src={SMART_BUILDING_IMAGE_SRC}
              alt={c.s3c.alt}
              className="aspect-[16/9] w-full object-cover"
              loading="lazy"
            />
            <figcaption className="px-5 py-3 text-center text-sm italic text-zinc-400">
              {c.s3c.caption}
            </figcaption>
          </figure>

          {c.s3c.body}
          <ul className="list-disc space-y-3 pl-6 text-zinc-300 marker:text-cyan-400">
            {c.s3c.bullets.map((b, idx) => (
              <li key={idx}>{b}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="content-block mt-12 space-y-5">
        <h2 className="section-title font-[family-name:var(--font-space-grotesk)] text-2xl font-bold text-white sm:text-3xl">
          {c.s4Title}
        </h2>
        <p className="leading-relaxed text-zinc-300">{c.s4Intro}</p>
        <ul className="severity-list grid gap-4 sm:grid-cols-1">
          {c.s4Classes.map((cls, idx) => {
            const tone = SEVERITY_TONE_CLASS[cls.tone];
            return (
              <li
                key={idx}
                className={`rounded-2xl border p-5 ${tone.card}`}
              >
                <p
                  className={`text-xs font-semibold uppercase tracking-[0.18em] ${tone.badge}`}
                >
                  {cls.badge}
                </p>
                <p className="mt-2 font-[family-name:var(--font-space-grotesk)] text-lg font-semibold text-white">
                  {cls.title}
                </p>
                <ul className="mt-3 space-y-1.5 text-sm leading-relaxed text-zinc-300">
                  {cls.bullets.map((bullet, j) => (
                    <li key={j}>{bullet}</li>
                  ))}
                </ul>
              </li>
            );
          })}
        </ul>
      </section>

      <section className="content-block mt-12 space-y-5">
        <h2 className="section-title font-[family-name:var(--font-space-grotesk)] text-2xl font-bold text-white sm:text-3xl">
          {c.s5Title}
        </h2>
        <p className="leading-relaxed text-zinc-300">{c.s5Intro}</p>
        <ul className="list-disc space-y-3 pl-6 text-zinc-300 marker:text-cyan-400">
          {c.s5Bullets.map((b, idx) => (
            <li key={idx}>{b}</li>
          ))}
        </ul>
      </section>

      <section className="content-block mt-12 space-y-5">
        <h2 className="section-title font-[family-name:var(--font-space-grotesk)] text-2xl font-bold text-white sm:text-3xl">
          {c.s6Title}
        </h2>
        {c.s6Body}
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
