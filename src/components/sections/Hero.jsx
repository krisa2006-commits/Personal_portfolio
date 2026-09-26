import { ArrowRight, Download, Mail } from "lucide-react";
import { FaGithub, FaLinkedinIn, FaInstagram } from "react-icons/fa6";

function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-[470px] overflow-hidden bg-[#0B1120]"
    >
      {/* Background Image */}
      <img
        src="/images/hero.png"
        alt="Developer workspace"
        className="absolute inset-0 h-full w-full object-cover object-[72%_center]"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-[#0B1120]/30" />

      {/* Left Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0B1120] via-[#0B1120]/45 to-transparent" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-[470px] w-[92%] max-w-[1400px] items-center px-6 py-12">
        <div className="max-w-2xl">
          {/* Small Heading */}
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-[#8B7CF6]">
            Hello, I'm
          </p>

          {/* Name */}
          <h1 className="text-4xl font-bold leading-tight text-white sm:text-5xl md:text-6xl">
            Krisha <span className="text-[#8B7CF6]">Chaniyara</span>
          </h1>

          {/* Role */}
          <h2 className="mt-3 text-2xl font-semibold text-white sm:text-3xl">
            Full Stack Web Developer
          </h2>

          {/* Description */}
          <p className="mt-4 max-w-xl text-base leading-7 text-[#CBD5E1]">
            I’m a Full Stack Web Developer focused on building responsive,
            user-friendly and scalable web applications using modern
            technologies.
          </p>

          {/* Buttons */}
          <div className="mt-7 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="flex items-center gap-2 rounded-lg bg-[#8B7CF6] px-6 py-3 font-semibold text-white transition duration-300 hover:bg-[#A78BFA]"
            >
              View My Work
              <ArrowRight size={18} />
            </a>

            <a
              href="/resume/KRISA CHANIYARA.pdf"
              download
              className="flex items-center gap-2 rounded-lg border border-white/60 px-6 py-3 font-semibold text-white transition duration-300 hover:border-[#8B7CF6] hover:bg-[#8B7CF6]"
            >
              Download CV
              <Download size={18} />
            </a>
          </div>

          {/* Social Links */}
          <div className="mt-7 flex items-center gap-4">
            {/* GitHub */}
            <a
              href="https://github.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-black/20 text-white transition duration-300 hover:border-[#8B7CF6] hover:text-[#8B7CF6]"
            >
              <FaGithub size={20} />
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-black/20 text-white transition duration-300 hover:border-[#8B7CF6] hover:text-[#8B7CF6]"
            >
              <FaLinkedinIn size={20} />
            </a>

            {/* Instagram */}
            <a
              href="https://www.instagram.com/"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-black/20 text-white transition duration-300 hover:border-[#8B7CF6] hover:text-[#8B7CF6]"
            >
              <FaInstagram size={20} />
            </a>

            {/* Email */}
            <a
              href="mailto:krishachaniyara2706@gmail.com"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-black/20 text-white transition duration-300 hover:border-[#8B7CF6] hover:text-[#8B7CF6]"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
