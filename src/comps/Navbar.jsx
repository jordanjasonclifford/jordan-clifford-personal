import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Github, Linkedin, Mail } from "lucide-react";
import { track } from "@vercel/analytics"; // added for tracking clicks on social icons

export default function Navbar({ scrolled }) {
  const [mobileMenuIsOpen, setMobileMenuIsOpen] = useState(false);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-slate-950/80 backdrop-blur-lg border-b border-slate-800"
          : "bg-slate-950/20 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-14 sm:h-16 md:h-20">
          {/* Left: Logo / Name */}
          <div className="flex items-center space-x-1 group cursor-pointer">
            <span className="text-lg sm:text-xl md:text-2xl font-mono text-amber-400">
              Jordan Clifford
            </span>
          </div>

        <div className="hidden md:flex items-center gap-15">
          {/* Center: Nav Links (desktop) */}
          <div className="flex items-center font-mono space-x-6 lg:space-x-15">
            
            <a href="#aboutme" 
            className="px-3 py-1.5 rounded-md border border-orange-300/25 bg-[#3a1f18]/70 text-amber-100 text-sm lg:text-base transition hover:bg-[#5c2d14]/80 hover:border-orange-300/50 hover:text-orange-200"
             >
              About
            </a>
            <a href="#experience" className="px-3 py-1.5 rounded-md border border-orange-300/25 bg-[#3a1f18]/70 text-amber-100 text-sm lg:text-base transition hover:bg-[#5c2d14]/80 hover:border-orange-300/50 hover:text-orange-200">
              Experience
            </a>
            <a href="#projects" className="px-3 py-1.5 rounded-md border border-orange-300/25 bg-[#3a1f18]/70 text-amber-100 text-sm lg:text-base transition hover:bg-[#5c2d14]/80 hover:border-orange-300/50 hover:text-orange-200">
              Projects
            </a>
          </div>

          
          <div className="flex items-center space-x-15">
            <a
              href="https://github.com/jordanjasonclifford"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => track("Navbar GitHub Click")}
              className="p-2 rounded-lg border border-orange-300/20 bg-[#3a1f18]/70 text-amber-100 hover:bg-[#5c2d14]/80 hover:border-orange-300/50 hover:text-orange-200 transition"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://linkedin.com/in/jordan-jason-clifford"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => track("Navbar LinkedIn Click")}
              className="p-2 rounded-lg border border-orange-300/20 bg-[#3a1f18]/70 text-amber-100 hover:bg-[#5c2d14]/80 hover:border-orange-300/50 hover:text-orange-200 transition"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="mailto:jordanclifford@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => track("Navbar Email Click")}
              className="p-2 rounded-lg border border-orange-300/20 bg-[#3a1f18]/70 text-amber-100 hover:bg-[#5c2d14]/80 hover:border-orange-300/50 hover:text-orange-200 transition"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>

          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 text-gray-300 hover:text-white"
            onClick={() => setMobileMenuIsOpen((prev) => !prev)}
          >
            {mobileMenuIsOpen ? <X className="w-5 h-5 sm:w-6 sm:h-6" /> : <Menu className="w-5 h-5 sm:w-6 sm:h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuIsOpen && (
        <div className="md:hidden bg-slate-900/95 backdrop-blur-lg border-t border-slate-800 animate-in slide-in-from-top duration-300 font-mono">
          <div className="px-5 py-5 sm:py-6 space-y-6">
            <div className="flex flex-col items-start gap-4">
            
            <a
              href="#aboutme"
              onClick={() => setMobileMenuIsOpen(false)}
              className="inline-flex w-44 px-4 py-2 rounded-md border border-orange-300/25 bg-[#3a1f18]/70 text-amber-100 text-sm transition hover:bg-[#5c2d14]/80 hover:border-orange-300/50 hover:text-orange-200"
      >
              {'>'} About
            </a>
            <a
              href="#experience"
              onClick={() => setMobileMenuIsOpen(false)}
              className="inline-flex w-44 px-4 py-2 rounded-md border border-orange-300/25 bg-[#3a1f18]/70 text-amber-100 text-sm transition hover:bg-[#5c2d14]/80 hover:border-orange-300/50 hover:text-orange-200"
            >
                {'>'} Experience
            </a>
            <a
              href="#projects"
              onClick={() => setMobileMenuIsOpen(false)}
              className="inline-flex w-44 px-4 py-2 rounded-md border border-orange-300/25 bg-[#3a1f18]/70 text-amber-100 text-sm transition hover:bg-[#5c2d14]/80 hover:border-orange-300/50 hover:text-orange-200"
            >
                {'>'} Projects
            </a>
            </div>

            {/* Optional: Social icons in mobile menu */}
            <div className="flex justify-start gap-5">
              <a
                href="https://github.com/jordanjasonclifford"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => track("Navbar GitHub Click")}
                className="p-2 rounded-lg border border-orange-300/20 bg-[#3a1f18]/70 text-amber-100 hover:bg-[#5c2d14]/80 hover:border-orange-300/50 hover:text-orange-200 transition"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com/in/jordan-jason-clifford"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => track("Navbar LinkedIn Click")}
                className="p-2 rounded-lg border border-orange-300/20 bg-[#3a1f18]/70 text-amber-100 hover:bg-[#5c2d14]/80 hover:border-orange-300/50 hover:text-orange-200 transition"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="mailto:jordanclifford@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => track("Navbar Email Click")}
                className="p-2 rounded-lg border border-orange-300/20 bg-[#3a1f18]/70 text-amber-100 hover:bg-[#5c2d14]/80 hover:border-orange-300/50 hover:text-orange-200 transition"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

