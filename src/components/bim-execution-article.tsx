/**
 * Article de blog : « BIM exécution → COBie → DOE ».
 *
 * Server component async : la locale active est récupérée via next-intl, et
 * un objet de contenu localisé (FR / EN, AR -> fallback EN) fournit les
 * chaînes et nœuds JSX du corps de l'article.
 */

import { CalendarDays, Clock } from "lucide-react";
import Image from "next/image";
import { getLocale, getTranslations } from "next-intl/server";
import type { ReactNode } from "react";

import { Link } from "@/i18n/navigation";
import type { AppLocale } from "@/i18n/routing";

const MEDIA_BASE = "/media/blog/BIM%20ex%C3%A9cution";

const COVER_IMAGE_SRC = `${MEDIA_BASE}/Gemini_Generated_Image_si6qrnsi6qrnsi6q.png`;
const DOE_CEMETERY_IMAGE_SRC = `${MEDIA_BASE}/Gemini_Generated_Image_si6qrnsi6qrnsi6q%20(1).png`;
const BIM_FORGE_IMAGE_SRC = `${MEDIA_BASE}/Gemini_Generated_Image_si6qrnsi6qrnsi6q%20(2).png`;
const DOE_VIVANT_IMAGE_SRC = `${MEDIA_BASE}/Gemini_Generated_Image_si6qrnsi6qrnsi6q%20(3).png`;
const GOLDEN_RULES_IMAGE_SRC = `${MEDIA_BASE}/Gemini_Generated_Image_si6qrnsi6qrnsi6q%20(4).png`;

const ARTICLE_AUTHOR = "EL OUATIKI Yasser";
const ARTICLE_PUBLISHED_AT = "2023-02-15";
const ARTICLE_READING_MINUTES = 10;

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
  s1Thesis: ReactNode;
  s1ImageAlt: string;
  s1ImageCaption: ReactNode;

  s2Title: string;
  s2Intro: ReactNode;
  s2Geometry: ReactNode;
  s2CtaExample: ReactNode;
  s2CtaItems: [ReactNode, ReactNode, ReactNode, ReactNode, ReactNode];
  s2ResponsibilityTitle: string;
  s2ResponsibilityBody: ReactNode;
  s2ImageAlt: string;
  s2ImageCaption: ReactNode;

  s3Title: string;
  s3Intro: ReactNode;
  s3Vulgarize: ReactNode;
  s3EntitiesTitle: string;
  s3Entities: [ReactNode, ReactNode, ReactNode, ReactNode];
  s3BridgeTitle: string;
  s3BridgeBody: ReactNode;
  s3Quote: ReactNode;

  s4Title: string;
  s4Intro: ReactNode;
  s4DayOneTitle: string;
  s4DayOneBody: ReactNode;
  s4RoiTitle: string;
  s4RoiBullets: [ReactNode, ReactNode, ReactNode];
  s4ImageAlt: string;
  s4ImageCaption: ReactNode;

  s5Title: string;
  s5Intro: ReactNode;
  s5Rules: [ReactNode, ReactNode, ReactNode, ReactNode, ReactNode];
  s5ImageAlt: string;
  s5ImageCaption: ReactNode;

  s6Title: string;
  s6Body: ReactNode;

  signatureBrand: ReactNode;
  ctaText: string;
};

