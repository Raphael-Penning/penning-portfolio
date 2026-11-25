"use client";

import { useSyncExternalStore } from "react";

/** localStorage key the Umami tracker checks before sending anything. */
const umamiOptOutKey = "umami.disabled";

type Labels = {
  active: string;
  disabled: string;
  disable: string;
  enable: string;
};

const listeners = new Set<() => void>();

function subscribe(listener: () => void) {
  listeners.add(listener);
  window.addEventListener("storage", listener);
  return () => {
    listeners.delete(listener);
    window.removeEventListener("storage", listener);
  };
}

function read(): "on" | "off" | "unavailable" {
  try {
    return localStorage.getItem(umamiOptOutKey) ? "off" : "on";
  } catch {
    return "unavailable";
  }
}

function write(optOut: boolean) {
  try {
    if (optOut) localStorage.setItem(umamiOptOutKey, "1");
    else localStorage.removeItem(umamiOptOutKey);
  } catch {
    /* storage blocked: nothing to persist */
  }
  listeners.forEach((l) => l());
}

/**
 * Opt-out switch for Umami. The tracker skips every event while
 * `localStorage["umami.disabled"]` is set. Renders nothing without JavaScript,
 * where no measurement happens in the first place.
 */
export function AnalyticsOptOut({ labels }: { labels: Labels }) {
  const state = useSyncExternalStore(subscribe, read, () => null);
  if (state === null || state === "unavailable") return null;
  const optedOut = state === "off";

  return (
    <div className="mt-4 flex flex-col items-start gap-3 rounded-xl border border-line bg-surface px-4 py-3 text-sm sm:flex-row sm:items-center sm:justify-between">
      <p className="m-0! flex items-center gap-2 text-muted" role="status">
        <span
          aria-hidden
          className={optedOut ? "size-2 rounded-full bg-subtle" : "size-2 rounded-full bg-ok"}
        />
        {optedOut ? labels.disabled : labels.active}
      </p>
      <button
        type="button"
        onClick={() => write(!optedOut)}
        className="inline-flex h-9 shrink-0 items-center rounded-lg border border-line-strong bg-surface-2 px-3 font-medium text-fg transition-colors hover:border-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
      >
        {optedOut ? labels.enable : labels.disable}
      </button>
    </div>
  );
}
