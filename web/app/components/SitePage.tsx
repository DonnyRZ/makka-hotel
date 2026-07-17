import Link from "next/link";
import type { Dictionary, Locale, PageKey } from "../content";
import { galleryImages, pageKeys, pagePath } from "../content";
import { GalleryExplorer } from "./GalleryExplorer";
import { Header } from "./Header";

type SitePageProps = {
  locale: Locale;
  page: PageKey;
  dictionary: Dictionary;
};

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="section-label">
      <span aria-hidden="true">✦</span>
      <i aria-hidden="true" />
      <small>{children}</small>
    </div>
  );
}

function ArrowLink({ href, children }: { href: string; children: React.ReactNode }) {
  return <Link className="arrow-link" href={href}>{children}<span aria-hidden="true">→</span></Link>;
}

function Footer({ locale, page, dictionary }: { locale: Locale; page: PageKey; dictionary: Dictionary }) {
  const footerNav: PageKey[] = ["hotel", "rooms", "dining", "rooftop", "events", "gallery"];
  return (
    <footer className="site-footer">
      <div className="footer-pattern" aria-hidden="true" />
      <div className="container footer-top">
        <div className="footer-brand">
          <Link className="brand brand--footer" href={pagePath(locale, "home")}>
            <span className="brand-copy"><strong>MECCA</strong><small>Boutique Hotel &amp; Restaurant</small></span>
          </Link>
          <p>{dictionary.footer.statement}</p>
        </div>
        <div className="footer-column">
          <span>{dictionary.footer.discover}</span>
          {footerNav.map((item) => <Link key={item} href={pagePath(locale, item)}>{dictionary.nav[item]}</Link>)}
        </div>
        <div className="footer-column footer-visit">
          <span>{dictionary.footer.visit}</span>
          <p>{dictionary.footer.location}</p>
          {page === "location" ? (
            <p className="footer-current-link" aria-current="page">{dictionary.nav.location}</p>
          ) : (
            <Link href={pagePath(locale, "location")}>{dictionary.nav.location} <b aria-hidden="true">→</b></Link>
          )}
        </div>
      </div>
      <div className="container footer-bottom">
        <p>© {new Date().getFullYear()} Mecca Boutique Hotel &amp; Restaurant. {dictionary.footer.rights}</p>
        <p>Tashkent · Uzbekistan</p>
      </div>
    </footer>
  );
}

