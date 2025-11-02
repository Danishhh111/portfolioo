import { Download, ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

const Hero: React.FC = () => {
  const [displayText, setDisplayText] = useState("");
  const fullText = "Hi, I'm Danish Nawaz 👋";
  const [subtitleIndex, setSubtitleIndex] = useState(0);
  const subtitles = [
    "A Computer Science student passionate about coding.",
    "Building innovative solutions with modern tech.",
    "Exploring AI, web development, and more."
  ];
  
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

  useEffect(() => {
    const interval = setInterval(() => {
      setSubtitleIndex((current) => (current + 1) % subtitles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [subtitles.length]);

  const scrollToProjects = () => {
    const element = document.getElementById("projects");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-20 px-4 background-animate bg-gradient-to-r from-background via-muted to-background"
    >
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="slide-up">
              <h1 className="text-4xl md:text-6xl font-bold min-h-[4rem] md:min-h-[5rem]">
                {displayText}
                <span className="animate-pulse">|</span>
              </h1>
              <div className="h-16">
                <p 
                  key={subtitleIndex} 
                  className="text-xl md:text-2xl text-muted-foreground animate-fadeIn"
                >
                  {subtitles[subtitleIndex]}
                </p>
              </div>
              <p className="text-lg text-muted-foreground mt-4">
                Building innovative solutions and exploring the endless possibilities of technology.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 pt-4">
              <Button 
                onClick={scrollToProjects} 
                size="lg" 
                className="gap-2 bg-primary hover:bg-primary/90"
              >
                See My Projects
                <ArrowDown size={20} />
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="gap-2 border-primary/20 hover:bg-primary/10"
              >
                <Download size={20} />
                Download CV
              </Button>
            </div>

            <div className="mt-4 flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <div className="text-sm text-muted-foreground space-y-2">
                <a 
                  href="tel:03019681065" 
                  className="flex items-center gap-2 hover:text-primary transition-colors"
                >
                  <span className="w-5">📞</span>
                  <span>0301-9681065</span>
                </a>
                <a 
                  href="mailto:danishnawaz398@gmail.com" 
                  className="flex items-center gap-2 hover:text-primary transition-colors"
                >
                  <span className="w-5">📧</span>
                  <span>danishnawaz398@gmail.com</span>
                </a>
              </div>
            </div>
          </div>

          <div className="flex justify-center fade-in">
            <div className="relative group">
              <div 
                className="absolute inset-0 bg-gradient-to-r from-primary to-accent rounded-full blur-2xl opacity-20 group-hover:opacity-40 transition-opacity"
              />
              <div className="relative w-56 h-56 md:w-80 md:h-80 profile-border">
                <div className="absolute inset-2 rounded-full overflow-hidden profile-hover bg-card">
                  <img
                    src="/profile.jpg"
                    alt="Danish Nawaz"
                    onError={(e) => {
                      const target = e.currentTarget as HTMLImageElement;
                      target.src = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=500&fit=crop";
                    }}
                    className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;