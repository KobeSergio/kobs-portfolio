import { experiences } from "@/constants/Experiences";
import { navItems, skills, stats } from "@/constants/site";
import { projects } from "@/constants/Projects";

import Link from "next/link";
import Headline from "@/components/page-sections/Headline";
import About from "@/components/page-sections/About";
import Experience from "@/components/page-sections/Experiences";
import Contact from "@/components/page-sections/Contact";
import Projects from "@/components/page-sections/Projects";
import GithubContributionGraph from "@/components/GithubContributionGraph";
import Footer from "@/components/page-sections/Footer";

export default function Home() {
  return (
    <div id="top" className="relative min-h-screen bg-slate-950 text-slate-50">
      <div
        className="absolute inset-0
        bg-[radial-gradient(circle_at_20%_20%,rgba(251,191,36,0.10),transparent_30%),radial-gradient(circle_at_80%_10%,rgba(248,180,0,0.06),transparent_20%),radial-gradient(circle_at_50%_80%,rgba(251,146,60,0.05),transparent_15%)]
        sm:bg-[radial-gradient(circle_at_20%_20%,rgba(251,191,36,0.18),transparent_35%),radial-gradient(circle_at_80%_10%,rgba(248,180,0,0.12),transparent_32%),radial-gradient(circle_at_50%_80%,rgba(251,146,60,0.15),transparent_34%)]
        "
      />
      <main className="relative mx-auto flex flex-col gap-24 pb-36 pt-16 sm:pt-24">
        <Headline />
        <About skills={skills} stats={stats} />
        <Experience experiences={experiences} />
        <GithubContributionGraph />
        <Projects projects={projects} />
        <Contact />
      </main>
      <nav className="group fixed inset-x-0 bottom-0 z-30 mx-auto max-w-full border-t border-white/10 bg-white/5 shadow-xl shadow-black/40 backdrop-blur transition-all duration-300 lg:max-w-fit lg:rounded-2xl hover:scale-105">
        <div className="mx-auto flex max-w-fit items-center gap-4 px-4 py-3 text-slate-200">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-label={item.label}
              className="group/nav-item relative flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 transition-transform duration-200 hover:scale-110"
            >
              <span
                className="absolute inset-0 rounded-full bg-white/10 opacity-0 transition duration-200 group-hover/nav-item:opacity-100"
                aria-hidden
              />
              <svg
                width="24"
                height="24"
                strokeWidth="1.6"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="relative"
              >
                {item.icon}
              </svg>
            </Link>
          ))}
        </div>
      </nav>
      <Footer />
    </div>
  );
}
