# Portfolio Redesign — Design Spec
_2026-06-10_

## Decisions

| Question | Decision |
|---|---|
| Color theme | Purple hero (Aether Flow as-is) → amber/gold identity for all sections below |
| Navigation | No nav bar — pure scroll experience |
| About layout | Two-column: image carousel + tech stack left, bio + NFT mint right |
| NFT mint | Stays — do not touch web3 code |

## Section-by-section changes

### ① Hero (NEW)
- Replace `ScrollCubes` background with `AetherFlowHero` canvas particle component
- Mouse repulsion + white connection lines near cursor — built into component, no changes needed
- Badge text: `"Fullstack Web3 Developer"` (replaces `"Dynamic Rendering Engine"`)
- Title: `"Hi, I'm Kobs"` (replaces `"Aether Flow"`)
- Subtitle: existing tagline from current `Headline.tsx`
- Buttons: keep existing `"Get to know me"` + `"Book a call"`
- Component lives at `/components/ui/aether-flow-hero.tsx`
- `Headline.tsx` renders the hero and overlays Kobe's copy on top

### ② About (CLEANED UP)
- Keep exact two-column layout (image/skills left, bio/mint right)
- Remove duplicate carousel JSX — single responsive implementation
- NFT mint card: add subtle amber glow border (`border-amber-400/30 shadow-amber-400/10`)
- Do not touch wagmi hooks, `useReadContract`, `CustomConnectAndMintButton`, or any web3 logic
- Social icons stay in the "About Me" header row

### ③ Experience (SPACING FIX)
- Apply consistent `max-w-6xl mx-auto px-4 md:px-8` (matches other sections)
- Tighten type scale on contribution cards: description text `text-sm`, impact line `text-xs`
- No structural changes

### ④ GitHub Contribution Graph
- Unchanged

### ⑤ Projects (SPACING FIX)
- Apply consistent `max-w-6xl mx-auto px-4 md:px-8`
- No structural changes

### ⑥ Contact
- Unchanged

### ⑦ Footer
- Unchanged

## Dependencies to install
- `framer-motion` — required by AetherFlowHero
- `lucide-react` — required by AetherFlowHero

## Files to create
- `/components/ui/aether-flow-hero.tsx` — the particle canvas component

## Files to modify
- `/components/page-sections/Headline.tsx` — swap background, update copy
- `/components/page-sections/About.tsx` — remove duplicate carousel, add mint card border
- `/components/page-sections/Experiences.tsx` — spacing consistency
- `/components/page-sections/Projects.tsx` — spacing consistency
- `app/page.tsx` — no bg gradient conflict with full-black hero canvas

## Constraints
- Do not break any wagmi/web3 code
- Keep all existing content (bio, experiences, projects data) — layout only
- AetherFlowHero canvas handles its own black background — page bg gradient won't conflict
