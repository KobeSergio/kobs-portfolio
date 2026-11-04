# kobesergio.dev

Personal site of Kobe Sergio, a fullstack Web3 developer. It reads like a
GitHub profile: an Overview with a README, Experience and Projects as
repository lists that open into file views, and a Resume page that mints the
resume as an NFT on Arbitrum.

## Stack

Next.js 16 (App Router, Turbopack), React 19, TypeScript, Tailwind CSS 4,
wagmi + viem + Reown AppKit for the wallet flow, Lenis for smooth scrolling.

## Run

```bash
pnpm install
pnpm dev      # http://localhost:3000
pnpm lint
pnpm build
```

The wallet flow needs a Reown project id in `.env`:

```
NEXT_PUBLIC_PROJECT_ID=...
```

## Where things live

- `constants/site/` holds every piece of copy and data: experiences, builds,
  projects, the profile, the resume page and its FAQ. Pages render data and
  carry no copy of their own.
- `lib/repos.ts` turns an experience or project into the view-model the list
  rows and file views render, and maps raw tech labels to skill chips.
- `components/site/` is the shared frame (header, tabs, sidebar, icons,
  theme toggle), `components/overview/`, `components/repo/` and
  `components/resume/` are the page pieces.
- `components/web3-components/` and `providers/` hold the wallet connect,
  mint, modal and toast logic.
- `DESIGN.md` documents the tokens, type scale, layout rules and light mode.
  `PRODUCT.md` holds the audience and voice. `docs/redesign/` is the design
  reference and the target screenshots.
