import { pick, type Locale } from "@/lib/i18n";
import { openStatusPage, site } from "@/lib/site";
import { intro } from "@/content/home";
import {
  ArrowIcon,
  ButtonLink,
  Container,
  GitHubIcon,
  Label,
  MapPinIcon,
  StatusDot,
  Tile,
  cx,
  focusRing,
  stretchedLink,
} from "@/components/ui/primitives";

export function Intro({ lang }: { lang: Locale }) {
  const t = pick(intro, lang);
  return (
    <section aria-labelledby="intro-title" className="relative">
      <div aria-hidden className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[620px] bg-grid mask-radial" />
      <div
        aria-hidden
        className="pointer-events-none absolute -top-48 left-1/2 -z-10 h-[520px] w-[min(1000px,100%)] -translate-x-1/2 rounded-full bg-[var(--accent-glow)] blur-3xl"
      />
      <Container className="grid gap-4 pt-8 pb-16 sm:pt-12 sm:pb-24 md:grid-cols-2 lg:grid-cols-4">
        {/* Main tile */}
        <Tile bare className="flex flex-col justify-between gap-10 p-7 sm:p-10 md:col-span-2 lg:col-span-3 lg:row-span-2">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full border border-line bg-surface-2 px-3 py-1.5 font-mono text-xs text-muted">
              <StatusDot pulse />
              {t.status}
            </p>
            <h1 id="intro-title" className="mt-6 text-5xl font-semibold tracking-tight sm:text-7xl">
              <span className="text-gradient">Raphael Penning</span>
            </h1>
            <p className="mt-5 max-w-2xl text-xl font-medium text-balance sm:text-2xl">{t.title}</p>
            <p className="mt-4 max-w-2xl text-base text-pretty text-muted sm:text-lg">{t.lead}</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <ButtonLink href="#projects">{t.ctaProjects}</ButtonLink>
            <ButtonLink href="#contact" variant="secondary">
              {t.ctaContact}
            </ButtonLink>
          </div>
        </Tile>

        {/* Location */}
        <Tile className="flex flex-col justify-between gap-6 overflow-hidden">
          <div className="flex items-center justify-between">
            <Label>{t.locationLabel}</Label>
            <MapPinIcon className="text-accent" />
          </div>
          <div>
            <p className="text-2xl font-semibold tracking-tight">{t.location}</p>
            <p className="mt-1 text-sm text-muted">{t.region}</p>
            <p className="mt-3 font-mono text-xs text-subtle">
              53.14° N · 8.21° E · {t.timezone}
            </p>
          </div>
        </Tile>

        {/* GitHub */}
        <Tile interactive className="flex flex-col justify-between gap-6">
          <div className="flex items-center justify-between">
            <Label>{t.githubLabel}</Label>
            <GitHubIcon className="text-fg" />
          </div>
          <div>
            <a
              href={site.github}
              target="_blank"
              rel="noopener noreferrer me"
              className={cx("block rounded-sm text-lg font-semibold tracking-tight", focusRing, stretchedLink)}
            >
              @Raphael-Penning
            </a>
            <p className="mt-2 inline-flex items-center gap-1.5 text-sm text-accent">
              {t.githubCta} <ArrowIcon />
            </p>
          </div>
        </Tile>

        {/* Featured project teaser */}
        <Tile interactive className="flex flex-col justify-between gap-6 md:col-span-1 lg:col-span-2">
          <div className="flex items-center justify-between">
            <Label>{t.featuredLabel}</Label>
            <span className="inline-flex items-center gap-2 font-mono text-xs text-ok">
              <StatusDot /> active
            </span>
          </div>
          <div>
            <a href="#projects" className={cx("block rounded-sm text-2xl font-semibold tracking-tight", focusRing, stretchedLink)}>
              {openStatusPage.name}
            </a>
            <p className="mt-1 text-muted">{t.featuredBody}</p>
          </div>
        </Tile>

        {/* Terminal */}
        <Tile className="bg-[#0b0d12] font-mono text-[13px] text-[#e6e8ee] md:col-span-1 lg:col-span-2 dark:bg-surface">
          <div role="group" aria-label={t.terminalLabel}>
            <p>
              <span className="text-[#60a5fa]">$</span> whoami
            </p>
            <dl className="mt-3 grid grid-cols-[auto_1fr] gap-x-5 gap-y-1.5">
              {t.terminal.map((row) => (
                <div key={row.key} className="contents">
                  <dt className="text-[#9aa1b0]">{row.key}</dt>
                  <dd>{row.value}</dd>
                </div>
              ))}
            </dl>
            <p className="mt-3" aria-hidden>
              <span className="text-[#60a5fa]">$</span>{" "}
              <span className="inline-block h-4 w-2 translate-y-0.5 bg-[#e6e8ee] motion-safe:animate-pulse" />
            </p>
          </div>
        </Tile>
      </Container>
    </section>
  );
}
