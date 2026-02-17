"use client";
import { Github, Linkedin, Code2 } from "lucide-react";
import { RESUME_DATA } from "@/data/resume";

const socials = [
  { icon: <Github size={18} />, href: RESUME_DATA.contact.github, label: "GitHub" },
  { icon: <Linkedin size={18} />, href: RESUME_DATA.contact.linkedin, label: "LinkedIn" },
  { icon: <Code2 size={18} />, href: RESUME_DATA.contact.leetcode, label: "LeetCode" },
];

export default function SocialSidebar() {
  return (
    <div className="fixed left-4 top-1/2 -translate-y-1/2 z-30 hidden lg:flex flex-col gap-4">
      {socials.map((social) => (
        <a
          key={social.label}
          href={social.href}
          target="_blank"
          rel="noreferrer"
          className="w-10 h-10 rounded-full bg-[var(--bg-card)] border border-[var(--border-color)] flex items-center justify-center text-[var(--text-muted)] hover:text-[var(--color-accent)] hover:border-[var(--color-accent)]/50 transition-all hover:scale-110"
          title={social.label}
        >
          {social.icon}
        </a>
      ))}
      <div className="w-px h-20 bg-[var(--border-color)] mx-auto mt-2" />
    </div>
  );
}
