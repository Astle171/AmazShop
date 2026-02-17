"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { RESUME_DATA } from "@/data/resume";
import Image from "next/image";

function ProjectCard({ project }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [60, 0]);
  const opacity = useTransform(scrollYProgress, [0, 0.4, 1], [0, 0.3, 1]);
  const scale = useTransform(scrollYProgress, [0, 1], [0.9, 1]);

  return (
    <motion.div
      ref={ref}
      style={{ y, opacity, scale }}
      whileHover={{ y: -8 }}
      className="bg-[var(--bg-card)] rounded-3xl border border-[var(--border-color)] overflow-hidden group hover:shadow-2xl transition-shadow duration-500 will-change-transform"
    >
      <div className="h-56 relative overflow-hidden bg-[var(--bg-secondary)]">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover object-top group-hover:scale-105 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-card)] via-transparent to-transparent opacity-60" />
        <span className="absolute top-4 right-4 px-3 py-1 bg-[var(--bg-card)]/80 backdrop-blur border border-[var(--border-color)] text-[var(--text-primary)] text-xs font-bold rounded-full z-10">
          {project.type}
        </span>
      </div>

      <div className="p-8">
        <h3 className="text-2xl font-bold text-[var(--text-primary)] mb-3 group-hover:text-[var(--color-accent)] transition-colors">
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
              className="flex-1 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white text-center font-bold text-sm transition flex items-center justify-center gap-2 shadow-lg"
            >
              <ExternalLink size={16} /> Demo
            </a>
          )}
          <a
            href={project.githubLink}
            target="_blank"
            rel="noreferrer"
            className="flex-1 py-3 rounded-xl border border-[var(--border-color)] hover:bg-[var(--bg-secondary)] text-[var(--text-primary)] text-center font-bold text-sm transition flex items-center justify-center gap-2"
          >
            <Github size={16} /> Code
          </a>
        </div>
      </div>
    </motion.div>
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
