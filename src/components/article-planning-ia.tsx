/**
 * Article ConTech : ML, Monte Carlo, BIM 4D et planification probabiliste.
 * Contenu FR / EN (locale AR → même corps EN). Images `/public/media/blog/IA_planning/`.
 */

import { CalendarDays, Clock } from "lucide-react";
import Image from "next/image";
import { getLocale, getTranslations } from "next-intl/server";
import type { ReactNode } from "react";

import { PlanningProbabilisteNote } from "@/components/planning-probabiliste-note";
import { Link } from "@/i18n/navigation";
import type { AppLocale } from "@/i18n/routing";

const IMG_BASE = "/media/blog/IA_planning";

const COVER_SRC = `${IMG_BASE}/Cover%20Image%20Concept%20Chaos%20vs%20Data.png`;
const MONTE_CARLO_SRC = `${IMG_BASE}/Monte%20Carlo-Probabilities.png`;
const DASHBOARD_SRC = `${IMG_BASE}/The%20Augmented%20Risk%20Manager.png`;
const BIM_CV_SRC = `${IMG_BASE}/BIM%204D%20and%20Computer%20Vision%20Synergy.png`;
const SAFETY_SRC = `${IMG_BASE}/Workplace%20Safety%20Accident%20Prevention.png`;

const ARTICLE_AUTHOR = "EL OUATIKI Hicham";
const ARTICLE_PUBLISHED_AT = "2024-12-16";
const ARTICLE_READING_MINUTES = 14;

function B({ children }: { children: ReactNode }) {
  return <strong className="font-semibold text-white">{children}</strong>;
}

type ArticleContent = {
  eyebrow: string;
  heroTitle: string;
  heroSubtitle: string;
  heroAlt: string;
  intro: ReactNode;

  s1Title: string;
  s1Lead: ReactNode;
  s1SubMirage: string;
  s1Mirage: ReactNode;
  s1Closing: ReactNode;

  s2Title: string;
  s2Lead: ReactNode;
  s2SubDistrib: string;
  s2DistribIntro: ReactNode;
  s2DistribBullets: [ReactNode, ReactNode, ReactNode];
  s2DistribClosing: ReactNode;
  s2SubSCurve: string;
  s2SCurveIntro: ReactNode;
  s2SCurveBullets: [ReactNode, ReactNode];
  s2SCurveClosing: ReactNode;
  monteCarloAlt: string;
  monteCarloCaption: ReactNode;

  s3Title: string;
  s3Lead: ReactNode;
  s3Gigo: ReactNode;
  s3MlIntro: ReactNode;
  dashboardAlt: string;
  dashboardCaption: ReactNode;
  s3aTitle: string;
  s3aBody: ReactNode;
  s3aBullets: [ReactNode, ReactNode];
  s3aClosing: ReactNode;
  s3bTitle: string;
  s3bBody: ReactNode;

  s4Title: string;
  s4Lead: ReactNode;
  bimAlt: string;
  bimCaption: ReactNode;
  tableHeadTech: string;
  tableHeadValue: string;
  tableRows: [string, string][];

  s5Title: string;
  s5Lead: ReactNode;
  s5SafetyTitle: string;
  s5SafetyBody: ReactNode;
  safetyAlt: string;
  safetyCaption: ReactNode;
  s5SupplyTitle: string;
  s5SupplyBody: ReactNode;
  s5MaintTitle: string;
  s5MaintBody: ReactNode;

  s6Title: string;
  s6Paras: ReactNode;
  s6Closing: ReactNode;
  ctaHighlight: ReactNode;
  signatureBrand: ReactNode;
  ctaText: string;
};

