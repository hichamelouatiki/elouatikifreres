/**
 * Article de blog : « Quand l'IA lit le chantier ».
 *
 * Server component async : la locale active est récupérée via next-intl, et
 * un objet de contenu localisé (FR / EN, AR -> fallback EN comme demandé)
 * fournit les chaînes et nœuds JSX du corps de l'article.
 *
 * Les méta (auteur, date, temps de lecture) sont volontairement constantes
 * ici car l'article est dédié et n'est pas piloté par un CMS.
 */

import { CalendarDays, Clock } from "lucide-react";
import Image from "next/image";
import { getLocale, getTranslations } from "next-intl/server";
import type { ReactNode } from "react";

import { Link } from "@/i18n/navigation";
import type { AppLocale } from "@/i18n/routing";

const COVER_IMAGE_SRC =
  "/media/blog/IA_chantier/cover-IA-building%20site.png";
const SCAN_BIM_IMAGE_SRC =
  "/media/blog/IA_chantier/Scan-to-BIM_Le%20nuage%20de%20points.png";
const ARBITRAGE_IMAGE_SRC =
  "/media/blog/IA_chantier/Arbitrage%20terrain%20L%27humain%20au%20centre.png";
const BARRIERES_IMAGE_SRC =
  "/media/blog/IA_chantier/Les%20barri%C3%A8res%20Technologie%20vs%20Environnement%20hostile.png";

const ARTICLE_AUTHOR = "EL OUATIKI Hicham";
const ARTICLE_PUBLISHED_AT = "2023-03-18";
const ARTICLE_READING_MINUTES = 8;

/** Mise en valeur sobre — réutilisée dans tout le contenu localisé. */
function B({ children }: { children: ReactNode }) {
  return <strong className="font-semibold text-white">{children}</strong>;
}

type ArticleContent = {
  eyebrow: string;
  title: string;
  intro: ReactNode;
  coverAlt: string;
  coverCaption: ReactNode;

  s1Title: string;
  s1Intro: ReactNode;
  s1SubTitle: string;
  s1Lead: ReactNode;
  s1Items: [ReactNode, ReactNode, ReactNode];
  s1Quote: ReactNode;

  s2Title: string;
  s2Intro: ReactNode;
  s2SubTitle: string;
  s2Body: ReactNode;
  s2ImageAlt: string;
  s2ImageCaption: ReactNode;
  s2Bullets: [ReactNode, ReactNode];

  s3Title: string;
  s3Intro: ReactNode;
  s3Context: ReactNode;
  s3aTitle: string;
  s3aBody: ReactNode;
  s3aBullets: [ReactNode, ReactNode];
  s3bTitle: string;
  s3bBody: ReactNode;
  s3ImageAlt: string;
  s3ImageCaption: ReactNode;
  s3Quote: ReactNode;

  s4Title: string;
  s4Intro: ReactNode;
  s4ImageAlt: string;
  s4ImageCaption: ReactNode;
  s4Bullets: [ReactNode, ReactNode, ReactNode];

  s5Title: string;
  s5Body: ReactNode;

  signatureBrand: ReactNode;
  ctaText: string;
};

