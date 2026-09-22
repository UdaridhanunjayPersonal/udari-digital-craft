import { useEffect, useState } from "react";
import { ArrowRight, ChevronDown, Code2, GraduationCap, Mail, Zap } from "lucide-react";

const ROLES = ["ServiceNow Developer", "Computer Science Student", "Problem Solver", "Tech Enthusiast"];

const useTypewriter = (words: string[]) => {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = words[index % words.length];
    const speed = deleting ? 50 : 100;

    const t = setTimeout(() => {
      if (!deleting) {
        const next = word.slice(0, text.length + 1);
        setText(next);
        if (next === word) setTimeout(() => setDeleting(true), 1600);
      } else {
        const next = word.slice(0, text.length - 1);
        setText(next);
        if (next === "") {
          setDeleting(false);
          setIndex((i) => (i + 1) % words.length);
        }
      }
    }, speed);
    return () => clearTimeout(t);
  }, [text, deleting, index, words]);

  return text;
};

const HeroSection = () => {
  const typed = useTypewriter(ROLES);

  return (
    <section id="home" className="relative flex min-h-screen items-center overflow-hidden">
      {/* Subtle gradient glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-32 left-1/4 h-96 w-96 rounded-full bg-primary/15 blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 h-96 w-96 rounded-full bg-accent/15 blur-[120px]" />
ec      </div>

      <div className="container grid items-center gap-12 py-24 md:grid-cols-2">
        {/* Left */}
        <div className="animate-fade-in-up space-y-6">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-medium text-primary">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
            </span>
            Open to opportunities
          </span>

          <h1 className="font-heading text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
            Hi, I'm <span className="text-gradient">Udari Dhanunjay</span>
          </h1>

          <p className="font-heading text-xl text-muted-foreground sm:text-2xl">
            <span className="text-foreground">{typed}</span>
            <span className="animate-pulse text-primary">|</span>
          </p>

          <p className="max-w-xl leading-relaxed text-muted-foreground">
            I am a technology-driven individual passionate about problem-solving and building
            efficient systems. I enjoy working with modern web technologies and continuously
            learning new skills to grow as a developer.
          </p>

          <div className="flex flex-wrap gap-4 pt-2">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 font-semibold text-primary-foreground shadow-lg shadow-primary/25 transition-transform hover:scale-105"
            >
              View Projects <ArrowRight size={18} />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-lg border border-border px-6 py-3 font-semibold transition-colors hover:border-primary hover:text-primary"
            >
              <Mail size={18} /> Contact Me
            </a>
          </div>

          <div className="flex gap-10 pt-6">
            {[
              { value: "3+", label: "Years Learning" },
              { value: "5+", label: "Projects" },
              { value: "4+", label: "Technologies" },
            ].map((s) => (
              <div key={s.label}>
                <p className="font-heading text-2xl font-bold text-primary sm:text-3xl">{s.value}</p>
                <p className="text-xs text-muted-foreground sm:text-sm">{s.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right — circular profile */}
        <div className="animate-fade-in-up relative mx-auto w-fit" style={{ animationDelay: "0.2s" }}>
          <div className="absolute -inset-6 rounded-full bg-gradient-to-tr from-primary via-amber-300 to-accent opacity-30 blur-2xl" />
          <div className="animate-spin-slow absolute -inset-3 rounded-full border-2 border-dashed border-primary/40" />
          <div className="relative flex h-64 w-64 items-center justify-center overflow-hidden rounded-full border-4 border-primary/40 bg-gradient-to-br from-secondary to-card shadow-2xl sm:h-80 sm:w-80">
            <span className="select-none font-heading text-6xl font-bold text-gradient sm:text-7xl">
              UD
            </span>
          </div>

          <div className="animate-float absolute -left-6 top-10 glass-card flex items-center gap-2 rounded-xl px-3 py-2 text-xs font-medium shadow-lg">
            <GraduationCap className="text-primary" size={16} /> B.Tech CSE
          </div>
          <div className="animate-float-delayed absolute -right-8 top-1/3 glass-card flex items-center gap-2 rounded-xl px-3 py-2 text-xs font-medium shadow-lg">
            <Zap className="text-primary" size={16} /> ServiceNow
          </div>
          <div className="animate-float absolute -bottom-2 left-1/4 glass-card flex items-center gap-2 rounded-xl px-3 py-2 text-xs font-medium shadow-lg">
            <Code2 className="text-primary" size={16} /> React & Python
          </div>
        </div>
      </div>

      <a
        href="#about"
        aria-label="Scroll to About"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground transition-colors hover:text-primary"
      >
        <ChevronDown size={28} className="animate-bounce" />
      </a>
    </section>
  );
};

export default HeroSection;
