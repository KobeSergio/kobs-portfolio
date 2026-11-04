import type { Metadata } from "next";
import { notFound } from "next/navigation";
import FileView from "@/components/repo/FileView";
import { experienceRepos, getBuild, getRepo } from "@/lib/repos";

type Props = { params: Promise<{ company: string; build: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return experienceRepos.flatMap((repo) =>
    repo.builds.map((build) => ({ company: repo.slug, build: build.slug }))
  );
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { company, build } = await params;
  const repo = getRepo("experience", company);
  const doc = repo ? getBuild(repo, build) : undefined;
  return { title: doc && repo ? `${doc.title} · ${repo.name}` : "Experience" };
}

export default async function BuildPage({ params }: Props) {
  const { company, build } = await params;
  const repo = getRepo("experience", company);
  const doc = repo ? getBuild(repo, build) : undefined;
  if (!repo || !doc) notFound();
  return <FileView repos={experienceRepos} repo={repo} build={doc} />;
}
