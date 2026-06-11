---
name: Kobs Portfolio
description: Fullstack Web3 developer portfolio — dark precision with a harvest amber pulse
colors:
  harvest-amber: "#fbbf24"
  amber-soft: "#fde68a"
  amber-muted: "#78350f"
  emerald-status: "#34d399"
  page-bg: "#020617"
  surface: "#0f172a"
  surface-raised: "#1e293b"
  border-subtle: "#334155"
  ink-muted: "#64748b"
  ink-secondary: "#94a3b8"
  ink-tertiary: "#cbd5e1"
  ink-primary: "#f8fafc"
typography:
  display:
    fontFamily: "Anton, Impact, sans-serif"
    fontSize: "clamp(3rem, 8vw, 6rem)"
    fontWeight: 400
    lineHeight: 0.95
    letterSpacing: "-0.04em"
  headline:
    fontFamily: "Nunito Sans, system-ui, sans-serif"
    fontSize: "clamp(1.5rem, 3vw, 1.875rem)"
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: "-0.02em"
  title:
    fontFamily: "Nunito Sans, system-ui, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 600
    lineHeight: 1.4
    letterSpacing: "normal"
  body:
    fontFamily: "Nunito Sans, system-ui, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 400
    lineHeight: 1.75
    letterSpacing: "normal"
  label:
    fontFamily: "Nunito Sans, system-ui, sans-serif"
    fontSize: "0.75rem"
    fontWeight: 700
    lineHeight: 1.4
    letterSpacing: "0.12em"
rounded:
  full: "9999px"
  "3xl": "24px"
  "2xl": "16px"
  xl: "12px"
  md: "6px"
spacing:
  section: "6rem"
  section-gap: "2.5rem"
  card: "1.25rem"
  card-sm: "1rem"
components:
  button-primary:
    backgroundColor: "{colors.harvest-amber}"
    textColor: "{colors.page-bg}"
    rounded: "{rounded.full}"
    padding: "12px 28px"
  button-primary-hover:
    backgroundColor: "{colors.amber-soft}"
    textColor: "{colors.page-bg}"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.ink-primary}"
    rounded: "{rounded.full}"
    padding: "12px 28px"
  button-contact:
    backgroundColor: "{colors.surface-raised}"
    textColor: "{colors.ink-primary}"
    rounded: "{rounded.xl}"
    padding: "12px 16px"
  button-contact-hover:
    backgroundColor: "transparent"
    textColor: "{colors.harvest-amber}"
  card:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink-secondary}"
    rounded: "{rounded.2xl}"
    padding: "{spacing.card}"
  chip-tech:
    backgroundColor: "{colors.surface-raised}"
    textColor: "{colors.ink-tertiary}"
    rounded: "{rounded.md}"
    padding: "2px 8px"
  badge-status:
    backgroundColor: "{colors.amber-muted}"
    textColor: "{colors.amber-soft}"
    rounded: "{rounded.full}"
    padding: "2px 10px"
---

# Design System: Kobs Portfolio

## 1. Overview

**Creative North Star: "The Signal Terminal"**

A high-precision instrument built to transmit. The portfolio is not a showcase — it is a proof-of-work broadcast on a dark medium. Every surface earns its bandwidth. Harvest amber is a diagnostic pulse: it appears when something demands the visitor's attention and is absent everywhere else. The darkness is not decorative; it is the environment where signals read clearly.

The visual grammar is disciplined and purposeful. Nunito Sans carries warmth without softness, staying readable at the small sizes that dense layouts demand. The particle canvas in the hero is the one moment of choreographed motion — everything after it is a steady signal, not a performance. Cards are defined by what's inside them, not by decorative chrome. Spacing varies for rhythm rather than repeating a single gap everywhere.

This system explicitly rejects two failure modes from PRODUCT.md: the **cyberpunk Web3 aesthetic** (neon green, glitch effects, tribal crypto iconography) and the **generic developer portfolio template** (gray/white background, floating tech-logo cloud, identical card grid, no design POV). Neither failure is dramatic — both are failures of defaulting, of picking the first available answer instead of the right one.

