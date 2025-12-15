"use client";
import { useState } from "react";
import Image from "next/image";
import Pill from "../Pill";
import Tilt from "react-parallax-tilt";
import { skills } from "@/constants/site";

export default function About({
  skills,
  stats,
}: {
  skills: skills;
  stats: { label: string; value: string }[];
}) {
  const previewImages = [
    "/assets/headshot.png",
    "/assets/card_img.png",
    "/assets/card_img.png",
    "/assets/headshot.png",
    "/assets/headshot.png",
    "/assets/card_img.png",
  ];
  const [activeIndex, setActiveIndex] = useState(0);
  const handleNext = () =>
    setActiveIndex((prev) => (prev + 1) % previewImages.length);
  const handlePrev = () =>
    setActiveIndex((prev) =>
      prev === 0 ? previewImages.length - 1 : prev - 1
    );

  return (
    <section
      id="about"
      className="scroll-mt-24 mt-auto w-full max-w-7xl mx-auto px-4 xl:px-2 flex flex-col gap-8 md:items-stretch md:gap-10"
    >
      <div className="flex flex-1 flex-col md:flex-row md:items-start gap-6 md:gap-8">
        {/* Desktop carousel + stats (hidden on mobile) */}
        <div className="hidden md:flex rounded-3xl w-full border border-white/10 bg-white/5 p-6 shadow-xl shadow-black/40 backdrop-blur h-full flex-col justify-between md:flex-[1.05]">
          <div className="relative w-full max-w-xs md:max-w-md lg:max-w-lg flex-1 self-center">
            <Tilt
              glareEnable={true}
              glareMaxOpacity={0.2}
              glareColor="#ffffff"
              glarePosition="all"
              className="rounded-xl overflow-hidden"
              tiltReverse={true}
              tiltMaxAngleX={7}
              tiltMaxAngleY={7}
            >
              <div className="aspect-square relative">
                <Image
                  src={previewImages[activeIndex]}
                  alt="Profile"
                  fill
                  className="object-cover w-full h-full rounded-xl"
                  sizes="(max-width: 768px) 100vw, 100vw"
                  priority
                />
                <button
                  type="button"
                  onClick={handlePrev}
                  className="absolute left-3 top-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-black/45 text-white shadow-lg shadow-black/30 ring-1 ring-white/15 hover:bg-black/60 transition"
                  aria-label="Previous image"
                >
                  <span className="text-xl leading-none">‹</span>
                </button>
                <button
                  type="button"
                  onClick={handleNext}
                  className="absolute right-3 top-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-black/45 text-white shadow-lg shadow-black/30 ring-1 ring-white/15 hover:bg-black/60 transition"
                  aria-label="Next image"
                >
                  <span className="text-xl leading-none">›</span>
                </button>
              </div>
            </Tilt>
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
              {previewImages.map((_, idx) => (
                <button
                  key={idx}
                  type="button"
                  aria-label={`Go to slide ${idx + 1}`}
                  onClick={() => setActiveIndex(idx)}
                  className={`h-2.5 w-2.5 rounded-full transition-colors duration-200 border border-white/40 ${
                    activeIndex === idx
                      ? "bg-amber-300 border-amber-300 shadow-lg"
                      : "bg-white/30 hover:bg-amber-200"
                  }`}
                />
              ))}
            </div>
          </div>
          <hr className="border-white/10 my-4" />
          <div className="text-slate-200 text-lg leading-8 space-y-3">
            <div className="flex flex-col gap-4 pt-2">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-emerald-300">
                <span className="h-2 w-2 rounded-full bg-emerald-300 shadow-[0_0_12px_rgba(52,211,153,0.7)]" />
                Tech Stack
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, idx) => (
                  <Pill key={idx} size="xs" color="white">
                    {skill.icon} {skill.label}
                  </Pill>
                ))}
              </div>
            </div>
          </div>
        </div>
        {/* Text column */}
        <div className="flex flex-col justify-center space-y-6 max-w-[calc(1920px/2)] w-full md:w-[60%] px-6">
          <div className="flex items-center gap-3 justify-between">
            <p className="text-sm font-bold uppercase tracking-[0.12em] text-amber-200 flex items-center">
              About Me
              <span className="inline-flex items-center justify-center ml-2 align-middle">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 16 16"
                  className="text-amber-200 h-4.5 w-4.5 shrink-0"
                  height="14"
                  width="14"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M10.067.87a2.89 2.89 0 0 0-4.134 0l-.622.638-.89-.011a2.89 2.89 0 0 0-2.924 2.924l.01.89-.636.622a2.89 2.89 0 0 0 0 4.134l.637.622-.011.89a2.89 2.89 0 0 0 2.924 2.924l.89-.01.622.636a2.89 2.89 0 0 0 4.134 0l.622-.637.89.011a2.89 2.89 0 0 0 2.924-2.924l-.01-.89.636-.622a2.89 2.89 0 0 0 0-4.134l-.637-.622.011-.89a2.89 2.89 0 0 0-2.924-2.924l-.89.01zm.287 5.984-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708.708"></path>
                </svg>
              </span>
            </p>
            <div className="flex items-center gap-3 ml-4">
              <a
                href="https://www.linkedin.com/in/kobesergio"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-white hover:text-amber-200 transition"
              >
                {/* LinkedIn SVG */}
                <svg
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  width="20"
                  height="20"
                  aria-hidden="true"
                >
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11.5 20h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm15.5 12.268h-3v-5.604c0-1.337-.024-3.065-1.871-3.065-1.872 0-2.158 1.461-2.158 2.969v5.7h-3v-11h2.882v1.501h.041c.401-.76 1.379-1.563 2.835-1.563 3.031 0 3.59 1.995 3.59 4.59v6.472z" />
                </svg>
              </a>
              <a
                href="https://github.com/kobesergio"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Github"
                className="text-white hover:text-amber-200 transition"
              >
                {/* GitHub SVG */}
                <svg
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  width="20"
                  height="20"
                  aria-hidden="true"
                >
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577V20.39c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.085-.744.082-.729.082-.729 1.205.082 1.84 1.236 1.84 1.236 1.067 1.83 2.8 1.301 3.487.996.108-.773.418-1.302.762-1.602-2.665-.305-5.467-1.335-5.467-5.93 0-1.31.468-2.38 1.235-3.22-.123-.304-.535-1.528.117-3.183 0 0 1.008-.322 3.301 1.23a11.51 11.51 0 0 1 3.003-.404c1.018.004 2.045.138 3.003.404 2.291-1.552 3.297-1.23 3.297-1.23.654 1.655.242 2.879.119 3.183.77.84 1.233 1.91 1.233 3.22 0 4.61-2.807 5.624-5.479 5.921.43.372.823 1.104.823 2.222v3.293c0 .322.218.694.825.576C20.565 21.796 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                </svg>
              </a>
              <a
                href="mailto:kobesergio@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Gmail"
                className="text-white hover:text-amber-200 transition"
              >
                {/* Gmail SVG */}
                <svg
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  width="20"
                  height="20"
                  aria-hidden="true"
                >
                  <path d="M20 4H4c-1.1 0-2 .9-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm0 2v.01l-8 4.99-8-4.99V6l8 5 8-5zM4 20V8.69l8 5 8-5V20H4z" />
                </svg>
              </a>
            </div>
          </div>
          {/* Mobile carousel + stats */}
          <div className="md:hidden rounded-3xl w-full border border-white/10 bg-white/5 p-6 shadow-xl shadow-black/40 backdrop-blur flex flex-col gap-4">
            <div className="relative w-full max-w-md mx-auto">
              <Tilt
                glareEnable={true}
                glareMaxOpacity={0.2}
                glareColor="#ffffff"
                glarePosition="all"
                className="rounded-xl overflow-hidden"
                tiltReverse={true}
                tiltMaxAngleX={7}
                tiltMaxAngleY={7}
              >
                <div className="aspect-square relative">
                  <Image
                    src={previewImages[activeIndex]}
                    alt="Profile"
                    fill
                    className="object-cover w-full h-full rounded-xl"
                    sizes="(max-width: 768px) 100vw, 100vw"
                    priority
                  />
                  <button
                    type="button"
                    onClick={handlePrev}
                    className="absolute left-3 top-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-black/45 text-white shadow-lg shadow-black/30 ring-1 ring-white/15 hover:bg-black/60 transition"
                    aria-label="Previous image"
                  >
                    <span className="text-xl leading-none">‹</span>
                  </button>
                  <button
                    type="button"
                    onClick={handleNext}
                    className="absolute right-3 top-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-black/45 text-white shadow-lg shadow-black/30 ring-1 ring-white/15 hover:bg-black/60 transition"
                    aria-label="Next image"
                  >
                    <span className="text-xl leading-none">›</span>
                  </button>
                </div>
              </Tilt>
              <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                {previewImages.map((_, idx) => (
                  <button
                    key={idx}
                    type="button"
                    aria-label={`Go to slide ${idx + 1}`}
                    onClick={() => setActiveIndex(idx)}
                    className={`h-2.5 w-2.5 rounded-full transition-colors duration-200 border border-white/40 ${
                      activeIndex === idx
                        ? "bg-amber-300 border-amber-300 shadow-lg"
                        : "bg-white/30 hover:bg-amber-200"
                    }`}
                  />
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3 text-slate-100">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl border border-white/10 bg-white/5 p-4 h-full flex flex-col justify-between"
                >
                  <p className="text-xs md:text-sm text-slate-300">
                    {stat.label}
                  </p>
                  <p className="text-sm md:text-lg font-bold text-slate-50">
                    {stat.value}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <h1 className="text-3xl text-center md:text-left font-bold tracking-tight text-slate-50">
            CHRISTIAN KOBE SERGIO
          </h1>
          <div className="flex items-center justify-center md:justify-start -mt-2 mb-4 text-xs sm:text-sm md:text-base font-light text-slate-300 tracking-wide">
            <span className="mr-3">Remote, Philippines</span>
            <span className="text-slate-400 text-base">•</span>
            <span className="rounded-full bg-amber-400/20 px-1.5 md:px-2 py-0.5 md:py-1 text-amber-200 font-bold ml-3 ">
              OPEN TO WORK
            </span>
          </div>
          {/* {skills.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <Pill key={skill}>{skill}</Pill>
              ))}
            </div>
          )} */}
          <p className="text-base leading-7 sm:text-lg sm:leading-8 text-slate-200">
            Fullstack Web3 Developer with a builder&apos;s mindset and a track
            record of leading teams to ship ambitious NFT products. As the chief
            technical architect of a no-code NFT launchpad, I began as the sole
            developer and later moved into a broader leadership role supporting
            both our engineering team and the creators building on our platform.
            I built an ecosystem for NFTs that covers minting, marketplaces,
            bridging, and staking. I&apos;m now looking to get back to coding
            hands-on and deepen my understanding of systems and architecture,
            while continuing to create intuitive, high-impact Web3 products.
          </p>
          <div className="w-full my-2">
            <p className="block text-sm text-slate-400 font-medium mb-2">
              Copies left
            </p>
            <div className="w-full bg-slate-700 rounded-full h-4 overflow-hidden">
              <div
                className="bg-amber-400 h-4 rounded-full transition-all duration-300 w-2/3"
                role="presentation"
              />
            </div>
            <div className="text-right text-xs text-slate-300 mt-1">
              67 left
            </div>
          </div>
          <div className="flex gap-4 mt-6 w-full">
            <button
              type="button"
              className="flex-1 bg-amber-400 text-slate-900 font-bold py-3 px-5 sm:px-6 rounded-lg shadow-md hover:bg-amber-300 transition text-base sm:text-lg min-w-0"
              onClick={() => {
                // Placeholder mint action
                alert("Mint action triggered!");
              }}
            >
              Mint my resume
            </button>
            <a
              href="mailto:kobesergio@gmail.com?subject=Contact%20from%20Portfolio"
              className="flex-1 bg-slate-800 border border-slate-600 text-slate-200 font-bold py-3 px-5 sm:px-6 rounded-lg shadow-md hover:bg-slate-700 transition flex items-center justify-center text-base sm:text-lg min-w-0"
            >
              Or view it here
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
