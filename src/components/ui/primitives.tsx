import type { ComponentProps, ReactNode } from "react";

export const cx = (...c: (string | false | null | undefined)[]) => c.filter(Boolean).join(" ");

export const focusRing =
  "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent";

/** Max-width page container with a 16px gutter on phones. */
export function Container({ className, ...props }: ComponentProps<"div">) {
  return <div className={cx("mx-auto w-full max-w-6xl px-4 sm:px-6", className)} {...props} />;
}

/** Vertical rhythm for every top-level section. Pass an `id` for in-page anchors. */
export function Section({ className, ...props }: ComponentProps<"section">) {
  return <section className={cx("relative py-20 sm:py-28", className)} {...props} />;
}

/** Mono label above section titles, styled like a shell comment. */
export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <p className="mb-4 font-mono text-xs tracking-[0.14em] text-accent uppercase">
      <span aria-hidden className="text-subtle">
        ~/
      </span>
      {children}
    </p>
  );
}

export function SectionHeading({
  id,
  eyebrow,
  title,
  lead,
}: {
  id: string;
  eyebrow: string;
  title: ReactNode;
  lead?: ReactNode;
}) {
  return (
    <div className="max-w-2xl">
      <Eyebrow>{eyebrow}</Eyebrow>
      <h2
        id={id}
        className="text-gradient text-3xl font-semibold tracking-tight text-balance sm:text-4xl"
      >
        {title}
      </h2>
      {lead && <p className="mt-4 text-base text-pretty text-muted sm:text-lg">{lead}</p>}
    </div>
  );
}

type ButtonProps = ComponentProps<"a"> & { variant?: "primary" | "secondary" };

/** Anchor styled as a button. External links open in a new tab with safe rel. */
export function ButtonLink({ variant = "primary", className, href = "#", ...props }: ButtonProps) {
  const external = href.startsWith("http");
  return (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className={cx(
        "inline-flex h-11 items-center justify-center gap-2 rounded-lg px-5 text-sm font-medium transition-colors",
        focusRing,
        variant === "primary" &&
          "bg-accent-strong text-white shadow-[0_0_0_1px_rgb(255_255_255/0.1)_inset,0_8px_24px_-10px_rgb(16_185_129/0.7)] hover:bg-accent-deep",
        variant === "secondary" &&
          "border border-line-strong bg-surface-2/60 text-fg hover:border-accent/60 hover:bg-surface-2",
        className,
      )}
      {...props}
    />
  );
}

export function Card({ className, ...props }: ComponentProps<"div">) {
  return (
    <div className={cx("rounded-2xl border border-line bg-surface/80 p-6", className)} {...props} />
  );
}

export function Tag({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-md border border-line bg-bg/60 px-2 py-1 font-mono text-xs text-muted">
      {children}
    </span>
  );
}

export function StatusDot({ pulse, className }: { pulse?: boolean; className?: string }) {
  return (
    <span
      aria-hidden
      className={cx("inline-block size-2 rounded-full bg-ok", pulse && "animate-pulse-dot", className)}
    />
  );
}

/** Window chrome around screenshots and the hero terminal. */
export function WindowFrame({
  title,
  children,
  className,
}: {
  title: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cx(
        "overflow-hidden rounded-xl border border-line-strong bg-surface shadow-[0_30px_80px_-20px_rgb(0_0_0/0.8),0_0_0_1px_rgb(255_255_255/0.03)]",
        className,
      )}
    >
      <div className="flex items-center gap-3 border-b border-line bg-surface-2 px-4 py-2.5">
        <div className="flex gap-1.5" aria-hidden>
          <span className="size-2.5 rounded-full bg-line-strong" />
          <span className="size-2.5 rounded-full bg-line-strong" />
          <span className="size-2.5 rounded-full bg-line-strong" />
        </div>
        <div className="mx-auto max-w-[70%] truncate rounded-md bg-bg/70 px-3 py-1 font-mono text-[11px] text-subtle">
          {title}
        </div>
        <div className="w-10" aria-hidden />
      </div>
      {children}
    </div>
  );
}

export function ArrowIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden className={cx("size-4", className)}>
      <path d="M7 17 17 7M8 7h9v9" />
    </svg>
  );
}

export function GitHubIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden className={cx("size-5", className)}>
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

export function MailIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden className={cx("size-5", className)}>
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}

export function DiscordIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden className={cx("size-5", className)}>
      <path d="M8.5 7.5c2.3-.7 4.7-.7 7 0M7 16.5c3.2 1.3 6.8 1.3 10 0" />
      <path d="M15.5 17.5 17 20c2.4-.6 4.3-1.9 5-3 .3-3.7-.6-7.3-2.5-10.5-1.3-.7-2.8-1.2-4.5-1.5l-.8 1.6M8.5 17.5 7 20c-2.4-.6-4.3-1.9-5-3-.3-3.7.6-7.3 2.5-10.5C5.8 5.8 7.3 5.3 9 5l.8 1.6" />
      <circle cx="9" cy="12" r="1" />
      <circle cx="15" cy="12" r="1" />
    </svg>
  );
}

/** Personal mark: a prompt chevron with cursor on a green tile. */
export function LogoMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" aria-hidden className={cx("size-7 shrink-0", className)}>
      <rect width="32" height="32" rx="8" className="fill-accent-strong" />
      <path d="M8 11l6 5-6 5" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M17 22h7" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  );
}
