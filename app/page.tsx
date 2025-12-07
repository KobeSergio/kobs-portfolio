import ExperienceCard, { Experience } from "@/components/ExperienceCard";
import Pill from "@/components/Pill";
import ProjectCard, { Project } from "@/components/ProjectCard";
import SectionLabel from "@/components/SectionLabel";
import Link from "next/link";
import StatCard from "@/components/StatCard";

export default function Home() {
  const projects: Project[] = [
    {
      title: "On-chain Fund Manager",
      description:
        "Portfolio dashboard for DeFi strategies with live vault metrics, risk flags, and investor onboarding.",
      tech: ["Next.js", "TypeScript", "Tailwind", "wagmi"],
      link: "https://github.com/",
    },
    {
      title: "Creator Drops",
      description:
        "No-code toolkit that lets artists launch ERC-721 collections, automate allowlists, and track mint health.",
      tech: ["Solidity", "Hardhat", "Next.js", "Charting"],
      link: "https://github.com/",
    },
    {
      title: "Realtime Trading Terminal",
      description:
        "Low-latency interface for perpetuals with depth charts, order routing, and custom alerts.",
      tech: ["React", "WebSockets", "Node.js", "Redis"],
      link: "https://github.com/",
    },
  ];

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

  const experiences: Experience[] = [
    {
      role: "Senior Full Stack Engineer",
      company: "Freelance",
      time: "2022 — Present",
      summary:
        "Shipping high-availability web3 products: payments, NFT drops, staking dashboards, and analytics.",
    },
    {
      role: "Lead Web3 Engineer",
      company: "Studio K",
      time: "2020 — 2022",
      summary:
        "Built creator tools, token-gated experiences, and contract libraries used by thousands of holders.",
    },
  ];

  const stats = [
    { label: "Years building", value: "5+" },
    { label: "Projects shipped", value: "30+" },
    { label: "Contracts audited", value: "12" },
    { label: "Stacks shipped", value: "FE + BE + Chain" },
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
          <rect x="4" y="4" width="7" height="7" rx="1.3" stroke="#ededed" strokeWidth="1.6" />
          <rect x="13" y="4" width="7" height="7" rx="1.3" stroke="#ededed" strokeWidth="1.6" />
          <rect x="4" y="13" width="7" height="7" rx="1.3" stroke="#ededed" strokeWidth="1.6" />
          <rect x="13" y="13" width="7" height="7" rx="1.3" stroke="#ededed" strokeWidth="1.6" />
        </>
      ),
    },
    {
      href: "#experience",
      label: "Experience",
      icon: (
        <>
          <rect x="5" y="8" width="14" height="10" rx="2" stroke="#ededed" strokeWidth="1.6" />
          <path d="M9 8V6.8A2.8 2.8 0 0 1 12 4a2.8 2.8 0 0 1 3 2.8V8" stroke="#ededed" strokeWidth="1.6" />
        </>
      ),
    },
    {
      href: "#contact",
      label: "Contact",
      icon: (
        <>
          <rect x="3.5" y="6" width="17" height="12" rx="2" stroke="#ededed" strokeWidth="1.6" />
          <path d="m5 8 7 5 7-5" stroke="#ededed" strokeWidth="1.6" strokeLinecap="round" />
        </>
      ),
    },
  ];

  return (
    <div id="top" className="relative min-h-screen overflow-hidden bg-slate-950 text-slate-50">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(251,191,36,0.18),transparent_35%),radial-gradient(circle_at_80%_10%,rgba(248,180,0,0.12),transparent_32%),radial-gradient(circle_at_50%_80%,rgba(251,146,60,0.15),transparent_34%)]" />

      <main className="relative mx-auto flex max-w-5xl flex-col gap-24 px-6 pb-40 pt-16 sm:pt-24">
        <section className="grid gap-10 md:grid-cols-[1.2fr,0.8fr] md:items-center">
          <div className="space-y-6">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-amber-200">
              Full stack web3 developer
            </p>
            <h1 className="text-4xl font-bold leading-tight text-slate-50 sm:text-5xl">
              I design and ship reliable experiences for decentralized products
            </h1>
            <p className="max-w-2xl text-lg leading-8 text-slate-300">
              I help teams launch fast, secure, and human-first dApps. From
              contract architecture to frontend polish, I bridge product
              thinking with deep engineering so your users trust every click.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#projects"
                className="rounded-full bg-amber-400 px-5 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-amber-400/30 transition hover:-translate-y-0.5 hover:shadow-amber-300/40"
              >
                View projects
              </a>
              <a
                href="#contact"
                className="rounded-full border border-white/10 px-5 py-3 text-sm font-semibold text-slate-50 transition hover:border-amber-200 hover:text-amber-200"
              >
                Book a call
              </a>
            </div>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-xl shadow-black/40 backdrop-blur">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-slate-300">Based in</p>
                <p className="text-lg font-semibold text-slate-50">
                  Cebu, Philippines
                </p>
              </div>
              <div className="rounded-full bg-amber-400/20 px-3 py-1 text-xs font-semibold text-amber-100">
                Available for new work
              </div>
            </div>
            <div className="mt-6 grid grid-cols-2 gap-4 text-slate-100">
              {stats.map((stat) => (
                <StatCard
                  key={stat.label}
                  label={stat.label}
                  value={stat.value}
                />
              ))}
            </div>
          </div>
        </section>

        <section id="about" className="scroll-mt-24 space-y-6">
          <SectionLabel label="About" />
          <p className="max-w-3xl text-lg leading-8 text-slate-200">
            I thrive at the intersection of shipping fast and shipping right. I
            pair hands-on contract work with strong frontend systems to deliver
            trustable flows: minting, payments, custody, dashboards, and admin
            surfaces. I keep teams unblocked with crisp communication, clear
            acceptance criteria, and documentation that future teammates can
            depend on.
          </p>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill) => (
              <Pill key={skill}>{skill}</Pill>
            ))}
          </div>
        </section>

        <section id="projects" className="scroll-mt-24 space-y-6">
          <SectionLabel label="Featured projects" />
          <div className="grid gap-6 md:grid-cols-3">
            {projects.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        </section>

        <section id="experience" className="scroll-mt-24 space-y-6">
          <SectionLabel label="Experience" />
          <div className="grid gap-4 md:grid-cols-2">
            {experiences.map((exp) => (
              <ExperienceCard key={exp.role} exp={exp} />
            ))}
          </div>
        </section>

        <section
          id="contact"
          className="scroll-mt-24 rounded-3xl border border-white/10 bg-linear-to-r from-amber-400/15 via-slate-900 to-orange-400/10 p-8 shadow-xl shadow-black/40"
        >
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-amber-100">
                Contact
              </p>
              <h3 className="text-2xl font-semibold text-slate-50">
                Let us build your next release
              </h3>
              <p className="mt-2 text-sm text-slate-200">
                Tell me about the experience you want to deliver. I will reply
                within one business day.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <a
                href="mailto:kobesergiodeveloper@gmail.com"
                className="rounded-full bg-amber-400 px-5 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-amber-400/30 transition hover:-translate-y-0.5 hover:shadow-amber-300/40"
              >
                Email me
              </a>
              <a
                href="https://cal.com/"
                className="rounded-full border border-white/10 px-5 py-3 text-sm font-semibold text-slate-50 transition hover:border-amber-200 hover:text-amber-200"
              >
                Schedule time
              </a>
            </div>
          </div>
        </section>
      </main>

      <nav className="fixed inset-x-0 bottom-4 z-30 mx-auto max-w-full border-t border-white/10 bg-slate-950/85 backdrop-blur lg:max-w-fit lg:rounded-2xl">
        <div className="mx-auto flex max-w-fit items-center gap-4 px-4 py-3 text-slate-200">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-label={item.label}
              className="group relative flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 transition-transform duration-200 hover:scale-110"
            >
              <span className="absolute inset-0 rounded-full bg-white/10 opacity-0 transition duration-200 group-hover:opacity-100" aria-hidden />
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
