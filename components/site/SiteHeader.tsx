import Link from "next/link";
import { CalendarDays } from "lucide-react";
import { experiences } from "@/constants/site/Experiences";
import { projects } from "@/constants/site/Projects";
import { profile } from "@/constants/site/site";
import KobsMark from "./KobsMark";
import ProfileTabs from "./ProfileTabs";

export default function SiteHeader() {
  return (
    <header className="relative z-2 border-b bg-bg-inset px-[clamp(16px,4vw,32px)] pt-4">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <Link
          href="/"
          className="flex min-h-11 items-center gap-2.5 text-base font-semibold text-fg"
        >
          <KobsMark size={32} className="text-white" />
          <span>{profile.handle}</span>
        </Link>
        <a
          href={profile.calendly}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex min-h-9 items-center gap-2 rounded-md border border-fg/10 bg-success px-4 text-sm font-semibold text-white"
        >
          <CalendarDays size={16} aria-hidden="true" />
          Book a call
        </a>
      </div>
      <ProfileTabs
        counts={{ experience: experiences.length, projects: projects.length }}
      />
    </header>
  );
}
