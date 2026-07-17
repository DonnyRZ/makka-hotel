export const dynamic = "force-dynamic";

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

async function geolocate(ip: string) {
  const template = process.env.VISITOR_GEOLOOKUP_URL || "https://ipwho.is/{ip}";
  if (!template.includes("{ip}")) return null;
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 1500);
  try {
    const result = await fetch(template.replace("{ip}", encodeURIComponent(ip)), { signal: controller.signal });
    const location = await result.json() as { city?: unknown; country_code?: unknown; region?: unknown; success?: unknown };
    if (!result.ok || location.success === false || typeof location.city !== "string" || !isMajorCity(location.city.trim())) return null;
    return {
      city: canonicalCity(location.city),
      countryCode: typeof location.country_code === "string" ? location.country_code.slice(0, 2).toUpperCase() : null,
      region: typeof location.region === "string" ? location.region.trim().slice(0, 80) : null,
    } satisfies Geolocation;
  } catch {
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

async function registerVisitor(api: string, hash: string, ip: string) {
  const existing = await existingVisitor(api, hash);
  const location = needsGeolocation(existing) ? await geolocate(ip) : null;
  const payload: Record<string, string | null> = {
    last_seen_at: new Date().toISOString(),
    visitor_hash: hash,
  };
  if (needsGeolocation(existing)) {
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
  const origin = request.headers.get("origin");
  if (origin && origin !== new URL(request.url).origin) return response(null, 403);
  const api = getVisitorApi();
  const secret = process.env.VISITOR_IP_HASH_SECRET;
  if (!api || !secret) return response(null, 503);
  try {
    const ip = getVisitorIp(request);
    if (ip) await registerVisitor(api, await visitorHash(ip, secret), ip);
    return response(await visitorOverview(api));
  } catch (error) {
    console.error("Visitor counter write failed", error);
    return response(null, 503);
  }
}
