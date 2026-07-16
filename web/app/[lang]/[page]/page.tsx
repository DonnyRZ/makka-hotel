import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { dictionaries, isLocale, isPageKey, locales, pageKeys, pagePath } from "../../content";
import { SitePage } from "../../components/SitePage";

export function generateStaticParams() {
  return locales.flatMap((lang) => pageKeys.filter((page) => page !== "home").map((page) => ({ lang, page })));
}

export async function generateMetadata({ params }: { params: Promise<{ lang: string; page: string }> }): Promise<Metadata> {
  const { lang, page } = await params;
  if (!isLocale(lang) || !isPageKey(page) || page === "home") return {};
  const copy = dictionaries[lang].pages[page];
  return {
    title: copy.metaTitle,
    description: copy.metaDescription,
    alternates: { languages: { en: pagePath("en", page), ru: pagePath("ru", page), uz: pagePath("uz", page) } },
  };
}

export default async function LocalizedPage({ params }: { params: Promise<{ lang: string; page: string }> }) {
  const { lang, page } = await params;
  if (!isLocale(lang) || !isPageKey(page) || page === "home") notFound();
  return <SitePage locale={lang} page={page} dictionary={dictionaries[lang]} />;
}
