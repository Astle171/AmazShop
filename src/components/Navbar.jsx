"use client";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sun, Moon, FileDown } from "lucide-react";
import { NAV_LINKS } from "@/data/resume";
import { useThemeSound } from "@/hooks/useSound";
import AnimatedLogo from "./AnimatedLogo";
import Image from "next/image";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const { playToggleSound } = useThemeSound();

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  const isDark = resolvedTheme === "dark";

  const handleThemeToggle = () => {
    const goingToDark = !isDark;
    playToggleSound(goingToDark);
    setTheme(goingToDark ? "dark" : "light");
  };

  return (
    <nav
      className={`fixed w-full z-40 transition-all duration-300 ${
        scrolled
          ? "bg-white/15 dark:bg-white/[0.03] backdrop-blur-[8px] backdrop-saturate-[1.8] py-3 shadow-[0_4px_30px_rgba(0,0,0,0.03)] dark:shadow-[0_4px_30px_rgba(0,0,0,0.15)] border-b border-white/[0.1] dark:border-white/[0.06]"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo: Avatar + Animated Name */}
        <div className="flex items-center gap-3">
          <div
            className="cursor-pointer"
            onClick={() => scrollTo("home")}
          >
            <Image
              src="/Nobg.png"
              alt="Astle Machado"
              width={56}
              height={56}
              className="w-14 h-14 object-contain hover:scale-110 transition-transform"
            />
          </div>
          <AnimatedLogo onClick={() => scrollTo("home")} />
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <button
              key={link.name}
              onClick={() => scrollTo(link.id)}
              className="text-[var(--text-secondary)] hover:text-[var(--color-accent)] text-sm font-medium tracking-wider transition-colors uppercase relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[var(--color-accent)] transition-all group-hover:w-full" />
            </button>
          ))}

          {/* Resume Button */}
          <a
            href="/Astle_Machado_Sr_Software_Engg_5YOE.pdf"
            download
            className="flex items-center gap-1.5 px-4 py-2 rounded-full bg-[var(--color-accent)]/10 border border-[var(--color-accent)]/30 text-[var(--color-accent)] text-sm font-bold tracking-wide hover:bg-[var(--color-accent)] hover:text-white transition-all duration-300 hover:shadow-[0_0_20px_rgba(34,211,238,0.25)]"
          >
            <FileDown size={14} />
            Resume
          </a>

          {/* Theme Toggle with animation + sound */}
          {mounted && (
            <button
              onClick={handleThemeToggle}
              className="p-2.5 rounded-full border border-[var(--border-color)] hover:border-[var(--color-accent)]/50 text-[var(--text-secondary)] hover:text-[var(--color-accent)] transition-all hover:scale-110 relative overflow-hidden"
              aria-label="Toggle theme"
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={isDark ? "sun" : "moon"}
                  initial={{ y: -20, opacity: 0, rotate: -90 }}
                  animate={{ y: 0, opacity: 1, rotate: 0 }}
                  exit={{ y: 20, opacity: 0, rotate: 90 }}
                  transition={{ duration: 0.2 }}
                >
                  {isDark ? <Sun size={16} /> : <Moon size={16} />}
                </motion.div>
              </AnimatePresence>
            </button>
          )}
        </div>

        {/* Mobile */}
        <div className="flex items-center gap-3 md:hidden">
          {mounted && (
            <button
              onClick={handleThemeToggle}
              className="p-2 rounded-full border border-[var(--border-color)] text-[var(--text-secondary)]"
              aria-label="Toggle theme"
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={isDark ? "sun-m" : "moon-m"}
                  initial={{ y: -16, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: 16, opacity: 0 }}
                  transition={{ duration: 0.15 }}
                >
                  {isDark ? <Sun size={16} /> : <Moon size={16} />}
                </motion.div>
              </AnimatePresence>
            </button>
          )}
          <button className="text-[var(--text-primary)]" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="md:hidden absolute top-full left-0 w-full bg-[var(--bg-primary)]/95 backdrop-blur-md border-b border-[var(--border-color)] p-6 flex flex-col gap-4 shadow-2xl"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
          >
            {NAV_LINKS.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollTo(link.id)}
                className="text-[var(--text-secondary)] hover:text-[var(--color-accent)] text-left py-2 border-b border-[var(--border-color)]/50 transition-colors"
              >
                {link.name}
              </button>
            ))}
            <a
              href="/Astle_Machado_Sr_Software_Engg_5YOE.pdf"
              download
              className="flex items-center gap-2 py-2 text-[var(--color-accent)] font-bold border-b border-[var(--border-color)]/50"
            >
              <FileDown size={16} />
              Resume
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
