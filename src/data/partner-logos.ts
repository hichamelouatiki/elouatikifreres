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
    alt: "le plus grand groupe d'ingénierie au Maroc",
  },
  {
    src: "/media/Partener/ocp-group.svg",
    alt: "OCP Group — groupe minier et industriel",
  },
  {
    src: "/media/Partener/veolia-transport.svg",
    alt: "Veolia Transport — mobilité et services",
  },

];
