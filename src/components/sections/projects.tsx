import Image from "next/image";
import { pick, type Locale } from "@/lib/i18n";
import { openStatusPage, site } from "@/lib/site";
import { projects } from "@/content/home";
import {
  ArrowIcon,
  ButtonLink,
  Card,
  Container,
  GitHubIcon,
  Section,
  SectionHeading,
  StatusDot,
  Tag,
  WindowFrame,
} from "@/components/ui/primitives";

export function Projects({ lang }: { lang: Locale }) {
  const t = pick(projects, lang);
  const shot = openStatusPage.screenshot("overview", lang);

  return (
    <Section id="projects" aria-labelledby="projects-title" className="border-y border-line/60 bg-surface/30">
      <Container>
        <SectionHeading id="projects-title" eyebrow={t.eyebrow} title={t.title} lead={t.lead} />

        <article
          aria-labelledby="osp-title"
          className="mt-12 grid gap-10 rounded-3xl border border-line bg-bg/60 p-5 sm:p-8 lg:grid-cols-[1fr_1.1fr] lg:items-center"
        >
          <div className="order-2 lg:order-1">
            <p className="inline-flex items-center gap-2 font-mono text-xs tracking-wider text-accent uppercase">
              <StatusDot pulse />
              {t.featured}
            </p>
            <h3 id="osp-title" className="mt-3 text-3xl font-semibold tracking-tight">
              <a
                href={openStatusPage.url}
                target="_blank"
                rel="noopener"
                className="rounded-sm hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
              >
                {t.name}
              </a>
            </h3>
            <p className="mt-2 text-lg text-pretty text-fg/90">{t.tagline}</p>
            <p className="mt-4 text-pretty text-muted">{t.body}</p>

            <ul className="mt-6 space-y-2">
              {t.highlights.map((h) => (
                <li key={h} className="flex gap-2 text-sm text-fg/90">
                  <span aria-hidden className="mt-0.5 font-mono text-ok">
                    ✓
                  </span>
                  {h}
                </li>
              ))}
            </ul>

            <ul className="mt-6 flex flex-wrap gap-2" aria-label={t.stackLabel}>
              {t.stack.map((s) => (
                <li key={s}>
                  <Tag>{s}</Tag>
                </li>
              ))}
            </ul>

            <dl className="mt-6 grid grid-cols-3 gap-3 border-t border-line pt-6">
              {t.facts.map((f) => (
                <div key={f.label}>
                  <dt className="font-mono text-[11px] tracking-wider text-subtle uppercase">{f.label}</dt>
                  <dd className="mt-1 text-sm font-medium">{f.value}</dd>
                </div>
              ))}
            </dl>

            <div className="mt-8 flex flex-wrap gap-3">
              <ButtonLink href={openStatusPage.url} rel="noopener">
                {t.website} <ArrowIcon />
              </ButtonLink>
              <ButtonLink href={openStatusPage.github} variant="secondary">
                <GitHubIcon className="size-4" /> {t.source}
              </ButtonLink>
              <ButtonLink href={openStatusPage.demo} variant="secondary">
                {t.demo} <ArrowIcon />
              </ButtonLink>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <WindowFrame title={openStatusPage.url.replace("https://", "")}>
              <Image
                src={shot.src}
                width={shot.width}
                height={shot.height}
                alt={t.screenshotAlt}
                sizes="(min-width: 1024px) 560px, 100vw"
                className="h-auto w-full"
              />
            </WindowFrame>
          </div>
        </article>

        <Card className="mt-6 flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h3 className="font-semibold">{t.moreTitle}</h3>
            <p className="mt-1 text-sm text-muted">{t.moreBody}</p>
          </div>
          <ButtonLink href={site.github} variant="secondary" rel="noopener noreferrer me">
            <GitHubIcon className="size-4" /> {t.moreCta}
          </ButtonLink>
        </Card>
      </Container>
    </Section>
  );
}
