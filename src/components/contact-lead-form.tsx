"use client";

/**
 * Formulaire de qualification de leads (cadrage projet) — envoi Web3Forms (multipart, UTF-8).
 * - Champ `email` : doit s’appeler exactement `email` (autoresponder Web3Forms).
 * - Autres `name` : clés stables (underscores) pour l’e-mail admin + récap autoresponder.
 * Validation stricte côté client + retours visuels par champ.
 *
 * Clé API : définir NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY dans `.env.local` (ne jamais committer la clé).
 * Autoresponder : activer dans le tableau de bord Web3Forms pour ce formulaire.
 */

import { useCallback, useMemo, useState } from "react";
import { CheckCircle2 } from "lucide-react";

import { cn } from "@/lib/utils";

/**
 * Noms de champs Web3Forms : ASCII + underscores (récap admin / autoresponder).
 * `email` doit rester le littéral `email` (exigence autoresponder).
 */
const WF = {
  name: "Nom_Contact",
  company: "Entreprise_Societe",
  /** Identifiant visiteur — ne pas renommer (Web3Forms autoresponder). */
  email: "email",
  phone: "Telephone",
  projectType: "Type_de_Construction",
  budget: "Budget_Estime",
  message: "Details_du_Projet",
  attachment: "Piece_jointe",
} as const;

const MAX_ATTACHMENT_BYTES = 15 * 1024 * 1024;

/** Regex email pragmatique (format courant professionnel). */
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

const baseInput =
  "h-12 w-full rounded-xl border px-4 text-sm text-white placeholder:text-zinc-500 " +
  "focus:outline-none focus:ring-1";

const baseSelect =
  "h-12 w-full rounded-xl border px-4 text-sm text-white focus:outline-none focus:ring-1";

const baseTextarea =
  "min-h-[140px] w-full rounded-xl border px-4 py-3 text-sm text-white placeholder:text-zinc-500 " +
  "focus:outline-none focus:ring-1";

const baseFile =
  "w-full cursor-pointer rounded-xl border px-3 py-2 text-sm text-zinc-300 focus:outline-none focus:ring-1 " +
  "file:mr-4 file:cursor-pointer file:rounded-full file:border-0 file:bg-cyan-900/30 file:px-4 file:py-2 file:text-sm file:font-semibold file:text-cyan-400 " +
  "file:hover:bg-cyan-900/50";

const normalBorder = "border-zinc-800 bg-zinc-900 focus:border-cyan-500 focus:ring-cyan-500";
const errorBorder = "border-red-500 bg-red-900/10 focus:border-red-500 focus:ring-red-500";

export type FieldErrorKey =
  | "name"
  | "company"
  | "email"
  | "phone"
  | "message"
  | "project_type"
  | "budget"
  | "attachment";

export type FieldErrors = Partial<Record<FieldErrorKey, string>>;

function countDigits(value: string): number {
  return value.replace(/\D/g, "").length;
}

