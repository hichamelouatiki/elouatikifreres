"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

import { routing } from "@/i18n/routing";

/**
 * Export statique sans middleware : la racine `/` redirige côté client vers une locale.
 * Priorité à la langue du navigateur si elle est prise en charge, sinon `defaultLocale`.
 */
export default function RootRedirectPage() {
  const router = useRouter();

  useEffect(() => {
    const raw = navigator.language?.slice(0, 2)?.toLowerCase() ?? "";
    const locale = (routing.locales as readonly string[]).includes(raw)
      ? raw
      : routing.defaultLocale;
    router.replace(`/${locale}/`);
  }, [router]);

  return (
    <div className="flex min-h-svh items-center justify-center bg-zinc-950 text-sm text-zinc-500">
      …
    </div>
  );
}
