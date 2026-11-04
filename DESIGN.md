---
name: Kobs Portfolio
description: A GitHub-profile-style developer portfolio in GitHub's dark palette, with Kobe's amber kept as the one brand accent
colors:
  bg: "#0d1117"
  bg-inset: "#010409"
  surface: "#151b23"
  btn: "#212830"
  border: "#3d444d"
  counter: "#2f3742"
  fg: "#f0f6fc"
  fg-muted: "#9198a1"
  fg-soft: "#c9d1d9"
  link: "#4493f8"
  topic-bg: "#111d2e"
  topic-fg: "#4493f8"
  success: "#238636"
  success-fg: "#3fb950"
  danger-fg: "#f85149"
  accent: "#fbbf24"
typography:
  body:
    fontFamily: "-apple-system, BlinkMacSystemFont, Segoe UI, Noto Sans, Helvetica, Arial, sans-serif"
    fontSize: "14px"
    fontWeight: 400
    lineHeight: 1.5
  mono:
    fontFamily: "ui-monospace, SFMono-Regular, Menlo, Consolas, monospace"
    fontSize: "12px to 13px"
  name:
    fontSize: "26px"
    fontWeight: 600
    lineHeight: 1.25
  full-name:
    fontSize: "20px"
    fontWeight: 300
    lineHeight: 1.3
  readme-h1:
    fontSize: "32px"
    fontWeight: 600
    lineHeight: 1.25
  readme-h2:
    fontSize: "24px"
    fontWeight: 600
    lineHeight: 1.25
  readme-body:
    fontSize: "16px"
    lineHeight: 1.6
  list-title:
    fontSize: "20px"
    fontWeight: 600
    lineHeight: 1.4
  section-label:
    fontSize: "16px"
    fontWeight: 400
  chip:
    fontSize: "12px"
    fontWeight: 500
  display:
    fontFamily: "Mona Sans (Resume page and mint modal only)"
    fontSize: "clamp(36px, 9vw, 60px)"
    fontWeight: 800
    fontStretch: "112.5%"
    letterSpacing: "-0.035em"
    lineHeight: 0.98
  label:
    fontFamily: "JetBrains Mono (Resume page, mint modal and the ASCII banner)"
    fontSize: "12px"
    letterSpacing: "0.08em"
rounded:
  box: "6px"
  pill: "9999px"
  button: "6px"
  resume-card: "14px"
  resume-button: "10px"
  art: "20px"
  modal: "12px"
  toast: "10px"
spacing:
  content-max: "1280px"
  file-view-max: "1440px"
  gutter: "16px on phones, 32px from sm"
  gap: "24px"
  sidebar: "296px from lg"
  tree: "260px"
  about: "260px to 296px"
components:
  button-primary:
    backgroundColor: "{colors.success}"
    borderColor: "rgba(240,246,252,0.1)"
    textColor: "#ffffff"
    rounded: "{rounded.button}"
    minHeight: "36px (44px for the CTA box)"
  button-neutral:
    backgroundColor: "{colors.btn}"
    borderColor: "{colors.border}"
    textColor: "{colors.fg}"
    rounded: "{rounded.button}"
  button-mint:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.bg}"
    rounded: "{rounded.resume-button}"
    minHeight: "52px"
  chip-topic:
    backgroundColor: "{colors.topic-bg}"
    textColor: "{colors.topic-fg}"
    rounded: "{rounded.pill}"
    padding: "0 10px"
    lineHeight: "22px"
  pill-outline:
    borderColor: "{colors.border}"
    textColor: "{colors.fg-muted}"
    rounded: "{rounded.pill}"
    padding: "0 7px"
    lineHeight: "18px"
  badge-count:
    backgroundColor: "{colors.counter}"
    textColor: "{colors.fg}"
    rounded: "{rounded.pill}"
    padding: "0 7px"
    lineHeight: "18px"
  box:
    borderColor: "{colors.border}"
    rounded: "{rounded.box}"
    headerBackground: "{colors.surface}"
  logo-tile:
    backgroundColor: "{colors.surface}"
    borderColor: "{colors.border}"
    size: "20px in cards, 28px in lists, 32px in About and Organizations"
---

# Design System: Kobs Portfolio

## 1. Overview

