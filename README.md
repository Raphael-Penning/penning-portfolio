# raphael-penning.de

Persönliches Portfolio von Raphael Penning – Fachinformatiker für Systemintegration (Azubi), in der Freizeit Entwickler & Admin. Zweisprachig (DE/EN), Bento-Layout mit Hell/Dunkel-Modus nach System, gebaut mit Next.js 16, React 19 und Tailwind CSS 4.

## Entwicklung

```bash
pnpm install
pnpm dev
```

`pnpm build && pnpm start` baut und startet die Produktionsversion (`output: "standalone"`).

## Konfiguration

Alle Variablen sind optional, siehe [`.env.example`](.env.example):

| Variable | Zweck |
| --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Basis-URL für Canonicals, Sitemap und Open Graph (Standard: `https://raphael-penning.de`) |
| `UMAMI_WEBSITE_ID` | Aktiviert Umami-Reichweitenmessung; ohne ID kein Tracking, Datenschutzerklärung passt sich an |
| `UMAMI_URL`, `UMAMI_DOMAINS` | Umami-Instanz und gezählte Hostnamen |
| `GOOGLE_SITE_VERIFICATION`, `BING_SITE_VERIFICATION` | Verifizierungs-Meta-Tags für Search Console / Bing |

## SEO

- Lokalisierte Routen `/de` und `/en` mit `hreflang`, `x-default` und Canonical; `/` leitet nach `Accept-Language` weiter
- Echte 404 für unbekannte Pfade (kein Soft-404)
- JSON-LD: `ProfilePage`, `Person`, `WebSite`, `SoftwareApplication`/`SoftwareSourceCode` (OpenStatusPage), `BreadcrumbList`
- Dynamische Open-Graph-Bilder pro Sprache, `robots.txt`, Sitemap-Index mit hreflang, `llms.txt`, Web-Manifest
- Selbst gehostete Schriften, optimierte Bilder (AVIF/WebP), Security-Header, funktioniert ohne JavaScript

## Inhalte

- Texte: [`src/content/home.ts`](src/content/home.ts)
- Impressum & Datenschutz: [`src/content/legal.tsx`](src/content/legal.tsx), Anbieterdaten in [`src/data/legal.ts`](src/data/legal.ts)
- Stammdaten (Domain, Mail, Links): [`src/lib/site.ts`](src/lib/site.ts)
