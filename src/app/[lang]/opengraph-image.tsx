import { notFound } from "next/navigation";
import { hasLocale, locales } from "@/lib/i18n";
import { ogContentType, ogImage, ogSize, ogText } from "@/lib/og";

export const alt = "Raphael Penning – Fachinformatiker Systemintegration & Entwickler";
export const size = ogSize;
export const contentType = ogContentType;

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export default async function Image({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  return ogImage(ogText[lang]);
}
