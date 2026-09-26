import { GraduationCap, BookOpen } from "lucide-react";

const education = [
  {
    year: "2025 - 2028",
    title: "Diploma in Computer Engineering - Pursuing",
    institute: "ARPIT Institute of Engineering, Rajkot",
    icon: <GraduationCap size={26} />,
  },
  {
    year: "2025",
    title: "Full Stack Web Development",
    institute: "Red & White Institute, Rajkot",
    icon: <BookOpen size={26} />,
  },
];

function Education() {
  return (
    <section id="education" className="border-b border-[#1E293B] bg-[#0B1120]">
      <div className="mx-auto w-[92%] max-w-[1400px] px-6 py-8">
        <div className="grid items-center gap-8 lg:grid-cols-[0.9fr_2fr]">
          {/* Left Heading */}
          <div>
            <p className="mb-1 text-sm font-semibold uppercase tracking-[0.25em] text-[#8B7CF6]">
              Education
            </p>

            <h2 className="text-2xl font-bold text-white md:text-3xl">
              My Academic Journey
            </h2>
          </div>

          {/* Timeline */}
          <div className="grid gap-8 md:grid-cols-2">
            {education.map((item) => (
              <div key={item.title} className="relative flex gap-4">
                {/* Timeline Line + Dot */}
                <div className="relative flex flex-col items-center">
                  <span className="h-5 w-5 rounded-full border-2 border-[#8B7CF6] bg-[#8B7CF6] shadow-[0_0_12px_rgba(139,124,246,0.4)]" />

                  <span className="mt-1 h-full w-px bg-[#8B7CF6]/60" />
                </div>

                {/* Content */}
                <div className="pb-4">
                  <p className="text-sm text-[#94A3B8]">{item.year}</p>

                  <div className="mt-1 flex items-center gap-2">
                    <span className="text-white">{item.icon}</span>

                    <h3 className="text-base font-semibold text-white">
                      {item.title}
                    </h3>
                  </div>

                  <p className="mt-1 text-sm text-[#94A3B8]">
                    {item.institute}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Education;
