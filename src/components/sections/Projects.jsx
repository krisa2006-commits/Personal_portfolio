import { ArrowRight } from "lucide-react";
import projects from "../../data/projects";
import ProjectCard from "../common/ProjectCard";

function Projects() {
  return (
    <section id="projects" className="border-b border-[#1E293B] bg-[#0B1120]">
      <div className="mx-auto w-[92%] max-w-[1400px] px-6 py-20">
        <div className="mb-10 flex items-end justify-between gap-6">
          <div>
            <p className="mb-2 text-sm font-semibold uppercase tracking-[0.25em] text-[#8B7CF6]">
              Featured Projects
            </p>

            <h2 className="text-3xl font-bold text-white sm:text-4xl">
              Some of My Recent Work
            </h2>
          </div>

          <a
            href="#contact"
            className="hidden items-center gap-2 rounded-lg border border-[#8B7CF6] px-5 py-2.5 text-sm font-semibold text-[#8B7CF6] transition-colors duration-300 hover:bg-[#8B7CF6] hover:text-white md:flex"
          >
            View All Projects
            <ArrowRight size={16} />
          </a>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        <div className="mt-6 flex md:hidden">
          <a
            href="#contact"
            className="flex items-center gap-2 rounded-lg border border-[#8B7CF6] px-5 py-2.5 text-sm font-semibold text-[#8B7CF6] transition-colors duration-300 hover:bg-[#8B7CF6] hover:text-white"
          >
            View All Projects
            <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Projects;
