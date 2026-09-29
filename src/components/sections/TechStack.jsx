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

const TechStack = () => {
  return (
    <section className="border-y border-[#1E293B] bg-[#0D1628]">
      <div className="hide-scrollbar w-full overflow-x-auto">
        <div className="mx-auto flex min-w-max items-center justify-center lg:grid lg:min-h-[76px] lg:w-full lg:grid-cols-7">
          {technologies.map((technology, index) => (
            <div
              key={technology.name}
              className={`flex h-[76px] min-w-[145px] items-center justify-center px-4 sm:min-w-[170px] lg:min-w-0 ${
                index !== technologies.length - 1
                  ? "border-r border-[#263449]"
                  : ""
              }`}
            >
              <div className="flex items-center gap-2">
                <span
                  className={`text-2xl sm:text-3xl ${technology.iconClass}`}
                >
                  {technology.icon}
                </span>
                <span className="cursor-pointer whitespace-nowrap text-sm font-medium text-[#F8FAFC] transition-colors duration-300 hover:text-[#8B7CF6] sm:text-base">
                  {technology.name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
