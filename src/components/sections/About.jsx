import { Code2, Server, Database, ArrowRight } from "lucide-react";

const aboutCards = [
  {
    icon: <Code2 size={28} />,
    title: "Frontend Development",
    description:
      "Building responsive and accessible user interfaces using React, JavaScript and Tailwind CSS.",
  },
  {
    icon: <Server size={28} />,
    title: "Backend Development",
    description:
      "Developing scalable REST APIs and backend services using Node.js and Express.js.",
  },
  {
    icon: <Database size={28} />,
    title: "Database & Tools",
    description:
      "Working with MongoDB, Git, GitHub and modern tools for efficient application development.",
  },
];

function About() {
  return (
    <section id="about" className="border-b border-[#1E293B] bg-[#0B1120]">
      <div className="mx-auto grid w-[92%] max-w-[1400px] items-center gap-10 px-6 py-20 lg:grid-cols-2 lg:gap-16">
        {/* Left Content */}
        <div>
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-[#8B7CF6]">
            About Me
          </p>

          <h2 className="max-w-xl text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl">
            A Passionate Developer
            <br />
            Who Loves Building
            <br />
            <span className="text-[#8B7CF6]">Real-World Solutions</span>
          </h2>

          <p className="mt-6 max-w-xl text-base leading-7 text-[#94A3B8]">
            I’m a Full Stack Web Developer focused on building responsive,
            user-friendly and scalable web applications using modern frontend
            and backend technologies.
          </p>

          <a
            href="#skills"
            className="mt-7 inline-flex items-center gap-2 rounded-lg border border-[#8B7CF6] px-5 py-2.5 text-sm font-semibold text-white transition-colors duration-300 hover:bg-[#8B7CF6]"
          >
            More About Me
            <ArrowRight size={17} />
          </a>
        </div>

        {/* Right Cards */}
        <div className="grid gap-5 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
          {aboutCards.map((card) => (
            <div
              key={card.title}
              className="group rounded-2xl border border-[#1E293B] bg-[#111827] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#8B7CF6]/60"
            >
              {/* Icon */}
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl border border-[#8B7CF6]/30 text-[#8B7CF6] transition-colors duration-300 group-hover:bg-[#8B7CF6] group-hover:text-white">
                {card.icon}
              </div>

              {/* Title */}
              <h3 className="text-lg font-semibold text-white">{card.title}</h3>

              {/* Small Line */}
              <div className="mt-3 h-0.5 w-10 bg-[#8B7CF6]" />

              {/* Description */}
              <p className="mt-4 text-sm leading-6 text-[#94A3B8]">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;
