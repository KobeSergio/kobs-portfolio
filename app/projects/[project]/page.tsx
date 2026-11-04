import type { Metadata } from "next";
import { notFound } from "next/navigation";
import FileView from "@/components/repo/FileView";
import { getRepo, projectRepos } from "@/lib/repos";

type Props = { params: Promise<{ project: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return projectRepos.map((repo) => ({ project: repo.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { project } = await params;
  const repo = getRepo("projects", project);
  return { title: repo ? repo.name : "Projects" };
}

export default async function ProjectPage({ params }: Props) {
  const { project } = await params;
  const repo = getRepo("projects", project);
  if (!repo) notFound();
  return <FileView repos={projectRepos} repo={repo} />;
}
