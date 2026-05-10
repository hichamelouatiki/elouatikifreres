/**
 * Schéma de validation Zod pour le formulaire de contact.
 *
 * Source de vérité unique pour toutes les règles métier :
 * longueurs, formats, listes blanches. Les types TypeScript sont inférés
 * automatiquement depuis ce schéma (ContactFormData, ContactFormErrors).
 *
 * Usage côté formulaire :
 *   const result = contactFormSchema.safeParse(rawData);
 *   if (!result.success) { ... result.error.flatten().fieldErrors ... }
 *
 * Usage futur côté serveur (route API, Server Action) :
 *   const data = contactFormSchema.parse(req.body); // lève une ZodError si invalide
 */

import { z } from "zod";

export const MAX_ATTACHMENT_BYTES = 15 * 1024 * 1024;

export const ALLOWED_ATTACHMENT_EXTENSIONS = new Set([
  "pdf",
  "doc",
  "docx",
  "zip",
  "rar",
  "dwg",
  "jpg",
  "jpeg",
  "png",
]);

export const ALLOWED_ATTACHMENT_TYPES = new Set([
  "application/pdf",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  "application/zip",
  "application/x-zip-compressed",
  "application/vnd.rar",
  "application/x-rar-compressed",
  "image/jpeg",
  "image/png",
]);

/** Normalise une chaîne : supprime les caractères de contrôle, normalise les espaces. */
function normalize(value: string, max: number): string {
  return value.replace(/[\u0000-\u001F\u007F]/g, " ").replace(/\s+/g, " ").trim().slice(0, max);
}

function countDigits(value: string): number {
  return value.replace(/\D/g, "").length;
}

export const contactFormSchema = z.object({
  projectType: z.string().min(1, "errProjectType"),

  budget: z.string().min(1, "errBudget"),

  name: z
    .string()
    .transform((v) => normalize(v, 120))
    .pipe(z.string().min(1, "errName").max(120)),

  company: z
    .string()
    .transform((v) => normalize(v, 160))
    .pipe(z.string().min(1, "errCompany").max(160)),

  email: z
    .string()
    .transform((v) => normalize(v, 254).toLowerCase())
    .pipe(
      z
        .string()
        .min(1, "errEmailRequired")
        .max(254)
        .regex(/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/, "errEmailFormat"),
    ),

  phone: z
    .string()
    .transform((v) => normalize(v, 40))
    .pipe(
      z
        .string()
        .min(1, "errPhoneRequired")
        .max(40)
        .refine((v) => countDigits(v) >= 10, "errPhoneDigits"),
    ),

  message: z
    .string()
    .optional()
    .transform((v) => (v ? normalize(v, 2000) : "")),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;

/** Schéma de validation de la réponse JSON de l'API Web3Forms. */
export const web3FormsResponseSchema = z.object({
  success: z.boolean(),
  message: z.string().optional(),
});

export type Web3FormsResponse = z.infer<typeof web3FormsResponseSchema>;
