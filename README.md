# Mecca Boutique Hotel

The application uses one multi-stage Dockerfile for both local development and
the VPS runtime. Local development runs Vinext with hot reload; production runs
the generated standalone server as a non-root user.

## Local audit

Copy `.env.docker.example` to `.env` and replace the database password and visitor hash secret before any public deployment. The application remains available if the visitor database is temporarily unavailable.

Start only the Mecca Hotel service:

```powershell
docker compose -f compose.yaml -f compose.dev.yaml up -d --build app
```

Open `http://localhost:3000/en`. Follow logs with:

```powershell
docker compose -f compose.yaml -f compose.dev.yaml logs -f app
```

Stop it without removing the dependency cache:

```powershell
docker compose -f compose.yaml -f compose.dev.yaml down
```

## Production parity check

Build and run the same standalone image used by the VPS:

```powershell
docker compose up -d --build app
docker compose ps
```

## VPS deployment

Nginx remains the public TLS endpoint and proxies only to the loopback port.
Use these values in the VPS `.env` file:

```dotenv
MAKKA_BIND_IP=127.0.0.1
MAKKA_PORT=3003
MAKKA_TAG=<git-commit-sha>
```

Deploy only this service from the project directory:

```bash
git pull --ff-only
docker compose build --pull app
docker compose up -d --no-deps app
docker compose ps app
```

The Nginx upstream stays `http://127.0.0.1:3003`. The Compose project name,
service-scoped commands, loopback-only port, health check, bounded logs,
non-root runtime, and restart policy keep deployment isolated from other VPS
applications.

For the visitor counter, Nginx must overwrite the IP header sent to the app:

```nginx
proxy_set_header X-Real-IP $remote_addr;
```

The counter stores only an HMAC hash of that address, never the raw IP.

## News and event video

News is available at `/en/news`, `/ru/news`, and `/uz/news`. The TITF story uses
the supplied handshake photograph for its thumbnail and opening image, with the
event film embedded in the article. Localized editorial content lives in
`web/app/news.ts`; curated media lives in `web/public/images/news` and
`web/public/videos/news`.

The standalone server does not provide MP4 MIME types or byte-range responses.
For production playback and seeking, install the scoped Nginx media snippet:

```bash
install -m 644 deploy/nginx-news-media.conf /etc/nginx/snippets/makka-news-media.conf
```

Add this line inside the Mecca HTTPS server block and the IP review server
block, alongside their existing proxy location (keep the HTTP-to-HTTPS redirect
server unchanged):

```nginx
include /etc/nginx/snippets/makka-news-media.conf;
```

Validate with `nginx -t`, then reload Nginx. A request to the MP4 with
`Range: bytes=0-1023` should return `206`, `Content-Type: video/mp4`, and a
`Content-Range` header.
