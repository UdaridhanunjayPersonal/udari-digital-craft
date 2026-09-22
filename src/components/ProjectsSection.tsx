import { ExternalLink, Github, ShieldCheck } from "lucide-react";

const ProjectsSection = () => (
  <section id="projects" className="py-24">
    <div className="container">
      <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-primary">Projects</p>
      <h2 className="mb-12 font-heading text-3xl font-bold sm:text-4xl">Featured Work</h2>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <article className="glass-card group overflow-hidden rounded-xl transition-all hover:-translate-y-1 hover:border-primary/40">
          <div className="flex h-44 items-center justify-center bg-gradient-to-br from-secondary via-card to-background">
            <ShieldCheck className="text-primary transition-transform duration-300 group-hover:scale-110" size={56} />
          </div>
          <div className="space-y-4 p-6">
            <h3 className="font-heading text-xl font-semibold">Password Generator</h3>
            <div className="flex flex-wrap gap-2">
              {["HTML", "CSS", "JavaScript"].map((t) => (
                <span key={t} className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                  {t}
                </span>
              ))}
            </div>
            <p className="text-sm leading-relaxed text-muted-foreground">
              A web-based tool that generates strong and random passwords to improve user security.
            </p>
            <ul className="space-y-1.5 text-sm text-muted-foreground">
              {[
                "Customizable password length",
                "Includes uppercase, lowercase, numbers & special characters",
                "User-friendly interface",
                "Secure password generation",
              ].map((f) => (
                <li key={f} className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  {f}
                </li>
              ))}
            </ul>
            <div className="flex gap-3 pt-2">
              <a
                href="#"
                className="inline-flex items-center gap-1.5 rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition-transform hover:scale-105"
              >
                <ExternalLink size={15} /> Live Demo
              </a>
              <a
                href="https://github.com/udaridhanunjayPersonal"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 rounded-lg border border-border px-4 py-2 text-sm font-semibold transition-colors hover:border-primary hover:text-primary"
              >
                <Github size={15} /> View Code
              </a>
            </div>
          </div>
        </article>
      </div>
    </div>
  </section>
);

export default ProjectsSection;
