"use client";
import { useState } from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
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
    <article className="group">
      <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:gap-8">

        {/* Left: stack, details, link */}
        <div className="flex-1 space-y-3">
          {project.tech.length ? (
            <p className="text-xs leading-5 text-slate-400">
              <span className="sr-only">Stack: </span>
              {project.tech.join(" · ")}
            </p>
          ) : null}

          <div className="text-sm leading-relaxed text-slate-400">
            {project.description}
          </div>

          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex w-fit items-center gap-1.5 text-sm font-semibold text-amber-300 hover:text-amber-200 transition-colors group/link"
          >
            View build
            <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
          </a>
        </div>

        {/* Right: image carousel */}
        <div className="relative w-full overflow-hidden rounded-xl border border-slate-800/80 bg-slate-950 lg:w-1/2 group/img">
          {current ? (
            <div className="relative aspect-video w-full overflow-hidden">
              <Image
                src={current}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-500 group-hover/img:scale-[1.04]"
                sizes="(min-width: 1280px) 480px, (min-width: 768px) 360px, 100vw"
                priority
              />
              {/* subtle amber sheen on hover */}
              <div className="absolute inset-0 bg-amber-400/0 group-hover/img:bg-amber-400/[0.04] transition-colors duration-500 pointer-events-none" />
            </div>
          ) : (
            <div className="aspect-video w-full bg-slate-900" />
          )}

          {hasCarousel ? (
            <>
              <div className="pointer-events-none absolute inset-0 flex items-center justify-between px-3">
                <button
                  type="button"
                  onClick={() => goTo("prev")}
                  className="pointer-events-auto rounded-full bg-black/40 p-2 text-slate-100 backdrop-blur transition hover:bg-black/60"
                  aria-label="Previous preview"
                >
                  ‹
                </button>
                <button
                  type="button"
                  onClick={() => goTo("next")}
                  className="pointer-events-auto rounded-full bg-black/40 p-2 text-slate-100 backdrop-blur transition hover:bg-black/60"
                  aria-label="Next preview"
                >
                  ›
                </button>
              </div>
              <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-2">
                {mediaItems.map((_, idx) => (
                  <span
                    key={`${project.title}-dot-${idx}`}
                    className={`h-1.5 w-1.5 rounded-full transition ${
                      idx === mediaIndex ? "bg-white" : "bg-white/30"
                    }`}
                  />
                ))}
              </div>
            </>
          ) : null}
        </div>
      </div>
    </article>
  );
}
