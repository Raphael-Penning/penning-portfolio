import { openStatusPage, site } from "@/lib/site";
import { legalPath } from "@/lib/routes";
import { meta, skills } from "@/content/home";

/** Plain-text summary for AI agents (https://llmstxt.org). */
export function GET() {
  const body = `# ${site.name}

> ${meta.en.description}

Raphael Penning lives in Oldenburg, Germany. He is training as an IT specialist for systems integration (Fachinformatiker für Systemintegration) and works as a developer and sysadmin in his spare time.

## Pages

- [Portfolio (Deutsch)](${site.url}/de): about, projects, skills and contact
- [Portfolio (English)](${site.url}/en): about, projects, skills and contact
- [Impressum](${site.url}${legalPath("imprint", "de")})
- [Datenschutz](${site.url}${legalPath("privacy", "de")})

## Projects

- [${openStatusPage.name}](${openStatusPage.url}): self-hosted, open-source status page (${openStatusPage.license}). Public services are composed from internal monitoring checks (Icinga 2, Uptime Kuma, openITCockpit, webhooks) without exposing internal details. Source: ${openStatusPage.github}

## Skills

${skills.en.groups.map((g) => `- ${g.title}: ${g.items.join(", ")}`).join("\n")}

## Contact

- Email: ${site.email}
- GitHub: ${site.github}
- Discord: ${site.discord}
`;
  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=86400",
    },
  });
}