const FR_CONTENT: ArticleContent = {
  eyebrow: "BIM exécution & Facility Management",
  title: "BIM exécution → COBie → DOE : une même chaîne de vérité",
  intro: (
    <>
      <p className="text-base leading-relaxed text-zinc-300 sm:text-lg">
        <B>Comment structurer les attributs dès le chantier</B> pour livrer un
        actif exploitable, pas une archive morte.
      </p>
    </>
  ),
  coverAlt:
    "Chaîne BIM exécution : professionnel sur chantier avec tablette, flux de données numériques et panneaux COBie vers un bâtiment intelligent",
  coverCaption: (
    <>
      Illustration de couverture — de la maquette d&apos;exécution au jumeau
      numérique d&apos;exploitation.
    </>
  ),

  s1Title:
    "1. Introduction : le cimetière des données et le mythe du DOE numérique",
  s1Body: (
    <>
      <p className="leading-relaxed text-zinc-300">
        C&apos;est une scène que tout Directeur Immobilier ou Responsable de
        site a vécue au moins une fois. Le jour de la réception de
        l&apos;ouvrage, après les poignées de main et les sourires de façade,
        on vous remet les clés du bâtiment. Et avec ces clés, on vous livre le
        fameux DOE (Dossier des Ouvrages Exécutés). Autrefois, il
        s&apos;agissait d&apos;une montagne de classeurs poussiéreux ;
        aujourd&apos;hui, c&apos;est une clé USB contenant des giga-octets de
        fichiers PDF non indexés et des maquettes IFC (BIM) d&apos;une lourdeur
        paralysante.
      </p>
      <p className="leading-relaxed text-zinc-300">
        Le constat de l&apos;industrie est sans appel et effrayant :{" "}
        <B>près de 95&nbsp;% des données collectées pendant la phase de
        conception et de construction sont perdues ou inutilisables au moment
        de la livraison.</B>
      </p>
      <p className="leading-relaxed text-zinc-300">
        Ce «&nbsp;DOE numérique&nbsp;», souvent survendu lors des appels
        d&apos;offres, se transforme en une véritable archive morte. Il dort
        dans un serveur, tandis que les équipes de Maintenance et de Facility
        Management (FM) passent les six premiers mois de l&apos;exploitation à
        arpenter les couloirs avec des blocs-notes pour recenser les
        équipements, relever les numéros de série et recréer, à la main, une
        base de données dans leur GMAO.
      </p>
    </>
  ),
  s1Thesis: (
    <p className="leading-relaxed text-zinc-300">
      <B>La thèse de cet article est simple, mais radicale :</B> pour qu&apos;un
      actif immobilier soit réellement exploitable dès le premier jour, la
      donnée doit couler sans aucune rupture le long d&apos;une chaîne de
      vérité unique. Cette chaîne commence dans la{" "}
      <B>maquette BIM d&apos;exécution</B>, se structure grâce au{" "}
      <B>standard COBie</B>, et culmine dans la livraison d&apos;un{" "}
      <B>jumeau numérique (ou DOE vivant)</B> pour la
      Gestion-Exploitation-Maintenance (GEM).
    </p>
  ),
  s1ImageAlt:
    "Bureau encombré de plans papier et serveur verrouillé symbolisant 95 % de données perdues et un DOE numérique inaccessible",
  s1ImageCaption: (
    <>
      Le paradoxe du DOE : archives papier, clé USB non structurée ou serveur
      «&nbsp;gelé&nbsp;» — la donnée n&apos;atteint pas l&apos;exploitant.
    </>
  ),

  s2Title: "2. Le BIM d'exécution, la forge de la donnée utile",
  s2Intro: (
    <p className="leading-relaxed text-zinc-300">
      Pendant trop longtemps, le BIM (Building Information Modeling) a été
      confondu avec la modélisation 3D de haute voltige. On s&apos;est focalisé
      sur la géométrie : jusqu&apos;où modéliser le moindre boulon d&apos;une
      poutre métallique ? Pourtant, du point de vue de l&apos;exploitant, une
      géométrie parfaite mais vide d&apos;informations ne sert à rien.
    </p>
  ),
  s2Geometry: (
    <p className="leading-relaxed text-zinc-300">
      <B>La géométrie n&apos;est que l&apos;enveloppe ; ce qui compte, ce sont
      les attributs.</B>
    </p>
  ),
  s2CtaExample: (
    <p className="leading-relaxed text-zinc-300">
      Prenons l&apos;exemple d&apos;une Centrale de Traitement d&apos;Air (CTA)
      située dans un local technique. Le mainteneur n&apos;a pas besoin de
      savoir que le capot de la CTA a été modélisé avec un niveau de détail
      géométrique (LOD) extrême. Il a besoin de connaître :
    </p>
  ),
  s2CtaItems: [
    <>La marque et le modèle exacts (tels que posés sur le chantier).</>,
    <>Le numéro de série de l&apos;équipement.</>,
    <>La date de début et de fin de garantie.</>,
    <>
      La référence exacte des filtres à commander pour la maintenance
      préventive.
    </>,
    <>Le lien vers le manuel d&apos;utilisation ou le PV d&apos;essais.</>,
  ],
  s2ResponsibilityTitle: "Responsabiliser les entreprises « au fil de l'eau »",
  s2ResponsibilityBody: (
    <>
      <p className="leading-relaxed text-zinc-300">
        C&apos;est ici que le <B>BIM d&apos;exécution (BIM EXE)</B> devient la
        «&nbsp;forge&nbsp;» de la donnée. Ce n&apos;est plus un simple outil de
        synthèse spatiale pour éviter les clashs entre les tuyaux de plomberie
        et les gaines de ventilation. C&apos;est la première base de données de
        l&apos;actif.
      </p>
      <p className="leading-relaxed text-zinc-300">
        Le plus grand risque sur un chantier est le «&nbsp;syndrome de la
        dernière minute&nbsp;». Les entreprises de travaux compilent
        historiquement leurs fiches techniques à trois semaines de la
        réception. Dans un processus BIM, c&apos;est mortel. Le renseignement
        des attributs doit se faire <B>au fil de l&apos;eau</B> : données
        théoriques au VISA, données réelles (numéro de série, date de pose) dès
        la pose sur le terrain, souvent via tablettes. L&apos;entreprise ne
        livre plus seulement un objet physique ; elle livre le double numérique
        de cet objet, en temps réel.
      </p>
    </>
  ),
  s2ImageAlt:
    "Maquette BIM 3D d'une centrale de traitement d'air avec panneau COBie.Component et tableau de bord GMAO",
  s2ImageCaption: (
    <>
      BIM d&apos;exécution : la CTA modélisée avec ses attributs COBie prêts
      pour l&apos;exploitation.
    </>
  ),

  s3Title: "3. COBie, le traducteur universel (le pivot de la chaîne)",
  s3Intro: (
    <p className="leading-relaxed text-zinc-300">
      Une fois que les entreprises ont renseigné les attributs dans les
      maquettes Revit, Archicad ou Tekla, nous faisons face à un nouveau
      problème. Les logiciels de maintenance (GMAO / IWMS) ne «&nbsp;parlent&nbsp;»
      pas nativement le langage complexe des maquettes 3D. Un technicien de
      maintenance n&apos;a ni le logiciel, ni le PC puissant, ni les compétences
      pour ouvrir une maquette IFC de 3&nbsp;Go juste pour trouver la référence
      d&apos;une vanne.
    </p>
  ),
  s3Vulgarize: (
    <p className="leading-relaxed text-zinc-300">
      C&apos;est ici qu&apos;intervient{" "}
      <B>COBie (Construction Operations Building information exchange)</B>.
      COBie n&apos;est pas un logiciel : c&apos;est un standard international de
      structuration de la donnée, souvent matérialisé sous la forme d&apos;un
      simple tableur (Excel). Il agit comme un <B>traducteur universel</B> ou
      un «&nbsp;extracteur de jus&nbsp;» qui prend la maquette BIM complexe et
      en extrait la substantifique moelle relationnelle.
    </p>
  ),
  s3EntitiesTitle: "Les entités COBie essentielles",
  s3Entities: [
    <>
      <B>Facility (le bâtiment) :</B> quel est ce bâtiment ?
    </>,
    <>
      <B>Floor &amp; Space (étages et locaux) :</B> où sont les pièces ? (ex. :
      Local technique R-1).
    </>,
    <>
      <B>Type &amp; Component (types et occurrences) :</B> qu&apos;y a-t-il dans
      ce local ? (ex. : 2 pompes de circulation de marque X).
    </>,
    <>
      <B>Job (interventions) :</B> quelles maintenances préventives sont
      associées ?
    </>,
  ],
  s3BridgeTitle: "Le pont indispensable entre Construction et Exploitation",
  s3BridgeBody: (
    <p className="leading-relaxed text-zinc-300">
      COBie est le pivot de la chaîne de vérité. Le monde de la construction
      produit de la géométrie et de la topologie spatialisée (IFC/Revit). Le
      monde de la gestion immobilière consomme des bases de données
      relationnelles (Excel/SQL/GMAO). COBie permet de passer de l&apos;un à
      l&apos;autre de manière automatisée — tableau structuré, propre,
      standardisé, que n&apos;importe quelle base de données peut avaler en
      quelques clics. C&apos;est la garantie que l&apos;information n&apos;est
      ni altérée ni perdue lors du transfert de propriété.
    </p>
  ),
  s3Quote: (
    <>
      «&nbsp;COBie transforme une maquette lourde en données relationnelles
      prêtes pour la GMAO — sans ressaisie manuelle à la réception.&nbsp;»
    </>
  ),

  s4Title: "4. Le DOE numérique vivant, le graal de la GEM",
  s4Intro: (
    <p className="leading-relaxed text-zinc-300">
      Si le BIM d&apos;exécution est bien mené et que l&apos;export COBie est
      rigoureux, nous atteignons enfin le but ultime : le{" "}
      <B>DOE numérique vivant</B>. Fini le PDF qui dort dans un placard ; place
      au jumeau numérique d&apos;exploitation.
    </p>
  ),
  s4DayOneTitle: "Le « Day One Ready »",
  s4DayOneBody: (
  <>
      <p className="leading-relaxed text-zinc-300">
        L&apos;intégration fluide des données COBie dans l&apos;outil de GMAO
        (ou l&apos;IWMS) permet d&apos;atteindre le statut de{" "}
        <em>Day One Ready</em>. Dès l&apos;inauguration du bâtiment, le
        mainteneur se connecte à sa plateforme : tous les locaux sont créés,
        tous les équipements (ventilo-convecteurs, luminaires, portes
        coupe-feu, TGBT) sont référencés avec leurs attributs exacts et
        localisés. Les plans de maintenance préventive liés aux types COBie
        sont déjà programmés.
      </p>
      <p className="leading-relaxed text-zinc-300">
        Aucune ressaisie manuelle n&apos;est nécessaire. L&apos;équipe
        d&apos;exploitation est opérationnelle immédiatement.
      </p>
    </>
  ),
  s4RoiTitle: "Le ROI pour la Maîtrise d'Ouvrage",
  s4RoiBullets: [
    <>
      <B>Gain de temps sur la maintenance corrective :</B> lorsqu&apos;une
      alarme se déclenche, le technicien connaît immédiatement le local, le
      modèle et les pièces à commander avant même de se déplacer.
    </>,
    <>
      <B>Maîtrise des garanties :</B> fini le remplacement aux frais de
      l&apos;exploitant d&apos;un équipement encore sous garantie, faute de
      date retrouvée. L&apos;attribut déclenche une alerte.
    </>,
    <>
      <B>Appels d&apos;offres FM optimisés :</B> une base COBie parfaite réduit
      l&apos;incertitude des mainteneurs et affine les devis.
    </>,
  ],
  s4ImageAlt:
    "Technicien de maintenance avec tablette et interface COBie en réalité augmentée sur une centrale de traitement d'air",
  s4ImageCaption: (
    <>
      DOE vivant : maintenance préventive, garanties et pièces détachées reliées
      au jumeau numérique.
    </>
  ),

  s5Title: "5. Guide pratique : 5 règles d'or pour réussir sur le chantier",
  s5Intro: (
    <p className="leading-relaxed text-zinc-300">
      Pour que cette continuité numérique devienne réalité, voici une check-list
      pragmatique destinée aux directeurs de travaux et responsables BIM :
    </p>
  ),
  s5Rules: [
    <>
      <B>Règle n°1 — Définir le dictionnaire d&apos;attributs dès la Convention
      BIM.</B> Les EIR (Employer&apos;s Information Requirements) doivent lister
      explicitement les paramètres attendus par équipement. Concentrez-vous sur
      les équipements critiques (LOIN — Level of Information Need).
    </>,
    <>
      <B>Règle n°2 — Automatiser les contrôles de conformité.</B> Utilisez des
      outils de <em>model checking</em> (Solibri, Navisworks) : si l&apos;objet
      est une porte coupe-feu, le paramètre «&nbsp;Degré de résistance au
      feu&nbsp;» doit être rempli, sinon erreur.
    </>,
    <>
      <B>Règle n°3 — Lier la donnée à la finance.</B> Indexez la validation des
      situations de travaux sur l&apos;avancement de la maquette : pas de
      données = pas de paiement.
    </>,
    <>
      <B>Règle n°4 — Impliquer l&apos;exploitant (FM) le plus tôt possible.</B>{" "}
      Le futur mainteneur est l&apos;utilisateur final de la donnée COBie ; ses
      retours ajustent le tir avant figement des maquettes.
    </>,
    <>
      <B>Règle n°5 — Tester l&apos;intégration COBie → GMAO à blanc.</B>{" "}
      Organisez un test d&apos;export sur un échantillon (un étage) en fin
      d&apos;études d&apos;exécution, avant le rush de la réception.
    </>,
  ],
  s5ImageAlt:
    "Infographie des cinq règles d'or du BIM exécution : dictionnaire d'attributs, contrôles automatisés, paiement lié aux données, FM impliqué tôt, test COBie",
  s5ImageCaption: (
    <>
      Les cinq règles d&apos;or — de la Convention BIM au jumeau numérique
      actif.
    </>
  ),

  s6Title: "6. Conclusion : arrêtons de livrer des géométries vides",
  s6Body: (
    <>
      <p className="leading-relaxed text-zinc-300">
        La construction d&apos;un bâtiment moderne ne s&apos;achève plus le jour
        de la remise des clés physiques. Le véritable passage de témoin se fait
        lors de la remise des <B>clés numériques</B>.
      </p>
      <p className="leading-relaxed text-zinc-300">
        Le BIM d&apos;exécution, structuré par la rigueur du standard COBie, est
        le seul chemin viable pour aboutir à un DOE numérique vivant, socle de
        la Gestion-Exploitation-Maintenance de demain. L&apos;enjeu n&apos;est
        plus de savoir faire un beau rendu 3D, mais la{" "}
        <B>continuité numérique de la donnée</B>, sa fiabilité et sa facilité
        d&apos;accès.
      </p>
      <p className="leading-relaxed text-zinc-300">
        Il est temps pour la filière d&apos;évoluer : la Maîtrise d&apos;Ouvrage
        doit exiger de la data structurée et la payer à sa juste valeur ; les
        entreprises doivent intégrer la gestion des attributs comme un geste
        métier aussi naturel que le coulage du béton. Car construire un Smart
        Building sans fournir la base de données exploitable qui
        l&apos;accompagne, c&apos;est livrer une Formule&nbsp;1 sans le volant
        ni le tableau de bord.
      </p>
    </>
  ),

  signatureBrand: (
    <strong>
      Elouatiki Frères : la continuité numérique du chantier à
      l&apos;exploitation.
    </strong>
  ),
  ctaText: "Parlons de votre chaîne BIM → COBie → DOE",
};

