export type Experience = {
  slug: string;
  role: string;
  company: string;
  companyLogo: string;
  // Brand icon for a company with no logo file.
  logoIcon?: "solana";
  location: string;
  time: string;
  summary: string;
  links?: ExperienceLink[];
  onchain?: OnchainContract[];
  // Builds. Each one is a file under /experience/[company]/[build].
  contributions: Contribution[];
  // Work with no build files. It renders inside the company's README.md.
  notes?: ReadmeNotes;
};

export type ExperienceLinkIcon = "globe" | "opensea" | "chart";

export type ExperienceLink = {
  label: string;
  href: string;
  icon?: ExperienceLinkIcon;
};

export type OnchainContract = {
  label: string;
  address: string;
  href: string;
};

export type Contribution = {
  slug: string;
  images: string[];
  poster?: string;
  product: string;
  impact: string;
  // "How I built it" bullets. **text** renders bold.
  bullets: string[];
  tech: string[];
  link: string;
};

export type ReadmeNotes = {
  impact: string;
  bullets: string[];
  tech: string[];
  images?: string[];
  poster?: string;
};

export const experiences: Experience[] = [
  {
    slug: "solana-launch-builder",
    role: "Freelance Fullstack Web3 Developer",
    company: "Solana Launch Builder",
    companyLogo: "",
    logoIcon: "solana",
    location: "Remote · Solana",
    time: "Oct 2026 – Nov 2026",
    summary:
      "Four memecoin dApps for one client in under three weeks, all from one scaffold, on about $50 a month of infra. I owned each one solo: the pitch to the client, the build, the brand and the X launch.",
    contributions: [
      {
        slug: "agentboard.fun",
        images: ["/assets/launch-builder/agentboard-demo.mp4"],
        poster: "/assets/launch-builder/agentboard-poster.jpg",
        product: "agentboard.fun",
        bullets: [
          "AI agents with **their own Solana wallets**, sealed server-side, read the board and the news, then trade, launch and post. Owners fund an agent and set its limits.",
          "Each agent runs on **Claude Haiku 4.5, Sonnet 5.5 or Opus 5.5** with strict tool use: buy, sell, launch, post, remember, rewrite its own personality.",
          "Claude only returns tool calls. Every order then passes the owner's limits and a **byte-level policy check** (pump.fun and PumpSwap only, the agent's own accounts only, capped priority fees) before one signing module signs it, so a prompt injection can't move funds.",
        ],
        impact:
          "AI agents trading from their own Solana wallets · every order policy-checked before signing · model calls metered and settled in USDC",
        tech: [
          "Next.js 16",
          "TypeScript",
          "Anthropic SDK",
          "Claude Haiku / Sonnet / Opus",
          "Solana web3.js",
          "pump.fun SDK",
          "PumpPortal",
          "Supabase",
          "Vercel",
        ],
        link: "https://www.agentboard.fun",
      },
      {
        slug: "sniffinu.fun",
        images: ["/assets/launch-builder/sniffinu-demo.mp4"],
        poster: "/assets/launch-builder/sniffinu-poster.jpg",
        product: "sniffinu.fun",
        bullets: [
          "Paste a contract address and get **12 on-chain rug checks**, each with its evidence and a link, plus a crawl of the project's own site for $SNIFFINU holders. Notes, never a verdict.",
          "**Claude Haiku 5.5** writes the cited notes under a hard monthly cap. Past the cap, an offline path has a Claude Code session write them from exported fact sheets instead of the API.",
          "The **holder gate** takes a signed message plus an on-chain balance read and nothing else. A Vercel cron re-sniffs coins on a schedule, and every figure on screen is live chain data.",
        ],
        impact:
          "12 on-chain checks per sniff, every flag with its evidence · 973 tests · Claude notes under a hard monthly cap",
        tech: [
          "Next.js 16",
          "TypeScript",
          "Vitest",
          "Anthropic SDK",
          "Solana web3.js",
          "DexScreener",
          "Supabase",
          "Vercel cron",
          "Claude Code",
        ],
        link: "https://www.sniffinu.fun",
      },
      {
        slug: "partnerpad.fun",
        images: ["/assets/launch-builder/partnerpad-demo.mp4"],
        poster: "/assets/launch-builder/partnerpad-poster.jpg",
        product: "partnerpad.fun",
        bullets: [
          "Pick any coin already running on Solana. **Claude Haiku** designs its partner (name, ticker, description and image prompt as validated JSON) and **fal.ai's nano-banana** edit model draws it from the original coin's own picture.",
          "You launch the partner from your own wallet through **PumpPortal** and trade both side by side, with live numbers from DexScreener and a direct read of the pump.fun bonding curve.",
          "**Non-custodial** end to end: launches and swaps are signed in the user's wallet, and the submit route verifies a launched coin's IPFS metadata image by content hash before it goes on the board.",
        ],
        impact:
          "AI designs and draws a partner for any running Solana coin · launch and trade both side by side · signed in your own wallet",
        tech: [
          "Next.js 16",
          "TypeScript",
          "Anthropic SDK (Haiku)",
          "fal.ai",
          "Solana Wallet Adapter",
          "PumpPortal",
          "Jupiter",
          "Filebase (IPFS)",
          "Supabase",
        ],
        link: "https://www.partnerpad.fun",
      },
      {
        slug: "cliplaunchpad.fun",
        images: ["/assets/launch-builder/cliplaunchpad-demo.mp4"],
        poster: "/assets/launch-builder/cliplaunchpad-poster.jpg",
        product: "cliplaunchpad.fun",
        bullets: [
          "Pick a meme from a clip, launch it on pump.fun from your own wallet, trade it on the board. The first of the four pads.",
          "The **shared scaffold** every pad starts from: Next.js on Vercel, Supabase with per-pad tables, Filebase for IPFS pins, Solana Wallet Adapter, PumpPortal for launches, Jupiter for swaps, DexScreener plus bonding curve reads for live numbers.",
          "A **preflight script** rehearses a full launch against Solana without spending SOL. Seeded the board with my own launches and ran the X launch, then rolled the code forward as the next pad's base.",
        ],
        impact:
          "First of the four · launch a coin from a clip in your own wallet · trade it on the board",
        tech: [
          "Next.js 16",
          "TypeScript",
          "Tailwind 4",
          "Solana Wallet Adapter",
          "PumpPortal",
          "Jupiter",
          "DexScreener",
          "Supabase",
          "Filebase (IPFS)",
          "Vercel",
        ],
        link: "https://www.cliplaunchpad.fun",
      },
    ],
  },

  {
    slug: "the-suits",
    role: "Freelance Fullstack Web3 Developer",
    company: "The Suits",
    companyLogo: "/assets/suits/suits-logo.png",
    location: "Remote · Robinhood Chain",
    time: "Aug 2026 – Oct 2026",
    summary:
      "Sole engineer on a 3,000-piece NFT collection, from spec to launch-day ops.",
    links: [
      { label: "Live site", href: "https://www.putthesuiton.xyz", icon: "globe" },
      {
        label: "OpenSea",
        href: "https://opensea.io/collection/the-suits-nft",
        icon: "opensea",
      },
      {
        label: "Dexscreener chart",
        href: "https://dexscreener.com/robinhood/0xd98b860a51a5da17fd2e83124db9981a85060224fc8b9240e5466edb86d64c16",
        icon: "chart",
      },
    ],
    onchain: [
      {
        label: "TheSuits NFT",
        address: "0x05C2174aa494BBDf72AEeab0cA3C10216D33B297",
        href: "https://robinscan.io/address/0x05C2174aa494BBDf72AEeab0cA3C10216D33B297",
      },
      {
        label: "SuitPaycheck",
        address: "0xb127bE00e0Cd39a3cE14591F74b7f86c87D054a6",
        href: "https://robinscan.io/address/0xb127bE00e0Cd39a3cE14591F74b7f86c87D054a6",
      },
      {
        label: "$SUIT token",
        address: "0x87A78590D563F0EFC62192239af46707FFF74386",
        href: "https://robinscan.io/address/0x87A78590D563F0EFC62192239af46707FFF74386",
      },
    ],
    contributions: [
      {
        slug: "mint",
        images: ["/assets/suits/suits-mint-demo.webm"],
        poster: "/assets/suits/02-mint-page-live.png",
        product: "The Suits Mint",
        bullets: [
          "The **ERC-721C mint contract** runs phased allowlist windows with per-wallet caps, keeps a 50-piece airdrop reserve, and enforces creator royalties on every resale.",
          "The **mint site** opens on a closet door, tracks supply and windows live, and ends on a **reveal card** with each suit's rank, tier and traits.",
          "Handled the **art and metadata upload to IPFS**, all 3,000 images pinned and paired with their metadata.",
          "Managed the **whole mint**: NFT holder snapshots, allowlist upload, mint setup, phase scheduling, and the live changes on launch day.",
        ],
        impact:
          "3,000 minted · sold out ~2 h after opening · 691 holders · $36K+ resale volume",
        tech: [
          "Next.js",
          "TypeScript",
          "Solidity",
          "ERC-721C",
          "Foundry",
          "wagmi / viem",
          "IPFS (Filebase)",
          "Playwright",
          "Vercel",
        ],
        link: "",
      },
      {
        slug: "paycheck",
        images: ["/assets/suits/suits-claim-demo.webm"],
        poster: "/assets/suits/04-claim-page-live.png",
        product: "$SUIT Paycheck",
        bullets: [
          "**SuitPaycheck** is the weekly $SUIT payout for Suits NFT holders, verified on-chain so only real holders can claim. Each week holders get 24 hours to claim their cut; whatever goes unclaimed is burned, so supply only ever goes down.",
          "Built the **holder snapshot script**: it pulls every Suits owner, then uses the OpenSea API to drop any NFT currently listed, so listed suits don't get paid.",
          "The **Payday page** counts down to the drop, shows each suit's cut, and claims every open week in one transaction.",
        ],
        impact:
          "657 holders paid in week one · 40% claimed in the first hour · 300M $SUIT set aside for payouts",
        tech: [
          "Solidity",
          "OpenZeppelin",
          "Foundry",
          "Node.js",
          "Merkle trees",
          "OpenSea API",
          "Next.js",
          "wagmi",
          "Playwright",
        ],
        link: "",
      },
      {
        slug: "token-launch",
        images: [
          "/assets/suits/11-dexscreener-suit-pltr.png",
          "/assets/suits/12-uniswap-suit.png",
          "/assets/suits/14-sourcify-paycheck-verified.png",
          "/assets/suits/16-launch-call-sheet.png",
        ],
        product: "$SUIT Token + Uniswap v4 Launch",
        bullets: [
          "**$SUIT** is a plain ERC-20: 1B minted once, 700M to the client's ops wallet, 300M to the paycheck. Burnable, no owner, no tax.",
          "**Launch scripts** for deploy, verify, wire-to-paycheck, fund and sanity checks, each guarded so it won't run twice or against the wrong token.",
          "Ran the **Uniswap v4 launch** live with the client: trading pair against tokenised Palantir stock, starting-price maths, safe custody of the liquidity position, every command on a call sheet.",
        ],
        impact:
          "3,100 trades from 728 traders in the first 24 h · live on Uniswap 7 Sep 2026 · 1B $SUIT supply",
        tech: [
          "Solidity",
          "Foundry",
          "Uniswap v4",
          "Dexscreener",
          "Blockscout / Sourcify",
          "Bash",
          "Node.js",
        ],
        link: "",
      },
    ],
  },

  {
    slug: "viseo",
    role: "Blockchain Developer",
    company: "VISEO",
    companyLogo: "/assets/logos/viseo.png",
    location: "Remote",
    time: "Jan 2026 – Jun 2026",
    summary:
      "Smart contracts for Hong Kong's first licensed stablecoin, at Anchorpoint Financial.",
    contributions: [
      {
        slug: "sanction-directory-compliance",
        images: [],
        product: "Sanction & Directory Compliance",
        bullets: [
          "Engineered the **sanction enforcement contract** for Anchorpoint Financial's stablecoin, blocking issuance and redemption for any wallet matching a live on-chain sanctions directory, meeting Hong Kong licensing requirements.",
          "Designed and deployed a **platform and user directory contract system** that serves as the single source of truth for permissioned access across Anchorpoint's stablecoin and tokenised-asset operations.",
        ],
        impact:
          "Sanctioned wallets blocked from issuing or redeeming, enforced on-chain",
        tech: ["Solidity", "Hardhat", "TypeScript", "Chai", "Mocha"],
        link: "",
      },
      {
        slug: "onchain-rate-limiting",
        images: [],
        product: "On-chain Rate Limiting",
        bullets: [
          "Implemented a **custom on-chain rate-limiting module** for Anchorpoint's stablecoin contracts, enforcing per-address call quotas to prevent abuse of minting and redemption flows on a live regulated platform.",
          "Designed an **elevated policy layer** that routes flagged mint and redemption requests through a secondary review, adding a human-in-the-loop gate before high-risk transactions are settled on-chain.",
        ],
        impact:
          "Abuse capped per wallet, with human review on high-risk transactions · ready for tokenised real-world assets",
        tech: ["Solidity", "Hardhat", "TypeScript", "wagmi", "viem", "Ethereum"],
        link: "",
      },
      {
        slug: "smart-contract-test-suite",
        images: [],
        product: "Smart Contract Test Suite",
        bullets: [
          "Authored the unit test suite for Anchorpoint's stablecoin and tokenised-asset platform using Hardhat, Chai, and Mocha, achieving **70% coverage across 50+ smart contracts** before client handoff.",
          "Integrated **automated testing pipelines** into the QA workflow, wiring Hardhat test runs into CI so contract regressions were caught automatically on every push.",
        ],
        impact: "70% unit test coverage across 50+ smart contracts",
        tech: ["Hardhat", "Forge", "Chai", "Mocha", "TypeScript"],
        link: "",
      },
    ],
  },

  {
    slug: "kingdomly",
    role: "Lead Developer / CTO",
    company: "Kingdomly",
    location: "Remote",
    companyLogo: "/assets/logos/kingdomly.svg",
    time: "Oct 2023 – Dec 2025",
    summary:
      "Architected V2 from scratch and led a 13-person engineering team.",
    contributions: [
      {
        slug: "creator-mint",
        images: ["/assets/creator-demo.webm"],
        product: "Kingdomly Creator + Mint",
        bullets: [
          "Built a full **generative art engine**: layers, traits, rarity, rules, and 1/1 logic.",
          "Shipped customizable **mint gates**, phases, and forms: allowlists, presales, and KYC.",
          "Built the **admin dashboard** for scheduling, quotas, toggles, and live mint management.",
          "Generated **auto-provisioned mint pages** per project, individually load-tested to handle traffic spikes, peaking at **60K visitors in a single minute**.",
          "Shipped **gas-free mints on Sophon Chain**: users mint without holding SOPH to pay network fees.",
        ],
        impact:
          "$8M+ volume traded · 50K+ unique wallets · 144K+ mints · 7K NFT projects launched",
        tech: [
          "Next.js",
          "TypeScript",
          "Solidity",
          "IPFS",
          "Node.js",
          "PostgreSQL",
          "AWS",
          "Vercel",
        ],
        link: "",
      },
      {
        slug: "bridge",
        images: ["/assets/bridge-demo.webm"],
        product: "Kingdomly Bridge",
        bullets: [
          "Shipped cross-chain NFT transfers across **Ethereum, Arbitrum, Optimism, Zora, Base, and Bera** via LayerZero cross-chain messaging.",
          "Built a **permissionless bridge setup interface**: any project can enable cross-chain bridging without custom contracts.",
          "Delivered custom partner integrations including **Honey Jar's** multi-chain bridge into the Bera ecosystem.",
          "Handled **LayerZero message verification, refund logic, and gas estimation**, ensuring transfers landed reliably with no double-bridge incidents.",
        ],
        impact: "100K+ NFTs moved between chains · $250K+ revenue",
        tech: [
          "Next.js",
          "TypeScript",
          "Solidity",
          "LayerZero",
          "Viem",
          "PostgreSQL",
          "Docker",
          "AWS",
        ],
        link: "",
      },
      {
        slug: "marketplace",
        images: [
          "/assets/marketplace-preview-1.png",
          "/assets/marketplace-preview-2.png",
        ],
        product: "Kingdomly Marketplace",
        bullets: [
          "Shipped **v1 on Berachain day one** using Reservoir SDK, extending mint drops into active secondary trading.",
          "Led **v2 on Seaport + LimitBreak**: custom indexer, orderbooks, and multi-chain transaction handling.",
          "Kept listings cheap to post and creators paid on every resale, using the **ERC721AC + EIP-2981** royalty standards.",
          "Shipped **collection pages, rarity rankings, offer/bid flows**, and a real-time activity feed on top of the orderbook.",
        ],
        impact: "$50K+ trading revenue from v1",
        tech: [
          "Next.js",
          "TypeScript",
          "Solidity",
          "Reservoir SDK",
          "Seaport",
          "Subgraph / Indexer",
          "Vercel",
        ],
        link: "",
      },
      {
        slug: "staking",
        images: ["/assets/staking-demo.webm"],
        product: "Kingdomly Staking",
        bullets: [
          "Engineered smart contracts, **audited by Hashlock**, powering secure, flexible NFT staking pools.",
          "Built **permissionless pool deployment**: any creator can launch staking for any collection without writing code.",
          "Delivered a **self-serve pool configuration UI**: creators set reward tokens, lock durations, multipliers, and capacity caps from a no-code admin panel.",
        ],
        impact: "6 staking pools launched · including 1 protocol-level pool",
        tech: ["Next.js", "TypeScript", "Solidity", "Viem", "Firebase", "Vercel"],
        link: "",
      },
      {
        slug: "docs",
        images: ["/assets/kingdomly-docs.png"],
        product: "Kingdomly Docs",
        bullets: [
          "Authored **end-to-end documentation** covering Creator, Mint, Marketplace, Staking, and Bridge.",
          "Implemented **MDX components** and a scalable information architecture to stay consistent across rapid product iterations.",
        ],
        impact: "50% less onboarding & support overhead",
        tech: ["Mintlify", "MDX"],
        link: "",
      },
    ],
  },

  {
    slug: "stratpoint",
    role: "DevOps Engineer Intern",
    company: "Stratpoint",
    companyLogo: "/assets/logos/stratpoint.png",
    location: "Mandaluyong City, Philippines",
    time: "Jul 2023 – Oct 2023",
    summary:
      "First DevOps intern to skip the cloud fundamentals track, on live infrastructure within a week.",
    contributions: [],
    notes: {
      images: ["/assets/stratpoint-page.png"],
      bullets: [
        "Containerized and deployed internal services with **Docker** and **Kubernetes**.",
        "Implemented observability with **Grafana** and **Jenkins** to track uptime and logs.",
        "Built a **Telegram alerting** system that posts outage and health updates automatically.",
      ],
      impact: "More reliable deploys and faster incident response",
      tech: ["Docker", "Kubernetes", "Grafana", "Jenkins", "Telegram Bot API"],
    },
  },
];
