import type { Metadata } from "next";
import ProfileShell from "@/components/site/ProfileShell";
import ProfileSidebar from "@/components/site/ProfileSidebar";
import RepoList from "@/components/repo/RepoList";
import { experienceRepos } from "@/lib/repos";

export const metadata: Metadata = {
  title: "Experience",
};

export default function ExperiencePage() {
  return (
    <ProfileShell sidebar={<ProfileSidebar variant="short" />}>
      <RepoList
        repos={experienceRepos}
        title={`${experienceRepos.length} experiences, newest first`}
      />
    </ProfileShell>
  );
}
