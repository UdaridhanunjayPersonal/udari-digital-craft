import { useEffect, useRef } from "react";
import profileImg from "@/assets/profile.jpg";

const TypewriterText = ({ texts }: { texts: string[] }) => {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    let textIdx = 0;
    let charIdx = 0;
    let deleting = false;
    let timeout: ReturnType<typeof setTimeout>;

    const tick = () => {
      const current = texts[textIdx];
      if (ref.current) {
        ref.current.textContent = current.slice(0, charIdx);
      }

      if (!deleting) {
        charIdx++;
        if (charIdx > current.length) {
          deleting = true;
          timeout = setTimeout(tick, 1800);
          return;
        }
      } else {
        charIdx--;
        if (charIdx === 0) {
          deleting = false;
          textIdx = (textIdx + 1) % texts.length;
        }
      }
      timeout = setTimeout(tick, deleting ? 40 : 80);
    };

    tick();
    return () => clearTimeout(timeout);
  }, [texts]);

  return (
    <span className="text-primary">
      <span ref={ref} />
      <span className="animate-pulse">|</span>
    </span>
  );
};

const FloatingParticle = ({ className }: { className: string }) => (
  <div className={`absolute rounded-full pointer-events-none ${className}`} />
);

const HeroSection = () => (
  <section
    id="home"
    className="relative min-h-screen flex items-center overflow-hidden"
  >
    {/* Background gradient overlay */}
    <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-background to-background" />

    {/* Animated floating particles */}
    <FloatingParticle className="w-2 h-2 bg-primary/40 top-[20%] left-[10%] animate-float" />
    <FloatingParticle className="w-3 h-3 bg-accent/30 top-[30%] right-[15%] animate-float [animation-delay:1s]" />
    <FloatingParticle className="w-1.5 h-1.5 bg-primary/50 top-[60%] left-[25%] animate-float [animation-delay:2s]" />
    <FloatingParticle className="w-2 h-2 bg-accent/40 top-[70%] right-[30%] animate-float [animation-delay:0.5s]" />
    <FloatingParticle className="w-1 h-1 bg-primary/60 top-[45%] left-[60%] animate-float [animation-delay:1.5s]" />

    {/* Glowing orbs */}
    <div className="absolute top-1/4 -left-20 w-72 h-72 rounded-full bg-primary/15 blur-[100px] animate-pulse-slow" />
    <div className="absolute bottom-1/4 -right-20 w-80 h-80 rounded-full bg-accent/15 blur-[100px] animate-pulse-slow [animation-delay:2s]" />

    <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10 px-4 md:px-8 lg:px-16 pt-28 pb-20">
      {/* Text content */}
      <div className="space-y-6 animate-fade-in-up">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/5 backdrop-blur-sm">
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          <span className="text-sm font-medium text-primary">Available for opportunities</span>
        </div>

        <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold leading-tight text-foreground">
          Hello, I'm{" "}
          <span className="gradient-text">Udari Dhanunjay</span>
        </h1>

        <div className="text-xl md:text-2xl font-heading font-medium text-foreground/80 h-9">
          <TypewriterText
            texts={[
              "Software Developer",
              "CS Student",
              "Problem Solver",
              "Tech Enthusiast",
            ]}
          />
        </div>

        <p className="text-muted-foreground max-w-lg leading-relaxed text-base">
          I am a technology-driven individual passionate about problem-solving and building efficient
          systems. I enjoy working with modern web technologies and continuously learning new skills
          to grow as a developer.
        </p>

        {/* Stats row */}
        <div className="flex gap-8 py-2">
          {[
            { value: "3+", label: "Years Learning" },
            { value: "5+", label: "Projects" },
            { value: "4+", label: "Technologies" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl font-heading font-bold gradient-text">{stat.value}</div>
              <div className="text-xs text-muted-foreground mt-0.5">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="flex gap-4 flex-wrap pt-2">
          <a
            href="#projects"
            className="group relative px-7 py-3 rounded-full bg-primary text-primary-foreground font-semibold transition-all duration-300 shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40 hover:scale-105"
          >
            <span className="relative z-10">View Projects</span>
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </a>
          <a
            href="#contact"
            className="px-7 py-3 rounded-full border-2 border-primary/50 text-primary font-semibold hover:bg-primary/10 hover:border-primary transition-all duration-300 hover:scale-105 backdrop-blur-sm"
          >
            Contact Me
          </a>
        </div>
      </div>

      {/* Profile image with decorative elements */}
      <div className="flex justify-center animate-fade-in-up [animation-delay:0.2s]">
        <div className="relative">
          {/* Rotating ring */}
          <div className="absolute inset-[-16px] rounded-full border-2 border-dashed border-primary/20 animate-spin-slow" />
          {/* Gradient ring */}
          <div className="absolute inset-[-4px] rounded-full bg-gradient-to-tr from-primary via-accent to-primary p-[3px] animate-float">
            <div className="w-full h-full rounded-full bg-background" />
          </div>

          <div className="w-64 h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden relative z-10 shadow-2xl shadow-primary/20">
            <img
              src={profileImg}
              alt="Udari Dhanunjay"
              className="w-full h-full object-cover"
              width={512}
              height={512}
            />
          </div>

          {/* Floating badges */}
          <div className="absolute -top-4 -right-4 bg-card/90 backdrop-blur-md rounded-2xl px-4 py-2.5 shadow-lg border border-border/50 animate-float z-20">
            <span className="text-lg font-heading font-bold text-primary">🎓</span>
            <span className="text-xs text-muted-foreground ml-1.5">B.Tech CSE</span>
          </div>

          <div className="absolute -bottom-2 -left-6 bg-card/90 backdrop-blur-md rounded-2xl px-4 py-2.5 shadow-lg border border-border/50 animate-float [animation-delay:1.5s] z-20">
            <span className="text-lg">⚡</span>
            <span className="text-xs text-muted-foreground ml-1.5">React & Python</span>
          </div>

          <div className="absolute bottom-8 -right-8 bg-card/90 backdrop-blur-md rounded-2xl px-4 py-2.5 shadow-lg border border-border/50 animate-float [animation-delay:0.8s] z-20">
            <span className="text-lg">💻</span>
            <span className="text-xs text-muted-foreground ml-1.5">Full Stack</span>
          </div>
        </div>
      </div>
    </div>

    {/* Scroll indicator */}
    <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
      <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex justify-center pt-2">
        <div className="w-1.5 h-3 rounded-full bg-primary animate-pulse" />
      </div>
    </div>
  </section>
);

export default HeroSection;
