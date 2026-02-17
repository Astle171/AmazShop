"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Globe, Server, Cloud, Terminal } from "lucide-react";
import { RESUME_DATA, SKILL_ICONS } from "@/data/resume";

const categoryConfig = {
  frontend: { icon: <Globe className="text-cyan-400" size={22} />, label: "Frontend" },
  backend: { icon: <Server className="text-green-400" size={22} />, label: "Backend" },
  cloud: { icon: <Cloud className="text-orange-400" size={22} />, label: "Cloud (AWS)" },
  tools: { icon: <Terminal className="text-purple-400" size={22} />, label: "Tools & Observability" },
};

function SkillCategory({ category, items }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [60, 0]);
  const opacity = useTransform(scrollYProgress, [0, 0.4, 1], [0, 0.3, 1]);
  const scale = useTransform(scrollYProgress, [0, 1], [0.9, 1]);

  const config = categoryConfig[category];

  return (
    <motion.div
      ref={ref}
      style={{ y, opacity, scale }}
      className="bg-[var(--bg-card)]/50 p-6 md:p-8 rounded-2xl border border-[var(--border-color)] hover:border-[var(--border-color)] transition-colors will-change-transform"
    >
      <h3 className="text-lg font-bold text-[var(--text-primary)] mb-6 flex items-center gap-3 border-b border-[var(--border-color)] pb-4">
        {config?.icon}
        {config?.label || category}
      </h3>
      <motion.div className="flex flex-wrap gap-3">
        {items.map((skill, skillIndex) => {
          const iconMatch = SKILL_ICONS.find(
            (i) => i.name.toLowerCase() === skill.split(" ")[0].toLowerCase()
          );
          return (
            <motion.div
              key={skill}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.3,
                delay: skillIndex * 0.04,
              }}
              whileHover={{ scale: 1.08, y: -2 }}
              className="px-4 py-2.5 bg-[var(--bg-secondary)] rounded-xl border border-[var(--border-color)] text-[var(--text-secondary)] flex items-center gap-2.5 hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] transition-all cursor-default group"
            >
              {iconMatch ? (
                <img
                  src={iconMatch.url}
                  className="w-4 h-4 opacity-70 group-hover:opacity-100 transition-opacity"
                  alt=""
                />
              ) : (
                <div className="w-2 h-2 rounded-full bg-[var(--color-accent)] opacity-50 group-hover:opacity-100" />
              )}
              <span className="font-medium text-sm">{skill}</span>
            </motion.div>
          );
        })}
      </motion.div>
    </motion.div>
  );
}

export default function Skills() {
  const totalSkills = Object.values(RESUME_DATA.skills).flat().length;
  const categories = Object.keys(RESUME_DATA.skills).length;

  return (
    <section id="skills" className="py-24 relative z-10 border-y border-[var(--border-color)]/30">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--text-primary)] mb-4">
            Technical Skills
          </h2>
          <p className="text-[var(--text-secondary)]">
            Technologies and tools I use to bring ideas to life
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto space-y-8">
          {Object.entries(RESUME_DATA.skills).map(([category, items]) => (
            <SkillCategory
              key={category}
              category={category}
              items={items}
            />
          ))}
        </div>

        {/* Stats Bar */}
        <motion.div
          className="max-w-3xl mx-auto mt-14 bg-[var(--bg-card)] border border-[var(--border-color)] rounded-2xl p-6 md:p-8 shadow-sm"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="grid grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-3xl md:text-4xl font-bold text-[var(--text-primary)]">{totalSkills}+</div>
              <div className="text-[var(--text-muted)] text-xs md:text-sm uppercase tracking-widest mt-1">Technologies</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-[var(--text-primary)]">{categories}</div>
              <div className="text-[var(--text-muted)] text-xs md:text-sm uppercase tracking-widest mt-1">Specializations</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-[var(--text-primary)]">5+</div>
              <div className="text-[var(--text-muted)] text-xs md:text-sm uppercase tracking-widest mt-1">Years Experience</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
