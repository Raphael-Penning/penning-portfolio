import { ImageResponse } from "next/og";
import { site } from "./site";

export const ogSize = { width: 1200, height: 630 };
export const ogContentType = "image/png";

const colors = {
  bg: "#08090b",
  fg: "#eceef3",
  muted: "#9ca3b2",
  line: "#23262f",
  surface: "#0f1115",
  accent: "#60a5fa",
  tile: "#2563eb",
  ok: "#22c55e",
};

export function LogoSvg({ size, rounded = true }: { size: number; rounded?: boolean }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32">
      <rect width="32" height="32" rx={rounded ? 8 : 0} fill={colors.tile} />
      <path d="M8 11l6 5-6 5" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M17 22h7" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  );
}

/** Social card: logo row, title, subline and a terminal strip. */
export function ogImage({ title, sub, prompt }: { title: string; sub: string; prompt: string }) {
  const titleSize = title.length > 60 ? 56 : 68;
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          background: `radial-gradient(ellipse 80% 60% at 50% 0%, rgba(59,130,246,0.28), transparent 70%), ${colors.bg}`,
          color: colors.fg,
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <LogoSvg size={56} />
          <div style={{ fontSize: 34, fontWeight: 600 }}>{site.name}</div>
          <div style={{ marginLeft: "auto", fontSize: 24, color: colors.muted }}>{site.domain}</div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div style={{ fontSize: titleSize, fontWeight: 700, lineHeight: 1.08, letterSpacing: -2 }}>{title}</div>
          <div style={{ fontSize: 30, color: colors.muted }}>{sub}</div>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 14,
            padding: "20px 24px",
            borderRadius: 16,
            border: `1px solid ${colors.line}`,
            background: colors.surface,
            fontSize: 26,
            fontFamily: "monospace",
          }}
        >
          <div style={{ width: 14, height: 14, borderRadius: 7, background: colors.ok }} />
          <span style={{ color: colors.accent }}>$</span>
          <span>{prompt}</span>
        </div>
      </div>
    ),
    ogSize,
  );
}

export const ogText = {
  de: {
    title: "Fachinformatiker Systemintegration & Entwickler",
    sub: "Linux · Docker · Monitoring · TypeScript – Oldenburg",
    prompt: "openstatuspage.service active (running)",
  },
  en: {
    title: "IT systems integration trainee & developer",
    sub: "Linux · Docker · Monitoring · TypeScript – Germany",
    prompt: "openstatuspage.service active (running)",
  },
} as const;
