import { pick, type Locale } from "@/lib/i18n";
import { hero } from "@/content/home";
import { ButtonLink, Container, StatusDot, WindowFrame } from "@/components/ui/primitives";

/** 30 days of "uptime", one bar each; a single yellow day keeps it honest. */
const bars = Array.from({ length: 30 }, (_, i) => (i === 21 ? "bg-warn" : "bg-ok"));

export function Hero({ lang }: { lang: Locale }) {
  const t = pick(hero, lang);
  return (
    <section aria-labelledby="hero-title" className="relative overflow-hidden">
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 bg-grid mask-radial opacity-70" />
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 left-1/2 -z-10 h-[480px] w-[900px] -translate-x-1/2 rounded-full bg-accent/10 blur-3xl"
      />
      <Container className="grid items-center gap-14 py-20 sm:py-28 lg:grid-cols-[1.15fr_1fr]">
        <div>
          <p className="inline-flex items-center gap-2 rounded-full border border-line bg-surface/70 px-3 py-1 font-mono text-xs text-muted">
            <StatusDot pulse />
            {t.status}
          </p>
          <h1 id="hero-title" className="mt-6 text-4xl font-semibold tracking-tight text-balance sm:text-6xl">
            <span className="block text-lg font-normal text-muted sm:text-xl">{t.greeting}</span>
            <span className="text-gradient">Raphael Penning</span>
          </h1>
          <p className="mt-5 text-lg text-pretty text-fg/90 sm:text-xl">{t.role}</p>
          <p className="mt-4 max-w-xl text-base text-pretty text-muted">{t.lead}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <ButtonLink href="#projects">{t.ctaProjects}</ButtonLink>
            <ButtonLink href="#contact" variant="secondary">
              {t.ctaContact}
            </ButtonLink>
          </div>
        </div>

        <WindowFrame title="raphael@penning: ~" className="font-mono text-[13px]">
          <div className="space-y-4 p-5" role="group" aria-label={t.terminalLabel}>
            <p>
              <span className="text-accent">$</span> whoami --verbose
            </p>
            <dl className="grid grid-cols-[auto_1fr] gap-x-4 gap-y-1.5">
              {t.terminal.map((row) => (
                <div key={row.key} className="contents">
                  <dt className="text-subtle">{row.key}</dt>
                  <dd className="text-fg">{row.value}</dd>
                </div>
              ))}
            </dl>
            <p>
              <span className="text-accent">$</span> systemctl status
            </p>
            <ul className="space-y-1">
              {t.services.map((s) => (
                <li key={s.name} className="flex items-center gap-2">
                  <StatusDot />
                  <span className="text-fg">{s.name}</span>
                  <span className="ml-auto text-ok">{s.state}</span>
                </li>
              ))}
            </ul>
            <div aria-hidden>
              <div className="mb-2 flex justify-between text-[11px] text-subtle">
                <span>{t.uptime}</span>
                <span>99.97%</span>
              </div>
              <div className="flex h-6 gap-[3px]">
                {bars.map((c, i) => (
                  <span key={i} className={`flex-1 rounded-[2px] ${c} opacity-90`} />
                ))}
              </div>
            </div>
            <p aria-hidden>
              <span className="text-accent">$</span>{" "}
              <span className="inline-block h-4 w-2 translate-y-0.5 animate-blink bg-fg" />
            </p>
          </div>
        </WindowFrame>
      </Container>
    </section>
  );
}
