"use client";

import { useEffect, useState } from "react";

type SoftOpeningBannerProps = {
  message: string;
  dismissLabel: string;
};

const STORAGE_KEY = "mecca-soft-opening-dismissed";

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

  const segment = (
    <span className="soft-opening-banner__segment">
      <span className="soft-opening-banner__ornament" aria-hidden="true">
        ✦
      </span>
      <span className="soft-opening-banner__text">{message}</span>
    </span>
  );

  return (
    <aside className="soft-opening-banner" role="status" aria-label={message}>
      <p className="sr-only">{message}</p>
      <div className="soft-opening-banner__viewport" aria-hidden="true">
        <div className="soft-opening-banner__track">
          <div className="soft-opening-banner__group">
            {segment}
            {segment}
            {segment}
            {segment}
          </div>
          <div className="soft-opening-banner__group">
            {segment}
            {segment}
            {segment}
            {segment}
          </div>
        </div>
        <div className="soft-opening-banner__static">{segment}</div>
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
