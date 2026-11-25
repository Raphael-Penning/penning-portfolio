import { pick, type Locale } from "@/lib/i18n";
import { about } from "@/content/home";
import { Card, Container, Section, SectionHeading } from "@/components/ui/primitives";

export function About({ lang }: { lang: Locale }) {
  const t = pick(about, lang);
  return (
    <Section id="about" aria-labelledby="about-title">
      <Container>
        <SectionHeading id="about-title" eyebrow={t.eyebrow} title={t.title} lead={t.lead} />
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {t.cards.map((card) => (
            <Card key={card.tag} className="flex flex-col">
              <p className="font-mono text-xs tracking-wider text-accent uppercase">{card.tag}</p>
              <h3 className="mt-3 text-xl font-semibold tracking-tight">{card.title}</h3>
              <p className="mt-3 text-pretty text-muted">{card.body}</p>
              <ul className="mt-6 grid gap-2 sm:grid-cols-2">
                {card.points.map((p) => (
                  <li key={p} className="flex items-center gap-2 text-sm text-fg/90">
                    <span aria-hidden className="font-mono text-accent">
                      ›
                    </span>
                    {p}
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  );
}
