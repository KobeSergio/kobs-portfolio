import ProjectCard from "../ProjectCard";
import SectionLabel from "../SectionLabel";
import { ClipboardCheck, Trophy } from "lucide-react";
import { Project } from "@/constants/site/Projects";

const PROJECT_ICONS: Record<string, React.ElementType> = {
  "PRC Inspection and Monitoring System": ClipboardCheck,
  "Tenelos — Tennis ELO Rating System": Trophy,
};

export default function Projects({ projects }: { projects: Project[] }) {
  const hasProjects = projects && projects.length > 0;

  return (
    <section
      id="projects"
      className="scroll-mt-24 space-y-8 w-full max-w-6xl mx-auto px-4 md:px-8"
    >
      <SectionLabel label="Projects" />

      {hasProjects ? (
        <div className="flex flex-col">
          {projects.map((project, idx) => {
            const ProjectIcon = PROJECT_ICONS[project.title];

            return (
              <div
                key={project.title}
                className={`group py-8 first:pt-0 transition-colors duration-200 ${
                  idx > 0 ? "border-t border-slate-800/50" : ""
                }`}
              >
                <div className="space-y-1.5 mb-4">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between md:gap-6 gap-2">
                    <div className="flex items-center gap-2.5 min-w-0">
                      {ProjectIcon ? (
                        <ProjectIcon className="h-4 w-4 text-amber-400/60 flex-shrink-0" />
                      ) : null}
                      <h3 className="text-lg font-semibold text-slate-100 leading-snug">
                        {project.title}
                      </h3>
                    </div>
                    <div className="flex flex-wrap gap-2 shrink-0">
                      {project.statuses.map((status) => (
                        <span
                          key={status}
                          className="rounded-full border border-amber-400/30 bg-amber-400/8 text-amber-300 px-3 py-1 text-xs font-medium h-fit"
                        >
                          {status}
                        </span>
                      ))}
                    </div>
                  </div>
                  <p className="text-sm font-semibold leading-relaxed text-emerald-300 max-w-2xl text-pretty">
                    {project.headline}
                  </p>
                </div>
                <ProjectCard project={project} />
              </div>
            );
          })}
        </div>
      ) : (
        <p className="text-sm leading-6 text-slate-400 py-8 border-t border-slate-800/50">
          Projects are on the way. Check back soon for fresh builds and demos.
        </p>
      )}
    </section>
  );
}
