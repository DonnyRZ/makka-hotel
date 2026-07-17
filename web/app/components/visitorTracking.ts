export type CityMetric = { city: string; region: string | null; count: number };
export type VisitorMetrics = {
  activeVisitors: number;
  cities: number;
  count: number;
  topCities: CityMetric[];
};

let registration: Promise<VisitorMetrics | null> | null = null;

export function isVisitorMetrics(value: unknown): value is VisitorMetrics {
  if (!value || typeof value !== "object") return false;
  const metrics = value as Partial<VisitorMetrics>;
  return typeof metrics.count === "number"
    && typeof metrics.activeVisitors === "number"
    && typeof metrics.cities === "number"
    && Array.isArray(metrics.topCities);
}

export function registerVisitor() {
  registration ??= fetch("/api/visitors", { method: "POST", cache: "no-store" })
    .then((result) => result.ok ? result.json() : null)
    .then((result: unknown) => isVisitorMetrics(result) ? result : null)
    .catch(() => null);
  return registration;
}