const EN_CONTENT: ArticleContent = {
  eyebrow: "Execution BIM & Facility Management",
  title: "Execution BIM → COBie → handover: one chain of truth",
  intro: (
    <>
      <p className="text-base leading-relaxed text-zinc-300 sm:text-lg">
        <B>How to structure attributes on site</B> to deliver an operable
        asset — not a dead archive.
      </p>
    </>
  ),
  coverAlt:
    "BIM execution chain: professional on site with tablet, digital data streams and COBie panels toward a smart building",
  coverCaption: (
    <>
      Cover illustration — from the execution model to the operations digital
      twin.
    </>
  ),

  s1Title:
    "1. Introduction: the data graveyard and the myth of the digital handover file",
  s1Body: (
    <>
      <p className="leading-relaxed text-zinc-300">
        Every Real Estate Director or Site Manager has lived this scene at
        least once. On handover day, after the handshakes, you receive the
        building keys — and the famous DOE (Dossier des Ouvrages Exécutés /
        as-built documentation). Once dusty binders; today a USB stick packed
        with unindexed PDFs and IFC BIM models too heavy to open.
      </p>
      <p className="leading-relaxed text-zinc-300">
        Industry findings are stark:{" "}
        <B>roughly 95% of data collected during design and construction is
        lost or unusable at delivery.</B>
      </p>
      <p className="leading-relaxed text-zinc-300">
        This &laquo;&nbsp;digital DOE&nbsp;&raquo;, often oversold in tenders,
        becomes a dead archive on a server while Maintenance and Facility
        Management teams spend their first six months of operations walking
        corridors with notepads to inventory equipment, record serial numbers
        and manually rebuild a database in their CMMS.
      </p>
    </>
  ),
  s1Thesis: (
    <p className="leading-relaxed text-zinc-300">
      <B>Our thesis is simple but radical:</B> for a real-estate asset to be
      truly operable from day one, data must flow without breakage along a
      single chain of truth. It starts in the <B>execution BIM model</B>, is
      structured through the <B>COBie standard</B>, and culminates in a{" "}
      <B>digital twin (living handover file)</B> for Operations-Maintenance
      Management.
    </p>
  ),
  s1ImageAlt:
    "Cluttered desk with paper plans and locked server symbolising 95% lost data and inaccessible digital handover",
  s1ImageCaption: (
    <>
      The handover paradox: paper archives, unstructured USB keys or a
      &laquo;&nbsp;frozen&nbsp;&raquo; server — data never reaches operations.
    </>
  ),

  s2Title: "2. Execution BIM: forging useful data",
  s2Intro: (
    <p className="leading-relaxed text-zinc-300">
      For too long, BIM was confused with high-end 3D modelling. We obsessed over
      geometry: how far to model every bolt on a steel beam? Yet for the
      operator, perfect geometry with no information is worthless.
    </p>
  ),
  s2Geometry: (
    <p className="leading-relaxed text-zinc-300">
      <B>Geometry is only the envelope; what matters are attributes.</B>
    </p>
  ),
  s2CtaExample: (
    <p className="leading-relaxed text-zinc-300">
      Take an Air Handling Unit (AHU) in a plant room. The maintainer does not
      need extreme geometric LOD on the casing. They need:
    </p>
  ),
  s2CtaItems: [
    <>Exact make and model (as installed on site).</>,
    <>Equipment serial number.</>,
    <>Warranty start and end dates.</>,
    <>Exact filter references for preventive maintenance.</>,
    <>Links to the user manual or test reports.</>,
  ],
  s2ResponsibilityTitle: "Holding contractors accountable « as you go »",
  s2ResponsibilityBody: (
    <>
      <p className="leading-relaxed text-zinc-300">
        This is where <B>execution BIM (BIM EXE)</B> becomes the data
        &laquo;&nbsp;forge&nbsp;&raquo;. It is no longer just spatial
        coordination to avoid clashes between plumbing and ducts — it is the
        asset&apos;s first database.
      </p>
      <p className="leading-relaxed text-zinc-300">
        The biggest site risk is &laquo;&nbsp;last-minute syndrome&nbsp;&raquo;.
        Trade contractors historically compile datasheets three weeks before
        handover. In a BIM process, that is fatal. Attributes must be filled{" "}
        <B>as you go</B>: design data at approval, real data (serial, install
        date) when installed — often via tablets. The contractor delivers not
        only a physical object but its digital twin in real time.
      </p>
    </>
  ),
  s2ImageAlt:
    "3D BIM model of an air handling unit with COBie.Component panel and CMMS dashboard",
  s2ImageCaption: (
    <>
      Execution BIM: the AHU model with COBie attributes ready for operations.
    </>
  ),

  s3Title: "3. COBie, the universal translator (the chain pivot)",
  s3Intro: (
    <p className="leading-relaxed text-zinc-300">
      Once contractors have filled attributes in Revit, Archicad or Tekla
      models, another problem appears. Maintenance software (CMMS / IWMS) does
      not natively speak complex 3D model language. A technician has neither
      the software, the workstation nor the skills to open a 3&nbsp;GB IFC
      file just to find a valve tag.
    </p>
  ),
  s3Vulgarize: (
    <p className="leading-relaxed text-zinc-300">
      This is where{" "}
      <B>COBie (Construction Operations Building information exchange)</B>{" "}
      comes in. COBie is not software: it is an international data-structuring
      standard, often delivered as a simple spreadsheet (Excel). It acts as a{" "}
      <B>universal translator</B> that extracts relational essence from a
      heavy BIM model.
    </p>
  ),
  s3EntitiesTitle: "Essential COBie entities",
  s3Entities: [
    <>
      <B>Facility:</B> what building is this?
    </>,
    <>
      <B>Floor &amp; Space:</B> where are the rooms? (e.g. Plant room B-1).
    </>,
    <>
      <B>Type &amp; Component:</B> what is in that space? (e.g. two circulation
      pumps, brand X).
    </>,
    <>
      <B>Job:</B> what preventive maintenance is linked?
    </>,
  ],
  s3BridgeTitle: "The essential bridge between Construction and Operations",
  s3BridgeBody: (
    <p className="leading-relaxed text-zinc-300">
      COBie is the pivot of the chain of truth. Construction produces geometry
      and spatial topology (IFC/Revit). Real-estate management consumes
      relational databases (Excel/SQL/CMMS). COBie automates the switch —
      clean, standard tables any database can ingest in clicks. Information is
      neither altered nor lost at the property transfer.
    </p>
  ),
  s3Quote: (
    <>
      &laquo;&nbsp;COBie turns a heavy model into CMMS-ready relational data —
      with no manual re-entry at handover.&nbsp;&raquo;
    </>
  ),

  s4Title: "4. The living digital handover file: the GEM holy grail",
  s4Intro: (
    <p className="leading-relaxed text-zinc-300">
      When execution BIM is done right and the COBie export is rigorous, we
      reach the ultimate goal: the <B>living digital handover file</B>. No more
      PDFs in a drawer — welcome to the operations digital twin.
    </p>
  ),
  s4DayOneTitle: "« Day One Ready »",
  s4DayOneBody: (
    <>
      <p className="leading-relaxed text-zinc-300">
        Smooth COBie integration into CMMS (or IWMS) delivers{" "}
        <em>Day One Ready</em> status. From inauguration, the maintainer logs
        in: every space exists, every asset (fan-coils, luminaires, fire doors,
        switchboards) is tagged with exact attributes and location. Preventive
        maintenance plans linked to COBie types are already scheduled.
      </p>
      <p className="leading-relaxed text-zinc-300">
        No manual re-entry. The operations team is immediately productive.
      </p>
    </>
  ),
  s4RoiTitle: "ROI for the project owner",
  s4RoiBullets: [
    <>
      <B>Faster corrective maintenance:</B> when an alarm fires, the technician
      already knows the room, model and parts to order before travelling.
    </>,
    <>
      <B>Warranty control:</B> no more replacing equipment still under warranty
      because the date was lost — the attribute triggers an alert.
    </>,
    <>
      <B>Sharper FM tenders:</B> a perfect COBie dataset reduces maintainer
      uncertainty and refines quotes.
    </>,
  ],
  s4ImageAlt:
    "Maintenance technician with tablet and COBie augmented-reality interface on an air handling unit",
  s4ImageCaption: (
    <>
      Living handover: preventive maintenance, warranties and spare parts tied
      to the digital twin.
    </>
  ),

  s5Title: "5. Practical guide: five golden rules on site",
  s5Intro: (
    <p className="leading-relaxed text-zinc-300">
      To make this digital continuity real, a pragmatic checklist for site
      directors and BIM managers:
    </p>
  ),
  s5Rules: [
    <>
      <B>Rule 1 — Define the attribute dictionary in the BIM Execution Plan.</B>{" "}
      EIR (Employer&apos;s Information Requirements) must list expected
      parameters per asset. Focus on critical equipment (LOIN — Level of
      Information Need).
    </>,
    <>
      <B>Rule 2 — Automate data compliance checks.</B> Use{" "}
      <em>model checking</em> (Solibri, Navisworks): if the object is a fire
      door, the &laquo;&nbsp;fire rating&nbsp;&raquo; parameter must be filled
      or flagged.
    </>,
    <>
      <B>Rule 3 — Tie data to finance.</B> Link progress payment approval to
      model data completeness: no data, no payment.
    </>,
    <>
      <B>Rule 4 — Involve operations (FM) as early as possible.</B> The future
      maintainer is the end user of COBie data; their feedback adjusts course
      before models freeze.
    </>,
    <>
      <B>Rule 5 — Dry-run COBie → CMMS integration.</B> Test export on a sample
      (one floor) at the end of detailed design, before the handover rush.
    </>,
  ],
  s5ImageAlt:
    "Infographic of five golden rules for BIM execution: attribute dictionary, automated checks, payment linked to data, early FM involvement, COBie test",
  s5ImageCaption: (
    <>
      The five golden rules — from the BIM Execution Plan to an active digital
      twin.
    </>
  ),

  s6Title: "6. Conclusion: stop delivering empty geometry",
  s6Body: (
    <>
      <p className="leading-relaxed text-zinc-300">
        A modern building is no longer finished on the day physical keys are
        handed over. The real handover is the delivery of <B>digital keys</B>.
      </p>
      <p className="leading-relaxed text-zinc-300">
        Execution BIM, structured by rigorous COBie, is the only viable path to
        a living digital handover file — the foundation of tomorrow&apos;s
        Operations-Maintenance Management. The challenge is no longer pretty 3D
        renders but <B>digital continuity</B>, reliability and accessibility.
      </p>
      <p className="leading-relaxed text-zinc-300">
        The industry must evolve: owners must require structured data and pay
        for it fairly; contractors must treat attribute management as naturally
        as pouring concrete. Building a Smart Building without the operable
        database that powers it is like delivering a Formula&nbsp;1 car
        without a steering wheel or dashboard.
      </p>
    </>
  ),

  signatureBrand: (
    <strong>
      Elouatiki Frères: digital continuity from site to operations.
    </strong>
  ),
  ctaText: "Let's discuss your BIM → COBie → handover chain",
};

