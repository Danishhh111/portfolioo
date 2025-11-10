import { useEffect, useMemo, useRef, useState } from "react";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";

const AmbientLightFX = () => {
  const [enabled, setEnabled] = useState(true);
  const prefersReduced = usePrefersReducedMotion();
  const x = useMotionValue(50);
  const y = useMotionValue(30);
  const sweep = useMotionValue(0);
  const gradient = useMotionTemplate`radial-gradient(600px 400px at ${x}% ${y}%, rgba(59,130,246,0.18), rgba(99,102,241,0.10) 45%, transparent 60%)`;
  const sweepGradient = useMotionTemplate`linear-gradient(120deg, rgba(14,165,233,0.06) ${sweep}%, rgba(14,165,233,0.0) ${sweep.get() + 30}%)`;
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    if (prefersReduced) return;
    const onMove = (e: MouseEvent) => {
      const vw = window.innerWidth;
      const vh = window.innerHeight;
      x.set((e.clientX / vw) * 100);
      y.set((e.clientY / vh) * 100);
    };
    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, [prefersReduced, x, y]);

  useEffect(() => {
    if (prefersReduced) return;
    let t = 0;
    const loop = () => {
      t += 0.0065;
      const value = (Math.sin(t) + 1) * 50; // 0..100
      sweep.set(value);
      rafRef.current = requestAnimationFrame(loop);
    };
    rafRef.current = requestAnimationFrame(loop);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [prefersReduced, sweep]);

  if (!enabled || prefersReduced) return null;

  return (
    <div className="pointer-events-none fixed inset-0 -z-10">
      <motion.div
        aria-hidden
        style={{ backgroundImage: gradient }}
        className="absolute inset-0 mix-blend-screen"
      />
      <motion.div
        aria-hidden
        style={{ backgroundImage: sweepGradient }}
        className="absolute inset-0 mix-blend-screen"
      />
    </div>
  );
};

function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const m = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(m.matches);
    const listener = (e: MediaQueryListEvent) => setReduced(e.matches);
    m.addEventListener?.("change", listener);
    return () => m.removeEventListener?.("change", listener);
  }, []);
  return reduced;
}

export default AmbientLightFX;

