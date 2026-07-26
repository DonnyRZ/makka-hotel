"use client";

import type { MouseEvent, ReactNode } from "react";
import { trackProfileDownload } from "./downloadTracking";

export const PROFILE_PDF_HREF = "/images/profile-summary/Mecca-Hotel-Summary.pdf";
export const PROFILE_PDF_DOWNLOAD_NAME = "Mecca-Hotel-Summary.pdf";

type ProfileDownloadLinkProps = {
  className?: string;
  children: ReactNode;
};

export function ProfileDownloadLink({ className, children }: ProfileDownloadLinkProps) {
  function handleClick(event: MouseEvent<HTMLAnchorElement>) {
    event.preventDefault();
    void trackProfileDownload();

    const anchor = document.createElement("a");
    anchor.href = PROFILE_PDF_HREF;
    anchor.download = PROFILE_PDF_DOWNLOAD_NAME;
    document.body.appendChild(anchor);
    anchor.click();
    anchor.remove();
  }

  return (
    <a
      href={PROFILE_PDF_HREF}
      download={PROFILE_PDF_DOWNLOAD_NAME}
      className={className}
      onClick={handleClick}
    >
      {children}
    </a>
  );
}
