"use client";

import SectionLabel from "../SectionLabel";
import { Experience } from "@/constants/site/Experiences";
import { useState } from "react";
import Image from "next/image";
import {
  TrendingUp,
  ArrowUpRight,
  Wand2,
  ShoppingBag,
  ArrowLeftRight,
  Lock,
  BookOpen,
  Terminal,
  Layers,
} from "lucide-react";

const PRODUCT_ICONS: Record<string, React.ElementType> = {
  creator: Wand2,
  mint: Wand2,
  marketplace: ShoppingBag,
  bridge: ArrowLeftRight,
  staking: Lock,
  docs: BookOpen,
  devops: Terminal,
  internship: Terminal,
};

function getProductIcon(product: string): React.ElementType {
  const lower = product.toLowerCase();
  for (const [key, Icon] of Object.entries(PRODUCT_ICONS)) {
    if (lower.includes(key)) return Icon;
  }
  return Layers;
}

export default function Experiences({
  experiences,
}: {
  experiences: Experience[];
}) {
  const [mediaIndexByStep, setMediaIndexByStep] = useState<Record<string, number>>({});

  return (
    <section
      id="experience"
      className="scroll-mt-24 space-y-10 w-full max-w-6xl mx-auto px-4 md:px-8"
    >
      <SectionLabel label="Experience" />

      {experiences.map((experience, index) => {
        const initial = experience.company[0];

        return (
          <div
            key={index}
            className="flex flex-col gap-6 md:flex-row md:gap-10 bg-slate-900/25 rounded-2xl p-5 md:p-6 border border-slate-800/40"
          >

            {/* Sticky role column */}
            <div className="w-full h-fit md:sticky md:top-6 md:flex-[0_0_210px]">
              <div className="space-y-3">
                {/* Company badge */}
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-amber-400/10 border border-amber-400/25 flex items-center justify-center text-amber-300 font-bold text-sm select-none flex-shrink-0">
                    {initial}
                  </div>
                  <div>
                    <p className="text-[10px] font-mono uppercase tracking-[0.18em] text-slate-500 leading-none mb-0.5">
                      {experience.time}
                    </p>
                    <h3 className="text-lg font-bold text-amber-300 leading-tight">
                      {experience.company}
                    </h3>
                  </div>
                </div>

                <div>
                  <p className="text-[11px] text-slate-500">{experience.location}</p>
                  <p className="text-sm font-semibold text-slate-200 mt-0.5">{experience.role}</p>
                </div>

                <p className="text-xs leading-5 text-slate-500">{experience.summary}</p>
              </div>
            </div>

            {/* Contribution feed */}
            <div className="w-full md:flex-1 flex flex-col">
              {experience.contributions?.map((contribution, contributionIndex) => {
                const stepKey = `${index}-${contributionIndex}`;
                const mediaItems = contribution?.images ?? [];
                const currentMediaIndex = mediaIndexByStep[stepKey] ?? 0;
                const media = mediaItems[currentMediaIndex];
                const isVideo =
                  typeof media === "string" &&
                  (media.endsWith(".webm") || media.endsWith(".mp4"));
                const hasCarousel = mediaItems.length > 1;
                const ProductIcon = getProductIcon(contribution?.product ?? "");

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
                    className={`grid gap-x-8 gap-y-4 items-start md:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] pb-6 ${
                      contributionIndex > 0
                        ? "border-t border-slate-800/50 pt-6"
                        : "pt-1"
                    }`}
                  >
                    {/* Left: text content */}
                    <div className="space-y-3">
                      <div>
                        <div className="flex items-center gap-2">
                          <ProductIcon className="h-4 w-4 text-amber-400/60 flex-shrink-0" />
                          <h4 className="text-base font-semibold text-slate-50">
                            {contribution?.product ?? experience.role}
                          </h4>
                        </div>

                        {contribution?.impact ? (
                          <p className="mt-1.5 flex items-center gap-1.5 text-xs font-semibold text-emerald-400">
                            <TrendingUp className="h-3 w-3 flex-shrink-0" />
                            {contribution.impact}
                          </p>
                        ) : null}
                      </div>

                      <div className="text-sm leading-relaxed text-slate-400">
                        {contribution?.description ??
                          "Shipping roadmaps end to end and keeping teams unblocked."}
                      </div>

                      {contribution?.tech?.length ? (
                        <div className="flex flex-wrap gap-1.5">
                          {contribution.tech.map((tech) => (
                            <span
                              key={tech}
                              className="rounded-md border border-slate-800 bg-slate-900/60 px-2 py-0.5 text-xs text-slate-400"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      ) : null}

                      {contribution?.link ? (
                        <a
                          href={contribution.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-xs font-semibold text-amber-300 hover:text-amber-200 transition-colors group/link"
                        >
                          View build
                          <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                        </a>
                      ) : null}
                    </div>

                    {/* Right: media */}
                    <div className="relative overflow-hidden rounded-xl border border-slate-800/80 bg-slate-950 group/media">
                      {isVideo ? (
                        <video
                          src={media}
                          className="aspect-video w-full object-cover"
                          autoPlay
                          muted
                          loop
                          playsInline
                          controls
                        />
                      ) : media ? (
                        <div className="relative aspect-video w-full overflow-hidden">
                          <Image
                            src={media}
                            alt={contribution?.product ?? experience.role}
                            fill
                            className="object-cover transition-transform duration-500 group-hover/media:scale-[1.04]"
                            sizes="(min-width: 1024px) 420px, 100vw"
                            priority
                          />
                        </div>
                      ) : (
                        <div className="aspect-video w-full bg-slate-900" />
                      )}

                      {hasCarousel && (
                        <>
                          <div className="pointer-events-none absolute inset-0 flex items-center justify-between px-3">
                            <button
                              type="button"
                              onClick={() => goTo("prev")}
                              className="pointer-events-auto rounded-full bg-black/40 p-2 text-slate-100 backdrop-blur transition hover:bg-black/60 cursor-pointer"
                              aria-label="Previous media"
                            >‹</button>
                            <button
                              type="button"
                              onClick={() => goTo("next")}
                              className="pointer-events-auto rounded-full bg-black/40 p-2 text-slate-100 backdrop-blur transition hover:bg-black/60 cursor-pointer"
                              aria-label="Next media"
                            >›</button>
                          </div>
                          <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-1.5">
                            {mediaItems.map((_, dotIndex) => (
                              <span
                                key={`${contributionIndex}-dot-${dotIndex}`}
                                className={`h-1.5 w-1.5 rounded-full transition ${
                                  dotIndex === currentMediaIndex
                                    ? "bg-white"
                                    : "bg-white/30"
                                }`}
                              />
                            ))}
                          </div>
                        </>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </section>
  );
}
