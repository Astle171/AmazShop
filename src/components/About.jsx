"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Zap, Cpu, Globe } from "lucide-react";
import { RESUME_DATA } from "@/data/resume";

const cards = [
  {
    title: "Performance Obsessed",
    icon: <Zap className="text-yellow-400" size={32} />,
    desc: "Slashed P95 checkout latency by 42%, eliminated 70% of render-blocking resources, and optimized Core Web Vitals across an entire global e-commerce platform at Cimpress.",
  },
  {
    title: "Full Stack, End to End",
    icon: <Cpu className="text-pink-400" size={32} />,
    desc: "From React frontends to Node.js APIs, Kafka microservices to AWS infrastructure\u2014I've built and shipped across the full stack at both product and service-based companies.",
  },
  {
    title: "Product & Enterprise Scale",
    icon: <Globe className="text-blue-400" size={32} />,
    desc: "Experience spanning global e-commerce at Cimpress (pens.com, 23+ locales) and enterprise systems at LTIMindtree\u2014building for millions of users with reliability at the core.",
  },
];

function ScrollCard({ card, index }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [60, 0]);
  const opacity = useTransform(scrollYProgress, [0, 0.4, 1], [0, 0.3, 1]);
  const scale = useTransform(scrollYProgress, [0, 1], [0.9, 1]);

  const accents = [
    "from-purple-500 to-pink-500",
    "from-pink-500 to-orange-400",
    "from-blue-500 to-cyan-400",
  ];

  return (
    <motion.div
      ref={ref}
      style={{ y, opacity, scale }}
      className="relative bg-[var(--bg-card)] rounded-2xl border border-[var(--border-color)] hover:border-[var(--color-accent)]/50 transition duration-300 group hover:-translate-y-2 shadow-lg hover:shadow-xl overflow-hidden will-change-transform"
    >
      <div className={`h-1 bg-gradient-to-r ${accents[index % 3]} opacity-70 group-hover:opacity-100 transition-opacity`} />
      <div className="p-8">
        <div className="mb-6 bg-[var(--bg-secondary)] w-16 h-16 rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform ring-1 ring-[var(--border-color)] group-hover:ring-[var(--color-accent)]/50">
          {card.icon}
        </div>
        <h3 className="text-[var(--text-primary)] font-bold mb-3 text-lg">
          {card.title}
        </h3>
        <p className="text-[var(--text-secondary)] text-sm leading-relaxed">
          {card.desc}
        </p>
      </div>
    </motion.div>
  );
}

export default function About() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Parallax for the heading
  const headingY = useTransform(scrollYProgress, [0, 0.5], [40, 0]);
  const headingOpacity = useTransform(scrollYProgress, [0, 0.25], [0, 1]);

  // Scroll-linked accent line
  const lineWidth = useTransform(scrollYProgress, [0.05, 0.25], ["0%", "100%"]);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="py-24 relative z-10 border-y border-[var(--border-color)]/30"
    >
      <div className="container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          <motion.h2
            className="text-4xl md:text-5xl font-bold"
            style={{ y: headingY, opacity: headingOpacity }}
          >
            <span className="text-[var(--text-primary)]">Crafted With </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
              Care
            </span>
            <br />
            <span className="text-[var(--text-primary)]">Coded With </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-500">
              Clarity
            </span>
          </motion.h2>

          <motion.div
            className="h-0.5 bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 mx-auto rounded-full"
            style={{ width: lineWidth, maxWidth: "180px" }}
          />

          <motion.p
            className="text-[var(--text-secondary)] text-lg leading-relaxed max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            {RESUME_DATA.summary}
          </motion.p>

          <div className="grid md:grid-cols-3 gap-8 mt-12">
            {cards.map((card, i) => (
              <ScrollCard key={i} card={card} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
