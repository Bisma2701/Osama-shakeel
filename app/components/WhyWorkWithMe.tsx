"use client";

import { motion } from "framer-motion";
import {
  Building2,
  ShieldCheck,
  Code2,
  TrendingUp,
  Link2,
  Target,
  Headphones,
} from "lucide-react";

const reasons = [
  {
    icon: Building2,
    title: "Enterprise Architecture",
    desc: "Every system is designed with the rigor and structure of enterprise software, not quick hacks that break at scale.",
    color: "#2563EB",
  },
  {
    icon: ShieldCheck,
    title: "Production-Ready Systems",
    desc: "I don't deliver prototypes. Every system goes through proper testing, error handling, and monitoring before it touches your business.",
    color: "#14B8A6",
  },
  {
    icon: Code2,
    title: "Clean, Documented Code",
    desc: "Your team can maintain, extend, and understand every system I build. No black boxes. No dependency on me forever.",
    color: "#8B5CF6",
  },
  {
    icon: TrendingUp,
    title: "Scalable Automation",
    desc: "Built to handle 10x your current volume without rearchitecting. Scalability is designed in from the start.",
    color: "#F59E0B",
  },
  {
    icon: Link2,
    title: "Reliable Integrations",
    desc: "Robust error handling, retry logic, and failover mechanisms ensure your integrations keep running when APIs misbehave.",
    color: "#EF4444",
  },
  {
    icon: Target,
    title: "Business-First Approach",
    desc: "Every technical decision maps back to a business outcome. I measure success in ROI, not lines of code.",
    color: "#10B981",
  },
  {
    icon: Headphones,
    title: "Long-Term Support",
    desc: "I build lasting partnerships, not one-time transactions. Ongoing support, monitoring, and optimization available.",
    color: "#6366F1",
  },
];

export default function WhyWorkWithMe() {
  return (
    <section className="py-28 bg-[#F9FAFB]">
      <div className="max-w-screen-2xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-xs font-semibold text-[#2563EB] uppercase tracking-widest">
            Why Work With Me
          </span>
          <h2 className="mt-3 text-4xl font-bold text-[#111827] tracking-tight">
            What sets this apart
          </h2>
          <p className="mt-4 text-gray-500 max-w-lg mx-auto text-[15px]">
            Anyone can write code. Building systems that reliably automate
            business-critical operations is a different discipline entirely.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {reasons.map((r, i) => (
            <motion.div
              key={r.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.05 }}
              className="group bg-white rounded-xl border border-gray-200 border-l-[3px] shadow-sm p-6 hover:border-gray-300 hover:shadow-lg hover:shadow-gray-200/60 transition-all duration-300"
              style={{ borderLeftColor: r.color }}
            >
              <div
                className="w-9 h-9 rounded-lg flex items-center justify-center mb-4"
                style={{ background: r.color + "12" }}
              >
                <r.icon size={16} style={{ color: r.color }} />
              </div>
              <h3 className="font-semibold text-[#111827] text-sm mb-2">
                {r.title}
              </h3>
              <p className="text-xs text-gray-400 leading-relaxed">{r.desc}</p>
            </motion.div>
          ))}

          {/* CTA card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.4 }}
            className="rounded-xl bg-[#111827] p-6 flex flex-col justify-between"
          >
            <div>
              <div className="text-lg font-bold text-white mb-2 leading-snug">
                Ready to automate your operations?
              </div>
              <p className="text-xs text-gray-400 leading-relaxed">
                Let&apos;s talk about what&apos;s possible for your business.
              </p>
            </div>
            <a
              href="#contact"
              className="mt-6 inline-flex items-center justify-center px-4 py-2.5 rounded-lg bg-[#2563EB] text-white text-xs font-semibold hover:bg-[#1D4ED8] transition-colors"
            >
              Get in Touch →
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
