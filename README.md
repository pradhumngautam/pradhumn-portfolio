# Pradhumn Gautam — Portfolio

Personal engineering portfolio at [pradhumn.com](https://www.pradhumn.com), built with Next.js 14, React, TypeScript, and Tailwind CSS.

The drafting-inspired design includes an original SVG systems illustration, light and dark themes, responsive section navigation, and locally hosted Geist fonts. Visual direction references [Tanay Vaswani's portfolio](https://www.tanayvaswani.com/); the illustration, content, and implementation are specific to this portfolio.

## Featured work

- **Webhook Delivery Platform (HLD):** durable event admission, worker coordination, signed requests, retries, and recovery. [Repository](https://github.com/pradhumngautam/webhook-platform)
- **Inventory Reservation System (LLD):** transaction boundaries, concurrent stock reservations, explicit state transitions, idempotency, and reconciliation. [Repository](https://github.com/pradhumngautam/inventory-system)
- **Technical writing:** [How Social Media Feeds Load](https://pradhumngautam.hashnode.dev/how-social-media-feeds-load-understanding-instagram-style-feed-architecture), covering fan-out, hybrid feed architectures, ranking, and hydration.

Project cards link to design and verification documents. Test counts describe local verification recorded in the project repositories.

## Local development

Requires Node.js 20 or newer and pnpm 8 (the repository uses a pnpm lockfile).

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

## GitHub activity

The server fetches the public contribution calendar for `pradhumngautam`, with hourly Next.js revalidation and a six-second timeout. Daily counts, intensity levels, dates, and GitHub's reported annual total come from that public response.

`src/lib/contribution-parser.ts` validates the calendar before rendering. If GitHub is unavailable or its markup changes, the site shows the real dated snapshot in `src/data/github-contributions.json`, labeled **Saved public activity**. It does not generate replacement counts. The annual total is retained as reported by GitHub and may differ from the sum of visible daily counts.

Parser tests cover ordering, reported totals, missing data, duplicates, malformed levels, and calendar gaps. GitHub's public HTML is an upstream dependency; if its structure changes, update the parser and refresh the saved snapshot with verified public data.

## Deployment

The repository uses the existing Vercel integration. Feature branches and pull requests provide previews; the production branch deploys to pradhumn.com. No additional hosting project is needed.

Geist font licenses are included alongside the font files in `src/assets/fonts`.
