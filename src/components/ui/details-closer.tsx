"use client";

import { useEffect, useRef } from "react";

/**
 * Progressive enhancement for the native <details> mobile menu: closes it on
 * link click, Escape and when the viewport reaches `lg`. Renders an empty
 * marker span so it can find its parent <details>.
 */
export function DetailsCloser() {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const details = ref.current?.closest("details");
    if (!details) return;
    const summary = details.querySelector("summary");
    const close = () => {
      details.open = false;
    };
    const onClick = (e: MouseEvent) => {
      if ((e.target as HTMLElement).closest("a")) close();
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape" && details.open) {
        close();
        summary?.focus();
      }
    };
    const mq = window.matchMedia("(min-width: 64rem)");
    const onMq = () => mq.matches && close();
    details.addEventListener("click", onClick);
    document.addEventListener("keydown", onKey);
    mq.addEventListener("change", onMq);
    return () => {
      details.removeEventListener("click", onClick);
      document.removeEventListener("keydown", onKey);
      mq.removeEventListener("change", onMq);
    };
  }, []);

  return <span ref={ref} hidden />;
}