const FR_CONTENT: ArticleContent = {
  eyebrow: "ConTech · Planification probabiliste",
  heroTitle:
    "Machine Learning et plannings : en finir avec la tyrannie du modèle déterministe grâce à Monte Carlo",
  heroSubtitle:
    "Comment l'intelligence artificielle, le BIM 4D et l'analyse probabiliste transforment le chaos des chantiers en gestion prédictive des risques.",
  heroAlt:
    "Chantier à grande échelle au crépuscule avec couches de données et maquettes BIM holographiques",
  intro: (
    <>
      <p className="text-base leading-relaxed text-zinc-300 sm:text-lg">
        Le secteur de la construction vit sous une dictature silencieuse, mais
        redoutablement efficace : celle de la ligne de temps. Depuis des
        décennies, nous confions la réussite de mégaprojets chiffrés en
        millions, voire en milliards d&apos;euros, à des diagrammes de Gantt
        déterministes, figés dans le marbre d&apos;un fichier MS Project ou
        Primavera.
      </p>
      <p className="text-base leading-relaxed text-zinc-300 sm:text-lg">
        Pourtant, quiconque a déjà mis les pieds sur un chantier connaît la
        réalité du terrain. Un planning millimétré, conçu dans le confort
        d&apos;un bureau d&apos;études, devient généralement obsolète dès que le
        premier coup de pioche est donné. Une météo capricieuse, une grève des
        transports, une grue en panne, un retard de livraison de matériaux
        critiques, ou pire, un accident de travail, et c&apos;est tout
        l&apos;édifice contractuel qui s&apos;effondre.
      </p>
      <p className="text-base leading-relaxed text-zinc-300 sm:text-lg">
        Traiter la planification de chantier comme une science exacte est une
        erreur fondamentale d&apos;appréciation. La construction est, par
        essence, une gestion complexe d&apos;incertitudes et d&apos;entropie.
      </p>
      <p className="text-base leading-relaxed text-zinc-300 sm:text-lg">
        Aujourd&apos;hui, grâce à la convergence spectaculaire de la méthode de
        Monte Carlo et du machine learning, la <B>ConTech</B>{" "}vit un point de
        bascule. Nous passons d&apos;une gestion réactive « que s&apos;est-il
        passé et comment rattraper le retard ? » à une véritable ingénierie
        prédictive « que va-t-il se passer et comment l&apos;éviter ? ».
      </p>
      <p className="text-base leading-relaxed text-zinc-300 sm:text-lg">
        Voici comment la donnée, couplée à l&apos;intelligence artificielle,
        redéfinit les règles du jeu pour les directeurs de projet.
      </p>
    </>
  ),

  s1Title: "1. La faillite du modèle déterministe",
  s1Lead: (
    <p className="leading-relaxed text-zinc-300">
      Pour comprendre la révolution en cours, il faut d&apos;abord disséquer le
      mal dont souffre notre industrie. Le problème majeur de la planification
      traditionnelle réside dans ce que les psychologues et les économistes
      appellent le « biais d&apos;optimisme » (<em>Optimism Bias</em>).
    </p>
  ),
  s1SubMirage: "Le mirage du point unique",
  s1Mirage: (
    <>
      <p className="leading-relaxed text-zinc-300">
        Lorsqu&apos;un planificateur définit qu&apos;une tâche de gros œuvre
        (par exemple, le coulage des fondations) prendra exactement 12 jours, il
        définit un point de terminaison unique. Ce chiffre ne sort pas de nulle
        part ; il est souvent basé sur des rendements théoriques. Cependant, ce
        modèle déterministe suppose un monde idéal, sans friction.
      </p>
      <blockquote className="my-6 rounded-r-xl border-l-4 border-sky-500 bg-zinc-900/60 px-5 py-4 text-base italic leading-relaxed text-zinc-200 sm:text-lg">
        « Le planning déterministe est une promesse faite dans un monde idéal,
        alors que le chantier est une réalité intrinsèquement chaotique. »
      </blockquote>
      <p className="leading-relaxed text-zinc-300">
        Ce modèle ne laisse aucune place mathématique à la variance. Si la tâche
        prend finalement 14 jours en raison d&apos;une averse prolongée,
        c&apos;est l&apos;ensemble du chemin critique (<em>Critical Path</em>)
        qui est impacté. Ce retard initial déclenche un effet domino
        dévastateur sur tous les sous-traitants suivants.
      </p>
    </>
  ),
  s1Closing: (
    <p className="leading-relaxed text-zinc-300">
      Les conséquences de cette méthode sont documentées de longue date : une
      écrasante majorité des grands projets d&apos;infrastructures dans le monde
      dépassent leurs délais et leurs budgets initiaux. La planification
      déterministe n&apos;est pas un outil de gestion des risques ; c&apos;est
      un outil de constatation de l&apos;échec.
    </p>
  ),

  s2Title: "2. La méthode de Monte Carlo : la puissance du probabiliste",
  s2Lead: (
    <p className="leading-relaxed text-zinc-300">
      Pour pallier cette défaillance systémique, l&apos;ingénierie de pointe se
      tourne vers une approche mathématique éprouvée dans la finance et le
      nucléaire : la simulation de Monte Carlo. Plutôt que de parier
      l&apos;avenir d&apos;un projet sur une seule série de dates, cette
      méthode simule le cycle de vie du chantier des milliers de fois (souvent
      plus de 10&nbsp;000 itérations).
    </p>
  ),
  s2SubDistrib: "Remplacer les certitudes par des distributions",
  s2DistribIntro: (
    <div className="leading-relaxed text-zinc-300">
      Le changement de paradigme commence à la racine. Pour chaque tâche du
      planning, on ne saisit plus une durée stricte, mais on modélise
      l&apos;incertitude via une distribution statistique (souvent triangulaire
      ou PERT)
      <PlanningProbabilisteNote locale="fr" />
      {". Le planificateur, ou le système, définit trois variables :"}
    </div>
  ),
  s2DistribBullets: [
    <>
      <B>Durée optimiste</B> (<em>Best case</em>) : si tout se déroule
      parfaitement.
    </>,
    <>
      <B>Durée la plus probable</B> (<em>Most likely</em>) : l&apos;estimation
      standard.
    </>,
    <>
      <B>Durée pessimiste</B> (<em>Worst case</em>) : si les risques majeurs
      se concrétisent.
    </>,
  ],
  s2DistribClosing: (
    <p className="leading-relaxed text-zinc-300">
      L&apos;ordinateur lance alors 10&nbsp;000 chantiers virtuels. À chaque
      itération, l&apos;algorithme pioche aléatoirement une durée pour chaque
      tâche en respectant la courbe de distribution.
    </p>
  ),
  s2SubSCurve: "La courbe en S (S-curve) et la P-value",
  s2SCurveIntro: (
    <p className="leading-relaxed text-zinc-300">
      À l&apos;issue de cette puissance de calcul brute, vous n&apos;obtenez
      plus une date butoir illusoire, mais un éventail de futurs possibles,
      représenté par une « S-curve ». C&apos;est ici qu&apos;intervient la{" "}
      <B>P-value</B> (valeur de probabilité). Le directeur de projet peut
      désormais lire les données ainsi :
    </p>
  ),
  s2SCurveBullets: [
    <>
      <B>P50</B> : « Nous avons 50&nbsp;% de chances de livrer le projet le 1ᵉʳ
      septembre » — autant dire un pile ou face.
    </>,
    <>
      <B>P85</B> : « Nous avons 85&nbsp;% de chances de livrer le projet avant
      le 15 octobre. »
    </>,
  ],
  s2SCurveClosing: (
    <p className="leading-relaxed text-zinc-300">
      Cette bascule vers le probabiliste est vitale : engagements réalistes,
      provisions pour risques fondées sur les données, et transparence pour les
      investisseurs et maîtres d&apos;ouvrage.
    </p>
  ),
  monteCarloAlt:
    "Tableau de bord des courbes S simulées — Monte Carlo et probabilités de fin de projet",
  monteCarloCaption: (
    <>
      Visualisation type « planned vs actual » : distributions Monte Carlo autour
      de la trajectoire centrale (Projet Delta).
    </>
  ),

  s3Title: "3. Le machine learning : l'objectivité des données",
  s3Lead: (
    <p className="leading-relaxed text-zinc-300">
      La méthode de Monte Carlo est brillante, mais elle souffrait historiquement
      d&apos;un défaut fatal dans le BTP : le syndrome du{" "}
      <em>Garbage In, Garbage Out</em> (GIGO).
    </p>
  ),
  s3Gigo: (
    <p className="leading-relaxed text-zinc-300">
      Si les durées optimistes et pessimistes injectées dans le modèle ne
      reposent que sur l&apos;intuition — parfois biaisée, fatiguée ou
      politiquement influencée — d&apos;un ingénieur humain, le résultat sera
      mathématiquement correct mais factuellement faux.
    </p>
  ),
  s3MlIntro: (
    <p className="leading-relaxed text-zinc-300">
      C&apos;est ici que le <B>machine learning</B> entre en scène et bouleverse
      totalement la donne.
    </p>
  ),
  dashboardAlt:
    "Tableau de bord de planification chantier avec diagramme de Gantt et météo prédictive",
  dashboardCaption: (
    <>
      Pilote augmenté : planning, dépendances et facteurs externes (ex.
      météo) dans une même vue décisionnelle.
    </>
  ),
  s3aTitle: "A. Analyse prédictive de la performance réelle",
  s3aBody: (
    <p className="leading-relaxed text-zinc-300">
      Les algorithmes résolvent le « Garbage In » en extrayant la connaissance
      de données historiques massives : milliers de chantiers passés (plannings
      initiaux, pointages réels, rapports de retards) pour révéler des
      corrélations impossibles à traiter à grande échelle à la main.
    </p>
  ),
  s3aBullets: [
    <>
      <B>Impact météorologique contextuel :</B> l&apos;IA ne se contente pas de
      dire « il pleuvra » — elle relie hygrométrie régionale, température et
      temps de séchage observé de formulations de béton déjà utilisées sur vos
      chantiers.
    </>,
    <>
      <B>Rendements décroissants et saturation :</B> l&apos;algorithme mesure
      la baisse de productivité marginale ; par exemple, une troisième équipe de
      plombiers dans 100&nbsp;m² peut augmenter les frictions de 15&nbsp;% au
      lieu de diviser le temps par trois.
    </>,
  ],
  s3aClosing: (
    <p className="leading-relaxed text-zinc-300">
      Le ML auto-génère alors les distributions d&apos;entrée de Monte Carlo avec
      une précision chirurgicale, fondée sur des faits vérifiables.
    </p>
  ),
  s3bTitle:
    "B. Deep reinforcement learning pour l'ordonnancement (scheduling)",
  s3bBody: (
    <p className="leading-relaxed text-zinc-300">
      Au-delà de la prédiction des durées, le{" "}
      <B>deep reinforcement learning</B>{" "}teste des millions de séquences
      d&apos;exécution. L&apos;agent est récompensé lorsqu&apos;il raccourcit le
      chemin critique sans créer de conflits de ressources, et pénalisé lorsque
      la robustesse se dégrade — une logique proche de celle ayant permis à
      l&apos;IA de maîtriser le jeu de Go.
    </p>
  ),

  s4Title:
    "4. Synergie : BIM 4D, vision par ordinateur et algorithmes génétiques",
  s4Lead: (
    <p className="leading-relaxed text-zinc-300">
      Un planning probabiliste intelligent ne suffit pas s&apos;il reste
      déconnecté du terrain. L&apos;étape ultime est l&apos;intégration dans la
      maquette numérique et le suivi visuel du chantier.
    </p>
  ),
  bimAlt:
    "Vue partagée : jumeau BIM 4D néon et capture drone avec grille de vision par ordinateur sur une mosquée en construction",
  bimCaption: (
    <>
      Synergie BIM 4D + vision par ordinateur : le plan temps réel confronté au
      réalisé capté sur site.
    </>
  ),
  tableHeadTech: "Technologie",
  tableHeadValue: "Apport stratégique au planning",
  tableRows: [
    [
      "BIM 4D (espace + temps)",
      "Visualisation spatio-temporelle des conflits de co-activité. Couplé à Monte Carlo, l'IA simule l'avancement et met en surbrillance les zones où les équipes risquent de se gêner si le scénario pessimiste se réalise.",
    ],
    [
      "Computer Vision (IA visuelle)",
      "Analyse automatique des flux vidéo (caméras, drones). L'IA compare le réalisé au prédictif BIM 4D ; si seulement 40 % de la dalle est ferraillée au lieu de 60 % prévus, Monte Carlo est recalculé en temps réel.",
    ],
    [
      "Algorithmes génétiques",
      "Optimisation de l'allocation spatiale des ressources (positionnement des grues, circulation des camions toupie) pour réduire les temps morts et soutenir le scénario probabiliste optimal.",
    ],
  ],

  s5Title: "5. Cas d'usage : logistique, aléas et sécurité de demain",
  s5Lead: (
    <p className="leading-relaxed text-zinc-300">
      Comment cette machinerie se traduit-elle pour le directeur de projet et le
      conducteur de travaux ? Quelques applications concrètes.
    </p>
  ),
  s5SafetyTitle: "Sécurité et prévention des accidents de travail",
  s5SafetyBody: (
    <>
      <p className="leading-relaxed text-zinc-300">
        C&apos;est sans doute l&apos;avancée la plus noble. Le BTP reste l&apos;un
        des secteurs les plus accidentogènes. L&apos;IA permet de passer d&apos;une
        sécurité réactive à une sécurité prédictive.
      </p>
      <p className="leading-relaxed text-zinc-300">
        En croisant la co-activité issue du BIM 4D, les courbes de fatigue (heures
        supplémentaires pour rattraper du retard) et les prévisions météo,
        l&apos;algorithme identifie des pics de risque futurs. Il alerte la
        direction et peut lisser le planning pour réduire la pression sur ces
        fenêtres — prévention humaine et préservation de l&apos;avancement global.
      </p>
    </>
  ),
  safetyAlt:
    "Vue en réalité augmentée sur chantier : détection des risques par l'IA et zones de circulation sécurisées",
  safetyCaption: (
    <>
      Détection d&apos;objets et chemins sécurisés — la sécurité comme boucle de
      feedback dans le planning.
    </>
  ),
  s5SupplyTitle: "Résilience de la chaîne d'approvisionnement",
  s5SupplyBody: (
    <p className="leading-relaxed text-zinc-300">
      Le ML surveille les bases mondiales : volatilité sur l&apos;acier,
      tensions logistiques maritimes… Ces signaux sont injectés dans Monte Carlo.
      Le planning peut alerter les achats deux mois avant une rupture probable à
      70&nbsp;%, déclenchant stocks stratégiques et achats anticipés.
    </p>
  ),
  s5MaintTitle: "Pannes et maintenance prédictive",
  s5MaintBody: (
    <p className="leading-relaxed text-zinc-300">
      Les capteurs IoT sur les grues remontent des signatures de défaillance. Le
      ML anticipe les pannes ; Monte Carlo simule l&apos;impact d&apos;un arrêt
      de 48&nbsp;h et propose l&apos;itinéraire de contournement le moins coûteux.
    </p>
  ),

  s6Title: "6. Conclusion : du « planificateur » au risk manager",
  s6Paras: (
    <>
      <p className="leading-relaxed text-zinc-300">
        Cette bascule transforme l&apos;ADN des métiers d&apos;encadrement. Le
        planificateur ne passe plus ses vendredis à déplacer des barres sur un
        Gantt pour masquer du retard : il ne subit plus le chantier au sens
        ancien du terme.
      </p>
      <blockquote className="my-6 rounded-r-xl border-l-4 border-sky-500 bg-zinc-900/60 px-5 py-4 text-base italic leading-relaxed text-zinc-200 sm:text-lg">
        « Le planning BTP devient un véritable GPS Waze prédictif : il ne se
        contente pas de votre heure d&apos;arrivée ; il recalcule l&apos;itinéraire
        en temps réel selon les accidents et embouteillages devant vous. »
      </blockquote>
      <p className="leading-relaxed text-zinc-300">
        Le directeur de projet devient un <B>risk manager</B> augmenté par la
        machine : surveiller les P-values, interpréter les scénarios IA,
        arbitrer avec des données difficiles à contester (coûts, délais,
        sécurité).
      </p>
    </>
  ),
  s6Closing: (
    <>
      <p className="leading-relaxed text-zinc-300">
        La transparence données-centrées réduit les litiges contractuels. Les
        contrats de demain s&apos;appuieront davantage sur des engagements
        probabilistes partagés (« budget X pour un P80 ») que sur des promesses
        intenables.
      </p>
      <p className="leading-relaxed text-zinc-300">
        L&apos;artisanat de la planification laisse place à l&apos;ingénierie de
        la donnée. Le futur du BTP ne consistera plus à parier sur l&apos;avenir,
        mais à le calculer.
      </p>
    </>
  ),
  ctaHighlight: (
    <p className="text-base leading-relaxed text-zinc-200 sm:text-lg">
      <strong className="text-white">Et vous ?</strong> Votre entreprise pilote-t-elle
      encore ses mégaprojets « au doigt mouillé », ou avez-vous commencé à intégrer
      des méthodes probabilistes et de l&apos;IA ? Partagez vos retours
      d&apos;expérience, vos succès ou vos freins à l&apos;adoption de la ConTech
      dans les commentaires ci-dessous.
    </p>
  ),
  signatureBrand: (
    <>
      <strong>Elouatiki Frères</strong> — données, BIM et IA au service de
      chantiers plus sûrs et plus prévisibles.
    </>
  ),
  ctaText: "Discuter de votre projet de planning augmenté",
};

