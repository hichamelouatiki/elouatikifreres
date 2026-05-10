/**
 * Article de blog : « L'IA au service des géants ».
 *
 * Server component async : utilise `getTranslations` et `getLocale` côté
 * serveur (next-intl) pour formater date + temps de lecture selon la locale
 * de la requête. Aucun bundle client n'est ajouté.
 *
 * Méta de l'article (auteur, date de publication, temps de lecture) sont
 * volontairement constantes ici car l'article est dédié et n'est pas piloté
 * par un CMS. Ces valeurs sont aussi présentes dans `blog-articles.ts` pour
 * que la carte d'aperçu puisse les afficher.
 */

import { CalendarDays, Clock } from "lucide-react";
import { getLocale, getTranslations } from "next-intl/server";

import { Link } from "@/i18n/navigation";

const COVER_IMAGE_SRC = "/media/blog/IA_barage/cover-drone-barrage.png";
const TWIN_IMAGE_SRC = "/media/blog/IA_barage/jumeau-numerique.png";
const AI_IMAGE_SRC = "/media/blog/IA_barage/ia-analyse.png";

const ARTICLE_AUTHOR = "EL OUATIKI Hicham";
const ARTICLE_PUBLISHED_AT = "2023-06-30";
const ARTICLE_READING_MINUTES = 7;

