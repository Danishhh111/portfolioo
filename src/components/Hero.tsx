import { Download, ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

const Hero = () => {
  const [displayText, setDisplayText] = useState("");
  const fullText = "Hi, I'm Danish Nawaz 👋";
  
  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setDisplayText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 100);
    
    return () => clearInterval(timer);
  }, []);

  const scrollToProjects = () => {
    const element = document.getElementById("projects");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-20 px-4"
    >
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6 slide-up">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground min-h-[4rem] md:min-h-[5rem]">
              {displayText}
              <span className="animate-pulse">|</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground">
              A Computer Science student passionate about coding, web development, and AI.
            </p>
            <p className="text-lg text-muted-foreground">
              Building innovative solutions and exploring the endless possibilities of technology.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Button onClick={scrollToProjects} size="lg" className="gap-2">
                See My Projects
                <ArrowDown size={20} />
              </Button>
              <Button variant="outline" size="lg" className="gap-2">
                <Download size={20} />
                Download CV
              </Button>
            </div>
          </div>

          {/* Avatar/Image */}
          <div className="flex justify-center fade-in">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent rounded-full blur-2xl opacity-20 animate-pulse"></div>
              <div className="relative w-64 h-64 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-primary/20 shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=500&fit=crop"
                  alt="Danish Nawaz"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
