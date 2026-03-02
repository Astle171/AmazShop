"use client";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { RESUME_DATA } from "@/data/resume";
import Image from "next/image";

function ProjectCard({ project }) {
  const imageCount = project.images?.length || (project.image ? 1 : 0);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  useEffect(() => {
    setActiveImageIndex(0);
    if (imageCount <= 1) {
      return undefined;
    }

    const interval = setInterval(() => {
      setActiveImageIndex((prev) => (prev + 1) % imageCount);
    }, 3200);

    return () => clearInterval(interval);
  }, [imageCount]);

  const activeImage =
    imageCount > 1 ? project.images[activeImageIndex] : project.image;

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.55, ease: "easeOut" }}
      className="group relative rounded-3xl p-[1px] bg-gradient-to-br from-cyan-500/25 via-blue-500/10 to-violet-500/25 hover:from-cyan-400/70 hover:via-blue-500/55 hover:to-violet-400/70 transition-all duration-500"
    >
      <div className="h-full bg-[var(--bg-card)] rounded-[calc(1.5rem-1px)] border border-[var(--border-color)] overflow-hidden transform-gpu transition-all duration-500 group-hover:-translate-y-2 group-hover:shadow-[0_28px_60px_-30px_rgba(56,189,248,0.65),0_0_30px_rgba(99,102,241,0.45)]">
        <div className="h-56 relative overflow-hidden bg-[var(--bg-secondary)]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeImage}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              className="absolute inset-0"
            >
              <Image
                src={activeImage}
                alt={project.title}
                fill
                className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
              />
            </motion.div>
          </AnimatePresence>
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-card)] via-transparent to-transparent opacity-60" />
          <span className="absolute top-4 right-4 px-3 py-1 bg-[var(--bg-card)]/80 backdrop-blur border border-[var(--border-color)] text-[var(--text-primary)] text-xs font-bold rounded-full z-10">
            {project.type}
          </span>
        </div>

        <div className="p-8">
          <h3 className="text-2xl font-bold text-[var(--text-primary)] mb-3 group-hover:text-[var(--color-accent)] transition-colors duration-300">
            {project.title}
          </h3>
          <p className="text-[var(--text-secondary)] mb-6 line-clamp-3 text-sm leading-relaxed">
            {project.desc}
          </p>

          <div className="flex flex-wrap gap-2 mb-8">
            {project.tech.map((t) => (
              <span
                key={t}
                className="text-xs font-bold text-[var(--color-accent)] bg-[var(--color-accent)]/10 border border-[var(--color-accent)]/20 px-2.5 py-1 rounded-md"
              >
                {t}
              </span>
            ))}
          </div>

          <div className="flex gap-4">
            {project.liveLink && (
              <a
                href={project.liveLink}
                target="_blank"
                rel="noreferrer"
                className="flex-1 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-600 text-white text-center font-bold text-sm transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:brightness-110 hover:-translate-y-0.5 hover:shadow-[0_16px_36px_-18px_rgba(34,211,238,0.95)]"
              >
                <ExternalLink size={16} /> Demo
              </a>
            )}
            <a
              href={project.githubLink}
              target="_blank"
              rel="noreferrer"
              className="flex-1 py-3 rounded-xl border border-cyan-500/40 text-[var(--text-primary)] text-center font-bold text-sm transition-all duration-300 flex items-center justify-center gap-2 hover:text-white hover:border-transparent hover:bg-gradient-to-r hover:from-cyan-600 hover:to-blue-600 hover:-translate-y-0.5 hover:shadow-[0_14px_30px_-18px_rgba(59,130,246,0.9)]"
            >
              <Github size={16} /> Code
            </a>
          </div>
        </div>
      </div>
    </motion.article>
  );
}

export default function Projects() {
  return (
    <section id="work" className="py-24 relative z-10">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--text-primary)] mb-4">
            My Creative{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
              Portfolio
            </span>
          </h2>
          <p className="text-[var(--text-secondary)]">Projects I&apos;ve built and shipped</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
          {RESUME_DATA.projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
