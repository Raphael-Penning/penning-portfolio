import { locales, pick, type Locale } from "@/lib/i18n";
import { site } from "@/lib/site";
import { anchor, homeAlternates, type Alternates } from "@/lib/routes";
import { nav } from "@/content/home";
import { ButtonLink, Container, GitHubIcon, LogoMark, cx, focusRing } from "@/components/ui/primitives";
import { NavbarMobile } from "@/components/ui/navbar-mobile";

/** DE / EN switch as plain links. Shared by navbar and footer. */
export function LanguageSwitch({
  lang,
  hrefs = homeAlternates,
  className,
}: {
  lang: Locale;
  hrefs?: Alternates;
  className?: string;
}) {
  const t = pick(nav, lang);
  return (
    <nav
      aria-label={t.languageLabel}
      className={cx("flex items-center gap-0.5 rounded-full border border-line bg-surface p-1", className)}
    >
      {locales.map((l) => {
        const current = l === lang;
        return (
          <a
            key={l}
            href={hrefs[l]}
            hrefLang={l}
            lang={l}
            aria-current={current ? "page" : undefined}
            title={t.languages[l]}
            className={cx(
              "inline-flex h-8 min-w-10 items-center justify-center rounded-full px-2.5 font-mono text-xs tracking-wider uppercase transition-colors duration-200",
              focusRing,
              current ? "bg-accent-strong text-white" : "text-muted hover:text-fg",
            )}
          >
            <span aria-hidden>{l}</span>
            <span className="sr-only">{t.languages[l]}</span>
          </a>
        );
      })}
    </nav>
  );
}

export function Brand({ lang }: { lang: Locale }) {
  return (
    <a
      href={`/${lang}`}
      aria-label={pick(nav, lang).homeLabel}
      className="flex min-h-11 items-center gap-2.5 rounded-md font-semibold tracking-tight text-fg focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
    >
      <LogoMark />
      <span>
        Raphael Penning
      </span>
    </a>
  );
}

export function Navbar({ lang, alternates }: { lang: Locale; alternates?: Alternates }) {
  const t = pick(nav, lang);
  const githubLink = (
    <a
      href={site.github}
      target="_blank"
      rel="noopener noreferrer me"
      aria-label={t.github}
      className={cx("inline-flex size-11 items-center justify-center rounded-full text-muted transition-colors duration-200 hover:bg-surface-2 hover:text-fg", focusRing)}
    >
      <GitHubIcon />
    </a>
  );

  return (
    <header className="sticky top-0 z-50 border-b border-line/80 bg-bg/75 backdrop-blur-xl supports-[backdrop-filter]:bg-bg/60">
      <Container className="flex h-16 items-center gap-3">
        <Brand lang={lang} />

        <nav aria-label={t.mainNavLabel} className="mx-auto hidden md:block">
          <ul className="flex items-center gap-1 rounded-full border border-line bg-surface/80 p-1">
            {t.links.map((link) => (
              <li key={link.href}>
                <a
                  href={anchor(link.href, lang)}
                  className={cx("inline-flex h-9 items-center rounded-full px-4 text-sm text-muted transition-colors duration-200 hover:bg-surface-2 hover:text-fg", focusRing)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          <LanguageSwitch lang={lang} hrefs={alternates} />
          {githubLink}
          <ButtonLink href={anchor("#contact", lang)} size="sm">
            {t.contact}
          </ButtonLink>
        </div>

        <NavbarMobile openLabel={t.openMenu} closeLabel={t.closeMenu}>
          <nav aria-label={t.mainNavLabel}>
            <ul className="flex flex-col">
              {[...t.links, { href: "#contact", label: t.contact }].map((link) => (
                <li key={link.href}>
                  <a
                    href={anchor(link.href, lang)}
                    className={cx("flex min-h-12 items-center rounded-xl px-3 text-base text-muted transition-colors hover:bg-surface-2 hover:text-fg", focusRing)}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <div className="mt-4 flex items-center justify-between gap-3 border-t border-line pt-4">
            <LanguageSwitch lang={lang} hrefs={alternates} />
            {githubLink}
          </div>
          <ButtonLink href={`mailto:${site.email}`} className="mt-4 w-full">
            {site.email}
          </ButtonLink>
        </NavbarMobile>
      </Container>
    </header>
  );
}
