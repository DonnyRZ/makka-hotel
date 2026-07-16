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
