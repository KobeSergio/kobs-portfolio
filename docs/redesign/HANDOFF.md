# kobesergio.dev redesign: implementation handoff

The approved redesign turns the portfolio into a GitHub-profile-style site. It was designed and reviewed on a design canvas. This folder is everything you need to build it in this repo (Next.js 16, React 19, Tailwind 4).

**Rule zero:** keep every piece of existing content and add nothing new. The only new copy is what's written in this doc and the design reference (the bio rewrite, the mint explainer cards and the FAQ). Don't invent stats, sections, testimonials or links.

## What's in this folder

| Path | What it is |
|---|---|
| `HANDOFF.md` | This spec. Source of truth for structure and behavior. |
| `screenshots/*-desktop.png`, `*-mobile.png` | Renders at 1280px and 390px wide. Match these. |
| `design-reference/*.dc.html` | Source of the canvas. Use it for exact copy, colors, spacing and SVG icon paths. |
| `assets/public/assets/logos/` | New logos. Copy into `public/assets/logos/`. |
| `assets/app/icon.svg`, `apple-icon.png` | New favicon and touch icon. Copy into `app/` and delete `app/favicon.ico`. |
| `assets/ascii-hero.txt` | The two layers of the ASCII "Hi, I'm Kobs" banner. |

### Reading the design reference files

The `.dc.html` files use a small template runtime. Read them as annotated HTML and don't try to run them:

- `{{name}}` is a value computed in the `renderVals()` method of the `<script>` block at the bottom of each file.
- `<sc-for list=… as=…>` is a loop, `<sc-if value=…>` is a conditional, and `<dc-import name="X">` mounts `X.dc.html`.
- Inline `style="…"` attributes hold the exact values. Translate them to Tailwind.
- `Experience.dc.html` is one component that renders four screens: experience list, experience file view, projects list and project file view. It switches on `section` (`experience` | `projects`) and `view` (`list` | `file`). Its `experiences()` and `projects()` methods hold the final copy for every company, build and project.
- `Projects.dc.html`, `RepoDetail.dc.html` and `ResumeMinted.dc.html` only mount another file with preset props.
- `/_blob/<id>` image URLs map to repo files:

| Blob id (prefix) | Repo file |
|---|---|
| `e615dd64` | `/assets/carousel-2.png` (profile avatar) |
| `fd3e29ca` | `/assets/nft-image.png` (resume NFT art) |
| `b83ac13b` | `/assets/suits/suits-logo.png` |
| `5d67fa3e` | `/assets/logos/kingdomly.svg` (new) |
| `0ee8be5d` | `/assets/logos/viseo.png` (new) |
| `fca61ec5` | `/assets/logos/stratpoint.png` (new) |
| `ff72a4fa`, `e2cd1c75`, `b8ab9a38`, `fd0f38a5` | `/assets/launch-builder/{agentboard,sniffinu,partnerpad,cliplaunchpad}-poster.jpg` |
| `a2a0ee1f` | `/assets/suits/02-mint-page-live.png` |
| `61687552` | `/assets/suits/04-claim-page-live.png` |
| `85de04ea` | `/assets/suits/11-dexscreener-suit-pltr.png` |
| `33ba57e8` | `/assets/marketplace-preview-1.png` |
| `48c55b29` | `/assets/kingdomly-docs.png` |
| `2c3c8062` | `/assets/tenelos-previews/landing.png` |
| `1b374603` | `/assets/prc-previews/compliance-page.png` |

The canvas used still images as stand-ins. On the real site, show each contribution's existing media from `constants/site/Experiences.tsx` and `Projects.tsx`: videos with their poster, image carousels where there are several images, and nothing when `images` is empty. Reuse the media logic in `components/page-sections/Experiences.tsx` (autoplay muted loop, off under reduced motion).

### Precedence

- This handoff replaces `DESIGN.md` and `docs/superpowers/specs/2026-06-10-portfolio-redesign.md`. Where they disagree (no nav, particle hero, Anton, Nunito Sans), this doc wins.
- `PRODUCT.md` still holds for audience, voice and accessibility. Ignore its "particle canvas hero" principle.
- When the port is done, rewrite `DESIGN.md` to describe this system, using the tokens below.

## Routes

The canvas switched views with in-page state. The real site uses routes, so every view has a shareable URL and the back button works. All content is static, so use `generateStaticParams` and per-page `metadata`.

