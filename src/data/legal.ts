import { site } from "@/lib/site";

/** Provider details for the legal notice (§ 5 DDG) and privacy policy (Art. 13 GDPR). */
export const provider = {
  name: "Raphael Penning",
  street: "Sandweg 258",
  postalCode: "26135",
  city: "Oldenburg",
  country: { de: "Deutschland", en: "Germany" },
  email: site.email,
} as const;

/** Hosting: servers operated by Pein GbR, processing on our behalf (Art. 28 GDPR). */
export const hosting = {
  name: "Pein GbR",
  url: "https://pein.group",
} as const;

/** Competent supervisory authority for a private person in Oldenburg (Lower Saxony). */
export const authority = {
  de: "Die Landesbeauftragte für den Datenschutz Niedersachsen",
  en: "The State Commissioner for Data Protection of Lower Saxony (Die Landesbeauftragte für den Datenschutz Niedersachsen)",
  address: "Prinzenstraße 5, 30159 Hannover",
  url: "https://www.lfd.niedersachsen.de",
} as const;

/** Date shown as "last updated" on both legal pages. */
export const legalUpdated = "2026-11-25";
