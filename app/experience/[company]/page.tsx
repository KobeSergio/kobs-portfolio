import type { Metadata } from "next";
import { notFound } from "next/navigation";
import FileView from "@/components/repo/FileView";
import { experienceRepos, getRepo } from "@/lib/repos";

type Props = { params: Promise<{ company: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return experienceRepos.map((repo) => ({ company: repo.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { company } = await params;
  const repo = getRepo("experience", company);
  return { title: repo ? repo.name : "Experience" };
}

export default async function CompanyPage({ params }: Props) {
  const { company } = await params;
  const repo = getRepo("experience", company);
  if (!repo) notFound();
  return <FileView repos={experienceRepos} repo={repo} />;
}
