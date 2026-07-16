import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { dictionaries, isLocale, locales } from "../content";
import { SitePage } from "../components/SitePage";

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  if (!isLocale(lang)) return {};
  const copy = dictionaries[lang].pages.home;
  return { title: copy.metaTitle, description: copy.metaDescription, alternates: { languages: { en: "/en", ru: "/ru", uz: "/uz" } } };
}

export default async function LocalizedHome({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  return <SitePage locale={lang} page="home" dictionary={dictionaries[lang]} />;
}
