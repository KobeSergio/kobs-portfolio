import type React from "react";
import {
  RiFirebaseFill,
  RiNextjsFill,
  RiTailwindCssFill,
  RiNodejsFill,
} from "react-icons/ri";
import { BiLogoTypescript, BiLogoPostgresql } from "react-icons/bi";
import { SiIpfs, SiSolidity, SiWeb3Dotjs } from "react-icons/si";
import { FaAws } from "react-icons/fa";
export type skills = { label: string; icon: React.ReactNode }[];

export const skills: skills = [
  {
    label: "TypeScript",
    icon: <BiLogoTypescript />,
  },
  {
    label: "Solidity",
    icon: <SiSolidity />,
  },
  {
    label: "Next.js",
    icon: <RiNextjsFill />,
  },
  {
    label: "Tailwind",
    icon: <RiTailwindCssFill />,
  },
  {
    label: "NoSQL",
    icon: <RiFirebaseFill />,
  },
  {
    label: "IPFS",
    icon: <SiIpfs />,
  },
  {
    label: "Node.js",
    icon: <RiNodejsFill />,
  },
  {
    label: "PostgreSQL",
    icon: <BiLogoPostgresql />,
  },
  {
    label: "Web3",
    icon: <SiWeb3Dotjs />,
  },
  {
    label: "AWS",
    icon: <FaAws />,
  },
];

export const stats = [
  { label: "years building", value: "5+" },
  { label: "products shipped", value: "10+" },
  { label: "engineers led", value: "13" },
  { label: "clients served at Kingdomly", value: "25+" },
];

// Identity and contact details shared by the header, sidebar, CTA and footer.
export const profile = {
  handle: "KobeSergio",
  name: "Kobs",
  fullName: "Christian Kobe Sergio",
  avatar: "/assets/carousel-2.png",
  bio: "Fullstack Web3 developer with 5 years of shipping products end to end. Utilizes AI with spec-driven development to deliver day-to-day work more efficiently.",
  location: "Remote, Philippines",
  timezone: "UTC+8 (PH)",
  languages: "EN, Tagalog",
  availability: "Open to collabs · replies in < 24 hours",
  email: "ckasergio@gmail.com",
  calendly: "https://calendly.com/ckasergio/30min",
  linkedin: {
    label: "in/kobesergio",
    href: "https://www.linkedin.com/in/kobesergio",
  },
  github: {
    label: "github.com/KobeSergio",
    href: "https://github.com/KobeSergio",
  },
  discord: {
    label: "Discord",
    href: "https://discord.com/users/622772696870158347",
  },
};

// The README bio on Overview, four paragraphs. The last one renders muted.
export const bioParagraphs = [
  "Fullstack Web and Blockchain Developer with experience building production Web3 systems end to end, using AI-assisted development workflows (Claude Code, spec-driven development) to accelerate delivery. Most recently working as a freelance fullstack Web3 developer for multiple clients in the Web3 space.",
  "Before that I was a Blockchain Developer at VISEO, working with Anchorpoint (Hong Kong's first licensed stablecoin issuance provider) to design and implement Solidity smart contracts and on-chain infrastructure.",
  "Prior to that, I spent several years as the Lead Developer / CTO at Kingdomly, where I led the technical development of a no-code NFT launchpad. I started as the sole fullstack engineer responsible for the entire build, then scaled the engineering team to 13 developers as the platform grew to serve thousands of users and generate significant trading volume.",
  "Earlier in my career, I taught Laravel and web development at Kredo Manila and completed a DevOps Engineering internship at Stratpoint.",
];