export async function DamInspectionArticle() {
  const locale = await getLocale();
  const t = await getTranslations("Blog");

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
          Drones &amp; Deep Learning
        </p>
        <h1 className="font-[family-name:var(--font-space-grotesk)] text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl">
          L&apos;IA au service des géants : Comment Elouatiki Frères révolutionne
          l&apos;inspection des barrages
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

        <p className="text-base leading-relaxed text-zinc-300 sm:text-lg">
          Dans le secteur de l&apos;ingénierie civile, la pérennité des infrastructures
          critiques repose sur une surveillance sans faille. Sous le poids colossal
          de millions de mètres cubes d&apos;eau, les barrages en béton représentent
          un défi de maintenance permanent : ils subissent des pressions
          hydrostatiques extrêmes, des cycles de gel-dégel et une érosion chimique
          lente mais inexorable.
        </p>
        <p className="text-base leading-relaxed text-zinc-300 sm:text-lg">
          Chez <strong className="font-semibold text-white">Elouatiki Frères</strong>,
          nous avons compris que les méthodes d&apos;inspection traditionnelles ne
          suffisent plus à garantir une sécurité optimale. Récemment, nos équipes
          ont déployé une solution de pointe alliant{" "}
          <strong className="font-semibold text-white">drones de haute technologie</strong>{" "}
          et <strong className="font-semibold text-white">Deep Learning</strong>
          {" "}pour transformer radicalement l&apos;inspection de ces colosses. Voici comment
          nous redéfinissons les standards de la maintenance prédictive.
        </p>
      </header>

      <figure className="image-figure my-10 overflow-hidden rounded-2xl border border-white/10 bg-zinc-900/40 shadow-xl shadow-black/30 sm:my-14">
        <img
          src={COVER_IMAGE_SRC}
          alt="Drone DJI Matrice 350 en plein vol inspectant un barrage"
          className="aspect-[16/9] w-full object-cover"
          loading="eager"
        />
        <figcaption className="px-5 py-3 text-center text-sm italic text-zinc-400">
          Illustration de couverture — drones et IA au service de l&apos;inspection
          d&apos;ouvrages.
        </figcaption>
      </figure>

      <section className="content-block mt-12 space-y-5">
        <h2 className="section-title font-[family-name:var(--font-space-grotesk)] text-2xl font-bold text-white sm:text-3xl">
          Pourquoi l&apos;inspection manuelle est devenue le maillon faible
        </h2>
        <p className="leading-relaxed text-zinc-300">
          Pendant des décennies, la sécurité des barrages a reposé sur l&apos;œil
          humain. Des cordistes experts, suspendus au-dessus du vide, scrutaient la
          paroi millimètre par millimètre. Bien que ce savoir-faire soit
          respectable, il présente aujourd&apos;hui trois limites majeures que nous
          avons choisi de dépasser :
        </p>
        <ol className="list-decimal space-y-3 pl-6 text-zinc-300 marker:text-cyan-400">
          <li>
            <strong className="font-semibold text-white">La subjectivité :</strong>{" "}
            un rapport d&apos;inspection peut varier d&apos;un expert à l&apos;autre.
            L&apos;interprétation de la gravité d&apos;une fissure est souvent
            humaine, donc variable.
          </li>
          <li>
            <strong className="font-semibold text-white">Le risque opérationnel :</strong>{" "}
            le travail en hauteur reste la première cause d&apos;accidents graves.
            Réduire l&apos;exposition des équipes est une priorité éthique et légale.
          </li>
          <li>
            <strong className="font-semibold text-white">La lenteur et le coût :</strong>{" "}
            inspecter un parement de plusieurs hectares à la main est un processus
            qui s&apos;étale sur des semaines, immobilisant des ressources précieuses.
          </li>
        </ol>
      </section>

      <section className="content-block mt-12 space-y-5">
        <h2 className="section-title font-[family-name:var(--font-space-grotesk)] text-2xl font-bold text-white sm:text-3xl">
          Notre solution : la synergie entre expertise terrain et haute technologie
        </h2>
        <p className="leading-relaxed text-zinc-300">
          Pour cette réalisation,{" "}
          <strong className="font-semibold text-white">Elouatiki Frères</strong>
          {" "}n&apos;a pas simplement « pris des photos ». Nous avons déployé un véritable
          laboratoire volant capable d&apos;évoluer dans des environnements
          hostiles. À proximité d&apos;un barrage, les turbulences aérologiques et
          les perturbations magnétiques dues aux transformateurs haute tension
          rendent le pilotage complexe.
        </p>
        <p className="leading-relaxed text-zinc-300">
          Nos pilotes spécialisés utilisent des vecteurs{" "}
          <strong className="font-semibold text-white">DJI Matrice 350 RTK</strong>.
          Équipé d&apos;une nacelle plein format de{" "}
          <strong className="font-semibold text-white">45 mégapixels</strong>
          {" "}(Zenmuse P1), ce drone capture des détails invisibles à l&apos;œil nu depuis le
          sol. Pour les zones où la géométrie de la paroi est complexe ou masquée
          par la végétation, nous intégrons des capteurs{" "}
          <strong className="font-semibold text-white">LiDAR</strong>
          {" "}pour cartographier la structure avec une précision millimétrique. Là où
          l&apos;inspection classique voit une paroi grise uniforme, notre
          technologie documente la « peau » du béton, créant une base de données
          brute d&apos;une densité inédite.
        </p>
      </section>

      <section className="content-block mt-12 space-y-6">
        <h2 className="section-title font-[family-name:var(--font-space-grotesk)] text-2xl font-bold text-white sm:text-3xl">
          Un workflow opérationnel maîtrisé de bout en bout
        </h2>
        <p className="leading-relaxed text-zinc-300">
          La valeur ajoutée d&apos;
          <strong className="font-semibold text-white">Elouatiki Frères</strong>{" "}
          réside dans la rigueur de notre chaîne de traitement de la donnée. Nous
          avons structuré notre intervention autour de trois piliers technologiques :
        </p>

        <div className="space-y-5">
          <h3 className="font-[family-name:var(--font-space-grotesk)] text-xl font-semibold text-white sm:text-2xl">
            1. Acquisition de haute précision (GNSS RTK)
          </h3>
          <p className="leading-relaxed text-zinc-300">
            L&apos;erreur n&apos;a pas sa place dans la sécurité des barrages. Pour
            garantir la répétabilité des inspections, nous utilisons des plans de
            vol automatisés via la technologie{" "}
            <strong className="font-semibold text-white">RTK (Real-Time Kinematic)</strong>.
            En nous appuyant sur une station de base au sol, nous corrigeons la
            position du drone en temps réel avec une précision centimétrique.
          </p>
          <ul className="list-disc space-y-2 pl-6 text-zinc-300 marker:text-cyan-400">
            <li>
              <strong className="font-semibold text-white">L&apos;avantage ?</strong>{" "}
              Chaque cliché est géoréférencé exactement dans l&apos;espace. Cela
              nous permet de revenir deux ans plus tard et de reprendre la photo
              sous le même angle au millimètre près, rendant la comparaison
              temporelle enfin scientifique.
            </li>
          </ul>
        </div>

        <div className="space-y-5">
          <h3 className="font-[family-name:var(--font-space-grotesk)] text-xl font-semibold text-white sm:text-2xl">
            2. Le Jumeau Numérique : le double digital de l&apos;ouvrage
          </h3>

          <figure className="image-figure my-6 overflow-hidden rounded-2xl border border-white/10 bg-zinc-900/40 shadow-lg shadow-black/30">
            <img
              src={TWIN_IMAGE_SRC}
              alt="Transition entre une photo réelle de barrage et son jumeau numérique 3D sur un écran"
              className="aspect-[16/9] w-full object-cover"
              loading="lazy"
            />
            <figcaption className="px-5 py-3 text-center text-sm italic text-zinc-400">
              Du parement réel au modèle 3D navigable : le jumeau numérique de
              l&apos;ouvrage.
            </figcaption>
          </figure>

          <p className="leading-relaxed text-zinc-300">
            Une fois les milliers d&apos;images capturées, nos ingénieurs utilisent
            la photogrammétrie pour générer un{" "}
            <strong className="font-semibold text-white">Jumeau Numérique</strong>.
            Ce modèle 3D ultra-fidèle n&apos;est pas qu&apos;une simple image :
            c&apos;est une base de données spatiale. Les gestionnaires peuvent
            désormais naviguer sur l&apos;ouvrage depuis leur bureau, mesurer des
            distances, calculer des volumes de dégradation et visualiser
            l&apos;intégralité du parement sans les distorsions optiques d&apos;une
            photo classique. C&apos;est l&apos;outil ultime de concertation et de
            planification.
          </p>
        </div>

        <div className="space-y-5">
          <h3 className="font-[family-name:var(--font-space-grotesk)] text-xl font-semibold text-white sm:text-2xl">
            3. Le cerveau (IA) : segmentation sémantique et précision au pixel
          </h3>

          <figure className="image-figure my-6 overflow-hidden rounded-2xl border border-white/10 bg-zinc-900/40 shadow-lg shadow-black/30">
            <img
              src={AI_IMAGE_SRC}
              alt="Détourage au pixel près d'une fissure de béton par l'IA U-Net"
              className="aspect-[16/9] w-full object-cover"
              loading="lazy"
            />
            <figcaption className="px-5 py-3 text-center text-sm italic text-zinc-400">
              Segmentation sémantique : l&apos;IA détoure chaque fissure au pixel
              près.
            </figcaption>
          </figure>

          <p className="leading-relaxed text-zinc-300">
            C&apos;est ici que l&apos;expertise d&apos;
            <strong className="font-semibold text-white">Elouatiki Frères</strong>{" "}
            devient disruptive. Analyser manuellement 5 000 photos haute résolution
            prendrait des semaines. Nos algorithmes de{" "}
            <strong className="font-semibold text-white">Deep Learning</strong>
            {" "}le font en quelques heures avec une rigueur infatigable. Nous utilisons
            deux approches complémentaires :
          </p>
          <ul className="list-disc space-y-3 pl-6 text-zinc-300 marker:text-cyan-400">
            <li>
              <span className="font-semibold text-white">
                La détection (
                <strong className="font-semibold text-white">YOLO</strong> /
                Faster R-CNN) :
              </span>{" "}
              pour localiser instantanément les « objets » de désordre (corrosion
              des armatures, nids d&apos;abeille, efflorescences).
            </li>
            <li>
              <span className="font-semibold text-white">
                La segmentation sémantique (
                <strong className="font-semibold text-white">U-Net</strong>) :
              </span>{" "}
              c&apos;est la technologie la plus fine. Au lieu de détecter une
              fissure, l&apos;IA la détoure au pixel près. Cela nous permet
              d&apos;extraire automatiquement des métriques vitales : longueur,
              orientation et surtout l&apos;
              <strong className="font-semibold text-white">ouverture (la largeur)</strong>{" "}
              de la fissure, même si celle-ci ne fait que 0,2 mm.
            </li>
          </ul>
        </div>
      </section>

      <section className="content-block mt-12 space-y-5">
        <h2 className="section-title font-[family-name:var(--font-space-grotesk)] text-2xl font-bold text-white sm:text-3xl">
          L&apos;échelle de gravité : une aide au pilotage des budgets de
          maintenance
        </h2>
        <p className="leading-relaxed text-zinc-300">
          L&apos;IA ne remplace pas l&apos;ingénieur, elle lui permet de se
          concentrer sur les zones critiques. Pour faciliter la prise de décision,
          nos rapports classifient chaque pathologie détectée :
        </p>
        <ul className="severity-list grid gap-4 sm:grid-cols-1">
          <li className="rounded-2xl border border-emerald-400/25 bg-emerald-500/5 p-5">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-300">
              Classe 1
            </p>
            <p className="mt-2 font-[family-name:var(--font-space-grotesk)] text-lg font-semibold text-white">
              Microfissures et faïençage
            </p>
            <ul className="mt-3 space-y-1.5 text-sm leading-relaxed text-zinc-300">
              <li>
                <strong className="font-semibold text-white">Caractéristique :</strong>{" "}
                ouvertures superficielles.
              </li>
              <li>
                <strong className="font-semibold text-white">Action :</strong>{" "}
                archivage dans le jumeau numérique pour surveillance lors de la
                prochaine campagne.
              </li>
            </ul>
          </li>
          <li className="rounded-2xl border border-amber-400/25 bg-amber-500/5 p-5">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-amber-300">
              Classe 2
            </p>
            <p className="mt-2 font-[family-name:var(--font-space-grotesk)] text-lg font-semibold text-white">
              Fissures structurelles stables
            </p>
            <ul className="mt-3 space-y-1.5 text-sm leading-relaxed text-zinc-300">
              <li>
                <strong className="font-semibold text-white">Caractéristique :</strong>{" "}
                fissures actives mais ne présentant pas de fuite.
              </li>
              <li>
                <strong className="font-semibold text-white">Action :</strong>{" "}
                analyse de cinématique par superposition temporelle.
              </li>
            </ul>
          </li>
          <li className="rounded-2xl border border-red-400/25 bg-red-500/5 p-5">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-red-300">
              Classe 3
            </p>
            <p className="mt-2 font-[family-name:var(--font-space-grotesk)] text-lg font-semibold text-white">
              Fissures critiques ou infiltrations
            </p>
            <ul className="mt-3 space-y-1.5 text-sm leading-relaxed text-zinc-300">
              <li>
                <strong className="font-semibold text-white">Caractéristique :</strong>{" "}
                fissures larges avec présence d&apos;humidité.
              </li>
              <li>
                <strong className="font-semibold text-white">Action :</strong>{" "}
                <strong className="font-semibold text-red-200">
                  alerte immédiate
                </strong>
                , expertise humaine prioritaire et planification de travaux de
                colmatage ou d&apos;injection.
              </li>
            </ul>
          </li>
        </ul>
      </section>

      <section className="content-block mt-12 space-y-5">
        <h2 className="section-title font-[family-name:var(--font-space-grotesk)] text-2xl font-bold text-white sm:text-3xl">
          Les bénéfices business : un ROI incontestable
        </h2>
        <p className="leading-relaxed text-zinc-300">
          En confiant l&apos;inspection de vos actifs à{" "}
          <strong className="font-semibold text-white">Elouatiki Frères</strong>,
          vous transformez une contrainte réglementaire en un avantage stratégique :
        </p>
        <ul className="list-disc space-y-3 pl-6 text-zinc-300 marker:text-cyan-400">
          <li>
            <strong className="font-semibold text-white">
              Vitesse d&apos;exécution :
            </strong>{" "}
            des inspections réalisées{" "}
            <strong className="font-semibold text-white">
              5 à 10 fois plus rapidement
            </strong>{" "}
            que les méthodes classiques, minimisant l&apos;indisponibilité du site.
          </li>
          <li>
            <strong className="font-semibold text-white">Sécurité totale :</strong>{" "}
            le risque de chute de hauteur est quasiment éliminé pour vos
            collaborateurs et les nôtres.
          </li>
          <li>
            <strong className="font-semibold text-white">
              Maintenance prédictive :
            </strong>{" "}
            en superposant les données d&apos;inspections successives, nous
            identifions les tendances de dégradation avant qu&apos;elles
            n&apos;entraînent des réparations lourdes et coûteuses.
          </li>
          <li>
            <strong className="font-semibold text-white">
              Objectivité et audit :
            </strong>{" "}
            nos algorithmes ne fatiguent pas. Ils analysent la 5 000ᵉ photo avec la
            même précision que la première, offrant un rapport impartial et
            auditable.
          </li>
        </ul>
      </section>

      <section className="content-block mt-12 space-y-5">
        <h2 className="section-title font-[family-name:var(--font-space-grotesk)] text-2xl font-bold text-white sm:text-3xl">
          Conclusion : le drone, nouveau pilier de la décision industrielle
        </h2>
        <p className="leading-relaxed text-zinc-300">
          Le drone n&apos;est plus un accessoire de captation d&apos;images ; chez{" "}
          <strong className="font-semibold text-white">Elouatiki Frères</strong>,
          il est devenu un{" "}
          <strong className="font-semibold text-white">
            capteur de données stratégique
          </strong>{" "}
          intégré à un écosystème digital puissant. En fusionnant notre
          savoir-faire opérationnel avec la puissance du{" "}
          <strong className="font-semibold text-white">Deep Learning</strong>, nous
          offrons une vision augmentée et objective de l&apos;état de santé des
          infrastructures.
        </p>
        <p className="leading-relaxed text-zinc-300">
          Plus qu&apos;une simple prestation technique, nous livrons une véritable
          intelligence décisionnelle. L&apos;IA ne remplace pas l&apos;expertise
          humaine, elle lui donne les moyens de protéger et de pérenniser nos
          géants de béton pour les décennies à venir.
        </p>
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
            <strong>
              Elouatiki Frères : L&apos;innovation au service de la sécurité.
            </strong>
          </p>
          <Link
            href="/#contact"
            className="btn-primary mt-6 inline-flex items-center gap-2 rounded-xl border border-cyan-400/50 bg-cyan-500/15 px-6 py-3 text-sm font-semibold text-cyan-100 transition hover:border-cyan-300/70 hover:bg-cyan-500/25 hover:text-white sm:text-base"
          >
            Contactez-nous pour votre projet d&apos;inspection
            <span aria-hidden>→</span>
          </Link>
        </div>
      </footer>
    </article>
  );
}
