import ProjectCard from "../ProjectCard";
import SectionLabel from "../SectionLabel";

import { Project } from "@/constants/Projects";
export default function Projects({ projects }: { projects: Project[] }) {
  const hasProjects = projects && projects.length > 0;

  return (
    <section
      id="projects"
      className="scroll-mt-24 space-y-6 md:mx-auto mx-4 px-8 "
    >
      <SectionLabel label="Projects" />

      {hasProjects ? (
        <div className="flex flex-col gap-8">
          {projects.map((project) => (
            <div className="flex flex-col gap-4" key={project.title}>
              <div className="flex w-full flex-col gap-3 md:flex-row md:items-end md:justify-between">
                <div className="w-full space-y-2">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between md:gap-4 gap-2 text-2xl font-semibold text-slate-50 md:text-3xl">
                    {project.title}
                    <div className="flex flex-wrap gap-2 text-xs text-slate-300 md:text-sm">
                      {project.statuses.map((status) => (
                        <span
                          key={status}
                          className="rounded-full border border-amber-300/40 bg-amber-400/10 text-amber-200 px-3 py-1 h-fit"
                        >
                          {status}
                        </span>
                      ))}
                    </div>
                  </div>
                  <p className="text-sm leading-6 text-slate-300 md:text-base">
                    {project.headline}
                  </p>
                </div>
              </div>
              <ProjectCard key={project.title} project={project} />
            </div>
          ))}
        </div>
      ) : (
        <div className="rounded-2xl border border-white/10 bg-white/5 p-6 text-sm leading-6 text-slate-300 shadow-lg shadow-black/30">
          Projects are on the way. Check back soon for fresh builds and demos.
        </div>
      )}
    </section>
  );
}
