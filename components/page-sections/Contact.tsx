import { SiDiscord, SiGmail, SiLinkedin } from "react-icons/si";

export default function Contact() {
  return (
    <section
      id="contact"
      className="scroll-mt-24 space-y-6 w-full max-w-6xl mx-auto px-4 md:px-8"
    >
      <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="rounded-2xl border border-slate-800 bg-slate-900/50 p-6">
          <h3 className="text-2xl font-bold text-slate-50 md:text-3xl tracking-tight">
            Ready for your next product or MVP
          </h3>
          <p className="mt-3 text-sm leading-6 text-slate-400 md:text-base">
            I ship end to end across design systems, frontend, backend, and
            smart contracts. I enjoy working closely with founders and teams to
            move from concept to launch fast.
          </p>

          <div className="mt-4 flex flex-wrap gap-2 text-xs text-slate-300">
            <span className="rounded-full border border-slate-700 bg-slate-800/60 px-3 py-1">
              Fullstack Development
            </span>
            <span className="rounded-full border border-slate-700 bg-slate-800/60 px-3 py-1">
              Web3
            </span>
            <span className="rounded-full border border-slate-700 bg-slate-800/60 px-3 py-1">
              Product Leadership
            </span>
          </div>

          <div className="mt-6 flex flex-wrap gap-3 w-full">
            <a
              href="mailto:ckasergio@gmail.com"
              className="flex-1 min-w-[170px] md:min-w-0 inline-flex items-center justify-center gap-2 rounded-xl border border-slate-700 bg-slate-800/60 hover:border-amber-400/40 hover:bg-amber-400/8 px-4 py-3 text-sm font-semibold text-slate-100 transition hover:-translate-y-px hover:shadow-[0_0_20px_rgba(251,191,36,0.15)]"
            >
              <SiGmail /> Email me
            </a>
            <a
              href="https://www.linkedin.com/in/kobesergio"
              target="_blank"
              rel="noreferrer"
              className="flex-1 min-w-[170px] md:min-w-0 inline-flex items-center justify-center gap-2 rounded-xl border border-slate-700 bg-slate-800/60 hover:border-amber-400/40 hover:bg-amber-400/8 px-4 py-3 text-sm font-semibold text-slate-100 transition hover:-translate-y-px hover:shadow-[0_0_20px_rgba(251,191,36,0.15)]"
            >
              <SiLinkedin /> LinkedIn
            </a>
            <a
              href="https://discord.com/users/622772696870158347"
              target="_blank"
              rel="noreferrer"
              className="flex-1 min-w-[170px] md:min-w-0 inline-flex items-center justify-center gap-2 rounded-xl border border-slate-700 bg-slate-800/60 hover:border-amber-400/40 hover:bg-amber-400/8 px-4 py-3 text-sm font-semibold text-slate-100 transition hover:-translate-y-px hover:shadow-[0_0_20px_rgba(251,191,36,0.15)]"
            >
              <SiDiscord /> Discord
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-3 rounded-2xl border border-slate-800 bg-slate-900/50 p-6">
          <div className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-amber-400 shadow-[0_0_8px_rgba(251,191,36,0.8)]" />
            <p className="text-xs font-mono uppercase tracking-[0.18em] text-slate-500">Quick stats</p>
          </div>
          <div className="grid grid-cols-2 gap-3 text-slate-100">
            {[
              { label: "Timezone", value: "UTC+8 (PH)" },
              { label: "Languages", value: "EN, Tagalog" },
              { label: "Availability", value: "Open to collabs" },
              { label: "Response", value: "< 24 hours" },
            ].map((item) => (
              <div
                key={item.label}
                className="rounded-xl border border-slate-800 bg-slate-950/60 p-4"
              >
                <p className="text-xs text-slate-500">{item.label}</p>
                <p className="text-sm font-semibold text-slate-100 mt-0.5">
                  {item.value}
                </p>
              </div>
            ))}
          </div>
          <div className="rounded-xl border border-slate-800 bg-slate-950/60 p-4 text-sm leading-6 text-slate-400">
            Prefer async? Drop a note with context and links, and I&apos;ll reply
            with next steps and availability.
          </div>
        </div>
      </div>
    </section>
  );
}
