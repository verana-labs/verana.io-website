# verana.io-website

The network and software front door of Verana: **The Open Trust Infrastructure
for the Verifiable Internet**.

Built with **Next.js 15 (App Router) + React 19 + Tailwind v4 + TypeScript**,
mirroring the `veranafoundation.org-website` stack, CI/CD, and Relaticle CRM
contact integration. This is the marketing/adoption surface only (no auth, no
database).

## Develop

```bash
nvm use            # Node 22
npm install
npm run dev        # http://localhost:3000
```

Copy `.env.example` to `.env.local` and set values as needed. With the Relaticle
variables unset, the contact form accepts and logs submissions without writing
to the CRM.

## Scripts

- `npm run dev` - local dev server
- `npm run build` - production build (standalone output)
- `npm start` - run the production build
- `npx tsc --noEmit` - type check

## Theming

Tailwind v4 design tokens live in `app/globals.css` under `@theme`, re-bound for
`[data-theme="light"]`. The theme is set before paint in `app/layout.tsx`
(stored choice, else the OS preference, falling back to dark). Toggle in the nav.

## Content

Page content is in `app/**/page.tsx`; shared data (the three parts, software, use
cases, pillars) is in `app/lib/content.ts`. **Copy rule: no em-dashes in rendered
site copy** (use commas, parentheses, or a spaced hyphen).

## Diagrams

The architecture diagram is a styled component (`app/components/ArchitectureDiagram.tsx`).
Flow diagrams use Mermaid via `app/components/Mermaid.tsx` (re-renders on theme
change).

## Contact form / CRM

The contact form posts to `app/api/contact/route.ts`, which validates (honeypot,
time-to-submit, rate limit) and forwards to Relaticle via `app/lib/relaticle.ts`.

Environment: `RELATICLE_API_URL`, `RELATICLE_API_TOKEN`, `ALERT_WEBHOOK_URL`.

## Deploy

GitHub Actions (`.github/workflows/`) build and push a Docker image
(`veranalabs/verana.io-website`) on pushes to `main`/tags, then deploy to the
OVH Kubernetes cluster (`k8s/`). Versioning via release-please.

## License

Code Apache-2.0. Site content CC BY-SA 4.0.
