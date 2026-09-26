import { Download, Menu, X } from "lucide-react";
import { useState } from "react";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Education", href: "#education" },
  { name: "Contact", href: "#contact" },
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-[#1E293B] bg-[#0B1120]/95 backdrop-blur-md">
      <div className="mx-auto flex w-[92%] max-w-[1400px] items-center justify-between px-6 py-4">
        <a href="#home" className="text-2xl font-bold tracking-wide text-white">
          KRISHA<span className="text-[#8B7CF6]">.</span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-[#CBD5E1] transition-colors duration-300 hover:text-[#8B7CF6]"
            >
              {link.name}
            </a>
          ))}

          <a
            href="/resume/Krisha_Chaniyara_CV.pdf"
            download
            className="flex items-center gap-2 rounded-lg bg-[#8B7CF6] px-5 py-2.5 text-sm font-semibold text-white transition-colors duration-300 hover:bg-[#A78BFA]"
          >
            Download CV
            <Download size={17} />
          </a>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-white md:hidden"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {isOpen && (
        <div className="border-t border-[#1E293B] bg-[#0B1120] md:hidden">
          <div className="mx-auto flex w-[92%] max-w-[1400px] flex-col gap-4 px-6 py-5">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-sm font-medium text-[#CBD5E1] transition-colors duration-300 hover:text-[#8B7CF6]"
              >
                {link.name}
              </a>
            ))}

            <a
              href="/resume/KRISA CHANIYARA.pdf"
              download
              className="flex w-fit items-center gap-2 rounded-lg bg-[#8B7CF6] px-5 py-2.5 text-sm font-semibold text-white"
            >
              Download CV
              <Download size={17} />
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
