import { Github, Linkedin, Mail, Heart } from "lucide-react";
import { motion } from "framer-motion";

const socialLinks = [
  {
    label: "GitHub",
    href: "https://github.com/Danishhh111",
    icon: <Github size={22} />,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/danish-nawaz1269",
    icon: <Linkedin size={22} />,
  },
  {
    label: "Instagram",
    href: "https://instagram.com/danish.nawazzz",
    icon: (
      <svg
        width="22"
        height="22"
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
    ),
  },
  {
    label: "Email",
    href: "mailto:danishnawaz398@gmail.com",
    icon: <Mail size={22} />,
  },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden border-t border-white/5 bg-[#020412]/90 py-14">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_bottom,rgba(37,99,235,0.25),transparent_60%)] blur-3xl" />
      <div className="container mx-auto px-4">
        <motion.div
          className="flex flex-col items-center gap-7"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="flex flex-wrap items-center justify-center gap-4">
            {socialLinks.map((link, index) => (
              <motion.a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex h-12 w-12 items-center justify-center overflow-hidden rounded-full border border-white/10 bg-white/5 text-slate-200 transition-colors duration-300 hover:text-white"
                aria-label={link.label}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.6 }}
                transition={{ delay: index * 0.08, duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.96 }}
              >
                <span className="relative z-10">{link.icon}</span>
                <span className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <span className="absolute inset-0 bg-gradient-to-tr from-primary/40 via-sky-500/40 to-emerald-400/30" />
                </span>
              </motion.a>
            ))}
          </div>

          <motion.p
            className="flex flex-wrap items-center justify-center gap-2 text-sm text-slate-400"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.35, duration: 0.6 }}
          >
            © {currentYear} Danish Nawaz — Built with
            <Heart size={14} className="fill-rose-500 text-rose-500" />
            using React & TypeScript
          </motion.p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