export function ContactLeadForm() {
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [projectType, setProjectType] = useState("");
  const [budget, setBudget] = useState("");
  const [message, setMessage] = useState("");
  const [attachment, setAttachment] = useState<File | null>(null);

  const [errors, setErrors] = useState<FieldErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [resultMessage, setResultMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);

  const clearError = useCallback((key: FieldErrorKey) => {
    setErrors((prev) => {
      if (!(key in prev)) return prev;
      const next = { ...prev };
      delete next[key];
      return next;
    });
  }, []);

  /**
   * Valide tous les champs obligatoires et la pièce jointe.
   * Met à jour `errors` et retourne `true` si tout est valide.
   */
  const validateForm = useCallback((): boolean => {
    const next: FieldErrors = {};

    if (!name.trim()) {
      next.name = "Le nom complet est obligatoire.";
    }
    if (!company.trim()) {
      next.company = "L'entreprise / maîtrise d'ouvrage est obligatoire.";
    }
    const emailTrim = email.trim();
    if (!emailTrim) {
      next.email = "L'email professionnel est obligatoire.";
    } else if (!EMAIL_REGEX.test(emailTrim)) {
      next.email = "Format d'email invalide.";
    }
    if (!phone.trim()) {
      next.phone = "Le téléphone est obligatoire.";
    } else if (countDigits(phone) < 10) {
      next.phone = "Le numéro doit contenir au moins 10 chiffres.";
    }
    if (!projectType) {
      next.project_type = "Veuillez sélectionner un type de projet.";
    }
    if (!budget) {
      next.budget = "Veuillez sélectionner une fourchette de budget.";
    }
    if (!message.trim()) {
      next.message = "Décrivez les enjeux de votre projet.";
    }
    if (attachment && attachment.size > MAX_ATTACHMENT_BYTES) {
      next.attachment =
        "Le fichier dépasse 15 Mo (limite hébergement). Utilisez un lien WeTransfer ou Google Drive dans le message.";
    }

    setErrors(next);
    return Object.keys(next).length === 0;
  }, [name, company, email, phone, projectType, budget, message, attachment]);

  /** Formulaire considéré comme valide pour activer le bouton d'envoi (sans attendre un premier submit). */
  const isFormValid = useMemo(() => {
    if (
      !name.trim() ||
      !company.trim() ||
      !email.trim() ||
      !phone.trim() ||
      !message.trim() ||
      !projectType ||
      !budget
    ) {
      return false;
    }
    if (!EMAIL_REGEX.test(email.trim())) return false;
    if (countDigits(phone) < 10) return false;
    if (attachment && attachment.size > MAX_ATTACHMENT_BYTES) return false;
    return true;
  }, [name, company, email, phone, message, projectType, budget, attachment]);

  const submitDisabled = isSubmitting || !isFormValid;

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setResultMessage("");

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY ?? "";
    if (!accessKey) {
      setResultMessage(
        "Configuration incomplète : ajoutez NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY dans votre fichier d'environnement.",
      );
      setIsSubmitting(false);
      return;
    }

    const formEl = e.currentTarget;
    const formData = new FormData(formEl);
    formData.set("access_key", accessKey);
    formData.set("replyto", email.trim());
    if (!formData.get("botcheck")) {
      formData.set("botcheck", "");
    }

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = (await res.json()) as { success?: boolean; message?: string };

      if (res.ok && data.success) {
        setIsSuccess(true);
        setName("");
        setCompany("");
        setEmail("");
        setPhone("");
        setProjectType("");
        setBudget("");
        setMessage("");
        setAttachment(null);
        setErrors({});
      } else {
        setResultMessage(
          data.message ?? "L'envoi a échoué. Vérifiez les champs ou réessayez plus tard.",
        );
      }
    } catch {
      setResultMessage("Connexion impossible. Réessayez dans quelques instants.");
    } finally {
      setIsSubmitting(false);
    }
  }

  if (isSuccess) {
    return (
      <div
        className="rounded-2xl border border-zinc-800 bg-zinc-950 p-8 shadow-2xl sm:p-10"
        role="status"
        aria-live="polite"
      >
        <div className="mx-auto flex max-w-md flex-col items-center text-center">
          <div className="mb-6 flex size-16 items-center justify-center rounded-full bg-cyan-500/15 ring-1 ring-cyan-500/40">
            <CheckCircle2 className="size-9 text-cyan-400" aria-hidden />
          </div>
          <h3 className="font-[family-name:var(--font-space-grotesk)] text-2xl font-bold text-white">
            Dossier transmis avec succès
          </h3>
          <p className="mt-4 leading-relaxed text-zinc-400">
            Merci de votre confiance. Votre demande a bien été transmise à nos équipes. Un expert de
            chez El Ouatiki Frères prendra contact avec vous sous 48h pour un premier cadrage.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="rounded-2xl border border-zinc-800 bg-zinc-950 p-6 shadow-2xl sm:p-8 md:p-10">
      <h3 className="mb-2 text-3xl font-bold text-white">Parlez-nous de votre projet</h3>
      <p className="mb-8 text-zinc-400">
        Remplissez ce formulaire pour obtenir une simulation et un cadrage stratégique.
      </p>

      <form
        acceptCharset="utf-8"
        encType="multipart/form-data"
        method="post"
        onSubmit={handleSubmit}
        className="space-y-5"
        noValidate
      >
        {/* Métadonnées Web3Forms : sujet / expéditeur affichés ; autoresponder activé côté dashboard. */}
        <input
          type="hidden"
          name="subject"
          value="Accusé de réception : Votre projet chez EL OUATIKI FRÈRES"
          readOnly
          aria-hidden
        />
        <input type="hidden" name="from_name" value="EL OUATIKI FRÈRES" readOnly aria-hidden />
        <input type="hidden" name="replyto" value={email} readOnly aria-hidden />

        <input type="checkbox" name="botcheck" className="hidden" style={{ display: "none" }} tabIndex={-1} aria-hidden />

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-5">
          <div>
            <label htmlFor="lead-name" className="mb-1.5 block text-sm font-medium text-zinc-400">
              Nom complet du contact <span className="text-red-400">*</span>
            </label>
            <input
              id="lead-name"
              type="text"
              name={WF.name}
              autoComplete="name"
              placeholder="Nom et prénom"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
                clearError("name");
              }}
              className={cn(baseInput, errors.name ? errorBorder : normalBorder)}
              aria-label="Nom complet du contact"
              aria-invalid={Boolean(errors.name)}
              aria-describedby={errors.name ? "err-name" : undefined}
            />
            {errors.name ? (
              <p id="err-name" className="mt-1 text-xs text-red-500">
                {errors.name}
              </p>
            ) : null}
          </div>

          <div>
            <label htmlFor="lead-company" className="mb-1.5 block text-sm font-medium text-zinc-400">
              Entreprise ou maîtrise d&apos;ouvrage <span className="text-red-400">*</span>
            </label>
            <input
              id="lead-company"
              type="text"
              name={WF.company}
              autoComplete="organization"
              placeholder="Raison sociale ou maître d'ouvrage"
              value={company}
              onChange={(e) => {
                setCompany(e.target.value);
                clearError("company");
              }}
              className={cn(baseInput, errors.company ? errorBorder : normalBorder)}
              aria-label="Entreprise ou maîtrise d'ouvrage"
              aria-invalid={Boolean(errors.company)}
              aria-describedby={errors.company ? "err-company" : undefined}
            />
            {errors.company ? (
              <p id="err-company" className="mt-1 text-xs text-red-500">
                {errors.company}
              </p>
            ) : null}
          </div>

          <div>
            <label htmlFor="lead-email" className="mb-1.5 block text-sm font-medium text-zinc-400">
              Email professionnel (réponse) <span className="text-red-400">*</span>
            </label>
            <input
              id="lead-email"
              type="email"
              name={WF.email}
              autoComplete="email"
              placeholder="vous@entreprise.ma"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                clearError("email");
              }}
              className={cn(baseInput, errors.email ? errorBorder : normalBorder)}
              aria-label="Email professionnel pour la réponse"
              aria-invalid={Boolean(errors.email)}
              aria-describedby={errors.email ? "err-email" : undefined}
            />
            {errors.email ? (
              <p id="err-email" className="mt-1 text-xs text-red-500">
                {errors.email}
              </p>
            ) : null}
          </div>

          <div>
            <label htmlFor="lead-phone" className="mb-1.5 block text-sm font-medium text-zinc-400">
              Téléphone de contact <span className="text-red-400">*</span>
            </label>
            <input
              id="lead-phone"
              type="tel"
              name={WF.phone}
              autoComplete="tel"
              placeholder="+212 …"
              value={phone}
              onChange={(e) => {
                setPhone(e.target.value);
                clearError("phone");
              }}
              className={cn(baseInput, errors.phone ? errorBorder : normalBorder)}
              aria-label="Téléphone de contact"
              aria-invalid={Boolean(errors.phone)}
              aria-describedby={errors.phone ? "err-phone" : undefined}
            />
            {errors.phone ? (
              <p id="err-phone" className="mt-1 text-xs text-red-500">
                {errors.phone}
              </p>
            ) : null}
          </div>

          <div>
            <label htmlFor="lead-project-type" className="mb-1.5 block text-sm font-medium text-zinc-400">
              Type de projet envisagé <span className="text-red-400">*</span>
            </label>
            <select
              id="lead-project-type"
              name={WF.projectType}
              value={projectType}
              onChange={(e) => {
                setProjectType(e.target.value);
                clearError("project_type");
              }}
              className={cn(baseSelect, errors.project_type ? errorBorder : normalBorder)}
              aria-label="Type de projet envisagé"
              aria-invalid={Boolean(errors.project_type)}
              aria-describedby={errors.project_type ? "err-project-type" : undefined}
            >
              <option value="" disabled>
                Sélectionnez un type
              </option>
              {/* Nouvelle ligne à ajouter : */}
              <option value="Marche_Public">Marchés Publics / Équipement de l&apos;État</option>
              <option value="Bâtiment Résidentiel">Bâtiment Résidentiel</option>
              <option value="Bâtiment Tertiaire & Bureaux">Bâtiment Tertiaire &amp; Bureaux</option>
              <option value="Bâtiment Industriel & Logistique">Bâtiment Industriel &amp; Logistique</option>
              <option value="Infrastructures / Génie Civil">Infrastructures / Génie Civil</option>
              <option value="Réhabilitation / Rénovation">Réhabilitation / Rénovation</option>
            </select>
            {errors.project_type ? (
              <p id="err-project-type" className="mt-1 text-xs text-red-500">
                {errors.project_type}
              </p>
            ) : null}
          </div>

          <div>
            <label htmlFor="lead-budget" className="mb-1.5 block text-sm font-medium text-zinc-400">
              Budget estimé du projet <span className="text-red-400">*</span>
            </label>
            <select
              id="lead-budget"
              name={WF.budget}
              value={budget}
              onChange={(e) => {
                setBudget(e.target.value);
                clearError("budget");
              }}
              className={cn(baseSelect, errors.budget ? errorBorder : normalBorder)}
              aria-label="Budget estimé du projet"
              aria-invalid={Boolean(errors.budget)}
              aria-describedby={errors.budget ? "err-budget" : undefined}
            >
              <option value="" disabled>
                Sélectionnez une fourchette
              </option>
              <option value="< 5 Millions MAD">&lt; 5 Millions MAD</option>
              <option value="5M - 20 Millions MAD">5M - 20 Millions MAD</option>
              <option value="20M - 50 Millions MAD">20M - 50 Millions MAD</option>
              <option value="> 50 Millions MAD">&gt; 50 Millions MAD</option>
              <option value="À définir">À définir</option>
            </select>
            {errors.budget ? (
              <p id="err-budget" className="mt-1 text-xs text-red-500">
                {errors.budget}
              </p>
            ) : null}
          </div>
        </div>

        <div>
          <label htmlFor="lead-attachment" className="mb-1.5 block text-sm font-medium text-zinc-400">
            Pièce jointe (facultatif)
          </label>
          <input
            id="lead-attachment"
            type="file"
            name={WF.attachment}
            accept=".pdf,.doc,.docx,.zip,.rar,.dwg,.jpg,.png"
            onChange={(e) => {
              const f = e.target.files?.[0] ?? null;
              setAttachment(f);
              clearError("attachment");
            }}
            className={cn(baseFile, errors.attachment ? errorBorder : normalBorder)}
            aria-label="Pièce jointe facultative (PDF, plans, etc.)"
            aria-invalid={Boolean(errors.attachment)}
            aria-describedby={errors.attachment ? "err-attachment" : undefined}
          />
          <p className="mt-1.5 text-xs text-zinc-500">
            PDF, Word, archives, DWG ou images — Taille maximale conseillée : 15 Mo. Pour les fichiers
            plus lourds (maquettes BIM, plans complexes), merci d&apos;insérer un lien WeTransfer ou
            Google Drive dans le message.
          </p>
          {errors.attachment ? (
            <p id="err-attachment" className="mt-1 text-xs text-red-500">
              {errors.attachment}
            </p>
          ) : null}
        </div>

        <div>
          <label htmlFor="lead-message" className="mb-1.5 block text-sm font-medium text-zinc-400">
            Message et enjeux du projet <span className="text-red-400">*</span>
          </label>
          <textarea
            id="lead-message"
            name={WF.message}
            rows={5}
            placeholder="Contexte, délais, contraintes, objectifs…"
            value={message}
            onChange={(e) => {
              setMessage(e.target.value);
              clearError("message");
            }}
            className={cn(baseTextarea, errors.message ? errorBorder : normalBorder)}
            aria-label="Message et enjeux du projet"
            aria-invalid={Boolean(errors.message)}
            aria-describedby={errors.message ? "err-message" : undefined}
          />
          {errors.message ? (
            <p id="err-message" className="mt-1 text-xs text-red-500">
              {errors.message}
            </p>
          ) : null}
        </div>

        {resultMessage ? (
          <p className="text-sm text-red-400" role="alert">
            {resultMessage}
          </p>
        ) : null}

        <button
          type="submit"
          disabled={submitDisabled}
          className={cn(
            "w-full rounded-xl bg-cyan-600 px-6 py-3.5 text-base font-semibold text-white transition sm:w-auto",
            submitDisabled && "cursor-not-allowed opacity-50",
            !submitDisabled && "hover:bg-cyan-500",
            isSubmitting && "bg-cyan-800",
          )}
        >
          {isSubmitting ? "Envoi en cours…" : "Envoyer ma demande de cadrage"}
        </button>
      </form>
    </div>
  );
}
