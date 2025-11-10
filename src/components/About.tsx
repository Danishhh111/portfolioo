import { useState } from "react";
import { Code2, Database, Laptop, Sparkles } from "lucide-react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { motion } from "framer-motion";
import SectionTitle from "@/components/SectionTitle";
import { Progress } from "@/components/ui/progress";

type Skill = {
  name: string;
  icon: React.ComponentType<{ className?: string }>;
  percent: number;
  note: string;
};

const skills: Skill[] = [
  { name: "HTML", icon: Code2, percent: 92, note: "Semantic, accessible layouts with responsive patterns and best practices." },
  { name: "CSS", icon: Code2, percent: 90, note: "Modern CSS, Tailwind, fluid typography, grids, and animations." },
  { name: "JavaScript", icon: Code2, percent: 85, note: "ESNext, modular patterns, async, and performance-conscious DOM work." },
  { name: "React", icon: Laptop, percent: 86, note: "Hooks, state management, routing, Suspense, and performance optimizations." },
  { name: "Python", icon: Code2, percent: 80, note: "Scripting, data processing, and automation; comfortable with APIs." },
  { name: "C++", icon: Code2, percent: 72, note: "Core language, STL, problem solving, and algorithmic thinking." },
  { name: "SQL", icon: Database, percent: 74, note: "Relational modeling, joins, aggregations, indexing basics." },
  { name: "AI/ML", icon: Sparkles, percent: 65, note: "Foundations, basic models, preprocessing, and experimentation." },
  { name: "Problem Solving", icon: Code2, percent: 88, note: "Structured approach, debugging, and clear communication." },
  { name: "Flutter Development", icon: Laptop, percent: 60, note: "UI building blocks, state handling, and basic app flows." },
  { name: "Image Processing", icon: Sparkles, percent: 58, note: "Core techniques, filters, and classical vision pipelines." },
  { name: "SAP-MM Module", icon: Database, percent: 55, note: "Hands-on exposure during internship: material management flows." },
];

const headingVariants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

const contentVariants = {
  hidden: { opacity: 0, y: 20 },
  show: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: index * 0.08, duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  }),
};

