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
