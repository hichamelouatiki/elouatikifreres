/**
 * Article de blog : « Innovation Achats — lotissements intelligents & dialogue data ».
 *
 * Structure alignée sur dam-inspection-article.tsx et bim-fluides-article.tsx.
 * Contenu FR / EN ; locale AR → EN (fallback anglais).
 */

import { CalendarDays, Clock } from "lucide-react";
import { getLocale, getTranslations } from "next-intl/server";
import type { ReactNode } from "react";

import { ArticleFigure } from "@/components/article-figure";
import { Link } from "@/i18n/navigation";
import type { AppLocale } from "@/i18n/routing";

const MEDIA_BASE = "/media/blog/innovation-achats";

const COVER_IMAGE_SRC = `${MEDIA_BASE}/cover.png`;
const IMAGE1_SRC = `${MEDIA_BASE}/image1.jpg`;
const IMAGE2_SRC = `${MEDIA_BASE}/image2.jpg`;
const IMAGE3_SRC = `${MEDIA_BASE}/image3.jpg`;
const IMAGE4_SRC = `${MEDIA_BASE}/image4.jpg`;
const IMAGE5_SRC = `${MEDIA_BASE}/image5.jpg`;

const ARTICLE_AUTHOR = "EL OUATIKI Yasser";
const ARTICLE_PUBLISHED_AT = "2023-09-01";
const ARTICLE_READING_MINUTES = 9;

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
  s1Body: ReactNode;
  s1InterfaceLead: ReactNode;
  s1Bullets: [ReactNode, ReactNode];
  s1Outro: ReactNode;
  s2Title: string;
  s2Intro: ReactNode;
  image1Alt: string;
  image1Caption: ReactNode;
  s2aTitle: string;
  s2aBody: ReactNode;
  s2aQuote: ReactNode;
  s2bTitle: string;
  s2bBody: ReactNode;
  s3Title: string;
  s3Intro: ReactNode;
  image2Alt: string;
  image2Caption: ReactNode;
  s3SubTitle: string;
  s3NlpIntro: ReactNode;
  s3Bullets: [ReactNode, ReactNode, ReactNode];
  s3Outro: ReactNode;
  s4Title: string;
  case1Title: string;
  case1Context: ReactNode;
  case1Traditional: ReactNode;
  case1Ai: ReactNode;
  image3Alt: string;
  image3Caption: ReactNode;
  case2Title: string;
  case2Context: ReactNode;
  case2Traditional: ReactNode;
  case2Ai: ReactNode;
  image4Alt: string;
  image4Caption: ReactNode;
  s5Title: string;
  s5Intro: ReactNode;
  tableHeadStep: string;
  tableHeadTraditional: string;
  tableHeadAi: string;
  tableRows: [TableRow, TableRow, TableRow];
  conclusionTitle: string;
  conclusionBody: ReactNode;
  conclusionBullets: [ReactNode, ReactNode, ReactNode];
  conclusionOutro: ReactNode;
  image5Alt: string;
  image5Caption: ReactNode;
  signatureBrand: ReactNode;
  ctaText: string;
};

