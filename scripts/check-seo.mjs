import assert from "node:assert/strict";

// Check the delivered HTML and HTTP responses, without relying on client JavaScript.
// Start a production server first; use SEO_BASE_URL for a different port/host.
const base = process.env.SEO_BASE_URL || "http://localhost:3000";
const canonicalOrigin = "https://www.pradhumn.com";
const expectPreview = process.env.SEO_EXPECT_PREVIEW === "1";
const tags = (html, tag) =>
  [...html.matchAll(new RegExp(`<${tag}\\b[^>]*>`, "g"))].map((match) =>
    Object.fromEntries(
      [...match[0].matchAll(/([\w:-]+)="([^"]*)"/g)].map((attribute) => [
        attribute[1],
        attribute[2],
      ]),
    ),
  );
async function read(path) {
  const response = await fetch(new URL(path, base), { redirect: "manual" });
  assert.equal(response.status, 200, `${path} must return 200`);
  return { response, text: await response.text() };
}

const { text: sitemap } = await read("/sitemap.xml");
const urls = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map(
  (match) => match[1],
);
assert.equal(urls.length, 6);
assert.equal(new Set(urls).size, urls.length);
const titles = new Set();
const descriptions = new Set();
for (const url of urls) {
  assert.equal(new URL(url).origin, canonicalOrigin);
  const path = new URL(url).pathname;
  const { response, text: html } = await read(path);
  const links = tags(html, "link");
  const meta = tags(html, "meta");
  const title = /<title>(.*?)<\/title>/.exec(html)?.[1];
  const description = meta.find((item) => item.name === "description")?.content;
  assert(title && !titles.has(title), `Unique title: ${path}`);
  assert(
    description && !descriptions.has(description),
    `Unique description: ${path}`,
  );
  titles.add(title);
  descriptions.add(description);
  assert.equal(links.filter((link) => link.rel === "canonical").length, 1);
  assert.equal(
    new URL(links.find((link) => link.rel === "canonical")?.href).href,
    url,
  );
  assert.equal(
    new URL(meta.find((item) => item.property === "og:url")?.content).href,
    url,
  );
  assert.equal(
    meta.find((item) => item.name === "twitter:card")?.content,
    "summary_large_image",
  );
  assert.equal(
    (html.match(/<h1\b/g) || []).length,
    1,
    `Exactly one h1: ${path}`,
  );
  const noindex =
    meta
      .filter((item) => item.name === "robots")
      .some((item) => item.content.includes("noindex")) ||
    (response.headers.get("x-robots-tag") || "").includes("noindex");
  assert.equal(noindex, expectPreview, `Indexability: ${path}`);
  const schemas = [
    ...html.matchAll(
      /<script type="application\/ld\+json">([\s\S]*?)<\/script>/g,
    ),
  ].flatMap((match) => JSON.parse(match[1])["@graph"]);
  assert(
    schemas.some(
      (node) => node["@type"] === "Person" && node.name === "Pradhumn Gautam",
    ),
  );
  assert(
    schemas.some(
      (node) =>
        node.url === url &&
        ["WebPage", "ProfilePage", "CollectionPage"].includes(node["@type"]),
    ),
  );
  const markdown = links.find((link) => link.type === "text/markdown")?.href;
  assert(markdown, `Markdown discovery: ${path}`);
  const variant = await read(new URL(markdown).pathname);
  assert.match(variant.response.headers.get("content-type"), /text\/markdown/);
  assert(variant.text.startsWith("# "));
  assert.match(variant.response.headers.get("x-robots-tag"), /noindex/);
  console.log(
    `PASS ${path}: canonical, metadata, JSON-LD, h1, indexability, Markdown`,
  );
}
const { text: robots } = await read("/robots.txt");
assert.match(robots, /User-Agent: \*/i);
assert.match(robots, /Allow: \//);
assert(robots.includes(`${canonicalOrigin}/sitemap.xml`));
const { text: index } = await read("/llms.txt");
assert(index.startsWith("# Pradhumn Gautam\n"));
for (const match of index.matchAll(
  /\]\((https:\/\/www\.pradhumn\.com[^)]+)\)/g,
))
  await read(new URL(match[1]).pathname);
const { text: full } = await read("/llms-full.txt");
assert(
  full.includes("Webhook Delivery Platform") &&
    full.includes("Inventory Reservation System") &&
    full.includes("hashnode.dev/how-social-media-feeds-load"),
);
const image = await fetch(new URL("/opengraph-image", base));
assert.equal(image.status, 200);
assert.match(image.headers.get("content-type"), /image\/png/);
const bytes = Buffer.from(await image.arrayBuffer());
assert.equal(bytes.readUInt32BE(16), 1200);
assert.equal(bytes.readUInt32BE(20), 630);
for (const path of [
  "/projects/not-a-project",
  "/projects/not-a-project/index.md",
]) {
  assert.equal((await fetch(new URL(path, base))).status, 404);
}
console.log(
  "PASS sitemap, robots, llms links, full text, 1200×630 social image, and missing-project 404s",
);
