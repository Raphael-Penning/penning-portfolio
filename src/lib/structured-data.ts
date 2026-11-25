import type { Locale } from "./i18n";
import { absolute } from "./routes";
import { openStatusPage, site } from "./site";
import { meta, skills } from "@/content/home";

/**
 * schema.org graph. Every page carries the full entity nodes (not only @id references),
 * so search engines can resolve them without visiting other pages.
 */
const ids = {
  website: `${site.url}/#website`,
  person: `${site.url}/#person`,
  portrait: `${site.url}/#portrait`,
  osp: `${site.url}/#openstatuspage`,
  ospSource: `${site.url}/#openstatuspage-source`,
};

const jobTitle = {
  de: "Auszubildender Fachinformatiker für Systemintegration",
  en: "IT specialist for systems integration (trainee)",
} as const;

const personNode = (lang: Locale) => ({
  "@type": "Person",
  "@id": ids.person,
  name: site.name,
  givenName: "Raphael",
  familyName: "Penning",
  url: site.url,
  email: `mailto:${site.email}`,
  jobTitle: jobTitle[lang],
  description: meta[lang].description,
  image: { "@id": ids.portrait },
  address: {
    "@type": "PostalAddress",
    addressLocality: site.location.city,
    addressRegion: site.location.region,
    addressCountry: site.location.country,
  },
  nationality: { "@type": "Country", name: "Germany" },
  knowsLanguage: ["de", "en"],
  hasOccupation: {
    "@type": "Occupation",
    name: jobTitle[lang],
    occupationalCategory: "2523 Computer network professionals",
    occupationLocation: { "@type": "City", name: site.location.city },
  },
  knowsAbout: skills[lang].groups.flatMap((g) => g.items),
  sameAs: [site.github],
  owns: { "@id": ids.osp },
});

const portraitNode = () => ({
  "@type": "ImageObject",
  "@id": ids.portrait,
  url: absolute("/de/opengraph-image"),
  contentUrl: absolute("/de/opengraph-image"),
  width: 1200,
  height: 630,
  caption: site.name,
});

const ospNode = (lang: Locale) => ({
  "@type": "SoftwareApplication",
  "@id": ids.osp,
  name: openStatusPage.name,
  url: openStatusPage.url,
  description:
    lang === "de"
      ? "Selbst gehostete Open-Source-Statusseite. Öffentliche Dienste werden aus internen Monitoring-Checks (Icinga 2, Uptime Kuma, openITCockpit, Webhooks) zusammengesetzt, ohne interne Details offenzulegen."
      : "Self-hosted, open-source status page. Public services are composed from internal monitoring checks (Icinga 2, Uptime Kuma, openITCockpit, webhooks) without exposing internal details.",
  applicationCategory: "DeveloperApplication",
  applicationSubCategory: "Status page",
  operatingSystem: "Linux (Docker, Kubernetes, systemd)",
  softwareVersion: openStatusPage.version,
  license: openStatusPage.licenseUrl,
  isAccessibleForFree: true,
  offers: { "@type": "Offer", price: "0", priceCurrency: "EUR" },
  author: { "@id": ids.person },
  creator: { "@id": ids.person },
  screenshot: absolute(openStatusPage.screenshot("overview", lang).src),
  sameAs: [openStatusPage.github, openStatusPage.url],
});

const ospSourceNode = () => ({
  "@type": "SoftwareSourceCode",
  "@id": ids.ospSource,
  name: `${openStatusPage.name} source code`,
  codeRepository: openStatusPage.github,
  programmingLanguage: "TypeScript",
  runtimePlatform: "Node.js",
  license: openStatusPage.licenseUrl,
  author: { "@id": ids.person },
  targetProduct: { "@id": ids.osp },
});

const websiteNode = () => ({
  "@type": "WebSite",
  "@id": ids.website,
  url: site.url,
  name: site.name,
  inLanguage: ["de", "en"],
  author: { "@id": ids.person },
  publisher: { "@id": ids.person },
  about: { "@id": ids.person },
});

const entities = (lang: Locale) => [
  websiteNode(),
  personNode(lang),
  portraitNode(),
  ospNode(lang),
  ospSourceNode(),
];

/** Home: a ProfilePage about the person, plus the project list. */
export function homeJsonLd(lang: Locale) {
  const url = absolute(`/${lang}`);
  return [
    ...entities(lang),
    {
      "@type": "ProfilePage",
      "@id": `${url}#webpage`,
      url,
      name: meta[lang].title,
      description: meta[lang].description,
      inLanguage: lang,
      isPartOf: { "@id": ids.website },
      mainEntity: { "@id": ids.person },
      about: { "@id": ids.person },
      primaryImageOfPage: { "@id": ids.portrait },
      dateModified: site.updated,
      hasPart: { "@id": `${url}#projects` },
    },
    {
      "@type": "ItemList",
      "@id": `${url}#projects`,
      name: lang === "de" ? "Projekte" : "Projects",
      itemListElement: [{ "@type": "ListItem", position: 1, item: { "@id": ids.osp } }],
    },
  ];
}

/** Legal page: entities, WebPage and breadcrumb. */
export function legalJsonLd({
  lang,
  path,
  title,
  description,
  updated,
}: {
  lang: Locale;
  path: string;
  title: string;
  description: string;
  updated: string;
}) {
  const url = absolute(path);
  return [
    websiteNode(),
    personNode(lang),
    {
      "@type": "WebPage",
      "@id": `${url}#webpage`,
      url,
      name: title,
      description,
      inLanguage: lang,
      isPartOf: { "@id": ids.website },
      author: { "@id": ids.person },
      dateModified: updated,
      breadcrumb: { "@id": `${url}#breadcrumb` },
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${url}#breadcrumb`,
      itemListElement: [
        { "@type": "ListItem", position: 1, name: lang === "de" ? "Startseite" : "Home", item: absolute(`/${lang}`) },
        { "@type": "ListItem", position: 2, name: title, item: url },
      ],
    },
  ];
}

export type JsonLdNode = Record<string, unknown> & { "@type": string; "@id"?: string };

export const jsonLdDocuments = (nodes: JsonLdNode[]) =>
  nodes.map((node) => ({ "@context": "https://schema.org", ...node }));

/** Serialize for a <script type="application/ld+json">, escaping `<` against injection. */
export const serializeJsonLd = (data: unknown) => JSON.stringify(data).replace(/</g, "\\u003c");
