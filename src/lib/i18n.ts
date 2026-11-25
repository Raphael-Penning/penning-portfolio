export const locales = ["de", "en"] as const;
export type Locale = (typeof locales)[number];
/** German first: the site lives on a .de domain and most visitors are German-speaking. */
export const defaultLocale: Locale = "de";

export const hasLocale = (value: string): value is Locale =>
  (locales as readonly string[]).includes(value);

/** Every copy object ships `{ de, en }` with one shared shape. */
export type Localized<T> = Record<Locale, T>;

export const pick = <T,>(copy: Localized<T>, lang: Locale): T => copy[lang];

export const otherLocale = (lang: Locale): Locale => (lang === "de" ? "en" : "de");