**The idea: a GitHub profile.** The portfolio borrows the layout language every
engineer already reads fluently. Overview is the profile page with a README,
Experience and Projects are repository lists, and each company or project opens
as a single-file view with a tree on the left, the file in the middle and an
About panel on the right. The Resume page is the one immersive moment: a
full-bleed mint page for the resume NFT.

Everything is GitHub's dark palette. Kobe's amber survives as the single brand
accent and appears in exactly five places: the active tab underline, the mint
button, the mint card border and art glow, the GitHub contribution colors, and
text selection. Nothing else is amber.

The source of truth for structure and copy is `docs/redesign/HANDOFF.md`, with
the canvas files beside it in `docs/redesign/design-reference/` and the target
renders in `docs/redesign/screenshots/`. `PRODUCT.md` still holds for
audience, voice and accessibility.

**Key characteristics:**

- One palette, defined once as Tailwind theme tokens in `app/globals.css`.
- Every border and divider is 1px `border`. Depth comes from borders and the
  two darker surfaces, never from shadows, except on the Resume page.
- Content is data. Every page renders from `constants/site/` through the
  `Repo` view-model in `lib/repos.ts`. The pages add no copy of their own.
- Every view has a route, so deep links and the back button work.

## 2. Colors

| Token | Value | Use |
|---|---|---|
| `bg` | `#0d1117` | Page background |
| `bg-inset` | `#010409` | Header, Resume page, modal overlay |
| `surface` | `#151b23` | Box headers, CTA box, logo tiles, toasts, modal |
| `btn` | `#212830` | Neutral buttons, the selected tree row |
| `border` | `#3d444d` | Every 1px border and divider, the ASCII edge layer |
| `counter` | `#2f3742` | Tab and "Builds" count badges, the modal token badge |
| `fg` | `#f0f6fc` | Primary text, the ASCII fill layer |
| `fg-muted` | `#9198a1` | Secondary text, icons, metadata |
| `fg-soft` | `#c9d1d9` | Body copy on the Resume page |
| `link` | `#4493f8` | Links, repo titles, the selected tree bar, addresses |
| `topic-bg` / `topic-fg` | `#111d2e` / `#4493f8` | Skill and topic chips |
| `success` | `#238636` | Green buttons ("Book a call", the CTA) |
| `success-fg` | `#3fb950` | Status dots, check marks, "Live" links, success toast |
| `danger-fg` | `#f85149` | Error toast |
| `accent` | `#fbbf24` | Active tab underline, mint button, mint glow, selection |

Translucent variants use the token with an opacity modifier (`border-fg/16`,
`bg-bg-inset/60`, `border-accent/35`) rather than new hex values.

**Contrast.** `fg-muted` on `bg` passes 4.5:1, so secondary text can stay
muted. Body copy on the Resume page uses `fg-soft` because it sits on blurred
art.

### Light mode

Dark is the default. Setting `data-theme="light"` on `<html>` swaps the same
tokens for GitHub's light palette, so no component knows which theme it is in:

| Token | Light value |
|---|---|
| `bg` | `#ffffff` |
| `bg-inset`, `surface` | `#f6f8fa` |
| `btn` | `#eaeef2` |
| `border` | `#d1d9e0` |
| `counter` | `#dde3ea` |
| `fg` | `#1f2328` |
| `fg-muted` | `#59636e` |
| `fg-soft` | `#454c54` |
| `link`, `topic-fg` | `#0969da` |
| `topic-bg` | `#ddf4ff` |
| `success` | `#1f883d` |
| `success-fg` | `#1a7f37` |
| `danger-fg` | `#d1242f` |
| `accent` | `#fbbf24`, unchanged |

`accent-fg` (`#0d1117`) is the text color on amber in both themes. Shadows and
the modal overlay come from `--shadow-pop`, `--shadow-modal` and `--overlay`,
which the light theme softens. The GitHub calendar switches to a light ramp
starting at `#ebedf0`.

An inline script in `app/layout.tsx` (`lib/themeScript.ts`) applies the stored
choice, else the system preference, before the first paint. The header toggle
(`components/site/ThemeToggle.tsx`) writes the choice to `localStorage` under
`theme`; `lib/theme.ts` keeps components in sync and follows system changes
until a choice is stored. Icons draw in `currentColor`, so never hardcode a
hex color in a component: use a token class.