const FR_CONTENT: ArticleContent = {
  eyebrow: "Computer Vision & IA chantier",
  title:
    "Quand l'IA lit le chantier : de la vision par ordinateur aux arbitrages terrain",
  intro: (
    <>
      <p className="text-base leading-relaxed text-zinc-300 sm:text-lg">
        <B>Le secteur de la construction vit un paradoxe fascinant.</B>{" "}
        D&apos;un côté, nous concevons des bâtiments avec des outils
        numériques d&apos;une précision millimétrique (le BIM). De l&apos;autre,
        l&apos;exécution sur le terrain reste soumise aux aléas
        météorologiques, à la boue, à la poussière et à la fatigue humaine.
        Pendant des décennies, le pont entre ces deux mondes — le numérique
        parfait et le physique chaotique — s&apos;est résumé à des plans
        papier annotés sous la pluie et des fichiers Excel mis à jour tard le
        soir dans une cabine de chantier.
      </p>
      <p className="text-base leading-relaxed text-zinc-300 sm:text-lg">
        Mais une révolution silencieuse est en marche. Aujourd&apos;hui, ce
        ne sont plus seulement les ingénieurs qui scrutent les plans, ce
        sont des caméras dotées de réseaux de neurones. La{" "}
        <B>Computer Vision</B> (vision par ordinateur) est en train de
        transformer chaque pixel capté sur un chantier en une donnée
        exploitable.
      </p>
      <p className="text-base leading-relaxed text-zinc-300 sm:text-lg">
        Comment l&apos;Intelligence Artificielle passe-t-elle de
        l&apos;observation froide d&apos;un flux vidéo à l&apos;aide à la
        décision stratégique dans la boue du terrain ? Plongée au cœur du
        «&nbsp;chantier augmenté&nbsp;».
      </p>
    </>
  ),
  coverAlt:
    "Chantier de construction augmenté par l'IA et la vision par ordinateur",
  coverCaption: (
    <>
      Illustration de couverture — le chantier augmenté par la vision par
      ordinateur.
    </>
  ),

  s1Title: "1. L'œil numérique : comment l'IA « comprend » la matière",
  s1Intro: (
    <>
      Historiquement, installer une caméra sur un chantier servait à deux
      choses : produire un <em>timelapse</em> flatteur pour le client à la
      fin du projet, ou dissuader les vols de matériel. La vidéo était une
      donnée «&nbsp;morte&nbsp;».
      <br />
      <br />
      Avec le Deep Learning, la vidéo devient «&nbsp;vivante&nbsp;». Les
      algorithmes de vision par ordinateur ne voient pas seulement un
      assemblage de pixels colorés ; ils identifient des concepts, des
      volumes et des actions.
    </>
  ),
  s1SubTitle: "La trinité de l'analyse visuelle sur site",
  s1Lead: (
    <>Pour que l&apos;IA soit utile, elle déploie trois niveaux de compréhension :</>
  ),
  s1Items: [
    <>
      <B>La reconnaissance et classification d&apos;objets (Object Detection) :</B>{" "}
      l&apos;algorithme est entraîné à reconnaître des milliers
      d&apos;éléments propres au BTP. Il ne voit pas «&nbsp;un gros véhicule
      jaune&nbsp;», il identifie «&nbsp;une pelleteuse de 20 tonnes à
      l&apos;arrêt&nbsp;». Il repère les casques, les gilets haute
      visibilité, les banches de coffrage ou les palettes de parpaings.
    </>,
    <>
      <B>La segmentation sémantique :</B>{" "}c&apos;est la capacité de
      l&apos;IA à détourer et catégoriser chaque zone d&apos;une image.
      L&apos;écran se divise en couleurs : ici du béton fraîchement coulé,
      là de la terre terrassée, au fond des armatures métalliques en
      attente.
    </>,
    <>
      <B>L&apos;analyse spatio-temporelle :</B>{" "}c&apos;est le graal. En
      croisant les images de plusieurs caméras (fixes, embarquées sur les
      grues ou portées par des drones) avec le facteur temps, l&apos;IA
      calcule des cadences. Elle «&nbsp;sait&nbsp;» qu&apos;il a fallu 4
      heures pour ferrailler cette zone, contre 3 heures la veille.
    </>,
  ],
  s1Quote: (
    <>
      «&nbsp;La vision par ordinateur sur les chantiers transforme une
      réalité physique désordonnée en une base de données structurée et
      interrogeable en temps réel.&nbsp;»
    </>
  ),

  s2Title:
    "2. Du nuage de points au BIM vivant : la fin du « As-Built » douloureux",
  s2Intro: (
    <>
      L&apos;un des plus grands cauchemars d&apos;un directeur de projet est
      l&apos;écart entre le plan théorique et la réalité physique. C&apos;est
      ce qu&apos;on appelle le «&nbsp;tel-que-construit&nbsp;» (As-built).
      Une gaine de ventilation décalée de 10 centimètres au 3<sup>ème</sup>{" "}
      étage peut bloquer l&apos;installation des faux plafonds un mois plus
      tard, entraînant des milliers d&apos;euros de surcoûts.
    </>
  ),
  s2SubTitle: "Le Scan-to-BIM automatisé",
  s2Body: (
    <p className="leading-relaxed text-zinc-300">
      L&apos;IA intervient ici comme un auditeur impitoyable mais salvateur.
      Des drones ou des robots (comme le célèbre chien-robot Spot de Boston
      Dynamics) parcourent le chantier en capturant des nuages de points via
      Lidar ou photogrammétrie. L&apos;IA superpose ensuite ce nuage de
      points 3D ultra-dense avec la maquette numérique BIM.
    </p>
  ),
  s2ImageAlt:
    "Nuage de points Lidar superposé à une maquette BIM pour détecter les écarts",
  s2ImageCaption: (
    <>
      Scan-to-BIM : le nuage de points confronté à la maquette numérique
      pour détecter les écarts.
    </>
  ),
  s2Bullets: [
    <>
      <B>Contrôle qualité instantané :</B>{" "}le système surligne en rouge
      les incohérences. «&nbsp;Le mur de refend C4 est désaxé de 4 cm. La
      réservation pour la plomberie est manquante.&nbsp;» L&apos;erreur est
      détectée avant que le béton ne soit coulé, pas quand le plombier
      arrive sur site.
    </>,
    <>
      <B>Suivi d&apos;avancement (Progress Tracking) :</B>{" "}l&apos;IA
      «&nbsp;lit&nbsp;» le chantier et coche automatiquement les tâches
      dans le planning Primavera ou MS Project. Le pourcentage
      d&apos;achèvement d&apos;un étage n&apos;est plus une estimation
      subjective au doigt mouillé lors de la réunion de chantier du mardi,
      c&apos;est une donnée mathématique.
    </>,
  ],

  s3Title:
    "3. L'arbitrage terrain : pourquoi l'IA ne remplacera pas le chef de chantier",
  s3Intro: (
    <>
      C&apos;est ici que l&apos;engouement technologique doit se heurter au
      pragmatisme. Face à cette déferlante de données prédictives, une
      crainte émerge : l&apos;IA va-t-elle dicter les ordres aux ouvriers ?
      La réponse est non. <B>L&apos;IA propose, l&apos;humain dispose.</B>
    </>
  ),
  s3Context: (
    <>
      Le chantier est un environnement hautement complexe, soumis à des
      variables que l&apos;IA ne peut pas (encore) intégrer : la fatigue
      d&apos;une équipe, les tensions géopolitiques qui retardent un
      approvisionnement en acier, ou la relation de confiance avec un
      sous-traitant.
    </>
  ),
  s3aTitle: "Le rôle de l'Intelligence Artificielle",
  s3aBody: (
    <>
      Imaginons un scénario : l&apos;IA détecte que le lot «&nbsp;Gros
      Œuvre&nbsp;» a pris deux jours de retard sur la zone Nord. Elle
      croise cette information avec les prévisions météo (fortes pluies
      prévues dans 48&nbsp;h) et simule plusieurs scénarios.
    </>
  ),
  s3aBullets: [
    <>
      <em>Scénario A :</em>{" "}augmenter les effectifs de 30&nbsp;%.
    </>,
    <>
      <em>Scénario B :</em>{" "}décaler l&apos;intervention des
      électriciens.
    </>,
  ],
  s3bTitle: "Le rôle de l'Intelligence Humaine",
  s3bBody: (
    <>
      <p className="leading-relaxed text-zinc-300">
        Le conducteur de travaux reçoit ces alertes. Mais c&apos;est lui qui
        va trancher, car l&apos;arbitrage requiert du <B>discernement</B>.
      </p>
      <p className="leading-relaxed text-zinc-300">
        Choisir le Scénario A implique d&apos;ajouter des hommes dans une
        zone exiguë. L&apos;IA voit une hausse de productivité
        mathématique ; l&apos;humain y voit un risque de
        «&nbsp;co-activité&nbsp;» mortelle (plusieurs corps d&apos;état se
        marchant dessus). L&apos;humain choisira peut-être une option C, non
        prévue par l&apos;algorithme, basée sur la négociation en direct
        avec les équipes.
      </p>
    </>
  ),
  s3ImageAlt: "Conducteur de travaux arbitrant face à des recommandations IA",
  s3ImageCaption: (
    <>Arbitrage terrain : l&apos;humain reste au centre des décisions.</>
  ),
  s3Quote: (
    <>
      «&nbsp;L&apos;IA n&apos;est pas le nouveau chef de chantier. Elle est
      le copilote cognitif qui permet à l&apos;encadrement de passer de la
      gestion des urgences à la gestion de la stratégie.&nbsp;»
    </>
  ),

  s4Title: "4. Les barrières à l'entrée : entre boue, connectivité et éthique",
  s4Intro: (
    <>
      Si le tableau semble idyllique, le déploiement de ces technologies sur
      le terrain ressemble souvent à un parcours du combattant.
    </>
  ),
  s4ImageAlt:
    "Technologie embarquée face à un environnement chantier hostile (poussière, humidité)",
  s4ImageCaption: (
    <>
      Technologie vs environnement hostile : le défi de l&apos;edge
      computing sur chantier.
    </>
  ),
  s4Bullets: [
    <>
      <B>Le défi matériel (Hardware) :</B>{" "}un chantier, c&apos;est de la
      poussière, des vibrations, de l&apos;humidité et des écarts de
      température extrêmes. L&apos;informatique de périphérie (<em>Edge
      Computing</em>) doit être encapsulée dans des boîtiers durcis. Une
      lentille de caméra recouverte de poussière de ciment rend
      l&apos;algorithme le plus puissant totalement aveugle.
    </>,
    <>
      <B>La connectivité :</B>{" "}dans les sous-sols (infrastructures,
      parkings), la 4G/5G ne passe pas. Il faut déployer des réseaux
      maillés complexes pour faire remonter la donnée.
    </>,
    <>
      <B>Le défi social et le RGPD :</B>{" "}filmer des ouvriers en permanence
      crée une légitime méfiance. Le spectre du «&nbsp;Big Brother&nbsp;»
      patronal est bien réel. Pour être acceptée, la vision par ordinateur
      doit anonymiser les données à la source (floutage des visages
      embarqué dans la caméra) et se concentrer sur deux piliers
      inattaquables : <B>la sécurité</B>{" "}(détecter qu&apos;un homme se
      trouve sous une charge suspendue) et <B>la logistique</B>{" "}
      (fluidifier les livraisons), jamais sur la surveillance de la
      productivité individuelle.
    </>,
  ],

  s5Title: "5. Conclusion : vers l'ère du « chantier augmenté »",
  s5Body: (
    <>
      <p className="leading-relaxed text-zinc-300">
        La digitalisation du BTP n&apos;en est qu&apos;à ses balbutiements.
        L&apos;intégration de l&apos;IA et de la vision par ordinateur signe
        la fin de la gestion de projet réactive («&nbsp;nous avons un
        problème, trouvons une solution&nbsp;») au profit d&apos;une gestion
        proactive («&nbsp;nous allons avoir un problème dans deux semaines,
        évitons-le&nbsp;»).
      </p>
      <p className="leading-relaxed text-zinc-300">
        En automatisant la collecte fastidieuse des données et le reporting,
        l&apos;IA redonne aux encadrants leur ressource la plus précieuse :
        le <B>temps</B>.
      </p>
      <p className="leading-relaxed text-zinc-300">
        Moins de temps passé à compter des palettes de briques, c&apos;est
        plus de temps passé sur le terrain pour manager les équipes,
        garantir la sécurité et s&apos;assurer de la qualité finale de
        l&apos;ouvrage. Finalement, l&apos;ironie de l&apos;introduction de
        l&apos;intelligence artificielle sur les chantiers est magnifique :
        elle permet, plus que jamais, de remettre l&apos;humain au centre du
        processus de construction.
      </p>
    </>
  ),

  signatureBrand: (
    <strong>
      Elouatiki Frères : l&apos;innovation au service du chantier augmenté.
    </strong>
  ),
  ctaText: "Échangeons sur votre projet de chantier augmenté",
};

