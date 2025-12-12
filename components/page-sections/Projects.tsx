"use client";

import SectionLabel from "../SectionLabel";
import { Experience } from "../ExperienceCard";
import GithubContributionGraph from "../GithubContributionGraph";
import { useState } from "react";
import Image from "next/image";
export default function Experiences({
  experiences,
}: {
  experiences: Experience[];
}) {
  const [mediaIndexByStep, setMediaIndexByStep] = useState<
    Record<string, number>
  >({});

  return (
    <section
      id="projects"
      className="scroll-mt-24 space-y-6 md:mx-auto mx-4 px-8 "
    >
      <SectionLabel label="Experiences and contributions" />
      {experiences.map((experience, index) => {
        return (
          <div key={index} className="flex flex-col gap-6 md:flex-row md:gap-6">
            <div className="flex flex-col gap-2 w-full h-fit md:sticky md:top-4 md:flex-1">
              <article
                className={`
            flex-1
            w-full
            h-full
            rounded-2xl
            border border-white/10
            bg-white/5
            p-5
            shadow-lg shadow-black/30
            transition duration-300
          `}
              >
                <div className="flex h-full flex-col gap-4">
                  <div className="flex flex-col gap-1">
                    <h3 className="text-lg md:text-xl font-semibold text-slate-50 leading-tight">
                      {experience.role}
                    </h3>
                    <span className="text-xs uppercase tracking-wide text-slate-200">
                      {experience.time}
                    </span>
                    <div className="flex flex-wrap items-center gap-2 text-xs md:text-sm text-slate-300">
                      <span className="font-medium text-amber-100">
                        {experience.company}
                      </span>
                      <span className="hidden md:inline-block text-slate-400">
                        •
                      </span>
                      <span className="text-slate-400">
                        {experience.location}
                      </span>
                    </div>
                  </div>

                  <div className="text-sm md:text-base leading-6 text-slate-200 space-y-3">
                    {experience.summary}
                  </div>
                </div>
              </article>
            </div>
            <div className="flex flex-col gap-4 w-full md:w-2/3">
              {experience.contributions?.map(
                (contribution, contributionIndex) => {
                  const stepKey = `${index}-${contributionIndex}`;
                  const mediaItems = contribution?.images ?? [];
                  const currentMediaIndex = mediaIndexByStep[stepKey] ?? 0;
                  const media = mediaItems[currentMediaIndex];
                  const isVideo =
                    typeof media === "string" &&
                    (media.endsWith(".webm") || media.endsWith(".mp4"));

                  const hasCarousel = mediaItems.length > 1;
                  const goTo = (dir: "prev" | "next") => {
                    if (!hasCarousel) return;
                    const total = mediaItems.length;
                    setMediaIndexByStep((prev) => {
                      const current = prev[stepKey] ?? 0;
                      const nextIndex =
                        dir === "next"
                          ? (current + 1) % total
                          : (current - 1 + total) % total;
                      return { ...prev, [stepKey]: nextIndex };
                    });
                  };

                  return (
                    <div
                      key={contributionIndex}
                      className="flex-1 space-y-4 rounded-2xl border border-white/10 bg-white/5 p-5 shadow-lg shadow-black/30 transition duration-300"
                    >
                      <div className="grid gap-8 items-start md:grid-cols-[minmax(0,1.05fr)_minmax(0,1fr)]">
                        <div className="order-1 space-y-4 md:order-1">
                          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-amber-300/80">
                            What I contributed to · {experience.company}
                          </p>
                          <div className="space-y-2">
                            <h3 className="text-xl font-semibold text-slate-50 sm:text-2xl">
                              {contribution?.product ?? experience.role}
                            </h3>
                            <div className="text-sm leading-relaxed text-slate-300 sm:text-base">
                              {contribution?.description ??
                                "Shipping roadmaps end to end and keeping teams unblocked."}
                            </div>
                            {contribution?.impact ? (
                              <div className="text-xs font-semibold text-emerald-200/80">
                                {contribution.impact}
                              </div>
                            ) : null}
                          </div>
                        </div>

                        <div className="order-2 md:order-2 flex flex-col gap-4">
                          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-slate-900 shadow-2xl">
                            {isVideo ? (
                              <video
                                src={media}
                                className="aspect-video w-full rounded-2xl object-cover"
                                autoPlay
                                muted
                                loop
                                playsInline
                                controls
                              />
                            ) : media ? (
                              <div className="relative aspect-video w-full">
                                <Image
                                  src={media}
                                  alt={contribution?.product ?? experience.role}
                                  fill
                                  className="object-cover"
                                  sizes="(min-width: 1024px) 520px, 100vw"
                                  priority
                                />
                              </div>
                            ) : (
                              <div className="aspect-video w-full rounded-3xl border border-white/10 bg-linear-to-br from-slate-900/80 via-slate-900 to-slate-950 shadow-2xl" />
                            )}

                            {hasCarousel ? (
                              <div className="pointer-events-none absolute inset-0 flex items-center justify-between px-3">
                                <button
                                  type="button"
                                  onClick={() => goTo("prev")}
                                  className="pointer-events-auto rounded-full bg-black/40 p-2 text-slate-100 shadow-md shadow-black/40 backdrop-blur transition hover:bg-black/55"
                                  aria-label="Previous media"
                                >
                                  ‹
                                </button>
                                <button
                                  type="button"
                                  onClick={() => goTo("next")}
                                  className="pointer-events-auto rounded-full bg-black/40 p-2 text-slate-100 shadow-md shadow-black/40 backdrop-blur transition hover:bg-black/55"
                                  aria-label="Next media"
                                >
                                  ›
                                </button>
                              </div>
                            ) : null}

                            {hasCarousel ? (
                              <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-2">
                                {mediaItems.map((_, dotIndex) => (
                                  <span
                                    key={`${contributionIndex}-dot-${dotIndex}`}
                                    className={`h-2 w-2 rounded-full border border-white/40 transition ${
                                      dotIndex === currentMediaIndex
                                        ? "bg-white"
                                        : "bg-white/20"
                                    }`}
                                  />
                                ))}
                              </div>
                            ) : null}
                          </div>
                          {/* Tech used */}
                          {contribution?.tech?.length ? (
                            <div className="flex flex-wrap gap-2 mt-4">
                              {contribution.tech.map((tech) => (
                                <span
                                  key={tech}
                                  className="rounded-full border border-white/10 bg-white/10 px-2 py-1 text-xs text-slate-100 hover:bg-white/20 transition-colors"
                                >
                                  {tech}
                                </span>
                              ))}
                            </div>
                          ) : null}
                        </div>
                      </div>
                    </div>
                  );
                }
              )}
            </div>
          </div>
        );
      })}

      <GithubContributionGraph />
    </section>
  );
}
