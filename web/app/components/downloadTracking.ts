export type DownloadMetrics = {
  totalDownloads: number;
  uniqueDownloaders: number;
};

export function isDownloadMetrics(value: unknown): value is DownloadMetrics {
  if (!value || typeof value !== "object") return false;
  const metrics = value as Partial<DownloadMetrics>;
  return typeof metrics.totalDownloads === "number"
    && typeof metrics.uniqueDownloaders === "number";
}

export function fetchDownloadMetrics() {
  return fetch("/api/downloads/profile", { method: "GET", cache: "no-store" })
    .then((result) => (result.ok ? result.json() : null))
    .then((result: unknown) => (isDownloadMetrics(result) ? result : null))
    .catch(() => null);
}

export function trackProfileDownload() {
  return fetch("/api/downloads/profile", { method: "POST", cache: "no-store" })
    .then((result) => (result.ok ? result.json() : null))
    .then((result: unknown) => (isDownloadMetrics(result) ? result : null))
    .catch(() => null);
}
