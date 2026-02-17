"use client";
import { useCallback, useRef } from "react";

export function useThemeSound() {
  const audioContextRef = useRef(null);

  const playToggleSound = useCallback((toDark) => {
    try {
      if (!audioContextRef.current) {
        audioContextRef.current = new (window.AudioContext || window.webkitAudioContext)();
      }
      const ctx = audioContextRef.current;
      const now = ctx.currentTime;

      // Mechanical light-switch click using shaped noise bursts
      const bufferLen = ctx.sampleRate * 0.08;
      const buffer = ctx.createBuffer(1, bufferLen, ctx.sampleRate);
      const data = buffer.getChannelData(0);

      if (toDark) {
        // Switch OFF: sharp snap then a lower thud
        for (let i = 0; i < bufferLen; i++) {
          const t = i / ctx.sampleRate;
          // Initial sharp click transient
          const click = Math.exp(-t * 600) * (Math.random() * 2 - 1);
          // Slightly delayed mechanical thud
          const thud = Math.exp(-Math.max(0, t - 0.008) * 300) * (Math.random() * 2 - 1) * 0.4;
          data[i] = click + thud;
        }
      } else {
        // Switch ON: crisp snap with a brighter, snappier tail
        for (let i = 0; i < bufferLen; i++) {
          const t = i / ctx.sampleRate;
          // Sharp initial transient
          const snap = Math.exp(-t * 800) * (Math.random() * 2 - 1);
          // Bright resonant tick
          const tick = Math.exp(-t * 500) * Math.sin(2 * Math.PI * 3500 * t) * 0.15;
          data[i] = snap + tick;
        }
      }

      const source = ctx.createBufferSource();
      source.buffer = buffer;

      // Shape the output with a gain envelope and highpass for crispness
      const gain = ctx.createGain();
      gain.gain.setValueAtTime(0.35, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.07);

      const hpFilter = ctx.createBiquadFilter();
      hpFilter.type = "highpass";
      hpFilter.frequency.value = 800;
      hpFilter.Q.value = 0.7;

      source.connect(hpFilter);
      hpFilter.connect(gain);
      gain.connect(ctx.destination);

      source.start(now);
      source.stop(now + 0.08);
    } catch {
      // Audio not supported, fail silently
    }
  }, []);

  return { playToggleSound };
}
