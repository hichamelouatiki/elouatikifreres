"use client";

import "katex/dist/katex.min.css";

import type { Components } from "react-markdown";
import ReactMarkdown from "react-markdown";
import rehypeKatex from "rehype-katex";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";

const markdownComponents: Components = {
  h1: ({ children }) => (
    <h1 className="font-[family-name:var(--font-space-grotesk)] text-xl font-bold leading-snug text-white sm:text-2xl">
      {children}
    </h1>
  ),
  h2: ({ children }) => (
    <h2 className="mt-8 border-b border-cyan-500/25 pb-2 font-[family-name:var(--font-space-grotesk)] text-lg font-bold leading-snug text-white first:mt-0 sm:text-xl">
      {children}
    </h2>
  ),
  p: ({ children }) => (
    <p className="leading-relaxed text-zinc-300 [&_.katex]:text-zinc-200">{children}</p>
  ),
  strong: ({ children }) => (
    <strong className="font-semibold text-white">{children}</strong>
  ),
  em: ({ children }) => <em className="italic text-zinc-200">{children}</em>,
  h3: ({ children }) => (
    <h3 className="mt-8 border-b border-cyan-500/20 pb-2 font-[family-name:var(--font-space-grotesk)] text-lg font-bold text-white first:mt-0 sm:text-xl">
      {children}
    </h3>
  ),
  ul: ({ children }) => (
    <ul className="list-disc space-y-3 ps-6 leading-relaxed text-zinc-300 marker:text-cyan-400">
      {children}
    </ul>
  ),
  ol: ({ children }) => (
    <ol className="list-decimal space-y-3 ps-6 leading-relaxed text-zinc-300 marker:text-cyan-400">
      {children}
    </ol>
  ),
  li: ({ children }) => <li className="[&>p]:inline [&>p]:leading-relaxed">{children}</li>,
  blockquote: ({ children }) => (
    <blockquote className="my-5 rounded-r-xl border-l-4 border-sky-500 bg-zinc-900/60 px-4 py-3 text-sm leading-relaxed text-zinc-200 sm:text-base [&_p]:my-0 [&_p]:inline [&_p]:leading-relaxed">
      {children}
    </blockquote>
  ),
};

type MarkdownWithMathProps = {
  markdown: string;
  className?: string;
};

/**
 * Markdown CommonMark + GFM, math $inline$ et $$bloc$$ via remark-math + rehype-katex.
 * Sans rehype-raw : pas de HTML arbitraire dans le flux.
 */
export function MarkdownWithMath({ markdown, className = "" }: MarkdownWithMathProps) {
  return (
    <div
      className={`markdown-math-content space-y-4 text-left [&_.katex-display]:my-5 [&_.katex-display]:block [&_.katex-display]:overflow-x-auto [&_.katex-display]:text-center [&_.katex-display]:text-zinc-100 ${className}`}
    >
      <ReactMarkdown
        remarkPlugins={[remarkGfm, remarkMath]}
        rehypePlugins={[[rehypeKatex, { strict: "ignore", throwOnError: false }]]}
        components={markdownComponents}
      >
        {markdown}
      </ReactMarkdown>
    </div>
  );
}