const EN_CONTENT: ArticleContent = {
  eyebrow: "Computer Vision & AI on site",
  title:
    "When AI reads the site: from computer vision to field decisions",
  intro: (
    <>
      <p className="text-base leading-relaxed text-zinc-300 sm:text-lg">
        <B>The construction industry lives a fascinating paradox.</B>{" "}
        On one side, we design buildings using digital tools of
        millimetre-grade precision (BIM). On the other, on-site execution
        remains hostage to the weather, mud, dust and human fatigue. For
        decades, the bridge between those two worlds — flawless digital and
        chaotic physical — boiled down to paper drawings annotated in the
        rain and Excel files updated late at night in a site cabin.
      </p>
      <p className="text-base leading-relaxed text-zinc-300 sm:text-lg">
        But a silent revolution is under way. Today, engineers are no
        longer the only ones reading the plans — cameras backed by neural
        networks do too. <B>Computer Vision</B> is turning every pixel
        captured on a construction site into actionable data.
      </p>
      <p className="text-base leading-relaxed text-zinc-300 sm:text-lg">
        How does Artificial Intelligence move from the cold observation of
        a video feed to strategic decision support, knee-deep in site mud?
        A dive into the heart of the &laquo;&nbsp;augmented site&nbsp;&raquo;.
      </p>
    </>
  ),
  coverAlt:
    "Construction site augmented by AI and computer vision",
  coverCaption: (
    <>Cover illustration — the construction site augmented by computer vision.</>
  ),

  s1Title: "1. The digital eye: how AI \u201Cunderstands\u201D matter",
  s1Intro: (
    <>
      Historically, putting a camera on a construction site served two
      purposes: producing a flattering <em>timelapse</em> for the client at
      the end of the project, or deterring theft. Video was &laquo;&nbsp;dead&nbsp;&raquo;
      data.
      <br />
      <br />
      With Deep Learning, video becomes &laquo;&nbsp;alive&nbsp;&raquo;.
      Computer-vision algorithms see more than a coloured pixel salad;
      they recognise concepts, volumes and actions.
    </>
  ),
  s1SubTitle: "The trinity of on-site visual analysis",
  s1Lead: (
    <>For AI to be useful, it deploys three levels of understanding:</>
  ),
  s1Items: [
    <>
      <B>Object detection and classification:</B>{" "}the algorithm is trained
      to recognise thousands of items typical of construction. It does not
      see &laquo;&nbsp;a big yellow vehicle&nbsp;&raquo; — it identifies
      &laquo;&nbsp;a 20-tonne excavator at idle&nbsp;&raquo;. It spots
      hard hats, hi-vis vests, formwork panels and pallets of cinder
      blocks.
    </>,
    <>
      <B>Semantic segmentation:</B>{" "}the ability for the AI to outline and
      categorise every zone of an image. The screen breaks into colours:
      here freshly poured concrete, there levelled earth, in the back
      waiting rebar.
    </>,
    <>
      <B>Spatio-temporal analysis:</B>{" "}the holy grail. By cross-referencing
      footage from multiple cameras (fixed, crane-mounted or drone-borne)
      with the time variable, AI computes throughput rates. It
      &laquo;&nbsp;knows&nbsp;&raquo; it took 4 hours to rebar that zone,
      against 3 hours the day before.
    </>,
  ],
  s1Quote: (
    <>
      &laquo;&nbsp;Computer vision on construction sites turns a messy
      physical reality into a structured, real-time queryable
      database.&nbsp;&raquo;
    </>
  ),

  s2Title:
    "2. From the point cloud to a living BIM: the end of the painful \u201CAs-Built\u201D",
  s2Intro: (
    <>
      One of a project director&apos;s worst nightmares is the gap between
      the theoretical plan and the physical reality — the so-called
      &laquo;&nbsp;as-built&nbsp;&raquo;. A ventilation duct off by 10
      centimetres on the 3<sup>rd</sup>{" "}floor can block the suspended
      ceiling installation a month later, triggering thousands of euros of
      cost overruns.
    </>
  ),
  s2SubTitle: "Automated Scan-to-BIM",
  s2Body: (
    <p className="leading-relaxed text-zinc-300">
      Here, AI steps in as a relentless yet life-saving auditor. Drones or
      robots (such as Boston Dynamics&apos; famous Spot robot dog) roam the
      site and capture point clouds via Lidar or photogrammetry. The AI
      then overlays that ultra-dense 3D point cloud onto the BIM model.
    </p>
  ),
  s2ImageAlt:
    "Lidar point cloud overlaid on a BIM model to detect deviations",
  s2ImageCaption: (
    <>
      Scan-to-BIM: the point cloud confronted with the digital model to
      surface every deviation.
    </>
  ),
  s2Bullets: [
    <>
      <B>Instant quality control:</B>{" "}the system highlights every
      inconsistency in red. &laquo;&nbsp;Shear wall C4 is misaligned by
      4&nbsp;cm. The plumbing penetration is missing.&nbsp;&raquo; The
      error is detected before the concrete is poured — not when the
      plumber turns up on site.
    </>,
    <>
      <B>Progress tracking:</B>{" "}AI &laquo;&nbsp;reads&nbsp;&raquo; the
      site and automatically ticks off tasks in the Primavera or MS
      Project schedule. The completion percentage of a floor is no longer
      a wet-finger estimate during Tuesday&apos;s site meeting — it is a
      mathematical number.
    </>,
  ],

  s3Title:
    "3. Field arbitration: why AI will not replace the site manager",
  s3Intro: (
    <>
      This is where the tech hype must meet pragmatism. Faced with this
      flood of predictive data, one fear emerges: will AI start dictating
      orders to the workers? The answer is no. <B>AI proposes; humans
      decide.</B>
    </>
  ),
  s3Context: (
    <>
      A construction site is a highly complex environment, ruled by
      variables AI cannot (yet) integrate: a team&apos;s fatigue, the
      geopolitical tensions delaying a steel shipment, or the trust
      relationship with a subcontractor.
    </>
  ),
  s3aTitle: "The role of Artificial Intelligence",
  s3aBody: (
    <>
      Imagine a scenario: the AI detects that the &laquo;&nbsp;structural
      works&nbsp;&raquo; package is two days behind on the North zone. It
      cross-references that information with the weather forecast (heavy
      rain expected within 48&nbsp;h) and simulates several scenarios.
    </>
  ),
  s3aBullets: [
    <>
      <em>Scenario A:</em>{" "}increase the workforce by 30&nbsp;%.
    </>,
    <>
      <em>Scenario B:</em>{" "}push the electricians&apos; intervention
      back.
    </>,
  ],
  s3bTitle: "The role of Human Intelligence",
  s3bBody: (
    <>
      <p className="leading-relaxed text-zinc-300">
        The site supervisor receives those alerts. But they are the one to
        decide, because arbitration requires <B>discernment</B>.
      </p>
      <p className="leading-relaxed text-zinc-300">
        Picking Scenario A means adding people to a cramped zone. AI sees
        a mathematical productivity boost; a human sees the risk of
        deadly &laquo;&nbsp;co-activity&nbsp;&raquo; (multiple trades
        getting in each other&apos;s way). The human will perhaps choose
        an option C — not planned by the algorithm — based on direct
        negotiation with the teams.
      </p>
    </>
  ),
  s3ImageAlt: "Site supervisor making a call alongside AI recommendations",
  s3ImageCaption: (
    <>Field arbitration: humans remain at the centre of the decision.</>
  ),
  s3Quote: (
    <>
      &laquo;&nbsp;AI is not the new site manager. It is the cognitive
      copilot that frees the leadership to shift from emergency management
      to strategy management.&nbsp;&raquo;
    </>
  ),

  s4Title: "4. Barriers to entry: mud, connectivity and ethics",
  s4Intro: (
    <>
      As idyllic as the picture may sound, deploying these technologies in
      the field often feels like an obstacle course.
    </>
  ),
  s4ImageAlt:
    "Embedded technology facing a hostile site environment (dust, moisture)",
  s4ImageCaption: (
    <>
      Technology vs hostile environment: the edge-computing challenge on
      site.
    </>
  ),
  s4Bullets: [
    <>
      <B>The hardware challenge:</B>{" "}a construction site means dust,
      vibration, moisture and extreme temperature swings. Edge computing
      hardware must be enclosed in ruggedised housings. A camera lens
      coated in cement dust will blind the most powerful algorithm.
    </>,
    <>
      <B>Connectivity:</B>{" "}in basements (infrastructure, parking
      structures), 4G/5G does not reach. Complex mesh networks have to be
      deployed to backhaul the data.
    </>,
    <>
      <B>The social challenge and GDPR:</B>{" "}filming workers around the
      clock breeds legitimate suspicion. The spectre of corporate
      &laquo;&nbsp;Big Brother&nbsp;&raquo; is real. To be accepted,
      computer vision must anonymise data at the source (face blurring
      embedded in the camera) and focus on two unassailable pillars:{" "}
      <B>safety</B>{" "}(detecting a person under a suspended load) and{" "}
      <B>logistics</B>{" "}(streamlining deliveries) — never on monitoring
      individual productivity.
    </>,
  ],

  s5Title: "5. Conclusion: towards the era of the \u201Caugmented site\u201D",
  s5Body: (
    <>
      <p className="leading-relaxed text-zinc-300">
        Construction digitalisation is still in its infancy. The
        integration of AI and computer vision marks the end of reactive
        project management (&laquo;&nbsp;we have a problem, let&apos;s
        find a fix&nbsp;&raquo;) in favour of proactive management
        (&laquo;&nbsp;we will have a problem in two weeks, let&apos;s
        avoid it&nbsp;&raquo;).
      </p>
      <p className="leading-relaxed text-zinc-300">
        By automating tedious data collection and reporting, AI gives
        leaders back their most precious resource: <B>time</B>.
      </p>
      <p className="leading-relaxed text-zinc-300">
        Less time spent counting pallets of bricks means more time on site
        managing the teams, guaranteeing safety and ensuring the final
        quality of the works. Ultimately, the irony of introducing
        artificial intelligence on a construction site is a beautiful one:
        it lets us, more than ever, put humans back at the heart of the
        construction process.
      </p>
    </>
  ),

  signatureBrand: (
    <strong>
      Elouatiki Frères: innovation in the service of the augmented site.
    </strong>
  ),
  ctaText: "Let's talk about your augmented-site project",
};

