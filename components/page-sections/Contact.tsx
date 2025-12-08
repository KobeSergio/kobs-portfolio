export default function Contact() {
  return (
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
  );
}
