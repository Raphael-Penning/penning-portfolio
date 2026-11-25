"use client";

import { useEffect, useRef, useState, useSyncExternalStore } from "react";

const noop = () => () => {};
/** True only in the browser after hydration, so the button never shows without JavaScript. */
const useHydrated = () => useSyncExternalStore(noop, () => true, () => false);

type Labels = {
  copy: string;
  copied: string;
  failed: string;
  aria: string;
  announcement: string;
};

type State = "idle" | "copied" | "failed";

/** Small clipboard button. All text comes in via props (localized on the server). */
export function CopyButton({ text, labels }: { text: string; labels: Labels }) {
  const hydrated = useHydrated();
  const [state, setState] = useState<State>("idle");
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => () => {
    if (timer.current) clearTimeout(timer.current);
  }, []);

  async function onCopy() {
    try {
      await navigator.clipboard.writeText(text);
      setState("copied");
    } catch {
      setState("failed");
    }
    if (timer.current) clearTimeout(timer.current);
    timer.current = setTimeout(() => setState("idle"), 2000);
  }

  if (!hydrated) return null;

  return (
    <>
      <button
        type="button"
        onClick={onCopy}
        aria-label={labels.aria}
        className="inline-flex h-7 items-center gap-1.5 rounded-md border border-line bg-bg/60 px-2.5 font-mono text-[11px] text-muted transition-colors hover:border-line-strong hover:text-fg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
      >
        {state === "copied" ? (
          <svg viewBox="0 0 24 24" className="size-3.5 text-ok" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
            <path d="M20 6 9 17l-5-5" />
          </svg>
        ) : (
          <svg viewBox="0 0 24 24" className="size-3.5" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
            <rect width="14" height="14" x="8" y="8" rx="2" />
            <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
          </svg>
        )}
        <span aria-hidden>
          {state === "copied" ? labels.copied : state === "failed" ? labels.failed : labels.copy}
        </span>
      </button>
      <span className="sr-only" aria-live="polite" role="status">
        {state === "copied" ? labels.announcement : state === "failed" ? labels.failed : ""}
      </span>
    </>
  );
}