const FR_CONTENT: ArticleContent = {
  eyebrow: "Innovation Achats & Intelligence Artificielle",
  title:
    "Innovation Achats : Comment l'IA et les Lotissements Intelligents Éradiquent la Crise des Avenants",
  intro: (
    <>
      <p className="text-base leading-relaxed text-zinc-300 sm:text-lg">
        La gestion des achats dans les projets complexes (BTP, industrie, IT)
        souffre historiquement d&apos;une pathologie coûteuse : la
        prolifération des avenants. Ces ajustements contractuels, trop souvent
        mis sur le compte d&apos;«&nbsp;imprévus&nbsp;» inévitables, grèvent les
        budgets et détériorent durablement la relation client-fournisseur.
      </p>
      <p className="text-base leading-relaxed text-zinc-300 sm:text-lg">
        Pourtant, une écrasante majorité de ces avenants ne relève pas de la
        fatalité. Ils sont le symptôme direct d&apos;un modèle d&apos;achat
        obsolète, où les bordereaux de prix (BPU, DPGF) sont signés sur la base
        d&apos;hypothèses implicites et d&apos;angles morts. Aujourd&apos;hui,
        l&apos;Intelligence Artificielle s&apos;impose comme le chaînon manquant
        pour repenser l&apos;ingénierie contractuelle — en couplant{" "}
        <B>lotissements intelligents</B> et <B>dialogue fournisseurs data</B> à
        des algorithmes avancés.
      </p>
    </>
  ),
  coverAlt:
    "Tableau de bord d'analyse prédictive des achats avec risques contractuels et interfaces entre lots",
  coverCaption: (
    <>
      Illustration de couverture — innovation achats et maîtrise des avenants
      par la donnée.
    </>
  ),

  s1Title: "1. Le Piège des Bordereaux Traditionnels",
  s1Body: (
    <p className="leading-relaxed text-zinc-300">
      Dans une approche d&apos;achat classique, l&apos;acheteur découpe le
      projet en lots hermétiques et envoie des cahiers des charges statiques. Le
      fournisseur y répond par un prix, souvent en se protégeant face aux
      incertitudes, ou — pire — en «&nbsp;cassant&nbsp;» son prix initial pour
      se rattraper plus tard via des avenants agressifs.
    </p>
  ),
  s1InterfaceLead: (
    <>
      Le problème fondamental réside dans{" "}
      <B>l&apos;invisibilité des interfaces</B> :
    </>
  ),
  s1Bullets: [
    <>
      Quelles sont les <B>hypothèses de travail réelles</B>{" "}prises par le
      sous-traitant (état du sol, dates d&apos;accès) ?
    </>,
    <>
      Quelles sont ses <B>interdépendances critiques</B> vis-à-vis des autres
      lots ?
    </>,
  ],
  s1Outro: (
    <p className="leading-relaxed text-zinc-300">
      C&apos;est précisément sur ces zones d&apos;ombre que l&apos;IA apporte
      une véritable rupture technologique.
    </p>
  ),

  s2Title: '2. L\'Approche des "Lotissements Intelligents" Augmentée par l\'IA',
  s2Intro: (
    <p className="leading-relaxed text-zinc-300">
      L&apos;innovation d&apos;achats commence par la fin des silos rigides :
      le lotissement intelligent consiste à structurer les appels d&apos;offres
      par blocs fonctionnels interdépendants. L&apos;IA permet de pousser cette
      logique à un niveau d&apos;optimisation inédit.
    </p>
  ),
  image1Alt:
    "Analyse prédictive des risques d'achats : cartographie des interfaces entre lots et probabilité d'avenants",
  image1Caption: (
    <>
      Analyse prédictive — cartographie des interfaces et risques d&apos;avenants
      avant signature.
    </>
  ),
  s2aTitle: "A. La Cartographie Prédictive des Interfaces",
  s2aBody: (
    <p className="leading-relaxed text-zinc-300">
      Hier dépendante de l&apos;intuition de l&apos;acheteur, la cartographie
      des risques repose désormais sur le <B>Machine Learning</B>. En analysant
      l&apos;historique des projets passés (anciens contrats, plannings,
      avenants subis), l&apos;algorithme identifie statistiquement les points
      de friction récurrents.
    </p>
  ),
  s2aQuote: (
    <blockquote className="rounded-2xl border border-cyan-500/25 bg-cyan-500/5 px-5 py-4 text-sm leading-relaxed text-zinc-200 sm:text-base">
      <p>
        <B>Exemple de recommandation de l&apos;IA :</B> «&nbsp;Attention, dans
        82&nbsp;% des cas, la scission entre le Lot Climatisation et le Lot
        Faux-Plafond génère un avenant de retard. Fusionnez ces lots ou
        intégrez une clause de dépendance croisée.&nbsp;»
      </p>
    </blockquote>
  ),
  s2bTitle: "B. Le Chiffrage Conditionnel et la Modélisation Paramétrique",
  s2bBody: (
    <p className="leading-relaxed text-zinc-300">
      Les bordereaux ne demandent plus un prix fixe et figé, mais un prix
      conditionné. Le fournisseur chiffre son lot en fonction d&apos;un set de
      données précises. Grâce à l&apos;IA, l&apos;acheteur peut simuler
      instantanément l&apos;impact financier d&apos;un changement de variable
      (ex.&nbsp;: un retard de 3 semaines du gros œuvre) sur la totalité des
      lots subséquents, évaluant ainsi le coût réel du risque avant même la
      signature.
    </p>
  ),

  s3Title: '3. Le Dialogue Fournisseurs "Data" : Le NLP pour Décrypter les Offres',
  s3Intro: (
    <p className="leading-relaxed text-zinc-300">
      Pour que ce modèle fonctionne, il faut instaurer un dialogue interactif
      centré sur la donnée via une plateforme collaborative où chaque
      fournisseur doit expliciter ses hypothèses. C&apos;est ici
      qu&apos;intervient le <B>Traitement du Langage Naturel (NLP)</B>.
    </p>
  ),
  image2Alt:
    "Extraction NLP des données cachées dans les contrats et mémoires techniques fournisseurs",
  image2Caption: (
    <>
      Extraction NLP — hypothèses enfouies dans les mémoires techniques
      structurées automatiquement.
    </>
  ),
  s3SubTitle: "Extraire les Hypothèses Enfouies",
  s3NlpIntro: (
    <p className="leading-relaxed text-zinc-300">
      Les fournisseurs ont parfois tendance à noyer leurs réserves techniques
      dans des centaines de pages de mémoires explicatifs au format PDF. Les
      algorithmes de NLP scannent automatiquement ces documents pour en extraire
      et structurer les conditions cachées :
    </p>
  ),
  s3Bullets: [
    <>
      <B>Hypothèses de base détectées :</B> «&nbsp;Résistance du sol supposée à
      X MPa.&nbsp;»
    </>,
    <>
      <B>Exigences préalables identifiées :</B> «&nbsp;Nécessite une zone
      dégagée avec tolérance de nivellement de +/- 2 cm.&nbsp;»
    </>,
    <>
      <B>Risques isolés :</B> «&nbsp;Délai d&apos;approvisionnement des puces
      électroniques non garanti.&nbsp;»
    </>,
  ],
  s3Outro: (
    <p className="leading-relaxed text-zinc-300">
      L&apos;IA force ainsi la traduction du texte non structuré en données
      exploitables, comparables et transparentes.
    </p>
  ),

  s4Title: "4. Cas Pratiques Concrets : L'IA en Action",
  case1Title:
    "Cas Concret n°1 : La construction d'un pôle hospitalier (Gestion des interfaces)",
  case1Context: (
    <>
      <B>Le Contexte :</B> Lors de la construction d&apos;un hôpital, le lot
      «&nbsp;Fluides &amp; Climatisation&nbsp;» et le lot «&nbsp;Second Œuvre /
      Faux-plafonds&nbsp;» sont attribués à deux entreprises distinctes.
    </>
  ),
  case1Traditional: (
    <>
      <B>La méthode traditionnelle :</B> Les deux prestataires signent leurs
      DPGF de manière isolée. Sur le chantier, l&apos;installateur CVC réalise
      que les gaines techniques demandent plus d&apos;espace que prévu,
      bloquant la pose des faux-plafonds. Résultat : arrêt de chantier,
      expertise, et un avenant de 1&nbsp;500&nbsp;000&nbsp;DH pour refaire les études
      de synthèse en urgence.
    </>
  ),
  case1Ai: (
    <>
      <B>L&apos;apport de l&apos;IA &amp; Dialogue Data :</B> En amont,
      l&apos;algorithme analyse les offres et détecte une incohérence de
      tolérance spatiale et de planning entre les deux propositions. Une alerte
      est levée avant la signature. L&apos;acheteur réunit les deux
      fournisseurs lors du dialogue compétitif pour caler les interfaces
      numériques. <B>Coût de l&apos;avenant : 0&nbsp;DH</B>.
    </>
  ),
  image3Alt:
    "Simulation virtuelle d'interfaces et clash test entre lots CVC et faux-plafonds sur un projet hospitalier",
  image3Caption: (
    <>
      Clash test virtuel — détection des conflits d&apos;interfaces avant
      signature (cas hospitalier).
    </>
  ),
  case2Title:
    "Cas Concret n°2 : Projet d'infrastructure ferroviaire (Le piège du PDF)",
  case2Context: (
    <>
      <B>Le Contexte :</B> Un grand donneur d&apos;ordre lance un appel
      d&apos;offres pour l&apos;extension d&apos;une ligne de transport. Un des
      candidats remet une offre très compétitive, inférieure de 12&nbsp;%
      par rapport au marché.
    </>
  ),
  case2Traditional: (
    <>
      <B>La méthode traditionnelle :</B> Séduit par le prix «&nbsp;moins-disant&nbsp;»,
      l&apos;acheteur retient cette offre. Trois mois après le début des
      travaux, le fournisseur réclame un avenant majeur au motif que la nature
      géotechnique du sol ne permet pas d&apos;avancer au rythme prévu. Il se
      prévaut d&apos;une ligne de réserve qu&apos;il avait insérée à la page 184
      de son mémoire technique d&apos;avant-projet.
    </>
  ),
  case2Ai: (
    <>
      <B>L&apos;apport de l&apos;IA &amp; Dialogue Data :</B> Lors de la phase
      d&apos;analyse, le moteur NLP extrait automatiquement cette réserve
      enfouie : «&nbsp;Prix calculé sous réserve d&apos;une absence de roche de
      classe de dureté 5&nbsp;». L&apos;acheteur utilise alors la modélisation
      paramétrique pour recalculer le coût de l&apos;offre si cette roche
      était avérée (probabilité de 60&nbsp;% d&apos;après les rapports
      géologiques). L&apos;offre, initialement moins-disante, s&apos;avère en
      réalité la plus risquée et la plus chère <em>in fine</em>. Le choix se
      porte sur un concurrent plus robuste.
    </>
  ),
  image4Alt:
    "Écran d'analyse croisée comparative des offres fournisseurs et aide à la décision d'achat",
  image4Caption: (
    <>
      Analyse croisée — comparaison des offres au-delà du prix facial (cas
      ferroviaire).
    </>
  ),

  s5Title: "5. Synthèse des Changements de Paradigme",
  s5Intro: (
    <p className="leading-relaxed text-zinc-300">
      Le tableau suivant résume la mutation profonde de la fonction achats sous
      l&apos;impulsion de ces technologies :
    </p>
  ),
  tableHeadStep: "Étape de l'Appel d'Offres",
  tableHeadTraditional: "Méthode Traditionnelle",
  tableHeadAi: "Apport de l'IA & Dialogue Data",
  tableRows: [
    [
      <B key="r1c1">Analyse des offres</B>,
      <>Lecture manuelle et comparaison faciale des prix.</>,
      <>Extraction automatique des réserves et conditions via le NLP.</>,
    ],
    [
      <B key="r2c1">Gestion des interfaces</B>,
      <>
        Découverte des conflits physiques et des retards directement sur le
        chantier.
      </>,
      <>
        «&nbsp;Clash test&nbsp;» virtuel des plannings et des hypothèses
        opérationnelles avant signature.
      </>,
    ],
    [
      <B key="r3c1">Prise de décision</B>,
      <>
        Choix basé sur le moins-disant théorique (souvent source d&apos;avenants
        futurs).
      </>,
      <>
        Recommandation algorithmique de l&apos;offre la plus robuste
        globalement.
      </>,
    ],
  ],

  conclusionTitle: 'Conclusion : Vers le Vrai "Mieux-Disant"',
  conclusionBody: (
    <p className="leading-relaxed text-zinc-300">
      En combinant lotissement intelligent, transparence de la donnée et
      puissance analytique, le rapport de force contractuel évolue radicalement.
      Le bénéfice est triple :
    </p>
  ),
  conclusionBullets: [
    <>
      <B>Désamorçage algorithmique des conflits :</B> Les incohérences de
      plannings ou d&apos;hypothèses entre fournisseurs sont arbitrées et
      budgétées en amont.
    </>,
    <>
      <B>Responsabilisation par la donnée :</B> Le fournisseur ne peut plus
      invoquer un «&nbsp;imprévu&nbsp;» si le système avait identifié ce risque
      et exigé son chiffrage préalable lors de la phase de dialogue.
    </>,
    <>
      <B>Valorisation du «&nbsp;vrai&nbsp;» mieux-disant :</B> Les modèles
      prédictifs mettent en lumière l&apos;offre dont les hypothèses de
      réalisation minimisent réellement l&apos;exposition globale aux surcoûts.
    </>,
  ],
  conclusionOutro: (
    <p className="leading-relaxed text-zinc-300">
      L&apos;ère où l&apos;acheteur se contentait de négocier la ligne finale
      d&apos;un tableau Excel est définitivement révolue. L&apos;innovation
      achats réside désormais dans la maîtrise technologique de
      l&apos;information pré-contractuelle. C&apos;est en forçant la mise en
      lumière et l&apos;analyse croisée des dépendances avant la signature que
      l&apos;on assèche, à la source, le vivier des avenants destructeurs de
      valeur.
    </p>
  ),
  image5Alt:
    "Signature du contrat prédictif et succès du chantier — conclusion innovation achats",
  image5Caption: (
    <>
      Signature éclairée — le contrat robuste avant le premier coup de pelle.
    </>
  ),

  signatureBrand: (
    <strong>
      Elouatiki Frères : innovation achats et maîtrise des avenants par la
      donnée.
    </strong>
  ),
  ctaText: "Discutons de votre stratégie achats data-driven",
};

