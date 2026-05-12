import type { AppLocale } from "@/i18n/routing";

export const BLOG_CATEGORY_IDS = [
  "IA",
  "BATIMENT",
  "BIM",
  "INNOVATION",
  "TECH",
] as const;

export type BlogCategoryId = (typeof BLOG_CATEGORY_IDS)[number];

export type BlogArticle = {
  id: string;
  category: BlogCategoryId;
  imageSrc: string;
  titles: Record<AppLocale, string>;
  excerpts: Record<AppLocale, string>;
  /**
   * Slug optionnel : si défini, la carte « Lire la suite » pointe vers la page
   * Slug optionnel : si défini, la carte « Lire la suite » pointe vers la page
   * dédiée `blog-et-actualites/<slug>/` ou `blog-and-news/<slug>/` (en anglais).
   */
  slug?: string;
  /** Date de publication ISO (YYYY-MM-DD) — formatée selon la locale à l'affichage. */
  publishedAt?: string;
  /** Temps de lecture estimé en minutes. */
  readingMinutes?: number;
  /** Auteur de l'article. */
  author?: string;
};

const ARTICLES: BlogArticle[] = [
  {
    id: "ia-inspection-barrages",
    slug: "ia-inspection-barrages",
    category: "IA",
    imageSrc: "/media/blog/IA_barage/cover-drone-barrage.png",
    publishedAt: "2023-06-30",
    readingMinutes: 7,
    author: "EL OUATIKI Hicham",
    titles: {
      fr: "L'IA au service des géants : comment Elouatiki Frères révolutionne l'inspection des barrages",
      en: "AI for giants: how Elouatiki Frères is revolutionizing dam inspection",
      ar: "الذكاء الاصطناعي في خدمة العمالقة: كيف تُحدث إخوان الواتيكي ثورة في تفتيش السدود",
    },
    excerpts: {
      fr: "Drones DJI Matrice 350 RTK, LiDAR et Deep Learning (YOLO, U-Net) au service du jumeau numérique des barrages : maintenance prédictive et précision au pixel.",
      en: "DJI Matrice 350 RTK drones, LiDAR, and Deep Learning (YOLO, U-Net) powering dam digital twins: predictive maintenance with pixel-level precision.",
      ar: "طائرات DJI Matrice 350 RTK وLiDAR والتعلم العميق (YOLO وU-Net) لخدمة التوأم الرقمي للسدود: صيانة تنبؤية ودقة بالبكسل.",
    },
  },
  {
    id: "ia-chantier-vision-ordinateur",
    slug: "ia-chantier-vision-ordinateur",
    category: "IA",
    imageSrc: "/media/blog/IA_chantier/cover-IA-building%20site.png",
    publishedAt: "2023-03-18",
    readingMinutes: 8,
    author: "EL OUATIKI Hicham",
    titles: {
      fr: "Quand l'IA lit le chantier : de la vision par ordinateur aux arbitrages terrain",
      en: "When AI reads the site: from computer vision to field decisions",
      ar: "When AI reads the site: from computer vision to field decisions",
    },
    excerpts: {
      fr: "Computer Vision, Scan-to-BIM, suivi d'avancement automatisé et copilote cognitif : comment l'IA augmente le chef de chantier sans le remplacer.",
      en: "Computer Vision, Scan-to-BIM, automated progress tracking and a cognitive copilot: how AI augments the site manager without replacing them.",
      ar: "Computer Vision, Scan-to-BIM, automated progress tracking and a cognitive copilot: how AI augments the site manager without replacing them.",
    },
  },
  {
    id: "enveloppe-beton-bois",
    category: "BATIMENT",
    imageSrc: "/images/Villa_beton.png",
    titles: {
      fr: "Enveloppes haute performance : béton, bois et mise en œuvre sans surprise",
      en: "High-performance envelopes: concrete, wood, and predictable execution",
      ar: "أغلفة عالية الأداء: خشب وخرسانة وتنفيذ يمكن التنبؤ به",
    },
    excerpts: {
      fr: "Coordination corps d'état, jalons météo et contrôle qualité pour sécuriser l'étanchéité et les finitions.",
      en: "Trade coordination, weather milestones, and QA to lock in waterproofing and finishes.",
      ar: "تنسيق الأشغال ومراحل الطقس ومراقبة الجودة لتأمين العزل والتشطيبات.",
    },
  },
  {
    id: "bim-cobie-doe",
    category: "BIM",
    imageSrc: "/images/Villa_BIM.png",
    titles: {
      fr: "BIM exécution → COBie → DOE : une même chaîne de vérité",
      en: "Execution BIM → COBie → handover: one chain of truth",
      ar: "BIM تنفيذي → COBie → ملف التسليم: سلسلة حقائق واحدة",
    },
    excerpts: {
      fr: "Comment structurer les attributs dès le chantier pour livrer un actif exploitable, pas une archive morte.",
      en: "How to structure attributes on site to deliver an operable asset, not a dead archive.",
      ar: "كيفية هيكلة الخصائص من الموقع لتسليم أصل قابل للتشغيل وليس أرشيفًا راكدًا.",
    },
  },
  {
    id: "innovation-achats",
    category: "INNOVATION",
    imageSrc: "/images/Villa_beton.png",
    titles: {
      fr: "Innovation d'achats : lotissements intelligents et dialogue fournisseurs data",
      en: "Procurement innovation: smart packages and data-driven supplier dialogue",
      ar: "ابتكار في المشتريات: حزم ذكية وحوار مبني على البيانات مع الموردين",
    },
    excerpts: {
      fr: "Réduire les avenants en rendant les hypothèses et dépendances visibles avant la signature des bordereaux.",
      en: "Cut change orders by surfacing assumptions and dependencies before BOQ sign-off.",
      ar: "تقليل التعديلات بجعل الفرضيات والتبعيات واضحة قبل اعتماد جداول الكميات.",
    },
  },
  {
    id: "edge-iot-securite",
    category: "TECH",
    imageSrc: "/images/Villa_BIM.png",
    titles: {
      fr: "Edge computing et IoT chantier : latence faible, souveraineté des données",
      en: "Edge and site IoT: low latency and data sovereignty",
      ar: "الحوسبة الطرفية وإنترنت الأشياء في الموقع: زمن انتقال منخفض وسيادة البيانات",
    },
    excerpts: {
      fr: "Architectures hybrides, filets offline-first et supervision centralisée pour les sites sensibles.",
      en: "Hybrid stacks, offline-first meshes, and centralized oversight for sensitive projects.",
      ar: "بنى هجينة وتشغيل دون اتصال دائم وإشراف مركزي للمشاريع الحساسة.",
    },
  },
  {
    id: "ml-planning",
    slug: "ia-planning-monte-carlo",
    category: "IA",
    imageSrc:
      "/media/blog/IA_planning/Cover%20Image%20Concept%20Chaos%20vs%20Data.png",
    publishedAt: "2024-12-16",
    readingMinutes: 14,
    author: "EL OUATIKI Hicham",
    titles: {
      fr: "Machine Learning et plannings : Monte Carlo, BIM 4D et gestion prédictive des risques",
      en: "Machine learning and schedules: Monte Carlo, 4D BIM, and predictive risk management",
      ar: "التعلم الآلي والجداول الزمنية: مونت كارلو وBIM أبعادًا زمنية وإدارة مخاطر تنبؤية",
    },
    excerpts: {
      fr: "De la tyrannie du Gantt déterministe aux simulations probabilistes : comment la ConTech et l'IA transforment le planning de chantier.",
      en: "From deterministic Gantt tyranny to probabilistic simulations: how ConTech and AI reshape construction schedules.",
      ar: "من هيمنة الغانت الحتمية إلى المحاكاة الاحتمالية: كيف تعيد كونتك والذكاء الاصطناعي تشكيل جدولة المواقع.",
    },
  },
  {
    id: "bim-fluides-coordination",
    category: "BIM",
    imageSrc: "/images/Villa_BIM.png",
    titles: {
      fr: "BIM fluides : coordination CVC / plomberie / électricité sans clash silencieux",
      en: "MEP BIM: coordinating HVAC, plumbing, and electrical without silent clashes",
      ar: "BIM للتمديدات: تنسيق التكييف والسباكة والكهرباء دون تعارضات خفية",
    },
    excerpts: {
      fr: "Règles de nommage, niveaux de détail et revues hebdo pour garder un modèle fédéré exploitable.",
      en: "Naming rules, LOD, and weekly reviews to keep a federated model usable.",
      ar: "قواعد التسمية ومستوى التفصيل ومراجعات أسبوعية للحفاظ على نموذج موحّد قابل للاستخدام.",
    },
  },
  {
    id: "jumeau-exploitation",
    category: "INNOVATION",
    imageSrc: "/images/Villa_beton.png",
    titles: {
      fr: "Jumeau numérique d'exploitation : capteurs, GMAO et retour d'expérience terrain",
      en: "Operations digital twin: sensors, CMMS, and field feedback loops",
      ar: "التوأم الرقمي للتشغيل: أجهزة الاستشعار وصيانة الحاسوب وحلقات ردود الفعل",
    },
    excerpts: {
      fr: "Prolonger la valeur après livraison en reliant tickets, pièces et modèle 3D as-built.",
      en: "Extend value after handover by linking work orders, parts, and the as-built 3D model.",
      ar: "تمديد القيمة بعد التسليم بربط تذاكر العمل والقطع والنموذج ثلاثي الأبعاد كما نُفّذ.",
    },
  },
];

