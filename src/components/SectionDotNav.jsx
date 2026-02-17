"use client";
import { useScrollSpy } from "@/hooks/useScrollSpy";
import { NAV_LINKS } from "@/data/resume";

export default function SectionDotNav() {
  const sectionIds = NAV_LINKS.map((l) => l.id);
  const activeId = useScrollSpy(sectionIds, 200);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="fixed right-4 top-1/2 -translate-y-1/2 z-30 hidden lg:flex flex-col gap-3">
      {NAV_LINKS.map((link) => (
        <button
          key={link.id}
          onClick={() => scrollTo(link.id)}
          className={`w-3 h-3 rounded-full transition-all duration-300 ${
            activeId === link.id
              ? "bg-[var(--color-accent)] shadow-[0_0_10px_var(--color-accent)] scale-125"
              : "bg-[var(--text-muted)]/50 hover:bg-[var(--text-muted)]"
          }`}
          title={link.name}
        />
      ))}
    </div>
  );
}