const EN_CONTENT: ArticleContent = {
  eyebrow: "Procurement Innovation & Artificial Intelligence",
  title:
    "Procurement Innovation: How AI and Smart Lotting Eradicate the Addendum Crisis",
  intro: (
    <>
      <p className="text-base leading-relaxed text-zinc-300 sm:text-lg">
        The management of procurement in complex projects (construction,
        industry, IT) historically suffers from a costly pathology: the
        proliferation of contract addenda. These contractual adjustments, too
        often blamed on &laquo;&nbsp;inevitable surprises&nbsp;&raquo;, drain
        budgets and permanently damage client-supplier relationships.
      </p>
      <p className="text-base leading-relaxed text-zinc-300 sm:text-lg">
        Yet the vast majority of addenda are not a matter of fate. They are the
        direct symptom of an obsolete procurement model, where bill of
        quantities (BOQ, pricing schedules) are signed on the basis of implicit
        assumptions and blind spots. Today, Artificial Intelligence is the
        missing link to rethink contractual engineering — coupling{" "}
        <B>smart lotting</B> and <B>data-driven supplier dialogue</B> with
        advanced algorithms.
      </p>
    </>
  ),
  coverAlt:
    "Predictive procurement analytics dashboard with contract risks and package interfaces",
  coverCaption: (
    <>
      Cover illustration — procurement innovation and addendum control through
      data.
    </>
  ),

  s1Title: "1. The Trap of Traditional Pricing Schedules",
  s1Body: (
    <p className="leading-relaxed text-zinc-300">
      In a classic procurement approach, the buyer splits the project into
      watertight packages and sends static specifications. The supplier responds
      with a price, often protecting themselves against uncertainties — or
      worse — &laquo;&nbsp;low-balling&nbsp;&raquo; the initial price to recover
      later through aggressive addenda.
    </p>
  ),
  s1InterfaceLead: (
    <>
      The fundamental problem lies in the{" "}
      <B>invisibility of interfaces</B>:
    </>
  ),
  s1Bullets: [
    <>
      What are the subcontractor&apos;s <B>real working assumptions</B> (ground
      conditions, access dates)?
    </>,
    <>
      What are their <B>critical interdependencies</B> with other packages?
    </>,
  ],
  s1Outro: (
    <p className="leading-relaxed text-zinc-300">
      It is precisely in these grey areas that AI delivers a genuine
      technological breakthrough.
    </p>
  ),

  s2Title: '2. The "Smart Lotting" Approach Enhanced by AI',
  s2Intro: (
    <p className="leading-relaxed text-zinc-300">
      Procurement innovation starts by ending rigid silos: smart lotting means
      structuring tenders by interdependent functional blocks. AI pushes this
      logic to an unprecedented level of optimisation.
    </p>
  ),
  image1Alt:
    "Predictive procurement risk analysis: interface mapping between packages and addendum probability",
  image1Caption: (
    <>
      Predictive analysis — interface mapping and addendum risk before
      sign-off.
    </>
  ),
  s2aTitle: "A. Predictive Interface Mapping",
  s2aBody: (
    <p className="leading-relaxed text-zinc-300">
      Once dependent on buyer intuition, risk mapping now relies on{" "}
      <B>Machine Learning</B>. By analysing past project history (legacy
      contracts, schedules, addenda incurred), the algorithm statistically
      identifies recurring friction points.
    </p>
  ),
  s2aQuote: (
    <blockquote className="rounded-2xl border border-cyan-500/25 bg-cyan-500/5 px-5 py-4 text-sm leading-relaxed text-zinc-200 sm:text-base">
      <p>
        <B>Sample AI recommendation:</B> &laquo;&nbsp;Warning: in 82% of
        cases, splitting the HVAC package from the suspended ceiling package
        generates a delay addendum. Merge these packages or add a cross-dependency
        clause.&nbsp;&raquo;
      </p>
    </blockquote>
  ),
  s2bTitle: "B. Conditional Pricing and Parametric Modelling",
  s2bBody: (
    <p className="leading-relaxed text-zinc-300">
      Pricing schedules no longer ask for a fixed, frozen price but a
      conditional one. The supplier prices their package against a precise data
      set. With AI, the buyer can instantly simulate the financial impact of a
      variable change (e.g. a 3-week delay in structural works) across all
      subsequent packages, assessing the real cost of risk before signature.
    </p>
  ),

  s3Title: '3. "Data" Supplier Dialogue: NLP to Decode Bids',
  s3Intro: (
    <p className="leading-relaxed text-zinc-300">
      For this model to work, an interactive data-centred dialogue is required
      via a collaborative platform where each supplier must make their
      assumptions explicit. This is where{" "}
      <B>Natural Language Processing (NLP)</B> comes in.
    </p>
  ),
  image2Alt:
    "NLP extraction of hidden data in contracts and supplier technical memos",
  image2Caption: (
    <>
      NLP extraction — buried assumptions in technical memos structured
      automatically.
    </>
  ),
  s3SubTitle: "Extracting Buried Assumptions",
  s3NlpIntro: (
    <p className="leading-relaxed text-zinc-300">
      Suppliers sometimes bury technical reservations in hundreds of pages of
      explanatory memos in PDF format. NLP algorithms automatically scan these
      documents to extract and structure hidden conditions:
    </p>
  ),
  s3Bullets: [
    <>
      <B>Detected baseline assumptions:</B> &laquo;&nbsp;Soil bearing capacity
      assumed at X MPa.&nbsp;&raquo;
    </>,
    <>
      <B>Identified prerequisites:</B> &laquo;&nbsp;Requires a cleared zone with
      levelling tolerance of +/- 2 cm.&nbsp;&raquo;
    </>,
    <>
      <B>Isolated risks:</B> &laquo;&nbsp;Electronic chip lead times not
      guaranteed.&nbsp;&raquo;
    </>,
  ],
  s3Outro: (
    <p className="leading-relaxed text-zinc-300">
      AI thus forces the translation of unstructured text into usable,
      comparable and transparent data.
    </p>
  ),

  s4Title: "4. Concrete Case Studies: AI in Action",
  case1Title:
    "Case Study #1: Building a hospital campus (Interface management)",
  case1Context: (
    <>
      <B>Context:</B> When building a hospital, the &laquo;&nbsp;MEP &amp;
      HVAC&nbsp;&raquo; package and the &laquo;&nbsp;Finishes / Suspended
      ceilings&nbsp;&raquo; package are awarded to two separate contractors.
    </>
  ),
  case1Traditional: (
    <>
      <B>Traditional method:</B> Both suppliers sign their pricing schedules in
      isolation. On site, the HVAC installer finds that ductwork needs more
      space than planned, blocking ceiling installation. Result: site shutdown,
      expert review, and a 1,500,000&nbsp;DH addendum to redo coordination studies
      urgently.
    </>
  ),
  case1Ai: (
    <>
      <B>AI &amp; Data Dialogue contribution:</B> Upstream, the algorithm analyses
      bids and detects a spatial tolerance and schedule inconsistency between
      the two proposals. An alert is raised before signature. The buyer brings
      both suppliers together during competitive dialogue to align digital
      interfaces. <B>Addendum cost: 0&nbsp;DH</B>.
    </>
  ),
  image3Alt:
    "Virtual interface simulation and clash test between HVAC and ceiling packages on a hospital project",
  image3Caption: (
    <>
      Virtual clash test — interface conflicts detected before sign-off
      (hospital case).
    </>
  ),
  case2Title:
    "Case Study #2: Rail infrastructure project (The PDF trap)",
  case2Context: (
    <>
      <B>Context:</B> A major client launches a tender for a transport line
      extension. One bidder submits a highly competitive offer, 12% below
      market.
    </>
  ),
  case2Traditional: (
    <>
      <B>Traditional method:</B> Seduced by the lowest price, the buyer selects
      this bid. Three months after works start, the supplier claims a major
      addendum because ground conditions prevent the planned pace. They invoke a
      reservation buried on page 184 of their design-phase technical memo.
    </>
  ),
  case2Ai: (
    <>
      <B>AI &amp; Data Dialogue contribution:</B> During analysis, the NLP engine
      automatically extracts this buried reservation: &laquo;&nbsp;Price
      calculated subject to absence of Class 5 hardness rock.&nbsp;&raquo; The
      buyer then uses parametric modelling to recalculate the bid cost if that
      rock were present (60% probability per geological reports). The initially
      lowest bid proves the riskiest and most expensive <em>in fine</em>. A
      more robust competitor is selected.
    </>
  ),
  image4Alt:
    "Cross-analysis screen comparing supplier bids and procurement decision support",
  image4Caption: (
    <>
      Cross-analysis — bid comparison beyond face value (rail case).
    </>
  ),

  s5Title: "5. Paradigm Shift Summary",
  s5Intro: (
    <p className="leading-relaxed text-zinc-300">
      The following table summarises the deep transformation of procurement
      driven by these technologies:
    </p>
  ),
  tableHeadStep: "Tender Stage",
  tableHeadTraditional: "Traditional Method",
  tableHeadAi: "AI & Data Dialogue Contribution",
  tableRows: [
    [
      <B key="r1c1">Bid analysis</B>,
      <>Manual reading and face-value price comparison.</>,
      <>Automatic extraction of reservations and conditions via NLP.</>,
    ],
    [
      <B key="r2c1">Interface management</B>,
      <>
        Physical conflicts and delays discovered directly on site.
      </>,
      <>
        Virtual &laquo;&nbsp;clash test&nbsp;&raquo; of schedules and operational
        assumptions before signature.
      </>,
    ],
    [
      <B key="r3c1">Decision-making</B>,
      <>
        Choice based on theoretical lowest price (often a source of future
        addenda).
      </>,
      <>
        Algorithmic recommendation of the most robust overall bid.
      </>,
    ],
  ],

  conclusionTitle: 'Conclusion: Towards the True "Best Value"',
  conclusionBody: (
    <p className="leading-relaxed text-zinc-300">
      By combining smart lotting, data transparency and analytical power, the
      contractual balance of power shifts radically. The benefit is threefold:
    </p>
  ),
  conclusionBullets: [
    <>
      <B>Algorithmic conflict defusing:</B> Schedule or assumption inconsistencies
      between suppliers are arbitrated and budgeted upstream.
    </>,
    <>
      <B>Data-driven accountability:</B> A supplier can no longer invoke a
      &laquo;&nbsp;surprise&nbsp;&raquo; if the system had identified that risk
      and required upfront pricing during the dialogue phase.
    </>,
    <>
      <B>True best-value recognition:</B> Predictive models highlight the bid
      whose delivery assumptions genuinely minimise overall exposure to
      overruns.
    </>,
  ],
  conclusionOutro: (
    <p className="leading-relaxed text-zinc-300">
      The era when buyers merely negotiated the bottom line of a spreadsheet is
      over. Procurement innovation now lies in technological mastery of
      pre-contractual information. By forcing dependencies into the open and
      cross-analysing them before signature, we dry up the pool of value-destroying
      addenda at source.
    </p>
  ),
  image5Alt:
    "Predictive contract signature and project success — procurement innovation conclusion",
  image5Caption: (
    <>
      Informed signature — a robust contract before the first shovel hits the
      ground.
    </>
  ),

  signatureBrand: (
    <strong>
      Elouatiki Frères: procurement innovation and addendum control through
      data.
    </strong>
  ),
  ctaText: "Let's discuss your data-driven procurement strategy",
};

