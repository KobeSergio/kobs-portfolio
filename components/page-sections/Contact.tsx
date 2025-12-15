import { SiDiscord, SiGmail, SiLinkedin } from "react-icons/si";
import SectionLabel from "../SectionLabel";

export default function Contact() {
  return (
    <section
      id="contact"
      className="scroll-mt-24 space-y-6 md:mx-auto mx-4 px-8"
    >
      <SectionLabel label="Contact" />
      <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="rounded-3xl border border-emerald-200/20 bg-white/5 p-6 shadow-lg shadow-black/30">
          <p className="text-sm font-semibold uppercase tracking-[0.14em] text-emerald-300">
            Let us build together
          </p>
          <h3 className="mt-2 text-2xl font-semibold text-slate-50 md:text-3xl">
            Ready for your next product or MVP
          </h3>
          <p className="mt-3 text-sm leading-6 text-slate-300 md:text-base">
            I ship end to end across design systems, frontend, backend, and
            smart contracts. I enjoy working closely with founders and teams to
            move from concept to launch fast.
          </p>

          <div className="mt-4 flex flex-wrap gap-2 text-xs text-slate-200">
            <span className="rounded-full border border-emerald-200/40 bg-emerald-300/15 px-3 py-1">
              Fullstack Development
            </span>
            <span className="rounded-full border border-emerald-200/40 bg-emerald-300/15 px-3 py-1">
              Web3
            </span>
            <span className="rounded-full border border-emerald-200/40 bg-emerald-300/15 px-3 py-1">
              Product Leadership
            </span>
          </div>

          <div className="mt-6 flex flex-wrap gap-3 w-full">
            <a
              href="mailto:ckasergio@gmail.com"
              className="flex-1 min-w-[170px] md:min-w-0 inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 hover:border-emerald-200/40 hover:bg-emerald-300/15 px-4 py-3 text-sm font-semibold text-slate-100 shadow-none transition hover:translate-y-[-1px] hover:shadow-[0_0_22px_rgba(16,185,129,0.45)]"
            >
              <SiGmail /> Email me
            </a>
            <a
              href="https://www.linkedin.com/in/kobesergio"
              target="_blank"
              rel="noreferrer"
              className="flex-1 min-w-[170px] md:min-w-0 inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 hover:border-emerald-200/40 hover:bg-emerald-300/15 px-4 py-3 text-sm font-semibold text-slate-100 shadow-none transition hover:translate-y-[-1px] hover:shadow-[0_0_22px_rgba(16,185,129,0.45)]"
            >
              <SiLinkedin /> LinkedIn
            </a>
            <a
              href="https://discord.com/users/622772696870158347"
              target="_blank"
              rel="noreferrer"
              className="flex-1 min-w-[170px] md:min-w-0 inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 hover:border-emerald-200/40 hover:bg-emerald-300/15 px-4 py-3 text-sm font-semibold text-slate-100 shadow-none transition hover:translate-y-[-1px] hover:shadow-[0_0_22px_rgba(16,185,129,0.45)]"
            >
              <SiDiscord /> Discord
            </a>
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-lg shadow-black/30">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-amber-200">
            <span className="h-2 w-2 rounded-full bg-amber-300 shadow-[0_0_12px_rgba(251,191,36,0.7)]" />
            Quick stats
          </div>
          <div className="mt-4 grid grid-cols-2 gap-3 text-slate-100">
            {[
              { label: "Timezone", value: "UTC+8 (PH)" },
              { label: "Languages", value: "EN, Tagalog" },
              { label: "Availability", value: "Open to collabs" },
              { label: "Response", value: "< 24 hours" },
            ].map((item) => (
              <div
                key={item.label}
                className="rounded-2xl border border-white/10 bg-white/5 p-4"
              >
                <p className="text-xs text-slate-300">{item.label}</p>
                <p className="text-sm font-semibold text-slate-50">
                  {item.value}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-4 rounded-2xl border border-white/10 bg-slate-900/60 p-4 text-sm leading-6 text-slate-200">
            Prefer async? Drop a note with context and links, and I will reply
            with next steps and availability.
          </div>
        </div>
      </div>
    </section>
  );
}
