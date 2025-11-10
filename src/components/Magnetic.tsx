import { ReactNode, useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

type MagneticProps = {
  children: ReactNode;
  radius?: number;
  strength?: number;
  className?: string;
};

const Magnetic = ({ children, radius = 80, strength = 12, className }: MagneticProps) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const dx = useMotionValue(0);
  const dy = useMotionValue(0);
  const x = useSpring(dx, { stiffness: 300, damping: 18, mass: 0.4 });
  const y = useSpring(dy, { stiffness: 300, damping: 18, mass: 0.4 });

  const onMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const mx = e.clientX - (rect.left + rect.width / 2);
    const my = e.clientY - (rect.top + rect.height / 2);
    const dist = Math.sqrt(mx * mx + my * my);
    if (dist < radius) {
      dx.set((mx / radius) * strength);
      dy.set((my / radius) * strength);
    }
  };
  const onMouseLeave = () => {
    dx.set(0);
    dy.set(0);
  };

  return (
    <motion.div ref={ref} className={className} style={{ x, y }} onMouseMove={onMouseMove} onMouseLeave={onMouseLeave}>
      {children}
    </motion.div>
  );
};

export default Magnetic;

