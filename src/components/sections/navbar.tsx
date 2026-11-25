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
      className={cx("flex items-center gap-0.5 rounded-full border border-line p-0.5", className)}
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
              "rounded-full px-2.5 py-1 font-mono text-[11px] tracking-wider uppercase transition-colors",
              focusRing,
              current ? "bg-surface-2 text-fg" : "text-subtle hover:text-fg",
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

function Brand({ lang }: { lang: Locale }) {
  return (
    <a
      href={`/${lang}`}
      aria-label={pick(nav, lang).homeLabel}
      className="flex items-center gap-2.5 rounded-md font-semibold tracking-tight text-fg focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
    >
      <LogoMark />
      <span>
        raphael<span className="text-accent">.</span>penning
      </span>
    </a>
  );
}

export { Brand };

export function Navbar({ lang, alternates }: { lang: Locale; alternates?: Alternates }) {
  const t = pick(nav, lang);
  const githubLink = (
    <a
      href={site.github}
      target="_blank"
      rel="noopener noreferrer me"
      aria-label={t.github}
      className={cx("rounded-md p-2 text-muted transition-colors hover:text-fg", focusRing)}
    >
      <GitHubIcon />
    </a>
  );

  return (
    <header className="sticky top-0 z-50 border-b border-line/70 bg-bg/70 backdrop-blur-xl supports-[backdrop-filter]:bg-bg/55">
      <Container className="flex h-16 items-center gap-4">
        <Brand lang={lang} />

        <nav aria-label={t.mainNavLabel} className="ml-auto hidden md:block">
          <ul className="flex items-center gap-1">
            {t.links.map((link) => (
              <li key={link.href}>
                <a
                  href={anchor(link.href, lang)}
                  className={cx("rounded-md px-3 py-2 text-sm text-muted transition-colors hover:text-fg", focusRing)}
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
        </div>

        <NavbarMobile openLabel={t.openMenu} closeLabel={t.closeMenu}>
          <nav aria-label={t.mainNavLabel}>
            <ul className="flex flex-col">
              {t.links.map((link) => (
                <li key={link.href}>
                  <a
                    href={anchor(link.href, lang)}
                    className={cx("block rounded-lg px-3 py-3 text-base text-muted transition-colors hover:bg-surface-2 hover:text-fg", focusRing)}
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
            {t.contact}
          </ButtonLink>
        </NavbarMobile>
      </Container>
    </header>
  );
}
