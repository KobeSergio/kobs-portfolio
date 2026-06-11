import React from "react";

export type Experience = {
  role: string;
  company: string;
  companyLogo: string;
  location: string;
  time: string;
  summary: React.ReactNode;
  contributions: Contributions[];
};

type Contributions = {
  images: string[];
  product: string;
  impact: string;
  description: React.ReactNode;
  tech: string[];
  link: string;
};

export const experiences: Experience[] = [
  {
    role: "Chief Technology Officer",
    company: "Kingdomly",
    location: "Remote",
    companyLogo: "/assets/kingdomly.png",
    time: "Oct 2023 - Dec 2025",
    summary:
      "Architected Kingdomly's V2 ecosystem from scratch — owning all technical decisions from smart contract design to frontend infrastructure. Scaled and led a 13-person engineering team, shipping 5 production products across multiple EVM chains.",
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
              Integrated a full{" "}
              <b className="font-semibold text-slate-200">multi-wallet stack</b>{" "}
              — MetaMask, WalletConnect, Coinbase Wallet, and Porto — with
              wagmi + viem adapters and EIP-7702 session key support.
            </li>
          </ul>
        ),
        impact: "50K+ unique wallets · 144K+ mint transactions · 7K NFT projects",
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
              Ensured gas-efficient listings and royalty enforcement with{" "}
              <b className="font-semibold text-slate-200">ERC721AC + EIP-2981</b>{" "}
              compliance.
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
        impact: "v1 garnered $50K+ in trading revenue",
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
        images: ["/assets/bridge-demo.webm"],
        product: "Kingdomly Bridge",
        description: (
          <ul className="list-disc list-outside space-y-1.5 pl-4 text-sm text-slate-400">
            <li>
              Shipped cross-chain NFT transfers across{" "}
              <b className="font-semibold text-slate-200">
                Ethereum, Arbitrum, Optimism, Zora, Base, and Bera
              </b>{" "}
              via LayerZero ONFT messaging.
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
        impact: "100K+ NFT transfers · $250K+ revenue generated",
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
        impact: "6 pools deployed, including 1 protocol-level staking pool",
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
        impact: "Reduced onboarding & support overhead by 50%",
        tech: ["Mintlify", "MDX"],
        link: "",
      },
    ],
  },

  {
    role: "DevOps Engineer Intern",
    company: "Stratpoint",
    companyLogo: "/assets/stratpoint.png",
    location: "Mandaluyong City, Philippines",
    time: "Jul 2023 — Oct 2023",
    summary:
      "Joined as the first DevOps intern to skip the cloud fundamentals track — finished the internal curriculum in a week and immediately contributed to live infrastructure. Built containerized deployments, observability pipelines, and automated alerting used by the engineering team.",
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
          "Improved deployment reliability and shortened incident response loops.",
        tech: ["Docker", "Kubernetes", "Grafana", "Jenkins", "Telegram Bot API"],
        link: "",
      },
    ],
  },
];