**Key Characteristics:**
- Dark-first: `page-bg` is the canvas; amber is the signal, not the theme
- Harvest amber used at ≤15% of any given screen — rarity makes it land
- Motion reserved for the opening sequence and intentional state feedback; no uniform scroll-reveal reflex
- Cards defined by content hierarchy, not by decorative borders or shadows
- Typography scale has genuine contrast: display at 6rem, body at 0.875rem — no flat scale

## 2. Colors: The Amber-on-Dark System

Committed strategy. One saturated accent on a near-black ground. Amber is the only warm color on screen; it reads as signal because everything surrounding it is cool-neutral dark.

### Primary
- **Harvest Amber** (#fbbf24): The one color that demands attention. Used on primary CTAs, the mint progress bar, active indicators, section underlines, and hover states where the interaction is meaningful. Never used as a background for large areas — its power comes from scarcity.
- **Amber Soft** (#fde68a): The quieter register of Harvest Amber. Used for hover text, soft labels (the "About Me" kicker), and amber glow glints. Lower saturation than #fbbf24; never louder.

### Secondary
- **Emerald Status** (#34d399): A single semantic accent for positive/live state only. Used on the "open to work" pulse dot and impact metrics in experience cards. Not a general-purpose green — it appears exclusively when something is active or measurably successful.

### Neutral
- **Page Background** (#020617): The absolute ground. Near-black with a faint cool-blue tint. The canvas particle clears to true `#000000` in the hero; the rest of the page returns here so sections have continuity.
- **Surface** (#0f172a): Card backgrounds. Always at partial opacity (`/50`) against `page-bg` so the layer reads as elevated without a shadow.
- **Surface Raised** (#1e293b): Borders, raised inner surfaces (tech tag backgrounds, nested card beds). The third tier of the neutral stack.
- **Border Subtle** (#334155): Dividers, tag borders, and interactive borders at rest. Light enough to be invisible at distance, present enough to structure at reading distance.
- **Ink Muted** (#64748b): Metadata labels, timestamps, monospace status text. Used where the information is present but subordinate.
- **Ink Secondary** (#94a3b8): Body text, descriptions, secondary prose. The primary reading color for long-form content.
- **Ink Tertiary** (#cbd5e1): Tech tag text, chip labels, mid-importance captions.
- **Ink Primary** (#f8fafc): Headings and high-importance text. Near-white with just enough blue tint to avoid harsh glare on the dark background.

### Named Rules
**The One Signal Rule.** Harvest amber appears on ≤15% of any given screen. Its rarity is the point. If amber is everywhere, it is nowhere — and the portfolio loses its diagnostic clarity.

**The No-Glow Default Rule.** Amber glow shadows (`shadow-[0_0_24px_rgba(251,191,36,...)]`) are reserved for interactive states and the NFT mint card, which earns a permanent glow because it is the most interactive element on its section. At rest, card borders are `border-slate-800` without any warm glow. Adding ambient amber glow to every card is the cyberpunk reflex; don't.

## 3. Typography: Precision Without Cold

**Display Font:** Anton (impact-condensed, Google Fonts) with Impact, sans-serif fallback
**Body / UI Font:** Nunito Sans (humanist, rounded, warm-but-precise) with system-ui, sans-serif fallback
**Label / Mono use:** Nunito (the rounded sibling, not a true monospace) for date labels and status text; its visual warmth prevents the sterile read that Space Mono or IBM Plex would bring

**Character:** Anton at large sizes carries authority and weight — the full-screen hero heading reads like a statement, not an introduction. Nunito Sans at small sizes keeps the dense card content readable without clinical coldness. They don't fight each other because they never share the same viewport region.

### Hierarchy
- **Display** (Anton 400, clamp(3rem, 8vw, 6rem), leading 0.95, tracking -0.04em): Hero headline only. One instance per page. Never below 3rem; the weight reads wrong at text scale.
- **Headline** (Nunito Sans 700, clamp(1.5rem, 3vw, 1.875rem), leading 1.2, tracking -0.02em): Section headings (Experience, Projects, Contact). Use `text-wrap: balance` to prevent orphans across two lines.
- **Title** (Nunito Sans 600, 1.125rem, leading 1.4): Card headings, contribution product names, sub-section labels. The bridge between headline and body.
- **Body** (Nunito Sans 400, 0.875rem / 1rem, leading 1.75): All prose, descriptions, summaries. Maximum line length 65–70ch. On dark background, line-height stays at 1.75 — light type on dark reads as lighter-weight and needs more air.
- **Label** (Nunito Sans 700, 0.75rem, tracking 0.12em, ALL CAPS): Status indicators, section kickers, metadata keys. Used sparingly — one or two per section, not above every heading.

### Named Rules
**The Anton Ceiling Rule.** Anton is used only in the full-screen hero heading. It is not a section heading font, not a card title font, not a kicker font. Its power is proportional to its exclusivity: one instance of extreme weight contrast per page.

**The Kicker Restraint Rule.** Uppercase tracked labels ("About Me •", "Tech Stack") are voice when used once or twice with deliberate intent. They become AI scaffolding when every section opens with one. Each label must justify its existence; if removing it doesn't reduce clarity, remove it.

## 4. Elevation: Tonal Depth with Selective Glow

This system uses **tonal layering as primary depth** and **selective amber glow for interactive state**. There is no ambient box-shadow stack applied to resting cards. Depth is conveyed by the background opacity differential between page-bg (#020617), surface (#0f172a / 50%), and surface-raised (#1e293b / 60%).

Black structural shadows (`shadow-black/40`) appear under large glass panels (the About image container) where an element needs to lift out of the page. These are heavy and sparing — not a default card treatment.

### Shadow Vocabulary
- **Structural lift** (`0 20px 25px -5px rgba(0,0,0,0.4), 0 8px 10px -6px rgba(0,0,0,0.4)`): Large composite panels (About card). Signals physical elevation, not interactive state.
- **CTA pulse** (`0 10px 15px -3px rgba(251,191,36,0.3)`): Primary button's amber shadow. Tied to the amber identity; never used on neutral or ghost buttons.
- **Mint glow** (`0 0 24px rgba(251,191,36,0.07)`): The NFT mint card. Permanent, ambient — this element is always special.
- **Hover signal** (`0 0 20px rgba(251,191,36,0.15)`): Contact buttons on hover. Transient; indicates interactability.

### Named Rules
**The Flat-By-Default Rule.** Cards are flat at rest. `border-slate-800` defines their boundary; there is no resting shadow. On hover, the border shifts toward amber and the background slightly densifies — state change, not shadow stack.

## 5. Components

### Buttons
The portfolio has three distinct button registers, each with a different weight in the hierarchy.

- **Primary** (Harvest Amber fill): `bg-amber-400 text-slate-950 font-semibold rounded-full px-7 py-3 shadow-lg shadow-amber-400/30`. The hottest signal on any surface. One or two per section max. On hover: `-translate-y-0.5 shadow-amber-300/40`. CTA copy is direct ("Get to know me", not "Learn more about me").
- **Ghost** (Transparent outline): `border border-white/15 text-slate-50 rounded-full px-7 py-3`. Paired with primary in the hero CTA row. On hover: `border-amber-200/60 text-amber-200`. Softer; secondary action.
- **Contact** (Surface fill, amber hover): `rounded-xl border border-slate-700 bg-slate-800/60 px-4 py-3 text-sm font-semibold text-slate-100`. Used for Email/LinkedIn/Discord channel links. On hover: `border-amber-400/40 bg-amber-400/8 shadow-[0_0_20px_rgba(251,191,36,0.15)]`. The hover glow marks these as interactive without being as loud as the primary button.

### Chips / Tags
- **Tech tag**: `rounded-md border border-slate-700 bg-slate-800/60 px-2 py-0.5 text-xs text-slate-300`. Small, quiet, functional. Shows tech stack on project and experience cards. No hover state — informational only.
- **Status badge**: `rounded-full bg-amber-400/20 px-2.5 py-0.5 text-amber-200 font-semibold text-xs`. Used for "OPEN TO WORK" and project status labels. Amber tint marks significance.
- **Project status**: `rounded-full border border-amber-400/30 bg-amber-400/8 text-amber-300 px-3 py-1 text-xs font-medium`. Slightly more prominent than the tech tag; denotes the state of a shipped project.

### Cards / Containers
- **Standard card**: `rounded-2xl border border-slate-800 bg-slate-900/50 p-5`. The portfolio's workhorse container. On hover: `border-amber-400/30 hover:bg-slate-900/80`. The hover border shift is the only interactive signal — no shadow, no lift.
- **Glass panel** (About section): `rounded-3xl border border-white/10 bg-white/5 p-6 shadow-xl shadow-black/40 backdrop-blur`. Heavier, more premium feel; used for the featured identity card only. Backdrop blur is purposeful here, not decorative.
- **Amber highlight card** (NFT mint): `rounded-2xl border border-amber-400/25 bg-amber-400/5 p-4 shadow-[0_0_24px_rgba(251,191,36,0.07)]`. The only card with a permanent amber glow and amber border. Its specialness signals that this is the most interactive/significant element.
- **Stats mini-card**: `rounded-xl border border-slate-800 bg-slate-950/60 p-4`. Nested inside larger cards. Compact, no hover.

### Navigation
No persistent nav bar. Scrolled navigation uses `id`-anchor links (`#about`, `#projects`, `#contact`) from the hero CTA row. The page has a single linear scroll path; nav is the scroll itself. Footer links provide a secondary access point.

### Signature Components

**Particle Canvas Hero**: Full-viewport canvas with amber particles (`rgba(251,191,36,0.85)`) that repel from mouse position and connect with proximity lines. Canvas clears to true black (#000000) each frame; the bottom edge fades via a `bg-gradient-to-b from-transparent to-slate-950` overlay so the transition into the page body is seamless. This component has no reduced-motion fallback — it needs one: a static amber gradient or a still particle field should render when `prefers-reduced-motion: reduce` is detected.

**NFT Resume Mint**: An amber-glowing interactive card inside the About section with a live on-chain supply counter, progress bar, and wallet connect + mint flow. This component is the portfolio's differentiator. Copy must explain what it is to a non-crypto visitor on first read.

**GitHub Contribution Graph**: `react-github-calendar` with the amber color theme. Part of the proof-of-work section between Experience and Projects.

## 6. Do's and Don'ts

### Do:
- **Do** use Harvest Amber (#fbbf24) on the single most important interactive element per section — and only one.
- **Do** vary card padding (1rem vs 1.25rem vs 1.5rem) based on content density; uniform padding flattens hierarchy.
- **Do** include `@media (prefers-reduced-motion: reduce)` on every animation — the particle canvas, Framer Motion entrances, and Lenis scroll all require fallbacks.
- **Do** run WCAG AA contrast checks on all body text: `ink-secondary` (#94a3b8) on `page-bg` (#020617) needs verification — that pairing can fall below 4.5:1 on some monitors.
- **Do** keep section headings in `headline` weight (Nunito Sans 700, not Anton); Anton is the hero only.
- **Do** write CTA copy as a direct action in the visitor's terms: "Get to know me", "Book a call", "Mint my resume", not "Learn more" or "Click here".

### Don't:
- **Don't** add a cyberpunk or Web3 tribal aesthetic — no neon green (#00ff00-family), glitch text effects, anime motion, or skull/degen iconography. The portfolio must read credibly to a non-crypto founder.
- **Don't** build a generic developer portfolio template — no gray/white background, floating tech-logo hero cloud, or identical card grid with icon + heading + text repeated endlessly.
- **Don't** use `background-clip: text` with a gradient fill on any element. This is an absolute ban. Emphasis is done with weight, size, or a solid Harvest Amber (`#fbbf24`) fill — never a gradient shimmer. The existing `golden-text-fill` class in globals.css violates this rule and should be removed.
- **Don't** use a colored `border-left` or `border-right` greater than 1px as a decorative stripe on any card or list item. The current experience role card uses `border-l-2 border-amber-400/50` — this is the side-stripe pattern and should be replaced with a full border, background tint, or amber text alone.
- **Don't** add amber glow to resting card borders. Glow is earned by interactive state or by the special mint card. Ambient glow on every card reads as cyberpunk decoration.
- **Don't** add a small uppercase tracked kicker above every section heading. The "About Me" and "Tech Stack" labels in the About section are the outer limit; new sections should find other ways to introduce themselves.
- **Don't** use the editorial-typographic aesthetic lane (display serif + italic drop caps + ruled separators + monochromatic restraint). This portfolio is technical and Web3-native, not editorial. That lane is currently saturated with AI-generated brand content.
- **Don't** use gradient text of any kind — `background: linear-gradient(...); background-clip: text; color: transparent` is the exact failure mode. Use `color: #fbbf24` for amber emphasis.
