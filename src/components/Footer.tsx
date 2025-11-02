import { Github, Linkedin, Mail, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 px-4 bg-muted/30 border-t border-border">
      <div className="container mx-auto">
        <div className="flex flex-col items-center gap-6">
          {/* Social Links */}
          <div className="flex items-center gap-6">
            <a
              href="https://github.com/Danishhh111"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground neon-hover github transition-colors"
              aria-label="GitHub"
            >
              <Github size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/danish-nawaz1269"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground neon-hover linkedin transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="https://instagram.com/danish.nawazzz"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground neon-hover instagram transition-colors"
              aria-label="Instagram"
            >
              <svg 
                width="24" 
                height="24" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              >
                <rect x="2" y="2" width="20" height="20" rx="5" />
                <path d="M12 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z" />
                <circle cx="17.5" cy="6.5" r="1.5" />
              </svg>
            </a>
            <a
              href="mailto:danishnawaz398@gmail.com"
              className="text-muted-foreground neon-hover transition-colors"
              aria-label="Email"
            >
              <Mail size={24} />
            </a>
          </div>

          {/* Copyright */}
          <p className="text-muted-foreground text-center flex items-center gap-2 flex-wrap justify-center">
            © {currentYear} Danish Nawaz — Built with
            <Heart size={16} className="text-red-500 fill-red-500" />
            using React & TypeScript
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
