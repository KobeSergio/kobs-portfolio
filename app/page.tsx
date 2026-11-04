import ProfileShell from "@/components/site/ProfileShell";
import ProfileSidebar from "@/components/site/ProfileSidebar";
import SiteFooter from "@/components/site/SiteFooter";

export default function Home() {
  return (
    <>
      <ProfileShell sidebar={<ProfileSidebar variant="full" />}>
        {/* Overview content: README box, experience cards, GitHub activity, CTA. */}
      </ProfileShell>
      <SiteFooter />
    </>
  );
}
