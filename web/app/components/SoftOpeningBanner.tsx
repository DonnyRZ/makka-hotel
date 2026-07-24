"use client";

import { useEffect, useState } from "react";

type SoftOpeningBannerProps = {
  message: string;
  dismissLabel: string;
};

const STORAGE_KEY = "mecca-soft-opening-dismissed";
/** Enough copies so each half fills ≥ viewport on ultrawide */
const COPIES_PER_GROUP = 8;

export function SoftOpeningBanner({ message, dismissLabel }: SoftOpeningBannerProps) {
  const [dismissed, setDismissed] = useState(false);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    try {
      if (sessionStorage.getItem(STORAGE_KEY) === "1") setDismissed(true);
    } catch {
      /* private mode */
    }
    setReady(true);
  }, []);

  if (ready && dismissed) return null;

  const dismiss = () => {
    setDismissed(true);
    try {
      sessionStorage.setItem(STORAGE_KEY, "1");
    } catch {
      /* private mode */
    }
  };

  const renderGroup = (key: string) => (
    <div key={key} className="soft-opening-banner__group">
      {Array.from({ length: COPIES_PER_GROUP }, (_, i) => (
        <span key={i} className="soft-opening-banner__segment">
          <span className="soft-opening-banner__ornament" aria-hidden="true">
            ✦
          </span>
          <span className="soft-opening-banner__text">{message}</span>
        </span>
      ))}
    </div>
  );

  return (
    <aside className="soft-opening-banner" role="status" aria-label={message}>
      <p className="sr-only">{message}</p>
      <div className="soft-opening-banner__viewport" aria-hidden="true">
        <div className="soft-opening-banner__marquee">
          <div className="soft-opening-banner__track">
            {renderGroup("a")}
            {renderGroup("b")}
          </div>
        </div>
        <div className="soft-opening-banner__static">
          <span className="soft-opening-banner__segment">
            <span className="soft-opening-banner__ornament" aria-hidden="true">
              ✦
            </span>
            <span className="soft-opening-banner__text">{message}</span>
          </span>
        </div>
      </div>
      <button
        type="button"
        className="soft-opening-banner__dismiss"
        onClick={dismiss}
        aria-label={dismissLabel}
      >
        <span aria-hidden="true" />
      </button>
    </aside>
  );
}