## 3. Typography

**UI:** the system stack at 14px with line-height 1.5, everywhere except the
Resume page. The old Nunito Sans, Anton and BBH Bogle are gone.

**Mono:** `ui-monospace, SFMono-Regular, Menlo, Consolas, monospace` for
breadcrumbs, contract addresses and the inline `code` stack chips.

**Resume page and mint modal only:** Mona Sans for display (700 to 800,
`font-stretch: 112.5%`) and JetBrains Mono for labels and numbers. Both load
with `next/font/google` in `app/layout.tsx` and are exposed as `font-mona` and
`font-jetbrains`. JetBrains Mono also renders the ASCII banner on Overview; its
token points at the loaded face name directly so the box-drawing glyphs fall
through to the system monospace instead of the size-adjusted Arial fallback.

**Scale:** name 26px/600, full name 20px/300, README h1 32px/600, README h2
24px/600, README body 16px/1.6, list titles 20px/600, section labels 16px/400,
chips 12px/500. Date ranges use en dashes (`Oct 2026 – Nov 2026`). Copy never
uses em dashes.

## 4. Layout and Breakpoints

- Content is 1280px wide at most, file views 1440px. Side padding is
  `clamp(16px, 4vw, 32px)` (`clamp(16px, 3vw, 24px)` on file views). Gaps are
  24px.
- The header is not sticky. The tabs hide their icons below 480px so all four
  fit at 390px.
- The profile sidebar is a 296px column from `lg` and stacks above the content
  below it. The avatar is `min(296px, 28vw)`: full width in the column, beside
  the name when stacked.
- File views: three columns from `xl`, where About is `position: sticky;
  top: 24px`. Between 980px and 1279px the tree stays left and About wraps
  above the file content and stops sticking. Below 980px it is one column in
  the order tree, About, content: the tree collapses into a "Browse" bar that
  opens the full tree and closes after a pick, and About hides its skills and
  builds behind a "Show skills and builds" toggle.
- At 390px every route measures exactly 390px wide. Nothing scrolls sideways.

## 5. Components

### Shared

- **Header** (`components/site/SiteHeader.tsx`): the `k.` mark in white at
  32px with "KobeSergio", and a green "Book a call" button with the lucide
  `CalendarDays` icon. Below it the tabs (`ProfileTabs.tsx`): Overview,
  Experience, Projects, Resume with 16px icons, count badges from the data
  length, a 2px `accent` underline plus 600 weight and `aria-current="page"` on
  the active tab. File views light up their list's tab.
