"use client";
import { useState, useEffect } from "react";
import { useMediaQuery } from "@/hooks/useMediaQuery";

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [hidden, setHidden] = useState(true);
  const isTouch = useMediaQuery("(pointer: coarse)");

  useEffect(() => {
    if (isTouch) return;

    const onMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setHidden(false);
    };
    const onMouseLeave = () => setHidden(true);
    const onMouseEnter = () => setHidden(false);

    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseleave", onMouseLeave);
    document.addEventListener("mouseenter", onMouseEnter);

    return () => {
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseleave", onMouseLeave);
      document.removeEventListener("mouseenter", onMouseEnter);
    };
  }, [isTouch]);

  if (isTouch) return null;

  return (
    <div
      className={`fixed pointer-events-none z-50 transition-opacity duration-300 ${hidden ? "opacity-0" : "opacity-100"}`}
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        transform: "translate(-50%, -50%)",
      }}
    >
      <div className="w-8 h-8 border border-cyan-400/60 rounded-full animate-ping absolute opacity-40" />
      <div className="w-2 h-2 bg-cyan-400 rounded-full shadow-[0_0_15px_rgba(34,211,238,0.8)]" />
    </div>
  );
}
