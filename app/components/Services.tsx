"use client";

import { motion } from "framer-motion";
import {
  Bot,
  GitBranch,
  Users,
  Layers,
  Code2,
  Cpu,
  Plug,
  LayoutDashboard,
} from "lucide-react";

const services = [
  {
    icon: Bot,
    title: "AI Automation",
    desc: "End-to-end AI pipelines that qualify leads, generate content, handle support, and make intelligent decisions at scale.",
    tag: "Most Popular",
    color: "#2563EB",
    bg: "#2563EB",
  },
  {
    icon: GitBranch,
    title: "Business Process Automation",
    desc: "Map, design, and automate complex multi-step business workflows that eliminate manual bottlenecks.",
    color: "#8B5CF6",
    bg: "#8B5CF6",
  },
  {
    icon: Users,
    title: "CRM Automation",
    desc: "Automate your entire CRM pipeline, including lead capture, scoring, nurture sequences, and handoffs, in HubSpot, GHL, or Salesforce.",
    color: "#14B8A6",
    bg: "#14B8A6",
  },
  {
    icon: Layers,
    title: "Internal SaaS Platforms",
    desc: "Custom internal tools and dashboards that give your team real-time visibility and control over operations.",
    color: "#F59E0B",
    bg: "#F59E0B",
  },
  {
    icon: Code2,
    title: "Custom Software Development",
    desc: "Full-stack applications built with Next.js, Node.js, TypeScript, and PostgreSQL, engineered for scale and reliability.",
    color: "#EF4444",
    bg: "#EF4444",
  },
  {
    icon: Cpu,
    title: "AI Agents",
    desc: "Autonomous AI agents powered by LangChain/LangGraph that research, decide, and act on your behalf, 24/7.",
    color: "#06B6D4",
    bg: "#06B6D4",
  },
  {
    icon: Plug,
    title: "API & WhatsApp Integrations",
    desc: "Seamlessly connect any stack: WhatsApp Business API, CRMs, payment processors, communication platforms, and databases into unified automated workflows.",
    tag: "WhatsApp Ready",
    color: "#10B981",
    bg: "#10B981",
  },
  {
    icon: LayoutDashboard,
    title: "Dashboard Development",
    desc: "Real-time analytics dashboards with role-based access, live data, and beautiful data visualization.",
    color: "#6366F1",
    bg: "#6366F1",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-28 bg-white">
      <div className="max-w-screen-2xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-xs font-semibold text-[#2563EB] uppercase tracking-widest">
            Services
          </span>
          <h2 className="mt-3 text-4xl font-bold text-[#111827] tracking-tight">
            What I build for businesses
          </h2>
          <p className="mt-4 text-gray-500 max-w-xl mx-auto text-[15px]">
            From AI-powered automation to full-stack SaaS platforms, every
            engagement is scoped to deliver measurable business impact.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.05 }}
              className="group relative bg-gray-50 rounded-xl border border-gray-200 border-l-[3px] shadow-sm p-6 hover:border-gray-300 hover:shadow-lg hover:shadow-gray-200/60 transition-all duration-300 cursor-default"
              style={{ borderLeftColor: s.color }}
            >
              {s.tag && (
                <span
                  className="absolute top-4 right-4 text-[10px] font-semibold px-2 py-0.5 rounded-full"
                  style={{
                    background: s.color + "15",
                    color: s.color,
                  }}
                >
                  {s.tag}
                </span>
              )}
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center mb-4"
                style={{ background: s.bg + "12" }}
              >
                <s.icon size={18} style={{ color: s.color }} />
              </div>
              <h3 className="font-semibold text-[#111827] text-sm mb-2 leading-snug">
                {s.title}
              </h3>
              <p className="text-xs text-gray-400 leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
