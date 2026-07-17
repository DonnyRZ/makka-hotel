import test from "node:test";
import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import path from "node:path";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");

test("all required locales and pages are represented", async () => {
  const content = await readFile(path.join(root, "app", "content.ts"), "utf8");
  for (const locale of ["en", "ru", "uz"]) assert.match(content, new RegExp(`\\b${locale}\\b`));
  for (const page of ["home", "hotel", "rooms", "dining", "rooftop", "events", "gallery", "location"]) {
    assert.match(content, new RegExp(`"${page}"`));
  }
});

test("starter preview has been removed", async () => {
  const page = await readFile(path.join(root, "app", "page.tsx"), "utf8");
  const layout = await readFile(path.join(root, "app", "layout.tsx"), "utf8");
  assert.doesNotMatch(page, /SkeletonPreview|codex-preview/);
  assert.doesNotMatch(layout, /Starter Project|codex-preview/);
  assert.match(layout, /Mecca Boutique Hotel/);
});

test("every locally referenced image exists", async () => {
  const content = await readFile(path.join(root, "app", "content.ts"), "utf8");
  const sitePage = await readFile(path.join(root, "app", "components", "SitePage.tsx"), "utf8");
  const references = [...`${content}\n${sitePage}`.matchAll(/"(\/images\/[^"?]+)"/g)].map((match) => match[1]);
  assert.ok(references.length >= 15, "expected a curated set of site imagery");
  for (const reference of new Set(references)) {
    await access(path.join(root, "public", reference));
  }
});

test("responsive navigation and mobile layout contracts stay intact", async () => {
  const css = await readFile(path.join(root, "app", "globals.css"), "utf8");
  const header = await readFile(path.join(root, "app", "components", "Header.tsx"), "utf8");

  assert.ok(
    header.indexOf("</header>") < header.indexOf('id="mobile-menu"'),
    "the fixed mobile menu must remain outside the filtered header containing block",
  );
  assert.match(css, /\.mobile-menu\s*\{[^}]*height:\s*100dvh[^}]*overflow-y:\s*auto/s);
  assert.doesNotMatch(css, /\.mobile-menu\s*\{[^}]*z-index:\s*-1/s);
  assert.match(css, /\.hero--home,\s*\.hero--inner\s*\{[^}]*height:\s*auto[^}]*min-height:\s*100svh/s);
  assert.match(css, /\.gallery-filters\s*\{[^}]*overflow-x:\s*auto/s);
  assert.match(css, /\.story-visual\s*\{[^}]*aspect-ratio:\s*4\s*\/\s*3/s);
});

test("header keeps Gallery at the end and preserves compact brand and statistic values", async () => {
  const css = await readFile(path.join(root, "app", "globals.css"), "utf8");
  const header = await readFile(path.join(root, "app", "components", "Header.tsx"), "utf8");

  assert.match(header, /"location",\s*"gallery"/);
  assert.match(css, /\.stat strong\s*\{[^}]*white-space:\s*nowrap/s);
  assert.doesNotMatch(css, /\.brand-copy small\s*\{[^}]*display:\s*none/s);
});

test("desktop hero fits its complete composition inside short viewports", async () => {
  const css = await readFile(path.join(root, "app", "globals.css"), "utf8");

  assert.match(css, /\.hero--home,\s*\.hero--inner\s*\{[^}]*height:\s*100svh[^}]*min-height:\s*0/s);
  assert.match(css, /@media\s*\(min-width:\s*821px\)\s*and\s*\(max-height:\s*900px\)/);
  assert.match(css, /@media\s*\(min-width:\s*821px\)\s*and\s*\(max-height:\s*720px\)/);
  assert.match(css, /\.hero-content h1\s*\{[^}]*min\([^)]*vw,[^)]*vh\)/s);
  assert.match(css, /\.scroll-cue\s*\{[^}]*left:\s*50%[^}]*bottom:/s);
});

test("scroll cue follows the active language", async () => {
  const content = await readFile(path.join(root, "app", "content.ts"), "utf8");
  const sitePage = await readFile(path.join(root, "app", "components", "SitePage.tsx"), "utf8");

  assert.match(content, /scrollToExplore:\s*"Scroll to explore"/);
  assert.match(content, /scrollToExplore:\s*"Листайте ниже"/);
  assert.match(content, /scrollToExplore:\s*"Pastga suring"/);
  assert.match(sitePage, /dictionary\.scrollToExplore/);
  assert.doesNotMatch(sitePage, />SCROLL TO EXPLORE</);
});

