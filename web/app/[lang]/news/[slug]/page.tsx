import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { isLocale, locales } from "../../../content";
import { newsCopy, newsPath, titfStory } from "../../../news";
import { NewsPage } from "../../../components/NewsPage";

type Params = { params: Promise<{ lang: string; slug: string }> };

export function generateStaticParams() {
  return locales.map((lang) => ({ lang, slug: titfStory.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { lang, slug } = await params;
  if (!isLocale(lang) || slug !== titfStory.slug) return {};
  const story = newsCopy[lang].article;
  return {
    title: story.title, description: story.excerpt,
    alternates: { canonical: newsPath(lang, slug), languages: Object.fromEntries(locales.map((locale) => [locale, newsPath(locale, slug)])) },
    openGraph: { type: "article", title: story.title, description: story.excerpt, images: [{ url: titfStory.image, width: 1478, height: 1064, alt: story.alt }] },
    twitter: { card: "summary_large_image", title: story.title, description: story.excerpt, images: [titfStory.image] },
  };
}

export default async function NewsArticle({ params }: Params) {
  const { lang, slug } = await params;
  if (!isLocale(lang) || slug !== titfStory.slug) notFound();
  return <NewsPage locale={lang} article />;
}
