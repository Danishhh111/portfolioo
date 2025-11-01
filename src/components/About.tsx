import { Code2, Database, Laptop, Sparkles } from "lucide-react";

const skills = [
  { name: "HTML", icon: Code2 },
  { name: "CSS", icon: Code2 },
  { name: "JavaScript", icon: Code2 },
  { name: "React", icon: Laptop },
  { name: "Python", icon: Code2 },
  { name: "C++", icon: Code2 },
  { name: "SQL", icon: Database },
  { name: "AI/ML", icon: Sparkles },
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
                    className="flex flex-col items-center gap-3 p-6 rounded-lg bg-card border border-border hover:border-primary hover:shadow-[var(--card-shadow)] transition-all duration-300 hover:-translate-y-1"
                  >
                    <Icon className="text-primary" size={32} />
                    <span className="font-medium">{skill.name}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
