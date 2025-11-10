import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import Magnetic from "@/components/Magnetic";
import SectionTitle from "@/components/SectionTitle";

const projects = [
  {
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce website with cart, payments, and admin dashboard built with React and Node.js.",
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=600&h=400&fit=crop",
    liveUrl: "https://ecommercebydanishh.netlify.app",
    githubUrl: "https://github.com/Danishhh111/e-commerce-.git",
  },
  {
    title: "Task Management App",
    description: "A productivity app with drag-and-drop functionality, deadlines, and team collaboration features.",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=400&fit=crop",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Weather Dashboard",
    description: "Real-time weather application using OpenWeather API with beautiful UI and 7-day forecast.",
    image: "https://images.unsplash.com/photo-1592210454359-9043f067919b?w=600&h=400&fit=crop",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "AI Chatbot",
    description: "An intelligent chatbot using natural language processing to provide helpful responses.",
    image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=600&h=400&fit=crop",
    liveUrl: "#",
    githubUrl: "#",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="relative py-24 px-4 sm:px-6">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,rgba(14,116,144,0.28),transparent_65%)] blur-3xl" />
      <div className="container mx-auto">
        <SectionTitle title="My Projects" subtitle="Here are some of my recent projects showcasing my skills in web development and problem-solving." accent="violet" className="mb-14" />

        <div className="grid gap-10 lg:grid-cols-2">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 36 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.55, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
            >
              <Card className="group relative overflow-hidden rounded-3xl border border-white/5 bg-background/70 shadow-[0_40px_120px_rgba(15,23,42,0.35)] backdrop-blur-2xl transition-transform duration-300 hover:-translate-y-3 hover:shadow-[0_50px_140px_rgba(14,165,233,0.28)] will-change-transform">
                <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-50">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-sky-500/20 to-emerald-400/20" />
                </div>
                <div className="relative overflow-hidden">
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="h-64 w-full object-cover"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-900/0 to-transparent" />
                  <motion.div
                    className="absolute inset-x-0 bottom-0 translate-y-10 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100"
                    layout
                  >
                    <div className="flex flex-wrap gap-3 p-6">
                      <Magnetic>
                        <Button asChild size="sm" className="gap-2 rounded-full bg-white/90 text-slate-900 hover:bg-white">
                          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                            <ExternalLink size={16} />
                            View Live
                          </a>
                        </Button>
                      </Magnetic>
                      <Magnetic>
                        <Button
                          asChild
                          size="sm"
                          variant="outline"
                          className="gap-2 rounded-full border-white/30 bg-white/10 text-white backdrop-blur hover:border-white/60"
                        >
                          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                            <Github size={16} />
                            Source Code
                          </a>
                        </Button>
                      </Magnetic>
                    </div>
                  </motion.div>
                </div>

                <div className="space-y-3 p-8">
                  <h3 className="text-2xl font-semibold text-slate-100">{project.title}</h3>
                  <p className="text-sm leading-relaxed text-slate-400">{project.description}</p>
                </div>
                <div className="pointer-events-none absolute -inset-24 opacity-0 transition-opacity duration-200 group-hover:opacity-30">
                  <div className="h-full w-full rotate-12 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.25),transparent_70%)]" />
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
