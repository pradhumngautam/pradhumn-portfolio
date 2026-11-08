# Pradhumn Gautam — Portfolio

Personal engineering portfolio at [pradhumn.com](https://www.pradhumn.com), built with Next.js 14, React, TypeScript, and Tailwind CSS.

The drafting-inspired design includes an original SVG systems illustration, light and dark themes, responsive section navigation, and locally hosted Geist fonts. Visual direction references [Tanay Vaswani's portfolio](https://www.tanayvaswani.com/); the illustration, content, and implementation are specific to this portfolio.

## Featured work

- **Webhook Delivery Platform (HLD):** durable event admission, worker coordination, signed requests, retries, and recovery. [Repository](https://github.com/pradhumngautam/webhook-platform)
- **Inventory Reservation System (LLD):** transaction boundaries, concurrent stock reservations, explicit state transitions, idempotency, and reconciliation. [Repository](https://github.com/pradhumngautam/inventory-system)
- **Technical writing:** [How Social Media Feeds Load](https://pradhumngautam.hashnode.dev/how-social-media-feeds-load-understanding-instagram-style-feed-architecture), covering fan-out, hybrid feed architectures, ranking, and hydration.

Project cards link to design and verification documents. Test counts describe local verification recorded in the project repositories.

## Local development

Requires Node.js 22 and pnpm 8 (the repository uses a pnpm lockfile). Run `nvm use` if you use nvm. The `engines.node` field also pins Vercel builds and functions to Node.js 22, overriding the project's older dashboard default.

```sh
pnpm install --frozen-lockfile
pnpm dev
```

Open http://localhost:3000. No environment variables or GitHub token are required.

```sh
pnpm test
pnpm typecheck
pnpm build
pnpm start
```

Use `pnpm build:isolated` to build into `.next-build` while a development server is running. Standard builds use `.next` for Vercel compatibility.

## Updating content

| Content                       | Source                                    |
| ----------------------------- | ----------------------------------------- |
| Profile, contact links, stack | `src/lib/profile.ts`                      |
| Experience                    | `src/lib/experience.ts`                   |
| Projects and design evidence  | `src/lib/projects.ts`                     |
| Articles                      | `src/lib/writing.ts`                      |
| Theme and responsive styles   | `src/app/globals.css`                     |
| Systems illustration          | `src/components/architecture-drawing.tsx` |

The homepage, `/projects`, and `/writing` share the same visual system. Writing links to the original Hashnode publication.

## Search and AI discovery

- Every HTML page has its own title, description, canonical production URL, Open Graph tags, and Twitter card. `/opengraph-image` generates a 1200 × 630 dark link-preview card using local fonts.
- `/sitemap.xml` lists the six canonical HTML pages. `/robots.txt` allows crawling and advertises the sitemap. Modification timestamps are omitted unless a real content-edit date is available.
- JSON-LD identifies the author and website, the homepage as a `ProfilePage`, project collections and source code, breadcrumbs, and the original Hashnode article. Claims match the visible content.
- Project case studies live at `/projects/webhook-platform`, `/projects/inventory-system`, and `/projects/payment-system`. Their content is rendered on the server and linked from project cards.
- `/llms.txt` is a concise navigation index; `/llms-full.txt` contains profile, experience, project details, and article summaries. Each HTML page advertises a matching Markdown endpoint (for example `/projects/webhook-platform/index.md`). These variants are generated from the same data as the visible pages.
- Markdown/text variants carry `noindex` and canonical/discovery headers so the HTML pages remain the search results. Vercel previews also carry `noindex`; production pages allow indexing.

After building and starting a production server, run `pnpm test:seo`. Set `SEO_BASE_URL` for a different address, or `SEO_EXPECT_PREVIEW=1` when checking an accessible preview. The checks inspect delivered HTML without client JavaScript: unique metadata, canonicals, JSON-LD, headings, indexability, Markdown discovery, sitemap, robots, llms links, social image dimensions, and 404s.

After deploying to production, submit `https://www.pradhumn.com/sitemap.xml` in the verified Google Search Console property and use URL Inspection to request indexing of the homepage and case studies. No verification token is embedded in this repository. Search engines and sharing apps decide when to refresh their caches.

`llms.txt` is a proposed agent-navigation convention, not an indexing control or ranking guarantee. Search and AI visibility still depend on useful content, crawlability, authority, and the systems choosing to cite it. See [the proposal](https://llmstxt.org/) and [Google's AI search guidance](https://developers.google.com/search/docs/appearance/ai-features).

## GitHub activity

The server fetches the public contribution calendar for `pradhumngautam`, with hourly Next.js revalidation and a six-second timeout. Daily counts, intensity levels, dates, and GitHub's reported annual total come from that public response.

`src/lib/contribution-parser.ts` validates the calendar before rendering. If GitHub is unavailable or its markup changes, the site shows the real dated snapshot in `src/data/github-contributions.json`, labeled **Saved public activity**. It does not generate replacement counts. The annual total is retained as reported by GitHub and may differ from the sum of visible daily counts.

Parser tests cover ordering, reported totals, missing data, duplicates, malformed levels, and calendar gaps. GitHub's public HTML is an upstream dependency; if its structure changes, update the parser and refresh the saved snapshot with verified public data.

## Deployment

The repository uses the existing Vercel integration. Feature branches and pull requests provide previews; the production branch deploys to pradhumn.com. No additional hosting project is needed.

Geist font licenses are included alongside the font files in `src/assets/fonts`.
