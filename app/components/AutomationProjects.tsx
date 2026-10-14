"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, X, TrendingUp, ChevronDown } from "lucide-react";

interface ProjectItem {
  number: string;
  title: string;
  category: string;
  description: string;
  flow: string[];
  results: { metric: string; label: string }[];
  tech: string[];
  color: string;
  status?: string;
  thumbnailContain?: boolean;
  images: { src: string; alt: string }[];
}

const projects: ProjectItem[] = [
  {
    number: "01",
    title: "AI-Powered Multi-Client Outbound Revenue Operations & Campaign Automation Engine",
    category: "RevOps Automation",
    description:
      "A B2B agency was spending hours manually managing client campaigns, lead routing, reply checks, CRM updates, campaign performance, and reporting. I built an n8n-powered operations engine connecting Airtable, Instantly, GoHighLevel, AI, and Gmail to automate the company's outbound campaign operations end to end. It dynamically routes leads, classifies replies, moves high-intent prospects into sales pipelines, suppresses invalid contacts, monitors campaign health, and generates client-specific KPI dashboards and weekly performance reports. The system replaces repetitive manual coordination with centralized, measurable, and scalable operations.",
    flow: ["Campaign Launch", "Lead Routing", "Instantly Outreach", "Reply Classification", "AI Intent Detection", "GHL Pipeline Move", "Contact Suppression", "Campaign Health Monitor", "KPI Dashboard Sync", "Weekly Report Generation"],
    results: [
      { metric: "100%", label: "Ops automated" },
      { metric: "Auto", label: "Reply classification" },
      { metric: "Real-time", label: "KPI dashboards" },
      { metric: "0", label: "Manual reporting" },
      { metric: "Multi-client", label: "Campaign management" },
      { metric: "AI", label: "Intent detection" },
    ],
    tech: ["n8n", "Airtable", "Instantly", "GoHighLevel", "OpenAI", "Gmail"],
    color: "#7C3AED",
    thumbnailContain: true,
    images: [
      { src: "/i4.png", alt: "AI Multi-Client Outbound RevOps Engine — KPI dashboard" },
      { src: "/i1.png", alt: "AI Multi-Client Outbound RevOps Engine — campaign overview" },
      { src: "/i5.png", alt: "AI Multi-Client Outbound RevOps Engine — lead routing workflow" },
      { src: "/i3.png", alt: "AI Multi-Client Outbound RevOps Engine — reply classification" },
    ],
  },
  {
    number: "02",
    title: "End-to-End AI RevOps Automation: Lead Qualification, CRM Sync & Revenue Pipeline Management",
    category: "RevOps Automation",
    description:
      "AI-powered RevOps automation built in n8n that captures leads, validates emails, qualifies prospects with AI, updates Salesforce, schedules meetings, sends Slack/Gmail alerts, and syncs dashboard data for real-time revenue visibility.",
    flow: ["Lead Intake Webhook", "ZeroBounce Validation", "Salesforce Dedup Check", "AI Lead Qualification", "Salesforce Lead/Opportunity", "Meeting Conflict Check", "Calendly Link Generation", "Gmail Notification", "Slack Alert", "Dashboard Sheet Sync"],
    results: [
      { metric: "0", label: "Duplicate CRM records" },
      { metric: "100%", label: "Workflow automated" },
      { metric: "Auto", label: "Meeting scheduling" },
      { metric: "AI", label: "Lead qualification" },
      { metric: "35%+", label: "Revenue pipeline growth" },
      { metric: "3x", label: "More qualified clients" },
    ],
    tech: ["n8n", "Salesforce", "OpenAI", "ZeroBounce", "Calendly", "Gmail", "Slack", "Google Sheets"],
    color: "#0891B2",
    thumbnailContain: true,
    images: [
      { src: "/rev2.png", alt: "AI RevOps Pipeline Automation — Salesforce lead qualification flow" },
      { src: "/rev1.png", alt: "AI RevOps Pipeline Automation — n8n workflow overview" },
      { src: "/rev3.png", alt: "AI RevOps Pipeline Automation — meeting scheduling and Calendly integration" },
      { src: "/rev4.png", alt: "AI RevOps Pipeline Automation — Slack alerts and dashboard sync" },
    ],
  },
  {
    number: "03",
    title: "GHL + Meta Ads Form Automation: Webhook-Triggered Lead Capture, CRM Sync & Pipeline Management",
    category: "Sales Automation",
    description:
      "Automation that fires the moment a Meta Ads lead form (or any platform form) is submitted. The webhook instantly captures the data, creates and tags the contact in GoHighLevel, pushes them into the right pipeline stage, fires Slack/WhatsApp alerts to the sales team, and triggers automated follow-up sequences, ensuring every lead is captured, organized, and acted on without any manual work.",
    flow: ["Meta Ads Form Submit", "Webhook Trigger", "Lead Data Capture", "GHL Contact Create", "Pipeline Stage Update", "Tag & Segment", "Auto Follow-up", "Slack/WhatsApp Alert", "CRM Status Sync"],
    results: [
      { metric: "80%", label: "Less manual work" },
      { metric: "40-50%", label: "Higher lead quality" },
      { metric: "90%+", label: "Email deliverability" },
    ],
    tech: ["n8n", "WhatsApp Business API", "GoHighLevel", "Meta Ads", "Webhook", "Slack", "Airtable"],
    color: "#059669",
    thumbnailContain: true,
    images: [
      { src: "/g4.png", alt: "GHL Meta Ads Form Automation pipeline details" },
      { src: "/g3.png", alt: "GHL Meta Ads Form Automation overview infographic" },
      { src: "/g1.png", alt: "n8n workflow canvas for GHL Meta Ads Form Automation" },
    ],
  },
  {
    number: "04",
    title: "AI-Powered E-Commerce Store Automation: Real-Time Inventory Sync, Order Processing, Smart Fulfillment & Customer Retention Pipeline",
    category: "E-Commerce Automation",
    description:
      "End-to-end e-commerce automation built in n8n that captures Shopify orders in real-time, validates payments via Stripe, syncs inventory across all sales channels, triggers 3PL fulfillment, generates shipping labels, sends branded customer notifications, auto-recovers abandoned carts with AI-personalized emails, fires low-stock Slack alerts, and pushes live revenue metrics to a real-time analytics dashboard — eliminating 95% of manual store operations and turning a reactive store into a fully autonomous revenue machine.",
    flow: ["Shopify Order Webhook", "Stripe Payment Verify", "Inventory Level Check", "Multi-Channel Stock Sync", "3PL Fulfillment Trigger", "Shipping Label Generate", "Customer Email/SMS", "Abandoned Cart Detect", "AI Recovery Email", "Low Stock Slack Alert", "Revenue Dashboard Sync"],
    results: [
      { metric: "95%", label: "Manual ops eliminated" },
      { metric: "3x", label: "Faster order fulfillment" },
      { metric: "0", label: "Overselling incidents" },
      { metric: "60%", label: "Abandoned cart recovery" },
      { metric: "Auto", label: "Customer notifications" },
      { metric: "Real-time", label: "Revenue visibility" },
    ],
    tech: ["n8n", "Shopify", "Stripe", "Klaviyo", "OpenAI", "Twilio", "Slack", "Google Sheets"],
    color: "#D97706",
    thumbnailContain: true,
    images: [
      { src: "/ecome3.png", alt: "AI E-Commerce Store Automation — full automation overview" },
      { src: "/ecom1.png", alt: "AI E-Commerce Store Automation — order processing and fulfillment pipeline" },
      { src: "/ecom.png", alt: "AI E-Commerce Store Automation — n8n workflow canvas and integrations" },
    ],
  },
  {
    number: "05",
    title: "Wise Pelican RevOps Automation",
    category: "RevOps Automation",
    description:
      "Full revenue-operations automation layer built on top of a custom MERN CRM for a US real estate marketing company, connecting farm-area targeting, postcard campaigns, lead capture, and sales follow-ups into one system.",
    flow: ["Farm Area Targeting", "Postcard Campaign", "Print & Mail Dispatch", "QR/Lead Capture", "Custom CRM Sync", "Sales Automation", "Follow-up Management", "Revenue Analytics"],
    results: [
      { metric: "40%", label: "Efficiency gain" },
      { metric: "$150K/day", label: "Postcard sales" },
      { metric: "1 yr", label: "Maintained" },
    ],
    tech: ["MongoDB", "Express", "React", "Node.js", "REVOps"],
    color: "#DB2777",
    images: [{ src: "/w1.png", alt: "Wise Pelican PowerFarm lead automation dashboard" }],
  },
  {
    number: "06",
    title: "Full-Funnel AI Lead Sourcing, Enrichment & Personalized Outreach Automation",
    category: "Sales Automation",
    description:
      "n8n workflow that sources, verifies, and enriches leads, then sends Claude-personalized outreach with automatic 3-day follow-ups and CRM sync.",
    flow: ["Apollo", "ZeroBounce", "Google Sheets", "HubSpot", "Website Research", "Claude AI", "Gmail", "3-Day Follow-up", "Slack"],
    results: [
      { metric: "80%", label: "Less manual work" },
      { metric: "40-50%", label: "Higher lead quality" },
      { metric: "100%", label: "Personalized" },
    ],
    tech: ["n8n", "Claude", "Apollo", "ZeroBounce", "HubSpot", "Gmail", "Slack"],
    color: "#2563EB",
    images: [
      { src: "/h2.png", alt: "AI Lead Outreach Automation overview infographic" },
      { src: "/h1.png", alt: "n8n workflow canvas for AI Lead Outreach Automation" },
      { src: "/h4.png", alt: "AI Lead Outreach Automation pipeline details" },
    ],
  },
  {
    number: "07",
    title: "SaaS Payment Validation & CRM Onboarding Automation",
    category: "Onboarding Automation",
    description:
      "n8n workflow that validates SaaS signup payments via Stripe, alerts failed payments, creates and tags GoHighLevel contacts, sends welcome and confirmation emails, and keeps CRM status synced through every onboarding stage.",
    flow: ["Stripe Payment Check", "Failed Payment Alert (Slack)", "GHL Contact Create/Update", "Onboarding Tag", "Welcome Email", "Team Slack Notify", "1-Day Booking Wait", "Confirmation/Reminder Email", "CRM Status Update"],
    results: [
      { metric: "100%", label: "Payment accuracy" },
      { metric: "0", label: "Missed payments" },
      { metric: "Auto", label: "CRM status sync" },
    ],
    tech: ["n8n", "Stripe", "GoHighLevel", "Gmail", "Slack"],
    color: "#7C3AED",
    images: [
      { src: "/s1.png", alt: "n8n workflow canvas for SaaS Payment Validation & CRM Onboarding Automation" },
    ],
  },
];

