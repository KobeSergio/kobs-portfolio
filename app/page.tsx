import { experiences } from "@/constants/Experiences";

import Link from "next/link";
import Headline from "@/components/page-sections/Headline";
import About from "@/components/page-sections/About";
import Projects from "@/components/page-sections/Projects";
import Contact from "@/components/page-sections/Contact";

export default function Home() {
  const skills = [
    "TypeScript",
    "Next.js",
    "React",
    "Tailwind",
    "Node.js",
    "PostgreSQL",
    "Prisma",
    "Solidity",
    "Ethers.js",
    "wagmi",
    "GraphQL",
    "Docker",
  ];

  const stats = [
    { label: "Years building", value: "4+" },
    { label: "Products shipped", value: "7+" },
    { label: "Teams led", value: "13 cross-functional devs" },
    { label: "Education", value: "BS Computer Science" },
  ];

  const navItems = [
    {
      href: "#top",
      label: "Top",
      icon: (
        <path
          d="M12 5.5v13m0-13L7.5 10m4.5-4.5L16.5 10"
          stroke="#ededed"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      ),
    },
    {
      href: "#about",
      label: "About",
      icon: (
        <>
          <circle cx="12" cy="8" r="3.5" stroke="#ededed" strokeWidth="1.6" />
          <path
            d="M6 19c0-3 2.7-5.5 6-5.5s6 2.5 6 5.5"
            stroke="#ededed"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
        </>
      ),
    },
    {
      href: "#projects",
      label: "Projects",
      icon: (
        <>
          <rect
            x="4"
            y="4"
            width="7"
            height="7"
            rx="1.3"
            stroke="#ededed"
            strokeWidth="1.6"
          />
          <rect
            x="13"
            y="4"
            width="7"
            height="7"
            rx="1.3"
            stroke="#ededed"
            strokeWidth="1.6"
          />
          <rect
            x="4"
            y="13"
            width="7"
            height="7"
            rx="1.3"
            stroke="#ededed"
            strokeWidth="1.6"
          />
          <rect
            x="13"
            y="13"
            width="7"
            height="7"
            rx="1.3"
            stroke="#ededed"
            strokeWidth="1.6"
          />
        </>
      ),
    },
    {
      href: "#experience",
      label: "Experience",
      icon: (
        <>
          <rect
            x="5"
            y="8"
            width="14"
            height="10"
            rx="2"
            stroke="#ededed"
            strokeWidth="1.6"
          />
          <path
            d="M9 8V6.8A2.8 2.8 0 0 1 12 4a2.8 2.8 0 0 1 3 2.8V8"
            stroke="#ededed"
            strokeWidth="1.6"
          />
        </>
      ),
    },
    {
      href: "#contact",
      label: "Contact",
      icon: (
        <>
          <rect
            x="3.5"
            y="6"
            width="17"
            height="12"
            rx="2"
            stroke="#ededed"
            strokeWidth="1.6"
          />
          <path
            d="m5 8 7 5 7-5"
            stroke="#ededed"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
        </>
      ),
    },
  ];

  return (
    <div id="top" className="relative min-h-screen bg-slate-950 text-slate-50">
      <div
        className="absolute inset-0
        bg-[radial-gradient(circle_at_20%_20%,rgba(251,191,36,0.10),transparent_30%),radial-gradient(circle_at_80%_10%,rgba(248,180,0,0.06),transparent_20%),radial-gradient(circle_at_50%_80%,rgba(251,146,60,0.05),transparent_15%)]
        sm:bg-[radial-gradient(circle_at_20%_20%,rgba(251,191,36,0.18),transparent_35%),radial-gradient(circle_at_80%_10%,rgba(248,180,0,0.12),transparent_32%),radial-gradient(circle_at_50%_80%,rgba(251,146,60,0.15),transparent_34%)]
        "
      />

      <main className="relative mx-auto flex flex-col gap-24 pb-40 pt-16 sm:pt-24">
        <Headline />

        <About skills={skills} stats={stats} />

        <Projects experiences={experiences} />

        {/* <Experience experiences={experiences} /> */}
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
    </div>
  );
}
