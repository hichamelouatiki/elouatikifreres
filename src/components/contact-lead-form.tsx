"use client";

/**
 * Formulaire de qualification de leads (wizard conversion) — envoi Web3Forms (multipart, UTF-8).
 * - Champ `email` : doit s’appeler exactement `email` (autoresponder Web3Forms).
 * - Autres `name` : clés stables (underscores) pour l’e-mail admin + récap autoresponder.
 * Qualification progressive pour réduire la friction avant les coordonnées.
 *
 * Clé API : définir NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY dans `.env.local` (ne jamais committer la clé).
 * Autoresponder : activer dans le tableau de bord Web3Forms pour ce formulaire.
 */

import { AnimatePresence, motion } from "framer-motion";
import {
  Building2,
  CheckCircle2,
  ChevronLeft,
  Factory,
  FileUp,
  Hammer,
  Home,
  Landmark,
  Loader2,
  Route,
  Send,
  UploadCloud,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { useTranslations } from "next-intl";
import { useCallback, useMemo, useRef, useState } from "react";

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
const MAX_NAME_LENGTH = 120;
const MAX_COMPANY_LENGTH = 160;
const MAX_EMAIL_LENGTH = 254;
const MAX_PHONE_LENGTH = 40;
const MAX_MESSAGE_LENGTH = 2000;
const ALLOWED_ATTACHMENT_EXTENSIONS = new Set([
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
const ALLOWED_ATTACHMENT_TYPES = new Set([
  "",
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

/** Regex email pragmatique (format courant professionnel). */
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

const baseInput =
  "h-13 w-full rounded-2xl border px-4 text-base text-white placeholder:text-zinc-500 transition " +
  "focus:outline-none focus:ring-2";

const baseTextarea =
  "min-h-[150px] w-full rounded-2xl border px-4 py-3 text-base text-white placeholder:text-zinc-500 transition " +
  "focus:outline-none focus:ring-2";

const normalBorder =
  "border-white/10 bg-zinc-900/80 focus:border-cyan-400 focus:ring-cyan-400/25";
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

type Step = 0 | 1 | 2 | 3;

type ProjectOption = {
  key: string;
  value: string;
  icon: LucideIcon;
};

type BudgetOption = {
  key: string;
  value: string;
};

const projectOptions: ProjectOption[] = [
  { key: "ptMarcheShort", value: "Marchés Publics", icon: Landmark },
  { key: "ptResidentiel", value: "Bâtiment Résidentiel", icon: Home },
  { key: "ptTertiaireShort", value: "Bâtiment Tertiaire", icon: Building2 },
  { key: "ptIndustrielShort", value: "Bâtiment Industriel", icon: Factory },
  { key: "ptInfraShort", value: "Infrastructures", icon: Route },
  { key: "ptRehabShort", value: "Réhabilitation", icon: Hammer },
];

const budgetOptions: BudgetOption[] = [
  { key: "bd1", value: "< 5 Millions MAD" },
  { key: "bd2", value: "5M - 20 Millions MAD" },
  { key: "bd3", value: "20M - 50 Millions MAD" },
  { key: "bd4", value: "> 50 Millions MAD" },
  { key: "bd5", value: "À définir" },
];

function countDigits(value: string): number {
  return value.replace(/\D/g, "").length;
}

function normalizeField(value: string, maxLength: number): string {
  return value.replace(/[\u0000-\u001F\u007F]/g, " ").replace(/\s+/g, " ").trim().slice(0, maxLength);
}

function getFileExtension(fileName: string): string {
  return fileName.split(".").pop()?.toLowerCase() ?? "";
}

function isAllowedAttachment(file: File): boolean {
  return (
    file.size <= MAX_ATTACHMENT_BYTES &&
    ALLOWED_ATTACHMENT_EXTENSIONS.has(getFileExtension(file.name)) &&
    ALLOWED_ATTACHMENT_TYPES.has(file.type)
  );
}

export function ContactLeadForm() {
  const t = useTranslations("Form");

  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [projectType, setProjectType] = useState("");
  const [budget, setBudget] = useState("");
  const [message, setMessage] = useState("");
  const [attachment, setAttachment] = useState<File | null>(null);

  const [step, setStep] = useState<Step>(0);
  const [errors, setErrors] = useState<FieldErrors>({});
  const [isDragging, setIsDragging] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [resultMessage, setResultMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const totalSteps = 4;
  const progress = ((step + 1) / totalSteps) * 100;

  const clearError = useCallback((key: FieldErrorKey) => {
    setErrors((prev) => {
      if (!(key in prev)) return prev;
      const next = { ...prev };
      delete next[key];
      return next;
    });
  }, []);

  const setSafeStep = useCallback((nextStep: Step) => {
    setResultMessage("");
    setStep(nextStep);
  }, []);

  const handleProjectSelect = useCallback(
    (value: string) => {
      setProjectType(value);
      clearError("project_type");
      window.setTimeout(() => setSafeStep(1), 140);
    },
    [clearError, setSafeStep],
  );

  const handleBudgetSelect = useCallback(
    (value: string) => {
      setBudget(value);
      clearError("budget");
    },
    [clearError],
  );

  const handleAttachment = useCallback(
    (file: File | null) => {
      clearError("attachment");

      if (file && !isAllowedAttachment(file)) {
        setAttachment(null);
        if (fileInputRef.current) {
          fileInputRef.current.value = "";
        }
        setErrors((prev) => ({ ...prev, attachment: t("errAttachment") }));
        return;
      }

      setAttachment(file);
    },
    [clearError, t],
  );

  const clearAttachment = useCallback(() => {
    setAttachment(null);
    clearError("attachment");
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  }, [clearError]);

  const validateContactStep = useCallback((): boolean => {
    const next: FieldErrors = {};

    if (!projectType) {
      next.project_type = t("errProjectType");
    }
    if (!budget) {
      next.budget = t("errBudget");
    }
    const safeName = normalizeField(name, MAX_NAME_LENGTH);
    const safeCompany = normalizeField(company, MAX_COMPANY_LENGTH);
    const safeEmail = normalizeField(email, MAX_EMAIL_LENGTH).toLowerCase();
    const safePhone = normalizeField(phone, MAX_PHONE_LENGTH);

    if (!safeName) {
      next.name = t("errName");
    }
    if (!safeCompany) {
      next.company = t("errCompany");
    }
    if (!safeEmail) {
      next.email = t("errEmailRequired");
    } else if (!EMAIL_REGEX.test(safeEmail)) {
      next.email = t("errEmailFormat");
    }
    if (!safePhone) {
      next.phone = t("errPhoneRequired");
    } else if (countDigits(safePhone) < 10) {
      next.phone = t("errPhoneDigits");
    }
    if (attachment && !isAllowedAttachment(attachment)) {
      next.attachment = t("errAttachment");
    }

    setErrors(next);
    return Object.keys(next).length === 0;
  }, [attachment, budget, company, email, name, phone, projectType, t]);

  const canSubmit = useMemo(
    () =>
      Boolean(
        projectType &&
          budget &&
          normalizeField(name, MAX_NAME_LENGTH) &&
          normalizeField(company, MAX_COMPANY_LENGTH) &&
          EMAIL_REGEX.test(normalizeField(email, MAX_EMAIL_LENGTH).toLowerCase()) &&
          normalizeField(phone, MAX_PHONE_LENGTH) &&
          countDigits(normalizeField(phone, MAX_PHONE_LENGTH)) >= 10 &&
          (!attachment || isAllowedAttachment(attachment)),
      ),
    [attachment, budget, company, email, name, phone, projectType],
  );

  function goNext() {
    setResultMessage("");

    if (step === 0) {
      if (!projectType) {
        setErrors((prev) => ({ ...prev, project_type: t("errProjectType") }));
        return;
      }
      setSafeStep(1);
      return;
    }

    if (step === 1) {
      if (!budget) {
        setErrors((prev) => ({ ...prev, budget: t("errBudget") }));
        return;
      }
      setSafeStep(2);
      return;
    }

    if (step === 2) {
      if (attachment && attachment.size > MAX_ATTACHMENT_BYTES) {
        setErrors((prev) => ({ ...prev, attachment: t("errAttachment") }));
        return;
      }
      setSafeStep(3);
    }
  }

  function goBack() {
    setResultMessage("");
    setStep((current) => Math.max(0, current - 1) as Step);
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setResultMessage("");

    if (!validateContactStep()) {
      return;
    }

    setIsSubmitting(true);

    const safeName = normalizeField(name, MAX_NAME_LENGTH);
    const safeCompany = normalizeField(company, MAX_COMPANY_LENGTH);
    const safeEmail = normalizeField(email, MAX_EMAIL_LENGTH).toLowerCase();
    const safePhone = normalizeField(phone, MAX_PHONE_LENGTH);
    const safeMessage = normalizeField(message, MAX_MESSAGE_LENGTH);

    const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY ?? "";
    if (!accessKey) {
      setResultMessage(t("configError"));
      setIsSubmitting(false);
      return;
    }

    const formData = new FormData();
    formData.set("access_key", accessKey);
    formData.set("subject", t("subject"));
    formData.set("from_name", t("fromName"));
    formData.set("replyto", safeEmail);
    formData.set(WF.name, safeName);
    formData.set(WF.company, safeCompany);
    formData.set(WF.email, safeEmail);
    formData.set(WF.phone, safePhone);
    formData.set(WF.projectType, projectType);
    formData.set(WF.budget, budget);
    formData.set(WF.message, safeMessage);
    formData.set("botcheck", "");

    if (attachment) {
      formData.set(WF.attachment, attachment);
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
        setStep(0);
        setErrors({});
        if (fileInputRef.current) {
          fileInputRef.current.value = "";
        }
      } else {
        setResultMessage(t("sendFailed"));
      }
    } catch {
      setResultMessage(t("networkError"));
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
            {t("successTitle")}
          </h3>
          <p className="mt-4 leading-relaxed text-zinc-400">
            {t("successBody")}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-zinc-950 shadow-2xl shadow-cyan-950/20">
      <div className="border-b border-white/10 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.16),transparent_38%),rgba(24,24,27,0.72)] px-5 py-5 sm:px-8">
        <div className="mb-4 flex items-center justify-between gap-4 text-xs font-medium uppercase tracking-[0.2em] text-zinc-500">
          <span>{t("progressLabel", { current: step + 1, total: totalSteps })}</span>
          <span className="text-cyan-300">{Math.round(progress)}%</span>
        </div>
        <div className="h-1.5 overflow-hidden rounded-full bg-white/10" aria-hidden>
          <motion.div
            className="h-full rounded-full bg-gradient-to-r from-cyan-400 via-cyan-300 to-orange-400"
            initial={false}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.35, ease: "easeOut" }}
          />
        </div>
      </div>

      <form
        acceptCharset="utf-8"
        encType="multipart/form-data"
        method="post"
        onSubmit={handleSubmit}
        className="relative min-h-[560px] px-5 py-6 sm:px-8 sm:py-8 md:p-10"
        noValidate
      >
        <AnimatePresence mode="wait" initial={false}>
          {step === 0 ? (
            <motion.div
              key="project-type"
              initial={{ opacity: 0, x: 28 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -28 }}
              transition={{ duration: 0.28, ease: "easeOut" }}
              className="space-y-7"
            >
              <div className="max-w-3xl space-y-3">
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-300">
                  {t("step1Eyebrow")}
                </p>
                <h3 className="font-[family-name:var(--font-space-grotesk)] text-2xl font-bold text-white sm:text-3xl">
                  {t("step1Title")}
                </h3>
                <p className="text-sm leading-relaxed text-zinc-400 sm:text-base">
                  {t("step1Hint")}
                </p>
              </div>

              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3" role="group" aria-label={t("step1Title")}>
                {projectOptions.map((option) => {
                  const Icon = option.icon;
                  const selected = projectType === option.value;

                  return (
                    <button
                      key={option.value}
                      type="button"
                      onClick={() => handleProjectSelect(option.value)}
                      className={cn(
                        "group min-h-32 rounded-3xl border p-5 text-left transition duration-200 focus:outline-none focus:ring-2 focus:ring-cyan-400/40",
                        selected
                          ? "border-cyan-300 bg-cyan-400/10 shadow-lg shadow-cyan-950/40"
                          : "border-white/10 bg-zinc-900/70 hover:-translate-y-0.5 hover:border-cyan-300/60 hover:bg-zinc-900",
                      )}
                      aria-pressed={selected}
                    >
                      <span
                        className={cn(
                          "mb-4 flex size-11 items-center justify-center rounded-2xl border transition",
                          selected
                            ? "border-cyan-300/50 bg-cyan-300/15 text-cyan-200"
                            : "border-white/10 bg-white/5 text-zinc-300 group-hover:text-cyan-200",
                        )}
                      >
                        <Icon className="size-5" aria-hidden />
                      </span>
                      <span className="block text-base font-semibold text-white">{t(option.key)}</span>
                    </button>
                  );
                })}
              </div>

              {errors.project_type ? (
                <p id="err-project-type" className="text-sm text-red-400" role="alert">
                  {errors.project_type}
                </p>
              ) : null}
            </motion.div>
          ) : null}

          {step === 1 ? (
            <motion.div
              key="budget"
              initial={{ opacity: 0, x: 28 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -28 }}
              transition={{ duration: 0.28, ease: "easeOut" }}
              className="space-y-7"
            >
              <div className="max-w-3xl space-y-3">
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-300">
                  {t("step2Eyebrow")}
                </p>
                <h3 className="font-[family-name:var(--font-space-grotesk)] text-2xl font-bold text-white sm:text-3xl">
                  {t("step2Title")}
                </h3>
                <p className="text-sm leading-relaxed text-zinc-400 sm:text-base">
                  {t("step2Hint")}
                </p>
              </div>

              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2" role="radiogroup" aria-label={t("step2Title")}>
                {budgetOptions.map((option) => {
                  const selected = budget === option.value;

                  return (
                    <button
                      key={option.value}
                      type="button"
                      onClick={() => handleBudgetSelect(option.value)}
                      className={cn(
                        "flex min-h-16 items-center justify-between gap-4 rounded-2xl border px-5 py-4 text-left text-base font-semibold transition focus:outline-none focus:ring-2 focus:ring-cyan-400/40",
                        selected
                          ? "border-cyan-300 bg-cyan-400/10 text-white shadow-lg shadow-cyan-950/30"
                          : "border-white/10 bg-zinc-900/70 text-zinc-200 hover:border-cyan-300/60 hover:bg-zinc-900",
                      )}
                      role="radio"
                      aria-checked={selected}
                    >
                      <span>{t(option.key)}</span>
                      <span
                        className={cn(
                          "flex size-5 shrink-0 items-center justify-center rounded-full border",
                          selected ? "border-cyan-300 bg-cyan-300" : "border-zinc-600",
                        )}
                        aria-hidden
                      >
                        {selected ? <span className="size-2 rounded-full bg-zinc-950" /> : null}
                      </span>
                    </button>
                  );
                })}
              </div>

              {errors.budget ? (
                <p id="err-budget" className="text-sm text-red-400" role="alert">
                  {errors.budget}
                </p>
              ) : null}
            </motion.div>
          ) : null}

          {step === 2 ? (
            <motion.div
              key="context"
              initial={{ opacity: 0, x: 28 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -28 }}
              transition={{ duration: 0.28, ease: "easeOut" }}
              className="space-y-6"
            >
              <div className="max-w-3xl space-y-3">
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-300">
                  {t("step3Eyebrow")}
                </p>
                <h3 className="font-[family-name:var(--font-space-grotesk)] text-2xl font-bold text-white sm:text-3xl">
                  {t("step3Title")}
                </h3>
                <p className="text-sm leading-relaxed text-zinc-400 sm:text-base">
                  {t("step3Hint")}
                </p>
              </div>

              <div>
                <label htmlFor="lead-message" className="mb-2 block text-sm font-medium text-zinc-300">
                  {t("labelMessageOptional")}
                </label>
                <textarea
                  id="lead-message"
                  rows={5}
                  maxLength={MAX_MESSAGE_LENGTH}
                  placeholder={t("placeholderMessageOptional")}
                  value={message}
                  onChange={(e) => {
                    setMessage(e.target.value.slice(0, MAX_MESSAGE_LENGTH));
                    clearError("message");
                  }}
                  className={cn(baseTextarea, normalBorder)}
                  aria-label={t("ariaMessage")}
                />
              </div>

              <div>
                <input
                  ref={fileInputRef}
                  id="lead-attachment"
                  type="file"
                  accept=".pdf,.doc,.docx,.zip,.rar,.dwg,.jpg,.jpeg,.png"
                  onChange={(e) => handleAttachment(e.target.files?.[0] ?? null)}
                  className="sr-only"
                  aria-label={t("ariaAttachment")}
                  aria-invalid={Boolean(errors.attachment)}
                  aria-describedby={errors.attachment ? "err-attachment" : "attachment-hint"}
                />
                <label
                  htmlFor="lead-attachment"
                  onDragEnter={(e) => {
                    e.preventDefault();
                    setIsDragging(true);
                  }}
                  onDragOver={(e) => e.preventDefault()}
                  onDragLeave={(e) => {
                    e.preventDefault();
                    setIsDragging(false);
                  }}
                  onDrop={(e) => {
                    e.preventDefault();
                    setIsDragging(false);
                    handleAttachment(e.dataTransfer.files?.[0] ?? null);
                  }}
                  className={cn(
                    "flex min-h-40 cursor-pointer flex-col items-center justify-center rounded-3xl border border-dashed px-5 py-8 text-center transition",
                    isDragging
                      ? "border-cyan-300 bg-cyan-400/10"
                      : "border-white/15 bg-zinc-900/60 hover:border-cyan-300/60 hover:bg-zinc-900",
                    errors.attachment && "border-red-500 bg-red-900/10",
                  )}
                >
                  <span className="mb-4 flex size-12 items-center justify-center rounded-2xl bg-cyan-400/10 text-cyan-300 ring-1 ring-cyan-300/30">
                    <UploadCloud className="size-6" aria-hidden />
                  </span>
                  <span className="text-base font-semibold text-white">
                    {attachment ? attachment.name : t("dropzoneTitle")}
                  </span>
                  <span id="attachment-hint" className="mt-2 max-w-xl text-sm leading-relaxed text-zinc-500">
                    {t("attachmentHint")}
                  </span>
                </label>

                {attachment ? (
                  <button
                    type="button"
                    onClick={clearAttachment}
                    className="mt-3 inline-flex items-center gap-2 rounded-full border border-white/10 px-3 py-1.5 text-sm text-zinc-300 transition hover:border-red-400/60 hover:text-red-300"
                  >
                    <FileUp className="size-4" aria-hidden />
                    {t("removeAttachment")}
                  </button>
                ) : null}

                {errors.attachment ? (
                  <p id="err-attachment" className="mt-2 text-sm text-red-400" role="alert">
                    {errors.attachment}
                  </p>
                ) : null}
              </div>
            </motion.div>
          ) : null}

          {step === 3 ? (
            <motion.div
              key="contact"
              initial={{ opacity: 0, x: 28 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -28 }}
              transition={{ duration: 0.28, ease: "easeOut" }}
              className="space-y-6"
            >
              <div className="max-w-3xl space-y-3">
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-300">
                  {t("step4Eyebrow")}
                </p>
                <h3 className="font-[family-name:var(--font-space-grotesk)] text-2xl font-bold text-white sm:text-3xl">
                  {t("step4Title")}
                </h3>
                <p className="text-sm leading-relaxed text-zinc-400 sm:text-base">
                  {t("step4Hint")}
                </p>
              </div>

              <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-5">
                <div>
                  <label htmlFor="lead-name" className="mb-2 block text-sm font-medium text-zinc-300">
                    {t("labelName")} <span className="text-red-400">*</span>
                  </label>
                  <input
                    id="lead-name"
                    type="text"
                    autoComplete="name"
                    maxLength={MAX_NAME_LENGTH}
                    placeholder={t("placeholderName")}
                    value={name}
                    onChange={(e) => {
                      setName(e.target.value.slice(0, MAX_NAME_LENGTH));
                      clearError("name");
                    }}
                    className={cn(baseInput, errors.name ? errorBorder : normalBorder)}
                    aria-label={t("ariaName")}
                    aria-invalid={Boolean(errors.name)}
                    aria-describedby={errors.name ? "err-name" : undefined}
                  />
                  {errors.name ? (
                    <p id="err-name" className="mt-1.5 text-xs text-red-400">
                      {errors.name}
                    </p>
                  ) : null}
                </div>

                <div>
                  <label htmlFor="lead-company" className="mb-2 block text-sm font-medium text-zinc-300">
                    {t("labelCompany")} <span className="text-red-400">*</span>
                  </label>
                  <input
                    id="lead-company"
                    type="text"
                    autoComplete="organization"
                    maxLength={MAX_COMPANY_LENGTH}
                    placeholder={t("placeholderCompany")}
                    value={company}
                    onChange={(e) => {
                      setCompany(e.target.value.slice(0, MAX_COMPANY_LENGTH));
                      clearError("company");
                    }}
                    className={cn(baseInput, errors.company ? errorBorder : normalBorder)}
                    aria-label={t("ariaCompany")}
                    aria-invalid={Boolean(errors.company)}
                    aria-describedby={errors.company ? "err-company" : undefined}
                  />
                  {errors.company ? (
                    <p id="err-company" className="mt-1.5 text-xs text-red-400">
                      {errors.company}
                    </p>
                  ) : null}
                </div>

                <div>
                  <label htmlFor="lead-email" className="mb-2 block text-sm font-medium text-zinc-300">
                    {t("labelEmail")} <span className="text-red-400">*</span>
                  </label>
                  <input
                    id="lead-email"
                    type="email"
                    autoComplete="email"
                    maxLength={MAX_EMAIL_LENGTH}
                    placeholder={t("placeholderEmail")}
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value.slice(0, MAX_EMAIL_LENGTH));
                      clearError("email");
                    }}
                    className={cn(baseInput, errors.email ? errorBorder : normalBorder)}
                    aria-label={t("ariaEmail")}
                    aria-invalid={Boolean(errors.email)}
                    aria-describedby={errors.email ? "err-email" : undefined}
                  />
                  {errors.email ? (
                    <p id="err-email" className="mt-1.5 text-xs text-red-400">
                      {errors.email}
                    </p>
                  ) : null}
                </div>

                <div>
                  <label htmlFor="lead-phone" className="mb-2 block text-sm font-medium text-zinc-300">
                    {t("labelPhone")} <span className="text-red-400">*</span>
                  </label>
                  <input
                    id="lead-phone"
                    type="tel"
                    autoComplete="tel"
                    maxLength={MAX_PHONE_LENGTH}
                    placeholder={t("placeholderPhone")}
                    value={phone}
                    onChange={(e) => {
                      setPhone(e.target.value.slice(0, MAX_PHONE_LENGTH));
                      clearError("phone");
                    }}
                    className={cn(baseInput, errors.phone ? errorBorder : normalBorder)}
                    aria-label={t("ariaPhone")}
                    aria-invalid={Boolean(errors.phone)}
                    aria-describedby={errors.phone ? "err-phone" : undefined}
                  />
                  {errors.phone ? (
                    <p id="err-phone" className="mt-1.5 text-xs text-red-400">
                      {errors.phone}
                    </p>
                  ) : null}
                </div>
              </div>

              <div className="rounded-3xl border border-cyan-300/20 bg-cyan-300/5 p-4 text-sm text-zinc-300">
                <p className="font-semibold text-white">{t("summaryTitle")}</p>
                <p className="mt-2 text-zinc-400">
                  {projectType || t("summaryMissing")} · {budget || t("summaryMissing")}
                </p>
              </div>

              {resultMessage ? (
                <p className="rounded-2xl border border-red-500/30 bg-red-950/30 px-4 py-3 text-sm text-red-300" role="alert">
                  {resultMessage}
                </p>
              ) : null}
            </motion.div>
          ) : null}
        </AnimatePresence>

        <div className="mt-8 flex flex-col-reverse gap-3 border-t border-white/10 pt-5 sm:flex-row sm:items-center sm:justify-between">
          <button
            type="button"
            onClick={goBack}
            disabled={step === 0 || isSubmitting}
            className={cn(
              "inline-flex min-h-12 items-center justify-center gap-2 rounded-2xl border border-white/10 px-5 text-sm font-semibold text-zinc-300 transition hover:border-white/25 hover:text-white",
              (step === 0 || isSubmitting) && "pointer-events-none opacity-40",
            )}
          >
            <ChevronLeft className="size-4" aria-hidden />
            {t("back")}
          </button>

          {step < 3 ? (
            <button
              type="button"
              onClick={goNext}
              className="inline-flex min-h-12 items-center justify-center rounded-2xl bg-white px-6 text-sm font-bold text-zinc-950 shadow-lg shadow-white/10 transition hover:bg-cyan-100"
            >
              {t("next")}
            </button>
          ) : (
            <button
              type="submit"
              disabled={isSubmitting}
              className={cn(
                "inline-flex min-h-14 items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-cyan-400 to-orange-400 px-6 text-base font-bold text-zinc-950 shadow-xl shadow-cyan-950/30 transition hover:scale-[1.01] hover:from-cyan-300 hover:to-orange-300 focus:outline-none focus:ring-2 focus:ring-cyan-300/50",
                isSubmitting && "cursor-not-allowed opacity-70",
                !canSubmit && !isSubmitting && "shadow-orange-950/20",
              )}
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="size-5 animate-spin" aria-hidden />
                  {t("submitSending")}
                </>
              ) : (
                <>
                  <Send className="size-5" aria-hidden />
                  {t("submitFinal")}
                </>
              )}
            </button>
          )}
        </div>
      </form>
    </div>
  );
}
