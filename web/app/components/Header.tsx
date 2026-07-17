"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import type { Dictionary, Locale, PageKey } from "../content";
import { locales, pagePath } from "../content";

type HeaderProps = {
  locale: Locale;
  page: PageKey;
  dictionary: Dictionary;
};

const primaryNav: PageKey[] = ["home", "hotel", "rooms", "dining", "rooftop", "events", "location", "gallery"];

export function Header({ locale, page, dictionary }: HeaderProps) {
  const [open, setOpen] = useState(false);
  const [languageOpen, setLanguageOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const languageDropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        setLanguageOpen(false);
      }
    };
    document.documentElement.style.overflow = open ? "hidden" : "";
    document.body.style.overflow = open ? "hidden" : "";
    if (open) window.addEventListener("keydown", onKeyDown);
    return () => {
      document.documentElement.style.overflow = "";
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  useEffect(() => {
    const onPointerDown = (event: PointerEvent) => {
      if (!languageDropdownRef.current?.contains(event.target as Node)) setLanguageOpen(false);
    };
    document.addEventListener("pointerdown", onPointerDown);
    return () => document.removeEventListener("pointerdown", onPointerDown);
  }, []);

  return (
    <>
      <header className={`site-header ${scrolled || open ? "site-header--solid" : ""} ${open ? "site-header--menu-open" : ""}`}>
        <div className="header-inner">
          <Link className="brand" href={pagePath(locale, "home")} aria-label="Mecca Boutique Hotel home">
            <span className="brand-copy">
              <strong>MECCA</strong>
              <small>Boutique Hotel &amp; Restaurant</small>
            </span>
          </Link>

          <nav className="desktop-nav" aria-label="Primary navigation">
            {primaryNav.map((item) => (
              <Link key={item} className={page === item ? "active" : ""} href={pagePath(locale, item)}>
                {dictionary.nav[item]}
              </Link>
            ))}
          </nav>

          <div className="header-actions">
            <div ref={languageDropdownRef} className={`language-dropdown ${languageOpen ? "language-dropdown--open" : ""}`}>
              <button
                className="language-dropdown-trigger"
                type="button"
                aria-expanded={languageOpen}
                aria-controls="language-menu"
                aria-label={dictionary.switchLanguage}
                onClick={() => setLanguageOpen((current) => !current)}
              >
                {locale.toUpperCase()}<span aria-hidden="true">⌄</span>
              </button>
              <div id="language-menu" className="language-dropdown-menu">
                {locales.map((item) => (
                  <Link key={item} className={locale === item ? "active" : ""} href={pagePath(item, page)} hrefLang={item} onClick={() => setLanguageOpen(false)}>
                    {item === "en" ? "English" : item === "ru" ? "Русский" : "O‘zbekcha"}
                  </Link>
                ))}
              </div>
            </div>
            <button
              className="menu-toggle"
              type="button"
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? dictionary.close : dictionary.menu}
              onClick={() => setOpen((current) => !current)}
            >
              <span /><span />
            </button>
          </div>
        </div>
      </header>

      <div id="mobile-menu" className={`mobile-menu ${open ? "mobile-menu--open" : ""}`} aria-hidden={!open} inert={!open ? true : undefined}>
        <nav aria-label="Mobile navigation">
          {primaryNav.map((item, index) => (
            <Link key={item} className={page === item ? "active" : ""} href={pagePath(locale, item)} onClick={() => setOpen(false)}>
              <span>{String(index + 1).padStart(2, "0")}</span>{dictionary.nav[item]}
            </Link>
          ))}
        </nav>
        <div className="mobile-menu-footer">
          <div className="language-switcher language-switcher--mobile">
            {locales.map((item) => (
              <Link key={item} className={locale === item ? "active" : ""} href={pagePath(item, page)} hrefLang={item} onClick={() => setOpen(false)}>
                {item === "en" ? "English" : item === "ru" ? "Русский" : "O‘zbekcha"}
              </Link>
            ))}
          </div>
          <p>Islamic Civilization Centre · Tashkent</p>
        </div>
      </div>
    </>
  );
}