const EN_CONTENT: ArticleContent = {
  eyebrow: "ConTech · Probabilistic scheduling",
  heroTitle:
    "Machine learning and schedules: breaking free from deterministic tyranny with Monte Carlo",
  heroSubtitle:
    "How artificial intelligence, 4D BIM, and probabilistic analysis turn jobsite chaos into predictive risk management.",
  heroAlt:
    "Large construction site at dusk with data overlays and holographic BIM models",
  intro: (
    <>
      <p className="text-base leading-relaxed text-zinc-300 sm:text-lg">
        Construction lives under a silent but ruthlessly effective dictatorship:
        the timeline. For decades we have bet megaprojects worth millions or
        billions on deterministic Gantt charts frozen inside MS Project or
        Primavera files.
      </p>
      <p className="text-base leading-relaxed text-zinc-300 sm:text-lg">
        Anyone who has ever set foot on a jobsite knows what actually happens.
        A meticulously crafted schedule, born in the comfort of the design
        office, usually goes stale the moment ground breaks. Weather, transport
        strikes, crane downtime, late critical materials—or worse, an
        incident—and the contractual edifice cracks.
      </p>
      <p className="text-base leading-relaxed text-zinc-300 sm:text-lg">
        Treating site scheduling like an exact science is a fundamental
        misread. Construction is, by nature, the management of uncertainty and
        entropy.
      </p>
      <p className="text-base leading-relaxed text-zinc-300 sm:text-lg">
        Today, powered by Monte Carlo methods and machine learning,{" "}
        <B>ConTech</B> is at an inflection point. We move from reactive project
        management (“what happened and how do we recover?”) to predictive
        engineering (“what will happen and how do we prevent it?”).
      </p>
      <p className="text-base leading-relaxed text-zinc-300 sm:text-lg">
        Here is how data coupled with AI redraws the playbook for project
        directors.
      </p>
    </>
  ),

  s1Title: "1. Why the deterministic model fails",
  s1Lead: (
    <p className="leading-relaxed text-zinc-300">
      To understand the shift, dissect the ailment: traditional planning suffers
      from what psychologists and economists call{" "}
      <em>optimism bias</em>.
    </p>
  ),
  s1SubMirage: "The mirage of the single point estimate",
  s1Mirage: (
    <>
      <p className="leading-relaxed text-zinc-300">
        When a planner states that a structural activity—say foundation
        pours—will take exactly twelve days, they commit to a single finish
        date. The figure often comes from textbook productivity rates. Yet the
        deterministic model assumes an ideal world without friction.
      </p>
      <blockquote className="my-6 rounded-r-xl border-l-4 border-sky-500 bg-zinc-900/60 px-5 py-4 text-base italic leading-relaxed text-zinc-200 sm:text-lg">
        “Deterministic schedules promise an ideal world while the jobsite is
        inherently chaotic.”
      </blockquote>
      <p className="leading-relaxed text-zinc-300">
        There is no mathematical room for variance. If rain stretches the task to
        fourteen days, the entire <em>critical path</em> shifts, cascading through
        every downstream trade.
      </p>
    </>
  ),
  s1Closing: (
    <p className="leading-relaxed text-zinc-300">
      Evidence is overwhelming: most major infrastructure projects overrun time
      and budget. Deterministic planning is not risk management—it is a ledger
      of failure after the fact.
    </p>
  ),

  s2Title: "2. Monte Carlo simulation: the probabilistic edge",
  s2Lead: (
    <p className="leading-relaxed text-zinc-300">
      Leading engineering borrows a tool proven in finance and nuclear safety:
      Monte Carlo simulation. Instead of banking on one deterministic timeline,
      the method runs the project lifecycle thousands—often more than ten
      thousand—times.
    </p>
  ),
  s2SubDistrib: "Swap certainties for distributions",
  s2DistribIntro: (
    <div className="leading-relaxed text-zinc-300">
      The paradigm shift starts at input level. Each activity receives not one
      duration but a statistical distribution—often triangular or PERT
      <PlanningProbabilisteNote locale="en" />
      —with three anchors:
    </div>
  ),
  s2DistribBullets: [
    <>
      <B>Optimistic duration</B> (<em>best case</em>): everything goes right.
    </>,
    <>
      <B>Most likely duration</B>: the planner&apos;s central estimate.
    </>,
    <>
      <B>Pessimistic duration</B> (<em>worst case</em>): major risks materialize.
    </>,
  ],
  s2DistribClosing: (
    <p className="leading-relaxed text-zinc-300">
      The machine now launches thousands of virtual projects. Every iteration
      samples task durations according to the modeled distributions.
    </p>
  ),
  s2SubSCurve: "The S-curve and P-values",
  s2SCurveIntro: (
    <p className="leading-relaxed text-zinc-300">
      Raw compute yields not one heroic deadline but a cloud of futures summarized
      by an <strong className="text-white">S-curve</strong>. Enter the{" "}
      <B>P-value</B>: the probability of finishing on or before a date.
    </p>
  ),
  s2SCurveBullets: [
    <>
      <B>P50</B>: “There is a 50&nbsp;% chance we deliver on September&nbsp;1”—a
      coin toss.
    </>,
    <>
      <B>P85</B>: “There is an 85&nbsp;% chance we deliver before October&nbsp;15.”
    </>,
  ],
  s2SCurveClosing: (
    <p className="leading-relaxed text-zinc-300">
      Moving to probabilities enables credible commitments, scientifically
      sized contingencies, and transparent dialogue with owners and investors.
    </p>
  ),
  monteCarloAlt:
    "Dashboard of simulated S-curves — Monte Carlo spread around project completion",
  monteCarloCaption: (
    <>
      Probabilistic envelope: thousands of Monte Carlo trajectories bracketing
      the central forecast (sample project “Delta”).
    </>
  ),

  s3Title: "3. Machine learning: objectivity from data",
  s3Lead: (
    <p className="leading-relaxed text-zinc-300">
      Monte Carlo is powerful yet historically fragile in construction because of{" "}
      <em>garbage in, garbage out</em>.
    </p>
  ),
  s3Gigo: (
    <p className="leading-relaxed text-zinc-300">
      If optimistic and pessimistic anchors are only human intuition—biased,
      tired, or political—the simulation will be mathematically correct and
      factually wrong.
    </p>
  ),
  s3MlIntro: (
    <p className="leading-relaxed text-zinc-300">
      This is where <B>machine learning</B> enters and reframes the problem.
    </p>
  ),
  dashboardAlt:
    "Construction scheduling dashboard with Gantt chart and predictive weather panel",
  dashboardCaption: (
    <>
      Augmented planner UI: dependencies plus external drivers such as weather in
      one decision surface.
    </>
  ),
  s3aTitle: "A. Predicting real-world performance",
  s3aBody: (
    <p className="leading-relaxed text-zinc-300">
      Algorithms replace gut feel by mining massive archives—thousands of past
      jobs with baseline schedules, actual timesheets, and delay reports—to
      uncover correlations no human team could compute at scale.
    </p>
  ),
  s3aBullets: [
    <>
      <B>Contextual weather impact:</B> the model links regional humidity,
      temperature, and observed curing times for the concrete mixes you have
      actually poured—not generic “rain delays.”
    </>,
    <>
      <B>Diminishing returns:</B> ML quantifies marginal productivity loss;
      adding a third plumbing crew inside 100&nbsp;m² may add 15&nbsp;% friction
      instead of dividing duration by three.
    </>,
  ],
  s3aClosing: (
    <p className="leading-relaxed text-zinc-300">
      Machine learning therefore auto-generates Monte Carlo inputs with
      surgical precision grounded in evidence.
    </p>
  ),
  s3bTitle: "B. Deep reinforcement learning for scheduling",
  s3bBody: (
    <p className="leading-relaxed text-zinc-300">
      Beyond duration forecasting, <B>deep reinforcement learning</B>{" "}
      explores millions of execution sequences. The agent is rewarded for shortening the
      critical path without resource clashes and penalized when robustness
      collapses—much like training engines that mastered Go.
    </p>
  ),

  s4Title: "4. Synergy: 4D BIM, computer vision, and genetic algorithms",
  s4Lead: (
    <p className="leading-relaxed text-zinc-300">
      Probabilistic schedules must stay tethered to physical reality. The capstone
      is deep integration with digital twins and visual progress tracking.
    </p>
  ),
  bimAlt:
    "Split view: neon 4D BIM twin and drone capture with CV alignment grid on a mosque jobsite",
  bimCaption: (
    <>
      4D BIM plus computer vision: predicted progress continuously reconciled
      with field evidence.
    </>
  ),
  tableHeadTech: "Technology",
  tableHeadValue: "Strategic contribution to scheduling",
  tableRows: [
    [
      "4D BIM (space + time)",
      "Visualizes spatio-temporal trade stacking conflicts. Coupled with Monte Carlo, AI animates the building and highlights zones where crews collide if pessimistic scenarios unfold.",
    ],
    [
      "Computer vision",
      "Automates analysis of site cameras and drone footage. When observed rebar coverage is 40&nbsp;% instead of the planned 60&nbsp;%, Monte Carlo recomputes delivery probabilities in near real time.",
    ],
    [
      "Genetic algorithms",
      "Optimize spatial resource placement—tower cranes, concrete truck routes—to trim idle time and reinforce the best probabilistic scenario.",
    ],
  ],

  s5Title: "5. Use cases: logistics, volatility, and tomorrow’s safety",
  s5Lead: (
    <p className="leading-relaxed text-zinc-300">
      How does this machinery feel for project directors and site managers?
      Three tangible patterns.
    </p>
  ),
  s5SafetyTitle: "Safety and incident prevention",
  s5SafetyBody: (
    <>
      <p className="leading-relaxed text-zinc-300">
        Perhaps the highest-impact application. Construction remains one of the
        most hazardous industries. AI shifts safety from reactive audits to
        predictive interventions.
      </p>
      <p className="leading-relaxed text-zinc-300">
        By blending 4D BIM co-activity density, overtime fatigue curves, and
        weather outlooks, models forecast accident-risk spikes. Leadership gets
        advance warning and can smooth workloads—protecting people without
        sacrificing overall throughput.
      </p>
    </>
  ),
  safetyAlt:
    "Augmented-reality jobsite view highlighting hazards, crane zones, and safe pedestrian paths",
  safetyCaption: (
    <>
      Object detection plus routed safe corridors—closing the loop between risk
      sensing and schedule balancing.
    </>
  ),
  s5SupplyTitle: "Supply-chain resilience",
  s5SupplyBody: (
    <p className="leading-relaxed text-zinc-300">
      ML monitors global signals—steel volatility, maritime disruption—and feeds
      them into Monte Carlo. Procurement may receive a two-month heads-up on a
      70&nbsp;% probable shortage, triggering strategic buys and buffer stock.
    </p>
  ),
  s5MaintTitle: "Breakdowns and predictive maintenance",
  s5MaintBody: (
    <p className="leading-relaxed text-zinc-300">
      IoT signatures from tower cranes expose impending mechanical faults.
      Monte Carlo immediately stress-tests a 48&nbsp;h outage and surfaces the
      cheapest recovery path for supervision.
    </p>
  ),

  s6Title: "6. Conclusion: from planner to risk manager",
  s6Paras: (
    <>
      <p className="leading-relaxed text-zinc-300">
        This technological pivot rewires leadership DNA. Planners no longer spend
        Fridays dragging Gantt bars to hide slippage—they stop being spectators
        of chaos.
      </p>
      <blockquote className="my-6 rounded-r-xl border-l-4 border-sky-500 bg-zinc-900/60 px-5 py-4 text-base italic leading-relaxed text-zinc-200 sm:text-lg">
        “Construction schedules become predictive GPS: they don’t only estimate
        arrival time—they reroute live around incidents ahead of you.”
      </blockquote>
      <p className="leading-relaxed text-zinc-300">
        Project directors evolve into <B>machine-augmented risk managers</B>:
        monitoring P-values, interpreting AI scenarios, and making human trade-offs
        on cost, schedule, and safety with harder evidence.
      </p>
    </>
  ),
  s6Closing: (
    <>
      <p className="leading-relaxed text-zinc-300">
        Data transparency also dampens contractual friction. Tomorrow’s
        agreements will lean on shared probabilistic commitments (“budget X at
        P80”) rather than impossible promises.
      </p>
      <p className="leading-relaxed text-zinc-300">
        Craft scheduling yields to data engineering. The future of construction
        is not guessing—it is computing.
      </p>
    </>
  ),
  ctaHighlight: (
    <p className="text-base leading-relaxed text-zinc-200 sm:text-lg">
      <strong className="text-white">Your turn:</strong> Are megaprojects still
      steered by instinct, or have you started weaving probabilistic methods and
      AI into delivery? Share wins, lessons, or adoption blockers in the
      comments below.
    </p>
  ),
  signatureBrand: (
    <>
      <strong>Elouatiki Frères</strong> — data, BIM, and AI for safer, more
      predictable jobsites.
    </>
  ),
  ctaText: "Talk to us about augmented scheduling",
};


