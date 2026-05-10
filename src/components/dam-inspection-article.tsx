/**
 * Article de blog : « L'IA au service des géants ».
 *
 * Server component async : la locale active est récupérée via next-intl, et
 * un objet de contenu localisé (FR / EN, AR -> fallback FR) est sélectionné
 * pour fournir les chaînes et nœuds JSX du corps de l'article.
 *
 * Les méta (auteur, date, temps de lecture) sont volontairement constantes
 * ici car l'article est dédié et n'est pas piloté par un CMS.
 */

import { CalendarDays, Clock } from "lucide-react";
import { getLocale, getTranslations } from "next-intl/server";
import type { ReactNode } from "react";

import { Link } from "@/i18n/navigation";
import type { AppLocale } from "@/i18n/routing";

const COVER_IMAGE_SRC = "/media/blog/IA_barage/cover-drone-barrage.png";
const TWIN_IMAGE_SRC = "/media/blog/IA_barage/jumeau-numerique.png";
const AI_IMAGE_SRC = "/media/blog/IA_barage/ia-analyse.png";

const ARTICLE_AUTHOR = "EL OUATIKI Hicham";
const ARTICLE_PUBLISHED_AT = "2023-06-30";
const ARTICLE_READING_MINUTES = 7;

/** Mise en valeur sobre — réutilisée dans tout le contenu localisé. */
function B({ children }: { children: ReactNode }) {
  return <strong className="font-semibold text-white">{children}</strong>;
}

type SeverityTone = "emerald" | "amber" | "red";

type SeverityClass = {
  badge: string;
  title: string;
  /** Bullets formatés (label + description) ; ReactNode pour permettre le gras. */
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
  signatureBrand: ReactNode;
  ctaText: string;
};

