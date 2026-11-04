import type { Metadata } from "next";
import ProfileShell from "@/components/site/ProfileShell";
import ProfileSidebar from "@/components/site/ProfileSidebar";
import RepoList from "@/components/repo/RepoList";
import { projectRepos } from "@/lib/repos";

export const metadata: Metadata = {
  title: "Projects",
};

export default function ProjectsPage() {
  return (
    <ProfileShell sidebar={<ProfileSidebar variant="short" />}>
      <RepoList repos={projectRepos} title={`${projectRepos.length} projects`} />
    </ProfileShell>
  );
}
