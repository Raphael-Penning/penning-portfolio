import { pick, type Locale } from "@/lib/i18n";
import { site } from "@/lib/site";
import { contact } from "@/content/home";
import {
  ButtonLink,
  Card,
  Container,
  DiscordIcon,
  GitHubIcon,
  MailIcon,
  Section,
  SectionHeading,
  cx,
  focusRing,
} from "@/components/ui/primitives";
import { CopyButton } from "@/components/ui/copy-button";

const rowLink = cx("rounded-sm text-fg underline decoration-line-strong underline-offset-4 hover:decoration-accent", focusRing);

export function Contact({ lang }: { lang: Locale }) {
  const t = pick(contact, lang);
  return (
    <Section id="contact" aria-labelledby="contact-title" className="border-t border-line/60 bg-surface/30">
      <Container className="grid gap-12 lg:grid-cols-2 lg:items-start">
        <div>
          <SectionHeading id="contact-title" eyebrow={t.eyebrow} title={t.title} lead={t.lead} />
          <ButtonLink href={`mailto:${site.email}`} className="mt-8">
            <MailIcon className="size-4" /> {t.primary}
          </ButtonLink>
        </div>

        <Card className="p-0">
          <ul className="divide-y divide-line">
            <li className="flex items-start gap-4 p-5">
              <MailIcon className="mt-0.5 text-accent" />
              <div className="min-w-0">
                <p className="font-mono text-xs tracking-wider text-subtle uppercase">E-Mail</p>
                <a href={`mailto:${site.email}`} className={cx(rowLink, "mt-1 inline-block break-all")}>
                  {site.email}
                </a>
                <p className="mt-3 font-mono text-xs tracking-wider text-subtle uppercase">{t.altLabel}</p>
                <ul className="mt-1 space-y-1 text-sm">
                  {site.emailsAlt.map((m) => (
                    <li key={m}>
                      <a href={`mailto:${m}`} className={cx(rowLink, "break-all text-muted")}>
                        {m}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
            <li className="flex items-start gap-4 p-5">
              <GitHubIcon className="mt-0.5 text-accent" />
              <div>
                <p className="font-mono text-xs tracking-wider text-subtle uppercase">{t.githubLabel}</p>
                <a href={site.github} target="_blank" rel="noopener noreferrer me" className={cx(rowLink, "mt-1 inline-block")}>
                  github.com/Raphael-Penning
                </a>
              </div>
            </li>
            <li className="flex items-start gap-4 p-5">
              <DiscordIcon className="mt-0.5 text-accent" />
              <div className="flex flex-1 flex-wrap items-center justify-between gap-3">
                <div>
                  <p className="font-mono text-xs tracking-wider text-subtle uppercase">{t.discordLabel}</p>
                  <p className="mt-1 font-mono text-fg">{site.discord}</p>
                </div>
                <CopyButton text={site.discord} labels={t.copy} />
              </div>
            </li>
          </ul>
        </Card>
      </Container>
    </Section>
  );
}
