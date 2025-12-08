import SectionLabel from "../SectionLabel";
import ProjectCard from "../ProjectCard";
import { Project } from "../ProjectCard";
export default function Projects({ projects }: { projects: Project[] }) {
  return (
    <section id="projects" className="scroll-mt-24 space-y-6">
      <SectionLabel label="Featured projects" />
      <div className="grid gap-6 md:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </section>
  );
}
