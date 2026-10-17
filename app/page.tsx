import { experiences } from "@/constants/site/Experiences";
import { skills, stats } from "@/constants/site/site";
import { projects } from "@/constants/site/Projects";

import Headline from "@/components/page-sections/Headline";
import StatStrip from "@/components/page-sections/StatStrip";
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
      <main className="relative mx-auto flex flex-col gap-16 md:gap-24 pb-16 md:pb-36 pt-16 sm:pt-24">
        <Headline />
        <StatStrip stats={stats} />
        <About skills={skills} />
        <Experience experiences={experiences} />
        <GithubContributionGraph />
        <Projects projects={projects} />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
