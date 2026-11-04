# Product

## Register

brand

## Users

**Primary**: Startup founders and CTOs evaluating Kobe for a role or contract. They move fast, skim hard, and make a hiring decision in under two minutes. They need to feel the quality of the work before they read a word.

**Secondary**: Developer peers and senior engineers scoping technical depth — do the stack choices make sense, is the code and product craft actually there, is this someone worth working with?

**Tertiary**: Web3 / crypto community members who already know the space and will judge by the details: does the NFT resume work, does the wallet connect smoothly, does the UI feel like it was built by someone who actually ships dApps?

**Context**: These visitors arrive alone, often on a laptop or desktop, during a focused evaluation moment — not casual browsing. The first impression carries disproportionate weight. They are not here to be entertained; they are here to be convinced.

**Job to be done**: Confirm that Kobe is the real deal — technically capable, product-minded, and ready to ship — and find an easy path to reach out or book a call.

## Product Purpose

Personal portfolio for Christian Kobe Sergio (Kobs), Fullstack Web3 Developer based in the Philippines, open to remote roles and contracts. The portfolio exists to convert qualified visitors into conversations. Success looks like a founder or technical lead reaching the contact section with enough conviction to send a message or book a call.

The portfolio's secondary function is demonstration: the NFT resume mint, wallet integration, and contribution graph are not decoration — they are live proof-of-work. The site itself is a shipped product.

## Brand Personality

**Bold, technical, ambitious.**

Voice tone: Confident and direct, never boastful. Writes like an engineer who has led teams, not like a junior developer asking for a chance. Uses precision where possible ("shipped 7+ products", "13 cross-functional devs") and avoids vague superlatives ("passionate about", "love building things"). The copy is tight and true.

Emotional goal: Arrive with curiosity. Leave with confidence.

## Anti-references

**Cyberpunk Web3 aesthetic** — neon green on black, glitch-text effects, anime-style motion, skull/degen iconography. On-the-nose Web3 signaling that repels non-crypto visitors and dates within months. The portfolio must be readable and credible to a non-Web3 founder.

**Generic developer portfolio template** — hero with name + subtitle + floating tech-logo cloud + identical card grid of projects, all on a gray/white background. No POV, no risk, no signal. Indistinguishable from 10,000 others. If someone could describe this portfolio without mentioning any specific design choice, it has failed.

## Design Principles

1. **Craft is the credential.** The portfolio's UI quality is proof of what Kobe builds. Every detail — spacing, motion timing, contrast, interactive behavior — is auditioned by the visitor as evidence of capability. There is no separation between "the design" and "the work."

2. **Authority without tropes.** Neither the neon-Web3 aesthetic nor the gray-template default. The amber-on-dark identity already breaks from both, but patterns must stay distinctive. Clichés (gradient text fills, side-stripe card accents, identical card grids, uniform fade-on-scroll everywhere) actively undermine the authority signal.

3. **Signal density, not noise.** Mixed audience, fast movers. Every section earns its presence or it goes. Copy is tight. Stats are specific. Motion enhances reading rather than demanding attention. No filler sections, no decorative callouts.

4. **Web3-native, human-legible.** On-chain features — the NFT resume mint, live supply counter, wallet connect — are differentiators, not tribal signals. They must be immediately legible to a non-crypto founder: what is it, why does it matter, how do I interact with it. Context over jargon.

5. **Motion as architecture.** The particle canvas hero sets the mood for the whole page. Every subsequent animation should follow from that opening, not perform independently. Entrance reveals enhance already-visible content; they never gate it. Reduced-motion visitors get the same information, just without the choreography.

## Accessibility & Inclusion

WCAG AA as the baseline: 4.5:1 contrast for body text, 3:1 for large text (≥18px or bold ≥14px). The current slate-400 (#94a3b8) on slate-950 (#020618) pairing is borderline and should be verified — text that fails should move toward slate-200 or white.

All animations require `@media (prefers-reduced-motion: reduce)` fallbacks. This is both an accessibility requirement and an obligation given the canvas-heavy hero.

Interactive elements (carousel buttons, wallet connect, NFT mint, nav links) need visible focus states and appropriate ARIA labels. The current arrow buttons have `aria-label` — maintain this pattern throughout.
