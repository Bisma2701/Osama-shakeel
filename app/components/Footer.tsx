import { Mail } from "lucide-react";
import { LinkedInIcon, GitHubIcon } from "./icons";

const socials = [
  { icon: LinkedInIcon, href: "https://www.linkedin.com/in/osama-shakeel-4777b318a-4777b318a/", label: "LinkedIn" },
  { icon: GitHubIcon, href: "https://github.com/ShakeelOsama", label: "GitHub" },
  { icon: Mail, href: "https://mail.google.com/mail/?view=cm&fs=1&to=shakeelosama76@gmail.com", label: "Email" },
];

   export default function Footer() {
  const year = 2024;
  return (
    <footer className="bg-[#111827] text-white">
      <div className="max-w-screen-2xl mx-auto px-6 py-14">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-7 h-7 rounded-lg bg-white/10 flex items-center justify-center text-white text-xs font-bold">
                OS
              </span>
              <span className="font-semibold text-sm tracking-tight">
                   Osama Shakeel
              </span>
            </div>
            <p className="text-xs text-gray-400 max-w-xs leading-relaxed">
              AI Solutions Architect building intelligent automation systems
              that scale businesses.
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-8">
            <div>
              <div className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-3">
                Navigation
              </div>
              <div className="flex flex-col gap-2">
                {["About", "Services", "Projects", "Reviews", "Contact"].map((l) => (
                  <a
                    key={l}
                    href={`#${l.toLowerCase()}`}
                    className="text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    {l}
                  </a>
                ))}
              </div>
            </div>
            <div>
              <div className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-3">
                Connect
              </div>
              <div className="flex items-center gap-3">
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target={s.href.startsWith("http") ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="group w-10 h-10 rounded-full bg-white/[0.06] border border-white/10 flex items-center justify-center hover:bg-white hover:border-white transition-all duration-300 hover:-translate-y-0.5"
                  >
                    <s.icon
                      size={16}
                      className="text-gray-300 group-hover:text-[#111827] transition-colors"
                    />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-500">
            © {year}    Osama Shakeel. All rights reserved.
          </p>
          <p className="text-xs text-gray-600">
            AI Solutions Architect · Business Automation · Custom Software
          </p>
        </div>
      </div>
    </footer>
  );
}