/** Locale AR : titres et extraits des cartes blog en anglais (spec produit). */
export function blogArticleCopyLocale(locale: AppLocale): AppLocale {
  return locale === "ar" ? "en" : locale;
}

export function getBlogArticles(locale: AppLocale) {
  const copyLocale = blogArticleCopyLocale(locale);
  return ARTICLES.map((a) => ({
    id: a.id,
    slug: a.slug,
    category: a.category,
    imageSrc: a.imageSrc,
    title: a.titles[copyLocale],
    excerpt: a.excerpts[copyLocale],
    publishedAt: a.publishedAt,
    readingMinutes: a.readingMinutes,
    author: a.author,
  }));
}

export type BlogArticleCard = ReturnType<typeof getBlogArticles>[number];

/**
 * Liste des slugs pour `generateStaticParams` des pages d'articles dédiées.
 * Permet à l'export statique de générer chaque article × locale.
 */
export const BLOG_ARTICLE_SLUGS = ARTICLES.flatMap((a) =>
  a.slug ? [a.slug] : [],
);

export function getArticleBySlug(slug: string, locale: AppLocale) {
  const article = ARTICLES.find((a) => a.slug === slug);
  if (!article) return null;
  const copyLocale = blogArticleCopyLocale(locale);
  return {
    id: article.id,
    slug: article.slug,
    category: article.category,
    imageSrc: article.imageSrc,
    title: article.titles[copyLocale],
    excerpt: article.excerpts[copyLocale],
    publishedAt: article.publishedAt,
    readingMinutes: article.readingMinutes,
    author: article.author,
  };
}
