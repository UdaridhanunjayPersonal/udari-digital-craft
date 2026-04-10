import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Password Generator",
    tech: ["HTML", "CSS", "JavaScript"],
    description:
      "A web-based tool that generates strong and random passwords to improve user security.",
    features: [
      "Customizable password length",
      "Uppercase, lowercase, numbers & special characters",
      "User-friendly interface",
      "Secure password generation",
    ],
    demo: "#",
    code: "#",
  },
];

const ProjectsSection = () => (
  <section id="projects" className="section-padding bg-card">
    <div className="container mx-auto max-w-5xl">
      <p className="section-subtitle text-center">Portfolio</p>
      <h2 className="section-title text-center mt-2 mb-12">Featured Projects</h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((p) => (
          <div
            key={p.title}
            className="group rounded-2xl bg-background border border-border overflow-hidden hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10 transition-all duration-300"
          >
            <div className="h-48 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
              <span className="text-5xl">🔐</span>
            </div>
            <div className="p-6 space-y-4">
              <h3 className="font-heading font-bold text-lg text-foreground">{p.title}</h3>
              <div className="flex flex-wrap gap-2">
                {p.tech.map((t) => (
                  <span
                    key={t}
                    className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary font-medium"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <p className="text-sm text-muted-foreground">{p.description}</p>
              <ul className="text-sm text-muted-foreground space-y-1">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-2">
                    <span className="text-primary mt-0.5">•</span> {f}
                  </li>
                ))}
              </ul>
              <div className="flex gap-3 pt-2">
                <a
                  href={p.demo}
                  className="flex items-center gap-1.5 text-sm font-medium text-primary hover:underline"
                >
                  <ExternalLink size={14} /> Live Demo
                </a>
                <a
                  href={p.code}
                  className="flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-foreground"
                >
                  <Github size={14} /> View Code
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ProjectsSection;
