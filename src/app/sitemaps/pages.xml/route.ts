import { pagesSitemapXml, xmlResponse } from "@/lib/sitemaps";

/** Main sitemap with all navigable pages (home, legal notice, privacy) in EN and DE. */
export function GET() {
  return xmlResponse(pagesSitemapXml());
}
