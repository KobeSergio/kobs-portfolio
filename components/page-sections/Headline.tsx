"use client";

import ScrollCubes from "../ScrollCube"; // adjust path as needed

export default function Headline() {
  return (
    <section
      className="relative -mt-16 sm:-mt-24 min-h-screen flex flex-col justify-center items-center overflow-hidden px-4 md:px-0 py-0"
      id="headline-fullscreen"
      style={{ scrollSnapAlign: "start" }}
    >
      {/* Rotating cubes background */}
      <ScrollCubes />

      {/* Content on top */}
      <div className="z-10 relative space-y-6 text-center max-w-2xl mx-auto">
        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-amber-200">
          Hi, I&apos;m Kobs!
        </p>
        <h1 className="text-4xl font-bold leading-tight text-slate-50 sm:text-5xl select-none">
          Full-Stack Developer crafting products across{" "}
          <span className="text-blue-500 drop-shadow-[0_0_8px_var(--color-blue-400)] font-bold">
            Web2
          </span>{" "}
          and{" "}
          <span className="text-emerald-500 drop-shadow-[0_0_8px_var(--color-emerald-500)] font-bold">
            Web3{" "}
          </span>
          ecosystems
        </h1>
        <p className="max-w-2xl text-lg leading-8 text-slate-300 mx-auto">
          I build and launch fast, secure, and human-first dApps. From contract
          architecture to frontend polish, I bridge product thinking with
          intuitive engineering so your users trust every click.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="#about"
            className="rounded-full bg-amber-400 px-5 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-amber-400/30 transition hover:-translate-y-0.5 hover:shadow-amber-300/40"
          >
            Get to know me
          </a>
          <a
            href="https://calendly.com/ckasergio/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-white/10 px-5 py-3 text-sm font-semibold text-slate-50 transition hover:border-amber-200 hover:text-amber-200"
          >
            Book a call
          </a>
        </div>
      </div>
    </section>
  );
}