function getContent(locale: AppLocale): ArticleContent {
  // AR : même comportement que les autres articles du blog — corps en anglais.
  if (locale === "fr") return FR_CONTENT;
  return EN_CONTENT;
}

function getFormattingLocale(locale: AppLocale): string {
  return locale === "fr" ? "fr-FR" : "en-US";
}

function ArticleFigure({
  src,
  alt,
  caption,
  className = "",
  priority = false,
}: {
  src: string;
  alt: string;
  caption: ReactNode;
  className?: string;
  priority?: boolean;
}) {
  return (
    <figure
      className={`mx-auto my-8 overflow-hidden rounded-2xl border border-white/10 bg-zinc-900/40 shadow-xl shadow-black/40 sm:my-10 lg:max-w-5xl ${className}`}
    >
      <div className="relative aspect-[16/9] w-full">
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          sizes="(max-width: 1024px) 100vw, 1024px"
          className="object-cover"
        />
      </div>
      <figcaption className="px-5 py-3 text-center text-sm italic leading-relaxed text-zinc-400">
        {caption}
      </figcaption>
    </figure>
  );
}

export async function ArticlePlanningIA() {
  const locale = (await getLocale()) as AppLocale;
  const formattingLocale = getFormattingLocale(locale);
  const blogUiLocale = locale === "ar" ? "en" : locale;
  const t = await getTranslations({ locale: blogUiLocale, namespace: "Blog" });
  const c = getContent(locale);

  const publishedDate = new Date(ARTICLE_PUBLISHED_AT);
  const formattedDate = new Intl.DateTimeFormat(formattingLocale, {
    dateStyle: "long",
  }).format(publishedDate);
  const readingTimeLabel = t("readingTime", {
    minutes: ARTICLE_READING_MINUTES,
  });

  const articleDir = locale === "ar" ? "ltr" : undefined;

  return (
    <article
      dir={articleDir}
      className="article-container mx-auto max-w-4xl px-5 py-12 text-zinc-200 sm:px-8 sm:py-16 lg:px-12"
    >
      {/* Hero */}
      <header className="article-header space-y-8">
        <div className="relative mx-auto overflow-hidden rounded-2xl border border-white/10 shadow-2xl shadow-black/50 lg:max-w-5xl">
          <div className="relative aspect-[21/9] min-h-[220px] w-full sm:aspect-[2.4/1] sm:min-h-[280px]">
            <Image
              src={COVER_SRC}
              alt={c.heroAlt}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 1024px"
              className="object-cover object-center"
            />
            <div
              className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/75 to-zinc-950/35"
              aria-hidden
            />
            <div className="absolute inset-x-0 bottom-0 px-5 pb-8 pt-16 sm:px-8 sm:pb-10 md:px-10">
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-cyan-300 sm:text-sm">
                {c.eyebrow}
              </p>
              <h1 className="font-[family-name:var(--font-space-grotesk)] text-2xl font-bold leading-[1.15] text-white sm:text-3xl md:text-4xl lg:text-[2.35rem]">
                {c.heroTitle}
              </h1>
              <p className="mt-4 max-w-3xl text-base leading-relaxed text-zinc-200 sm:text-lg">
                {c.heroSubtitle}
              </p>
            </div>
          </div>
        </div>

        <div className="article-meta flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-zinc-400">
          <span className="inline-flex items-center gap-2">
            <CalendarDays className="size-4 shrink-0" aria-hidden />
            <time dateTime={ARTICLE_PUBLISHED_AT}>{formattedDate}</time>
          </span>
          <span aria-hidden className="text-zinc-600">
            ·
          </span>
          <span className="inline-flex items-center gap-2">
            <Clock className="size-4 shrink-0" aria-hidden />
            {readingTimeLabel}
          </span>
        </div>

        <div className="mx-auto max-w-3xl space-y-5">{c.intro}</div>
      </header>

      {/* §1 */}
      <section className="content-block mx-auto mt-14 max-w-3xl space-y-5 sm:mt-16">
        <h2 className="border-b border-cyan-500/25 pb-3 font-[family-name:var(--font-space-grotesk)] text-2xl font-bold leading-snug text-white sm:text-3xl">
          {c.s1Title}
        </h2>
        {c.s1Lead}
        <h3 className="pt-2 font-[family-name:var(--font-space-grotesk)] text-xl font-semibold text-white sm:text-2xl">
          {c.s1SubMirage}
        </h3>
        {c.s1Mirage}
        {c.s1Closing}
      </section>

      {/* §2 */}
      <section className="content-block mx-auto mt-14 max-w-3xl space-y-5 sm:mt-16">
        <h2 className="border-b border-cyan-500/25 pb-3 font-[family-name:var(--font-space-grotesk)] text-2xl font-bold leading-snug text-white sm:text-3xl">
          {c.s2Title}
        </h2>
        {c.s2Lead}
        <h3 className="pt-2 font-[family-name:var(--font-space-grotesk)] text-xl font-semibold text-white sm:text-2xl">
          {c.s2SubDistrib}
        </h3>
        {c.s2DistribIntro}
        <ul className="list-disc space-y-3 ps-6 leading-relaxed text-zinc-300 marker:text-cyan-400">
          {c.s2DistribBullets.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
        {c.s2DistribClosing}

        <h3 className="pt-4 font-[family-name:var(--font-space-grotesk)] text-xl font-semibold text-white sm:text-2xl">
          {c.s2SubSCurve}
        </h3>
        {c.s2SCurveIntro}
        <ul className="list-disc space-y-3 ps-6 leading-relaxed text-zinc-300 marker:text-cyan-400">
          {c.s2SCurveBullets.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
        {c.s2SCurveClosing}

        <ArticleFigure
          src={MONTE_CARLO_SRC}
          alt={c.monteCarloAlt}
          caption={c.monteCarloCaption}
        />
      </section>

      {/* §3 */}
      <section className="content-block mx-auto mt-14 max-w-3xl space-y-5 sm:mt-16">
        <h2 className="border-b border-cyan-500/25 pb-3 font-[family-name:var(--font-space-grotesk)] text-2xl font-bold leading-snug text-white sm:text-3xl">
          {c.s3Title}
        </h2>
        {c.s3Lead}
        {c.s3Gigo}
        {c.s3MlIntro}

        <ArticleFigure
          src={DASHBOARD_SRC}
          alt={c.dashboardAlt}
          caption={c.dashboardCaption}
        />

        <div className="space-y-4">
          <h3 className="font-[family-name:var(--font-space-grotesk)] text-xl font-semibold text-white sm:text-2xl">
            {c.s3aTitle}
          </h3>
          {c.s3aBody}
          <ul className="list-disc space-y-3 ps-6 leading-relaxed text-zinc-300 marker:text-cyan-400">
            {c.s3aBullets.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
          {c.s3aClosing}
        </div>

        <div className="space-y-4">
          <h3 className="font-[family-name:var(--font-space-grotesk)] text-xl font-semibold text-white sm:text-2xl">
            {c.s3bTitle}
          </h3>
          {c.s3bBody}
        </div>
      </section>

      {/* §4 */}
      <section className="content-block mx-auto mt-14 max-w-3xl space-y-6 sm:mt-16">
        <h2 className="border-b border-cyan-500/25 pb-3 font-[family-name:var(--font-space-grotesk)] text-2xl font-bold leading-snug text-white sm:text-3xl">
          {c.s4Title}
        </h2>
        {c.s4Lead}

        <ArticleFigure src={BIM_CV_SRC} alt={c.bimAlt} caption={c.bimCaption} />

        <div className="mx-auto overflow-hidden rounded-xl border border-white/10 shadow-xl shadow-black/30 lg:max-w-5xl">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[520px] border-collapse text-sm sm:text-base">
              <thead>
                <tr className="bg-zinc-800/90 text-left text-white">
                  <th className="border-b border-white/15 px-4 py-3 font-semibold sm:px-5 sm:py-4">
                    {c.tableHeadTech}
                  </th>
                  <th className="border-b border-white/15 px-4 py-3 font-semibold sm:px-5 sm:py-4">
                    {c.tableHeadValue}
                  </th>
                </tr>
              </thead>
              <tbody className="bg-zinc-900/40 text-zinc-300">
                {c.tableRows.map(([tech, val], idx) => (
                  <tr
                    key={idx}
                    className="border-b border-white/8 transition hover:bg-white/[0.03]"
                  >
                    <td className="align-top px-4 py-3 font-medium text-cyan-100/95 sm:px-5 sm:py-4">
                      {tech}
                    </td>
                    <td className="align-top px-4 py-3 leading-relaxed sm:px-5 sm:py-4">
                      {val}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* §5 */}
      <section className="content-block mx-auto mt-14 max-w-3xl space-y-8 sm:mt-16">
        <h2 className="border-b border-cyan-500/25 pb-3 font-[family-name:var(--font-space-grotesk)] text-2xl font-bold leading-snug text-white sm:text-3xl">
          {c.s5Title}
        </h2>
        {c.s5Lead}

        <div className="space-y-4">
          <h3 className="font-[family-name:var(--font-space-grotesk)] text-xl font-semibold text-white sm:text-2xl">
            {c.s5SafetyTitle}
          </h3>
          {c.s5SafetyBody}
          <ArticleFigure
            src={SAFETY_SRC}
            alt={c.safetyAlt}
            caption={c.safetyCaption}
          />
        </div>

        <div className="space-y-3">
          <h3 className="font-[family-name:var(--font-space-grotesk)] text-xl font-semibold text-white sm:text-2xl">
            {c.s5SupplyTitle}
          </h3>
          {c.s5SupplyBody}
        </div>

        <div className="space-y-3">
          <h3 className="font-[family-name:var(--font-space-grotesk)] text-xl font-semibold text-white sm:text-2xl">
            {c.s5MaintTitle}
          </h3>
          {c.s5MaintBody}
        </div>
      </section>

      {/* §6 + CTA */}
      <section className="content-block mx-auto mt-14 max-w-3xl space-y-6 sm:mt-16">
        <h2 className="border-b border-cyan-500/25 pb-3 font-[family-name:var(--font-space-grotesk)] text-2xl font-bold leading-snug text-white sm:text-3xl">
          {c.s6Title}
        </h2>
        {c.s6Paras}
        {c.s6Closing}
      </section>

      <div className="mx-auto mt-14 max-w-3xl rounded-2xl border border-violet-500/25 bg-gradient-to-br from-violet-500/15 via-cyan-500/10 to-zinc-900/80 px-6 py-10 text-center shadow-xl shadow-black/30 sm:mt-16 sm:px-10 sm:py-12 lg:max-w-4xl">
        {c.ctaHighlight}
      </div>

      <footer className="article-footer mx-auto mt-14 max-w-3xl space-y-8 border-t border-white/10 pt-10 sm:mt-16">
        <div className="byline">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-400">
            {t("author")}
          </p>
          <p className="mt-3 font-[family-name:var(--font-space-grotesk)] text-2xl font-bold text-white sm:text-3xl">
            {ARTICLE_AUTHOR}
          </p>
          <p className="mt-3 inline-flex flex-wrap items-center gap-2 text-sm text-zinc-400">
            <CalendarDays className="size-4 shrink-0" aria-hidden />
            <span>
              {t("publishedOn")}{" "}
              <time dateTime={ARTICLE_PUBLISHED_AT}>{formattedDate}</time>
            </span>
          </p>
        </div>

        <div className="rounded-2xl border border-cyan-500/25 bg-gradient-to-br from-cyan-500/10 via-zinc-900/40 to-zinc-900/60 p-6 text-center sm:p-8">
          <p className="font-[family-name:var(--font-space-grotesk)] text-lg font-semibold leading-relaxed text-white sm:text-xl">
            {c.signatureBrand}
          </p>
          <Link
            href="/#contact"
            className="mt-6 inline-flex items-center gap-2 rounded-xl border border-cyan-400/50 bg-cyan-500/15 px-6 py-3 text-sm font-semibold text-cyan-100 transition hover:border-cyan-300/70 hover:bg-cyan-500/25 hover:text-white sm:text-base"
          >
            {c.ctaText}
            <span aria-hidden>→</span>
          </Link>
        </div>
      </footer>
    </article>
  );
}