function getContent(locale: AppLocale): ArticleContent {
  if (locale === "en" || locale === "ar") return EN_CONTENT;
  return FR_CONTENT;
}

function getFormattingLocale(locale: AppLocale): string {
  return locale === "fr" ? "fr" : "en";
}

export async function BimExecutionArticle() {
  const locale = (await getLocale()) as AppLocale;
  const formattingLocale = getFormattingLocale(locale);
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

        <ArticleMetaBlock
          formattedDate={formattedDate}
          readingTimeLabel={readingTimeLabel}
        />

        {c.intro}
      </header>

      <figure className="image-figure relative my-10 overflow-hidden rounded-2xl border border-white/10 bg-zinc-900/40 shadow-xl shadow-black/30 sm:my-14">
        <ArticleImage src={COVER_IMAGE_SRC} alt={c.coverAlt} priority />
        <figcaption className="px-5 py-3 text-center text-sm italic text-zinc-400">
          {c.coverCaption}
        </figcaption>
      </figure>

      <section className="content-block mt-12 space-y-5">
        <h2 className="section-title font-[family-name:var(--font-space-grotesk)] text-2xl font-bold text-white sm:text-3xl">
          {c.s1Title}
        </h2>
        {c.s1Body}

        <figure className="image-figure my-6 overflow-hidden rounded-2xl border border-white/10 bg-zinc-900/40 shadow-lg shadow-black/30">
          <ArticleImage src={DOE_CEMETERY_IMAGE_SRC} alt={c.s1ImageAlt} />
          <figcaption className="px-5 py-3 text-center text-sm italic text-zinc-400">
            {c.s1ImageCaption}
          </figcaption>
        </figure>

        {c.s1Thesis}
      </section>

      <section className="content-block mt-12 space-y-5">
        <h2 className="section-title font-[family-name:var(--font-space-grotesk)] text-2xl font-bold text-white sm:text-3xl">
          {c.s2Title}
        </h2>
        {c.s2Intro}
        {c.s2Geometry}
        {c.s2CtaExample}
        <ul className="list-disc space-y-2 pl-6 text-zinc-300 marker:text-cyan-400">
          {c.s2CtaItems.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>

        <h3 className="font-[family-name:var(--font-space-grotesk)] text-xl font-semibold text-white sm:text-2xl">
          {c.s2ResponsibilityTitle}
        </h3>
        {c.s2ResponsibilityBody}

        <figure className="image-figure my-6 overflow-hidden rounded-2xl border border-white/10 bg-zinc-900/40 shadow-lg shadow-black/30">
          <ArticleImage src={BIM_FORGE_IMAGE_SRC} alt={c.s2ImageAlt} />
          <figcaption className="px-5 py-3 text-center text-sm italic text-zinc-400">
            {c.s2ImageCaption}
          </figcaption>
        </figure>
      </section>

      <section className="content-block mt-12 space-y-5">
        <h2 className="section-title font-[family-name:var(--font-space-grotesk)] text-2xl font-bold text-white sm:text-3xl">
          {c.s3Title}
        </h2>
        {c.s3Intro}
        {c.s3Vulgarize}

        <h3 className="font-[family-name:var(--font-space-grotesk)] text-xl font-semibold text-white sm:text-2xl">
          {c.s3EntitiesTitle}
        </h3>
        <ul className="list-disc space-y-2 pl-6 text-zinc-300 marker:text-cyan-400">
          {c.s3Entities.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>

        <h3 className="font-[family-name:var(--font-space-grotesk)] text-xl font-semibold text-white sm:text-2xl">
          {c.s3BridgeTitle}
        </h3>
        {c.s3BridgeBody}

        <blockquote className="rounded-2xl border-l-4 border-cyan-400/70 bg-cyan-500/5 px-5 py-4 text-base italic leading-relaxed text-zinc-200 sm:text-lg">
          {c.s3Quote}
        </blockquote>
      </section>

      <section className="content-block mt-12 space-y-5">
        <h2 className="section-title font-[family-name:var(--font-space-grotesk)] text-2xl font-bold text-white sm:text-3xl">
          {c.s4Title}
        </h2>
        {c.s4Intro}

        <h3 className="font-[family-name:var(--font-space-grotesk)] text-xl font-semibold text-white sm:text-2xl">
          {c.s4DayOneTitle}
        </h3>
        {c.s4DayOneBody}

        <figure className="image-figure my-6 overflow-hidden rounded-2xl border border-white/10 bg-zinc-900/40 shadow-lg shadow-black/30">
          <ArticleImage src={DOE_VIVANT_IMAGE_SRC} alt={c.s4ImageAlt} />
          <figcaption className="px-5 py-3 text-center text-sm italic text-zinc-400">
            {c.s4ImageCaption}
          </figcaption>
        </figure>

        <h3 className="font-[family-name:var(--font-space-grotesk)] text-xl font-semibold text-white sm:text-2xl">
          {c.s4RoiTitle}
        </h3>
        <ul className="list-disc space-y-3 pl-6 text-zinc-300 marker:text-cyan-400">
          {c.s4RoiBullets.map((b, idx) => (
            <li key={idx}>{b}</li>
          ))}
        </ul>
      </section>

      <section className="content-block mt-12 space-y-5">
        <h2 className="section-title font-[family-name:var(--font-space-grotesk)] text-2xl font-bold text-white sm:text-3xl">
          {c.s5Title}
        </h2>
        {c.s5Intro}

        <figure className="image-figure my-6 overflow-hidden rounded-2xl border border-white/10 bg-zinc-900/40 shadow-lg shadow-black/30">
          <ArticleImage src={GOLDEN_RULES_IMAGE_SRC} alt={c.s5ImageAlt} />
          <figcaption className="px-5 py-3 text-center text-sm italic text-zinc-400">
            {c.s5ImageCaption}
          </figcaption>
        </figure>

        <ol className="list-decimal space-y-4 pl-6 text-zinc-300 marker:text-cyan-400">
          {c.s5Rules.map((rule, idx) => (
            <li key={idx}>{rule}</li>
          ))}
        </ol>
      </section>

      <section className="content-block mt-12 space-y-5">
        <h2 className="section-title font-[family-name:var(--font-space-grotesk)] text-2xl font-bold text-white sm:text-3xl">
          {c.s6Title}
        </h2>
        {c.s6Body}
      </section>

      <footer className="article-footer mt-16 space-y-8">
        <ArticleByline
          authorLabel={t("author")}
          publishedOnLabel={t("publishedOn")}
          formattedDate={formattedDate}
        />
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

function ArticleMetaBlock({
  formattedDate,
  readingTimeLabel,
}: {
  formattedDate: string;
  readingTimeLabel: string;
}) {
  return (
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
  );
}

function ArticleImage({
  src,
  alt,
  priority,
}: {
  src: string;
  alt: string;
  priority?: boolean;
}) {
  return (
    <div className="relative aspect-[16/9] w-full">
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        sizes="(max-width: 1024px) 100vw, 896px"
        className="object-cover"
      />
    </div>
  );
}

function ArticleByline({
  authorLabel,
  publishedOnLabel,
  formattedDate,
}: {
  authorLabel: string;
  publishedOnLabel: string;
  formattedDate: string;
}) {
  return (
    <div className="byline border-t border-white/10 pt-8 sm:pt-10">
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-400">
        {authorLabel}
      </p>
      <p className="mt-3 font-[family-name:var(--font-space-grotesk)] text-2xl font-bold text-white sm:text-3xl">
        {ARTICLE_AUTHOR}
      </p>
      <p className="mt-3 inline-flex items-center gap-2 text-sm text-zinc-400">
        <CalendarDays className="size-4" aria-hidden />
        <span>
          {publishedOnLabel}{" "}
          <time dateTime={ARTICLE_PUBLISHED_AT}>{formattedDate}</time>
        </span>
      </p>
    </div>
  );
}
