"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import AutomationProjects from "./AutomationProjects";
import SoftwareProjects from "./SoftwareProjects";

type TabKey = "automation" | "development";

const tabs: { key: TabKey; label: string }[] = [
  { key: "automation", label: "Automation Deliverables" },
  { key: "development", label: "Development Projects" },
];

export default function Projects() {
  const [active, setActive] = useState<TabKey>("automation");

  return (
    <section id="projects" className="py-28 bg-[#F9FAFB]">
      <div className="max-w-screen-2xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-10"
        >
          <span className="text-xs font-semibold text-[#2563EB] uppercase tracking-widest">
            Projects
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-[#111827] tracking-tight max-w-lg leading-tight">
            AI systems and software built for real business outcomes
          </h2>
        </motion.div>

        {/* Tab Switcher */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="inline-flex p-1 rounded-full bg-white border border-gray-200 shadow-sm mb-10"
        >
          {tabs.map((tab) => {
            const isActive = active === tab.key;
            return (
              <button
                key={tab.key}
                onClick={() => setActive(tab.key)}
                className={`relative px-5 py-2.5 rounded-full text-sm font-semibold transition-colors duration-200 ${
                  isActive ? "text-white" : "text-gray-500 hover:text-gray-800"
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="projectsTabIndicator"
                    className="absolute inset-0 rounded-full bg-[#111827]"
                    transition={{ type: "spring", duration: 0.5, bounce: 0.15 }}
                  />
                )}
                <span className="relative z-10">{tab.label}</span>
              </button>
            );
          })}
        </motion.div>

        {active === "automation" ? <AutomationProjects /> : <SoftwareProjects />}
      </div>
    </section>
  );
}
