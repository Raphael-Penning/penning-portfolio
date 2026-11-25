import { pick, type Locale } from "@/lib/i18n";
import { skills } from "@/content/home";
import {
  ActivityIcon,
  CodeIcon,
  Container,
  GitBranchIcon,
  Section,
  SectionHeading,
  ServerIcon,
  Tag,
  Tile,
} from "@/components/ui/primitives";

const icons = [ServerIcon, ActivityIcon, CodeIcon, GitBranchIcon];

export function Skills({ lang }: { lang: Locale }) {
  const t = pick(skills, lang);
  return (
    <Section id="skills" aria-labelledby="skills-title">
      <Container>
        <SectionHeading id="skills-title" index="03" eyebrow={t.eyebrow} title={t.title} />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {t.groups.map((g, i) => {
            const Icon = icons[i];
            return (
              <Tile key={g.title}>
                <span className="inline-flex size-10 items-center justify-center rounded-xl bg-accent-soft text-accent">
                  <Icon />
                </span>
                <h3 className="mt-5 font-semibold">{g.title}</h3>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {g.items.map((item) => (
                    <li key={item}>
                      <Tag>{item}</Tag>
                    </li>
                  ))}
                </ul>
              </Tile>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
