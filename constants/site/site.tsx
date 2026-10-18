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

export const navItems: {
  href: string;
  label: string;
  icon: React.ReactNode;
}[] = [
  {
    href: "#top",
    label: "Top",
    icon: (
      <path
        d="M12 5.5v13m0-13L7.5 10m4.5-4.5L16.5 10"
        stroke="#ededed"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
  },
  {
    href: "#about",
    label: "About",
    icon: (
      <>
        <circle cx="12" cy="8" r="3.5" stroke="#ededed" strokeWidth="1.6" />
        <path
          d="M6 19c0-3 2.7-5.5 6-5.5s6 2.5 6 5.5"
          stroke="#ededed"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
      </>
    ),
  },
  {
    href: "#projects",
    label: "Projects",
    icon: (
      <>
        <rect
          x="4"
          y="4"
          width="7"
          height="7"
          rx="1.3"
          stroke="#ededed"
          strokeWidth="1.6"
        />
        <rect
          x="13"
          y="4"
          width="7"
          height="7"
          rx="1.3"
          stroke="#ededed"
          strokeWidth="1.6"
        />
        <rect
          x="4"
          y="13"
          width="7"
          height="7"
          rx="1.3"
          stroke="#ededed"
          strokeWidth="1.6"
        />
        <rect
          x="13"
          y="13"
          width="7"
          height="7"
          rx="1.3"
          stroke="#ededed"
          strokeWidth="1.6"
        />
      </>
    ),
  },
  {
    href: "#experience",
    label: "Experience",
    icon: (
      <>
        <rect
          x="5"
          y="8"
          width="14"
          height="10"
          rx="2"
          stroke="#ededed"
          strokeWidth="1.6"
        />
        <path
          d="M9 8V6.8A2.8 2.8 0 0 1 12 4a2.8 2.8 0 0 1 3 2.8V8"
          stroke="#ededed"
          strokeWidth="1.6"
        />
      </>
    ),
  },
  {
    href: "#contact",
    label: "Contact",
    icon: (
      <>
        <rect
          x="3.5"
          y="6"
          width="17"
          height="12"
          rx="2"
          stroke="#ededed"
          strokeWidth="1.6"
        />
        <path
          d="m5 8 7 5 7-5"
          stroke="#ededed"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
      </>
    ),
  },
];
