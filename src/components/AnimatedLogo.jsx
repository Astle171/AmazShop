"use client";
import { useState, useEffect } from "react";
import { motion, useAnimationControls } from "framer-motion";

export default function AnimatedLogo({ onClick }) {
  const controls = useAnimationControls();
  const [isAnimating, setIsAnimating] = useState(false);

  // Auto-animate on page load
  useEffect(() => {
    const timeout = setTimeout(async () => {
      setIsAnimating(true);
      await controls.start({
        opacity: [0, 1],
        x: [-10, 0],
        transition: { duration: 0.6, ease: "easeOut" },
      });
      setIsAnimating(false);
    }, 400);
    return () => clearTimeout(timeout);
  }, [controls]);

  const handleHover = async () => {
    if (isAnimating) return;
    setIsAnimating(true);
    await controls.start({
      scale: [1, 1.05, 1],
      transition: { duration: 0.4, ease: "easeOut" },
    });
    setIsAnimating(false);
  };

  return (
    <button
      onClick={onClick}
      onMouseEnter={handleHover}
      className="flex items-center gap-0 cursor-pointer group select-none"
    >
      <span className="text-[var(--text-muted)] font-mono text-base sm:text-lg font-bold opacity-70 group-hover:opacity-100 group-hover:text-[var(--color-accent)] transition-all duration-300 mr-1.5">
        &lt;
      </span>
      <motion.span
        animate={controls}
        className="text-[var(--text-primary)] text-xl sm:text-2xl inline-block group-hover:text-[var(--color-accent)] transition-colors duration-300"
        style={{
          fontFamily: "var(--font-signature)",
          display: "inline-block",
        }}
      >
        Astle Machado
      </motion.span>
      <span className="text-[var(--text-muted)] font-mono text-base sm:text-lg font-bold opacity-70 group-hover:opacity-100 group-hover:text-[var(--color-accent)] transition-all duration-300 ml-1.5">
        /&gt;
      </span>
    </button>
  );
}
