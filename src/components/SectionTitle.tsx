import { motion } from "framer-motion";

type Props = {
  title: string;
  subtitle?: string;
  accent?: "blue" | "violet" | "cyan";
  className?: string;
};

const gradientMap = {
  blue: "bg-gradient-to-r from-sky-400 via-indigo-400 to-emerald-400",
  violet: "bg-gradient-to-r from-indigo-400 via-violet-400 to-sky-400",
  cyan: "bg-gradient-to-r from-cyan-400 via-sky-400 to-emerald-400",
};

const SectionTitle = ({ title, subtitle, accent = "blue", className = "" }: Props) => {
  return (
    <div className={`text-center ${className}`}>
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="relative inline-block px-6 py-2">
          <span className={`pointer-events-none absolute inset-x-4 -bottom-1 h-[3px] rounded-full opacity-80 ${gradientMap[accent]}`} />
          <motion.h2
            initial={{ WebkitMaskImage: "linear-gradient(90deg, transparent 0%, black 20%, black 80%, transparent 100%)" }}
            whileInView={{
              WebkitMaskPosition: ["200%", "-100%"],
            }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="text-4xl font-bold tracking-tight text-slate-50 md:text-5xl hover-scale-fast"
          >
            {title}
          </motion.h2>
        </div>
        {subtitle && <p className="mt-4 text-lg leading-relaxed text-slate-400">{subtitle}</p>}
      </motion.div>
    </div>
  );
};

export default SectionTitle;

