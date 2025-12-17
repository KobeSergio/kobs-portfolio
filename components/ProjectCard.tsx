"use client";
import { useState } from "react";
import Image from "next/image";
import Pill from "./Pill";

import { Project } from "@/constants/site/Projects";

export default function ProjectCard({ project }: { project: Project }) {
  const [mediaIndex, setMediaIndex] = useState(0);
  const mediaItems = project.images ?? [];
  const current = mediaItems[mediaIndex];
  const hasCarousel = mediaItems.length > 1;

  const goTo = (dir: "prev" | "next") => {
    if (!hasCarousel) return;
    const total = mediaItems.length;
    setMediaIndex((prev) =>
      dir === "next" ? (prev + 1) % total : (prev - 1 + total) % total
    );
  };

  return (
    <article className="group rounded-3xl border border-white/10 bg-white/5 p-5 shadow-lg shadow-black/30 transition hover:-translate-y-1 hover:border-amber-200/50 hover:shadow-amber-300/30">
      <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:gap-6">
        <div className="flex-1 space-y-4">
          <div className="text-sm leading-6 text-slate-300">
            {project.description}
          </div>
          <a
            href={project.link}
            className="inline-flex items-center gap-2 text-sm font-semibold text-amber-200 transition group-hover:translate-x-0.5"
          >
            View build
            <span aria-hidden>→</span>
          </a>
        </div>

        <div className="flex w-full flex-col gap-3 lg:w-[40%] xl:w-[35%] lg:self-stretch">
          <div className="relative flex-1 min-h-[220px] overflow-hidden rounded-2xl border border-white/10 bg-slate-900">
            {current ? (
              <div className="relative aspect-video w-full">
                <Image
                  src={current}
                  alt={project.title}
                  fill
                  className="object-cover"
                  sizes="(min-width: 1280px) 420px, (min-width: 768px) 320px, 100vw"
                  priority
                />
              </div>
            ) : (
              <div className="aspect-video w-full rounded-2xl bg-linear-to-br from-slate-900/80 via-slate-900 to-slate-950" />
            )}

            {hasCarousel ? (
              <>
                <div className="pointer-events-none absolute inset-0 flex items-center justify-between px-3">
                  <button
                    type="button"
                    onClick={() => goTo("prev")}
                    className="pointer-events-auto rounded-full bg-black/40 p-2 text-slate-100 shadow-md shadow-black/40 backdrop-blur transition hover:bg-black/55"
                    aria-label="Previous preview"
                  >
                    ‹
                  </button>
                  <button
                    type="button"
                    onClick={() => goTo("next")}
                    className="pointer-events-auto rounded-full bg-black/40 p-2 text-slate-100 shadow-md shadow-black/40 backdrop-blur transition hover:bg-black/55"
                    aria-label="Next preview"
                  >
                    ›
                  </button>
                </div>
                <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-2">
                  {mediaItems.map((_, idx) => (
                    <span
                      key={`${project.title}-dot-${idx}`}
                      className={`h-2 w-2 rounded-full border border-white/40 transition ${
                        idx === mediaIndex ? "bg-white" : "bg-white/20"
                      }`}
                    />
                  ))}
                </div>
              </>
            ) : null}
          </div>
          <div className="flex flex-wrap gap-2">
            {project.tech.map((tech) => (
              <Pill key={tech} size="xs">
                {tech}
              </Pill>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}
