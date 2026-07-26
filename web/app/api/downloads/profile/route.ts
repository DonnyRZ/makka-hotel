export const dynamic = "force-dynamic";
import { logger } from "../../../lib/logger";

type DownloadMetrics = {
  totalDownloads: number;
  uniqueDownloaders: number;
};

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

function response(metrics: DownloadMetrics | null, status = 200) {
  return Response.json(metrics, {
    status,
    headers: { "Cache-Control": "no-store" },
  });
}

function asNumber(value: unknown): number | null {
  if (typeof value === "number" && Number.isFinite(value)) return value;
  if (typeof value === "string" && value.trim() !== "" && Number.isFinite(Number(value))) {
    return Number(value);
  }
  return null;
}

function normalizeDownloadMetrics(value: unknown): DownloadMetrics | null {
  if (!value || typeof value !== "object") return null;
  const metrics = value as Record<string, unknown>;
  const totalDownloads = asNumber(metrics.totalDownloads);
  const uniqueDownloaders = asNumber(metrics.uniqueDownloaders);
  if (totalDownloads === null || uniqueDownloaders === null) return null;
  return { totalDownloads, uniqueDownloaders };
}

async function visitorHash(ip: string, secret: string) {
  const key = await crypto.subtle.importKey(
    "raw",
    new TextEncoder().encode(secret),
    { hash: "SHA-256", name: "HMAC" },
    false,
    ["sign"],
  );
  const signature = await crypto.subtle.sign("HMAC", key, new TextEncoder().encode(ip));
  return Array.from(new Uint8Array(signature), (value) => value.toString(16).padStart(2, "0")).join("");
}

async function requestJson(api: string, path: string, init: RequestInit) {
  const result = await fetch(new URL(path, api), init);
  if (!result.ok) throw new Error("download service unavailable");
  const body = await result.text();
  return body ? JSON.parse(body) : null;
}

async function downloadOverview(api: string) {
  const overview = normalizeDownloadMetrics(await requestJson(api, "/rpc/download_overview", {
    body: "{}",
    headers: { "Content-Type": "application/json" },
    method: "POST",
  }));
  if (!overview) throw new Error("invalid download overview");
  return overview;
}

async function registerDownload(api: string, hash: string, requestId: string) {
  const overview = normalizeDownloadMetrics(await requestJson(api, "/rpc/register_profile_download", {
    body: JSON.stringify({ p_visitor_hash: hash }),
    headers: { "Content-Type": "application/json" },
    method: "POST",
  }));
  if (!overview) throw new Error("invalid download registration");
  logger.info("download.database.write", { requestId, totalDownloads: overview.totalDownloads });
  return overview;
}

export async function GET() {
  const api = getVisitorApi();
  if (!api) return response(null, 503);
  try {
    return response(await downloadOverview(api));
  } catch (error) {
    console.error("Profile download metrics read failed", error);
    return response(null, 503);
  }
}

export async function POST(request: Request) {
  const requestId = crypto.randomUUID();
  logger.info("download.request.received", { requestId });
  const origin = request.headers.get("origin");
  if (origin && origin !== publicRequestOrigin(request)) {
    logger.warn("download.request.rejected", { requestId, reason: "origin_mismatch" });
    return response(null, 403);
  }

  const api = getVisitorApi();
  const secret = process.env.VISITOR_IP_HASH_SECRET;
  if (!api || !secret) {
    logger.error("download.request.failed", { requestId, reason: "download_service_not_configured" });
    return response(null, 503);
  }

  try {
    const ip = getVisitorIp(request);
    if (!ip) {
      logger.warn("download.identity.missing", { requestId, reason: "client_ip_header_missing" });
      return response(await downloadOverview(api));
    }

    const overview = await registerDownload(api, await visitorHash(ip, secret), requestId);
    logger.info("download.request.completed", { requestId, totalDownloads: overview.totalDownloads });
    return response(overview);
  } catch (error) {
    logger.error("download.request.failed", {
      requestId,
      reason: error instanceof Error ? error.message : "unknown_error",
    });
    return response(null, 503);
  }
}
