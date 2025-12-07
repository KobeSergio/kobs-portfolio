import Pill from "./Pill";

export type Project = {
  title: string;
  description: string;
  tech: string[];
  link: string;
};

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="group rounded-3xl border border-white/10 bg-white/5 p-5 shadow-lg shadow-black/30 transition hover:-translate-y-1 hover:border-amber-200/50 hover:shadow-amber-300/30">
      <div className="flex items-start justify-between gap-2">
        <h3 className="text-xl font-semibold text-slate-50">{project.title}</h3>
        <span className="rounded-full bg-amber-400/20 px-3 py-1 text-xs font-semibold text-amber-100">
          {project.tech[0]}
        </span>
      </div>
      <p className="mt-3 text-sm leading-6 text-slate-300">{project.description}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {project.tech.map((tech) => (
          <Pill key={tech} size="xs">
            {tech}
          </Pill>
        ))}
      </div>
      <a
        href={project.link}
        className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-amber-200 transition group-hover:translate-x-0.5"
      >
        View build
        <span aria-hidden>→</span>
      </a>
    </article>
  );
}

