import { Mail } from "lucide-react";
import { FaGithub, FaLinkedinIn, FaInstagram } from "react-icons/fa6";

function Footer() {
  return (
    <footer className="border-t border-[#1E293B] bg-[#0B1120]">
      <div className="mx-auto flex w-[92%] max-w-[1400px] flex-col items-center justify-between gap-5 px-6 py-6 md:flex-row">
        {/* Logo */}
        <a href="#home" className="text-2xl font-bold tracking-wide text-white">
          KRISHA<span className="text-[#8B7CF6]">.</span>
        </a>

        {/* Copyright */}
        <p className="text-center text-xs text-[#64748B] md:text-sm">
          © 2026 Krisha Chaniyara. All Rights Reserved.
        </p>

        {/* Social Links */}
        <div className="flex items-center gap-3">
          {/* GitHub */}
          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-[#1E293B] text-[#CBD5E1] transition-colors duration-300 hover:border-[#8B7CF6] hover:text-[#8B7CF6]"
          >
            <FaGithub size={16} />
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-[#1E293B] text-[#CBD5E1] transition-colors duration-300 hover:border-[#8B7CF6] hover:text-[#8B7CF6]"
          >
            <FaLinkedinIn size={16} />
          </a>

          {/* Instagram */}
          <a
            href="https://www.instagram.com/"
            aria-label="Instagram"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-[#1E293B] text-[#CBD5E1] transition-colors duration-300 hover:border-[#8B7CF6] hover:text-[#8B7CF6]"
          >
            <FaInstagram size={16} />
          </a>

          {/* Email */}
          <a
            href="mailto:krishachaniyara2706@gmail.com"
            aria-label="Email"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-[#1E293B] text-[#CBD5E1] transition-colors duration-300 hover:border-[#8B7CF6] hover:text-[#8B7CF6]"
          >
            <Mail size={16} />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
