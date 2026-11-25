import { pick, type Locale } from "@/lib/i18n";
import { site } from "@/lib/site";
import { contact } from "@/content/home";
import {
  ArrowIcon,
  ButtonLink,
  Container,
  DiscordIcon,
  GitHubIcon,
  Label,
  MailIcon,
  Section,
  SectionHeading,
  Tile,
  cx,
  focusRing,
  stretchedLink,
} from "@/components/ui/primitives";
import { CopyButton } from "@/components/ui/copy-button";

export function Contact({ lang }: { lang: Locale }) {
  const t = pick(contact, lang);
  return (
    <Section id="contact" aria-labelledby="contact-title" className="pb-24 sm:pb-32">
      <Container>
        <SectionHeading id="contact-title" index="04" eyebrow={t.eyebrow} title={t.title} lead={t.lead} />
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {/* Email */}
          <Tile className="relative flex flex-col justify-between gap-8 overflow-hidden md:col-span-2 md:row-span-2">
            <div aria-hidden className="pointer-events-none absolute -top-24 -right-24 size-72 rounded-full bg-[var(--accent-glow)] blur-3xl" />
            <div className="relative">
              <div className="flex items-center justify-between">
                <Label>{t.mailLabel}</Label>
                <MailIcon className="text-accent" />
              </div>
              <a
                href={`mailto:${site.email}`}
                className={cx("mt-5 block rounded-sm text-2xl font-semibold tracking-tight break-all hover:text-accent sm:text-3xl", focusRing)}
              >
                {site.email}
              </a>
              <p className="mt-6 font-mono text-[11px] tracking-wider text-subtle uppercase">{t.altLabel}</p>
              <ul className="mt-2 space-y-1">
                {site.emailsAlt.map((m) => (
                  <li key={m}>
                    <a
                      href={`mailto:${m}`}
                      className={cx("inline-flex min-h-8 items-center rounded-sm text-sm break-all text-muted underline decoration-line-strong underline-offset-4 hover:text-fg hover:decoration-accent", focusRing)}
                    >
                      {m}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <ButtonLink href={`mailto:${site.email}`}>
                <MailIcon className="size-4" /> {t.primary}
              </ButtonLink>
            </div>
          </Tile>

          {/* GitHub */}
          <Tile interactive className="flex flex-col justify-between gap-6 md:col-span-1 lg:col-span-2">
            <div className="flex items-center justify-between">
              <Label>{t.githubLabel}</Label>
              <GitHubIcon className="text-fg" />
            </div>
            <a
              href={site.github}
              target="_blank"
              rel="noopener noreferrer me"
              className={cx("inline-flex items-center gap-2 rounded-sm text-lg font-semibold", focusRing, stretchedLink)}
            >
              github.com/Raphael-Penning <ArrowIcon className="text-accent" />
            </a>
          </Tile>

          {/* Discord */}
          <Tile className="flex flex-col justify-between gap-6 md:col-span-1 lg:col-span-2">
            <div className="flex items-center justify-between">
              <Label>{t.discordLabel}</Label>
              <DiscordIcon className="text-fg" />
            </div>
            <div className="flex flex-wrap items-center justify-between gap-3">
              <p className="font-mono text-lg font-semibold">{site.discord}</p>
              <CopyButton text={site.discord} labels={t.copy} />
            </div>
          </Tile>
        </div>
      </Container>
    </Section>
  );
}
