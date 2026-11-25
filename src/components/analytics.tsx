import Script from "next/script";
import { umami } from "@/lib/analytics";

/** Cookieless Umami tracker, loaded during idle time. Renders nothing without UMAMI_WEBSITE_ID. */
export function Analytics() {
  if (!umami) return null;
  return (
    <Script
      src={umami.src}
      strategy="lazyOnload"
      data-website-id={umami.websiteId}
      data-domains={umami.domains}
      data-do-not-track="true"
    />
  );
}
