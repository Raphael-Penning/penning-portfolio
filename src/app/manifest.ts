import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${site.name} – Portfolio`,
    short_name: "R. Penning",
    description: "Portfolio von Raphael Penning – Fachinformatiker Systemintegration, Entwickler & Admin.",
    start_url: "/de",
    lang: "de",
    display: "browser",
    background_color: "#07090a",
    theme_color: "#07090a",
    icons: [
      { src: "/icon.svg", sizes: "any", type: "image/svg+xml" },
      { src: "/apple-icon", sizes: "180x180", type: "image/png" },
    ],
  };
}
