"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Layers, Building2, UtensilsCrossed, Palette, Dumbbell, ExternalLink, ArrowRight, ChevronDown, X } from "lucide-react";

const projects = [
  {
    title: "Wise Pelican: Real Estate Marketing Platform",
    desc: "Custom MERN-stack business operating system for a US real estate marketing company, unifying postcard campaign creation, farm-area targeting, mailing, lead capture, and CRM follow-ups in one platform.",
    stack: ["MongoDB", "Express", "React", "Node.js"],
    features: ["Farm Area Targeting", "Custom CRM", "QR/Lead Tracking", "Revenue Analytics"],
    badge: "Enterprise Platform",
    color: "#0EA5E9",
    icon: Layers,
    link: "https://app.wisepelican.com",
    metrics: [
      { metric: "40%", label: "Efficiency gain" },
      { metric: "$150K/day", label: "Postcard sales" },
      { metric: "1 yr", label: "Maintained" },
    ],
    image: { src: "/w1.png", alt: "Wise Pelican real estate marketing platform dashboard" },
  },
  {
    title: "Ilmversity: AI-Powered LMS & School Management System",
    desc: "Comprehensive AI-powered LMS and School Management System trusted by 400+ institutions, 160,000+ students, and 12,000+ teachers across Pakistan and internationally. Consolidates the entire institutional lifecycle: AI timetable generation, biometric attendance (ZKTeco), digital admissions, fee collection with multiple payment gateways, academic analytics, and role-based portals for Admins, Teachers, Students, and Parents. Backed by Microsoft for Startups and a Microsoft award winner in Abu Dhabi.",
    stack: ["MongoDB", "Express.js", "React", "Node.js", "AI Timetable Generator", "Biometric Integration", "Payment Gateway", "Multi-tenant SaaS"],
    features: ["AI Timetable Generation", "Biometric Attendance", "Digital Admissions", "Multi-branch Management"],
    badge: "EdTech SaaS",
    color: "#7C3AED",
    icon: Layers,
    link: "https://ilmversity.com",
    metrics: [
      { metric: "400+", label: "Institutions" },
      { metric: "160K+", label: "Students" },
      { metric: "450K PKR", label: "Saved/yr per client" },
    ],
    image: { src: "/ilm.png", alt: "Ilmversity AI-powered LMS and school management system dashboard" },
  },
  {
    title: "Enterprise CRM & Project Operations Management Platform",
    desc: "An all-in-one CRM and project operations platform that helps businesses manage projects, clients, teams, tasks, tickets, products/services, alerts, reminders, meetings, and internal communication in one place. Includes advanced dashboards, project status tracking, priority management, automation rules, real-time chat, support ticket workflows, and reporting views, reducing manual coordination by 60% and improving team productivity by 40%.",
    stack: [
      "SaaS Development",
      "AI Platform",
      "CRM Development",
      "WebRTC",
      "Workflow Automation",
      "Real-time Chat",
      "Role-Based Auth",
    ],
    features: [
      "Project & Task Tracking",
      "Support Ticket Workflows",
      "Real-time Chat (WebRTC)",
      "Automation Rules",
    ],
    badge: "SaaS Platform",
    color: "#6366F1",
    icon: Building2,
    link: "https://app.maxoutcrm.com/",
    metrics: [
      { metric: "60%", label: "Less manual coordination" },
      { metric: "40%", label: "Higher team productivity" },
    ],
    image: { src: "/dev1.avif", alt: "Enterprise CRM & Project Operations Management Platform dashboard" },
  },
  {
    title: "STNDRD: Subscription-Based Fitness Platform for Web & Mobile",
    desc: "Built a subscription-based fitness platform for web and mobile, combining structured training programs, monthly workout planning, nutrition tracking, progress journeys, community pods, leaderboards, medals, and in-app engagement features. The platform helped scale a premium fitness subscription experience beyond $1M+ in revenue while supporting a large transformation-focused user base with recurring monthly and annual plans.",
    stack: [
      "Subscription Platform",
      "Fitness App",
      "Web App",
      "Mobile App",
      "Nutrition Tracking",
      "Community Features",
      "Leaderboards",
      "Recurring Payments",
    ],
    features: [
      "Structured Training Programs",
      "Nutrition Tracking",
      "Community Pods & Leaderboards",
      "Recurring Subscriptions",
    ],
    badge: "Fitness Platform",
    color: "#16A34A",
    icon: Dumbbell,
    status: "In Development",
    link: "https://www.stndrd.app/",
    metrics: [
      { metric: "$1M+", label: "Subscription revenue" },
      { metric: "Web + Mobile", label: "Cross-platform" },
      { metric: "Recurring", label: "Monthly & annual plans" },
    ],
    image: { src: "/gym.png", alt: "STNDRD subscription-based fitness platform dashboard" },
  },
  {
    title: "Tawla: Web & Mobile Restaurant OS",
    desc: "A cross-platform web and mobile restaurant management solution unifying POS billing, QR menu ordering, table reservations, payment processing, and analytics. Owners onboard in minutes: add menu items, arrange tables, set pricing, and go live immediately. Customers scan a QR code to order from their phones while staff process dine-in and takeaway orders with integrated card, cash, and digital payments, scalable from a single venue to multi-location operations.",
    stack: [
      "Web App",
      "Mobile App",
      "POS System",
      "QR Menu Ordering",
      "Table Reservations",
      "Payment Gateway",
      "Analytics & Reporting",
      "Multi-location SaaS",
    ],
    features: [
      "QR Menu Ordering",
      "Table Reservations",
      "Payment Gateway",
      "Analytics & Reporting",
    ],
    badge: "Restaurant OS",
    color: "#F97316",
    icon: UtensilsCrossed,
    link: "https://tawla.io/",
    image: { src: "/dev2.avif", alt: "Tawla restaurant management platform: POS billing, QR ordering, and reservations dashboard" },
  },
  {
    title: "PlayBase: Sports Venue Booking & Club Management ERP Platform",
    desc: "Built PlayBase, an online venue booking and club management platform for padel/sports venues. Players can search venues by city, book courts online, join clubs, and participate in tournaments. Venue owners get a complete portal with dashboard, booking management, venue management, customers, billing, invoices, finance tracking, payment processing, cafe invites, and revenue reports.",
    stack: ["Payment Gateway", "Invoicing", "Calendar Management", "Dashboard", "Booking Management", "Finance Tracking"],
    features: ["City-based Venue Search", "Court Booking", "Club Membership", "Tournament Registration"],
    badge: "Sports ERP",
    color: "#EA580C",
    icon: Building2,
    status: "In Development",
    link: "https://playbase.deltaprimeaisolutions.com/",
    metrics: [
      { metric: "1", label: "Unified ERP platform" },
      { metric: "Multi-venue", label: "Club management" },
      { metric: "Real-time", label: "Booking & payments" },
    ],
    image: { src: "/dv5.png", alt: "PlayBase venue booking and club management ERP dashboard" },
  },
  {
    title: "Direct Mail Marketing CRM with Canva-Like Design Automation",
    desc: "A Canva-like creative suite integrated with CRM, QR tracking, campaign automation, and workflow management for real estate direct mail marketing, giving agents a drag-and-drop design canvas to create, personalize, and launch postcard campaigns without leaving the platform.",
    stack: ["React", "Fabric.js", "CRM Development", "Claude 3.5 Sonnet", "CI/CD"],
    features: [
      "Drag-and-Drop Design Canvas",
      "QR Tracking",
      "Campaign Automation",
      "Workflow Management",
    ],
    badge: "Creative Suite",
    color: "#14B8A6",
    icon: Palette,
    image: { src: "/dev3.avif", alt: "Direct mail marketing CRM Canva-like design automation canvas interface" },
  },
];

