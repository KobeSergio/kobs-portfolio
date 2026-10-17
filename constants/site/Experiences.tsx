import React from "react";

export type Experience = {
  role: string;
  company: string;
  companyLogo: string;
  location: string;
  time: string;
  summary: React.ReactNode;
  links?: ExperienceLink[];
  onchain?: OnchainContract[];
  contributions: Contribution[];
  // Renders as a single row with details on demand.
  compact?: boolean;
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
  images: string[];
  poster?: string;
  product: string;
  impact: string;
  description: React.ReactNode;
  tech: string[];
  link: string;
};

export const experiences: Experience[] = [
  {
    role: "Freelance Fullstack Web3 Developer",
    company: "The Suits",
    companyLogo: "/assets/suits/suits-logo.png",
    location: "Remote · Robinhood Chain",
    time: "Aug 2026 — Present",
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
        images: ["/assets/suits/suits-mint-demo.webm"],
        poster: "/assets/suits/02-mint-page-live.png",
        product: "The Suits Mint",
        description: (
          <ul className="list-disc list-outside space-y-1.5 pl-4 text-sm text-slate-400">
            <li>
              The{" "}
              <b className="font-semibold text-slate-200">ERC-721C mint contract</b>{" "}
              runs phased allowlist windows with per-wallet caps, keeps a
              50-piece airdrop reserve, and enforces creator royalties on every
              resale.
            </li>
            <li>
              The <b className="font-semibold text-slate-200">mint site</b>{" "}
              opens on a closet door, tracks supply and windows live, and ends
              on a <b className="font-semibold text-slate-200">reveal card</b>{" "}
              with each suit&apos;s rank, tier and traits.
            </li>
            <li>
              Handled the{" "}
              <b className="font-semibold text-slate-200">
                art and metadata upload to IPFS
              </b>
              , all 3,000 images pinned and paired with their metadata.
            </li>
            <li>
              Managed the{" "}
              <b className="font-semibold text-slate-200">whole mint</b>: NFT
              holder snapshots, allowlist upload, mint setup, phase scheduling,
              and the live changes on launch day.
            </li>
          </ul>
        ),
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
        images: ["/assets/suits/suits-claim-demo.webm"],
        poster: "/assets/suits/04-claim-page-live.png",
        product: "$SUIT Paycheck",
        description: (
          <ul className="list-disc list-outside space-y-1.5 pl-4 text-sm text-slate-400">
            <li>
              <b className="font-semibold text-slate-200">SuitPaycheck</b> is
              the weekly $SUIT payout for Suits NFT holders, verified on-chain
              so only real holders can claim. Each week holders get 24 hours to
              claim their cut;
              whatever goes unclaimed is burned, so supply only ever goes down.
            </li>
            <li>
              Built the{" "}
              <b className="font-semibold text-slate-200">
                holder snapshot script
              </b>
              : it pulls every Suits owner, then uses the OpenSea API to drop
              any NFT currently listed, so listed suits don&apos;t get paid.
            </li>
            <li>
              The <b className="font-semibold text-slate-200">Payday page</b>{" "}
              counts down to the drop, shows each suit&apos;s cut, and claims
              every open week in one transaction.
            </li>
          </ul>
        ),
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
        images: [
          "/assets/suits/11-dexscreener-suit-pltr.png",
          "/assets/suits/12-uniswap-suit.png",
          "/assets/suits/14-sourcify-paycheck-verified.png",
          "/assets/suits/16-launch-call-sheet.png",
        ],
        product: "$SUIT Token + Uniswap v4 Launch",
        description: (
          <ul className="list-disc list-outside space-y-1.5 pl-4 text-sm text-slate-400">
            <li>
              <b className="font-semibold text-slate-200">$SUIT</b> is a plain
              ERC-20: 1B minted once, 700M to the client&apos;s ops wallet, 300M
              to the paycheck. Burnable, no owner, no tax.
            </li>
            <li>
              <b className="font-semibold text-slate-200">Launch scripts</b>{" "}
              for deploy, verify, wire-to-paycheck, fund and sanity checks,
              each guarded so it won&apos;t run twice or against the wrong
              token.
            </li>
            <li>
              Ran the{" "}
              <b className="font-semibold text-slate-200">Uniswap v4 launch</b>{" "}
              live with the client: trading pair against tokenised Palantir
              stock, starting-price maths, safe custody of the liquidity
              position, every command on a call sheet.
            </li>
          </ul>
        ),
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
    role: "Blockchain Developer",
    company: "VISEO",
    companyLogo: "",
    location: "Remote",
    time: "Jan 2026 — Jun 2026",
    summary:
      "Smart contracts for Hong Kong's first licensed stablecoin, at Anchorpoint Financial.",
    contributions: [
      {
        images: [],
        product: "Sanction & Directory Compliance",
        description: (
          <ul className="list-disc list-outside space-y-1.5 pl-4 text-sm text-slate-400">
            <li>
              Engineered the{" "}
              <b className="font-semibold text-slate-200">
                sanction enforcement contract
              </b>{" "}
              for Anchorpoint Financial&apos;s stablecoin — blocking issuance
              and redemption for any wallet matching a live on-chain sanctions
              directory, meeting Hong Kong licensing requirements.
            </li>
            <li>
              Designed and deployed a{" "}
              <b className="font-semibold text-slate-200">
                platform and user directory contract system
              </b>{" "}
              that serves as the single source of truth for permissioned access
              across Anchorpoint&apos;s stablecoin and tokenised-asset
              operations.
            </li>
          </ul>
        ),
        impact:
          "Sanctioned wallets blocked from issuing or redeeming, enforced on-chain",
        tech: ["Solidity", "Hardhat", "TypeScript", "Chai", "Mocha"],
        link: "",
      },
      {
        images: [],
        product: "On-chain Rate Limiting",
        description: (
          <ul className="list-disc list-outside space-y-1.5 pl-4 text-sm text-slate-400">
            <li>
              Implemented a{" "}
              <b className="font-semibold text-slate-200">
                custom on-chain rate-limiting module
              </b>{" "}
              for Anchorpoint&apos;s stablecoin contracts — enforcing
              per-address call quotas to prevent abuse of minting and
              redemption flows on a live regulated platform.
            </li>
            <li>
              Designed an{" "}
              <b className="font-semibold text-slate-200">
                elevated policy layer
              </b>{" "}
              that routes flagged mint and redemption requests through a
              secondary review — adding a human-in-the-loop gate before
              high-risk transactions are settled on-chain.
            </li>
          </ul>
        ),
        impact:
          "Abuse capped per wallet, with human review on high-risk transactions · ready for tokenised real-world assets",
        tech: ["Solidity", "Hardhat", "TypeScript", "wagmi", "viem", "Ethereum"],
        link: "",
      },
      {
        images: [],
        product: "Smart Contract Test Suite",
        description: (
          <ul className="list-disc list-outside space-y-1.5 pl-4 text-sm text-slate-400">
            <li>
              Authored the unit test suite for Anchorpoint&apos;s stablecoin
              and tokenised-asset platform using Hardhat, Chai, and Mocha — achieving{" "}
              <b className="font-semibold text-slate-200">
                70% coverage across 50+ smart contracts
              </b>{" "}
              before client handoff.
            </li>
            <li>
              Integrated{" "}
              <b className="font-semibold text-slate-200">
                automated testing pipelines
              </b>{" "}
              into the QA workflow — wiring Hardhat test runs into CI so
              contract regressions were caught automatically on every push.
            </li>
          </ul>
        ),
        impact: "70% unit test coverage across 50+ smart contracts",
        tech: ["Hardhat", "Forge", "Chai", "Mocha", "TypeScript"],
        link: "",
      },
    ],
  },

  {
    role: "Chief Technology Officer",
    company: "Kingdomly",
    location: "Remote",
    companyLogo: "",
    time: "Oct 2023 — Dec 2025",
    summary:
      "Architected V2 from scratch and led a 13-person engineering team.",
    contributions: [
      {
        images: ["/assets/creator-demo.webm"],
        product: "Kingdomly Creator + Mint",
        description: (
          <ul className="list-disc list-outside space-y-1.5 pl-4 text-sm text-slate-400">
            <li>
              Built a full{" "}
              <b className="font-semibold text-slate-200">generative art engine</b>{" "}
              — layers, traits, rarity, rules, and 1/1 logic.
            </li>
            <li>
              Shipped customizable{" "}
              <b className="font-semibold text-slate-200">mint gates</b>, phases,
              and forms — allowlists, presales, and KYC.
            </li>
            <li>
              Built the{" "}
              <b className="font-semibold text-slate-200">admin dashboard</b> for
              scheduling, quotas, toggles, and live mint management.
            </li>
            <li>
              Generated{" "}
              <b className="font-semibold text-slate-200">
                auto-provisioned mint pages
              </b>{" "}
              per project — individually load-tested to handle traffic spikes,
              peaking at{" "}
              <b className="font-semibold text-slate-200">60K visitors in a single minute</b>.
            </li>
            <li>
              Shipped{" "}
              <b className="font-semibold text-slate-200">
                gas-free mints on Sophon Chain
              </b>{" "}
              — users mint without holding SOPH to pay network fees.
            </li>
          </ul>
        ),
        impact: "50K+ unique wallets · 144K+ mints · 7K NFT projects launched",
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
        images: ["/assets/bridge-demo.webm"],
        product: "Kingdomly Bridge",
        description: (
          <ul className="list-disc list-outside space-y-1.5 pl-4 text-sm text-slate-400">
            <li>
              Shipped cross-chain NFT transfers across{" "}
              <b className="font-semibold text-slate-200">
                Ethereum, Arbitrum, Optimism, Zora, Base, and Bera
              </b>{" "}
              via LayerZero cross-chain messaging.
            </li>
            <li>
              Built a{" "}
              <b className="font-semibold text-slate-200">
                permissionless bridge setup interface
              </b>{" "}
              — any project can enable cross-chain bridging without custom
              contracts.
            </li>
            <li>
              Delivered custom partner integrations including{" "}
              <b className="font-semibold text-slate-200">Honey Jar&apos;s</b>{" "}
              multi-chain bridge into the Bera ecosystem.
            </li>
            <li>
              Handled{" "}
              <b className="font-semibold text-slate-200">
                LayerZero message verification, refund logic, and gas estimation
              </b>{" "}
              — ensuring transfers landed reliably with no double-bridge incidents.
            </li>
          </ul>
        ),
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
        images: [
          "/assets/marketplace-preview-1.png",
          "/assets/marketplace-preview-2.png",
        ],
        product: "Kingdomly Marketplace",
        description: (
          <ul className="list-disc list-outside space-y-1.5 pl-4 text-sm text-slate-400">
            <li>
              Shipped{" "}
              <b className="font-semibold text-slate-200">v1 on Berachain day one</b>{" "}
              using Reservoir SDK — extending mint drops into active secondary
              trading.
            </li>
            <li>
              Led{" "}
              <b className="font-semibold text-slate-200">
                v2 on Seaport + LimitBreak
              </b>{" "}
              — custom indexer, orderbooks, and multi-chain transaction handling.
            </li>
            <li>
              Kept listings cheap to post and creators paid on every resale,
              using the{" "}
              <b className="font-semibold text-slate-200">ERC721AC + EIP-2981</b>{" "}
              royalty standards.
            </li>
            <li>
              Shipped{" "}
              <b className="font-semibold text-slate-200">
                collection pages, rarity rankings, offer/bid flows
              </b>
              , and a real-time activity feed on top of the orderbook.
            </li>
          </ul>
        ),
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
        images: ["/assets/staking-demo.webm"],
        product: "Kingdomly Staking",
        description: (
          <ul className="list-disc list-outside space-y-1.5 pl-4 text-sm text-slate-400">
            <li>
              Engineered smart contracts —{" "}
              <b className="font-semibold text-slate-200">audited by Hashlock</b>{" "}
              — powering secure, flexible NFT staking pools.
            </li>
            <li>
              Built{" "}
              <b className="font-semibold text-slate-200">
                permissionless pool deployment
              </b>
              : any creator can launch staking for any collection without writing
              code.
            </li>
            <li>
              Delivered a{" "}
              <b className="font-semibold text-slate-200">
                self-serve pool configuration UI
              </b>{" "}
              — creators set reward tokens, lock durations, multipliers, and
              capacity caps from a no-code admin panel.
            </li>
          </ul>
        ),
        impact: "6 staking pools launched · including 1 protocol-level pool",
        tech: ["Next.js", "TypeScript", "Solidity", "Viem", "Firebase", "Vercel"],
        link: "",
      },
      {
        images: ["/assets/kingdomly-docs.png"],
        product: "Kingdomly Docs",
        description: (
          <ul className="list-disc list-outside space-y-1.5 pl-4 text-sm text-slate-400">
            <li>
              Authored{" "}
              <b className="font-semibold text-slate-200">
                end-to-end documentation
              </b>{" "}
              covering Creator, Mint, Marketplace, Staking, and Bridge.
            </li>
            <li>
              Implemented{" "}
              <b className="font-semibold text-slate-200">MDX components</b> and a
              scalable information architecture to stay consistent across rapid
              product iterations.
            </li>
          </ul>
        ),
        impact: "50% less onboarding & support overhead",
        tech: ["Mintlify", "MDX"],
        link: "",
      },
    ],
  },

  {
    role: "DevOps Engineer Intern",
    company: "Stratpoint",
    companyLogo: "",
    location: "Mandaluyong City, Philippines",
    compact: true,
    time: "Jul 2023 — Oct 2023",
    summary:
      "First DevOps intern to skip the cloud fundamentals track, on live infrastructure within a week.",
    contributions: [
      {
        images: ["/assets/stratpoint-page.png"],
        product: "Stratpoint DevOps Internship",
        description: (
          <ul className="list-disc list-outside space-y-1.5 pl-4 text-sm text-slate-400">
            <li>
              Containerized and deployed internal services with{" "}
              <b className="font-semibold text-slate-200">Docker</b> and{" "}
              <b className="font-semibold text-slate-200">Kubernetes</b>.
            </li>
            <li>
              Implemented observability with{" "}
              <b className="font-semibold text-slate-200">Grafana</b> and{" "}
              <b className="font-semibold text-slate-200">Jenkins</b> to track
              uptime and logs.
            </li>
            <li>
              Built a{" "}
              <b className="font-semibold text-slate-200">Telegram alerting</b>{" "}
              system that posts outage and health updates automatically.
            </li>
          </ul>
        ),
        impact:
          "More reliable deploys and faster incident response",
        tech: ["Docker", "Kubernetes", "Grafana", "Jenkins", "Telegram Bot API"],
        link: "",
      },
    ],
  },
];
