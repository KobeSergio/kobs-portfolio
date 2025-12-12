import { Experience } from "@/components/ExperienceCard";

export const experiences: Experience[] = [
  {
    role: "Chief Technology Officer",
    company: "Kingdomly",
    location: "Remote",
    companyLogo: "/assets/kingdomly.png",
    time: "Oct 2023 - Dec 2025",
    summary: (
      <div className="space-y-4">
        <p className="text-sm text-slate-200">
          As CTO, I architected and led the development of the{" "}
          <span className="font-semibold text-slate-50">
            Kingdomly V2 ecosystem
          </span>
          , owning both product direction and technical execution.
        </p>

        <div className="grid gap-6 md:grid-cols-[1.5fr,1fr] md:items-start">
          {/* LEFT – responsibilities */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-[0.18em] text-amber-300/80">
              What I Led
            </h4>
            <ul className="list-disc list-outside space-y-2 text-sm text-slate-200 pl-5">
              <li>
                Built a{" "}
                <span className="font-semibold text-slate-50">
                  permissionless NFT launchpad
                </span>{" "}
                with multi-chain marketplace, bridge, and staking platform
                empowering creators to launch and scale projects{" "}
                <span className="font-semibold text-slate-50">
                  without writing code
                </span>
                .
              </li>
              <li>
                Directed a{" "}
                <span className="font-semibold text-slate-50">
                  13-person engineering team
                </span>{" "}
                and aligned product execution with business goals.
              </li>
              <li>
                Collaborated closely with creators and founders to take projects
                from concept to launch and active secondary market trading.
              </li>
            </ul>
          </div>
        </div>
      </div>
    ),
    contributions: [
      {
        images: ["/assets/creator-demo.webm"],
        product: "Kingdomly Creator + Mint",
        description: (
          <div className="space-y-2">
            <p className="text-slate-200">
              I led the architecture and development of Kingdomly&apos;s no-code
              creator and mint suite, building an generative art engine, IPFS
              uploader, mint gates, mint phases, mint forms, and admin dashboard
              that empowered creators to launch and scale NFT projects without
              writing code.
            </p>

            <ul className="list-disc list-outside space-y-1 text-slate-200 pl-5">
              <li>
                Built a full <b>generative art engine</b> supporting layers,
                traits, rarity, rules, and 1/1 logic.
              </li>
              <li>
                Developed the integrated <b>IPFS uploader</b> for assets and
                metadata generation.
              </li>
              <li>
                Implemented customizable <b>mint gates</b> for allowlists,
                presales, and eligibility logic.
              </li>
              <li>
                Designed <b>mint phases</b> with independent pricing and supply
                controls.
              </li>
              <li>
                Created <b>mint forms</b> for pre-mint registration, KYC, and
                collector data gathering.
              </li>
              <li>
                Built the <b>admin dashboard</b> for scheduling, quotas,
                toggles, and live mint management.
              </li>
            </ul>
          </div>
        ),
        impact: "50K+ unique wallets, 144K+ mint transactions, 7K NFT projects",
        tech: [
          "Next.js",
          "TypeScript",
          "Tailwind",
          "Viem",
          "ERC721A/AC",
          "Solidity",
          "React",
          "Node.js",
          "PostgreSQL",
          "Prisma",
          "Docker",
          "WebSockets",
          "AWS",
          "Vercel",
        ],
        link: "https://kingdomly.com/create",
      },
      //Marketplace
      {
        images: [
          "/assets/marketplace-preview-1.png",
          "/assets/marketplace-preview-2.png",
        ],
        product: "Kingdomly Marketplace",
        description: (
          <div className="space-y-2">
            <p className="text-slate-200">
              Designed and engineered Kingdomly&apos;s cross-chain NFT
              marketplace—a seamless platform enabling users to discover, buy,
              and sell NFTs across supported EVM networks, including launchpad
              collections and third-party projects.
            </p>
            <ul className="list-disc list-outside space-y-1 text-slate-200 pl-5">
              <li>
                Built an <b>integrated orderbook</b> and transaction system
                supporting instant minting, secondary sales, and multi-chain
                listings.
              </li>
              <li>
                Developed smart contracts for secure and gas-efficient listing,
                bidding, and royalty payouts, alongside robust ERC721AC/EIP2981
                compliance.
              </li>
            </ul>
          </div>
        ),
        impact: "Shipped product to alpha version",
        tech: [
          "Next.js",
          "React",
          "Solidity",
          "TypeScript",
          "Viem",
          "ERC721AC",
          "Seaport",
          "Payment Processor (LimitBreak)",
          "PostgreSQL",
          "Prisma",
          "RabbitMQ",
          "Redis",
          "The Graph / Envio / Reservoir",
          "Docker",
          "AWS",
          "Vercel",
        ],
        link: "https://kingdomly.com/marketplace",
      },
      //Bridge
      {
        images: ["/assets/bridge-demo.webm"],
        product: "Kingdomly Bridge",
        description: (
          <div className="space-y-2">
            <p className="text-slate-200">
              Designed and built Kingdomly&apos;s ONFT-powered NFT bridge,
              enabling seamless cross-chain transfers across major EVM networks
              and providing creators a permissionless way to make their NFTs
              bridgeable.
            </p>

            <ul className="list-disc list-outside space-y-1 text-slate-200 pl-5">
              <li>
                Implemented LayerZero ONFT messaging among multiple chains to
                progress with NFT bridging.
              </li>
              <li>
                Shipped multi-chain support for Ethereum, Arbitrum, Optimism,
                Zora, Base, and Bera.
              </li>
              <li>
                Created a <b>permissionless bridge setup interface</b> allowing
                any project to onboard and enable cross-chain bridging without
                custom contracts.
              </li>
              <li>
                Delivered custom partner integrations, including Honey
                Jar&apos;s multi-chain bridge into the Bera ecosystem.
              </li>
            </ul>
          </div>
        ),
        impact: "100K+ NFT transfers, $250k+ revenue generated",
        tech: [
          "Next.js",
          "TypeScript",
          "Tailwind",
          "Viem",
          "ERC721A/AC",
          "Solidity",
          "React",
          "Node.js",
          "PostgreSQL",
          "Prisma",
          "Docker",
          "AWS",
          "Vercel",
        ],
        link: "https://kingdomly.com/bridge",
      },
      //Staking

      {
        images: ["/assets/staking-demo.webm"],
        product: "Kingdomly Staking",
        description: (
          <div className="space-y-2">
            <p className="text-slate-200">
              Designed and built Kingdomly&apos;s permissionless NFT staking
              platform, enabling any creator to deploy their own audited staking
              pools and reward their holders without writing code.
            </p>

            <ul className="list-disc list-outside space-y-1 text-slate-200 pl-5">
              <li>
                Engineered the smart contract architecture—audited by{" "}
                <b>Hashlock</b>—that powers secure and flexible NFT staking
                pools.
              </li>
              <li>
                Developed a permissionless pool deployment flow allowing
                creators to launch staking programs for any NFT collection.
              </li>
              <li>
                Built yield logic enabling stakers to earn rewards based on the
                liquidity deposited into each pool.
              </li>
              <li>
                Delivered a full frontend + admin experience for creators to
                configure reward tokens, durations, multipliers, and pool
                settings.
              </li>
            </ul>
          </div>
        ),
        impact: "6 pools deployed, 1 protocol-level staking pool",
        tech: [
          "Next.js",
          "TypeScript",
          "Tailwind",
          "Viem",
          "ERC721A/AC",
          "Solidity",
          "React",
          "Node.js",
          "PostgreSQL",
          "Prisma",
          "Docker",
          "AWS",
          "Vercel",
        ],
        link: "https://kingdomly.com/staking",
      },

      //Docs
      {
        images: ["/assets/kingdomly-docs.png"],
        product: "Kingdomly Docs",
        description: (
          <div className="space-y-2">
            <p className="text-slate-200">
              Built Kingdomly&apos;s full documentation ecosystem using Mintlify
              and MDX, dramatically improving onboarding, reducing support load,
              and enabling creators to self-serve across our entire product
              suite.
            </p>

            <ul className="list-disc list-outside space-y-1 text-slate-200 pl-5">
              <li>
                Structured and authored end-to-end documentation covering
                Creator, Mint, Marketplace, Staking, and Bridge products.
              </li>
              <li>
                Implemented <b>MDX components</b> for guides, examples, and code
                snippets to improve clarity for all users.
              </li>
              <li>
                Designed a <b>scalable information architecture</b> to keep docs
                consistent across rapid product iterations.
              </li>
            </ul>
          </div>
        ),
        impact:
          "Reduced onboarding & support overhead by 50% and improved user self-service across all products.",
        tech: ["Mintlify", "MDX"],
        link: "https://docs.kingdomly.com/",
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
      "Joined as the first DevOps intern to skip the cloud fundamentals track, finished the internal curriculum in a week, and shifted straight into day-to-day infrastructure work.",
    contributions: [
      {
        images: ["/assets/stratpoint-page.png"],
        product: "Stratpoint DevOps Internship",
        description: (
          <div className="space-y-3">
            <p className="text-slate-200">
              Shipped infra improvements while embedded with the DevOps team,
              focusing on containerization, observability, and incident
              alerting.
            </p>
            <ul className="list-disc list-outside space-y-2 text-sm text-slate-200 pl-5">
              <li>
                Containerized and deployed internal services with <b>Docker</b>{" "}
                and <b>Kubernetes</b>.
              </li>
              <li>
                Implemented observability with <b>Grafana</b>, <b>Jenkins</b>,
                and <b>Docker</b> to track uptime and logs.
              </li>
              <li>
                Built a <b>Telegram alerting</b> system that posts outage and
                health updates automatically.
              </li>
            </ul>
          </div>
        ),
        impact:
          "Improved deployment reliability and shortened incident response loops for internal services.",
        tech: [
          "Docker",
          "Kubernetes",
          "Grafana",
          "Jenkins",
          "Telegram Bot API",
        ],
        link: "",
      },
    ],
  },
];
