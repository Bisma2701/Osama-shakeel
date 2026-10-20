"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Mail, Phone, ExternalLink, GitBranch, Send, CheckCircle2 } from "lucide-react";

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <section id="contact" className="py-28 bg-white">
      <div className="max-w-screen-2xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-xs font-semibold text-[#2563EB] uppercase tracking-widest">
            Contact
          </span>
          <h2 className="mt-3 text-4xl font-bold text-[#111827] tracking-tight">
            Let&apos;s build something together
          </h2>
          <p className="mt-4 text-gray-500 max-w-lg mx-auto text-[15px]">
            Whether you have a specific project in mind or want to explore
            what&apos;s possible, I&apos;m happy to talk through it.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Left: contact info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 space-y-6"
          >
            {/* Contact links */}
            <div className="space-y-4">
              {[
                {
                  icon: Mail,
                  label: "Email",
                  value: "shakeelosama76@gmail.com",
                  href: "https://mail.google.com/mail/?view=cm&fs=1&to=shakeelosama76@gmail.com",
                  color: "#14B8A6",
                },
                {
                  icon: Phone,
                  label: "Phone (UK)",
                  value: "+44 7988 581193",
                  href: "tel:+447988581193",
                  color: "#F59E0B",
                },
                {
                  icon: ExternalLink,
                  label: "LinkedIn",
                  value: "linkedin.com/in/osama-shakeel",
                  href: "https://www.linkedin.com/in/osama-shakeel-4777b318a",
                  color: "#2563EB",
                },
                {
                  icon: GitBranch,
                  label: "GitHub",
                 value: "github.com/ShakeelOsama",
                 href: "https://github.com/ShakeelOsama",
                  color: "#111827",
                },
              ].map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-4 rounded-xl border border-gray-200 bg-gray-50 shadow-sm hover:border-gray-300 hover:shadow-md hover:shadow-gray-200/60 transition-all duration-300 group"
                >
                  <div
                    className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0"
                    style={{ background: link.color + "12" }}
                  >
                    <link.icon size={15} style={{ color: link.color }} />
                  </div>
                  <div>
                    <div className="text-xs text-gray-400 font-medium">
                      {link.label}
                    </div>
                    <div className="text-sm text-[#111827] font-medium group-hover:text-[#2563EB] transition-colors">
                      {link.value}
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </motion.div>

          {/* Right: form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-3"
          >
            {sent ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-20 rounded-2xl border border-gray-200 bg-white shadow-sm">
                <CheckCircle2 size={40} className="text-[#14B8A6] mb-4" />
                <h3 className="text-xl font-bold text-[#111827] mb-2">
                  Message sent!
                </h3>
                <p className="text-sm text-gray-500 max-w-xs">
                  Thank you for reaching out. I&apos;ll get back to you within 24
                  hours.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="rounded-2xl border border-gray-200 bg-gray-50 p-8 space-y-5 shadow-sm"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-semibold text-gray-500 mb-1.5">
                      Full Name
                    </label>
                    <input
                      name="name"
                      type="text"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="John Smith"
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-white text-sm text-[#111827] placeholder:text-gray-300 focus:outline-none focus:ring-2 focus:ring-[#2563EB]/20 focus:border-[#2563EB]/40 transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-500 mb-1.5">
                      Email Address
                    </label>
                    <input
                      name="email"
                      type="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      placeholder="john@company.com"
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-white text-sm text-[#111827] placeholder:text-gray-300 focus:outline-none focus:ring-2 focus:ring-[#2563EB]/20 focus:border-[#2563EB]/40 transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-500 mb-1.5">
                    Company / Project
                  </label>
                  <input
                    name="company"
                    type="text"
                    value={form.company}
                    onChange={handleChange}
                    placeholder="Acme Corp (optional)"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-white text-sm text-[#111827] placeholder:text-gray-300 focus:outline-none focus:ring-2 focus:ring-[#2563EB]/20 focus:border-[#2563EB]/40 transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-500 mb-1.5">
                    Tell me about your project
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={5}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Describe the workflow or system you want to build, and the business outcome you're targeting..."
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-white text-sm text-[#111827] placeholder:text-gray-300 focus:outline-none focus:ring-2 focus:ring-[#2563EB]/20 focus:border-[#2563EB]/40 transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-[#111827] text-white text-sm font-semibold hover:bg-[#1F2937] transition-colors"
                >
                  <Send size={14} />
                  Send Message
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
