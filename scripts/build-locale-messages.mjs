import { writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");

const shared = {
  Metadata: {
    title: ["El Ouatik Frères", "El Ouatik Frères", "إل واتيكي إخوان"],
    description: [
      "Ingénierie et solutions pour vos projets.",
      "Engineering and solutions for your projects.",
      "هندسة وحلول لمشاريعكم.",
    ],
    ogLocale: ["fr_FR", "en_US", "ar_MA"],
    brandAlt: ["El Ouatik Frères", "El Ouatik Frères", "إل واتيكي إخوان"],
  },
  Nav: {
    langSwitcherAria: [
      "Choisir la langue",
      "Choose language",
      "اختيار اللغة",
    ],
    langFr: ["FR", "FR", "FR"],
    langEn: ["EN", "EN", "EN"],
    langAr: ["AR", "AR", "AR"],
  },
  Header: {
    homeAria: [
      "El Ouatiki Frères — accueil",
      "El Ouatiki Frères — home",
      "إل واتيكي إخوان — الرئيسية",
    ],
    mainNav: [
      "Navigation principale",
      "Main navigation",
      "التنقل الرئيسي",
    ],
    methodologie: ["Méthodologie", "Methodology", "المنهجية"],
    consulting: ["Consulting", "Consulting", "الاستشارات"],
    histoire: ["Histoire", "Our story", "قصتنا"],
    contact: ["Contact", "Contact", "اتصلوا بنا"],
    openMenu: ["Ouvrir le menu", "Open menu", "فتح القائمة"],
    closeMenu: ["Fermer le menu", "Close menu", "إغلاق القائمة"],
    mobileNav: ["Navigation mobile", "Mobile navigation", "التنقل على الجوال"],
  },
  Hero: {
    titleLine1: [
      "L'intelligence des données.",
      "Data intelligence.",
      "ذكاء البيانات.",
    ],
    titleLine2: [
      "L'excellence sur le terrain.",
      "Excellence in the field.",
      "التميز في الميدان.",
    ],
    subtitle: [
      "De la conception algorithmique à la livraison finale, nous redéfinissons la réalisation de travaux avec rigueur data et exécution terrain irréprochable.",
      "From algorithmic design to final delivery, we redefine how work is executed—with data discipline and flawless field execution.",
      "من التصميم الخوارزمي إلى التسليم النهائي، نعيد تعريف تنفيذ الأشغال بدقة البيانات وتنفيذ ميداني لا تشوبه شائبة.",
    ],
    ctaProject: [
      "Simuler mon projet",
      "Simulate my project",
      "محاكاة مشروعي",
    ],
    ctaMethod: [
      "Découvrir notre méthode",
      "Discover our method",
      "اكتشف منهجيتنا",
    ],
  },
  Consulting: {
    eyebrow: [
      "Consulting & Transformation Digitale",
      "Consulting & Digital Transformation",
      "الاستشارات والتحول الرقمي",
    ],
    title: [
      "L'humain avant la machine, pour des transformations qui tiennent dans le temps.",
      "People before tools—for transformations that last.",
      "الإنسان قبل الآلة، من أجل تحولات تدوم.",
    ],
    pillar1Title: [
      "Audit Operationnel",
      "Operational audit",
      "تدقيق تشغيلي",
    ],
    pillar1Text: [
      "Nous partons des frictions du terrain avant de parler outils, automatisation ou dashboards.",
      "We start from field friction before discussing tools, automation, or dashboards.",
      "ننطلق من احتكاكات الميدان قبل الحديث عن الأدوات أو الأتمتة أو لوحات المؤشرات.",
    ],
    pillar2Title: [
      "Deploiement Sur-Mesure",
      "Tailored deployment",
      "نشر مخصص",
    ],
    pillar2Text: [
      "Chaque brique digitale est calibree autour de vos lots, contraintes et cycles de validation.",
      "Every digital building block is tuned to your packages, constraints, and validation cycles.",
      "كل لبنة رقمية مضبوطة حسب حزمكم وقيودكم ودورات التحقق.",
    ],
    pillar3Title: [
      "Conduite du Changement",
      "Change management",
      "إدارة التغيير",
    ],
    pillar3Text: [
      "Les equipes adoptent mieux les solutions quand elles servent d'abord l'execution quotidienne.",
      "Teams adopt solutions better when they serve day-to-day execution first.",
      "تتبنى الفرق الحلول بشكل أفضل عندما تخدم التنفيذ اليومي أولاً.",
    ],
    ctaAudit: [
      "Reserver mon Audit",
      "Book my audit",
      "احجز تدقيقي",
    ],
    alertEyebrow: [
      "Point d'alerte",
      "Alert",
      "تنبيه",
    ],
    alertBody: [
      "70% des transformations digitales echouent faute d'ancrage operationnel.",
      "70% of digital transformations fail due to weak operational grounding.",
      "70٪ من التحولات الرقمية تفشل لغياب الترسيخ التشغيلي.",
    ],
  },
  Story: {
    imageAlt: [
      "Deux associés sur un chantier, casques de sécurité, consultation d'un plan sur tablette — expertise terrain et numérique",
      "Two partners on a construction site with safety helmets reviewing a plan on a tablet—field and digital expertise",
      "شريكان في موقع بناء، بخوذات أمان، يطلعان على مخطط على جهاز لوحي — خبرة ميدانية ورقمية",
    ],
    overlayBrand: ["EL OUATIKI Frères", "EL OUATIKI Frères", "إل واتيكي إخوان"],
    overlayTagline: [
      " — Bâtisseurs d'Avenir",
      " — Builders of the future",
      " — بناة المستقبل",
    ],
    eyebrow: [
      "L'HISTOIRE D'EL OUATIKI FRÈRES",
      "THE STORY OF EL OUATIKI FRÈRES",
      "قصة إل واتيكي إخوان",
    ],
    title: [
      "L'expérience du terrain. La puissance de la donnée.",
      "Field experience. The power of data.",
      "خبرة الميدان. قوة البيانات.",
    ],
    p1: [
      "Chez EL OUATIKI Frères, le bâtiment est une histoire de famille. Après des années passées sur les chantiers à gérer les équipes et les imprévus, nous avons décidé de résoudre le plus grand problème du BTP : le manque de synchronisation.",
      "At EL OUATIKI FRÈRES, construction is a family story. After years on sites managing teams and surprises, we set out to solve construction's biggest problem: lack of synchronization.",
      "في إل واتيكي إخوان، البناء قصة عائلة. بعد سنوات في المواقع لإدارة الفرق ومفاجآت الميدان، قررنا معالجة أكبر مشكلة في قطاع البناء والتشييد: نقص التزامن.",
    ],
    p2: [
      "Nous avons transformé notre ADN pour allier le savoir-faire traditionnel à l'Intelligence Artificielle (BIM, IoT, Computer Vision).",
      "We transformed our DNA to combine traditional know-how with Artificial Intelligence (BIM, IoT, computer vision).",
      "حوّلنا حمضنا النووي لدمج المعرفة التقليدية مع الذكاء الاصطناعي (BIM وإنترنت الأشياء ورؤية الحاسوب).",
    ],
    p3: [
      "Aujourd'hui, nous ne sommes pas qu'une entreprise technologique. Nous sommes des bâtisseurs qui offrent à vos équipes les outils de demain.",
      "Today we are not just a technology company. We are builders giving your teams tomorrow's tools.",
      "اليوم لسنا مجرد شركة تقنية. نحن بناة نمنح فرقكم أدوات الغد.",
    ],
    signature: [
      "Les Frères El Ouatiki",
      "The El Ouatiki Brothers",
      "الأخوان الواتيكي",
    ],
  },
  Method: {
    eyebrow: ["Notre méthode", "Our method", "منهجيتنا"],
    title: [
      "Du Bit au Béton : L'Intelligence au Cœur du Chantier",
      "From bit to concrete: intelligence at the heart of the site",
      "من البت إلى الخرسانة: الذكاء في قلب الموقع",
    ],
    subtitle: [
      "Chaque carte ouvre un niveau de détail : indicateurs, usage opérationnel et valeur directe sur la rentabilité terrain — le processus elouatikifreres de bout en bout.",
      "Each card opens a level of detail: indicators, operational use, and direct impact on field profitability—the elouatikifreres process end to end.",
      "كل بطاقة تفتح مستوى من التفاصيل: المؤشرات والاستخدام التشغيلي والأثر المباشر على ربحية الميدان — عملية إلواتيكي فرères من البداية للنهاية.",
    ],
    openDetail: ["Ouvrir le détail", "Open details", "افتح التفاصيل"],
    closePanel: ["Fermer le panneau", "Close panel", "إغلاق اللوحة"],
    closePanelAria: [
      "Fermer le panneau",
      "Close panel",
      "إغلاق اللوحة",
    ],
    operationalViz: [
      "Visualisation opérationnelle",
      "Operational visualization",
      "تصور تشغيلي",
    ],
    genericCtaBim: [
      "Lancer la simulation BIM",
      "Launch the BIM simulation",
      "تشغيل محاكاة BIM",
    ],
    genericCtaLogistics: [
      "Optimiser ma logistique",
      "Optimize my logistics",
      "تحسين لوجستياتي",
    ],
    genericCtaTracking: [
      "Activer le suivi 360°",
      "Enable 360° tracking",
      "تفعيل التتبع 360°",
    ],
    genericCtaManagement: [
      "Structurer ma livraison",
      "Structure my delivery",
      "هيكلة تسليمي",
    ],
  },
  Methodology: {
    eyebrow: [
      "Notre méthodologie",
      "Our methodology",
      "منهجيتنا التفصيلية",
    ],
    title: [
      "Une frise de décisions claires, du diagnostic initial au DOE numérique.",
      "A clear timeline of decisions—from initial diagnosis to digital as-built documentation.",
      "مسار قرارات واضح، من التشخيص الأول إلى ملف التنفيذ الرقمي.",
    ],
    cta: [
      "Démarrer par un audit de mes chantiers",
      "Start with an audit of my sites",
      "البدء بتدقيق لمواقعي",
    ],
    step1Title: [
      "Audit Stratégique",
      "Strategic audit",
      "تدقيق استراتيجي",
    ],
    step1Desc: [
      "Analyse approfondie de vos processus métiers et de vos chantiers pour identifier les frictions logistiques. Nous définissons ensemble une feuille de route digitale et des KPI clairs avant toute intervention.",
      "In-depth analysis of your business processes and sites to pinpoint logistics friction. Together we define a digital roadmap and clear KPIs before any intervention.",
      "تحليل معمّق لعملياتكم ومواقعكم لتحديد احتكاكات اللوجستيات. نحدد معاً خارطة طريق رقمية ومؤشرات واضحة قبل أي تدخل.",
    ],
    step2Title: [
      "Jumeau Numérique",
      "Digital twin",
      "التوأم الرقمي",
    ],
    step2Desc: [
      "Création d'une maquette numérique intelligente pour simuler les coûts, détecter proactivement les conflits de conception et valider les choix techniques avant le premier coup de pioche.",
      "Create a smart digital model to simulate costs, proactively detect design clashes, and validate technical choices before breaking ground.",
      "إنشاء نموذج رقمي ذكي لمحاكاة التكاليف واكتشاف تعارضات التصميم مسبقاً والتحقق من الخيارات التقنية قبل أول حفرة.",
    ],
    step3Title: [
      "Pilotage Terrain",
      "Field operations control",
      "توجيه الميدان",
    ],
    step3Desc: [
      "Supervision en temps réel grâce à l'analyse de données. Nous optimisons l'ordonnancement, synchronisons les équipes et automatisons les reportings pour garantir le respect des délais et du budget.",
      "Real-time supervision through data analysis. We optimize scheduling, sync teams, and automate reporting to protect schedule and budget.",
      "إشراف لحظي عبر تحليل البيانات. نحسّن الجدولة ونزامن الفرق ونؤتمت التقارير لضمان الالتزام بالآجال والميزانية.",
    ],
    step4Title: [
      "Livraison & DOE Numérique",
      "Delivery & digital as-built file",
      "التسليم وملف التنفيذ الرقمي",
    ],
    step4Desc: [
      "Remise d'un Dossier d'Ouvrages Exécutés (DOE) 100% digitalisé. Au-delà des clés, nous vous livrons un véritable actif data prêt à l'emploi pour la maintenance et l'exploitation future du bâtiment.",
      "Handover of a 100% digitized as-built file. Beyond the keys, we deliver a ready-to-use data asset for maintenance and future operations.",
      "تسليم ملف تنفيذ رقمي بالكامل. فوق مفاتيح المنشأة، نسلّم أصلاً بيانياً جاهزاً للصيانة والتشغيل لاحقاً.",
    ],
  },
  Realisations: {
    eyebrow: [
      "Nos réalisations",
      "Our projects",
      "إنجازاتنا",
    ],
    title: [
      "Des opérations structurées comme des produits data.",
      "Operations structured like data products.",
      "عمليات منظّمة كمنتجات بيانات.",
    ],
    cell1Eyebrow: [
      "Indicateur clé",
      "Key indicator",
      "مؤشر رئيسي",
    ],
    cell1Title: [
      "Dépassement de budget : 0%",
      "Budget overrun: 0%",
      "تجاوز الميزانية: 0٪",
    ],
    cell1Body: [
      "Réhabilitation pilotée par IA : arbitrage quotidien entre avancement, marge et disponibilité matériaux.",
      "AI-driven rehabilitation: daily trade-offs between progress, margin, and material availability.",
      "إعادة تأهيل بقيادة الذكاء الاصطناعي: موازنة يومية بين التقدم والهامش وتوفر المواد.",
    ],
    cell2Eyebrow: [
      "Cas client",
      "Client case",
      "حالة عميل",
    ],
    cell2Title: [
      "Tour logistique augmentée",
      "Augmented logistics tower",
      "برج لوجستي معزّز",
    ],
    cell2Body: [
      "Déploiement d'une solution de suivi par vision par ordinateur permettant de réduire les temps d'inactivité de 25% et de fluidifier les accès logistiques des sous-traitants.",
      "Computer-vision tracking that cut idle time by 25% and smoothed subcontractor logistics access.",
      "نشر تتبع برؤية حاسوبية خفّض أوقات التعطيل 25٪ وسهّل دخول اللوجستيات للمقاولين من الباطن.",
    ],
    cell2VisualAria: [
      "Visuel projet tour logistique — photo à venir",
      "Logistics tower project visual — photo coming soon",
      "صورة مشروع البرج اللوجستي — قيد الإضافة",
    ],
    cell3Eyebrow: ["Efficacité", "Efficiency", "كفاءة"],
    cell3Title: [
      "−40% de reporting manuel",
      "−40% manual reporting",
      "−40٪ من التقارير اليدوية",
    ],
    cell3Body: [
      "Capture automatisée des faits terrain et preuves d'exécution centralisées pour les parties prenantes.",
      "Automated capture of field facts and centralized proof of execution for stakeholders.",
      "التقاط آلي لوقائع الميدان وإثباتات التنفيذ المركزية لأصحاب المصلحة.",
    ],
    cell4VisualAria: [
      "Projet livraison DOE — visuel à remplacer par photo",
      "As-built delivery project — replace with photo",
      "مشروع تسليم ملف التنفيذ — استبدال بالصورة لاحقاً",
    ],
  },
  Contact: {
    eyebrow: [
      "Contact Projet",
      "Project contact",
      "تواصل بشأن المشروع",
    ],
    title: [
      "Simulez votre chantier et recevez un premier cadrage.",
      "Simulate your site and get an initial framing.",
      "حاكِ موقعك واحصل على إطار أولي.",
    ],
    intro: [
      "Prêt à transformer l'exécution de vos chantiers ? Décrivez-nous votre projet en quelques lignes et obtenez une première simulation et un cadrage stratégique de la part de nos experts.",
      "Ready to transform how your sites are executed? Describe your project in a few lines for a first simulation and strategic framing from our experts.",
      "مستعدون لتحويل تنفيذ مواقعكم؟ صفّوا مشروعكم في بضعة أسطر للحصول على محاكاة أولى وإطار استراتيجي من خبرائنا.",
    ],
    formTitle: [
      "Parlez-nous de votre projet",
      "Tell us about your project",
      "حدّثونا عن مشروعكم",
    ],
    formHint: [
      "Remplissez ce formulaire pour obtenir une simulation et un cadrage stratégique.",
      "Fill in this form to get a simulation and strategic framing.",
      "املأوا هذا النموذج للحصول على محاكاة وإطار استراتيجي.",
    ],
  },
  Form: {
    successTitle: [
      "Dossier transmis avec succès",
      "Request sent successfully",
      "تم إرسال الطلب بنجاح",
    ],
    successBody: [
      "Merci de votre confiance. Votre demande a bien été transmise à nos équipes. Un expert de chez El Ouatiki Frères prendra contact avec vous sous 48h pour un premier cadrage.",
      "Thank you for your trust. Your request has been sent to our team. An El Ouatiki Frères expert will contact you within 48 hours for an initial framing.",
      "شكراً لثقتكم. وصل طلبكم إلى فريقنا. سيتواصل معكم خبير من إل واتيكي إخوان خلال 48 ساعة لإطار أولي.",
    ],
    subject: [
      "Accusé de réception : Votre projet chez EL OUATIKI FRÈRES",
      "Acknowledgement: Your project with EL OUATIKI FRÈRES",
      "إشعار استلام: مشروعكم لدى إل واتيكي إخوان",
    ],
    fromName: ["EL OUATIKI FRÈRES", "EL OUATIKI FRÈRES", "إل واتيكي إخوان"],
    labelName: [
      "Nom complet du contact",
      "Full name of contact",
      "الاسم الكامل لجهة الاتصال",
    ],
    placeholderName: [
      "Nom et prénom",
      "First and last name",
      "الاسم والنسب",
    ],
    ariaName: [
      "Nom complet du contact",
      "Full name of contact",
      "الاسم الكامل لجهة الاتصال",
    ],
    labelCompany: [
      "Entreprise ou maîtrise d'ouvrage",
      "Company or project owner",
      "الشركة أو صاحب المشروع",
    ],
    placeholderCompany: [
      "Raison sociale ou maître d'ouvrage",
      "Legal name or project owner",
      "الاسم التجاري أو صاحب المشروع",
    ],
    ariaCompany: [
      "Entreprise ou maîtrise d'ouvrage",
      "Company or project owner",
      "الشركة أو صاحب المشروع",
    ],
    labelEmail: [
      "Email professionnel (réponse)",
      "Work email (for reply)",
      "البريد المهني (للرد)",
    ],
    placeholderEmail: [
      "vous@entreprise.ma",
      "you@company.com",
      "you@company.ma",
    ],
    ariaEmail: [
      "Email professionnel pour la réponse",
      "Work email for replies",
      "البريد المهني للرد",
    ],
    labelPhone: [
      "Téléphone de contact",
      "Contact phone",
      "هاتف الاتصال",
    ],
    placeholderPhone: ["+212 …", "+212 …", "+212 …"],
    ariaPhone: [
      "Téléphone de contact",
      "Contact phone",
      "هاتف الاتصال",
    ],
    labelProjectType: [
      "Type de projet envisagé",
      "Planned project type",
      "نوع المشروع المرتقب",
    ],
    selectProjectType: [
      "Sélectionnez un type",
      "Select a type",
      "اختر نوعاً",
    ],
    ariaProjectType: [
      "Type de projet envisagé",
      "Planned project type",
      "نوع المشروع المرتقب",
    ],
    labelBudget: [
      "Budget estimé du projet",
      "Estimated project budget",
      "الميزانية التقديرية للمشروع",
    ],
    selectBudget: [
      "Sélectionnez une fourchette",
      "Select a range",
      "اختر نطاقاً",
    ],
    ariaBudget: [
      "Budget estimé du projet",
      "Estimated project budget",
      "الميزانية التقديرية للمشروع",
    ],
    labelAttachment: [
      "Pièce jointe (facultatif)",
      "Attachment (optional)",
      "مرفق (اختياري)",
    ],
    ariaAttachment: [
      "Pièce jointe facultative (PDF, plans, etc.)",
      "Optional attachment (PDF, plans, etc.)",
      "مرفق اختياري (PDF، مخططات، إلخ)",
    ],
    attachmentHint: [
      "PDF, Word, archives, DWG ou images — Taille maximale conseillée : 15 Mo. Pour les fichiers plus lourds (maquettes BIM, plans complexes), merci d'insérer un lien WeTransfer ou Google Drive dans le message.",
      "PDF, Word, archives, DWG, or images—max 15 MB recommended. For larger files (BIM models, complex plans), add a WeTransfer or Google Drive link in the message.",
      "PDF أو Word أو أرشيف أو DWG أو صور — الحد الأقصى الموصى به 15 ميغابايت. للملفات الأكبر (نماذج BIM، مخططات معقدة)، أضيفوا رابط WeTransfer أو Google Drive في الرسالة.",
    ],
    labelMessage: [
      "Message et enjeux du projet",
      "Message and project stakes",
      "الرسالة وقضايا المشروع",
    ],
    placeholderMessage: [
      "Contexte, délais, contraintes, objectifs…",
      "Context, deadlines, constraints, goals…",
      "السياق، الآجال، القيود، الأهداف…",
    ],
    ariaMessage: [
      "Message et enjeux du projet",
      "Message and project stakes",
      "الرسالة وقضايا المشروع",
    ],
    submitSending: [
      "Envoi en cours…",
      "Sending…",
      "جاري الإرسال…",
    ],
    submitIdle: [
      "Envoyer ma demande de cadrage",
      "Send my framing request",
      "إرسال طلب الإطار",
    ],
    configError: [
      "Configuration incomplète : ajoutez NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY dans votre fichier d'environnement.",
      "Incomplete configuration: add NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY to your environment file.",
      "إعداد ناقص: أضيفوا NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY في ملف البيئة.",
    ],
    sendFailed: [
      "L'envoi a échoué. Vérifiez les champs ou réessayez plus tard.",
      "Sending failed. Check the fields or try again later.",
      "فشل الإرسال. تحققوا من الحقول أو أعيدوا المحاولة لاحقاً.",
    ],
    networkError: [
      "Connexion impossible. Réessayez dans quelques instants.",
      "Connection failed. Try again shortly.",
      "تعذر الاتصال. أعيدوا المحاولة بعد لحظات.",
    ],
    errName: [
      "Le nom complet est obligatoire.",
      "Full name is required.",
      "الاسم الكامل إلزامي.",
    ],
    errCompany: [
      "L'entreprise / maîtrise d'ouvrage est obligatoire.",
      "Company / project owner is required.",
      "الشركة / صاحب المشروع إلزامي.",
    ],
    errEmailRequired: [
      "L'email professionnel est obligatoire.",
      "Work email is required.",
      "البريد المهني إلزامي.",
    ],
    errEmailFormat: [
      "Format d'email invalide.",
      "Invalid email format.",
      "صيغة البريد غير صالحة.",
    ],
    errPhoneRequired: [
      "Le téléphone est obligatoire.",
      "Phone is required.",
      "الهاتف إلزامي.",
    ],
    errPhoneDigits: [
      "Le numéro doit contenir au moins 10 chiffres.",
      "The number must contain at least 10 digits.",
      "يجب أن يحتوي الرقم على 10 أرقام على الأقل.",
    ],
    errProjectType: [
      "Veuillez sélectionner un type de projet.",
      "Please select a project type.",
      "يرجى اختيار نوع المشروع.",
    ],
    errBudget: [
      "Veuillez sélectionner une fourchette de budget.",
      "Please select a budget range.",
      "يرجى اختيار نطاق الميزانية.",
    ],
    errMessage: [
      "Décrivez les enjeux de votre projet.",
      "Describe your project's stakes.",
      "صفوا قضايا مشروعكم.",
    ],
    errAttachment: [
      "Le fichier dépasse 15 Mo (limite hébergement). Utilisez un lien WeTransfer ou Google Drive dans le message.",
      "File exceeds 15 MB (hosting limit). Use a WeTransfer or Google Drive link in the message.",
      "الملف يتجاوز 15 ميغابايت. استخدموا رابط WeTransfer أو Google Drive في الرسالة.",
    ],
    ptMarche: [
      "Marchés Publics / Équipement de l'État",
      "Public procurement / State facilities",
      "صفقات عمومية / تجهيز الدولة",
    ],
    ptResidentiel: [
      "Bâtiment Résidentiel",
      "Residential building",
      "مبنى سكني",
    ],
    ptTertiaire: [
      "Bâtiment Tertiaire & Bureaux",
      "Office & tertiary building",
      "مبنى إداري ومكاتب",
    ],
    ptIndustriel: [
      "Bâtiment Industriel & Logistique",
      "Industrial & logistics building",
      "مبنى صناعي ولوجستي",
    ],
    ptInfra: [
      "Infrastructures / Génie Civil",
      "Infrastructure / civil engineering",
      "بنيات تحتية / هندسة مدنية",
    ],
    ptRehab: [
      "Réhabilitation / Rénovation",
      "Rehabilitation / renovation",
      "إعادة تأهيل / تجديد",
    ],
    bd1: ["< 5 Millions MAD", "< 5M MAD", "< 5 ملايين درهم"],
    bd2: ["5M - 20 Millions MAD", "5M - 20M MAD", "5-20 مليون درهم"],
    bd3: ["20M - 50 Millions MAD", "20M - 50M MAD", "20-50 مليون درهم"],
    bd4: ["> 50 Millions MAD", "> 50M MAD", "> 50 مليون درهم"],
    bd5: ["À définir", "To be defined", "يُحدَّد لاحقاً"],
  },
  Partners: {
    eyebrow: ["Références", "References", "مراجع"],
    title: [
      "Ils nous font confiance",
      "They trust us",
      "يثقون بنا",
    ],
    subtitle: [
      "Des acteurs majeurs de la construction, du service public et de l'innovation s'appuient sur notre méthode pour sécuriser l'exécution de leurs projets complexes.",
      "Major players in construction, public service, and innovation rely on our method to de-risk complex project delivery.",
      "فاعلون كبار في البناء والخدمة العامة والابتكار يعتمدون منهجيتنا لتأمين تنفيذ مشاريعهم المعقدة.",
    ],
    alt: {
      jesa: [
        "le plus grand Groupe d'ingénierie au Maroc",
        "Morocco's largest engineering group",
        "أكبر مجموعة هندسية في المغرب",
      ],
      ocp: [
        "OCP Group — groupe minier et industriel",
        "OCP Group — mining and industrial group",
        "مجموعة OCP — مجموعة تعدين وصناعة",
      ],
      veolia: [
        "Veolia Transport — mobilité et services",
        "Veolia Transport — mobility and services",
        "فيوليا للنقل — التنقل والخدمات",
      ],
      interieur: [
        "Ministère de l'Intérieur — Royaume du Maroc",
        "Ministry of Interior — Kingdom of Morocco",
        "وزارة الداخلية — المملكة المغربية",
      ],
      habous: [
        "Ministère des Habous et des Affaires Islamiques — Royaume du Maroc",
        "Ministry of Habous and Islamic Affairs — Kingdom of Morocco",
        "وزارة الأوقاف والشؤون الإسلامية — المملكة المغربية",
      ],
      sante: [
        "Ministère de la Santé — Royaume du Maroc",
        "Ministry of Health — Kingdom of Morocco",
        "وزارة الصحة — المملكة المغربية",
      ],
      anep: [
        "ANEP Maroc — Agence Nationale des Équipements Publics",
        "ANEP Morocco — National Public Facilities Agency",
        "الوكالة الوطنية للتجهيزات العمومية — المغرب",
      ],
      arep: [
        "AREP (MAROC) — Agence Régionale d'Exécution des Projets",
        "AREP (Morocco) — Regional Project Execution Agency",
        "الوكالة الجهوية لتنفيذ المشاريع — المغرب",
      ],
      apdn: [
        "APDN — Agence pour la Promotion et le Développement du Nord",
        "APDN — Agency for the Promotion and Development of the North",
        "وكالة إنعاش وتنمية الشمال",
      ],
      ofppt: [
        "OFPPT — Office de la Formation Professionnelle et de la Promotion du Travail",
        "OFPPT — vocational training and labour promotion office",
        "مكتب التكوين المهني وإنعاش الشغل",
      ],
      lasamir: [
        "LASAMIR Maroc — Raffinerie de Mohammédia",
        "LASAMIR Morocco — Mohammedia refinery",
        "لاسامير المغرب — مصفاة المحمدية",
      ],
    },
  },
  Footer: {
    tagline: [
      "Elouatiki Frères : L'alliance de l'expertise constructive et de l'intelligence prédictive.",
      "Elouatiki Frères: the union of construction expertise and predictive intelligence.",
      "إل واتيكي إخوان: الجمع بين الخبرة الإنشائية والذكاء التنبؤي.",
    ],
    linkedin: ["LinkedIn", "LinkedIn", "لينكدإن"],
    youtube: ["YouTube", "YouTube", "يوتيوب"],
    instagram: ["Instagram", "Instagram", "إنستغرام"],
    colExpertise: ["Pôles d'Expertise", "Expertise areas", "مجالات الخبرة"],
    linkIaBtp: [
      "IA pour le BTP",
      "AI for construction",
      "الذكاء الاصطناعي للبناء",
    ],
    linkGrosOeuvre: [
      "Gros Œuvre & Construction",
      "Structural work & construction",
      "الأشغال الكبرى والإنشاء",
    ],
    linkBim: [
      "BIM intelligent (Building Information Modeling)",
      "Smart BIM (Building Information Modeling)",
      "نمذجة معلومات البناء الذكية (BIM)",
    ],
    linkMaintenance: [
      "Maintenance Prédictive",
      "Predictive maintenance",
      "الصيانة التنبؤية",
    ],
    linkReno: [
      "Rénovation Énergétique",
      "Energy renovation",
      "التجديد الطاقي",
    ],
    colCompany: ["Qui sommes-nous ?", "Who we are", "من نحن؟"],
    linkAbout: [
      "À propos de nous",
      "About us",
      "من نحن",
    ],
    linkPortfolio: [
      "Nos Réalisations / Portfolio",
      "Our work / Portfolio",
      "إنجازاتنا / معرض الأعمال",
    ],
    linkCareers: [
      "Carrières / Recrutement",
      "Careers / Hiring",
      "الوظائف / التوظيف",
    ],
    linkBlog: [
      "Blog / Actualités",
      "Blog / News",
      "المدونة / الأخبار",
    ],
    colContact: ["Nous joindre", "Contact us", "التواصل"],
    address: [
      "179 LOT KAMILA, ROUTE D'AGOURAI, 50000 MEKNES, MAROC",
      "179 LOT KAMILA, ROUTE D'AGOURAI, 50000 MEKNES, MOROCCO",
      "قطعة 179 كاميلا، طريق أكوراي، 50000 مكناس، المغرب",
    ],
    intervention: [
      "Zone d'intervention : Maroc & International",
      "Coverage: Morocco & international",
      "نطاق التدخل: المغرب والدولية",
    ],
    copyright: [
      "© 2025 Elouatiki Frères. Tous droits réservés.",
      "© 2025 Elouatiki Frères. All rights reserved.",
      "© 2025 إل واتيكي إخوان. جميع الحقوق محفوظة.",
    ],
    legal: [
      "Mentions Légales",
      "Legal notice",
      "الإشعارات القانونية",
    ],
    privacy: [
      "Politique de Confidentialité / RGPD",
      "Privacy policy / GDPR",
      "سياسة الخصوصية / حماية البيانات",
    ],
    cookies: [
      "Gestion des Cookies",
      "Cookie settings",
      "إدارة ملفات تعريف الارتباط",
    ],
  },
  Features: {
    bim: {
      closeAria: [
        "Fermer le panneau BIM",
        "Close BIM panel",
        "إغلاق لوحة BIM",
      ],
      badge: [
        "Détection de conflits BIM active",
        "Active BIM clash detection",
        "كشف تعارضات BIM نشط",
      ],
      drawerTitle: [
        "Simulateur Clash Detection",
        "Clash detection simulator",
        "محاكي كشف التعارضات",
      ],
      drawerDesc: [
        "Maquette numérique, détection de conflits et arbitrages data dès la conception pour sécuriser coûts et délais.",
        "Digital models, clash detection, and data-driven trade-offs from design to protect cost and schedule.",
        "نموذج رقمي وكشف تعارضات وقرارات مبنية على البيانات من التصميم لتأمين التكلفة والآجال.",
      ],
      b1t: ["Modèles fédérés :", "Federated models:", "نماذج موحّدة:"],
      b1b: [
        "Agrégation multi-lots avec règles de collision automatiques avant exécution.",
        "Multi-package aggregation with automatic collision rules before execution.",
        "تجميع متعدد الحزم مع قواعد تصادم تلقائية قبل التنفيذ.",
      ],
      b2t: ["Quantités & coûts :", "Quantities & costs:", "الكميات والتكاليف:"],
      b2b: [
        "Extraction BIM reliée aux bordereaux pour suivre l'écart budget / réalisé.",
        "BIM extraction tied to BOQs to track budget vs. actual variance.",
        "استخراج BIM مرتبط بجداول الكميات لتتبع الفارق بين الميزانية والمنجز.",
      ],
      b3t: ["Conformité :", "Compliance:", "الامتثال:"],
      b3b: [
        "Scénarios de reprise et preuves numériques pour la coordination MOEX / entreprises.",
        "Recovery scenarios and digital evidence for owner / contractor coordination.",
        "سيناريوهات استئناف وأدلة رقمية لتنسيق المالك والمقاولين.",
      ],
      s1l: [
        "Dépassement budget",
        "Budget overrun",
        "تجاوز الميزانية",
      ],
      s2l: ["Conflits résolus", "Clashes resolved", "تعارضات محلولة"],
      s3l: ["Jour de retard", "Days late", "أيام تأخير"],
      cta: [
        "Lancer la simulation BIM",
        "Launch the BIM simulation",
        "تشغيل محاكاة BIM",
      ],
      cardTitle: [
        "Conception Intelligente & BIM",
        "Smart design & BIM",
        "تصميم ذكي وBIM",
      ],
      cardDesc: [
        "Maquette numérique, détection de conflits et arbitrages data dès la conception pour sécuriser coûts et délais.",
        "Digital models, clash detection, and data trade-offs from design to protect cost and schedule.",
        "نموذج رقمي وكشف تعارضات وقرارات بيانية من التصميم لتأمين التكلفة والآجال.",
      ],
      openDetail: [
        "Ouvrir le détail",
        "Open details",
        "افتح التفاصيل",
      ],
    },
    logistics: {
      closeAria: [
        "Fermer le panneau logistique",
        "Close logistics panel",
        "إغلاق لوحة اللوجستيات",
      ],
      badge: [
        "Synchronisation Logistique IA Active",
        "Active AI logistics sync",
        "مزامنة لوجستية بالذكاء الاصطناعي",
      ],
      drawerTitle: [
        "Le bon matériau, au bon endroit, à la seconde près.",
        "The right material, in the right place, at the right second.",
        "المواد الصحيحة، في المكان الصحيح، في اللحظة الصحيحة.",
      ],
      drawerDesc: [
        "Sur un chantier traditionnel, 30% du temps est perdu à attendre. Notre IA connecte votre chaîne d'approvisionnement directement à l'avancement réel du terrain.",
        "On a traditional site, 30% of time is lost waiting. Our AI connects your supply chain to real field progress.",
        "في موقع تقليدي، يُهدر 30٪ من الوقت في الانتظار. يربط ذكاؤنا الاصطناعي سلسلة التوريد بتقدم الميدان الفعلي.",
      ],
      b1t: ["Prévision des goulots :", "Bottleneck forecasting:", "التنبؤ بالاختناقات:"],
      b1b: [
        "L'algorithme anticipe les conflits de co-activité et la saturation des équipements des jours à l'avance.",
        "The algorithm anticipates co-activity conflicts and equipment saturation days ahead.",
        "يتنبأ الخوارزم بتعارضات العمل المشترك وإشغال المعدات قبل أيام.",
      ],
      b2t: ["Flux Juste-à-Temps :", "Just-in-time flows:", "تدفقات الوقت المناسب:"],
      b2b: [
        "Déclenchement des livraisons exactement quand l'équipe est prête. Réduction massive du gaspillage matériel.",
        "Deliveries triggered exactly when the crew is ready. Major cut in material waste.",
        "تُطلق التوريدات عند جاهزية الفريق تماماً. خفض كبير لهدر المواد.",
      ],
      b3t: ["Planning Dynamique :", "Dynamic scheduling:", "جدولة ديناميكية:"],
      b3b: [
        "En cas d'imprévu (météo, retard), l'IA recalcule le chemin critique et réaffecte les équipes instantanément.",
        "When surprises hit (weather, delays), AI recalculates the critical path and reallocates crews instantly.",
        "عند المفاجآت (الطقس، التأخير) يعيد الذكاء الاصطناعي حساب المسار الحرج وإعادة توزيع الفرق فوراً.",
      ],
      s1l: [
        "Coûts de stockage",
        "Storage costs",
        "تكاليف التخزين",
      ],
      s2l: ["Productivité", "Productivity", "الإنتاجية"],
      s3l: ["Temps mort", "Downtime", "وقت التعطيل"],
      cta: [
        "Voir une démo du pilotage temps réel",
        "See a real-time operations demo",
        "شاهد عرضاً للتوجيه اللحظي",
      ],
      cardTitle: [
        "Pilotage & Logistique Data",
        "Data-driven operations & logistics",
        "توجيه ولوجستيات بالبيانات",
      ],
      cardDesc: [
        "Ordonnancement fin, flux matériaux et synchronisation des équipes pilotés par la donnée chantier en temps réel.",
        "Fine scheduling, material flows, and crew sync driven by live site data.",
        "جدولة دقيقة وتدفق مواد ومزامنة فرق بقيادة بيانات الموقع اللحظية.",
      ],
      openDetail: [
        "Ouvrir le détail",
        "Open details",
        "افتح التفاصيل",
      ],
    },
    tracking: {
      closeAria: [
        "Fermer le panneau suivi 360°",
        "Close 360° tracking panel",
        "إغلاق لوحة التتبع 360°",
      ],
      badge: [
        "Computer Vision & IoT Actifs",
        "Computer vision & IoT active",
        "رؤية حاسوبية وإنترنت أشياء نشطة",
      ],
      drawerTitle: [
        "Le chantier devient un environnement intelligent.",
        "The site becomes a smart environment.",
        "يصبح الموقع بيئة ذكية.",
      ],
      drawerDesc: [
        "Grâce aux capteurs IoT et à la vision par ordinateur, nous transformons chaque action sur le terrain en une donnée fiable, traçable et actionnable pour un contrôle qualité total.",
        "With IoT sensors and computer vision, we turn every field action into reliable, traceable, actionable data for full quality control.",
        "بأجهزة استشعار IoT ورؤية الحاسوب نحوّل كل فعل ميداني إلى بيانات موثوقة قابلة للتتبع والإجراء لرقابة جودة شاملة.",
      ],
      b1t: ["Vision par Ordinateur :", "Computer vision:", "رؤية الحاسوب:"],
      b1b: [
        "L'IA compare la construction réelle avec le BIM et vérifie automatiquement le respect des normes de sécurité.",
        "AI compares as-built work to BIM and automatically checks safety compliance.",
        "يقارن الذكاء الاصطناعي المنفذ بالفعل بـ BIM ويتحقق تلقائياً من السلامة.",
      ],
      b2t: ["Checklists Numériques :", "Digital checklists:", "قوائم تحقق رقمية:"],
      b2b: [
        "Chaque étape est photographiée, géolocalisée et validée sur tablette. Traçabilité totale.",
        "Each step is photographed, geotagged, and validated on tablet. Full traceability.",
        "تُصوَّر كل مرحلة وتُحدَّد جغرافياً وتُعتمد على الجهاز اللوحي. تتبع كامل.",
      ],
      b3t: ["Capteurs IoT :", "IoT sensors:", "مستشعرات IoT:"],
      b3b: [
        "Sondes connectées mesurant le séchage du béton ou la météo en temps réel pour déclencher les prochaines tâches au moment idéal.",
        "Connected probes for concrete curing or live weather to trigger the next tasks at the ideal moment.",
        "مجسات لقياس جفاف الخرسانة أو الطقس لحظياً لتشغيل المهام التالية في الوقت الأمثل.",
      ],
      s1l: ["Traçabilité", "Traceability", "التتبع"],
      s2l: [
        "Temps de reporting",
        "Reporting time",
        "وقت التقارير",
      ],
      s3l: [
        "Défaut de sécurité",
        "Safety gap",
        "خلل أمني",
      ],
      cta: [
        "Découvrir un rapport de chantier interactif",
        "Explore an interactive site report",
        "اكتشف تقرير موقع تفاعلي",
      ],
      cardTitle: [
        "Réalisation Connectée & Suivi 360°",
        "Connected delivery & 360° tracking",
        "تنفيذ متصل وتتبع 360°",
      ],
      cardDesc: [
        "Capteurs, reporting automatisé et indicateurs terrain pour une visibilité complète sur l'exécution.",
        "Sensors, automated reporting, and field KPIs for full visibility on execution.",
        "مستشعرات وتقارير آلية ومؤشرات ميدانية لرؤية كاملة للتنفيذ.",
      ],
      openDetail: [
        "Ouvrir le détail",
        "Open details",
        "افتح التفاصيل",
      ],
    },
    management: {
      closeAria: [
        "Fermer le panneau livraison et jumeau numérique",
        "Close delivery & digital twin panel",
        "إغلاق لوحة التسليم والتوأم الرقمي",
      ],
      badge: [
        "Jumeau numérique & DOE synchronisés",
        "Digital twin & as-built file in sync",
        "توأم رقمي وملف تنفيذ متزامنان",
      ],
      drawerTitle: [
        "De la réception à l'exploitation : un actif entièrement numérique.",
        "From handover to operations: a fully digital asset.",
        "من الاستلام إلى التشغيل: أصل رقمي بالكامل.",
      ],
      drawerDesc: [
        "La livraison n'est pas une fin : c'est le point de bascule vers la valeur long terme. Nous consolidons le DOE, les preuves de conformité et le jumeau d'exploitation pour que chaque décision après livraison s'appuie sur des données à jour, structurées et exploitables.",
        "Delivery is not the end—it's the pivot to long-term value. We consolidate the as-built file, compliance evidence, and operations twin so every post-handover decision rests on current, structured, usable data.",
        "التسليم ليس نهاية بل نقطة تحول نحو قيمة طويلة الأمد. ندمج ملف التنفيذ وأدلة الامتثال والتوأم التشغيلي ليقرر كل ما بعد التسليم على بيانات حديثة ومنظمة قابلة للاستخدام.",
      ],
      b1t: ["DOE & réception numérique :", "Digital as-built & handover:", "ملف تنفيذ واستلام رقمي:"],
      b1b: [
        "Dossiers homogènes, preuves traçables et clôture de lots sans friction documentaire.",
        "Consistent files, traceable evidence, and package close-out without document friction.",
        "ملفات موحّدة وأدلة قابلة للتتبع وإغلاق حزم بلا احتكاك وثائقي.",
      ],
      b2t: ["Jumeau d'exploitation :", "Operations twin:", "توأم تشغيلي:"],
      b2b: [
        "Le modèle BIM enrichi des as-built et des capteurs pour suivre l'ouvrage comme un système vivant.",
        "BIM enriched with as-builts and sensors to run the asset as a living system.",
        "نموذج BIM معزّز بالمنفذ والمستشعرات لتتبع المنشأة كنظام حي.",
      ],
      b3t: ["Pilotage financier & GMAO :", "Financial control & CMMS:", "توجيه مالي وصيانة:"],
      b3b: [
        "Tableaux de bord et intégrations pour prolonger la rentabilité et réduire les coûts cachés du cycle de vie.",
        "Dashboards and integrations to extend profitability and cut hidden lifecycle costs.",
        "لوحات معلومات وتكاملات لتمديد الربحية وتقليل تكاليف دورة الحياة الخفية.",
      ],
      s1l: ["Rentabilité", "Profitability", "الربحية"],
      s2l: ["Productivité", "Productivity", "الإنتاجية"],
      s3l: ["Papier", "Paper", "ورق"],
      cta: [
        "Structurer ma livraison",
        "Structure my handover",
        "هيكلة تسليمي",
      ],
      cardTitle: [
        "Livraison & Jumeau Numérique",
        "Delivery & digital twin",
        "التسليم والتوأم الرقمي",
      ],
      cardDesc: [
        "Réception, DOE numérique et jumeau d'exploitation pour prolonger la valeur de l'ouvrage après livraison.",
        "Handover, digital as-built, and operations twin to extend asset value after delivery.",
        "استلام وملف تنفيذ رقمي وتوأم تشغيلي لتمديد قيمة المنشأة بعد التسليم.",
      ],
      openDetail: [
        "Ouvrir le détail",
        "Open details",
        "افتح التفاصيل",
      ],
    },
  },
};

function pickLocale(obj, i) {
  if (Array.isArray(obj)) return obj[i];
  const out = {};
  for (const k of Object.keys(obj)) {
    out[k] = pickLocale(obj[k], i);
  }
  return out;
}

const fr = pickLocale(shared, 0);
const en = pickLocale(shared, 1);
const ar = pickLocale(shared, 2);

writeFileSync(join(root, "messages/fr.json"), `${JSON.stringify(fr, null, 2)}\n`, "utf8");
writeFileSync(join(root, "messages/en.json"), `${JSON.stringify(en, null, 2)}\n`, "utf8");
writeFileSync(join(root, "messages/ar.json"), `${JSON.stringify(ar, null, 2)}\n`, "utf8");

console.log("Wrote messages/fr.json, en.json, ar.json");
