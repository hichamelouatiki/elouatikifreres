/**
 * Logos partenaires — fichiers servis depuis `/public/media/Partener/`.
 * Hypothèse : les assets sont synchronisés depuis `media/Partener` vers ce dossier public.
 * Les entrées « fictives » partagent parfois un fichier réel en attendant vos visuels définitifs.
 */
export type PartnerLogo = {
  src: string;
  alt: string;
};

export const PARTNER_LOGOS: PartnerLogo[] = [
  {
    src: "/media/Partener/JESA (Jacobs Engineering SA).png",
    alt: "le plus grand Groupe d'ingénierie au Maroc",
  },
  {
    src: "/media/Partener/ocp-group.svg",
    alt: "OCP Group — groupe minier et industriel",
  },
  {
    src: "/media/Partener/veolia-transport.svg",
    alt: "Veolia Transport — mobilité et services",
  },
  {
    src: "/media/Partener/ministere-interieur.png",
    alt: "Ministère de l’Intérieur — Royaume du Maroc",
  },
  {
    src: "/media/Partener/ministere-habous-affaires-islamiques.png",
    alt: "Ministère des Habous et des Affaires Islamiques — Royaume du Maroc",
  },
  {
    src: "/media/Partener/ministere-sante-maroc.png",
    alt: "Ministère de la Santé — Royaume du Maroc",
  },
  {
    src: "/media/Partener/anep-maroc.png",
    alt: "ANEP Maroc — Agence Nationale des Équipements Publics",
  },
  {
    src: "/media/Partener/agence-regionale-execution-projets.png",
    alt: "AREP (MAROC) — Agence Régionale d’Exécution des Projets",
  },
  {
    src: "/media/Partener/apdn.jpg",
    alt: "APDN — Agence pour la Promotion et le Développement du Nord",
  },
  {
    src: "/media/Partener/offpt.png",
    alt: "OFPPT — Office de la Formation Professionnelle et — de la Promotion du Travail",
  },
  {
    src: "/media/Partener/lasamir.jpg",
    alt: "LASAMIR Maroc — Raffinerie de Mohammédia",
  },
];
