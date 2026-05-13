"use client";

import { CircleHelp, Loader2, X } from "lucide-react";
import {
  useCallback,
  useEffect,
  useId,
  useMemo,
  useRef,
  useState,
} from "react";

import { MarkdownWithMath } from "@/components/markdown-with-math";

const NOTE_MARKDOWN_URL: Record<"fr" | "en", string> = {
  fr: "/media/blog/IA_planning/Note_Explicative_Planning_Probabiliste.md",
  en: "/media/blog/IA_planning/Note_Explicative_Planning_Probabiliste.en.md",
};

type PlanningProbabilisteNoteProps = {
  locale: "fr" | "en";
};

export function PlanningProbabilisteNote({
  locale,
}: PlanningProbabilisteNoteProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const cacheRef = useRef<Partial<Record<"fr" | "en", string>>>({});
  const [loaded, setLoaded] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [fetchError, setFetchError] = useState<string | null>(null);
  const [dialogOpen, setDialogOpen] = useState(false);
  const dialogId = useId();
  const titleId = useId();

  const labels = useMemo(
    () =>
      locale === "fr"
        ? {
            openButton: "Ouvrir la note explicative sur le planning probabiliste",
            hint: "Cliquez pour lire l'explication",
            dialogTitle: "Note explicative : planification probabiliste",
            retry: "Réessayer",
            error: "Impossible de charger la note.",
            close: "Fermer",
          }
        : {
            openButton: "Open explanatory note on probabilistic scheduling",
            hint: "Click to read the explanation",
            dialogTitle: "Explanatory note: probabilistic scheduling",
            retry: "Retry",
            error: "Could not load the note.",
            close: "Close",
          },
    [locale],
  );

  const fetchNote = useCallback(async () => {
    const cached = cacheRef.current[locale];
    if (cached) {
      setLoaded(cached);
      return;
    }
    setLoading(true);
    setFetchError(null);
    try {
      const res = await fetch(NOTE_MARKDOWN_URL[locale], { cache: "force-cache" });
      if (!res.ok) throw new Error(String(res.status));
      const text = await res.text();
      cacheRef.current[locale] = text;
      setLoaded(text);
    } catch {
      setFetchError(labels.error);
    } finally {
      setLoading(false);
    }
  }, [labels.error, locale]);

  const open = useCallback(() => {
    setDialogOpen(true);
    dialogRef.current?.showModal();
    void fetchNote();
  }, [fetchNote]);

  const close = useCallback(() => {
    setDialogOpen(false);
    dialogRef.current?.close();
  }, []);

  useEffect(() => {
    const dlg = dialogRef.current;
    if (!dlg) return;
    const onCancel = (e: Event) => {
      e.preventDefault();
      close();
    };
    dlg.addEventListener("cancel", onCancel);
    return () => dlg.removeEventListener("cancel", onCancel);
  }, [close]);

  const retry = useCallback(() => {
    delete cacheRef.current[locale];
    setLoaded(null);
    setFetchError(null);
    void fetchNote();
  }, [fetchNote, locale]);

  return (
    <>
      <span className="ms-1 inline-flex max-w-full flex-wrap items-center gap-x-2 gap-y-1 align-baseline">
        <button
          type="button"
          onClick={open}
          title={labels.openButton}
          aria-label={labels.openButton}
          aria-expanded={dialogOpen}
          aria-controls={dialogId}
          className="inline-flex max-w-full items-center gap-1.5 rounded-lg border border-cyan-500/35 bg-cyan-500/10 px-2 py-1 text-left text-xs font-medium text-cyan-200 transition hover:border-cyan-400/50 hover:bg-cyan-500/20 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-400 sm:text-sm"
        >
          <CircleHelp
            className="size-4 shrink-0 text-cyan-300 sm:size-[1.125rem]"
            aria-hidden
            strokeWidth={2}
          />
          <span className="min-w-0 leading-snug underline decoration-cyan-500/50 decoration-dotted underline-offset-2">
            {labels.hint}
          </span>
        </button>
      </span>

      <dialog
        id={dialogId}
        ref={dialogRef}
        aria-labelledby={titleId}
        className="fixed inset-0 z-[200] mx-auto my-auto w-[min(100vw-2rem,42rem)] max-h-[85vh] overflow-hidden rounded-2xl border border-white/15 bg-zinc-950 p-0 text-left text-zinc-200 shadow-2xl shadow-black/70 backdrop:bg-black/65 open:flex open:flex-col"
      >
        <div className="flex shrink-0 items-center justify-between gap-4 border-b border-white/10 bg-zinc-900/95 px-4 py-4 sm:px-5">
          <h2
            id={titleId}
            className="font-[family-name:var(--font-space-grotesk)] text-lg font-semibold text-white sm:text-xl"
          >
            {labels.dialogTitle}
          </h2>
          <button
            type="button"
            onClick={close}
            className="inline-flex shrink-0 items-center gap-2 rounded-lg border border-white/15 px-3 py-2 text-sm font-medium text-zinc-300 transition hover:border-white/30 hover:bg-white/5 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-400"
          >
            <X className="size-4" aria-hidden />
            <span>{labels.close}</span>
          </button>
        </div>

        <div className="min-h-0 flex-1 overflow-y-auto overscroll-contain border-t border-white/5 [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-zinc-700">
          {loading && !loaded ? (
            <div className="flex items-center justify-center gap-2 py-16 text-zinc-400">
              <Loader2 className="size-8 animate-spin" aria-hidden />
            </div>
          ) : null}
          {fetchError ? (
            <div className="space-y-4 px-6 py-10 text-center text-zinc-400">
              <p>{fetchError}</p>
              <button
                type="button"
                onClick={retry}
                className="rounded-lg bg-cyan-600/90 px-4 py-2 text-sm font-semibold text-white hover:bg-cyan-500"
              >
                {labels.retry}
              </button>
            </div>
          ) : null}
          {loaded && !fetchError ? (
            <MarkdownWithMath markdown={loaded} className="px-4 py-6 sm:px-6" />
          ) : null}
        </div>
      </dialog>
    </>
  );
}
