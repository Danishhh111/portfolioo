import { motion, useScroll, useTransform } from "framer-motion";

const ParallaxLayers = () => {
  const { scrollY } = useScroll();
  const yBack = useTransform(scrollY, [0, 800], [0, -60]);
  const yMid = useTransform(scrollY, [0, 800], [0, -120]);
  const yFront = useTransform(scrollY, [0, 800], [0, -180]);

  return (
    <div className="pointer-events-none fixed inset-0 -z-15">
      <motion.div
        style={{ y: yBack }}
        className="absolute inset-0 bg-[radial-gradient(circle_at_10%_15%,rgba(99,102,241,0.12),transparent_55%)]"
      />
      <motion.div
        style={{ y: yMid }}
        className="absolute inset-0 bg-[radial-gradient(circle_at_85%_20%,rgba(14,165,233,0.12),transparent_55%)]"
      />
      <motion.div
        style={{ y: yFront }}
        className="absolute inset-0 opacity-[0.10] mix-blend-screen bg-[conic-gradient(from_180deg_at_50%_10%,rgba(59,130,246,0.12),rgba(20,184,166,0.10),transparent_70%)]"
      />
    </div>
  );
};

export default ParallaxLayers;