const FR_CONTENT: ArticleContent = {
  eyebrow: "Drones & Deep Learning",
  title:
    "L'IA au service des géants : Comment Elouatiki Frères révolutionne l'inspection des barrages",
  intro: (
    <>
      <p className="text-base leading-relaxed text-zinc-300 sm:text-lg">
        Dans le secteur de l&apos;ingénierie civile, la pérennité des
        infrastructures critiques repose sur une surveillance sans faille.
        Sous le poids colossal de millions de mètres cubes d&apos;eau, les
        barrages en béton représentent un défi de maintenance permanent : ils
        subissent des pressions hydrostatiques extrêmes, des cycles de
        gel-dégel et une érosion chimique lente mais inexorable.
      </p>
      <p className="text-base leading-relaxed text-zinc-300 sm:text-lg">
        Chez <B>Elouatiki Frères</B>, nous avons compris que les méthodes
        d&apos;inspection traditionnelles ne suffisent plus à garantir une
        sécurité optimale. Récemment, nos équipes ont déployé une solution de
        pointe alliant <B>drones de haute technologie</B> et <B>Deep Learning</B>
        {" "}pour transformer radicalement l&apos;inspection de ces colosses.
        Voici comment nous redéfinissons les standards de la maintenance
        prédictive.
      </p>
    </>
  ),
  coverAlt: "Drone DJI Matrice 350 en plein vol inspectant un barrage",
  coverCaption: (
    <>
      Illustration de couverture — drones et IA au service de l&apos;inspection
      d&apos;ouvrages.
    </>
  ),
  s1Title: "Pourquoi l'inspection manuelle est devenue le maillon faible",
  s1Intro: (
    <>
      Pendant des décennies, la sécurité des barrages a reposé sur l&apos;œil
      humain. Des cordistes experts, suspendus au-dessus du vide, scrutaient
      la paroi millimètre par millimètre. Bien que ce savoir-faire soit
      respectable, il présente aujourd&apos;hui trois limites majeures que
      nous avons choisi de dépasser :
    </>
  ),
  s1Items: [
    <>
      <B>La subjectivité :</B>
      {" "}un rapport d&apos;inspection peut varier d&apos;un expert à
      l&apos;autre. L&apos;interprétation de la gravité d&apos;une fissure est
      souvent humaine, donc variable.
    </>,
    <>
      <B>Le risque opérationnel :</B>
      {" "}le travail en hauteur reste la première cause d&apos;accidents
      graves. Réduire l&apos;exposition des équipes est une priorité éthique
      et légale.
    </>,
    <>
      <B>La lenteur et le coût :</B>
      {" "}inspecter un parement de plusieurs hectares à la main est un
      processus qui s&apos;étale sur des semaines, immobilisant des ressources
      précieuses.
    </>,
  ],
  s2Title:
    "Notre solution : la synergie entre expertise terrain et haute technologie",
  s2Body: (
    <>
      <p className="leading-relaxed text-zinc-300">
        Pour cette réalisation, <B>Elouatiki Frères</B>
        {" "}n&apos;a pas simplement « pris des photos ». Nous avons déployé
        un véritable laboratoire volant capable d&apos;évoluer dans des
        environnements hostiles. À proximité d&apos;un barrage, les
        turbulences aérologiques et les perturbations magnétiques dues aux
        transformateurs haute tension rendent le pilotage complexe.
      </p>
      <p className="leading-relaxed text-zinc-300">
        Nos pilotes spécialisés utilisent des vecteurs{" "}
        <B>DJI Matrice 350 RTK</B>. Équipé d&apos;une nacelle plein format de{" "}
        <B>45 mégapixels</B>
        {" "}(Zenmuse P1), ce drone capture des détails invisibles à l&apos;œil
        nu depuis le sol. Pour les zones où la géométrie de la paroi est
        complexe ou masquée par la végétation, nous intégrons des capteurs{" "}
        <B>LiDAR</B>
        {" "}pour cartographier la structure avec une précision millimétrique.
        Là où l&apos;inspection classique voit une paroi grise uniforme, notre
        technologie documente la « peau » du béton, créant une base de données
        brute d&apos;une densité inédite.
      </p>
    </>
  ),
  s3Title: "Un workflow opérationnel maîtrisé de bout en bout",
  s3Intro: (
    <>
      La valeur ajoutée d&apos;<B>Elouatiki Frères</B>
      {" "}réside dans la rigueur de notre chaîne de traitement de la donnée.
      Nous avons structuré notre intervention autour de trois piliers
      technologiques :
    </>
  ),
  s3a: {
    title: "1. Acquisition de haute précision (GNSS RTK)",
    body: (
      <>
        L&apos;erreur n&apos;a pas sa place dans la sécurité des barrages.
        Pour garantir la répétabilité des inspections, nous utilisons des
        plans de vol automatisés via la technologie{" "}
        <B>RTK (Real-Time Kinematic)</B>. En nous appuyant sur une station de
        base au sol, nous corrigeons la position du drone en temps réel avec
        une précision centimétrique.
      </>
    ),
    bullet: (
      <>
        <B>L&apos;avantage ?</B>
        {" "}Chaque cliché est géoréférencé exactement dans l&apos;espace.
        Cela nous permet de revenir deux ans plus tard et de reprendre la
        photo sous le même angle au millimètre près, rendant la comparaison
        temporelle enfin scientifique.
      </>
    ),
  },
  s3b: {
    title: "2. Le Jumeau Numérique : le double digital de l'ouvrage",
    alt: "Transition entre une photo réelle de barrage et son jumeau numérique 3D sur un écran",
    caption: (
      <>
        Du parement réel au modèle 3D navigable : le jumeau numérique de
        l&apos;ouvrage.
      </>
    ),
    body: (
      <>
        Une fois les milliers d&apos;images capturées, nos ingénieurs
        utilisent la photogrammétrie pour générer un <B>Jumeau Numérique</B>.
        Ce modèle 3D ultra-fidèle n&apos;est pas qu&apos;une simple image :
        c&apos;est une base de données spatiale. Les gestionnaires peuvent
        désormais naviguer sur l&apos;ouvrage depuis leur bureau, mesurer des
        distances, calculer des volumes de dégradation et visualiser
        l&apos;intégralité du parement sans les distorsions optiques d&apos;une
        photo classique. C&apos;est l&apos;outil ultime de concertation et de
        planification.
      </>
    ),
  },
  s3c: {
    title: "3. Le cerveau (IA) : segmentation sémantique et précision au pixel",
    alt: "Détourage au pixel près d'une fissure de béton par l'IA U-Net",
    caption: (
      <>Segmentation sémantique : l&apos;IA détoure chaque fissure au pixel près.</>
    ),
    body: (
      <>
        C&apos;est ici que l&apos;expertise d&apos;<B>Elouatiki Frères</B>
        {" "}devient disruptive. Analyser manuellement 5 000 photos haute
        résolution prendrait des semaines. Nos algorithmes de{" "}
        <B>Deep Learning</B>
        {" "}le font en quelques heures avec une rigueur infatigable. Nous
        utilisons deux approches complémentaires :
      </>
    ),
    bullets: [
      <>
        <B>
          La détection (<B>YOLO</B> / Faster R-CNN) :
        </B>{" "}
        pour localiser instantanément les « objets » de désordre (corrosion
        des armatures, nids d&apos;abeille, efflorescences).
      </>,
      <>
        <B>
          La segmentation sémantique (<B>U-Net</B>) :
        </B>{" "}
        c&apos;est la technologie la plus fine. Au lieu de détecter une
        fissure, l&apos;IA la détoure au pixel près. Cela nous permet
        d&apos;extraire automatiquement des métriques vitales : longueur,
        orientation et surtout l&apos;<B>ouverture (la largeur)</B>
        {" "}de la fissure, même si celle-ci ne fait que 0,2 mm.
      </>,
    ],
  },
  s4Title:
    "L'échelle de gravité : une aide au pilotage des budgets de maintenance",
  s4Intro: (
    <>
      L&apos;IA ne remplace pas l&apos;ingénieur, elle lui permet de se
      concentrer sur les zones critiques. Pour faciliter la prise de décision,
      nos rapports classifient chaque pathologie détectée :
    </>
  ),
  s4Classes: [
    {
      badge: "Classe 1",
      title: "Microfissures et faïençage",
      bullets: [
        <>
          <B>Caractéristique :</B>
          {" "}ouvertures superficielles.
        </>,
        <>
          <B>Action :</B>
          {" "}archivage dans le jumeau numérique pour surveillance lors de la
          prochaine campagne.
        </>,
      ],
      tone: "emerald",
    },
    {
      badge: "Classe 2",
      title: "Fissures structurelles stables",
      bullets: [
        <>
          <B>Caractéristique :</B>
          {" "}fissures actives mais ne présentant pas de fuite.
        </>,
        <>
          <B>Action :</B>
          {" "}analyse de cinématique par superposition temporelle.
        </>,
      ],
      tone: "amber",
    },
    {
      badge: "Classe 3",
      title: "Fissures critiques ou infiltrations",
      bullets: [
        <>
          <B>Caractéristique :</B>
          {" "}fissures larges avec présence d&apos;humidité.
        </>,
        <>
          <B>Action :</B>
          {" "}
          <strong className="font-semibold text-red-200">
            alerte immédiate
          </strong>
          , expertise humaine prioritaire et planification de travaux de
          colmatage ou d&apos;injection.
        </>,
      ],
      tone: "red",
    },
  ],
  s5Title: "Les bénéfices business : un ROI incontestable",
  s5Intro: (
    <>
      En confiant l&apos;inspection de vos actifs à <B>Elouatiki Frères</B>,
      vous transformez une contrainte réglementaire en un avantage stratégique :
    </>
  ),
  s5Bullets: [
    <>
      <B>Vitesse d&apos;exécution :</B>
      {" "}des inspections réalisées <B>5 à 10 fois plus rapidement</B>
      {" "}que les méthodes classiques, minimisant l&apos;indisponibilité du
      site.
    </>,
    <>
      <B>Sécurité totale :</B>
      {" "}le risque de chute de hauteur est quasiment éliminé pour vos
      collaborateurs et les nôtres.
    </>,
    <>
      <B>Maintenance prédictive :</B>
      {" "}en superposant les données d&apos;inspections successives, nous
      identifions les tendances de dégradation avant qu&apos;elles
      n&apos;entraînent des réparations lourdes et coûteuses.
    </>,
    <>
      <B>Objectivité et audit :</B>
      {" "}nos algorithmes ne fatiguent pas. Ils analysent la 5 000ᵉ photo
      avec la même précision que la première, offrant un rapport impartial et
      auditable.
    </>,
  ],
  s6Title: "Conclusion : le drone, nouveau pilier de la décision industrielle",
  s6Body: (
    <>
      <p className="leading-relaxed text-zinc-300">
        Le drone n&apos;est plus un accessoire de captation d&apos;images ;
        chez <B>Elouatiki Frères</B>, il est devenu un{" "}
        <B>capteur de données stratégique</B>
        {" "}intégré à un écosystème digital puissant. En fusionnant notre
        savoir-faire opérationnel avec la puissance du <B>Deep Learning</B>,
        nous offrons une vision augmentée et objective de l&apos;état de santé
        des infrastructures.
      </p>
      <p className="leading-relaxed text-zinc-300">
        Plus qu&apos;une simple prestation technique, nous livrons une
        véritable intelligence décisionnelle. L&apos;IA ne remplace pas
        l&apos;expertise humaine, elle lui donne les moyens de protéger et de
        pérenniser nos géants de béton pour les décennies à venir.
      </p>
    </>
  ),
  signatureBrand: (
    <strong>
      Elouatiki Frères : L&apos;innovation au service de la sécurité.
    </strong>
  ),
  ctaText: "Contactez-nous pour votre projet d'inspection",
};

