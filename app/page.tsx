import { experiences } from "@/constants/site/Experiences";
import { skills, stats } from "@/constants/site/site";
import { projects } from "@/constants/site/Projects";

import Headline from "@/components/page-sections/Headline";
import About from "@/components/page-sections/About";
import Experience from "@/components/page-sections/Experiences";
import Contact from "@/components/page-sections/Contact";
import Projects from "@/components/page-sections/Projects";
import GithubContributionGraph from "@/components/GithubContributionGraph";
import Footer from "@/components/page-sections/Footer";

export default function Home() {
  return (
    <div
      id="top"
      className="relative min-h-screen h-full bg-slate-950 text-slate-50"
    >
      <div
        className="absolute inset-0
        bg-[radial-gradient(circle_at_20%_20%,rgba(251,191,36,0.10),transparent_30%),radial-gradient(circle_at_80%_10%,rgba(248,180,0,0.06),transparent_20%),radial-gradient(circle_at_50%_80%,rgba(251,146,60,0.05),transparent_15%)]
        sm:bg-[radial-gradient(circle_at_20%_20%,rgba(251,191,36,0.18),transparent_35%),radial-gradient(circle_at_80%_10%,rgba(248,180,0,0.12),transparent_32%),radial-gradient(circle_at_50%_80%,rgba(251,146,60,0.15),transparent_34%)]
        "
      />
      <main className="relative mx-auto flex flex-col gap-16 md:gap-24 pb-16 md:pb-36 pt-16 sm:pt-24">
        <Headline />
        <About skills={skills} stats={stats} />
        <Experience experiences={experiences} />
        <GithubContributionGraph />
        <Projects projects={projects} />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
