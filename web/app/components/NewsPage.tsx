import Link from "next/link";
import { dictionaries, type Locale } from "../content";
import { newsCopy, newsPath, titfStory } from "../news";
import { Header } from "./Header";
import { Footer } from "./SitePage";

export function NewsPage({ locale, article = false }: { locale: Locale; article?: boolean }) {
  const copy = newsCopy[locale];
  const story = copy.article;
  const href = newsPath(locale, titfStory.slug);
  return (
    <main lang={locale} className="news-page">
      <Header locale={locale} page="news" dictionary={dictionaries[locale]} articleSlug={article ? titfStory.slug : undefined} />
      {article ? (
        <article className="news-article">
          <header className="container article-heading">
            <Link className="news-back" href={newsPath(locale)}>← {copy.back}</Link>
            <p className="news-eyebrow">{copy.category} <span>·</span> {copy.location}</p>
            <h1>{story.title}</h1>
            <p className="article-excerpt">{story.excerpt}</p>
            <a className="arrow-link" href="#film">{copy.watch}<span aria-hidden="true">↓</span></a>
          </header>
          <figure className="container article-photo">
            <img src={titfStory.image} alt={story.alt} width={1478} height={1064} fetchPriority="high" />
            <figcaption>{story.caption}</figcaption>
          </figure>
          <div className="article-body">
            <p className="article-lead">{story.lead}</p>
            {story.sections.map((section) => (
              <section key={section.title}>
                <h2>{section.title}</h2>
                {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              </section>
            ))}
            <section id="film" className="article-film">
              <p className="news-eyebrow">TITF <span>·</span> {copy.location}</p>
              <h2>{copy.videoTitle}</h2>
              <p>{copy.videoIntro}</p>
              <figure>
                <video controls playsInline preload="none" poster={titfStory.image} aria-label={copy.videoTitle}>
                  <source src={titfStory.video} type="video/mp4" />
                  <a href={titfStory.video}>{copy.videoFallback}</a>
                </video>
                <figcaption>{story.filmCaption}</figcaption>
              </figure>
            </section>
            <Link className="news-back" href={newsPath(locale)}>← {copy.back}</Link>
          </div>
        </article>
      ) : (
        <>
          <header className="container news-masthead">
            <p className="news-eyebrow">{copy.eyebrow}</p>
            <h1>{copy.title}</h1>
            <p>{copy.intro}</p>
          </header>
          <section className="container news-feature" aria-labelledby="featured-title">
            <Link className="news-feature-image" href={href} aria-label={story.title}>
              <img src={titfStory.image} alt={story.alt} width={1478} height={1064} fetchPriority="high" />
              <span className="news-format">{copy.format}</span>
            </Link>
            <div className="news-feature-copy">
              <p className="news-eyebrow">{copy.featured} <span>·</span> {copy.category}</p>
              <p className="news-location">{copy.location}</p>
              <h2 id="featured-title"><Link href={href}>{story.title}</Link></h2>
              <p>{story.excerpt}</p>
              <Link className="arrow-link" href={href}>{copy.read}<span aria-hidden="true">→</span></Link>
            </div>
          </section>
          <section className="container news-video-entry" aria-labelledby="video-title">
            <span className="news-play" aria-hidden="true">▷</span>
            <div><p className="news-eyebrow">TITF</p><h2 id="video-title">{copy.videoTitle}</h2><p>{copy.videoIntro}</p></div>
            <Link className="arrow-link" href={`${href}#film`}>{copy.watch}<span aria-hidden="true">→</span></Link>
          </section>
        </>
      )}
      <Footer locale={locale} page="news" dictionary={dictionaries[locale]} />
    </main>
  );
}
