/**
 * Article de blog : « Edge Computing & IoT chantier ».
 *
 * Structure alignée sur dam-inspection-article.tsx et innovation-achats-article.tsx.
 * Contenu FR / EN ; locale AR → EN (fallback anglais).
 */

import { CalendarDays, Clock } from "lucide-react";
import { getLocale, getTranslations } from "next-intl/server";
import type { ReactNode } from "react";

import { ArticleFigure } from "@/components/article-figure";
import { Link } from "@/i18n/navigation";
import type { AppLocale } from "@/i18n/routing";

const MEDIA_BASE = "/media/blog/Edge%20Computing";

const COVER_IMAGE_SRC = `${MEDIA_BASE}/Cover.png`;
const OFFLINE_IMAGE_SRC = `${MEDIA_BASE}/Conceptuel%20Offline%20First.png`;
const HYBRID_IMAGE_SRC = `${MEDIA_BASE}/Sch%C3%A9ma%20d%27Architecture%20Hybride%20(BTP).png`;
const DASHBOARD_IMAGE_SRC = `${MEDIA_BASE}/Le%20Tableau%20de%20Bord%20Centralis%C3%A9%20(Mockup%20UI).png`;

const ARTICLE_AUTHOR = "EL OUATIKI Hicham";
const ARTICLE_PUBLISHED_AT = "2024-10-01";
const ARTICLE_READING_MINUTES = 11;

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
  s1Body: ReactNode;
  s2Title: string;
  s2Body: ReactNode;
  s2ImageAlt: string;
  s2ImageCaption: ReactNode;
  s3Title: string;
  s3Body: ReactNode;
  s4Title: string;
  s4Intro: ReactNode;
  s4Items: [ReactNode, ReactNode];
  s4Outro: ReactNode;
  s4ImageAlt: string;
  s4ImageCaption: ReactNode;
  s5Title: string;
  s5Intro: ReactNode;
  s5Bullets: [ReactNode, ReactNode, ReactNode];
  s5Outro: ReactNode;
  s5ImageAlt: string;
  s5ImageCaption: ReactNode;
  s6Title: string;
  s6Body: ReactNode;
  signatureBrand: ReactNode;
  ctaText: string;
};

