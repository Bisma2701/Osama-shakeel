"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const reviews = [
  { src: "/job1.png", alt: "Upwork client review – rapid development project" },
  { src: "/job2.png", alt: "Upwork client review – AI systems project" },
  { src: "/job3.png", alt: "Upwork client review – high-performance models" },
];

export default function Testimonials() {
  return (
    <section id="reviews" className="py-28 bg-[#0F172A]">
      <div className="max-w-screen-2xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-xs font-semibold text-[#60A5FA] uppercase tracking-widest">
            Client Reviews
          </span>
          <h2 className="mt-3 text-4xl font-bold text-white tracking-tight">
            Verified on Upwork
          </h2>
          <p className="mt-4 text-gray-400 max-w-md mx-auto text-[15px]">
            Real feedback from real clients. Every review is publicly verified
            on Upwork.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((review, i) => (
            <motion.div
              key={review.src}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="rounded-2xl overflow-hidden shadow-lg ring-1 ring-white/10 hover:ring-[#60A5FA]/40 hover:shadow-[#60A5FA]/10 hover:shadow-2xl transition-all duration-300"
            >
              <Image
                src={review.src}
                alt={review.alt}
                width={820}
                height={460}
                className="w-full h-auto object-cover"
                quality={95}
              />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-10 flex justify-center"
        >
          <span className="inline-flex items-center gap-2 text-xs text-gray-500">
            <span className="w-1.5 h-1.5 rounded-full bg-green-400 inline-block" />
            All reviews publicly visible on Upwork profile
          </span>
        </motion.div>
      </div>
    </section>
  );
}
