# Mecca Boutique Hotel

The application uses one multi-stage Dockerfile for both local development and
the VPS runtime. Local development runs Vinext with hot reload; production runs
the generated standalone server as a non-root user.

## Local audit

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
