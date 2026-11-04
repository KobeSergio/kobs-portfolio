import ProfileShell from "@/components/site/ProfileShell";
import ProfileSidebar from "@/components/site/ProfileSidebar";
import SiteFooter from "@/components/site/SiteFooter";
import ReadmeBox from "@/components/overview/ReadmeBox";
import ExperienceCards from "@/components/overview/ExperienceCards";
import CtaBox from "@/components/overview/CtaBox";
import GithubContributionGraph from "@/components/GithubContributionGraph";

export default function Home() {
  return (
    <>
      <ProfileShell sidebar={<ProfileSidebar variant="full" />}>
        <ReadmeBox />
        <ExperienceCards />
        <section aria-labelledby="activity-title" className="flex flex-col gap-2">
          <h2 id="activity-title" className="text-base font-normal">
            GitHub activity
          </h2>
          <div className="rounded-md border p-4">
            <GithubContributionGraph />
          </div>
        </section>
        <CtaBox />
      </ProfileShell>
      <SiteFooter />
    </>
  );
}
