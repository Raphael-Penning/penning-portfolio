const env = (name: string) => process.env[name]?.trim() || undefined;

const url = (env("NEXT_PUBLIC_SITE_URL") ?? "https://raphael-penning.de").replace(/\/+$/, "");

export const site = {
  name: "Raphael Penning",
  url,
  domain: new URL(url).host,
  github: "https://github.com/Raphael-Penning",
  repo: "https://github.com/Raphael-Penning/penning-portfolio",
  email: "mail@raphael-penning.de",
  /** Further addresses that reach the same person. */
  emailsAlt: ["mail@raphaelpenning.de", "penning@partlabs.de"],
  discord: "Raphaelpe",
  location: { city: "Oldenburg", region: "Niedersachsen", country: "DE" },
  /** Last content update, used for <lastmod> and dateModified. */
  updated: "2026-11-25",
} as const;

/** The featured project. */
export const openStatusPage = {
  name: "OpenStatusPage",
  url: "https://openstatuspage.dev",
  github: "https://github.com/Raphael-Penning/openstatuspage",
  demo: "https://openstatus.partlabs.de",
  license: "AGPL-3.0",
  licenseUrl: "https://www.gnu.org/licenses/agpl-3.0.html",
  version: "0.4.1",
  screenshot: (name: "overview", lang: "de" | "en") => ({
    src: `/projects/openstatuspage-${name}-${lang}.png`,
    width: 2880,
    height: 1800,
  }),
} as const;
