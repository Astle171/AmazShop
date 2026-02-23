"use client";

import { memo } from "react";
import { motion, AnimatePresence } from "framer-motion";

function RollingDigit({ char, delay }: { char: string; delay: number }) {
  const isFixed = char === "$" || char === "." || char === ",";

  return (
    <span
      className="relative inline-block overflow-hidden text-center"
      style={{ width: isFixed ? undefined : "0.62em" }}
    >
      <AnimatePresence mode="popLayout" initial={false}>
        <motion.span
          key={char}
          initial={{ y: "100%", opacity: 0 }}
          animate={{ y: "0%", opacity: 1 }}
          exit={{ y: "-100%", opacity: 0 }}
          transition={{
            type: "spring",
            stiffness: 180,
            damping: 22,
            delay,
          }}
          className="inline-block"
        >
          {char}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}

interface RollingPriceProps {
  value: number;
  className?: string;
  prefix?: string;
}

function RollingPriceInner({
  value,
  className = "",
  prefix = "$",
}: RollingPriceProps) {
  const formatted = `${prefix}${value.toLocaleString("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })}`;

  return (
    <span className={`inline-flex ${className}`}>
      {formatted.split("").map((char, i) => (
        <RollingDigit key={i} char={char} delay={i * 0.015} />
      ))}
    </span>
  );
}

const RollingPrice = memo(RollingPriceInner);
export default RollingPrice;
