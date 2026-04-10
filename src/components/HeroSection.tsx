import { useEffect, useRef } from "react";
import profileImg from "@/assets/profile.jpg";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";

const roles = ["Software Developer", "CS Student", "Problem Solver", "Tech Enthusiast"];

const TypewriterText = () => {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    let textIdx = 0;
    let charIdx = 0;
    let deleting = false;
    let timeout: ReturnType<typeof setTimeout>;

    const tick = () => {
      const current = roles[textIdx];
      if (ref.current) ref.current.textContent = current.slice(0, charIdx);

      if (!deleting) {
        charIdx++;
        if (charIdx > current.length) {
          deleting = true;
          timeout = setTimeout(tick, 2000);
          return;
        }
      } else {
        charIdx--;
        if (charIdx === 0) {
          deleting = false;
          textIdx = (textIdx + 1) % roles.length;
        }
      }
      timeout = setTimeout(tick, deleting ? 35 : 70);
    };

    tick();
    return () => clearTimeout(timeout);
  }, []);

  return (
    <span className="text-primary">
      <span ref={ref} />
      <span className="animate-blink">|</span>
    </span>
  );
};

const HeroSection = () => (
  <section
    id="home"
    className="relative min-h-screen flex items-center overflow-hidden bg-background"
  >
    {/* Geometric grid background */}
    <div className="absolute inset-0 hero-grid opacity-[0.03]" />

    {/* Gradient orbs */}
    <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] rounded-full bg-primary/10 blur-[120px] animate-pulse-slow" />
    <div className="absolute bottom-[-10%] left-[-5%] w-[400px] h-[400px] rounded-full bg-accent/10 blur-[120px] animate-pulse-slow [animation-delay:2s]" />

    {/* Accent line */}
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-b from-transparent via-primary/40 to-transparent" />

    <div className="container mx-auto relative z-10 px-6 md:px-12 lg:px-20 pt-24 pb-16">
      <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-center">
        {/* Left — text (3 cols) */}
        <div className="lg:col-span-3 space-y-7 animate-fade-in-up">
          {/* Status badge */}
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-card border border-border shadow-sm">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500" />
            </span>
            <span className="text-sm font-medium text-muted-foreground">Open to opportunities</span>
          </div>

          <div>
            <p className="text-base md:text-lg text-muted-foreground mb-2">Hello, I'm</p>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading font-extrabold leading-[1.1] tracking-tight text-foreground">
              Udari
              <br />
              <span className="gradient-text">Dhanunjay</span>
            </h1>
          </div>

          <div className="text-xl md:text-2xl font-heading font-medium text-foreground/70 min-h-[2rem]">
            <TypewriterText />
          </div>

          <p className="text-muted-foreground max-w-xl leading-relaxed">
            I am a technology-driven individual passionate about problem-solving and building
            efficient systems. I enjoy working with modern web technologies and continuously
            learning new skills to grow as a developer.
          </p>

          {/* CTA buttons */}
          <div className="flex items-center gap-4 flex-wrap pt-1">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-primary text-primary-foreground font-semibold transition-all duration-300 shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/35 hover:-translate-y-0.5 active:translate-y-0"
            >
              View Projects
              <ArrowDown size={16} className="group-hover:translate-y-0.5 transition-transform" />
            </a>
            <a
              href="#contact"
              className="px-7 py-3.5 rounded-xl border-2 border-border text-foreground font-semibold hover:border-primary hover:text-primary transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0"
            >
              Contact Me
            </a>
          </div>

          {/* Social links */}
          <div className="flex items-center gap-4 pt-2">
            {[
              { icon: Github, href: "#", label: "GitHub" },
              { icon: Linkedin, href: "#", label: "LinkedIn" },
              { icon: Mail, href: "mailto:udari.dhanunjay@email.com", label: "Email" },
            ].map((s) => (
              <a
                key={s.label}
                href={s.href}
                aria-label={s.label}
                className="w-10 h-10 rounded-lg bg-card border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-all duration-200 hover:-translate-y-0.5"
              >
                <s.icon size={18} />
              </a>
            ))}
          </div>
        </div>

        {/* Right — profile card (2 cols) */}
        <div className="lg:col-span-2 flex justify-center animate-fade-in-up [animation-delay:0.15s]">
          <div className="relative">
            {/* Rotating dashed ring */}
            <div className="absolute inset-[-20px] rounded-full border border-dashed border-primary/15 animate-spin-slow" />

            {/* Profile container */}
            <div className="relative group">
              {/* Gradient border */}
              <div className="absolute inset-[-3px] rounded-3xl bg-gradient-to-br from-primary via-accent to-primary opacity-60 group-hover:opacity-100 transition-opacity duration-500 blur-[1px]" />

              <div className="relative w-64 h-72 md:w-72 md:h-80 lg:w-80 lg:h-[22rem] rounded-3xl overflow-hidden bg-card shadow-2xl">
                <img
                  src={profileImg}
                  alt="Udari Dhanunjay"
                  className="w-full h-full object-cover object-top"
                  width={512}
                  height={512}
                />
                {/* Overlay gradient at bottom */}
                <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-card via-card/60 to-transparent" />

                {/* Name bar at bottom */}
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex items-center gap-3">
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-semibold text-foreground truncate">Udari Dhanunjay</p>
                      <p className="text-xs text-muted-foreground">B.Tech CSE • CMRIT</p>
                    </div>
                    <div className="flex gap-1">
                      {["Python", "React"].map((t) => (
                        <span key={t} className="text-[10px] px-2 py-0.5 rounded-full bg-primary/10 text-primary font-medium">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Stats floating cards */}
            <div className="absolute -top-6 -left-6 bg-card/95 backdrop-blur-md rounded-xl px-4 py-3 shadow-lg border border-border animate-float z-20">
              <div className="text-xl font-heading font-bold gradient-text">3+</div>
              <div className="text-[10px] text-muted-foreground font-medium">Years Learning</div>
            </div>

            <div className="absolute -bottom-4 -right-4 bg-card/95 backdrop-blur-md rounded-xl px-4 py-3 shadow-lg border border-border animate-float [animation-delay:1s] z-20">
              <div className="text-xl font-heading font-bold gradient-text">5+</div>
              <div className="text-[10px] text-muted-foreground font-medium">Projects Built</div>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Scroll indicator */}
    <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10">
      <a href="#about" className="flex flex-col items-center gap-2 text-muted-foreground/50 hover:text-primary transition-colors">
        <span className="text-[10px] tracking-widest uppercase">Scroll</span>
        <div className="w-5 h-8 rounded-full border border-current flex justify-center pt-1.5">
          <div className="w-1 h-2 rounded-full bg-current animate-bounce" />
        </div>
      </a>
    </div>
  </section>
);

export default HeroSection;
