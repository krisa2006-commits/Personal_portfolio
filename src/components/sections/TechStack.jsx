import { FaReact, FaJsSquare, FaNodeJs, FaGitAlt } from "react-icons/fa";

import { SiTailwindcss, SiExpress, SiMongodb } from "react-icons/si";

const technologies = [
  {
    name: "React.js",
    icon: <FaReact />,
    iconClass: "text-[#61DAFB]",
  },
  {
    name: "JavaScript",
    icon: <FaJsSquare />,
    iconClass: "text-[#F7DF1E]",
  },
  {
    name: "Tailwind CSS",
    icon: <SiTailwindcss />,
    iconClass: "text-[#38BDF8]",
  },
  {
    name: "Node.js",
    icon: <FaNodeJs />,
    iconClass: "text-[#68A063]",
  },
  {
    name: "Express.js",
    icon: <SiExpress />,
    iconClass: "text-white",
  },
  {
    name: "MongoDB",
    icon: <SiMongodb />,
    iconClass: "text-[#47A248]",
  },
  {
    name: "Git & GitHub",
    icon: <FaGitAlt />,
    iconClass: "text-[#F05032]",
  },
];

function TechStack() {
  return (
    <section className="border-y border-[#1E293B] bg-[#0B1120]">
      <div className="grid min-h-[76px] w-full grid-cols-7">
        {technologies.map((technology, index) => (
          <div
            key={technology.name}
            className={`flex items-center justify-center px-3 ${
              index !== technologies.length - 1
                ? "border-r border-[#263449]"
                : ""
            }`}
          >
            <div className="flex items-center gap-2">
              <span className={`text-3xl ${technology.iconClass}`}>
                {technology.icon}
              </span>

              <span className="cursor-pointer whitespace-nowrap text-sm font-medium text-[#F8FAFC] transition-colors duration-300 hover:text-[#8B7CF6] md:text-base">
                {technology.name}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default TechStack;