- **Profile sidebar** (`ProfileSidebar.tsx`): avatar, name, full name, the
  "Open to work" pill, the bio (the site's meta description) and "Email me".
  The full version on Overview adds the four stats as two lines, the details
  list with brand icons, and the Organizations row of 32px logo tiles linking
  to each company.
- **Logo tile** (`CompanyLogo.tsx`): a company logo on a `surface` tile with a
  `border` outline. Solana Launch Builder renders `SiSolana` in `fg`. Projects
  show their first letter in a dashed tile.
- **Chips** (`Chips.tsx`): topic chip, outline pill, count badge.
- **Icons** (`Icons.tsx`): the 16px stroke icons from the design reference.
  Brand icons come from `react-icons/si`.
- **Footer** (`SiteFooter.tsx`, Overview only): the mark at 20px in
  `fg-muted`, the copyright, and the email, GitHub, LinkedIn and Discord links.

### Overview

- **README box** (`components/overview/ReadmeBox.tsx`): the
  `KobeSergio / README.md` breadcrumb, the ASCII banner as two stacked `<pre>`
  layers (edge in `border`, fill in `fg`, `aria-hidden`, with an sr-only
  "Hi, I'm Kobs" heading), the four bio paragraphs (the last in `fg-muted`)
  and the tech stack chips with icons from `constants/site/site.tsx`.
- **Experience cards**: the four newest companies, each a bordered card whose
  slug link covers the whole card.
- **GitHub activity**: `GithubContributionGraph` with the amber theme inside a
  bordered box.
- **CTA box**: "Ready for your next product or MVP" on `surface`, a full-width
  green "Book a 30-min call" and the Email, LinkedIn and Discord buttons.

### Lists and file views (`components/repo/`)

- **Repo list row**: logo, slug link, pills, role, summary, up to ten skill
  chips plus "+N more", the period and build count, and an expand toggle
  ("Show N builds" / "Hide builds", or "Show details" when there are no build
  files). "View more" sits on the right from `sm` and drops under the row as a
  full-width button below it. Skills are the deduplicated union of every
  build's tech, normalized by `NORM` in `lib/repos.ts`.
- **File tree**: folders per company or project, `README.md` plus one
  `<build>.md` per build. The selected file gets `btn`, a 3px `link` inset bar
  and 600 weight. Rows are links.
- **File content**: breadcrumb, a commit bar (avatar, handle, the build's
  impact line or the role, a green check and the period; projects show the
  headline with the statuses as pills), then the file box. READMEs show the
  summary, an On-chain table when there are contracts, a Builds index, and
  inline notes for work without build files. Builds show the impact line in
  bold, the media at 16:9 with a 6px radius, "How I built it" bullets and a
  Stack line of inline code chips.
- **About panel**: logo, summary, link rows, role and period, skill chips and
  a "Builds N" list with green "Live" links.
- **Media**: a video with its poster (autoplay, muted, loop, off under reduced
  motion), an image carousel when there are several images, nothing when the
  list is empty.

### Resume (`app/resume/page.tsx`, `components/resume/`)

Three background layers on `bg-inset`: the NFT art blurred (`blur(90px)
saturate(1.4)`, 35% opacity, scaled 1.25), an 18px dot grid, and a vertical
fade to solid `#010409`. The hero is two columns that wrap to one: the art
(520px max, 20px radius, 1px light ring, amber glow) and the header, Card A
("Just want to read my CV?", a white "View my CV" button to the IPFS resume)
and Card B ("Or collect a copy on-chain", the live copies-left bar, the wallet
button and the Arbiscan contract link). The FAQ is a six-item accordion with a
"+" that rotates to "×"; the first item opens by default and one opens at a
time.

**Wallet button states** (`CustomConnectAndMintButton.tsx`, logic untouched):
"Connect Wallet" amber and full width; "Mint Resume" joined to a chevron that
opens the account view; "Minting..." with a spinner at 70% amber; "View Resume"
for holders.

**Success modal** (`SuccessMintModal.tsx`): 420px, centered, scrolls when
taller than the viewport, "MINT SUCCESSFUL #id", the art, name, description,
a neutral "View NFT" and an amber "View resume".

**Toasts** (`providers/Toasts.tsx`): `surface` cards with a 10px radius pinned
16px from the bottom-right, an icon, a dismiss ×, and a green
(`rgba(63,185,80,.45)`) or red (`rgba(248,81,73,.5)`) border.

## 6. Motion and Accessibility

- Motion is limited to chevron and "+" rotations, the copies-left bar, the
  mint spinner and video autoplay. All of it sits behind `motion-safe:` or a
  `prefers-reduced-motion` check, so reduced-motion visitors get static
  chevrons and posters.
- Every interactive element is a real `<a>` or `<button>`. Toggles set
  `aria-expanded`, icon-only buttons have `aria-label`, the selected tree row
  and active tab carry `aria-current="page"`, and the modal is a labelled
  `role="dialog"`.
- Focus rings are visible: a 2px `accent` outline on `:focus-visible`.
- Lenis smooth scrolling stays on. It does not interfere with the sticky About
  panel.

## 7. Do's and Don'ts

- **Do** add content in `constants/site/` only. Pages and components render
  data; they do not carry copy.
- **Do** keep amber to the five places listed above. If a new element needs
  attention, use `link` blue or a green button first.
- **Do** write bullets as strings with `**bold**` markers; `Bullets.tsx`
  renders them.
- **Do** keep date ranges on en dashes and copy free of em dashes
  (`grep -n "—" constants/site/*.tsx` must stay empty).
- **Don't** add shadows or glows outside the Resume page, the modal and the
  toasts.
- **Don't** use gradient text, side-stripe accents or amber card borders. The
  only amber border is Card B on the Resume page.
- **Don't** make the header sticky or add a second navigation.
- **Don't** invent stats, sections, testimonials or links.