| Route | Screen | Screenshot |
|---|---|---|
| `/` | Overview | `overview-*` |
| `/experience` | Experience list | `experience-list-*` |
| `/experience/[company]` | Company file view, `README.md` selected | `experience-the-suits-readme-*` |
| `/experience/[company]/[build]` | Company file view, one build selected | `experience-the-suits-mint-*`, `experience-agentboard-*` |
| `/projects` | Projects list | `projects-list-*` |
| `/projects/[project]` | Project file view | `project-tenelos-*` |
| `/resume` | Resume NFT mint | `resume-*`, `resume-after-mint-*` |

Slugs come from the canvas data. Add `slug` fields to the types in `constants/site/` and use these values:

- Companies: `solana-launch-builder`, `the-suits`, `viseo`, `kingdomly`, `stratpoint`
- Builds, which are file names in the tree without `.md`:
  - solana-launch-builder: `agentboard.fun`, `sniffinu.fun`, `partnerpad.fun`, `cliplaunchpad.fun`
  - the-suits: `mint`, `paycheck`, `token-launch`
  - viseo: `sanction-directory-compliance`, `onchain-rate-limiting`, `smart-contract-test-suite`
  - kingdomly: `creator-mint`, `bridge`, `marketplace`, `staking`, `docs`
  - stratpoint: no builds. Its README carries the internship bullets, with the outcome line "More reliable deploys and faster incident response" and the stack.
- Projects: `prc-inspection-monitoring`, `tenelos`

## Design tokens

GitHub's dark palette, with Kobe's amber kept as the brand accent.

| Token | Value | Use |
|---|---|---|
| `bg` | `#0d1117` | Page background |
| `bg-inset` | `#010409` | Header, Resume page |
| `surface` | `#151b23` | Box headers, CTA box, logo tiles |
| `btn` | `#212830` | Neutral buttons, selected tree row |
| `border` | `#3d444d` | Every 1px border and divider |
| `counter` | `#2f3742` | Tab count badges |
| `fg` | `#f0f6fc` | Primary text |
| `fg-muted` | `#9198a1` | Secondary text, icons |
| `fg-soft` | `#c9d1d9` | Body copy on the Resume page |
| `link` | `#4493f8` | Links, repo titles, selected tree bar |
| `topic-bg` / `topic-fg` | `#111d2e` / `#4493f8` | Skill and topic chips |
| `success` | `#238636` (border `rgba(240,246,252,0.1)`) | Primary green buttons |
| `success-fg` | `#3fb950` | Status dots, check marks, success toast |
| `danger-fg` | `#f85149` | Error toast |
| `accent` | `#fbbf24` | Active tab underline, mint CTA, mint glow, `::selection` |

- **Type:** use the system UI stack everywhere except the Resume page: `-apple-system, BlinkMacSystemFont, "Segoe UI", "Noto Sans", Helvetica, Arial, sans-serif`. The base is 14px with line-height 1.5. This replaces Nunito Sans, Anton and BBH Bogle, so remove their imports when nothing uses them.
- **Mono:** `ui-monospace, SFMono-Regular, Menlo, Consolas, monospace` for breadcrumbs, addresses and inline code.
- **Resume page and mint modal only:** Mona Sans for display (weight 700 to 800, `font-stretch: 112.5%`) and JetBrains Mono for labels and numbers. JetBrains Mono also renders the ASCII banner. Load both with `next/font/google`. If your Next version doesn't export `Mona_Sans`, use a Google Fonts `css2` link.
- **Sizes:** name 26px/600, full name 20px/300, README h1 32px/600, README h2 24px/600, list titles 20px/600, section labels 16px/400, chips 12px.
- **Radii:** 6px on boxes and buttons, pills fully rounded, 10 to 20px on Resume page cards and art.
- **Layout:** content max-width 1280px (file views 1440px), side padding 16px on phones and 32px from `sm`, 24px gaps.
- **Icons:** 16px stroke icons with paths in the reference files. Brand icons use `react-icons/si`, which is already a dependency: `SiGmail`, `SiLinkedin`, `SiGithub`, `SiDiscord`, `SiSolana`. Tech stack icons come from `skills[].icon` in `constants/site/site.tsx`.

## Shared pieces

- **Header** (`bg-inset`, bottom border, not sticky):
  - The logo links to `/`. It's `kobs-mark.svg` at 32px in white, with "KobeSergio" at 16px/600 beside it.
  - "Book a call" sits on the right: a green button with the lucide `CalendarDays` icon, linking to `https://calendly.com/ckasergio/30min`.
- **Tabs** below the header:
  - Overview, Experience, Projects and Resume, each with a 16px icon.
  - Experience and Projects show count badges, derived from the data length.
  - The active tab gets a 2px `accent` underline and 600 weight, plus `aria-current="page"`. The file views count as the Experience or Projects tab.
  - Hide the tab icons below 480px so all four tabs fit at 390px.