const EN_CONTENT: ArticleContent = {
  eyebrow: "Drones & Deep Learning",
  title:
    "AI for giants: how Elouatiki Frères is revolutionizing dam inspection",
  intro: (
    <>
      <p className="text-base leading-relaxed text-zinc-300 sm:text-lg">
        In civil engineering, the durability of critical infrastructure
        relies on flawless monitoring. Under the colossal weight of millions
        of cubic metres of water, concrete dams are a permanent maintenance
        challenge: they endure extreme hydrostatic pressure, freeze-thaw
        cycles and slow but relentless chemical erosion.
      </p>
      <p className="text-base leading-relaxed text-zinc-300 sm:text-lg">
        At <B>Elouatiki Frères</B>, we understood that traditional inspection
        methods are no longer enough to guarantee optimal safety. Our teams
        recently deployed a cutting-edge solution combining{" "}
        <B>high-tech drones</B> and <B>Deep Learning</B>
        {" "}to radically transform the inspection of these giants. Here is
        how we are redefining the standards of predictive maintenance.
      </p>
    </>
  ),
  coverAlt: "DJI Matrice 350 drone in flight inspecting a dam",
  coverCaption: (
    <>Cover illustration — drones and AI in the service of structural inspection.</>
  ),
  s1Title: "Why manual inspection has become the weak link",
  s1Intro: (
    <>
      For decades, dam safety rested on the human eye. Expert rope-access
      technicians, suspended over the void, scrutinised the wall millimetre
      by millimetre. As respectable as that craft is, it now has three major
      limitations that we have chosen to overcome:
    </>
  ),
  s1Items: [
    <>
      <B>Subjectivity:</B>
      {" "}an inspection report can vary from one expert to another. The
      interpretation of how serious a crack is is often human, and therefore
      variable.
    </>,
    <>
      <B>Operational risk:</B>
      {" "}working at height remains the leading cause of severe accidents.
      Reducing field-team exposure is both an ethical and a legal priority.
    </>,
    <>
      <B>Slowness and cost:</B>
      {" "}inspecting a face of several hectares by hand is a process that
      stretches over weeks, tying up valuable resources.
    </>,
  ],
  s2Title: "Our solution: field expertise meets high-end technology",
  s2Body: (
    <>
      <p className="leading-relaxed text-zinc-300">
        For this project <B>Elouatiki Frères</B>
        {" "}did not simply &laquo; take photos &raquo;. We deployed a real
        flying laboratory able to operate in hostile environments. Near a
        dam, aerological turbulence and the magnetic disturbance from
        high-voltage transformers make piloting complex.
      </p>
      <p className="leading-relaxed text-zinc-300">
        Our specialised pilots fly <B>DJI Matrice 350 RTK</B>
        {" "}platforms. Equipped with a full-frame <B>45-megapixel</B>
        {" "}gimbal (Zenmuse P1), this drone captures details invisible to
        the naked eye from the ground. For zones where the wall geometry is
        complex or hidden by vegetation, we add <B>LiDAR</B>
        {" "}sensors to map the structure with millimetre accuracy. Where
        classical inspection sees a uniform grey wall, our technology
        documents the &laquo; skin &raquo; of the concrete, building a raw
        dataset of unprecedented density.
      </p>
    </>
  ),
  s3Title: "An end-to-end controlled operational workflow",
  s3Intro: (
    <>
      The added value of <B>Elouatiki Frères</B>
      {" "}lies in the rigour of our data-processing chain. We structured our
      intervention around three technological pillars:
    </>
  ),
  s3a: {
    title: "1. High-precision acquisition (GNSS RTK)",
    body: (
      <>
        Error has no place in dam safety. To guarantee that inspections are
        repeatable, we use automated flight plans powered by{" "}
        <B>RTK (Real-Time Kinematic)</B>. Backed by a ground base station,
        we correct the drone&apos;s position in real time with centimetre
        accuracy.
      </>
    ),
    bullet: (
      <>
        <B>The benefit?</B>
        {" "}Every shot is geo-referenced precisely in space. We can come
        back two years later and re-take the photo from the exact same
        angle to the millimetre, finally turning temporal comparison into a
        scientific exercise.
      </>
    ),
  },
  s3b: {
    title: "2. The Digital Twin: the structure's digital double",
    alt: "Transition between a real photo of a dam and its 3D digital twin on a screen",
    caption: (
      <>From the physical face to a navigable 3D model: the structure&apos;s digital twin.</>
    ),
    body: (
      <>
        Once the thousands of images are captured, our engineers use
        photogrammetry to generate a <B>Digital Twin</B>. This ultra-faithful
        3D model is more than just a picture: it is a spatial database.
        Asset managers can navigate the structure from their desk, measure
        distances, compute degradation volumes and view the entire face
        without the optical distortions of a regular photograph. It is the
        ultimate tool for stakeholder discussion and planning.
      </>
    ),
  },
  s3c: {
    title: "3. The brain (AI): semantic segmentation, pixel-level accuracy",
    alt: "Pixel-level outline of a concrete crack by U-Net AI",
    caption: (
      <>Semantic segmentation: the AI traces every crack at pixel precision.</>
    ),
    body: (
      <>
        This is where <B>Elouatiki Frères</B>&apos; expertise becomes
        disruptive. Manually reviewing 5,000 high-resolution photos would
        take weeks. Our <B>Deep Learning</B>
        {" "}algorithms do it in a few hours with tireless rigour. We
        combine two complementary approaches:
      </>
    ),
    bullets: [
      <>
        <B>
          Detection (<B>YOLO</B> / Faster R-CNN):
        </B>{" "}
        to instantly locate disorder &laquo; objects &raquo; (rebar
        corrosion, honeycombing, efflorescence).
      </>,
      <>
        <B>
          Semantic segmentation (<B>U-Net</B>):
        </B>{" "}
        the finest of the two. Instead of just detecting a crack, the AI
        traces it pixel by pixel. We can then automatically extract vital
        metrics: length, orientation and above all the{" "}
        <B>opening (the width)</B>
        {" "}of the crack, even when it is only 0.2 mm wide.
      </>,
    ],
  },
  s4Title: "The severity scale: steering maintenance budgets with confidence",
  s4Intro: (
    <>
      AI does not replace the engineer; it lets them focus on the critical
      zones. To make decision-making easier, our reports classify every
      detected pathology:
    </>
  ),
  s4Classes: [
    {
      badge: "Class 1",
      title: "Microcracks and crazing",
      bullets: [
        <>
          <B>Characteristic:</B>
          {" "}surface-level openings.
        </>,
        <>
          <B>Action:</B>
          {" "}archived in the digital twin for monitoring during the next
          campaign.
        </>,
      ],
      tone: "emerald",
    },
    {
      badge: "Class 2",
      title: "Stable structural cracks",
      bullets: [
        <>
          <B>Characteristic:</B>
          {" "}active cracks with no leakage.
        </>,
        <>
          <B>Action:</B>
          {" "}kinematic analysis through temporal overlay.
        </>,
      ],
      tone: "amber",
    },
    {
      badge: "Class 3",
      title: "Critical cracks or infiltration",
      bullets: [
        <>
          <B>Characteristic:</B>
          {" "}wide cracks with visible moisture.
        </>,
        <>
          <B>Action:</B>
          {" "}
          <strong className="font-semibold text-red-200">
            immediate alert
          </strong>
          , priority human review and planning of sealing or injection works.
        </>,
      ],
      tone: "red",
    },
  ],
  s5Title: "Business benefits: an undeniable ROI",
  s5Intro: (
    <>
      By trusting <B>Elouatiki Frères</B>
      {" "}with the inspection of your assets, you turn a regulatory
      constraint into a strategic advantage:
    </>
  ),
  s5Bullets: [
    <>
      <B>Speed of execution:</B>
      {" "}inspections completed <B>5 to 10 times faster</B>
      {" "}than classical methods, minimising site downtime.
    </>,
    <>
      <B>Total safety:</B>
      {" "}fall-from-height risk is virtually removed for both your team
      and ours.
    </>,
    <>
      <B>Predictive maintenance:</B>
      {" "}by overlaying data from successive inspections we surface
      degradation trends before they trigger heavy, costly repairs.
    </>,
    <>
      <B>Objectivity and auditability:</B>
      {" "}our algorithms do not get tired. They review the 5,000ᵗʰ photo
      with the same precision as the first, delivering an impartial,
      auditable report.
    </>,
  ],
  s6Title: "Conclusion: the drone, a new pillar of industrial decisions",
  s6Body: (
    <>
      <p className="leading-relaxed text-zinc-300">
        The drone is no longer an image-capture accessory; at{" "}
        <B>Elouatiki Frères</B>
        {" "}it has become a <B>strategic data sensor</B>
        {" "}plugged into a powerful digital ecosystem. By blending our
        operational know-how with the power of <B>Deep Learning</B>, we
        deliver an augmented, objective view of infrastructure health.
      </p>
      <p className="leading-relaxed text-zinc-300">
        More than just a technical service, we deliver real decision-making
        intelligence. AI does not replace human expertise — it gives that
        expertise the means to protect and sustain our concrete giants for
        the decades to come.
      </p>
    </>
  ),
  signatureBrand: (
    <strong>Elouatiki Frères: Innovation in the service of safety.</strong>
  ),
  ctaText: "Contact us about your inspection project",
};

