import { defaultLocale, locales, type Locale } from "./i18n";
import { site } from "./site";

/** Legal pages with a localized slug per language. */
export const legalPages = {
  imprint: { de: "impressum", en: "imprint" },
  privacy: { de: "datenschutz", en: "privacy" },
} as const satisfies Record<string, Record<Locale, string>>;

export type LegalPage = keyof typeof legalPages;

export const legalPath = (page: LegalPage, lang: Locale) => `/${lang}/${legalPages[page][lang]}`;

export const legalPageFromSlug = (slug: string, lang: Locale): LegalPage | undefined =>
  (Object.keys(legalPages) as LegalPage[]).find((p) => legalPages[p][lang] === slug);

/** Every slug under /[lang]/, for static params and the proxy's list of known paths. */
export const allSlugs = (lang: Locale) => Object.values(legalPages).map((s) => s[lang]);

/** Same page in every language, used for the language switch and hreflang. */
export type Alternates = Record<Locale, string>;

export const homeAlternates: Alternates = { de: "/de", en: "/en" };

export const legalAlternates = (page: LegalPage): Alternates =>
  Object.fromEntries(locales.map((l) => [l, legalPath(page, l)])) as Alternates;

/** Turns an in-page anchor (#projects) into a link that works from any page. */
export const anchor = (href: string, lang: Locale) =>
  href.startsWith("#") ? `/${lang}${href}` : href;

export const absolute = (path: string) => `${site.url}${path}`;

export const xDefault = (alternates: Alternates) => alternates[defaultLocale];

/** All indexable pages, for the sitemap. */
export const indexablePages = (): { alternates: Alternates; priority: number }[] => [
  { alternates: homeAlternates, priority: 1 },
  { alternates: legalAlternates("imprint"), priority: 0.2 },
  { alternates: legalAlternates("privacy"), priority: 0.2 },
];
