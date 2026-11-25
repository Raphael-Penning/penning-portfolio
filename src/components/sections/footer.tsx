import { pick, type Locale } from "@/lib/i18n";
import { site } from "@/lib/site";
import { legalPath, type Alternates } from "@/lib/routes";
import { footer } from "@/content/home";
import { Container, cx, focusRing } from "@/components/ui/primitives";
import { Brand, LanguageSwitch } from "./navbar";

const linkClass = cx("rounded-sm text-sm text-muted transition-colors hover:text-fg", focusRing);

export function Footer({ lang, alternates }: { lang: Locale; alternates?: Alternates }) {
  const t = pick(footer, lang);
  return (
    <footer className="relative border-t border-line">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent"
      />
      <Container className="flex flex-col gap-6 py-10 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-col gap-3">
          <Brand lang={lang} />
          <p className="text-xs text-subtle">{t.copyright}</p>
        </div>
        <div className="flex flex-wrap items-center gap-x-5 gap-y-3">
          <a href={legalPath("imprint", lang)} className={linkClass}>
            {t.imprint}
          </a>
          <a href={legalPath("privacy", lang)} className={linkClass}>
            {t.privacy}
          </a>
          <a href={site.repo} target="_blank" rel="noopener noreferrer" className={linkClass}>
            {t.source}
          </a>
          <LanguageSwitch lang={lang} hrefs={alternates} />
        </div>
      </Container>
    </footer>
  );
}
