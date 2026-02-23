"use client";

import { motion, AnimatePresence } from "framer-motion";
import type { ReactNode } from "react";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.05,
    },
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.2 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
  },
};

const springTransition = {
  type: "spring" as const,
  stiffness: 100,
  damping: 20,
};

interface MotionGridProps {
  children: ReactNode;
  className?: string;
  animationKey: string;
}

export function MotionGrid({
  children,
  className,
  animationKey,
}: MotionGridProps) {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={animationKey}
        className={className}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}

interface MotionCardProps {
  children: ReactNode;
}

export function MotionCard({ children }: MotionCardProps) {
  return (
    <motion.div
      className="h-full"
      variants={cardVariants}
      transition={springTransition}
      layout
    >
      {children}
    </motion.div>
  );
}