test("hero buttons form a localized previous and next page sequence", async () => {
  const content = await readFile(path.join(root, "app", "content.ts"), "utf8");
  const sitePage = await readFile(path.join(root, "app", "components", "SitePage.tsx"), "utf8");
  const css = await readFile(path.join(root, "app", "globals.css"), "utf8");

  assert.match(content, /"home",\s*"hotel",\s*"rooms",\s*"dining",\s*"rooftop",\s*"events",\s*"location",\s*"gallery"/s);
  assert.match(sitePage, /pageKeys\.indexOf\(page\)/);
  assert.match(sitePage, /pageIndex > 0 \? pageKeys\[pageIndex - 1\] : null/);
  assert.match(sitePage, /pageIndex < pageKeys\.length - 1 \? pageKeys\[pageIndex \+ 1\] : null/);
  assert.match(sitePage, /dictionary\.nav\[previousPage\]/);
  assert.match(sitePage, /dictionary\.nav\[nextPage\]/);
  assert.doesNotMatch(sitePage, /heroLinks/);
  assert.match(css, /\.hero-pager\s*\{[^}]*width:\s*fit-content[^}]*display:\s*flex/s);
  assert.match(css, /\.hero-page-button\s*\{[^}]*width:\s*auto[^}]*min-width:\s*172px/s);
  assert.doesNotMatch(css, /\.hero-page-button--next\s*\{[^}]*grid-column/s);
  assert.match(css, /\.hero-page-button:hover\s*\{[^}]*background:\s*var\(--gold-300\)/s);
  assert.match(css, /\.hero-page-button--previous \.hero-page-arrow::after/);
  assert.match(css, /\.hero-page-button--next \.hero-page-arrow::after/);
});

test("container deployment stays production-parity and VPS-isolated", async () => {
  const dockerfile = await readFile(path.join(root, "Dockerfile"), "utf8");
  const nextConfig = await readFile(path.join(root, "next.config.ts"), "utf8");
  const compose = await readFile(path.join(root, "..", "compose.yaml"), "utf8");

  assert.match(nextConfig, /output:\s*["']standalone["']/);
  assert.match(dockerfile, /FROM node:\$\{NODE_VERSION\} AS runtime/);
  assert.match(dockerfile, /USER node/);
  assert.match(dockerfile, /HEALTHCHECK/);
  assert.match(compose, /127\.0\.0\.1/);
  assert.match(compose, /restart:\s*unless-stopped/);
  assert.match(compose, /no-new-privileges:true/);
  assert.match(compose, /read_only:\s*true/);
  assert.match(compose, /healthcheck:/);
  assert.match(compose, /max-size:\s*10m/);
});

test("visitor tracking covers every page while the card remains homepage-only", async () => {
  const compose = await readFile(path.join(root, "..", "compose.yaml"), "utf8");
  const packageJson = await readFile(path.join(root, "package.json"), "utf8");
  const sitePage = await readFile(path.join(root, "app", "components", "SitePage.tsx"), "utf8");
  const layout = await readFile(path.join(root, "app", "layout.tsx"), "utf8");
  const counter = await readFile(path.join(root, "app", "components", "VisitorCounter.tsx"), "utf8");
  const tracker = await readFile(path.join(root, "app", "components", "VisitorTracker.tsx"), "utf8");
  const tracking = await readFile(path.join(root, "app", "components", "visitorTracking.ts"), "utf8");
  const route = await readFile(path.join(root, "app", "api", "visitors", "route.ts"), "utf8");

  assert.match(compose, /visitor-api:/);
  assert.match(compose, /makka_postgres_data/);
  assert.match(compose, /VISITOR_API_URL/);
  assert.match(compose, /VISITOR_GEOLOOKUP_URL/);
  assert.doesNotMatch(packageJson, /"postgres"/);
  assert.match(sitePage, /isHome && <VisitorCounter/);
  assert.match(layout, /<VisitorTracker/);
  assert.match(tracker, /registerVisitor\(\)/);
  assert.match(counter, /registerVisitor\(\)/);
  assert.match(tracking, /registration \?\?=/);
  assert.match(tracking, /fetch\("\/api\/visitors"/);
  assert.match(counter, /role="dialog"/);
  assert.match(route, /crypto\.subtle/);
  assert.match(route, /x-real-ip/);
  assert.match(route, /x-forwarded-proto/);
  assert.match(route, /defaultMajorCities/);
  assert.match(route, /visitor_overview/);
  assert.match(route, /Cache-Control/);
});

test("visitor copy is localized for every supported language", async () => {
  const content = await readFile(path.join(root, "app", "content.ts"), "utf8");

  assert.match(content, /label: "Посетители сайта"/);
  assert.match(content, /label: "Sayt tashrifchilari"/);
  assert.match(content, /details: "Tashrifchilar geografiyasini ko‘rish"/);
});
