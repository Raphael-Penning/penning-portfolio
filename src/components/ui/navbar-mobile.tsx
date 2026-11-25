import type { ReactNode } from "react";
import { DetailsCloser } from "./details-closer";

/**
 * Mobile menu built on native <details>/<summary>: opens and closes without
 * JavaScript. With JavaScript, `DetailsCloser` also closes it on link click,
 * on Escape and when the viewport grows past `lg`.
 */
export function NavbarMobile({
  openLabel,
  closeLabel,
  children,
}: {
  openLabel: string;
  closeLabel: string;
  children: ReactNode;
}) {
  return (
    <details className="group ml-auto lg:hidden" data-mobile-menu>
      <summary className="-mr-2 inline-flex size-11 cursor-pointer list-none items-center justify-center rounded-md text-muted transition-colors hover:text-fg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent [&::-webkit-details-marker]:hidden">
        <span className="sr-only group-open:hidden">{openLabel}</span>
        <span className="sr-only hidden group-open:inline">{closeLabel}</span>
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          aria-hidden
          className="size-6 group-open:hidden"
        >
          <path d="M4 7h16M4 12h16M4 17h16" />
        </svg>
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          aria-hidden
          className="hidden size-6 group-open:block"
        >
          <path d="M18 6 6 18M6 6l12 12" />
        </svg>
      </summary>
      <div className="absolute inset-x-0 top-full border-b border-line bg-bg/95 px-4 pt-2 pb-6 shadow-[0_24px_48px_-16px_rgb(0_0_0/0.8)] backdrop-blur-xl sm:px-6">
        {children}
      </div>
      <DetailsCloser />
    </details>
  );
}
