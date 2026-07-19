export const dynamic = "force-dynamic";
import { logger } from "../../lib/logger";

type CityMetric = { city: string; region: string | null; count: number };
type Overview = { total: number; activeVisitors: number; cities: number; topCities: CityMetric[] };
type VisitorRecord = { city: string | null; geo_checked_at: string | null; region: string | null };
type Geolocation = { city: string; countryCode: string | null; region: string | null };

const defaultMajorCities = [
  "Jakarta", "West Jakarta", "East Jakarta", "South Jakarta", "North Jakarta", "Central Jakarta", "Bandung", "Surabaya", "Medan", "Semarang", "Makassar", "Palembang", "Bekasi", "Depok", "Tangerang", "South Tangerang", "Bogor", "Yogyakarta", "Malang", "Denpasar", "Batam", "Pekanbaru", "Samarinda", "Balikpapan", "Banjarmasin", "Padang", "Bandar Lampung", "Pontianak", "Manado", "Tashkent", "Samarkand", "Bukhara", "Namangan",
];

function getVisitorApi() {
  return process.env.VISITOR_API_URL || null;
}

function getVisitorIp(request: Request) {
  const address = request.headers.get("x-real-ip")
    ?? (process.env.VISITOR_TRUST_CLOUDFLARE_HEADERS === "true"
      ? request.headers.get("cf-connecting-ip")
      : null);
  return address && address.length <= 128 ? address.trim() : null;
}

function publicRequestOrigin(request: Request) {
  const url = new URL(request.url);
  const forwardedProtocol = request.headers.get("x-forwarded-proto")?.split(",")[0]?.trim();
  const forwardedHost = request.headers.get("x-forwarded-host")?.split(",")[0]?.trim();
  const protocol = forwardedProtocol || url.protocol.replace(/:$/, "");
  const host = forwardedHost || request.headers.get("host") || url.host;
  return `${protocol}://${host}`;
}

function response(overview: Overview | null, status = 200) {
  return Response.json(
    overview && {
      activeVisitors: overview.activeVisitors,
      cities: overview.cities,
      count: overview.total,
      topCities: overview.topCities,
    },
    { status, headers: { "Cache-Control": "no-store" } },
  );
}

function majorCities() {
  const configured = process.env.VISITOR_MAJOR_CITIES?.split(",").map((city) => city.trim()).filter(Boolean);
  return new Set((configured?.length ? configured : defaultMajorCities).map((city) => city.toLocaleLowerCase()));
}

function canonicalCity(city: string) {
  return city.trim().replace(/\s+city$/i, "");
}

function isMajorCity(city: string) {
  return majorCities().has(canonicalCity(city).toLocaleLowerCase());
}

async function visitorHash(ip: string, secret: string) {
  const key = await crypto.subtle.importKey("raw", new TextEncoder().encode(secret), { hash: "SHA-256", name: "HMAC" }, false, ["sign"]);
  const signature = await crypto.subtle.sign("HMAC", key, new TextEncoder().encode(ip));
  return Array.from(new Uint8Array(signature), (value) => value.toString(16).padStart(2, "0")).join("");
}

async function requestJson(api: string, path: string, init: RequestInit) {
  const result = await fetch(new URL(path, api), init);
  if (!result.ok) throw new Error("visitor service unavailable");
  const body = await result.text();
  return body ? JSON.parse(body) : null;
}

async function visitorOverview(api: string) {
  const overview = await requestJson(api, "/rpc/visitor_overview", {
    body: "{}",
    headers: { "Content-Type": "application/json" },
    method: "POST",
  }) as Partial<Overview>;
  if (typeof overview.total !== "number" || typeof overview.activeVisitors !== "number" || typeof overview.cities !== "number" || !Array.isArray(overview.topCities)) {
    throw new Error("invalid visitor overview");
  }
  return overview as Overview;
}

async function existingVisitor(api: string, hash: string) {
  const rows = await requestJson(api, `/website_visitors?visitor_hash=eq.${encodeURIComponent(hash)}&select=city,region,geo_checked_at`, {
    headers: { Accept: "application/json" },
  });
  return Array.isArray(rows) && rows[0] ? rows[0] as VisitorRecord : null;
}