type Project = ProjectItem;

const INITIAL_COUNT = 3;

export default function AutomationProjects() {
  const [selected, setSelected] = useState<Project | null>(null);
  const [showAll, setShowAll] = useState(false);
  const visibleProjects = showAll ? projects : projects.slice(0, INITIAL_COUNT);

  return (
    <>
        <div className="space-y-4">
          {visibleProjects.map((p, i) => (
            <motion.div
              key={p.number}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className={`flex flex-col gap-6 p-4 sm:p-5 rounded-2xl border border-gray-200 bg-white shadow-sm hover:shadow-lg hover:shadow-gray-200/70 hover:border-gray-300 transition-all duration-300 ${
                i % 2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse"
              }`}
            >
              {/* Thumbnail */}
              <div className="relative w-full sm:w-1/2 aspect-[16/10] rounded-xl overflow-hidden shrink-0 bg-gray-50">
                <Image
                  src={p.images[0].src}
                  alt={p.images[0].alt}
                  fill
                  sizes="(max-width: 640px) 100vw, 50vw"
                  className={p.thumbnailContain ? "object-contain" : "object-cover object-top"}
                />
                <span
                  className="absolute top-3 left-3 text-[11px] font-semibold px-2.5 py-1 rounded-full text-white"
                  style={{ background: p.color }}
                >
                  {p.category}
                </span>
                {p.status && (
                  <span className="absolute top-3 right-3 text-[11px] font-semibold px-2.5 py-1 rounded-full bg-white/90 text-gray-600 border border-gray-200">
                    {p.status}
                  </span>
                )}
              </div>

              {/* Content */}
              <div className="flex-1 min-w-0 flex flex-col justify-center">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xs font-mono font-bold" style={{ color: p.color }}>
                    {p.number}
                  </span>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-[#111827] mb-2 leading-snug">
                  {p.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed mb-4 line-clamp-3">
                  {p.description}
                </p>

                <div className="flex flex-wrap gap-1.5 mb-4">
                  {p.tech.slice(0, 4).map((t) => (
                    <span
                      key={t}
                      className="text-[11px] font-medium px-2 py-0.5 rounded-md bg-gray-50 border border-gray-100 text-gray-500"
                    >
                      {t}
                    </span>
                  ))}
                  {p.tech.length > 4 && (
                    <span className="text-[11px] font-medium px-2 py-0.5 text-gray-400">
                      +{p.tech.length - 4} more
                    </span>
                  )}
                </div>

                <button
                  onClick={() => setSelected(p)}
                  className="inline-flex items-center gap-1.5 text-sm font-semibold w-fit"
                  style={{ color: p.color }}
                >
                  See more <ArrowRight size={13} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {projects.length > INITIAL_COUNT && (
          <div className="flex justify-center mt-8">
            <button
              onClick={() => setShowAll(!showAll)}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-gray-200 bg-white text-sm font-semibold text-gray-600 hover:border-gray-300 hover:text-gray-900 hover:shadow-sm transition-all"
            >
              {showAll ? "Show less" : "See more samples"}
              <ChevronDown
                size={15}
                className={`transition-transform duration-200 ${showAll ? "rotate-180" : ""}`}
              />
            </button>
          </div>
        )}

      {/* Modal */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => setSelected(null)}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
          >
            <motion.div
              initial={{ opacity: 0, y: 24, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 12, scale: 0.98 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              onClick={(e) => e.stopPropagation()}
              className="relative bg-white rounded-2xl w-full max-w-2xl max-h-[85vh] overflow-y-auto shadow-2xl"
            >
              <button
                onClick={() => setSelected(null)}
                className="absolute top-4 right-4 z-10 w-8 h-8 rounded-full bg-white/90 border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors"
              >
                <X size={16} className="text-gray-500" />
              </button>

              <div className="p-6 sm:p-8">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs font-mono font-bold" style={{ color: selected.color }}>
                    {selected.number}
                  </span>
                  <span
                    className="text-[10px] font-semibold px-2.5 py-1 rounded-full text-white"
                    style={{ background: selected.color }}
                  >
                    {selected.category}
                  </span>
                  {selected.status && (
                    <span className="text-[10px] font-semibold px-2.5 py-1 rounded-full bg-gray-100 text-gray-600 border border-gray-200">
                      {selected.status}
                    </span>
                  )}
                </div>
                <h3 className="text-xl font-bold text-[#111827] mb-3">{selected.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed mb-6">
                  {selected.description}
                </p>

                {/* Images */}
                <div
                  className={`grid gap-3 mb-6 ${
                    selected.images.length > 1 ? "grid-cols-1 sm:grid-cols-2" : "grid-cols-1"
                  }`}
                >
                  {selected.images.map((img) => (
                    <div
                      key={img.src}
                      className="relative rounded-lg border border-gray-200 overflow-hidden bg-gray-50"
                    >
                      <Image
                        src={img.src}
                        alt={img.alt}
                        width={900}
                        height={560}
                        className="w-full h-auto"
                      />
                    </div>
                  ))}
                </div>

                {/* Results */}
                <div className="text-[11px] font-semibold text-gray-400 uppercase tracking-wide mb-2.5">
                  Business Outcomes
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 mb-6">
                  {selected.results.map((r) => (
                    <div
                      key={r.label}
                      className="rounded-lg p-3 text-center"
                      style={{ background: selected.color + "0A" }}
                    >
                      <div className="flex items-center justify-center gap-1 mb-0.5">
                        <TrendingUp size={11} style={{ color: selected.color }} />
                        <span className="text-sm font-bold" style={{ color: selected.color }}>
                          {r.metric}
                        </span>
                      </div>
                      <div className="text-[10px] text-gray-400 leading-tight">{r.label}</div>
                    </div>
                  ))}
                </div>

                {/* Flow */}
                <div className="text-[11px] font-semibold text-gray-400 uppercase tracking-wide mb-2.5">
                  Workflow Steps
                </div>
                <div className="flex flex-wrap items-center gap-1.5 mb-6">
                  {selected.flow.map((step, si) => (
                    <div key={si} className="flex items-center gap-1.5">
                      <span
                        className="text-[11px] font-medium px-2.5 py-1 rounded-md text-white"
                        style={{ background: selected.color }}
                      >
                        {step}
                      </span>
                      {si < selected.flow.length - 1 && (
                        <span className="text-gray-300 text-xs">→</span>
                      )}
                    </div>
                  ))}
                </div>

                {/* Tech */}
                <div className="flex flex-wrap gap-1.5">
                  {selected.tech.map((t) => (
                    <span
                      key={t}
                      className="text-[11px] font-medium px-2.5 py-1 rounded-md bg-gray-50 border border-gray-100 text-gray-500"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
