/**
 * Logos partenaires — fichiers servis depuis `/public/media/Partener/`.
 * Hypothèse : les assets sont synchronisés depuis `media/Partener` vers ce dossier public.
 * Les entrées « fictives » partagent parfois un fichier réel en attendant vos visuels définitifs.
 */
export type PartnerLogo = {
  /** Clé pour `Partners.alt.{id}` dans les fichiers de messages. */
  id: string;
  src: string;
};

export const PARTNER_LOGOS: PartnerLogo[] = [
  {
    id: "jesa",
    src: "/media/Partener/JESA (Jacobs Engineering SA).png",
  },
  {
    id: "ocp",
    src: "/media/Partener/ocp-group.svg",
  },
  {
    id: "veolia",
    src: "/media/Partener/veolia-transport.svg",
  },
  {
    id: "interieur",
    src: "/media/Partener/ministere-interieur.png",
  },
  {
    id: "habous",
    src: "/media/Partener/ministere-habous-affaires-islamiques.png",
  },
  {
    id: "sante",
    src: "/media/Partener/ministere-sante-maroc.png",
  },
  {
    id: "anep",
    src: "/media/Partener/anep-maroc.png",
  },
  {
    id: "arep",
    src: "/media/Partener/agence-regionale-execution-projets.png",
  },
  {
    id: "apdn",
    src: "/media/Partener/apdn.jpg",
  },
  {
    id: "ofppt",
    src: "/media/Partener/offpt.png",
  },
  {
    id: "lasamir",
    src: "/media/Partener/lasamir.jpg",
  },
];