- **Profile sidebar**, a 296px column from `lg`:
  - The full version is on Overview only: avatar, name, "Christian Kobe Sergio", an "Open to work" pill and the bio line (the site's meta description), then an "Email me" button.
  - Next come the four stats from `stats` in `site.tsx`, as two lines, and a details list: location, UTC+8, EN/Tagalog, "Open to collabs · replies in < 24 hours", then email, LinkedIn, GitHub and Discord with brand icons.
  - It ends with an "Organizations" row of the 5 company logos, each linking to `/experience/[company]`.
  - A short version (avatar through "Email me") sits on the Experience and Projects lists.
  - The file views and Resume have no sidebar.
  - The avatar sits above the name at desktop and beside it, at `min(296px, 28vw)`, when stacked. See `overview-mobile.png`.
- **Company logos** are 28px in lists and 32px in About, on a `surface` tile with a `border` outline.
  - Solana Launch Builder uses `SiSolana` in `fg` on that tile.
  - Projects have no logos, so they show their first letter in a dashed-border tile.
- **Footer** appears on Overview only: the logo at 20px in `fg-muted`, "© 2026 Kobe Sergio", then email, GitHub, LinkedIn and Discord links.

## Pages

### Overview `/`

The right column, top to bottom:

1. **README box:** the breadcrumb `KobeSergio / README.md`, then the ASCII banner.
   - Render the banner as two `<pre>` layers stacked in one grid cell: the edge layer in `border` color behind, the fill layer in `fg` on top. The text is in `ascii-hero.txt`.
   - Use JetBrains Mono at `font-size: clamp(5px, calc((100vw - 120px) / 42), 13px)` with `line-height: 1.05`, so it never overflows at 390px.
   - Mark the banner `aria-hidden` and add an sr-only `<h2>Hi, I'm Kobs</h2>`.
2. **Bio:** four paragraphs, verbatim from `Main.dc.html`. The fourth is in `fg-muted`.
3. **Tech stack:** chips with the icons from `site.tsx`.
4. **Experience:** the 4 newest companies as cards.
   - Each card has its logo, slug link, location pill, role, summary, and "period · N builds".
   - Each card links to `/experience/[company]`.
   - "See all 5 experiences" links to `/experience`.
5. **GitHub activity:** reuse `GithubContributionGraph` with the existing amber theme. Remove its own label and outer container, and render it inside a bordered box.
6. **CTA box:** "Ready for your next product or MVP" plus the async line.
   - "Book a 30-min call" is a full-width green button with `CalendarDays`.
   - Below it sit Email me, LinkedIn and Discord buttons with `SiGmail`, `SiLinkedin` and `SiDiscord`, matching the current site's Contact section.

The mint card is not on Overview. It lives on `/resume`.

### Experience list `/experience`

Each row (see `experience-list-*`):

- The logo, the slug as a link to `/experience/[company]`, and the location pill.
- The role at 600 weight, then the summary in muted text.
- Skill chips:
  - Build them as the deduplicated union of every contribution's `tech`, in order, normalized with the map below.
  - Show 10, then a "+N more" pill.
- A meta line: "Oct 2026 – Nov 2026 · 4 builds". Use en dashes in date ranges.
- An expand toggle under the meta line: "Show N builds" / "Hide builds", with a chevron that rotates and `aria-expanded`.
  - Expanded, it shows a bordered list of builds. Each has a title linking to `/experience/[company]/[build]`, the impact line, and "Live ↗" when there's a `link`.
  - Stratpoint has no builds, so its toggle reads "Show details" and reveals its bullets.
  - Everything starts collapsed. The canvas opened the first row only to show the state.
- A "View more →" button linking to `/experience/[company]`.
  - It sits on the right from `sm` up.
  - Below `sm` it drops under the row as a full-width button.

Skill normalization map:

```ts
const NORM: Record<string, string[]> = {
  "Next.js 16": ["Next.js"], "Tailwind 4": ["Tailwind"],
  "Anthropic SDK (Haiku)": ["Anthropic SDK"], "Claude Haiku / Sonnet / Opus": ["Claude"],
  "Vercel cron": ["Vercel"], "wagmi / viem": ["wagmi", "viem"], "Viem": ["viem"],
  "Filebase (IPFS)": ["IPFS"], "IPFS (Filebase)": ["IPFS"], "Dexscreener": ["DexScreener"],
};
```

### File view `/experience/[company]` and `/experience/[company]/[build]`

This follows GitHub's single-file view (see `experience-the-suits-*` and `experience-agentboard-*`). It has three regions.

**Tree (left, 260px)**

- The header reads "Experience" with a "← All" button linking to `/experience`.
- Each company is a folder that toggles open or closed. The current company is open.
- Each folder holds `README.md` plus one `<build>.md` per build.
- The selected file gets a `btn` background, a 3px `link` inset bar on the left, and 600 weight.
- Clicking a file navigates to its route.

**Content (center)**

- A breadcrumb `company / file.md`, where the company links to its README.
- A commit bar with the avatar, "KobeSergio", a message, a green check and the period.
  - The message is the build's impact line, or the role on a README.
- A file box whose header shows the file icon, the file name and "View build ↗" when there's a link.
- **README body:** h1 company name, then the summary.
  - Then an **On-chain** markdown table, only when `onchain` exists (The Suits).
  - Then **Builds**: a list of links to each build file, each followed by its impact line.
  - Stratpoint shows "How I built it" with its bullets and a Stack line instead.
- **Build body:**
  - h1 build title, then the impact line in bold.
  - Then the media, at 16:9 with a 6px radius.
  - Then h2 "How I built it" with the existing `description` bullets.
  - Then "Stack:" followed by inline code chips from `tech`.

**About (right, 296px, `position: sticky; top: 24px`)**

- The logo and "About", then the summary.
- Then the links, from `links`, as link-icon rows.
- Then the role and period, the skill chips, and a "Builds N" list where each build links to its file and shows a green "Live" link when there is one.

**Responsive**

- From `xl` (1280px): all three columns.
- From 980px to 1279px: the tree stays on the left, and About moves above the file content and stops sticking.
- Below 980px: one column in this order.
  1. The tree collapses into one "Browse" bar that shows the current `company / file.md` and opens the full tree on tap. It closes again after you pick a file.
  2. About shows the summary, links, role and date. Skills and builds sit behind a "Show skills and builds" toggle.
  3. Then the content.

### Projects `/projects` and `/projects/[project]`

These use the same list and file-view components as Experience, fed from `constants/site/Projects.tsx`:

- **List row:**
  - The letter tile, the slug link, the `statuses` as pills, and the `headline` as the summary.
  - The `tech` chips, then a "Show details" toggle that reveals the bullets and "View build: host".
  - Then "View more".
- **File view:**
  - The tree has one folder per project, each holding only `README.md`.
  - The README shows h1 title, headline, media, "How I built it" with the bullets, and Stack.
  - The file header shows "View build ↗".
  - About shows the headline, the link, and the `tech` as topic chips. There's no role or period.
- **Commit bar fix:** in the canvas render the project commit bar repeats the statuses twice. On the site, use the `headline` as the message and the `statuses` as small pills on the right.

### Resume `/resume`

This is a full-bleed, immersive mint page with no sidebar. See `resume-*` and `resume-after-mint-*`, and copy everything verbatim from `Resume.dc.html`.

**Background**, in three layers on `bg-inset`:

1. The NFT art, blurred: `filter: blur(90px) saturate(1.4)`, `opacity: .35`, `scale(1.25)`, covering the whole main area.
2. A dot grid: `radial-gradient(rgba(240,246,252,.07) 1px, transparent 1px)` at 18px.
3. A vertical gradient darkening to solid `#010409` at the bottom.

**Hero**, two columns that wrap to one:

- **Art:** max 520px, 20px radius, a 1px light ring, and an amber glow shadow. A "Kobs NFT 2025" chip sits top-left.
- **Header:**
  - `KobeSergio / resume.nft` with a "Free, no purchase needed" pill.
  - The h1 "Mint my Resume as an NFT" in Mona Sans 800, `clamp(36px, 9vw, 60px)`.
  - Then the existing lede.
- **Card A, "Just want to read my CV?":**
  - "No wallet, no sign-up, nothing to install."
  - A white "View my CV ↗" button linking to the IPFS resume URL already in `CustomConnectAndMintButton.tsx`.
- **Card B, "Or collect a copy on-chain":**
  - The explainer copy, then the line "Free · 444 copies · Arbitrum".
  - Then "Copies left" with the progress bar. Wire it to the existing `totalSupply` read and `maxSupply = 444` from `About.tsx`, and keep the "—" fallback while it's loading or erroring.
  - Then the wallet button, then a contract link to Arbiscan (`0x09dc…2293`).

**Wallet button states.** Keep all the logic in `CustomConnectAndMintButton.tsx` and only restyle it:

| State | Button |
|---|---|
| Disconnected | "Connect Wallet", amber, full width |
| Connected | "Mint Resume" (amber) joined to a chevron button that opens the AppKit account view |
| Minting | "Minting..." with a spinner, at reduced opacity |
| Holder | "View Resume" joined to the chevron |

Drop the old "Or view it here" button, since Card A replaces it.

**FAQ, "New to NFTs?":**

- Six questions in an accordion, with the copy verbatim from the file.
- The first is open by default and only one can be open at a time.
- The icon is a "+" that rotates 45° to a "×", and each toggle sets `aria-expanded`.

**Success modal.** Restyle `SuccessMintModal.tsx` to match `MintSuccessModal.dc.html`:

- 420px max width, centered, scrolling when it's taller than the viewport.
- "MINT SUCCESSFUL #id", then the art, the name and the description.
- Then a neutral "View NFT ↗" button and an amber "View resume ↗" button.

Fix two existing bugs while you're in that file:

- Line 105 renders a stray literal ``` `` ``` text node. Delete it.
- `explorerUrl` already ends in `/`, and the modal adds another, which produces `…2293//id`.

**Toasts.** Restyle the `success` and `error` variants in `providers/Toasts.tsx`:

- `surface` background, 10px radius, pinned 16px from the bottom-right, with an icon and a dismiss ×.
- Borders: `rgba(63,185,80,.45)` for success and `rgba(248,81,73,.5)` for error.
- Keep the copy: "Resume minted successfully / You can now view your resume" and "Failed to mint resume / Please try again".

## Data and copy changes in `constants/site/`

- Add `slug` to `Experience`, `Contribution` and `Project`, using the values listed under Routes.
- Set `companyLogo` for VISEO, Kingdomly and Stratpoint to the new `/assets/logos/*` files. Solana Launch Builder renders `SiSolana`, so leave its `companyLogo` empty and special-case it, or add an icon field.
- Remove the em-dashes from content:
  - Use en dashes in `time` ranges.
  - In descriptions, use the replacement wording in the reference `experiences()` and `projects()` data. For example, "contracts, blocking issuance…" and "generative art engine: layers, traits…".
  - The Tenelos title becomes "Tenelos: Tennis ELO Rating System".
  - Run `grep -n "—" constants/site/*.tsx` until it returns nothing.
- Put the skill-derivation helper (NORM map plus dedupe) in `lib/`.

## Clean-up

After the new pages work, delete the components nothing imports any more:

- `Headline`
- `ui/aether-flow-hero`
- `StatStrip` (its stats moved to the sidebar)
- `ScrollCube`
- the old `page-sections/About`, `Experiences`, `Projects`, `Contact` and `Footer`
- `ProjectCard`, `Pill`, `SectionLabel`

**Ask Kobe before uninstalling any npm package** (`gsap`, `lenis`, `framer-motion`, `react-parallax-tilt`, `react-scrollama`). Keep `SmoothScroll` (Lenis) unless it breaks the sticky About panel.

## Accessibility

- Every interactive element is a real `<a>` or `<button>`: tabs, toggles, tree rows, FAQ items, wallet buttons.
- Give icon-only buttons an `aria-label`, and set `aria-expanded` on every toggle.
- Keep visible focus rings.
- Body text meets 4.5:1 contrast. `#9198a1` on `#0d1117` passes.
- Respect `prefers-reduced-motion`: no video autoplay and no chevron animation.

## Done means

- [ ] Every route in the table renders and matches its screenshots at 1280px and 390px.
- [ ] At 390px, `document.documentElement.scrollWidth === 390` on every route, with no sideways scroll.
- [ ] Deep links such as `/experience/the-suits/mint` load directly, and the back button returns to the list.
- [ ] The mint flow works on Arbitrum: connect, mint, modal, then toast. A holder sees "View Resume", and the copies-left counter reads live.
- [ ] `pnpm lint` and `pnpm build` pass.
- [ ] `grep -n "—" constants/site/*.tsx` is empty.
- [ ] `DESIGN.md` is rewritten for this system.

## Open questions for Kobe (ask before building these parts)

1. **Kingdomly title.** The new bio says "Lead Developer at Kingdomly" for "several years", but the Experience entry says "Chief Technology Officer" and Oct 2023 – Dec 2025. Which wording should both use?
2. **ASCII banner.** The font has no apostrophe, so it reads "HI, IM KOBS". Keep it or change it?
3. **FAQ claim.** "Do I have to pay anything?" says Arbitrum fees are "usually a few cents". Keep it or drop the number?
