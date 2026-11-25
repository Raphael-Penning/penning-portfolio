import type { Metadata, Viewport } from "next";
import { notFound } from "next/navigation";
import { IBM_Plex_Sans, JetBrains_Mono } from "next/font/google";
import { hasLocale, locales } from "@/lib/i18n";
import { site } from "@/lib/site";
import { nav } from "@/content/home";
import { Analytics } from "@/components/analytics";
import "../globals.css";

const plexSans = IBM_Plex_Sans({
  variable: "--font-plex-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});
const jetbrainsMono = JetBrains_Mono({ variable: "--font-jetbrains-mono", subsets: ["latin"], display: "swap" });

export async function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f5f7fa" },
    { media: "(prefers-color-scheme: dark)", color: "#08090b" },
  ],
  colorScheme: "light dark",
};

/** Site-wide defaults; every page sets its own title, canonical and hreflang. */
export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: site.name, template: `%s · ${site.name}` },
  applicationName: site.name,
  creator: site.name,
  authors: [{ name: site.name, url: site.url }],
  category: "technology",
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
  formatDetection: { telephone: false, email: false, address: false },
  // Search Console / Bing Webmaster Tools: set the tokens at build time to emit the meta tags.
  verification: {
    ...(process.env.GOOGLE_SITE_VERIFICATION ? { google: process.env.GOOGLE_SITE_VERIFICATION } : {}),
    ...(process.env.BING_SITE_VERIFICATION
      ? { other: { "msvalidate.01": process.env.BING_SITE_VERIFICATION } }
      : {}),
  },
};

export default async function RootLayout({ children, params }: LayoutProps<"/[lang]">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  return (
    <html lang={lang} className={`${plexSans.variable} ${jetbrainsMono.variable} antialiased`}>
      <head>
        <link rel="alternate" type="text/plain" href="/llms.txt" title="llms.txt" />
        <link rel="me" href={site.github} />
      </head>
      <body className="min-h-dvh bg-bg text-fg">
        <a
          href="#main"
          className="sr-only z-[100] rounded-md bg-accent-strong px-4 py-2 text-sm font-medium text-white focus:not-sr-only focus:fixed focus:top-3 focus:left-3"
        >
          {nav[lang].skip}
        </a>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