type Project = (typeof projects)[number];

const INITIAL_COUNT = 2;

export default function SoftwareProjects() {
  const [selected, setSelected] = useState<Project | null>(null);
  const [showAll, setShowAll] = useState(false);
  const visibleProjects = showAll ? projects : projects.slice(0, INITIAL_COUNT);

  return (
    <>
        <div className="space-y-4">
          {visibleProjects.map((p, i) => (
            <motion.div
              key={p.title}
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
                {p.image ? (
                  <Image
                    src={p.image.src}
                    alt={p.image.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, 50vw"
                    className="object-cover object-top"
                  />
                ) : (
                  <div
                    className="absolute inset-0 flex items-center justify-center"
                    style={{ background: p.color + "0D" }}
                  >
                    <p.icon size={48} style={{ color: p.color }} strokeWidth={1.4} />
                  </div>
                )}
                <span
                  className="absolute top-3 left-3 text-[11px] font-semibold px-2.5 py-1 rounded-full text-white"
                  style={{ background: p.color }}
                >
                  {p.badge}
                </span>
                {"status" in p && p.status && (
                  <span className="absolute top-3 right-3 text-[11px] font-semibold px-2.5 py-1 rounded-full bg-white/90 text-gray-600 border border-gray-200">
                    {p.status}
                  </span>
                )}
              </div>

              {/* Content */}
              <div className="flex-1 min-w-0 flex flex-col justify-center">
                <h3 className="text-lg sm:text-xl font-bold text-[#111827] mb-2 leading-snug">
                  {p.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed mb-4 line-clamp-3">
                  {p.desc}
                </p>

                <div className="flex flex-wrap gap-1.5 mb-4">
                  {p.stack.slice(0, 4).map((t) => (
                    <span
                      key={t}
                      className="text-[11px] font-medium px-2 py-0.5 rounded-md bg-gray-50 border border-gray-100 text-gray-500"
                    >
                      {t}
                    </span>
                  ))}
                  {p.stack.length > 4 && (
                    <span className="text-[11px] font-medium px-2 py-0.5 text-gray-400">
                      +{p.stack.length - 4} more
                    </span>
                  )}
                </div>

                <div className="flex items-center gap-4">
                  <button
                    onClick={() => setSelected(p)}
                    className="inline-flex items-center gap-1.5 text-sm font-semibold w-fit"
                    style={{ color: p.color }}
                  >
                    See more <ArrowRight size={12} />
                  </button>
                  {p.link && (
                    <a
                      href={p.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs font-semibold text-gray-400 hover:text-gray-600"
                    >
                      Live Site <ExternalLink size={11} />
                    </a>
                  )}
                </div>
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
              {showAll ? "Show less" : "See more projects"}
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
                  <span
                    className="inline-block text-[10px] font-semibold px-2.5 py-1 rounded-full text-white"
                    style={{ background: selected.color }}
                  >
                    {selected.badge}
                  </span>
                  {"status" in selected && selected.status && (
                    <span className="text-[10px] font-semibold px-2.5 py-1 rounded-full bg-gray-100 text-gray-600 border border-gray-200">
                      {selected.status}
                    </span>
                  )}
                </div>
                <h3 className="text-xl font-bold text-[#111827] mb-3">{selected.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed mb-6">{selected.desc}</p>

                {selected.image && (
                  <div className="relative rounded-lg border border-gray-200 overflow-hidden bg-gray-50 mb-6">
                    <Image
                      src={selected.image.src}
                      alt={selected.image.alt}
                      width={900}
                      height={560}
                      className="w-full h-auto"
                    />
                  </div>
                )}

                {selected.metrics && (
                  <>
                    <div className="text-[11px] font-semibold text-gray-400 uppercase tracking-wide mb-2.5">
                      Results
                    </div>
                    <div className="grid grid-cols-3 gap-2 mb-6">
                      {selected.metrics.map((m) => (
                        <div
                          key={m.label}
                          className="rounded-lg p-3 text-center"
                          style={{ background: selected.color + "0A" }}
                        >
                          <div className="text-sm font-bold" style={{ color: selected.color }}>
                            {m.metric}
                          </div>
                          <div className="text-[10px] text-gray-400 leading-tight">{m.label}</div>
                        </div>
                      ))}
                    </div>
                  </>
                )}

                <div className="text-[11px] font-semibold text-gray-400 uppercase tracking-wide mb-2.5">
                  Key Features
                </div>
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {selected.features.map((f) => (
                    <span
                      key={f}
                      className="text-[11px] font-medium px-2.5 py-1 rounded-md border border-gray-100 bg-gray-50 text-gray-500"
                    >
                      {f}
                    </span>
                  ))}
                </div>

                <div className="text-[11px] font-semibold text-gray-400 uppercase tracking-wide mb-2.5">
                  Tech Stack
                </div>
                <div className="flex flex-wrap gap-1.5 mb-2">
                  {selected.stack.map((t) => (
                    <span
                      key={t}
                      className="text-[11px] font-mono font-medium px-2 py-0.5 rounded-md"
                      style={{ background: selected.color + "10", color: selected.color }}
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {selected.link && (
                  <a
                    href={selected.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold"
                    style={{ color: selected.color }}
                  >
                    Visit Live Site <ExternalLink size={13} />
                  </a>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