export function SitePage({ locale, page, dictionary }: SitePageProps) {
  const copy = dictionary.pages[page];
  const isHome = page === "home";
  const pageIndex = pageKeys.indexOf(page);
  const previousPage = pageIndex > 0 ? pageKeys[pageIndex - 1] : null;
  const nextPage = pageIndex < pageKeys.length - 1 ? pageKeys[pageIndex + 1] : null;
  const closingLinks: Record<PageKey, string> = {
    home: pagePath(locale, "rooms"),
    hotel: pagePath(locale, "rooms"),
    rooms: pagePath(locale, "location"),
    dining: pagePath(locale, "location"),
    rooftop: pagePath(locale, "location"),
    events: pagePath(locale, "location"),
    gallery: pagePath(locale, "rooms"),
    location: pagePath(locale, "hotel"),
  };

  return (
    <main lang={locale}>
      <Header locale={locale} page={page} dictionary={dictionary} />

      <section className={`hero ${isHome ? "hero--home" : "hero--inner"}`}>
        <img className="hero-image" src={copy.heroImage} alt={copy.heroAlt} fetchPriority="high" />
        <div className="hero-overlay" />
        <div className="hero-pattern" aria-hidden="true" />
        <div className="container hero-content">
          <SectionLabel>{copy.eyebrow}</SectionLabel>
          <h1>{copy.title}</h1>
          <p>{copy.intro}</p>
          <nav
            className={`hero-pager ${!previousPage ? "hero-pager--next-only" : !nextPage ? "hero-pager--previous-only" : ""}`}
            aria-label={dictionary.pageNavigation}
          >
            {previousPage && (
              <Link
                className="button hero-page-button hero-page-button--previous"
                href={pagePath(locale, previousPage)}
                aria-label={`${dictionary.previousPage}: ${dictionary.nav[previousPage]}`}
              >
                <span className="hero-page-arrow" aria-hidden="true" />
                <span>{dictionary.nav[previousPage]}</span>
              </Link>
            )}
            {nextPage && (
              <Link
                className="button hero-page-button hero-page-button--next"
                href={pagePath(locale, nextPage)}
                aria-label={`${dictionary.nextPage}: ${dictionary.nav[nextPage]}`}
              >
                <span>{dictionary.nav[nextPage]}</span>
                <span className="hero-page-arrow" aria-hidden="true" />
              </Link>
            )}
          </nav>
        </div>
        <a className="scroll-cue" href="#introduction" aria-label={dictionary.scrollToExplore}>
          <small>{dictionary.scrollToExplore}</small>
          <span aria-hidden="true"><i /><i /></span>
        </a>
      </section>

      <section id="introduction" className="intro-section section-light">
        <div className="container intro-grid">
          <SectionLabel>{copy.eyebrow}</SectionLabel>
          <h2>{copy.leadTitle}</h2>
          <p>{copy.leadBody}</p>
        </div>
      </section>

      {copy.stats.length > 0 && (
        <section className="stats-section">
          <div className={`container stats-grid stats-grid--${copy.stats.length}`}>
            {copy.stats.map((stat) => (
              <div className="stat" key={`${stat.value}-${stat.label}`}>
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </div>
            ))}
          </div>
        </section>
      )}

      {copy.sections.map((section, index) => (
        <section className={`story-section ${index % 2 ? "story-section--deep" : ""}`} key={section.title}>
          <div className={`container story-grid ${section.reverse ? "story-grid--reverse" : ""}`}>
            <div className={`story-visual ${index % 3 === 0 ? "story-visual--arch" : ""}`}>
              <img src={section.image} alt={section.alt} loading="lazy" />
              <span className="image-index" aria-hidden="true">0{index + 1}</span>
            </div>
            <div className="story-copy">
              <SectionLabel>{section.eyebrow}</SectionLabel>
              <h2>{section.title}</h2>
              <p>{section.body}</p>
              {section.href && section.linkLabel && <ArrowLink href={pagePath(locale, section.href)}>{section.linkLabel}</ArrowLink>}
            </div>
          </div>
        </section>
      ))}

      {page === "gallery" && (
        <section id="gallery" className="gallery-section">
          <div className="container">
            <GalleryExplorer locale={locale} dictionary={dictionary} images={galleryImages} />
          </div>
        </section>
      )}

      {page === "location" && (
        <section id="location-details" className="location-section">
          <div className="container location-grid">
            <div className="location-card">
              <SectionLabel>{dictionary.nav.location}</SectionLabel>
              <h2>{dictionary.location.locationTitle}</h2>
              <p>{dictionary.location.locationText}</p>
              <ul>
                <li><span>✦</span>{dictionary.location.airport}</li>
                <li><span>✦</span>{dictionary.location.station}</li>
              </ul>
              <a className="button button--gold" href="https://www.google.com/maps/search/?api=1&query=Islamic+Civilization+Centre+Tashkent" target="_blank" rel="noreferrer">{dictionary.location.directions} ↗</a>
            </div>
            <div className="location-map">
              <iframe
                title={dictionary.location.directions}
                src="https://www.google.com/maps?q=Islamic+Civilization+Centre+Tashkent&output=embed"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </section>
      )}

      {copy.features.length > 0 && (
        <section className="features-section section-light">
          <div className="container features-heading">
            <div><SectionLabel>{copy.eyebrow}</SectionLabel><h2>{copy.featuresTitle}</h2></div>
            <p>{copy.featuresIntro}</p>
          </div>
          <div className="container feature-grid">
            {copy.features.map((feature, index) => (
              <article className="feature-card" key={feature.title}>
                <span>0{index + 1}</span>
                <h3>{feature.title}</h3>
                <p>{feature.text}</p>
              </article>
            ))}
          </div>
        </section>
      )}

      <section className="closing-cta">
        <img src="/images/exterior/facade-wide.jpg" alt="" loading="lazy" />
        <div className="closing-overlay" />
        <div className="container closing-content">
          <SectionLabel>{copy.ctaEyebrow}</SectionLabel>
          <h2>{copy.ctaTitle}</h2>
          <p>{copy.ctaText}</p>
          <Link className="button button--gold" href={closingLinks[page]}>{copy.ctaButton}</Link>
        </div>
      </section>

      <Footer locale={locale} page={page} dictionary={dictionary} />
    </main>
  );
}
