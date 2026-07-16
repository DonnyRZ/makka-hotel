"use client";

import { useEffect, useMemo, useState } from "react";
import type { Dictionary, GalleryCategory, GalleryImage, Locale } from "../content";

type GalleryExplorerProps = {
  locale: Locale;
  dictionary: Dictionary;
  images: GalleryImage[];
};

const categories: GalleryCategory[] = ["all", "exterior", "rooms", "interiors", "dining", "rooftop", "views"];

export function GalleryExplorer({ locale, dictionary, images }: GalleryExplorerProps) {
  const [filter, setFilter] = useState<GalleryCategory>("all");
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const filtered = useMemo(
    () => (filter === "all" ? images : images.filter((image) => image.category === filter)),
    [filter, images],
  );

  useEffect(() => {
    if (activeIndex === null) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActiveIndex(null);
      if (event.key === "ArrowRight") setActiveIndex((current) => current === null ? null : (current + 1) % filtered.length);
      if (event.key === "ArrowLeft") setActiveIndex((current) => current === null ? null : (current - 1 + filtered.length) % filtered.length);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [activeIndex, filtered.length]);

  const activeImage = activeIndex === null ? null : filtered[activeIndex];

  return (
    <>
      <div className="gallery-filters" role="group" aria-label="Gallery filters">
        {categories.map((category) => (
          <button
            key={category}
            className={filter === category ? "active" : ""}
            type="button"
            aria-pressed={filter === category}
            onClick={() => {
              setFilter(category);
              setActiveIndex(null);
            }}
          >
            {dictionary.gallery.filters[category]}
          </button>
        ))}
      </div>

      <div className="gallery-grid">
        {filtered.map((image, index) => (
          <button
            className="gallery-item"
            key={`${image.src}-${index}`}
            type="button"
            onClick={() => setActiveIndex(index)}
            aria-label={`${dictionary.gallery.openImage}: ${image.alt[locale]}`}
          >
            <img src={image.src} alt={image.alt[locale]} loading="lazy" />
          </button>
        ))}
      </div>

      {activeImage && (
        <div className="lightbox" role="dialog" aria-modal="true" aria-label={activeImage.alt[locale]} onClick={() => setActiveIndex(null)}>
          <button className="lightbox-close" type="button" aria-label={dictionary.gallery.closeImage} onClick={() => setActiveIndex(null)}>×</button>
          <button
            className="lightbox-nav lightbox-nav--previous"
            type="button"
            aria-label={dictionary.gallery.previousImage}
            onClick={(event) => {
              event.stopPropagation();
              setActiveIndex((activeIndex - 1 + filtered.length) % filtered.length);
            }}
          >
            ←
          </button>
          <figure onClick={(event) => event.stopPropagation()}>
            <img src={activeImage.src} alt={activeImage.alt[locale]} />
            <figcaption>
              <span>{activeImage.alt[locale]}</span>
              <span>{activeIndex + 1} / {filtered.length}</span>
            </figcaption>
          </figure>
          <button
            className="lightbox-nav lightbox-nav--next"
            type="button"
            aria-label={dictionary.gallery.nextImage}
            onClick={(event) => {
              event.stopPropagation();
              setActiveIndex((activeIndex + 1) % filtered.length);
            }}
          >
            →
          </button>
        </div>
      )}
    </>
  );
}
