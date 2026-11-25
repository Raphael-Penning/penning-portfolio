import Image from "next/image";
import type { ComponentType } from "react";
import { pick, type Locale } from "@/lib/i18n";
import { openStatusPage, site } from "@/lib/site";
import { projects } from "@/content/home";
import {
  ActivityIcon,
  ArrowIcon,
  ButtonLink,
  CheckCircleIcon,
  Container,
  GitBranchIcon,
  GitHubIcon,
  Label,
  MailIcon,
  Section,
  SectionHeading,
  ServerIcon,
  StatusDot,
  Tag,
  Tile,
  WindowFrame,
  cx,
  focusRing,
  stretchedLink,
} from "@/components/ui/primitives";

const highlightIcons: ComponentType<{ className?: string }>[] = [ActivityIcon, MailIcon, ServerIcon, CheckCircleIcon];

export function Projects({ lang }: { lang: Locale }) {
  const t = pick(projects, lang);
  const shot = openStatusPage.screenshot("overview", lang);

  return (
    <Section id="projects" aria-labelledby="projects-title">
      <Container>
        <SectionHeading id="projects-title" index="01" eyebrow={t.eyebrow} title={t.title} lead={t.lead} />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {/* Featured project */}
          <Tile bare className="overflow-hidden sm:col-span-2 lg:col-span-4">
            <article aria-labelledby="osp-title" className="grid lg:grid-cols-[1fr_1.15fr]">
              <div className="flex flex-col p-7 sm:p-10">
                <p className="inline-flex items-center gap-2 font-mono text-xs font-medium tracking-[0.12em] text-accent uppercase">
                  <StatusDot pulse />
                  {t.featured}
                </p>
                <h3 id="osp-title" className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
                  {t.name}
                </h3>
                <p className="mt-3 text-lg font-medium text-pretty">{t.tagline}</p>
                <p className="mt-4 text-pretty text-muted">{t.body}</p>
                <ul className="mt-6 flex flex-wrap gap-2" aria-label={lang === "de" ? "Tech-Stack" : "Tech stack"}>
                  {t.stack.map((s) => (
                    <li key={s}>
                      <Tag>{s}</Tag>
                    </li>
                  ))}
                </ul>
                <dl className="mt-6 grid grid-cols-3 gap-3 border-t border-line pt-5">
                  {t.facts.map((f) => (
                    <div key={f.label}>
                      <dt className="font-mono text-[11px] tracking-wider text-subtle uppercase">{f.label}</dt>
                      <dd className="mt-1 text-sm font-semibold">{f.value}</dd>
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
              <div className="relative flex items-end overflow-hidden border-t border-line bg-surface-2 px-6 pt-8 sm:px-10 sm:pt-10 lg:border-t-0 lg:border-l">
                <div aria-hidden className="absolute inset-0 bg-grid mask-fade-b" />
                <WindowFrame
                  title={openStatusPage.url.replace("https://", "")}
                  className="relative -mb-px w-full rounded-b-none border-b-0 shadow-[0_-20px_60px_-30px_var(--accent-glow)]"
                >
                  <Image
                    src={shot.src}
                    width={shot.width}
                    height={shot.height}
                    alt={t.screenshotAlt}
                    sizes="(min-width: 1152px) 560px, (min-width: 1024px) 50vw, 100vw"
                    className="h-auto w-full"
                  />
                </WindowFrame>
              </div>
            </article>
          </Tile>

          {/* Highlights */}
          {t.highlights.map((h, i) => {
            const Icon = highlightIcons[i];
            return (
              <Tile key={h.title}>
                <span className="inline-flex size-10 items-center justify-center rounded-xl bg-accent-soft text-accent">
                  <Icon />
                </span>
                <h4 className="mt-5 font-semibold">{h.title}</h4>
                <p className="mt-1.5 text-sm text-pretty text-muted">{h.body}</p>
              </Tile>
            );
          })}

          {/* This portfolio */}
          <Tile interactive className="flex flex-col justify-between gap-6 sm:col-span-2">
            <div>
              <div className="flex items-center justify-between">
                <Label>{t.portfolio.label}</Label>
                <GitBranchIcon className="text-accent" />
              </div>
              <h3 className="mt-4 font-mono text-xl font-semibold">
                <a href={site.repo} target="_blank" rel="noopener noreferrer" className={cx("rounded-sm", focusRing, stretchedLink)}>
                  {t.portfolio.title}
                </a>
              </h3>
              <p className="mt-2 text-pretty text-muted">{t.portfolio.body}</p>
            </div>
            <div className="flex flex-wrap items-center justify-between gap-3">
              <ul className="flex flex-wrap gap-2">
                {t.portfolio.stack.map((s) => (
                  <li key={s}>
                    <Tag>{s}</Tag>
                  </li>
                ))}
              </ul>
              <span className="inline-flex items-center gap-1.5 text-sm text-accent">
                {t.portfolio.cta} <ArrowIcon />
              </span>
            </div>
          </Tile>

          {/* More on GitHub */}
          <Tile interactive className="flex flex-col justify-between gap-6 sm:col-span-2">
            <div>
              <div className="flex items-center justify-between">
                <Label>{t.more.label}</Label>
                <GitHubIcon className="text-fg" />
              </div>
              <h3 className="mt-4 text-xl font-semibold">
                <a href={site.github} target="_blank" rel="noopener noreferrer me" className={cx("rounded-sm", focusRing, stretchedLink)}>
                  {t.more.title}
                </a>
              </h3>
              <p className="mt-2 text-pretty text-muted">{t.more.body}</p>
            </div>
            <span className="inline-flex items-center gap-1.5 text-sm text-accent">
              {t.more.cta} <ArrowIcon />
            </span>
          </Tile>
        </div>
      </Container>
    </Section>
  );
}
