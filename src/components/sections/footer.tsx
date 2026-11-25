import { pick, type Locale } from "@/lib/i18n";
import { site } from "@/lib/site";
import { legalPath, type Alternates } from "@/lib/routes";
import { footer } from "@/content/home";
import { Container, cx, focusRing } from "@/components/ui/primitives";
import { Brand, LanguageSwitch } from "./navbar";

const linkClass = cx(
  "inline-flex min-h-11 items-center rounded-sm text-sm text-muted transition-colors duration-200 hover:text-fg",
  focusRing,
);

export function Footer({ lang, alternates }: { lang: Locale; alternates?: Alternates }) {
  const t = pick(footer, lang);
  return (
    <footer className="border-t border-line bg-surface">
      <Container className="flex flex-col gap-6 py-8 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-col gap-1">
          <Brand lang={lang} />
          <p className="text-xs text-subtle">{t.copyright}</p>
        </div>
        <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
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
