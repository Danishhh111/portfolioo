import { useEffect, useRef, useState } from "react";
import { Download, ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, useAnimation, useMotionTemplate, useMotionValue } from "framer-motion";
import Magnetic from "@/components/Magnetic";

const subtitleCycle = [
  "A Computer Science student passionate about coding.",
  "Building innovative solutions with modern tech.",
  "Exploring AI, web development, and more.",
];

const glowVariants = {
  initial: { opacity: 0, scale: 0.96 },
  animate: { opacity: 1, scale: 1, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

const containerVariants = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
  },
};

const textRevealVariants = {
  hidden: { opacity: 0, y: 16 },
  show: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: index * 0.08, duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  }),
};

const Hero: React.FC = () => {
  const [displayText, setDisplayText] = useState("");
  const [subtitleIndex, setSubtitleIndex] = useState(0);
  const cursorControls = useAnimation();
  const tiltX = useMotionValue(0);
  const tiltY = useMotionValue(0);
  const gradientX = useMotionValue(50);
  const gradientY = useMotionValue(30);
  const glowGradient = useMotionTemplate`radial-gradient(at ${gradientX}% ${gradientY}%, rgba(99,102,241,0.35), rgba(37,99,235,0.05) 45%)`;
  const subsectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= HERO_GREETING.length) {
        setDisplayText(HERO_GREETING.slice(0, index));
        index += 1;
      } else {
        clearInterval(timer);
        cursorControls.start({
          opacity: [1, 0],
          transition: { repeat: Infinity, repeatDelay: 0.5, duration: 0.6 },
        });
      }
    }, 85);

    return () => clearInterval(timer);
  }, [cursorControls]);

  useEffect(() => {
    const interval = setInterval(() => {
      setSubtitleIndex((current) => (current + 1) % subtitleCycle.length);
    }, 3200);

    return () => clearInterval(interval);
  }, []);

  const scrollToProjects = () => {
    const element = document.getElementById("projects");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width) * 100;
    const y = ((event.clientY - rect.top) / rect.height) * 100;
    tiltX.set((event.clientY - rect.top - rect.height / 2) / 15);
    tiltY.set(-(event.clientX - rect.left - rect.width / 2) / 15);
    gradientX.set(x);
    gradientY.set(y);
  };

  const handleMouseLeave = () => {
    tiltX.set(0);
    tiltY.set(0);
    gradientX.set(50);
    gradientY.set(30);
  };

  return (
    <section id="home" className="relative flex min-h-screen items-center justify-center pt-28 pb-24 px-4 sm:px-6 md:px-12">
      <motion.div
        className="absolute inset-0 -z-10 rounded-[4rem] opacity-80 blur-3xl"
        variants={glowVariants}
        initial="initial"
        animate="animate"
        style={{ backgroundImage: glowGradient }}
      />
      <div className="container mx-auto">
        <motion.div
          className="grid gap-16 items-center lg:grid-cols-[1.1fr_0.9fr]"
          variants={containerVariants}
          initial="hidden"
          animate="show"
        >
          <motion.div
            className="relative space-y-10 rounded-3xl border border-white/5 bg-background/60 p-8 sm:p-12 shadow-[0px_40px_120px_rgba(15,23,42,0.35)] backdrop-blur-2xl will-change-transform"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ rotateX: tiltX, rotateY: tiltY }}
          >
            <motion.span
              custom={0}
              variants={textRevealVariants}
              initial="hidden"
              animate="show"
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.5em] text-cyan-300 backdrop-blur"
            >
              Available for internships
            </motion.span>
            <div className="space-y-4">
              <motion.h1
                custom={1}
                variants={textRevealVariants}
                initial="hidden"
                animate="show"
                className="relative text-4xl font-bold leading-tight text-slate-100 sm:text-5xl lg:text-6xl will-change-opacity will-change-transform"
              >
                <span className="block">{displayText}</span>
                <motion.span
                  animate={cursorControls}
                  className="inline-block text-primary"
                >
                  |
                </motion.span>
                <span className="absolute -inset-x-6 -top-6 -bottom-6 -z-10 rounded-[40px] border border-primary/40 bg-gradient-to-r from-primary/15 via-sky-500/10 to-emerald-400/10 blur-3xl" />
              </motion.h1>
              <motion.p
                key={subtitleIndex}
                custom={2}
                variants={textRevealVariants}
                initial="hidden"
                animate="show"
                className="text-lg text-slate-300 sm:text-xl"
              >
                {subtitleCycle[subtitleIndex]}
              </motion.p>
              <motion.p
                custom={3}
                variants={textRevealVariants}
                initial="hidden"
                animate="show"
                className="text-base leading-relaxed text-slate-400 sm:text-lg"
              >
                Building innovative solutions and exploring the endless possibilities of technology.
              </motion.p>
            </div>

            <motion.div
              custom={4}
              variants={textRevealVariants}
              initial="hidden"
              animate="show"
              className="flex flex-wrap items-center gap-4 pt-2"
            >
              <Magnetic>
                <Button
                  onClick={scrollToProjects}
                  size="lg"
                  className="group relative overflow-hidden rounded-full bg-gradient-to-r from-primary via-sky-500 to-emerald-400 px-8 py-6 text-sm font-semibold uppercase tracking-[0.3em]"
                >
                  <span className="relative z-10 flex items-center gap-3">
                    See My Projects
                    <ArrowDown size={18} className="transition-transform duration-300 group-hover:translate-y-1" />
                  </span>
                  <motion.div
                    className="absolute inset-0 z-0 bg-white/20"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "0%" }}
                    transition={{ duration: 0.45, ease: "easeOut" }}
                  />
                </Button>
              </Magnetic>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="group relative overflow-hidden rounded-full border-white/20 bg-white/5 px-6 py-6 text-sm font-semibold uppercase tracking-[0.3em] text-white backdrop-blur"
              >
                <a href="/Danish_Nawaz_CV.pdf" download aria-label="Download CV" className="flex items-center gap-3">
                  <Download size={18} className="transition-transform duration-300 group-hover:-translate-y-1" />
                  Download CV
                </a>
              </Button>
            </motion.div>

            <motion.div
              custom={5}
              variants={textRevealVariants}
              initial="hidden"
              animate="show"
              className="mt-6 flex flex-col gap-3 text-sm text-slate-300 sm:flex-row sm:items-center"
            >
              <div className="flex items-center gap-3">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-lg">📞</span>
                <a href="tel:03019681065" className="group relative font-medium text-slate-200 transition-colors duration-300 hover:text-white">
                  0301-9681065
                  <span className="absolute bottom-0 left-0 h-[2px] w-full origin-left scale-x-0 bg-gradient-to-r from-primary via-sky-400 to-emerald-400 transition-transform duration-300 group-hover:scale-x-100" />
                </a>
              </div>
              <div className="flex items-center gap-3">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-lg">📧</span>
                <a
                  href="mailto:danishnawaz398@gmail.com"
                  className="group relative font-medium text-slate-200 transition-colors duration-300 hover:text-white"
                >
                  danishnawaz398@gmail.com
                  <span className="absolute bottom-0 left-0 h-[2px] w-full origin-left scale-x-0 bg-gradient-to-r from-primary via-sky-400 to-emerald-400 transition-transform duration-300 group-hover:scale-x-100" />
                </a>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            ref={subsectionRef}
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="relative flex justify-center"
          >
            <motion.div
              className="group relative flex h-[360px] w-[360px] items-center justify-center rounded-[46%] border border-white/10 bg-gradient-to-br from-white/8 via-slate-900/40 to-slate-900/80 p-2 shadow-[0_30px_80px_rgba(15,23,42,0.35)] backdrop-blur-2xl sm:h-[420px] sm:w-[420px]"
              whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 140, damping: 16 }}
            >
              <div className="pointer-events-none absolute h-full w-full rounded-[46%] bg-gradient-to-br from-primary/30 via-cyan-400/20 to-emerald-400/20 blur-2xl opacity-60" />
              <div className="relative h-full w-full rounded-[44%] bg-black/40 p-5">
                <motion.div
                  className="relative h-full w-full overflow-hidden rounded-[38%] border border-white/5 bg-black/50"
                  animate={{ rotateZ: [-2.5, 2.5, -2.5] }}
                  transition={{ repeat: Infinity, duration: 12, ease: "easeInOut" }}
                >
                  <motion.img
                    src="/profile.jpg"
                    alt="Danish Nawaz"
                    onError={(event) => {
                      const target = event.currentTarget as HTMLImageElement;
                      target.src =
                        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=500&fit=crop";
                    }}
                    className="h-full w-full object-cover"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  />
                </motion.div>
              </div>
            </motion.div>
            <motion.div
              className="absolute -right-10 top-12 hidden rounded-2xl border border-white/10 bg-black/50 px-5 py-4 text-sm font-medium text-white shadow-[0_20px_40px_rgba(14,165,233,0.25)] backdrop-blur xl:inline-flex"
              animate={{ y: [0, -8, 0], rotate: [0, 2, 0] }}
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
            >
              <span className="text-sky-300/80">+4 Years</span>&nbsp;exploring code
            </motion.div>
            <motion.div
              className="absolute -left-12 bottom-8 hidden rounded-2xl border border-white/10 bg-black/60 px-5 py-4 text-sm font-medium text-white shadow-[0_20px_40px_rgba(16,185,129,0.25)] backdrop-blur xl:inline-flex"
              animate={{ y: [0, 10, 0], rotate: [0, -2, 0] }}
              transition={{ repeat: Infinity, duration: 7.5, ease: "easeInOut", delay: 0.5 }}
            >
              <span className="text-emerald-300/80">Full-stack</span>&nbsp;problem solver
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
      <motion.div
        className="absolute bottom-12 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 12, 0] }}
        transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
      >
        <div className="flex flex-col items-center gap-3 text-xs font-medium uppercase tracking-[0.35em] text-slate-400">
          <span>Scroll</span>
          <span className="block h-14 w-[1px] bg-gradient-to-b from-transparent via-slate-500/60 to-slate-300/80" />
        </div>
      </motion.div>
    </section>
  );
};

const HERO_GREETING = "Hi, I'm Danish Nawaz 👋";

export default Hero;