function getContent(locale: AppLocale): ArticleContent {
  // EN explicite, et AR -> EN comme demandé dans la spec produit.
  if (locale === "en" || locale === "ar") return EN_CONTENT;
  return FR_CONTENT;
}

/**
 * Locale utilisée pour le formatage des dates et libellés UI annexes :
 * si la langue affichée est l'anglais (y compris fallback AR -> EN),
 * on aligne le formatage sur `en` pour éviter les chiffres arabo-indiens
 * ou un mois en français à côté d'un corps anglais.
 */
function getFormattingLocale(locale: AppLocale): string {
  return locale === "fr" ? "fr" : "en";
}

export async function IaChantierArticle() {
  const locale = (await getLocale()) as AppLocale;
  const formattingLocale = getFormattingLocale(locale);
  // AR -> on bascule également les libellés UI (date, "Auteur", etc.) sur EN
  // pour rester cohérent avec le corps de l'article rendu en anglais.
  const t = await getTranslations({
    locale: formattingLocale,
    namespace: "Blog",
  });
  const c = getContent(locale);

  const publishedDate = new Date(ARTICLE_PUBLISHED_AT);
  const formattedDate = new Intl.DateTimeFormat(formattingLocale, {
    dateStyle: "long",
  }).format(publishedDate);
  const readingTimeLabel = t("readingTime", {
    minutes: ARTICLE_READING_MINUTES,
  });

  // Si la locale est AR mais qu'on affiche l'anglais, on force la
  // direction LTR au niveau du conteneur de l'article pour préserver la
  // lisibilité du contenu anglais dans une page HTML globalement RTL.
  const articleDir = locale === "ar" ? "ltr" : undefined;

  return (
    <article
      dir={articleDir}
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

      <figure className="image-figure relative my-10 overflow-hidden rounded-2xl border border-white/10 bg-zinc-900/40 shadow-xl shadow-black/30 sm:my-14">
        <div className="relative aspect-[16/9] w-full">
          <Image
            src={COVER_IMAGE_SRC}
            alt={c.coverAlt}
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 896px"
            className="object-cover"
          />
        </div>
        <figcaption className="px-5 py-3 text-center text-sm italic text-zinc-400">
          {c.coverCaption}
        </figcaption>
      </figure>

      <section className="content-block mt-12 space-y-5">
        <h2 className="section-title font-[family-name:var(--font-space-grotesk)] text-2xl font-bold text-white sm:text-3xl">
          {c.s1Title}
        </h2>
        <p className="leading-relaxed text-zinc-300">{c.s1Intro}</p>

        <h3 className="font-[family-name:var(--font-space-grotesk)] text-xl font-semibold text-white sm:text-2xl">
          {c.s1SubTitle}
        </h3>
        <p className="leading-relaxed text-zinc-300">{c.s1Lead}</p>
        <ol className="list-decimal space-y-3 pl-6 text-zinc-300 marker:text-cyan-400">
          {c.s1Items.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ol>

        <blockquote className="rounded-2xl border-l-4 border-cyan-400/70 bg-cyan-500/5 px-5 py-4 text-base italic leading-relaxed text-zinc-200 sm:text-lg">
          {c.s1Quote}
        </blockquote>
      </section>

      <section className="content-block mt-12 space-y-5">
        <h2 className="section-title font-[family-name:var(--font-space-grotesk)] text-2xl font-bold text-white sm:text-3xl">
          {c.s2Title}
        </h2>
        <p className="leading-relaxed text-zinc-300">{c.s2Intro}</p>

        <h3 className="font-[family-name:var(--font-space-grotesk)] text-xl font-semibold text-white sm:text-2xl">
          {c.s2SubTitle}
        </h3>

        <figure className="image-figure my-6 overflow-hidden rounded-2xl border border-white/10 bg-zinc-900/40 shadow-lg shadow-black/30">
          <div className="relative aspect-[16/9] w-full">
            <Image
              src={SCAN_BIM_IMAGE_SRC}
              alt={c.s2ImageAlt}
              fill
              sizes="(max-width: 1024px) 100vw, 896px"
              className="object-cover"
            />
          </div>
          <figcaption className="px-5 py-3 text-center text-sm italic text-zinc-400">
            {c.s2ImageCaption}
          </figcaption>
        </figure>

        {c.s2Body}
        <ul className="list-disc space-y-3 pl-6 text-zinc-300 marker:text-cyan-400">
          {c.s2Bullets.map((b, idx) => (
            <li key={idx}>{b}</li>
          ))}
        </ul>
      </section>

      <section className="content-block mt-12 space-y-6">
        <h2 className="section-title font-[family-name:var(--font-space-grotesk)] text-2xl font-bold text-white sm:text-3xl">
          {c.s3Title}
        </h2>
        <p className="leading-relaxed text-zinc-300">{c.s3Intro}</p>
        <p className="leading-relaxed text-zinc-300">{c.s3Context}</p>

        <figure className="image-figure my-6 overflow-hidden rounded-2xl border border-white/10 bg-zinc-900/40 shadow-lg shadow-black/30">
          <div className="relative aspect-[16/9] w-full">
            <Image
              src={ARBITRAGE_IMAGE_SRC}
              alt={c.s3ImageAlt}
              fill
              sizes="(max-width: 1024px) 100vw, 896px"
              className="object-cover"
            />
          </div>
          <figcaption className="px-5 py-3 text-center text-sm italic text-zinc-400">
            {c.s3ImageCaption}
          </figcaption>
        </figure>

        <div className="space-y-4">
          <h3 className="font-[family-name:var(--font-space-grotesk)] text-xl font-semibold text-white sm:text-2xl">
            {c.s3aTitle}
          </h3>
          <p className="leading-relaxed text-zinc-300">{c.s3aBody}</p>
          <ul className="list-disc space-y-2 pl-6 text-zinc-300 marker:text-cyan-400">
            {c.s3aBullets.map((b, idx) => (
              <li key={idx}>{b}</li>
            ))}
          </ul>
        </div>

        <div className="space-y-4">
          <h3 className="font-[family-name:var(--font-space-grotesk)] text-xl font-semibold text-white sm:text-2xl">
            {c.s3bTitle}
          </h3>
          {c.s3bBody}
        </div>

        <blockquote className="rounded-2xl border-l-4 border-cyan-400/70 bg-cyan-500/5 px-5 py-4 text-base italic leading-relaxed text-zinc-200 sm:text-lg">
          {c.s3Quote}
        </blockquote>
      </section>

      <section className="content-block mt-12 space-y-5">
        <h2 className="section-title font-[family-name:var(--font-space-grotesk)] text-2xl font-bold text-white sm:text-3xl">
          {c.s4Title}
        </h2>
        <p className="leading-relaxed text-zinc-300">{c.s4Intro}</p>

        <figure className="image-figure my-6 overflow-hidden rounded-2xl border border-white/10 bg-zinc-900/40 shadow-lg shadow-black/30">
          <div className="relative aspect-[16/9] w-full">
            <Image
              src={BARRIERES_IMAGE_SRC}
              alt={c.s4ImageAlt}
              fill
              sizes="(max-width: 1024px) 100vw, 896px"
              className="object-cover"
            />
          </div>
          <figcaption className="px-5 py-3 text-center text-sm italic text-zinc-400">
            {c.s4ImageCaption}
          </figcaption>
        </figure>

        <ul className="list-disc space-y-3 pl-6 text-zinc-300 marker:text-cyan-400">
          {c.s4Bullets.map((b, idx) => (
            <li key={idx}>{b}</li>
          ))}
        </ul>
      </section>

      <section className="content-block mt-12 space-y-5">
        <h2 className="section-title font-[family-name:var(--font-space-grotesk)] text-2xl font-bold text-white sm:text-3xl">
          {c.s5Title}
        </h2>
        {c.s5Body}
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
