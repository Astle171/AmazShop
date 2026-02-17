"use client";
import { motion } from "framer-motion";
import { Award, Code2, ExternalLink } from "lucide-react";
import { RESUME_DATA } from "@/data/resume";

export default function Achievements() {
  return (
    <section className="py-24 relative z-10">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--text-primary)] mb-4">
            Achievements & Recognition
          </h2>
          <p className="text-[var(--text-secondary)]">
            Milestones and recognitions that mark my journey
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-8">
          {RESUME_DATA.achievements.map((achievement, index) => (
            <motion.div
              key={index}
              className="p-[1px] bg-gradient-to-r from-[var(--border-color)] via-[var(--color-accent)]/30 to-[var(--border-color)] rounded-3xl"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              <div className="bg-[var(--bg-card)] p-8 rounded-[23px] flex flex-col md:flex-row items-center gap-8 relative overflow-hidden">
                <div className="p-5 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl text-slate-950 shadow-lg shadow-orange-500/20 shrink-0">
                  {index === 0 ? <Award size={36} strokeWidth={2.5} /> : <Code2 size={36} strokeWidth={2.5} />}
                </div>

                <div className="flex-1 text-center md:text-left z-10">
                  <div className="flex items-center gap-3 justify-center md:justify-start mb-2">
                    <span className="text-xs font-bold text-green-500 bg-green-500/10 border border-green-500/20 px-3 py-1 rounded-full">
                      {achievement.year}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-[var(--text-primary)] mb-2">
                    {achievement.title}
                  </h3>
                  <p className="text-[var(--text-secondary)] text-sm leading-relaxed">
                    {achievement.description}
                  </p>
                </div>

                {achievement.link && (
                  <div className="z-10 shrink-0">
                    <a
                      href={achievement.link}
                      target="_blank"
                      rel="noreferrer"
                      className="px-6 py-3 bg-[var(--bg-secondary)] rounded-xl border border-[var(--border-color)] text-[var(--text-primary)] hover:bg-[var(--bg-card-hover)] transition font-bold text-sm flex items-center gap-2"
                    >
                      <ExternalLink size={16} className="text-orange-400" /> View
                    </a>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