function getContent(locale: AppLocale): ArticleContent {
  if (locale === "fr") return FR_CONTENT;
  return EN_CONTENT;
}

export async function InnovationAchatsArticle() {
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
        <p className="leading-relaxed text-zinc-300">{c.s1InterfaceLead}</p>
        <ul className="list-disc space-y-2 pl-6 text-zinc-300 marker:text-cyan-400">
          {c.s1Bullets.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
        {c.s1Outro}
      </section>

      <section className="content-block mt-12 space-y-6">
        <h2 className="section-title font-[family-name:var(--font-space-grotesk)] text-2xl font-bold text-white sm:text-3xl">
          {c.s2Title}
        </h2>
        {c.s2Intro}

        <ArticleFigure
          src={IMAGE1_SRC}
          alt={c.image1Alt}
          caption={c.image1Caption}
          compact
        />

        <div className="space-y-5">
          <h3 className="font-[family-name:var(--font-space-grotesk)] text-xl font-semibold text-white sm:text-2xl">
            {c.s2aTitle}
          </h3>
          {c.s2aBody}
          {c.s2aQuote}
        </div>

        <div className="space-y-5">
          <h3 className="font-[family-name:var(--font-space-grotesk)] text-xl font-semibold text-white sm:text-2xl">
            {c.s2bTitle}
          </h3>
          {c.s2bBody}
        </div>
      </section>

      <section className="content-block mt-12 space-y-6">
        <h2 className="section-title font-[family-name:var(--font-space-grotesk)] text-2xl font-bold text-white sm:text-3xl">
          {c.s3Title}
        </h2>
        {c.s3Intro}

        <div className="space-y-5">
          <h3 className="font-[family-name:var(--font-space-grotesk)] text-xl font-semibold text-white sm:text-2xl">
            {c.s3SubTitle}
          </h3>
          {c.s3NlpIntro}
          <ul className="list-disc space-y-2 pl-6 text-zinc-300 marker:text-cyan-400">
            {c.s3Bullets.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
          {c.s3Outro}
        </div>

        <ArticleFigure
          src={IMAGE2_SRC}
          alt={c.image2Alt}
          caption={c.image2Caption}
          compact
        />
      </section>

      <section className="content-block mt-12 space-y-8">
        <h2 className="section-title font-[family-name:var(--font-space-grotesk)] text-2xl font-bold text-white sm:text-3xl">
          {c.s4Title}
        </h2>

        <div className="space-y-4 rounded-2xl border border-white/10 bg-zinc-900/30 p-5 sm:p-6">
          <h3 className="font-[family-name:var(--font-space-grotesk)] text-xl font-semibold text-white sm:text-2xl">
            {c.case1Title}
          </h3>
          <p className="leading-relaxed text-zinc-300">{c.case1Context}</p>
          <p className="leading-relaxed text-zinc-300">{c.case1Traditional}</p>
          <p className="leading-relaxed text-zinc-300">{c.case1Ai}</p>
        </div>

        <ArticleFigure
          src={IMAGE3_SRC}
          alt={c.image3Alt}
          caption={c.image3Caption}
          compact
        />

        <div className="space-y-4 rounded-2xl border border-white/10 bg-zinc-900/30 p-5 sm:p-6">
          <h3 className="font-[family-name:var(--font-space-grotesk)] text-xl font-semibold text-white sm:text-2xl">
            {c.case2Title}
          </h3>
          <p className="leading-relaxed text-zinc-300">{c.case2Context}</p>
          <p className="leading-relaxed text-zinc-300">{c.case2Traditional}</p>
          <p className="leading-relaxed text-zinc-300">{c.case2Ai}</p>
        </div>

        <ArticleFigure
          src={IMAGE4_SRC}
          alt={c.image4Alt}
          caption={c.image4Caption}
          compact
        />
      </section>

      <section className="content-block mt-12 space-y-6">
        <h2 className="section-title font-[family-name:var(--font-space-grotesk)] text-2xl font-bold text-white sm:text-3xl">
          {c.s5Title}
        </h2>
        {c.s5Intro}

        <div className="overflow-hidden rounded-xl border border-white/10 shadow-xl shadow-black/30">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[640px] border-collapse text-sm sm:text-base">
              <thead>
                <tr className="bg-zinc-800/90 text-left text-white">
                  <th className="border-b border-white/15 px-4 py-3 font-semibold sm:px-5 sm:py-4">
                    {c.tableHeadStep}
                  </th>
                  <th className="border-b border-white/15 px-4 py-3 font-semibold sm:px-5 sm:py-4">
                    {c.tableHeadTraditional}
                  </th>
                  <th className="border-b border-white/15 px-4 py-3 font-semibold sm:px-5 sm:py-4">
                    {c.tableHeadAi}
                  </th>
                </tr>
              </thead>
              <tbody className="bg-zinc-900/40 text-zinc-300">
                {c.tableRows.map(([step, traditional, ai], idx) => (
                  <tr
                    key={idx}
                    className="border-b border-white/8 transition hover:bg-white/[0.03]"
                  >
                    <td className="align-top px-4 py-3 font-medium text-cyan-100/95 sm:px-5 sm:py-4">
                      {step}
                    </td>
                    <td className="align-top px-4 py-3 leading-relaxed sm:px-5 sm:py-4">
                      {traditional}
                    </td>
                    <td className="align-top px-4 py-3 leading-relaxed sm:px-5 sm:py-4">
                      {ai}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="content-block mt-12 space-y-5">
        <h2 className="section-title font-[family-name:var(--font-space-grotesk)] text-2xl font-bold text-white sm:text-3xl">
          {c.conclusionTitle}
        </h2>
        {c.conclusionBody}
        <ol className="list-decimal space-y-3 pl-6 text-zinc-300 marker:text-cyan-400">
          {c.conclusionBullets.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ol>
        {c.conclusionOutro}

        <ArticleFigure
          src={IMAGE5_SRC}
          alt={c.image5Alt}
          caption={c.image5Caption}
          compact
        />
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
