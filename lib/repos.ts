import {
  experiences,
  type Experience,
  type OnchainContract,
} from "@/constants/site/Experiences";

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

// "https://www.tenelos.com/path" -> "tenelos.com"
export function hostOf(url: string): string {
  return url.replace(/^https?:\/\/(www\.)?/, "").replace(/\/.*$/, "");
}

export type RepoKind = "experience" | "projects";

export type RepoLink = { label: string; href: string };

// A build with its own file in the tree.
export type RepoDoc = {
  slug: string;
  title: string;
  impact: string;
  bullets: string[];
  tech: string[];
  link: string;
  images: string[];
  poster?: string;
};

// What the README carries inline when there are no build files.
export type RepoReadme = Omit<RepoDoc, "slug" | "title">;

// The common shape the list rows and the file view render, built from an
// Experience or a Project.
export type Repo = {
  kind: RepoKind;
  slug: string;
  name: string;
  logo?: string;
  logoIcon?: "solana";
  pills: string[];
  role?: string;
  period?: string;
  summary: string;
  links: RepoLink[];
  contracts: OnchainContract[];
  skills: string[];
  builds: RepoDoc[];
  readme?: RepoReadme;
};

export const repoBasePath: Record<RepoKind, string> = {
  experience: "/experience",
  projects: "/projects",
};

export function repoHref(repo: Repo): string {
  return `${repoBasePath[repo.kind]}/${repo.slug}`;
}

export function buildHref(repo: Repo, build: RepoDoc): string {
  return `${repoHref(repo)}/${build.slug}`;
}

export function fileName(build?: RepoDoc): string {
  return build ? `${build.slug}.md` : "README.md";
}

export function experienceRepo(experience: Experience): Repo {
  const builds: RepoDoc[] = experience.contributions.map((contribution) => ({
    slug: contribution.slug,
    title: contribution.product,
    impact: contribution.impact,
    bullets: contribution.bullets,
    tech: contribution.tech,
    link: contribution.link,
    images: contribution.images,
    poster: contribution.poster,
  }));
  const notes = experience.notes;
  return {
    kind: "experience",
    slug: experience.slug,
    name: experience.company,
    logo: experience.companyLogo || undefined,
    logoIcon: experience.logoIcon,
    pills: [experience.location],
    role: experience.role,
    period: experience.time,
    summary: experience.summary,
    links: (experience.links ?? []).map((link) => ({
      label: link.label,
      href: link.href,
    })),
    contracts: experience.onchain ?? [],
    skills: normalizeSkills([
      ...builds.flatMap((build) => build.tech),
      ...(notes?.tech ?? []),
    ]),
    builds,
    readme: notes
      ? {
          impact: notes.impact,
          bullets: notes.bullets,
          tech: notes.tech,
          link: "",
          images: notes.images ?? [],
          poster: notes.poster,
        }
      : undefined,
  };
}

export const experienceRepos: Repo[] = experiences.map(experienceRepo);

export function getRepos(kind: RepoKind): Repo[] {
  return kind === "experience" ? experienceRepos : [];
}

export function getRepo(kind: RepoKind, slug: string): Repo | undefined {
  return getRepos(kind).find((repo) => repo.slug === slug);
}

export function getBuild(repo: Repo, slug: string): RepoDoc | undefined {
  return repo.builds.find((build) => build.slug === slug);
}
