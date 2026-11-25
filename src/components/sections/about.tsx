import { pick, type Locale } from "@/lib/i18n";
import { about } from "@/content/home";
import { CodeIcon, Container, Label, Section, SectionHeading, ServerIcon, Tile } from "@/components/ui/primitives";

const icons = [ServerIcon, CodeIcon];

export function About({ lang }: { lang: Locale }) {
  const t = pick(about, lang);
  return (
    <Section id="about" aria-labelledby="about-title" className="border-y border-line bg-surface-2/50">
      <Container>
        <SectionHeading id="about-title" index="02" eyebrow={t.eyebrow} title={t.title} />
        <div className="grid gap-4 md:grid-cols-2">
          {t.cards.map((card, i) => {
            const Icon = icons[i];
            return (
              <Tile key={card.tag} className="flex flex-col">
                <div className="flex items-center justify-between">
                  <Label className="text-accent">{card.tag}</Label>
                  <Icon className="text-subtle" />
                </div>
                <h3 className="mt-4 text-xl font-semibold tracking-tight sm:text-2xl">{card.title}</h3>
                <p className="mt-3 text-pretty text-muted">{card.body}</p>
                <ul className="mt-6 grid gap-2 border-t border-line pt-5 sm:grid-cols-2">
                  {card.points.map((p) => (
                    <li key={p} className="flex items-center gap-2 text-sm">
                      <span aria-hidden className="size-1.5 rounded-full bg-accent" />
                      {p}
                    </li>
                  ))}
                </ul>
              </Tile>
            );
          })}

          <Tile className="md:col-span-2">
            <h3 className="font-mono text-xs font-medium tracking-[0.12em] text-subtle uppercase">{t.principlesLabel}</h3>
            <ol className="mt-5 grid gap-6 sm:grid-cols-3">
              {t.principles.map((p, i) => (
                <li key={p.title} className="flex gap-4">
                  <span aria-hidden className="font-mono text-sm text-accent">
                    0{i + 1}
                  </span>
                  <div>
                    <p className="font-semibold">{p.title}</p>
                    <p className="mt-1 text-sm text-muted">{p.body}</p>
                  </div>
                </li>
              ))}
            </ol>
          </Tile>
        </div>
      </Container>
    </Section>
  );
}
