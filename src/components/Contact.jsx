"use client";
import { motion } from "framer-motion";
import { Mail, Linkedin, Github, Code2, Send } from "lucide-react";
import { RESUME_DATA } from "@/data/resume";

export default function Contact() {
  return (
    <section id="contact" className="py-24 relative z-10 border-t border-[var(--border-color)]/30">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--text-primary)] mb-4">
            Take A Coffee & Chat With Me
          </h2>
          <p className="text-[var(--text-secondary)]">
            Have a project in mind or just want to connect?
          </p>
        </motion.div>

        <motion.div
          className="max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="flex justify-center mb-8">
            <a
              href={`mailto:${RESUME_DATA.contact.email}`}
              className="flex items-center gap-3 px-6 py-3 bg-[var(--bg-card)] rounded-full border border-[var(--border-color)] hover:border-[var(--color-accent)]/50 transition-colors group"
            >
              <span className="text-2xl">💌</span>
              <span className="text-[var(--text-secondary)] group-hover:text-[var(--color-accent)] transition-colors font-medium">
                {RESUME_DATA.contact.email}
              </span>
            </a>
          </div>

          <div className="flex justify-center gap-4 mb-12 flex-wrap">
            {[
              { icon: <Github size={18} />, label: "Github", href: RESUME_DATA.contact.github },
              { icon: <Linkedin size={18} />, label: "LinkedIn", href: RESUME_DATA.contact.linkedin },
              { icon: <Code2 size={18} />, label: "LeetCode", href: RESUME_DATA.contact.leetcode },
            ].map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 bg-[var(--bg-card)] rounded-xl border border-[var(--border-color)] text-[var(--text-secondary)] hover:text-[var(--color-accent)] hover:border-[var(--color-accent)]/50 transition-all font-medium text-sm"
              >
                {social.icon}
                {social.label}
              </a>
            ))}
          </div>

          <div className="bg-[var(--bg-card)] p-8 md:p-10 rounded-3xl border border-[var(--border-color)] shadow-lg relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500" />

            <form
              action={`mailto:${RESUME_DATA.contact.email}`}
              method="POST"
              encType="text/plain"
              className="space-y-5"
            >
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                className="w-full bg-[var(--bg-secondary)] border border-[var(--border-color)] rounded-xl p-4 text-[var(--text-primary)] focus:border-[var(--color-accent)] focus:ring-1 focus:ring-[var(--color-accent)] focus:outline-none transition placeholder-[var(--text-muted)] text-sm"
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                className="w-full bg-[var(--bg-secondary)] border border-[var(--border-color)] rounded-xl p-4 text-[var(--text-primary)] focus:border-[var(--color-accent)] focus:ring-1 focus:ring-[var(--color-accent)] focus:outline-none transition placeholder-[var(--text-muted)] text-sm"
              />
              <textarea
                name="message"
                placeholder="Your Message"
                rows="4"
                className="w-full bg-[var(--bg-secondary)] border border-[var(--border-color)] rounded-xl p-4 text-[var(--text-primary)] focus:border-[var(--color-accent)] focus:ring-1 focus:ring-[var(--color-accent)] focus:outline-none transition placeholder-[var(--text-muted)] text-sm resize-y"
              />
              <button
                type="submit"
                className="w-full py-4 bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-bold rounded-xl hover:opacity-90 transition transform active:scale-95 shadow-lg flex items-center justify-center gap-2"
              >
                <Send size={18} /> Send Message
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
