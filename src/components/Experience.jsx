"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { RESUME_DATA } from "@/data/resume";

function ExperienceCard({ exp, index }) {
  const [expanded, setExpanded] = useState(false);
  const isLeft = index % 2 === 0;

  return (
    <div
      className={`relative flex items-start mb-16 flex-col md:flex-row ${isLeft ? "md:flex-row-reverse" : ""}`}
    >
      <div className="absolute left-8 md:left-1/2 w-5 h-5 bg-[var(--bg-primary)] rounded-full border-4 border-[var(--color-accent)] transform -translate-x-1/2 mt-1.5 z-10 shadow-[0_0_15px_rgba(34,211,238,0.5)]" />
      <div className="hidden md:block w-1/2" />

      <motion.div
        className={`w-full md:w-1/2 pl-20 md:pl-0 ${isLeft ? "md:pr-12 md:text-right" : "md:pl-12"}`}
        initial={{ opacity: 0, x: isLeft ? 40 : -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: index * 0.15 }}
      >
        <div className="bg-[var(--bg-card)] border border-[var(--border-color)] p-6 rounded-2xl hover:border-[var(--color-accent)]/30 transition-all group shadow-sm">
          <div className={`flex flex-col ${isLeft ? "md:items-end" : "md:items-start"}`}>
            <span className="text-[var(--color-accent)] text-xs font-bold uppercase tracking-widest mb-2 px-3 py-1 rounded-full bg-[var(--color-accent)]/10 border border-[var(--color-accent)]/20">
              {exp.period}
            </span>
            <h3 className="text-xl font-bold text-[var(--text-primary)] group-hover:text-[var(--color-accent)] transition-colors">
              {exp.role}
            </h3>
            <h4 className="text-lg text-[var(--text-secondary)] font-medium mb-1">
              {exp.company}
              {exp.product && (
                <span className="text-[var(--text-muted)] text-sm ml-2">{exp.product}</span>
              )}
            </h4>
            <p className="text-[var(--text-muted)] text-sm mb-4">{exp.description}</p>

            <div
              className={`overflow-hidden transition-all duration-500 ${expanded ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"}`}
            >
              <ul
                className={`space-y-2 text-[var(--text-secondary)] text-sm leading-relaxed mt-2 ${isLeft ? "md:list-none" : "list-disc pl-4"}`}
              >
                {exp.details.map((detail, idx) => (
                  <li key={idx}>{detail}</li>
                ))}
              </ul>
            </div>

            <button
              onClick={() => setExpanded(!expanded)}
              className="mt-3 text-[var(--color-accent)] text-sm flex items-center gap-1 hover:opacity-80 transition-colors self-center md:self-auto"
            >
              {expanded ? "Show Less" : "Show More"}
              <ChevronDown
                size={16}
                className={`transition-transform duration-300 ${expanded ? "rotate-180" : ""}`}
              />
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default function Experience() {
  return (
    <section id="experience" className="py-24 relative z-10">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--text-primary)] mb-4">
            Experience
          </h2>
          <p className="text-[var(--text-secondary)]">My professional journey</p>
        </motion.div>

        <div className="max-w-4xl mx-auto relative">
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-blue-500 transform md:-translate-x-1/2 opacity-30" />
          {RESUME_DATA.experience.map((exp, index) => (
            <ExperienceCard key={index} exp={exp} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
