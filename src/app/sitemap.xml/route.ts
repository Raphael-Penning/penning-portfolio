import { sitemapIndexXml, xmlResponse } from "@/lib/sitemaps";

/** Sitemap index: points to the main page sitemap (and future child sitemaps). */
export function GET() {
  return xmlResponse(sitemapIndexXml());
}