const About = () => {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState<Skill | null>(null);

  return (
    <section id="about" className="relative py-28 px-4 sm:px-6">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_bottom,rgba(99,102,241,0.28),transparent_60%)] blur-3xl" />
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-40 bg-gradient-to-b from-white/10 via-transparent to-transparent" />
      <div className="container mx-auto max-w-5xl">
        <SectionTitle title="About Me" subtitle="Get to know me better" accent="blue" />

        <motion.div
          className="mx-auto mt-14 max-w-4xl rounded-[32px] border border-white/10 bg-white/5 p-8 shadow-[0_35px_120px_rgba(15,23,42,0.42)] backdrop-blur-2xl sm:p-12 will-change-transform"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={contentVariants}
          custom={0}
          whileHover={{ rotateY: 1.2, rotateX: -0.8 }}
          transition={{ type: "spring", stiffness: 170, damping: 16 }}
        >
          <div className="space-y-5 text-left text-slate-200">
            <motion.p className="text-lg leading-relaxed" custom={0} variants={contentVariants}>
              I'm <span className="font-semibold text-primary">Danish Nawaz</span>, a Computer Science student who loves solving problems, learning new technologies, and building creative software projects. My interests include web development, data science, and artificial intelligence.
            </motion.p>
            <motion.p className="text-lg leading-relaxed text-slate-300" custom={1} variants={contentVariants}>
              I believe in continuous learning and enjoy taking on challenges that push me to grow as a developer. When I'm not coding, you can find me exploring the latest tech trends, reading tech blogs, or working on personal projects.
            </motion.p>
          </div>

          <motion.div
            className="mt-12 flex items-center justify-center"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="relative flex items-center gap-4 w-full">
              <span className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
              <div className="relative text-xs font-semibold uppercase tracking-[0.6em] text-slate-400">
                Scroll
                <span className="absolute -left-20 top-1/2 -translate-y-1/2 h-[2px] w-40 origin-left animate-[pulse_1.2s_ease-in-out_infinite] bg-gradient-to-r from-primary/30 via-cyan-400/60 to-emerald-400/40" />
              </div>
              <span className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
            </div>
          </motion.div>

          <motion.div
            className="mt-12"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.4 }}
            variants={contentVariants}
            custom={2}
          >
            <h3 className="text-center text-2xl font-semibold text-slate-100">Skills & Technologies</h3>
            <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {skills.map((skill, index) => {
                const Icon = skill.icon;
                return (
                  <motion.button
                    key={skill.name}
                    type="button"
                    onClick={() => { setSelected(skill); setOpen(true); }}
                    className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 via-slate-900/40 to-slate-900/80 p-4 text-center shadow-[0_30px_90px_rgba(14,165,233,0.12)] backdrop-blur-xl"
                    whileHover={{ y: -8, scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 160, damping: 18 }}
                  >
                    <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                      <div className="absolute -inset-6 bg-[conic-gradient(from_140deg_at_50%_50%,rgba(59,130,246,0.45),rgba(45,212,191,0.35),transparent_70%)] blur-3xl" />
                    </div>
                    <div className="relative flex flex-col items-center gap-3">
                      <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-white/10 bg-black/40 shadow-[0_14px_40px_rgba(59,130,246,0.28)]">
                        <Icon className="h-7 w-7 text-sky-300" />
                      </div>
                      <span className="text-sm font-medium text-slate-200">{skill.name}</span>
                    </div>
                  </motion.button>
                );
              })}
            </div>
          </motion.div>
        </motion.div>

        <Dialog open={open} onOpenChange={setOpen}>
          <DialogContent className="max-w-lg border border-white/10 bg-[#0b1022]/90 backdrop-blur-2xl">
            {selected && (
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  {(() => {
                    const Icon = selected.icon;
                    return (
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/5">
                        <Icon className="h-6 w-6 text-sky-300" />
                      </div>
                    );
                  })()}
                  <div>
                    <h4 className="text-xl font-semibold text-white">{selected.name}</h4>
                    <p className="text-xs uppercase tracking-[0.3em] text-slate-400">Proficiency</p>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-slate-300">Skill level</span>
                    <span className="font-semibold text-sky-300">{selected.percent}%</span>
                  </div>
                  <Progress value={selected.percent} className="h-2" />
                </div>
                <p className="text-sm leading-relaxed text-slate-300">{selected.note}</p>
              </div>
            )}
          </DialogContent>
        </Dialog>

        <motion.div
          className="mt-16 grid gap-12 lg:grid-cols-2"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
        >
          <motion.div variants={contentVariants} custom={0} className="rounded-[30px] border border-white/10 bg-white/5 p-8 shadow-[0_35px_110px_rgba(37,99,235,0.2)] backdrop-blur-2xl">
            <h3 className="text-center text-2xl font-semibold text-slate-100">Education</h3>
            <div className="mt-8 space-y-6">
              <div className="rounded-2xl border border-white/10 bg-black/50 p-6 transition-all duration-500 hover:-translate-y-2 hover:border-primary/40 hover:shadow-[0_30px_90px_rgba(59,130,246,0.35)]">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <div className="text-lg font-semibold text-white">F.Sc. Pre-Engineering</div>
                    <div className="text-sm text-slate-400">2019 – 2021</div>
                    <div className="mt-2 text-sm text-slate-400">Focused on Mathematics, Physics, and Computer Science foundations</div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="rounded-full bg-primary/15 px-4 py-1 text-xs font-semibold text-primary">Mathematics</span>
                    <span className="rounded-full bg-primary/15 px-4 py-1 text-xs font-semibold text-primary">Physics</span>
                  </div>
                </div>
              </div>
              <div className="rounded-2xl border border-white/10 bg-black/50 p-6 transition-all duration-500 hover:-translate-y-2 hover:border-primary/40 hover:shadow-[0_30px_90px_rgba(16,185,129,0.35)]">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <div className="text-lg font-semibold text-white">BSCS</div>
                    <div className="text-sm text-slate-400">2021 – 2025</div>
                  </div>
                  <div className="text-sm text-slate-400">Bachelor of Science (Computer Science)</div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div variants={contentVariants} custom={1} className="rounded-[30px] border border-white/10 bg-white/5 p-8 shadow-[0_35px_110px_rgba(16,185,129,0.2)] backdrop-blur-2xl">
            <h3 className="text-center text-2xl font-semibold text-slate-100">Experience</h3>
            <div className="mt-8 space-y-6">
              <div className="rounded-2xl border border-white/10 bg-black/50 p-6 transition-all duration-500 hover:-translate-y-2 hover:border-primary/40 hover:shadow-[0_30px_90px_rgba(59,130,246,0.35)]">
                <div className="flex flex-col gap-6 sm:flex-row sm:justify-between">
                  <div className="space-y-3">
                    <div className="flex flex-wrap items-center gap-3">
                      <h4 className="text-lg font-semibold text-white">Six-week internship at PARCO</h4>
                      <span className="rounded-full bg-primary/15 px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-primary">2025</span>
                    </div>
                    <p className="text-sm leading-relaxed text-slate-400">Practical exposure to industry workflows and systems.</p>
                    <ul className="mt-2 list-disc space-y-1 text-sm text-slate-400">
                      <li>Worked with SAP-MM Module for material management</li>
                      <li>Gained hands-on experience with enterprise systems</li>
                      <li>Collaborated with cross-functional teams</li>
                    </ul>
                  </div>
                  <div className="flex items-start">
                    <Dialog>
                      <DialogTrigger asChild>
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.98 }}
                          className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/90 px-6 py-3 text-sm font-semibold text-primary-foreground shadow-[0_15px_35px_rgba(59,130,246,0.35)] transition-colors duration-300 hover:bg-primary"
                        >
                          <span>View Certificate</span>
                          <span className="text-xs opacity-80">↗</span>
                        </motion.button>
                      </DialogTrigger>
                      <DialogContent className="max-w-3xl border border-white/10 bg-black/85 backdrop-blur-2xl">
                        <img
                          src="/certificate.jpg"
                          alt="Certificate"
                          className="w-full rounded-2xl"
                          onError={(event) => {
                            (event.currentTarget as HTMLImageElement).src =
                              "https://via.placeholder.com/800x600?text=Certificate";
                          }}
                        />
                      </DialogContent>
                    </Dialog>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
