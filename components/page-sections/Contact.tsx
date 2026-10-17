import { SiDiscord, SiGmail, SiLinkedin } from "react-icons/si";
import { CalendarDays } from "lucide-react";

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
          <a
            href="https://calendly.com/ckasergio/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-amber-400 px-4 py-3.5 text-base font-semibold text-slate-950 transition hover:bg-amber-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-300"
          >
            <CalendarDays aria-hidden="true" className="h-4 w-4" />
            Book a 30-min call
          </a>

          <div className="mt-3 flex flex-wrap gap-3 w-full">
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
            <p className="text-xs font-mono uppercase tracking-[0.18em] text-slate-400">Quick stats</p>
          </div>
          <dl className="grid grid-cols-2 gap-x-6 gap-y-4 text-slate-100">
            {[
              { label: "Timezone", value: "UTC+8 (PH)" },
              { label: "Languages", value: "EN, Tagalog" },
              { label: "Availability", value: "Open to collabs" },
              { label: "Response", value: "< 24 hours" },
            ].map((item) => (
              <div key={item.label} className="border-t border-slate-800 pt-3">
                <dt className="text-xs text-slate-400">{item.label}</dt>
                <dd className="text-sm font-semibold text-slate-100 mt-0.5">
                  {item.value}
                </dd>
              </div>
            ))}
          </dl>
          <div className="rounded-xl border border-slate-800 bg-slate-950/60 p-4 text-sm leading-6 text-slate-400">
            Prefer async? Drop a note with context and links, and I&apos;ll reply
            with next steps and availability.
          </div>
        </div>
      </div>
    </section>
  );
}
