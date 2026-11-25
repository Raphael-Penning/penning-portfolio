import type { ComponentProps, ReactNode } from "react";

export const cx = (...c: (string | false | null | undefined)[]) => c.filter(Boolean).join(" ");

export const focusRing =
  "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent";

/** Max-width page container with a 16px gutter on phones. */
export function Container({ className, ...props }: ComponentProps<"div">) {
  return <div className={cx("mx-auto w-full max-w-6xl px-4 sm:px-6", className)} {...props} />;
}

/** Top-level section. Pass an `id` for in-page anchors. */
export function Section({ className, ...props }: ComponentProps<"section">) {
  return <section className={cx("relative py-16 sm:py-24", className)} {...props} />;
}

/** Small mono label. */
export function Label({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <p className={cx("font-mono text-xs font-medium tracking-[0.12em] text-subtle uppercase", className)}>
      {children}
    </p>
  );
}

/** Section header: numbered mono eyebrow, heading, optional lead. */
export function SectionHeading({
  id,
  index,
  eyebrow,
  title,
  lead,
}: {
  id: string;
  index: string;
  eyebrow: string;
  title: ReactNode;
  lead?: ReactNode;
}) {
  return (
    <div className="reveal mb-8 flex flex-col gap-3 sm:mb-10 md:flex-row md:items-end md:justify-between md:gap-10">
      <div className="max-w-2xl">
        <p className="mb-3 font-mono text-xs font-medium tracking-[0.12em] text-accent uppercase">
          <span aria-hidden className="text-subtle">
            {index} /{" "}
          </span>
          {eyebrow}
        </p>
        <h2 id={id} className="text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
          {title}
        </h2>
      </div>
      {lead && <p className="max-w-sm text-pretty text-muted md:text-right">{lead}</p>}
    </div>
  );
}

type ButtonProps = ComponentProps<"a"> & { variant?: "primary" | "secondary"; size?: "md" | "sm" };

/** Anchor styled as a button. External links open in a new tab with safe rel. */
export function ButtonLink({
  variant = "primary",
  size = "md",
  className,
  href = "#",
  ...props
}: ButtonProps) {
  const external = href.startsWith("http");
  return (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className={cx(
        "inline-flex items-center justify-center gap-2 rounded-full font-medium whitespace-nowrap transition-colors duration-200",
        size === "md" ? "h-11 px-5 text-sm" : "h-10 px-4 text-sm",
        focusRing,
        variant === "primary" &&
          "bg-accent-strong text-white shadow-[0_8px_24px_-10px_var(--accent-glow)] hover:bg-accent-deep",
        variant === "secondary" &&
          "border border-line-strong bg-surface text-fg hover:border-accent hover:text-accent",
        className,
      )}
      {...props}
    />
  );
}

/** Bento tile. `interactive` adds the hover lift for tiles that contain a primary link. */
export function Tile({
  className,
  interactive,
  bare,
  ...props
}: ComponentProps<"div"> & { interactive?: boolean; bare?: boolean }) {
  return (
    <div
      className={cx("tile reveal", !bare && "p-6 sm:p-7", interactive && "tile-link", className)}
      {...props}
    />
  );
}

export function Tag({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-line bg-surface-2 px-3 py-1 font-mono text-xs text-muted">
      {children}
    </span>
  );
}

export function StatusDot({ pulse, className }: { pulse?: boolean; className?: string }) {
  return (
    <span
      aria-hidden
      className={cx("inline-block size-2 shrink-0 rounded-full bg-ok", pulse && "animate-pulse-dot", className)}
    />
  );
}

/** Window chrome around screenshots. */
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
    <div className={cx("overflow-hidden rounded-xl border border-line-strong bg-surface-2", className)}>
      <div className="flex items-center gap-3 border-b border-line px-3 py-2">
        <div className="flex gap-1.5" aria-hidden>
          <span className="size-2.5 rounded-full bg-line-strong" />
          <span className="size-2.5 rounded-full bg-line-strong" />
          <span className="size-2.5 rounded-full bg-line-strong" />
        </div>
        <div className="mx-auto max-w-[70%] truncate rounded-md bg-surface px-3 py-0.5 font-mono text-[11px] text-subtle">
          {title}
        </div>
        <div className="w-8" aria-hidden />
      </div>
      {children}
    </div>
  );
}

const iconProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.75,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": true,
} as const;

export function ArrowIcon({ className }: { className?: string }) {
  return (
    <svg {...iconProps} className={cx("size-4", className)}>
      <path d="M7 17 17 7M8 7h9v9" />
    </svg>
  );
}

export function GitHubIcon({ className }: { className?: string }) {
  return (
    <svg {...iconProps} strokeWidth={1.5} className={cx("size-5", className)}>
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

export function MailIcon({ className }: { className?: string }) {
  return (
    <svg {...iconProps} strokeWidth={1.5} className={cx("size-5", className)}>
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}

export function DiscordIcon({ className }: { className?: string }) {
  return (
    <svg {...iconProps} strokeWidth={1.5} className={cx("size-5", className)}>
      <path d="M8.5 7.5c2.3-.7 4.7-.7 7 0M7 16.5c3.2 1.3 6.8 1.3 10 0" />
      <path d="M15.5 17.5 17 20c2.4-.6 4.3-1.9 5-3 .3-3.7-.6-7.3-2.5-10.5-1.3-.7-2.8-1.2-4.5-1.5l-.8 1.6M8.5 17.5 7 20c-2.4-.6-4.3-1.9-5-3-.3-3.7.6-7.3 2.5-10.5C5.8 5.8 7.3 5.3 9 5l.8 1.6" />
      <circle cx="9" cy="12" r="1" />
      <circle cx="15" cy="12" r="1" />
    </svg>
  );
}

export function MapPinIcon({ className }: { className?: string }) {
  return (
    <svg {...iconProps} className={cx("size-5", className)}>
      <path d="M20 10c0 4.99-5.54 10.19-7.4 11.8a1 1 0 0 1-1.2 0C9.54 20.19 4 14.99 4 10a8 8 0 0 1 16 0" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

export function ServerIcon({ className }: { className?: string }) {
  return (
    <svg {...iconProps} className={cx("size-5", className)}>
      <rect width="20" height="8" x="2" y="2" rx="2" />
      <rect width="20" height="8" x="2" y="14" rx="2" />
      <path d="M6 6h.01M6 18h.01" />
    </svg>
  );
}

export function CodeIcon({ className }: { className?: string }) {
  return (
    <svg {...iconProps} className={cx("size-5", className)}>
      <path d="m16 18 6-6-6-6M8 6l-6 6 6 6" />
    </svg>
  );
}

export function ActivityIcon({ className }: { className?: string }) {
  return (
    <svg {...iconProps} className={cx("size-5", className)}>
      <path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2" />
    </svg>
  );
}

export function GitBranchIcon({ className }: { className?: string }) {
  return (
    <svg {...iconProps} className={cx("size-5", className)}>
      <path d="M6 3v12" />
      <circle cx="18" cy="6" r="3" />
      <circle cx="6" cy="18" r="3" />
      <path d="M18 9a9 9 0 0 1-9 9" />
    </svg>
  );
}

/** Personal mark: a prompt chevron with cursor on a blue tile. */
export function LogoMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" aria-hidden className={cx("size-8 shrink-0", className)}>
      <rect width="32" height="32" rx="9" fill="#2563eb" />
      <path d="M8 11l6 5-6 5" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M17 22h7" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  );
}

export function CheckCircleIcon({ className }: { className?: string }) {
  return (
    <svg {...iconProps} className={cx("size-5", className)}>
      <circle cx="12" cy="12" r="10" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}

/** Stretches a link over its whole tile, so the tile is one big, keyboard-reachable target. */
export const stretchedLink = "after:absolute after:inset-0 after:rounded-[1.5rem] after:content-['']";
