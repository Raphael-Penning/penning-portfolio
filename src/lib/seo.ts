import type { Metadata } from "next";
import type { Locale } from "./i18n";
import { xDefault, type Alternates } from "./routes";
import { site } from "./site";

export const ogLocale = (lang: Locale) => (lang === "de" ? "de_DE" : "en_US");

/** Page-level metadata with canonical, hreflang alternates, Open Graph and Twitter card. */
export function pageMetadata({
  lang,
  title,
  description,
  alternates,
  absoluteTitle = false,
  profile = false,
}: {
  lang: Locale;
  title: string;
  description: string;
  alternates: Alternates;
  absoluteTitle?: boolean;
  /** og:type=profile for the home page. */
  profile?: boolean;
}): Metadata {
  const url = alternates[lang];
  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    alternates: {
      canonical: url,
      languages: { de: alternates.de, en: alternates.en, "x-default": xDefault(alternates) },
    },
    openGraph: {
      ...(profile
        ? { type: "profile", firstName: "Raphael", lastName: "Penning", username: "Raphael-Penning" }
        : { type: "website" }),
      url,
      siteName: site.name,
      title,
      description,
      locale: ogLocale(lang),
      alternateLocale: [ogLocale(lang === "de" ? "en" : "de")],
    },
    twitter: { card: "summary_large_image", title, description },
  };
}
