import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { hasLocale } from "@/lib/i18n";
import { homeAlternates } from "@/lib/routes";
import { pageMetadata } from "@/lib/seo";
import { homeJsonLd } from "@/lib/structured-data";
import { meta } from "@/content/home";
import { JsonLd } from "@/components/json-ld";
import { Navbar } from "@/components/sections/navbar";
import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Projects } from "@/components/sections/projects";
import { Skills } from "@/components/sections/skills";
import { Contact } from "@/components/sections/contact";
import { Footer } from "@/components/sections/footer";

export async function generateMetadata({ params }: PageProps<"/[lang]">): Promise<Metadata> {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  return pageMetadata({
    lang,
    ...meta[lang],
    alternates: homeAlternates,
    absoluteTitle: true,
    profile: true,
  });
}

export default async function Home({ params }: PageProps<"/[lang]">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  return (
    <>
      <JsonLd nodes={homeJsonLd(lang)} />
      <Navbar lang={lang} />
      <main id="main">
        <Hero lang={lang} />
        <About lang={lang} />
        <Projects lang={lang} />
        <Skills lang={lang} />
        <Contact lang={lang} />
      </main>
      <Footer lang={lang} />
    </>
  );
}
