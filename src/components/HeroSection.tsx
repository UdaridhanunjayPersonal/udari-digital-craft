import profileImg from "@/assets/profile.jpg";

const HeroSection = () => (
  <section
    id="home"
    className="min-h-screen flex items-center section-padding pt-28 relative overflow-hidden"
  >
    {/* Decorative blobs */}
    <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-primary/20 blur-3xl" />
    <div className="absolute -bottom-32 -left-32 w-80 h-80 rounded-full bg-accent/20 blur-3xl" />

    <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10">
      <div className="space-y-6 animate-fade-in-up">
        <p className="section-subtitle">Hello, I'm</p>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold leading-tight text-foreground">
          Udari Dhanunjay
        </h1>
        <p className="text-lg text-muted-foreground">
          Aspiring Software Developer | Computer Science Student
        </p>
        <p className="text-muted-foreground max-w-lg leading-relaxed">
          I am a technology-driven individual passionate about problem-solving and building efficient
          systems. I enjoy working with modern web technologies and continuously learning new skills
          to grow as a developer.
        </p>
        <div className="flex gap-4 flex-wrap">
          <a
            href="#projects"
            className="px-7 py-3 rounded-full bg-primary text-primary-foreground font-semibold hover:opacity-90 transition shadow-lg shadow-primary/30"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="px-7 py-3 rounded-full border-2 border-primary text-primary font-semibold hover:bg-primary hover:text-primary-foreground transition"
          >
            Contact Me
          </a>
        </div>
      </div>

      <div className="flex justify-center animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
        <div className="relative">
          <div className="w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-primary shadow-2xl shadow-primary/20 animate-float">
            <img
              src={profileImg}
              alt="Udari Dhanunjay"
              className="w-full h-full object-cover"
              width={512}
              height={512}
            />
          </div>
          <div className="absolute -bottom-4 -right-4 bg-card rounded-2xl px-5 py-3 shadow-lg border border-border">
            <span className="text-2xl font-heading font-bold text-primary">3+</span>
            <span className="text-sm text-muted-foreground ml-1">Years Learning</span>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default HeroSection;