async function geolocate(ip: string, requestId: string) {
  const template = process.env.VISITOR_GEOLOOKUP_URL || "https://ipwho.is/{ip}";
  if (!template.includes("{ip}")) {
    logger.warn("visitor.geolocation.failed", { requestId, reason: "invalid_provider_template" });
    return null;
  }
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 1500);
  try {
    const result = await fetch(template.replace("{ip}", encodeURIComponent(ip)), { signal: controller.signal });
    const location = await result.json() as { city?: unknown; country_code?: unknown; region?: unknown; success?: unknown };
    if (!result.ok) {
      logger.warn("visitor.geolocation.failed", { requestId, reason: "provider_http_error", status: result.status });
      return null;
    }
    if (location.success === false) {
      logger.warn("visitor.geolocation.failed", { requestId, reason: "provider_rejected" });
      return null;
    }
    if (typeof location.city !== "string") {
      logger.warn("visitor.geolocation.failed", { requestId, reason: "city_missing" });
      return null;
    }
    if (!isMajorCity(location.city.trim())) {
      logger.info("visitor.geolocation.skipped", { requestId, reason: "city_not_in_major_city_list" });
      return null;
    }
    logger.info("visitor.geolocation.success", { requestId });
    return {
      city: canonicalCity(location.city),
      countryCode: typeof location.country_code === "string" ? location.country_code.slice(0, 2).toUpperCase() : null,
      region: typeof location.region === "string" ? location.region.trim().slice(0, 80) : null,
    } satisfies Geolocation;
  } catch (error) {
    logger.warn("visitor.geolocation.failed", {
      requestId,
      reason: error instanceof Error && error.name === "AbortError" ? "provider_timeout" : "provider_unavailable",
    });
    return null;
  } finally {
    clearTimeout(timeout);
  }
}

function needsGeolocation(record: VisitorRecord | null) {
  if (!record?.geo_checked_at) return true;
  const checkedAt = Date.parse(record.geo_checked_at);
  return Number.isNaN(checkedAt) || checkedAt < Date.now() - 30 * 24 * 60 * 60 * 1000;
}

async function registerVisitor(api: string, hash: string, ip: string, requestId: string) {
  const existing = await existingVisitor(api, hash);
  const geolocationNeeded = needsGeolocation(existing);
  const location = geolocationNeeded ? await geolocate(ip, requestId) : null;
  const payload: Record<string, string | null> = {
    last_seen_at: new Date().toISOString(),
    visitor_hash: hash,
  };
  if (geolocationNeeded) {
    payload.city = location?.city ?? existing?.city ?? null;
    payload.region = location?.region ?? existing?.region ?? null;
    payload.country_code = location?.countryCode ?? null;
    payload.geo_checked_at = new Date().toISOString();
  }
  await requestJson(api, "/website_visitors?on_conflict=visitor_hash", {
    body: JSON.stringify([payload]),
    headers: { "Content-Type": "application/json", Prefer: "resolution=merge-duplicates,return=minimal" },
    method: "POST",
  });
  logger.info("visitor.database.write", {
    requestId,
    status: existing ? "existing_visitor" : "new_visitor",
    geolocationChecked: geolocationNeeded,
  });
}

export async function GET() {
  const api = getVisitorApi();
  if (!api) return response(null, 503);
  try {
    return response(await visitorOverview(api));
  } catch (error) {
    console.error("Visitor counter read failed", error);
    return response(null, 503);
  }
}

export async function POST(request: Request) {
  const requestId = crypto.randomUUID();
  logger.info("visitor.request.received", { requestId });
  const origin = request.headers.get("origin");
  if (origin && origin !== publicRequestOrigin(request)) {
    logger.warn("visitor.request.rejected", { requestId, reason: "origin_mismatch" });
    return response(null, 403);
  }
  const api = getVisitorApi();
  const secret = process.env.VISITOR_IP_HASH_SECRET;
  if (!api || !secret) {
    logger.error("visitor.request.failed", { requestId, reason: "visitor_service_not_configured" });
    return response(null, 503);
  }
  try {
    const ip = getVisitorIp(request);
    if (!ip) {
      logger.warn("visitor.identity.missing", { requestId, reason: "client_ip_header_missing" });
    } else {
      await registerVisitor(api, await visitorHash(ip, secret), ip, requestId);
    }
    const overview = await visitorOverview(api);
    logger.info("visitor.request.completed", { requestId, total: overview.total });
    return response(overview);
  } catch (error) {
    logger.error("visitor.request.failed", {
      requestId,
      reason: error instanceof Error ? error.message : "unknown_error",
    });
    return response(null, 503);
  }
}
