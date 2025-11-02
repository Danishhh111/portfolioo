import { Code2, Database, Laptop, Sparkles } from "lucide-react";
import Reveal from "./Reveal";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

const skills = [
  { name: "HTML", icon: Code2 },
  { name: "CSS", icon: Code2 },
  { name: "JavaScript", icon: Code2 },
  { name: "React", icon: Laptop },
  { name: "Python", icon: Code2 },
  { name: "C++", icon: Code2 },
  { name: "SQL", icon: Database },
  { name: "AI/ML", icon: Sparkles },
  // Extended skills (preserve existing ones above)
  { name: "Problem Solving", icon: Code2 },
  { name: "Flutter Development", icon: Laptop },
  { name: "Image Processing", icon: Sparkles },
  { name: "SAP-MM Module", icon: Database },
];

const About = () => {
  return (
    <section id="about" className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12 slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">About Me</h2>
          <p className="text-xl text-muted-foreground">Get to know me better</p>
        </div>

        <div className="space-y-12">
          {/* Bio */}
          <div className="text-center md:text-left space-y-4 fade-in">
            <p className="text-lg leading-relaxed">
              I'm <span className="font-semibold text-primary">Danish Nawaz</span>, 
              a Computer Science student who loves solving problems, learning new technologies, 
              and building creative software projects. My interests include web development, 
              data science, and artificial intelligence.
            </p>
            <p className="text-lg leading-relaxed">
              I believe in continuous learning and enjoy taking on challenges that push me 
              to grow as a developer. When I'm not coding, you can find me exploring the 
              latest tech trends, reading tech blogs, or working on personal projects.
            </p>
          </div>

          {/* Skills */}
          <div className="fade-in" style={{ animationDelay: "0.2s" }}>
            <h3 className="text-2xl font-bold mb-6 text-center">Skills & Technologies</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {skills.map((skill, index) => {
                const Icon = skill.icon;
                return (
                  <div
                    key={index}
                    className="flex flex-col items-center gap-3 p-4 rounded-lg bg-card border border-border hover:border-primary hover:shadow-[var(--card-shadow)] transition-all duration-300 hover:-translate-y-1"
                  >
                    <Icon className="text-primary" size={28} />
                    <span className="font-medium text-sm text-center">{skill.name}</span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Education */}
          <Reveal>
            <div className="pt-8">
              <h3 className="text-2xl font-bold mb-6 text-center">Education</h3>
              <div className="space-y-4 max-w-3xl mx-auto">
                <div className="p-4 rounded-lg bg-card border border-border shadow-sm hover:shadow-[var(--card-shadow-hover)] transition-all transform hover:-translate-y-1 duration-300">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div>
                      <div className="font-semibold text-lg">F.Sc. Pre-Engineering</div>
                      <div className="text-sm text-muted-foreground">2019 – 2021</div>
                      <div className="text-sm text-muted-foreground mt-1">Focused on Mathematics, Physics, and Computer Science foundations</div>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm">Mathematics</span>
                      <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm">Physics</span>
                    </div>
                  </div>
                </div>

                <div className="p-4 rounded-lg bg-card border border-border shadow-sm hover:shadow-[var(--card-shadow-hover)] transition-all transform hover:-translate-y-1 duration-300">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div>
                      <div className="font-semibold text-lg">BSCS</div>
                      <div className="text-sm text-muted-foreground">2021 – 2025</div>
                    </div>
                    <div className="text-sm text-muted-foreground">Bachelor of Science (Computer Science)</div>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Experience */}
          <Reveal>
            <div className="pt-8">
              <h3 className="text-2xl font-bold mb-6 text-center">Experience</h3>
              <div className="max-w-3xl mx-auto space-y-4">
                <div className="p-6 rounded-lg bg-card border border-border shadow-sm hover:shadow-[var(--card-shadow-hover)] transition-all transform hover:-translate-y-1 duration-300">
                  <div className="flex flex-col sm:flex-row gap-6 justify-between">
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <h4 className="font-semibold text-lg">Six-week internship at PARCO</h4>
                        <span className="px-2 py-1 rounded-full bg-primary/10 text-primary text-xs">2023</span>
                      </div>
                      <p className="text-muted-foreground">Practical exposure to industry workflows and systems.</p>
                      <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1 mt-2">
                        <li>Worked with SAP-MM Module for material management</li>
                        <li>Gained hands-on experience with enterprise systems</li>
                        <li>Collaborated with cross-functional teams</li>
                      </ul>
                    </div>
                    <div className="flex items-start gap-3">
                      <Dialog>
                        <DialogTrigger asChild>
                          <button className="px-4 py-2 rounded-md bg-primary text-primary-foreground hover:brightness-95 transition-all flex items-center gap-2">
                            <span>View Certificate</span>
                            <span className="text-xs opacity-80">↗</span>
                          </button>
                        </DialogTrigger>
                        <DialogContent className="max-w-3xl">
                          <img src="/certificate.jpg" alt="Certificate" className="w-full h-auto rounded-md" onError={(e) => { (e.currentTarget as HTMLImageElement).src = "https://via.placeholder.com/800x600?text=Certificate" }} />
                        </DialogContent>
                      </Dialog>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default About;
