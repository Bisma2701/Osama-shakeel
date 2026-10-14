"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Star } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.08, ease: "easeOut" as const },
  }),
};

const stats = [
  { value: "4+", label: "Years Experience" },
  { value: "50+", label: "Systems Built" },
  { value: "99.8%", label: "Client Uptime" },
];

export default function Hero() {
  return (
    <section className="relative pt-20 pb-16 bg-white overflow-hidden">
      {/* Background: very subtle radial glow top-right */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 80% 20%, #EFF6FF 0%, transparent 70%)",
        }}
      />
      {/* Dot grid */}
      <div
        className="absolute inset-0 opacity-[0.028] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(#94A3B8 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />

      {/* Growing graph watermark */}
      <svg
        className="absolute inset-x-0 bottom-0 w-full h-[55%] pointer-events-none opacity-[0.05]"
        viewBox="0 0 1200 400"
        preserveAspectRatio="none"
        fill="none"
      >
        <defs>
          <linearGradient id="heroGrowthFill" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#2563EB" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#2563EB" stopOpacity="0" />
          </linearGradient>
        </defs>
        <path
          d="M0,380 L100,360 L200,340 L300,300 L400,320 L500,260 L600,240 L700,200 L800,180 L900,140 L1000,110 L1100,70 L1200,40 L1200,400 L0,400 Z"
          fill="url(#heroGrowthFill)"
        />
        <path
          d="M0,380 L100,360 L200,340 L300,300 L400,320 L500,260 L600,240 L700,200 L800,180 L900,140 L1000,110 L1100,70 L1200,40"
          stroke="#2563EB"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>

      <div className="relative max-w-screen-2xl mx-auto px-6 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-8 items-center">
        {/* ════════════════ TEXT ════════════════ */}
        <div className="flex flex-col max-w-2xl">
          {/* Status pill */}
          <motion.div
            custom={0}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="self-start mb-5"
          >
            <div className="inline-flex items-center gap-2.5 pl-1.5 pr-4 py-1.5 rounded-full bg-white border border-gray-200 shadow-sm shadow-gray-100">
              <span className="flex items-center justify-center w-5 h-5 rounded-full bg-[#14B8A6]/15">
                <span className="w-1.5 h-1.5 rounded-full bg-[#14B8A6] animate-pulse" />
              </span>
              <span className="text-xs font-semibold text-[#111827] tracking-wide">
                Available for projects
              </span>
              <span className="text-[10px] font-medium text-gray-400 border-l border-gray-200 pl-2.5">
                AI Solutions Architect
              </span>
            </div>
          </motion.div>

          {/* Headline */}
          <motion.h1
            custom={1}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="text-[2.9rem] lg:text-[3.5rem] font-bold leading-[1.06] tracking-[-0.02em] text-[#111827] mb-5"
          >
            You Built a Business,
            <br />
            Not a Second Job.
            <br />{" "}
            <span
              className="relative"
              style={{
                background: "linear-gradient(135deg, #2563EB 0%, #14B8A6 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Let Systems Run It.
            </span>
          </motion.h1>

          {/* Subtext */}
          <motion.p
            custom={2}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="text-[15.5px] text-gray-500 leading-[1.75] max-w-[430px] mb-8"
          >
            Every industry is shifting to AI-driven systems, and the
            businesses still running on manual work are the ones losing
            deals, time, and market share. I build the automation that keeps
            you ahead of that shift, not behind it.
          </motion.p>

          {/* CTAs */}
          <motion.div
            custom={3}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="flex flex-wrap gap-3 mb-8"
          >
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#111827] text-white text-sm font-semibold hover:bg-[#1a2332] active:scale-[0.98] transition-all shadow-lg shadow-gray-900/10"
            >
              View My Work
              <ArrowRight size={15} />
            </a>
            <a
              href="#reviews"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-gray-200 bg-white text-[#111827] text-sm font-semibold hover:border-[#2563EB]/40 hover:bg-blue-50/60 active:scale-[0.98] transition-all shadow-sm"
            >
              <Star size={14} className="fill-[#F59E0B] text-[#F59E0B]" />
              What Clients Say
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div
            custom={4}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="flex items-center gap-0 pt-6 border-t border-gray-100"
          >
            {stats.map((s, i) => (
              <div key={s.label} className="flex items-center">
                <div className="pr-8">
                  <div className="text-[1.6rem] font-bold text-[#111827] tracking-tight leading-none">
                    {s.value}
                  </div>
                  <div className="text-xs text-gray-400 font-medium mt-1.5">
                    {s.label}
                  </div>
                </div>
                {i < stats.length - 1 && (
                  <div className="h-9 w-px bg-gray-200 mr-8" />
                )}
              </div>
            ))}
          </motion.div>
        </div>

        {/* ════════════════ PHONE MOCKUP ════════════════ */}
        <motion.div
          initial={{ opacity: 0, y: 24, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.65, delay: 0.3, ease: "easeOut" }}
          className="relative flex justify-center lg:justify-end lg:pr-8 xl:pr-14"
        >
          <Image
            src="/mob1.png"
            alt="Automation Overview mobile app showing revenue, leads, and automation performance metrics"
            width={1024}
            height={1536}
            sizes="(max-width: 640px) 280px, 350px"
            className="relative w-auto h-auto max-w-full max-h-[420px] sm:max-h-[460px] lg:max-h-[520px]"
            style={{
              maskImage:
                "radial-gradient(ellipse 65% 70% at 50% 50%, black 55%, transparent 100%)",
              WebkitMaskImage:
                "radial-gradient(ellipse 65% 70% at 50% 50%, black 55%, transparent 100%)",
            }}
            priority
          />
        </motion.div>
        </div>

        {/* ════════════════ DASHBOARD SHOWCASE ════════════════ */}
        <motion.div
          initial={{ opacity: 0, y: 24, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.65, delay: 0.3, ease: "easeOut" }}
          className="relative mt-16"
        >
          {/* Ambient glow: soft, centered, no hard edges */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-[70%] h-[70%] bg-gradient-to-br from-[#2563EB]/10 via-transparent to-[#14B8A6]/10 blur-3xl rounded-full" />
          </div>

          <div className="relative flex justify-center">
            <Image
              src="/da3.png"
              alt="Automation Overview dashboard shown on a MacBook Pro, displaying revenue, deals, leads, and RevOps automation performance metrics"
              width={1448}
              height={1086}
              sizes="(max-width: 1024px) 100vw, 1104px"
              className="w-auto h-auto max-w-full"
              loading="lazy"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