const FR_CONTENT: ArticleContent = {
  eyebrow: "Edge Computing, IoT & BTP",
  title:
    "L'Éveil des Chantiers : Pourquoi l'Edge Computing est l'Architecture Cruciale pour l'IoT de la Construction",
  intro: (
    <>
      <p className="text-base leading-relaxed text-zinc-300 sm:text-lg">
        Le secteur du Bâtiment et des Travaux Publics (BTP) vit une véritable
        révolution silencieuse. Fini le temps où le suivi de chantier se
        résumait à des plans papier annotés sous la pluie et des communications
        radio grésillantes. Aujourd&apos;hui, nos chantiers s&apos;éveillent :
        capteurs, drones d&apos;inspection, caméras intelligentes, engins
        connectés et équipements de protection individuelle (EPI) embarqués
        d&apos;électronique. L&apos;Internet des Objets (IoT) industriel promet
        de transformer chaque monticule de terre et chaque grue en point de
        donnée exploitable, nourrissant en temps réel les maquettes numériques
        (BIM) et les jumeaux numériques.
      </p>
      <p className="text-base leading-relaxed text-zinc-300 sm:text-lg">
        Pourtant, sur le terrain, la réalité opérationnelle heurte souvent
        l&apos;ambition technologique. La promesse du «&nbsp;tout-Cloud&nbsp;»
        — envoyer l&apos;intégralité des données du chantier vers des serveurs
        distants pour analyse — montre ses limites. Un chantier n&apos;est pas
        un datacenter climatisé : environnement hostile, poussière, métal,
        béton, et connectivité au mieux capricieuse, au pire inexistante.
      </p>
      <p className="text-base leading-relaxed text-zinc-300 sm:text-lg">
        Face à ce constat, une évolution architecturale majeure s&apos;impose :{" "}
        <B>l&apos;Edge Computing</B> (informatique en périphérie). En rapprochant
        la puissance de calcul de la source des données — sur le chantier, voire
        sur l&apos;engin —, l&apos;Edge n&apos;est plus une option. C&apos;est
        l&apos;architecture qui garantit la sécurité des hommes, la souveraineté
        des données et la continuité des opérations. Voici pourquoi l&apos;avenir
        de la construction connectée se joue d&apos;abord à la périphérie.
      </p>
    </>
  ),
  coverAlt:
    "Chantier connecté : capteurs IoT, engins et infrastructure edge au cœur du BTP",
  coverCaption: (
    <>
      Illustration de couverture — Edge Computing et IoT au service des chantiers
      intelligents.
    </>
  ),

  s1Title: "Le défi de la milliseconde : latence faible au service de la sécurité",
  s1Body: (
    <>
      <p className="leading-relaxed text-zinc-300">
        Sur un chantier, le temps n&apos;est pas seulement de l&apos;argent :
        c&apos;est une question de sécurité et de survie. Pour les systèmes IoT
        critiques, la vitesse de traitement de l&apos;information devient le
        paramètre absolu.
      </p>
      <p className="leading-relaxed text-zinc-300">
        Imaginez une grue à tour équipée de capteurs anti-collision, ou un engin
        semi-autonome à proximité d&apos;ouvriers. Si une caméra thermique ou un
        LiDAR détecte une présence humaine dans l&apos;angle mort, le système
        doit déclencher un freinage d&apos;urgence absolu.
      </p>
      <p className="leading-relaxed text-zinc-300">
        Dans une architecture «&nbsp;tout-Cloud&nbsp;», la donnée voyage via un
        réseau 4G/5G souvent saturé, atteint un serveur distant, est traitée par
        une IA, puis l&apos;ordre de freinage repart en sens inverse. Même
        optimisé, ce cycle peut prendre 200 à 500&nbsp;millisecondes. Sur un
        chantier, une demi-seconde, c&apos;est la différence entre un incident
        évité et une tragédie.
      </p>
      <p className="leading-relaxed text-zinc-300">
        L&apos;Edge Computing résout ce défi de manière implacable. En embarquant
        une <B>gateway Edge</B> dans la cabine ou au pied de la grue,
        l&apos;algorithme analyse les données localement. Le temps de réaction
        chute à quelques millisecondes. La décision est prise à la source,
        immunisée contre les lenteurs du réseau.
      </p>
    </>
  ),

  s2Title: "L'impératif « Offline-First » : des filets de sécurité autonomes",
  s2Body: (
    <>
      <p className="leading-relaxed text-zinc-300">
        Quiconque a travaillé en fondations ou en tunnel le sait : sous des
        tonnes de béton et d&apos;acier, le signal cellulaire ne passe pas. Les
        chantiers sont dynamiques ; la couverture réseau se dégrade au fur et à
        mesure que la structure s&apos;élève ou s&apos;enfonce.
      </p>
      <p className="leading-relaxed text-zinc-300">
        Faire reposer sécurité et productivité sur une connexion internet
        ininterrompue est une hérésie opérationnelle. C&apos;est ici qu&apos;intervient
        la conception <B>«&nbsp;Offline-First&nbsp;»</B>, rendue possible par
        l&apos;Edge.
      </p>
      <p className="leading-relaxed text-zinc-300">
        Une infrastructure IoT Offline-First considère la déconnexion non pas
        comme une anomalie fatale, mais comme un état normal. Les dispositifs Edge
        agissent comme des filets autonomes : si la liaison centrale est rompue,
        le cerveau local prend le relais.
      </p>
      <p className="leading-relaxed text-zinc-300">
        Exemple : contrôle d&apos;accès biométrique et suivi des EPI (casques et
        gilets connectés) dans une galerie souterraine. Si la fibre est
        sectionnée par une pelleteuse, le système Edge continue d&apos;autoriser
        les accès valides, d&apos;enregistrer les entrées/sorties et de
        surveiller les constantes vitales ou la détection de gaz. Les données
        sont bufferisées localement ; dès le rétablissement du réseau, la gateway
        synchronise l&apos;historique avec le Cloud, sans perte ni interruption.
        La résilience devient la norme.
      </p>
    </>
  ),
  s2ImageAlt:
    "Schéma conceptuel Offline-First : edge local autonome et synchronisation différée vers le cloud",
  s2ImageCaption: (
    <>
      Architecture Offline-First — continuité opérationnelle même en cas de
      coupure réseau.
    </>
  ),

  s3Title: "Garder le contrôle : souveraineté des données et sites sensibles",
  s3Body: (
    <>
      <p className="leading-relaxed text-zinc-300">
        La donnée est le nouvel or noir de la construction : BIM détaillé,
        méthodes d&apos;assemblage, productivité des équipes, flux de
        vidéosurveillance — autant d&apos;informations hautement stratégiques.
      </p>
      <p className="leading-relaxed text-zinc-300">
        Lorsqu&apos;une entreprise intervient sur des <B>sites sensibles</B>{" "}
        (infrastructures militaires, centrales nucléaires, centres de recherche
        gouvernementaux, sièges de multinationales), la cybersécurité et la
        souveraineté deviennent des critères d&apos;exclusion en appel
        d&apos;offres. Il est souvent interdit de faire sortir des données brutes
        du périmètre physique pour les stocker sur un Cloud public soumis à des
        législations extraterritoriales.
      </p>
      <p className="leading-relaxed text-zinc-300">
        L&apos;Edge apporte une réponse structurelle : le traitement s&apos;effectue
        dans un périmètre clos, sur le site. Le serveur Edge agit comme filtre de
        confidentialité (<B>Privacy-by-Design</B>). Une caméra intelligente
        n&apos;enverra pas le flux vidéo brut ; elle traitera l&apos;image
        localement et ne transmettra qu&apos;une métadonnée cryptée — par exemple
        «&nbsp;Personnel autorisé détecté à 14h32&nbsp;» ou «&nbsp;Alerte
        intrusion véhicule non identifié&nbsp;». Les données sensibles restent
        confinées derrière les murs de l&apos;infrastructure critique.
      </p>
    </>
  ),

  s4Title: "Architectures hybrides : le meilleur des deux mondes",
  s4Intro: (
    <p className="leading-relaxed text-zinc-300">
      Affirmer que l&apos;Edge est crucial ne signifie pas la mort du Cloud.
      L&apos;avenir de l&apos;IoT dans la construction repose sur des{" "}
      <B>architectures hybrides</B> — une symbiose entre périphérie (Edge) et
      centre (Cloud). Il s&apos;agit de distribuer l&apos;intelligence là où elle
      est la plus pertinente :
    </p>
  ),
  s4Items: [
    <>
      <B>L&apos;Edge (le tactique) :</B> temps réel, action immédiate, sécurité
      physique, filtrage et nettoyage des données brutes. Il gère
      l&apos;écosystème immédiat (machine, ouvrier, zone de danger) et réduit la
      bande passante en ne transmettant que l&apos;essentiel.
    </>,
    <>
      <B>Le Cloud (le stratégique) :</B> débarrassé du bruit des données brutes,
      il retrouve sa fonction d&apos;entrepôt et de supercalculateur. Il agrège
      les données anonymisées de multiples serveurs Edge, permet les analyses à
      long terme, l&apos;entraînement de modèles IA plus performants, la
      comparaison de productivité entre chantiers, et la mise à jour de la
      maquette BIM globale.
    </>,
  ],
  s4Outro: (
    <p className="leading-relaxed text-zinc-300">
      Cette hybridation réduit les coûts télécom (moins de données lourdes via
      5G/satellite) tout en conservant la puissance analytique du Cloud pour la
      planification long terme et la maintenance prédictive des flottes.
    </p>
  ),
  s4ImageAlt:
    "Schéma d'architecture hybride BTP : edge tactique sur chantier et cloud stratégique central",
  s4ImageCaption: (
    <>
      Architecture hybride Edge + Cloud — répartition tactique / stratégique des
      charges IoT.
    </>
  ),

  s5Title: "Piloter la complexité : supervision centralisée à l'échelle",
  s5Intro: (
    <p className="leading-relaxed text-zinc-300">
      Déployer de l&apos;intelligence locale est une nécessité, mais cela soulève
      un défi logistique : si une entreprise gère 40 chantiers, chacun équipé de
      dizaines de capteurs et de passerelles Edge, comment garantir le bon
      fonctionnement de cette flotte distribuée ? Envoyer un ingénieur IT avec une
      clé USB à chaque mise à jour est inenvisageable. La clé de voûte réside
      dans la <B>supervision centralisée</B> (Edge Fleet Management).
    </p>
  ),
  s5Bullets: [
    <>
      <B>Health Monitoring :</B> vérifier en temps réel que chaque capteur,
      batterie et routeur de chaque chantier est opérationnel.
    </>,
    <>
      <B>Mises à jour OTA (Over-The-Air) :</B> pousser un nouvel algorithme de
      détection de port de casque vers tous les calculateurs Edge, de manière
      sécurisée et cryptée, en un clic depuis le siège.
    </>,
    <>
      <B>Gestion du cycle de vie :</B> détecter une gateway qui surchauffe au
      soleil et alerter le chef de chantier avant la panne.
    </>,
  ],
  s5Outro: (
    <p className="leading-relaxed text-zinc-300">
      Cette supervision garantit que la décentralisation technologique ne devienne
      pas un chaos opérationnel, et que les équipes IT gardent un contrôle absolu
      sur une infrastructure par nature morcelée.
    </p>
  ),
  s5ImageAlt:
    "Mockup UI du tableau de bord centralisé de supervision Edge pour flotte de chantiers",
  s5ImageCaption: (
    <>
      Supervision centralisée — un tableau de bord unique pour toute la flotte
      Edge du groupe.
    </>
  ),

  s6Title: "Conclusion : bâtir les fondations numériques de demain",
  s6Body: (
    <>
      <p className="leading-relaxed text-zinc-300">
        L&apos;IoT a le pouvoir de transformer la construction en industrie plus
        sûre, plus efficace et plus respectueuse des délais et de
        l&apos;environnement. Mais cette promesse ne s&apos;incarnera pleinement
        que si nous adaptons notre socle technologique à la dure réalité du
        terrain.
      </p>
      <p className="leading-relaxed text-zinc-300">
        Le Cloud seul est trop distant, trop lent et trop dépendant des
        télécoms fragiles pour répondre aux urgences du chantier. À
        l&apos;inverse, l&apos;Edge — latence ultra-faible, paradigme
        offline-first, souveraineté des données sensibles — s&apos;impose comme
        l&apos;architecture indispensable.
      </p>
      <p className="leading-relaxed text-zinc-300">
        En adoptant des architectures hybrides supervisées de manière
        centralisée, les acteurs du BTP ne construisent plus seulement des
        bâtiments intelligents : ils érigent les fondations numériques résilientes
        d&apos;une industrie réinventée. L&apos;intelligence ne plane plus
        seulement dans les nuages — elle a enfilé ses bottes et son casque de
        chantier.
      </p>
    </>
  ),

  signatureBrand: (
    <strong>
      Elouatiki Frères : Edge Computing, IoT et résilience numérique sur chantier.
    </strong>
  ),
  ctaText: "Discutons de votre architecture IoT chantier",
};