function getContent(locale: AppLocale): ArticleContent {
  if (locale === "en") return EN_CONTENT;
  // AR : pas encore traduit, on retombe sur le FR pour ne pas casser l'UX.
  return FR_CONTENT;
}

const SEVERITY_TONE_CLASS: Record<SeverityTone, { card: string; badge: string }> = {
  emerald: {
    card: "border-emerald-400/25 bg-emerald-500/5",
    badge: "text-emerald-300",
  },
  amber: {
    card: "border-amber-400/25 bg-amber-500/5",
    badge: "text-amber-300",
  },
  red: {
    card: "border-red-400/25 bg-red-500/5",
    badge: "text-red-300",
  },
};

export async function DamInspectionArticle() {
  const locale = (await getLocale()) as AppLocale;
  const t = await getTranslations("Blog");
  const c = getContent(locale);

  const publishedDate = new Date(ARTICLE_PUBLISHED_AT);
  const formattedDate = new Intl.DateTimeFormat(locale, {
    dateStyle: "long",
  }).format(publishedDate);
  const readingTimeLabel = t("readingTime", {
    minutes: ARTICLE_READING_MINUTES,
  });

  return (
    <article className="article-container mx-auto max-w-4xl px-5 py-16 text-zinc-200 sm:px-8 sm:py-20 lg:px-12">
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
        <p className="leading-relaxed text-zinc-300">{c.s1Intro}</p>
        <ol className="list-decimal space-y-3 pl-6 text-zinc-300 marker:text-cyan-400">
          {c.s1Items.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ol>
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
        <p className="leading-relaxed text-zinc-300">{c.s3Intro}</p>

        <div className="space-y-5">
          <h3 className="font-[family-name:var(--font-space-grotesk)] text-xl font-semibold text-white sm:text-2xl">
            {c.s3a.title}
          </h3>
          <p className="leading-relaxed text-zinc-300">{c.s3a.body}</p>
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
              src={TWIN_IMAGE_SRC}
              alt={c.s3b.alt}
              className="aspect-[16/9] w-full object-cover"
              loading="lazy"
            />
            <figcaption className="px-5 py-3 text-center text-sm italic text-zinc-400">
              {c.s3b.caption}
            </figcaption>
          </figure>

          <p className="leading-relaxed text-zinc-300">{c.s3b.body}</p>
        </div>

        <div className="space-y-5">
          <h3 className="font-[family-name:var(--font-space-grotesk)] text-xl font-semibold text-white sm:text-2xl">
            {c.s3c.title}
          </h3>

          <figure className="image-figure my-6 overflow-hidden rounded-2xl border border-white/10 bg-zinc-900/40 shadow-lg shadow-black/30">
            <img
              src={AI_IMAGE_SRC}
              alt={c.s3c.alt}
              className="aspect-[16/9] w-full object-cover"
              loading="lazy"
            />
            <figcaption className="px-5 py-3 text-center text-sm italic text-zinc-400">
              {c.s3c.caption}
            </figcaption>
          </figure>

          <p className="leading-relaxed text-zinc-300">{c.s3c.body}</p>
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
