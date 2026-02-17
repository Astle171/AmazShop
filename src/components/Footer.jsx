import { RESUME_DATA } from "@/data/resume";

export default function Footer() {
  return (
    <footer className="py-8 text-center text-[var(--text-muted)] text-sm border-t border-[var(--border-color)]/50 relative z-10">
      <p>
        &copy; {new Date().getFullYear()} {RESUME_DATA.name}. Built with Next.js
        & Tailwind CSS.
      </p>
    </footer>
  );
}
