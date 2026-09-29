import { CalendarCheck, Layers3, Code2, UsersRound } from "lucide-react";

const stats = [
  {
    value: "20+",
    label: "Projects Completed",
    icon: <CalendarCheck size={34} />,
  },
  {
    value: "10+",
    label: "Technologies Used",
    icon: <Layers3 size={34} />,
  },
  {
    value: "20+",
    label: "Features Implemented",
    icon: <Code2 size={34} />,
  },
  {
    value: "01+",
    label: "Years of Learning",
    icon: <UsersRound size={34} />,
  },
];

const Stats = () => {
  return (
    <section className="-mt-8 bg-[#0B1120] px-4 pt-0 pb-2">
      <div className="mx-auto w-[92%]">
        <div className="grid min-h-[92px] grid-cols-1 overflow-hidden rounded-xl border border-[#1E293B] bg-[#0D1628] sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className={`flex items-center justify-center gap-4 px-5 py-5 ${
                index !== stats.length - 1
                  ? "border-b border-[#1E293B] sm:border-b-0 sm:border-r lg:border-r"
                  : ""
              } ${index === 1 ? "lg:border-r" : ""}`}
            >
              <div className="shrink-0 text-[#8B7CF6]">{stat.icon}</div>
              <div>
                <h3 className="text-xl font-bold leading-none text-white sm:text-2xl">
                  {stat.value}
                </h3>

                <p className="mt-1 whitespace-nowrap text-[11px] text-[#94A3B8] sm:text-xs">
                  {stat.label}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
