import { resumeAddress } from "@/constants/smart-contract/resumeContract";

// The resume on IPFS. The wallet button opens it for holders and Card A
// links straight to it.
export const resumeIpfsUrl =
  "https://gateway.pinata.cloud/ipfs/QmYhQMbn48BRFNjM1QvyKE3oTUCaCp37bX458KEqDWBhwg";

export const resumeContract = {
  address: resumeAddress,
  short: `${resumeAddress.slice(0, 6)}…${resumeAddress.slice(-4)}`,
  href: `https://arbiscan.io/address/${resumeAddress.toLowerCase()}`,
};

export const MAX_SUPPLY = 444;

export const resumePage = {
  art: "/assets/nft-image.png",
  artAlt: "Kobs NFT 2025 artwork",
  chip: "Kobs NFT 2025",
  file: "resume.nft",
  pill: "Free, no purchase needed",
  title: "Mint my Resume as an NFT",
  lede: "My resume lives on-chain as proof I ship dApps end to end. Mint a free copy; you only cover the network fee.",
  readCard: {
    title: "Just want to read my CV?",
    body: "Open it right in your browser. No wallet, no sign-up, nothing to install.",
    cta: "View my CV",
  },
  mintCard: {
    title: "Or collect a copy on-chain",
    body: "Mint a free copy to your crypto wallet. The NFT costs nothing; the Arbitrum network just charges a small fee to record it.",
    meta: "Free · 444 copies · Arbitrum",
  },
  faqTitle: "New to NFTs?",
  faqLede: "Here's the plain-English version.",
};

export const resumeFaq = [
  {
    question: "What is this, exactly?",
    answer:
      "It's my CV, published on a blockchain called Arbitrum. Minting gives you your own copy as a digital collectible in your crypto wallet, and anyone can trace where it came from on Arbiscan.",
  },
  {
    question: "Do I have to pay anything?",
    answer:
      "No. The NFT itself is free and nothing goes to me. You only pay the gas fee. Gas is the small network fee every blockchain charges to record a transaction; on Arbitrum it's paid in ETH.",
  },
  {
    question: "I don't have a wallet. Can I still see it?",
    answer:
      "Yes. Tap View my CV. It opens the same resume, hosted on IPFS, right in your browser. No wallet needed.",
  },
  {
    question: "Why put a CV on-chain at all?",
    answer:
      "It's a small, working example of what I do. I built the smart contract, this mint page and the wallet flow, so minting it is the quickest way to try a dApp I made end to end.",
  },
  {
    question: "What do I need to mint?",
    answer:
      "A crypto wallet, like MetaMask or Rainbow, with a little ETH on the Arbitrum network for the fee. Tap Connect Wallet and pick yours.",
  },
  {
    question: "What do I get after minting?",
    answer:
      "Kobs NFT 2025 in your wallet. It holds the complete copy of my resume and professional background, as a verifiable on-chain reference you can open anytime.",
  },
];
