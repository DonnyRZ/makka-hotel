"use client";

import { useEffect, useState } from "react";
import { isVisitorMetrics, registerVisitor, type VisitorMetrics } from "./visitorTracking";


type VisitorCounterProps = {
  copy: {
    label: string;
    details: string;
    total: string;
    active: string;
    cities: string;
    topCities: string;
    noCities: string;
    close: string;
  };
  locale: string;
};

const emptyMetrics: VisitorMetrics = { activeVisitors: 0, cities: 0, count: 0, topCities: [] };

export function VisitorCounter({ copy, locale }: VisitorCounterProps) {
  const [metrics, setMetrics] = useState<VisitorMetrics | null>(null);
  const [open, setOpen] = useState(false);
  const number = new Intl.NumberFormat(locale);
  const data = metrics ?? emptyMetrics;
  const highestCityCount = Math.max(...data.topCities.map((city) => city.count), 1);

  useEffect(() => {
    let active = true;

    registerVisitor()
      .then((result: unknown) => {
        if (active && isVisitorMetrics(result)) setMetrics(result);
      })

    return () => { active = false; };
  }, []);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <section className="visitor-section" aria-label={copy.label}>
      <div className="container">
        <button className="visitor-card" type="button" onClick={() => setOpen(true)} aria-expanded={open} aria-haspopup="dialog">
          <span className="visitor-card-copy">
            <small>{copy.label}</small>
            <em>{copy.details} <b aria-hidden="true">↗</b></em>
          </span>
          <span className="visitor-card-metric">
            <strong>{metrics === null ? "—" : number.format(data.count)}</strong>
            <small>{copy.total}</small>
          </span>
        </button>
      </div>

      {open && (
        <div className="visitor-dialog-backdrop" onMouseDown={() => setOpen(false)}>
          <section className="visitor-dialog" role="dialog" aria-modal="true" aria-label={copy.label} onMouseDown={(event) => event.stopPropagation()}>
            <button className="visitor-dialog-close" type="button" onClick={() => setOpen(false)} aria-label={copy.close}>
              <span aria-hidden="true" />
            </button>
            <small className="visitor-kicker">{copy.label}</small>
            <h2>{copy.topCities}</h2>
            <dl className="visitor-metrics">
              <div><dt>{copy.total}</dt><dd>{number.format(data.count)}</dd></div>
              <div><dt>{copy.active}</dt><dd>{number.format(data.activeVisitors)}</dd></div>
              <div><dt>{copy.cities}</dt><dd>{number.format(data.cities)}</dd></div>
            </dl>
            {data.topCities.length > 0 ? (
              <ol className="city-list">
                {data.topCities.map((city, index) => (
                  <li key={`${city.city}-${city.region ?? ""}`}>
                    <span className="city-rank">{String(index + 1).padStart(2, "0")}</span>
                    <span className="city-name"><b>{city.city}</b>{city.region && <small>{city.region}</small>}</span>
                    <span className="city-bar"><i style={{ width: `${Math.max(6, (city.count / highestCityCount) * 100)}%` }} /></span>
                    <strong>{number.format(city.count)}</strong>
                  </li>
                ))}
              </ol>
            ) : <p className="visitor-empty">{copy.noCities}</p>}
          </section>
        </div>
      )}
    </section>
  );
}
