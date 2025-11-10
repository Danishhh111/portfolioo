import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import ThemeToggle from "./ThemeToggle";
import { AnimatePresence, motion, useScroll, useSpring } from "framer-motion";

const links = [
  { label: "Home", id: "home" },
  { label: "Projects", id: "projects" },
  { label: "About", id: "about" },
  { label: "Contact", id: "contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 28,
    restDelta: 0.001,
  });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <>
      <motion.div
        className="fixed left-0 top-0 z-[60] h-[2px] w-full origin-left bg-gradient-to-r from-sky-500 via-indigo-400 to-emerald-400"
        style={{ scaleX: progress }}
      />
      <motion.nav
        initial={{ opacity: 0, y: -18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-background/80 backdrop-blur-xl border-b border-border/40 shadow-[0_10px_40px_rgba(15,23,42,0.25)]"
            : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4 py-5">
          <div className="flex items-center justify-between">
            <button
              onClick={() => scrollToSection("home")}
              className="group relative text-xl font-semibold tracking-tight text-foreground transition-colors duration-300 hover:text-primary"
            >
              <span className="relative z-10">Danish Nawaz</span>
              <span className="pointer-events-none absolute inset-x-0 -bottom-1 h-[3px] rounded-full bg-gradient-to-r from-primary/60 via-cyan-400/50 to-emerald-400/50 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </button>

            <div className="hidden md:flex items-center gap-8">
              {links.map((link) => (
                <motion.button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="group relative text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground transition-colors duration-300 hover:text-primary"
                  whileHover={{ y: -2 }}
                >
                  {link.label}
                  <span className="pointer-events-none absolute inset-x-0 -bottom-1 h-[2px] origin-left scale-x-0 bg-gradient-to-r from-primary via-sky-400 to-emerald-400 transition-transform duration-300 group-hover:scale-x-100" />
                </motion.button>
              ))}
              <motion.div layout>
                <ThemeToggle />
              </motion.div>
            </div>

            <div className="md:hidden flex items-center gap-4">
              <ThemeToggle />
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Toggle menu"
                className="rounded-full border border-border/60 bg-background/40 backdrop-blur"
              >
                <motion.div
                  initial={false}
                  animate={{ rotate: isOpen ? 180 : 0 }}
                  transition={{ duration: 0.25, ease: "easeInOut" }}
                >
                  {isOpen ? <X size={22} /> : <Menu size={22} />}
                </motion.div>
              </Button>
            </div>
          </div>

          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="md:hidden mt-6 rounded-3xl border border-border/50 bg-background/80 p-6 backdrop-blur-xl shadow-[0_30px_60px_rgba(15,23,42,0.4)]"
              >
                <div className="flex flex-col gap-4">
                  {links.map((link) => (
                    <button
                      key={link.id}
                      onClick={() => scrollToSection(link.id)}
                      className="rounded-2xl bg-gradient-to-r from-background/70 to-background/30 p-4 text-left text-base font-medium text-muted-foreground transition-all duration-200 hover:text-primary hover:shadow-[0_15px_35px_rgba(59,130,246,0.25)]"
                    >
                      {link.label}
                    </button>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.nav>
    </>
  );
};

export default Navbar;
