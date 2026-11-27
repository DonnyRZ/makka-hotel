import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { isLocale, locales } from "../../content";
import { newsCopy, newsPath, titfStory } from "../../news";
import { NewsPage } from "../../components/NewsPage";

export function generateStaticParams() { return locales.map((lang) => ({ lang })); }

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  if (!isLocale(lang)) return {};
  const copy = newsCopy[lang];
  return {
    title: copy.nav, description: copy.intro,
    alternates: { canonical: newsPath(lang), languages: Object.fromEntries(locales.map((locale) => [locale, newsPath(locale)])) },
    openGraph: { title: copy.title, description: copy.intro, images: [{ url: titfStory.image, alt: copy.article.alt }] },
    twitter: { card: "summary_large_image", title: copy.title, description: copy.intro, images: [titfStory.image] },
  };
}

export default async function NewsIndex({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  return <NewsPage locale={lang} />;
}
