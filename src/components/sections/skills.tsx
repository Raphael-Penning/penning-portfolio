import { pick, type Locale } from "@/lib/i18n";
import { skills } from "@/content/home";
import { Card, Container, Section, SectionHeading, Tag } from "@/components/ui/primitives";

export function Skills({ lang }: { lang: Locale }) {
  const t = pick(skills, lang);
  return (
    <Section id="skills" aria-labelledby="skills-title">
      <Container>
        <SectionHeading id="skills-title" eyebrow={t.eyebrow} title={t.title} lead={t.lead} />
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {t.groups.map((g) => (
            <Card key={g.title}>
              <h3 className="font-mono text-sm text-accent">{g.title}</h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {g.items.map((item) => (
                  <li key={item}>
                    <Tag>{item}</Tag>
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
