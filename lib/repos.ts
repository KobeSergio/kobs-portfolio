import { experiences, type Experience } from "@/constants/site/Experiences";
import { projects } from "@/constants/site/Projects";

// Tech labels differ across builds ("Next.js 16", "Viem", "Filebase (IPFS)").
// The skill chips show one canonical name for each.
export const NORM: Record<string, string[]> = {
  "Next.js 16": ["Next.js"],
  "Tailwind 4": ["Tailwind"],
  "Anthropic SDK (Haiku)": ["Anthropic SDK"],
  "Claude Haiku / Sonnet / Opus": ["Claude"],
  "Vercel cron": ["Vercel"],
  "wagmi / viem": ["wagmi", "viem"],
  Viem: ["viem"],
  "Filebase (IPFS)": ["IPFS"],
  "IPFS (Filebase)": ["IPFS"],
  Dexscreener: ["DexScreener"],
};

// Deduplicated union of every tech list, in order, normalized with NORM.
export function normalizeSkills(tech: string[]): string[] {
  const out: string[] = [];
  for (const raw of tech) {
    for (const skill of NORM[raw] ?? [raw]) {
      if (!out.includes(skill)) out.push(skill);
    }
  }
  return out;
}

export function experienceSkills(experience: Experience): string[] {
  return normalizeSkills(
    experience.contributions.flatMap((contribution) => contribution.tech)
  );
}

// "https://www.tenelos.com/path" -> "tenelos.com"
export function hostOf(url: string): string {
  return url.replace(/^https?:\/\/(www\.)?/, "").replace(/\/.*$/, "");
}

export function getExperience(slug: string) {
  return experiences.find((experience) => experience.slug === slug);
}

export function getBuild(experience: Experience, slug: string) {
  return experience.contributions.find(
    (contribution) => contribution.slug === slug
  );
}

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