const EN_CONTENT: ArticleContent = {
  eyebrow: "Edge Computing, IoT & Construction",
  title:
    "The Awakening of Construction Sites: Why Edge Computing Is the Crucial Architecture for Construction IoT",
  intro: (
    <>
      <p className="text-base leading-relaxed text-zinc-300 sm:text-lg">
        The building and civil engineering sector is undergoing a quiet
        revolution. The days of rain-soaked paper plans and crackling radio
        comms are fading. Today&apos;s sites wake up: sensors, inspection drones,
        smart cameras, connected plant, and personal protective equipment (PPE)
        packed with electronics. Industrial IoT promises to turn every mound of
        earth and every tower crane into an actionable data point, feeding BIM
        models and digital twins in real time.
      </p>
      <p className="text-base leading-relaxed text-zinc-300 sm:text-lg">
        Yet on the ground, operational reality often collides with technological
        ambition. The &laquo;&nbsp;cloud-only&nbsp;&raquo; promise — shipping
        every byte off-site for remote analysis — is hitting its limits. A
        construction site is not a climate-controlled data centre: it is a
        hostile, shifting environment of dust, steel, and concrete, where
        connectivity is capricious at best and absent at worst.
      </p>
      <p className="text-base leading-relaxed text-zinc-300 sm:text-lg">
        A major architectural shift is therefore required:{" "}
        <B>edge computing</B>. By placing compute power as close as possible to
        the data source — on the site, even on the machine itself — edge is no
        longer optional. It is the architecture that safeguards people, preserves
        data sovereignty, and keeps operations running. Here is why the future
        of connected construction will be won at the edge first.
      </p>
    </>
  ),
  coverAlt:
    "Connected construction site: IoT sensors, plant, and on-site edge infrastructure",
  coverCaption: (
    <>
      Cover illustration — edge computing and IoT powering intelligent
      construction sites.
    </>
  ),

  s1Title: "The millisecond challenge: low latency in the service of safety",
  s1Body: (
    <>
      <p className="leading-relaxed text-zinc-300">
        On a construction site, time is not only money — it is safety and
        survival. For critical IoT systems, how fast information is processed
        becomes the overriding parameter.
      </p>
      <p className="leading-relaxed text-zinc-300">
        Picture a tower crane with next-generation anti-collision sensors, or a
        semi-autonomous earthmover working near crews. If a thermal camera or
        LiDAR detects a worker in a blind spot, the system must trigger an
        absolute emergency stop.
      </p>
      <p className="leading-relaxed text-zinc-300">
        In a classic cloud-only setup, data travels over a congested 4G/5G link,
        reaches a remote server, is processed by AI, and only then does a brake
        command travel back. Even when optimised, that loop can take 200 to 500
        milliseconds. On site, half a second is the difference between a near
        miss and a tragedy.
      </p>
      <p className="leading-relaxed text-zinc-300">
        Edge computing resolves this implacably. By embedding an{" "}
        <B>edge gateway</B> in the cab or at the foot of the crane, the algorithm
        analyses data locally. Reaction time drops to a few milliseconds.
        Decisions are made at source, insulated from network lag.
      </p>
    </>
  ),

  s2Title: "The offline-first imperative: autonomous safety nets",
  s2Body: (
    <>
      <p className="leading-relaxed text-zinc-300">
        Anyone who has worked in deep foundations or tunnelling knows: beneath
        tonnes of reinforced concrete and steel, cellular signal does not
        penetrate. Sites evolve dynamically; coverage degrades as structures rise
        or sink into the ground.
      </p>
      <p className="leading-relaxed text-zinc-300">
        Basing safety and productivity on uninterrupted internet is operational
        heresy. That is where <B>offline-first</B> design — enabled by edge —
        enters the picture.
      </p>
      <p className="leading-relaxed text-zinc-300">
        An offline-first IoT stack treats disconnection not as a fatal anomaly
        but as a normal, expected state. Edge devices act as autonomous safety
        nets: when the link to central systems breaks, the local brain takes over
        seamlessly.
      </p>
      <p className="leading-relaxed text-zinc-300">
        Example: biometric access control and connected PPE (helmets and vests)
        in an underground gallery. If fibre is cut by an excavator, the edge
        system keeps granting valid access, logging entries and exits, and
        monitoring vitals or gas detection. Data is buffered locally; once
        connectivity returns, the gateway syncs history to the cloud with no
        loss and no service gap. Resilience becomes the default.
      </p>
    </>
  ),
  s2ImageAlt:
    "Offline-first concept diagram: autonomous local edge and deferred cloud sync",
  s2ImageCaption: (
    <>
      Offline-first architecture — operational continuity even when the network
      fails.
    </>
  ),

  s3Title: "Keeping control: data sovereignty and sensitive sites",
  s3Body: (
    <>
      <p className="leading-relaxed text-zinc-300">
        Data is construction&apos;s new gold: detailed BIM, assembly methods,
        crew productivity, CCTV streams — all highly strategic information.
      </p>
      <p className="leading-relaxed text-zinc-300">
        When contractors work on <B>sensitive sites</B> — military
        infrastructure, nuclear plants, government research centres, corporate
        HQs — cybersecurity and sovereignty become bid disqualifiers. Contracts
        and law often forbid exporting raw data outside the physical perimeter
        to public cloud regions governed by extraterritorial legislation.
      </p>
      <p className="leading-relaxed text-zinc-300">
        Edge offers a structural answer: processing stays inside a closed
        perimeter, on site. The edge server acts as a confidentiality filter (
        <B>privacy by design</B>). A smart camera will not upload raw video; it
        processes locally and sends only encrypted metadata — e.g.
        &laquo;&nbsp;Authorised personnel detected at 14:32&nbsp;&raquo; or
        &laquo;&nbsp;Unidentified vehicle intrusion alert&nbsp;&raquo;. Sensitive
        raw data remains behind the walls of the critical asset.
      </p>
    </>
  ),

  s4Title: "Hybrid architectures: the best of both worlds",
  s4Intro: (
    <p className="leading-relaxed text-zinc-300">
      Edge being crucial does not mean the death of the cloud. The future of
      construction IoT rests on <B>hybrid architectures</B> — a symbiosis of
      edge and cloud. Intelligence is placed where it matters most:
    </p>
  ),
  s4Items: [
    <>
      <B>Edge (tactical):</B> real time, immediate action, physical safety,
      filtering and cleaning raw data. It manages the immediate ecosystem
      (machine, worker, hazard zone) and slashes bandwidth by sending only what
      counts.
    </>,
    <>
      <B>Cloud (strategic):</B> freed from raw-data noise, it returns to its role
      as warehouse and supercomputer. It aggregates anonymised data from many
      edge servers, enables long-term analytics, trains stronger AI models,
      compares productivity across sites, and updates the global BIM model.
    </>,
  ],
  s4Outro: (
    <p className="leading-relaxed text-zinc-300">
      This hybrid model cuts telecom spend (less heavy data over 5G or satellite)
      while retaining cloud analytics for long-range planning and predictive fleet
      maintenance.
    </p>
  ),
  s4ImageAlt:
    "Hybrid BTP architecture diagram: tactical edge on site and strategic central cloud",
  s4ImageCaption: (
    <>
      Hybrid Edge + Cloud architecture — tactical vs strategic split of IoT
      workloads.
    </>
  ),

  s5Title: "Managing complexity: centralised supervision at scale",
  s5Intro: (
    <p className="leading-relaxed text-zinc-300">
      Local intelligence is necessary, but it creates a logistics challenge: if a
      contractor runs 40 sites, each with dozens of sensors and edge gateways,
      how do you keep that distributed fleet healthy? Sending an IT engineer with
      a USB stick for every update is unthinkable. The keystone is{" "}
      <B>centralised supervision</B> (edge fleet management).
    </p>
  ),
  s5Bullets: [
    <>
      <B>Health monitoring:</B> verify in real time that every sensor, battery,
      and router on every site is operational.
    </>,
    <>
      <B>OTA (over-the-air) updates:</B> push an improved hard-hat detection
      algorithm to all edge compute nodes securely and encrypted, in one click
      from headquarters.
    </>,
    <>
      <B>Lifecycle management:</B> detect a gateway overheating in the sun and
      alert the site manager before failure.
    </>,
  ],
  s5Outro: (
    <p className="leading-relaxed text-zinc-300">
      Centralised oversight ensures distributed edge does not become operational
      chaos, and IT teams retain full control over a naturally fragmented
      infrastructure.
    </p>
  ),
  s5ImageAlt:
    "UI mockup of centralised edge fleet supervision dashboard for construction sites",
  s5ImageCaption: (
    <>
      Centralised supervision — a single dashboard for the entire edge fleet
      across the group.
    </>
  ),

  s6Title: "Conclusion: building tomorrow's digital foundations",
  s6Body: (
    <>
      <p className="leading-relaxed text-zinc-300">
        IoT can make construction safer, more efficient, and better aligned with
        schedule and environmental goals. But that promise will only fully
        materialise if we adapt our technology stack to field reality.
      </p>
      <p className="leading-relaxed text-zinc-300">
        Cloud alone is too distant, too slow, and too dependent on fragile telecom
        to answer site emergencies. Edge — ultra-low latency, offline-first
        continuity, sovereignty for sensitive data — is the indispensable
        architecture.
      </p>
      <p className="leading-relaxed text-zinc-300">
        With centrally supervised hybrid architectures, construction players are
        no longer only building smart buildings: they are laying the resilient
        digital foundations of a reinvented industry. Intelligence no longer
        floats only in the cloud — it has laced up its boots and put on its site
        helmet.
      </p>
    </>
  ),

  signatureBrand: (
    <strong>
      Elouatiki Frères: edge computing, IoT, and digital resilience on site.
    </strong>
  ),
  ctaText: "Let's discuss your site IoT architecture",
};

