"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { LinkedInIcon, GitHubIcon } from "./icons";

const links = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const socials = [
  { icon: LinkedInIcon, href: "https://www.linkedin.com/in/osama-shakeel-4777b318a", label: "LinkedIn" },
  { icon: GitHubIcon, href: "https://github.com/osama-shakeel56", label: "GitHub" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-md border-b border-[#2563EB]/15 shadow-sm shadow-[#2563EB]/5"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-screen-2xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2.5 group">
          <span className="w-8 h-8 rounded-full overflow-hidden ring-2 ring-white shadow-sm shrink-0">
            <Image
              src="/usama.jpg"
              alt="   Osama Shakeel"
              width={64}
              height={64}
              className="w-full h-full object-cover object-[center_15%]"
            />
          </span>
          <span className="font-semibold text-[#111827] text-sm tracking-tight">
               Osama Shakeel
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-gray-500 hover:text-[#111827] transition-colors font-medium"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <div className="flex items-center gap-2">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="group w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center hover:border-[#111827] hover:bg-[#111827] transition-all duration-300"
              >
                <s.icon size={14} className="text-gray-500 group-hover:text-white transition-colors" />
              </a>
            ))}
          </div>
          <a
            href="#contact"
            className="text-sm font-semibold px-4 py-2 rounded-lg bg-[#111827] text-white hover:bg-[#1F2937] transition-colors"
          >
            Get in Touch
          </a>
        </div>

        <button
          className="md:hidden p-2 rounded-md text-gray-500 hover:text-[#111827]"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-gray-100 overflow-hidden"
          >
            <div className="px-6 py-4 flex flex-col gap-4">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="text-sm text-gray-600 hover:text-[#111827] font-medium py-1"
                >
                  {l.label}
                </a>
              ))}
              <div className="flex items-center gap-2 pt-1">
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="w-9 h-9 rounded-full border border-gray-200 flex items-center justify-center hover:border-[#111827] hover:bg-[#111827] group transition-all duration-300"
                  >
                    <s.icon size={15} className="text-gray-500 group-hover:text-white transition-colors" />
                  </a>
                ))}
              </div>
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="text-sm font-semibold px-4 py-2 rounded-lg bg-[#111827] text-white text-center mt-2"
              >
                Get in Touch
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
