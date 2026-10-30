"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const highlights = [
  "10+ years of software engineering",
  "AI & machine learning integration",
  "Business process automation",
  "Custom SaaS platform development",
  "WhatsApp Business API automation",
  "API design & third-party integrations",
  "CRM systems & workflow architecture",
  "Business process optimization",
  "End-to-end production deployment",
];

const metrics = [
  { value: "20+", label: "Years Engineering" },
  { value: "50+", label: "Systems Built" },
  { value: "10x", label: "Avg. Efficiency Gain" },
  { value: "∞", label: "Scalability" },
];

export default function About() {
  return (
    <section id="about" className="py-28 bg-[#F9FAFB]">
      <div className="max-w-screen-2xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-xs font-semibold text-[#2563EB] uppercase tracking-widest">
              About
            </span>
            <h2 className="mt-3 text-4xl font-bold text-[#111827] leading-tight tracking-tight">
              Not just a developer.
              <br />
              An AI systems architect.
            </h2>
            <p className="mt-6 text-gray-500 leading-relaxed text-[15px]">
              I design and build enterprise-grade AI automation systems that
              directly impact revenue, reduce operational costs, and
              free teams from repetitive work.
            </p>
            <p className="mt-4 text-gray-500 leading-relaxed text-[15px]">
              With 10+ years of software engineering experience, I combine deep
              technical expertise with a business-first mindset. Every system I
              build is engineered for reliability, scalability, and measurable
              outcomes, not just functionality.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-3">
              {highlights.map((item) => (
                <div key={item} className="flex items-start gap-2">
                  <CheckCircle2 size={15} className="text-[#14B8A6] mt-0.5 shrink-0" />
                  <span className="text-sm text-gray-600">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: profile photo */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="flex flex-col items-center"
          >
            <div className="relative">
              {/* Glow behind photo */}
              <div className="absolute inset-0 flex items-center justify-center -z-10">
                <div className="w-64 h-64 sm:w-72 sm:h-72 rounded-full bg-gradient-to-br from-[#2563EB]/20 via-[#14B8A6]/15 to-transparent blur-3xl" />
              </div>

              {/* Photo ring */}
              <div className="w-60 h-60 sm:w-72 sm:h-72 rounded-full p-[3px] bg-gradient-to-br from-[#2563EB] via-[#14B8A6] to-[#2563EB]">
                <div className="w-full h-full rounded-full overflow-hidden border-[5px] border-white shadow-2xl shadow-gray-300/50">
                  <Image
                    src="/usama.jpg"
                    alt="   Osama Shakeel, AI Solutions Architect"
                    width={400}
                    height={400}
                    sizes="(max-width: 640px) 240px, 288px"
                    className="w-full h-full object-cover object-[center_15%]"
                  />
                </div>
              </div>
            </div>

            <div className="mt-6 text-center">
              <div className="text-base font-bold text-[#111827]">
                   Osama Shakeel
              </div>
              <div className="text-sm text-gray-400 mt-0.5">
                AI Solutions Architect
              </div>
            </div>

            {/* Compact stats strip */}
            <div className="mt-6 flex items-center gap-0 pt-6 border-t border-gray-200 w-full max-w-sm justify-center">
              {metrics.map((m, i) => (
                <div key={m.label} className="flex items-center">
                  <div className="px-5 text-center">
                    <div className="text-lg font-bold text-[#111827] tracking-tight leading-none">
                      {m.value}
                    </div>
                    <div className="text-[11px] text-gray-400 font-medium mt-1.5">
                      {m.label}
                    </div>
                  </div>
                  {i < metrics.length - 1 && (
                    <div className="h-8 w-px bg-gray-200" />
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
