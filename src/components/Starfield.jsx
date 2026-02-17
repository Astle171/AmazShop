"use client";
import { useEffect, useMemo, useState } from "react";
import { useTheme } from "next-themes";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

export default function Starfield() {
  const [init, setInit] = useState(false);
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => setInit(true));
  }, []);

  const isDark = mounted ? resolvedTheme === "dark" : true;

  const options = useMemo(
    () => ({
      fullScreen: { enable: false },
      background: { color: { value: "transparent" } },
      fpsLimit: 60,
      particles: {
        number: {
          value: isDark ? 180 : 80,
          density: { enable: true, width: 1920, height: 1080 },
        },
        color: {
          value: isDark
            ? ["#ffffff", "#a5f3fc", "#c4b5fd", "#93c5fd"]
            : ["#94a3b8", "#0891b2", "#7c3aed", "#3b82f6"],
        },
        shape: { type: "circle" },
        opacity: {
          value: isDark ? { min: 0.1, max: 0.9 } : { min: 0.05, max: 0.4 },
          animation: { enable: true, speed: 0.6, sync: false },
        },
        size: {
          value: isDark ? { min: 0.4, max: 2.8 } : { min: 0.3, max: 2 },
          animation: { enable: true, speed: 0.8, sync: false },
        },
        move: {
          enable: true,
          speed: { min: 0.05, max: 0.3 },
          direction: "none",
          random: true,
          straight: false,
          outModes: { default: "out" },
        },
        twinkle: {
          particles: {
            enable: true,
            frequency: 0.04,
            opacity: isDark ? 1 : 0.6,
            color: { value: isDark ? "#22d3ee" : "#0891b2" },
          },
        },
        links: { enable: false },
      },
      interactivity: {
        events: {
          onHover: { enable: true, mode: "grab" },
          resize: { enable: true },
        },
        modes: {
          grab: {
            distance: 150,
            links: {
              opacity: isDark ? 0.2 : 0.1,
              color: isDark ? "#22d3ee" : "#0891b2",
            },
          },
        },
      },
      detectRetina: true,
    }),
    [isDark]
  );

  if (!init) return null;

  return (
    <div className="fixed inset-0 z-0 pointer-events-auto">
      <Particles
        id="tsparticles"
        key={isDark ? "dark" : "light"}
        options={options}
        className="w-full h-full"
      />
    </div>
  );
}
