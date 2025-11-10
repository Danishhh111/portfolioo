import { useState } from "react";
import { Send, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { motion } from "framer-motion";
import SectionTitle from "@/components/SectionTitle";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Missing Information",
        description: "Please fill in all fields.",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Message Sent! ✓",
      description: "Thank you for reaching out. I'll get back to you soon!",
    });

    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="relative py-28 px-4 sm:px-6">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,rgba(20,184,166,0.26),transparent_60%)] blur-3xl" />
      <motion.div
        className="mx-auto max-w-3xl rounded-[36px] border border-white/10 bg-white/8 p-[1px] shadow-[0_45px_140px_rgba(15,23,42,0.45)] backdrop-blur-3xl"
        initial={{ opacity: 0, y: 36 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="rounded-[34px] border border-white/10 bg-[#040615]/80 p-10 sm:p-14">
          <div className="text-center">
            <SectionTitle
              title="Get In Touch"
              subtitle="Let's connect! I'm always open to discussing new projects, creative ideas, or opportunities."
              accent="cyan"
            />
            <div className="mt-4 flex items-center justify-center gap-2 text-sm font-medium text-emerald-300">
              <Mail size={20} />
              <a
                href="mailto:danishnawaz398@gmail.com"
                className="group relative inline-flex items-center gap-2 text-base text-emerald-200 transition-colors duration-300 hover:text-white"
              >
                danishnawaz398@gmail.com
                <span className="absolute bottom-0 left-0 h-[2px] w-full origin-left scale-x-0 bg-gradient-to-r from-emerald-300/80 via-cyan-300/80 to-sky-300/80 transition-transform duration-300 group-hover:scale-x-100" />
              </a>
            </div>
          </div>

          <motion.form
            onSubmit={handleSubmit}
            className="mt-12 space-y-6"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ delay: 0.08, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="grid gap-6 sm:grid-cols-2">
              <FormField
                id="name"
                label="Name"
                value={formData.name}
                onChange={(value) => setFormData({ ...formData, name: value })}
              />
              <FormField
                id="email"
                type="email"
                label="Email"
                value={formData.email}
                onChange={(value) => setFormData({ ...formData, email: value })}
              />
            </div>
            <FormTextArea
              id="message"
              label="Message"
              value={formData.message}
              onChange={(value) => setFormData({ ...formData, message: value })}
            />
            <Button
              type="submit"
              size="lg"
              className="group relative w-full overflow-hidden rounded-full bg-gradient-to-r from-emerald-400 via-sky-400 to-primary px-8 py-6 text-sm font-semibold uppercase tracking-[0.35em]"
            >
              <span className="relative z-10 flex items-center justify-center gap-3">
                Send Message
                <Send size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
              </span>
              <span className="absolute inset-0 bg-white/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </Button>
          </motion.form>
        </div>
      </motion.div>
    </section>
  );
};

type FormFieldProps = {
  id: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
  type?: string;
};

const FormField = ({ id, label, value, onChange, type = "text" }: FormFieldProps) => (
  <label htmlFor={id} className="group block text-left">
    <span className="text-xs font-semibold uppercase tracking-[0.35em] text-slate-400">{label}</span>
    <div className="relative mt-3 overflow-hidden rounded-2xl border border-white/10 bg-white/5 transition-all duration-300 group-hover:border-emerald-400/40">
      <Input
        id={id}
        type={type}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder={label}
        className="h-14 w-full border-none bg-transparent text-base text-white placeholder:text-slate-500 focus-visible:ring-0 focus-visible:ring-offset-0"
      />
      <span className="pointer-events-none absolute inset-y-0 right-4 inline-flex items-center text-slate-500 group-hover:text-emerald-300">↗</span>
    </div>
  </label>
);

type FormTextAreaProps = {
  id: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
};

const FormTextArea = ({ id, label, value, onChange }: FormTextAreaProps) => (
  <label htmlFor={id} className="group block text-left">
    <span className="text-xs font-semibold uppercase tracking-[0.35em] text-slate-400">{label}</span>
    <div className="relative mt-3 overflow-hidden rounded-2xl border border-white/10 bg-white/5 transition-all duration-300 group-hover:border-emerald-400/40">
      <Textarea
        id={id}
        rows={6}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder="Your message..."
        className="w-full border-none bg-transparent text-base text-white placeholder:text-slate-500 focus-visible:ring-0 focus-visible:ring-offset-0"
      />
      <span className="pointer-events-none absolute bottom-4 right-4 inline-flex items-center text-slate-500 group-hover:text-emerald-300">✶</span>
    </div>
  </label>
);

export default Contact;
