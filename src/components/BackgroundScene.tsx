import { Suspense, useEffect, useMemo, useRef, useState } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import * as THREE from "three";

const ParticleField = () => {
  const ref = useRef<THREE.Group>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 640px)");
    setIsMobile(mq.matches);
    const handler = (e: MediaQueryListEvent) => setIsMobile(e.matches);
    mq.addEventListener?.("change", handler);
    const onVisibility = () => setIsVisible(!document.hidden);
    document.addEventListener("visibilitychange", onVisibility);
    return () => {
      mq.removeEventListener?.("change", handler);
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, []);

  const positions = useMemo(() => {
    const count = isMobile ? 1200 : 2400;
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < arr.length; i += 3) {
      const radius = 3.0 * Math.random();
      const angle = Math.random() * Math.PI * 2;
      const y = (Math.random() - 0.5) * (isMobile ? 3 : 4);
      arr[i] = Math.cos(angle) * radius;
      arr[i + 1] = y;
      arr[i + 2] = Math.sin(angle) * radius;
    }
    return arr;
  }, [isMobile]);

  // Throttle updates to ~60fps and pause when tab not visible
  const lastTimeRef = useRef(0);
  useFrame(({ clock }) => {
    if (!ref.current) return;
    if (!isVisible) return;
    const now = clock.getElapsedTime();
    if (now - lastTimeRef.current < 1 / 60) return;
    lastTimeRef.current = now;
    const t = now * 0.04;
    ref.current.rotation.x = Math.sin(t) * 0.12;
    ref.current.rotation.y = Math.cos(t) * 0.18;
  });

  return (
    <group ref={ref}>
      <Points positions={positions} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color="#6c8cff"
          size={0.028}
          depthWrite={false}
          opacity={0.42}
          sizeAttenuation
        />
      </Points>
      <Points positions={positions} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color="#00e0ff"
          size={0.012}
          depthWrite={false}
          opacity={0.3}
          sizeAttenuation
        />
      </Points>
    </group>
  );
};

const BackgroundScene = () => {
  const [enabled, setEnabled] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 480px)");
    setIsMobile(mq.matches);
    const rm = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(rm.matches);
    const mqHandler = (e: MediaQueryListEvent) => setIsMobile(e.matches);
    const rmHandler = (e: MediaQueryListEvent) => setReduced(e.matches);
    mq.addEventListener?.("change", mqHandler);
    rm.addEventListener?.("change", rmHandler);
    return () => {
      mq.removeEventListener?.("change", mqHandler);
      rm.removeEventListener?.("change", rmHandler);
    };
  }, []);

  if (!enabled || reduced) return null;
  // Disable on very small devices for absolute smoothness
  if (isMobile) return null;

  return (
    <div className="pointer-events-none fixed inset-0 -z-20 will-change-transform">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 65 }}
        dpr={[1, 1.5]}
        gl={{ antialias: false, powerPreference: "high-performance" }}
      >
        <color attach="background" args={["#070b14"]} />
        <fog attach="fog" args={["#070b14", 4, 12]} />
        <Suspense fallback={null}>
          <ParticleField />
        </Suspense>
      </Canvas>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(99,102,241,0.22),transparent_55%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(10,16,37,0.2),rgba(7,11,20,0.9))]" />
    </div>
  );
};

export default BackgroundScene;