function getContent(locale: AppLocale): ArticleContent {
  if (locale === "fr") return FR_CONTENT;
  return EN_CONTENT;
}

export async function EdgeComputingIotArticle() {
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

      <section className="content-block mt-12 space-y-5">
        <h2 className="section-title font-[family-name:var(--font-space-grotesk)] text-2xl font-bold text-white sm:text-3xl">
          {c.s1Title}
        </h2>
        {c.s1Body}
      </section>

      <section className="content-block mt-12 space-y-6">
        <h2 className="section-title font-[family-name:var(--font-space-grotesk)] text-2xl font-bold text-white sm:text-3xl">
          {c.s2Title}
        </h2>
        {c.s2Body}

        <ArticleFigure
          src={OFFLINE_IMAGE_SRC}
          alt={c.s2ImageAlt}
          caption={c.s2ImageCaption}
          compact
        />
      </section>

      <section className="content-block mt-12 space-y-5">
        <h2 className="section-title font-[family-name:var(--font-space-grotesk)] text-2xl font-bold text-white sm:text-3xl">
          {c.s3Title}
        </h2>
        {c.s3Body}
      </section>

      <section className="content-block mt-12 space-y-6">
        <h2 className="section-title font-[family-name:var(--font-space-grotesk)] text-2xl font-bold text-white sm:text-3xl">
          {c.s4Title}
        </h2>
        {c.s4Intro}
        <ol className="list-decimal space-y-4 pl-6 text-zinc-300 marker:text-cyan-400">
          {c.s4Items.map((item, idx) => (
            <li key={idx} className="leading-relaxed">
              {item}
            </li>
          ))}
        </ol>
        {c.s4Outro}

        <ArticleFigure
          src={HYBRID_IMAGE_SRC}
          alt={c.s4ImageAlt}
          caption={c.s4ImageCaption}
          compact
        />
      </section>

      <section className="content-block mt-12 space-y-6">
        <h2 className="section-title font-[family-name:var(--font-space-grotesk)] text-2xl font-bold text-white sm:text-3xl">
          {c.s5Title}
        </h2>
        {c.s5Intro}
        <ul className="list-disc space-y-3 pl-6 text-zinc-300 marker:text-cyan-400">
          {c.s5Bullets.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
        {c.s5Outro}

        <ArticleFigure
          src={DASHBOARD_IMAGE_SRC}
          alt={c.s5ImageAlt}
          caption={c.s5ImageCaption}
          compact
        />
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
