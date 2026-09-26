import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaNodeJs,
  FaGitAlt,
} from "react-icons/fa";

import {
  SiTailwindcss,
  SiRedux,
  SiExpress,
  SiMongodb,
} from "react-icons/si";

import { ArrowRight } from "lucide-react";

const skills = [
  {
    name: "HTML5",
    icon: <FaHtml5 />,
    color: "text-[#E34F26]",
  },
  {
    name: "CSS3",
    icon: <FaCss3Alt />,
    color: "text-[#1572B6]",
  },
  {
    name: "JavaScript",
    icon: <FaJsSquare />,
    color: "text-[#F7DF1E]",
  },
  {
    name: "React.js",
    icon: <FaReact />,
    color: "text-[#61DAFB]",
  },
  {
    name: "Tailwind CSS",
    icon: <SiTailwindcss />,
    color: "text-[#38BDF8]",
  },
  {
    name: "Redux Toolkit",
    icon: <SiRedux />,
    color: "text-[#764ABC]",
  },
  {
    name: "Node.js",
    icon: <FaNodeJs />,
    color: "text-[#68A063]",
  },
  {
    name: "Express.js",
    icon: <SiExpress />,
    color: "text-white",
  },
  {
    name: "MongoDB",
    icon: <SiMongodb />,
    color: "text-[#47A248]",
  },
  {
    name: "Git & GitHub",
    icon: <FaGitAlt />,
    color: "text-[#F05032]",
  },
];

function Skills() {
  return (
    <section
      id="skills"
      className="border-b border-[#1E293B] bg-[#0B1120]"
    >
      <div className="mx-auto w-[92%] max-w-[1400px] px-6 py-20">
        <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="mb-2 text-sm font-semibold uppercase tracking-[0.25em] text-[#8B7CF6]">
              My Skills
            </p>

            <h2 className="text-3xl font-bold text-white sm:text-4xl">
              Technologies I Work With
            </h2>
          </div>
          <a
            href="#Skills"
            className="hidden items-center gap-2 rounded-lg border border-[#8B7CF6] px-5 py-2.5 text-sm font-semibold text-[#8B7CF6] transition-colors duration-300 hover:bg-[#8B7CF6] hover:text-white md:flex"
          >
            View All Skills
            <ArrowRight size={16} />
          </a>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">

          {skills.map((skill) => (
            <div
              key={skill.name}
              className="group flex items-center gap-4 rounded-xl border border-[#1E293B] bg-[#111827] px-5 py-4 transition-all duration-300 hover:-translate-y-1 hover:border-[#8B7CF6]/50"
            >
              <span className={`text-3xl ${skill.color}`}>
                {skill.icon}
              </span>

              <span className="text-sm font-medium text-[#F8FAFC] transition-colors duration-300 group-hover:text-[#8B7CF6]">
                {skill.name}
              </span>
            </div>
          ))}
        </div>
        
        <div className="mt-6 flex md:hidden">
          <a
            href="#Skills"
            className="flex items-center gap-2 rounded-lg border border-[#8B7CF6] px-5 py-2.5 text-sm font-semibold text-[#8B7CF6] transition-colors duration-300 hover:bg-[#8B7CF6] hover:text-white"
          >
            View All Skills
            <ArrowRight size={16} />
          </a>
        </div>

      </div>
    </section>
  );
}

export default Skills;