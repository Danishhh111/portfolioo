import React, { useEffect, useRef, useState } from "react";

type RevealProps = {
  children: React.ReactNode;
  className?: string;
};

const Reveal: React.FC<RevealProps> = ({ children, className = "" }) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setInView(true);
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div ref={ref} className={`reveal ${inView ? "in-view" : ""} ${className}`}>
      {children}
    </div>
  );
};

export default Reveal;
