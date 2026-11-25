import { site } from "./site";

/**
 * Umami web analytics (https://umami.is), cookieless and self-hosted.
 *
 * Off unless a website ID is set at build time, so local builds and forks send nothing:
 *
 *   UMAMI_WEBSITE_ID=xxxxxxxx-xxxx-...        # website ID from the Umami dashboard (required)
 *   UMAMI_URL=https://analytics.partlabs.de   # base URL of the Umami instance (optional)
 *   UMAMI_DOMAINS=raphael-penning.de          # comma-separated hostnames to count (optional)
 */
const env = (name: string) => process.env[name]?.trim() || undefined;

const websiteId = env("UMAMI_WEBSITE_ID");
const url = (env("UMAMI_URL") ?? "https://analytics.partlabs.de").replace(/\/+$/, "");

export const umami = websiteId
  ? {
      src: `${url}/script.js`,
      websiteId,
      host: new URL(url).host,
      domains: env("UMAMI_DOMAINS") ?? site.domain,
    }
  : null;
