import { ArrowUpRight } from "lucide-react";
import { FaGithub } from "react-icons/fa";

function ProjectCard({ project }) {
  return (
    <div className="group overflow-hidden rounded-xl border border-[#1E293B] bg-[#111827] transition-all duration-300 hover:-translate-y-1 hover:border-[#8B7CF6]/50">
      <div className="relative h-52 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-[#0B1120]/10 transition-all duration-300 group-hover:bg-transparent" />
      </div>

      <div className="p-5">
        <h3 className="text-xl font-semibold text-white">{project.title}</h3>

        <p className="mt-3 text-sm leading-6 text-[#94A3B8]">
          {project.description}
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          {project.technologies.map((technology) => (
            <span
              key={technology}
              className="rounded-md border border-[#263449] bg-[#0D1628] px-2.5 py-1 text-xs text-[#CBD5E1]"
            >
              {technology}
            </span>
          ))}
        </div>

        <div className="mt-5 flex gap-3">
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-[#8B7CF6] px-4 py-2.5 text-sm font-semibold text-white transition-colors duration-300 hover:bg-[#A78BFA]"
          >
            Live Demo
            <ArrowUpRight size={16} />
          </a>

          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-1 items-center justify-center gap-2 rounded-lg border border-[#334155] px-4 py-2.5 text-sm font-semibold text-white transition-colors duration-300 hover:border-[#8B7CF6] hover:text-[#8B7CF6]"
          >
            GitHub
            <FaGithub size={16} />
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
