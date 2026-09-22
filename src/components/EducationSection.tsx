import { Award, GraduationCap, Presentation } from "lucide-react";

const EducationSection = () => (
  <section id="education" className="bg-card/40 py-24">
    <div className="container">
      <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-primary">Journey</p>
      <h2 className="mb-12 font-heading text-3xl font-bold sm:text-4xl">Education & Achievements</h2>

      <div className="grid gap-6 lg:grid-cols-3">
        <div className="glass-card rounded-xl p-6 transition-all hover:-translate-y-1 hover:border-primary/40">
          <div className="mb-4 flex items-center gap-3">
            <div className="rounded-lg bg-primary/10 p-2 text-primary">
              <GraduationCap size={22} />
            </div>
            <h3 className="font-heading text-lg font-semibold">Education</h3>
          </div>
          <p className="font-semibold">B.Tech in Computer Science & Engineering</p>
          <p className="mt-1 text-sm text-muted-foreground">CMR Institute of Technology, Hyderabad</p>
          <p className="mt-2 inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
            2023 – 2026
          </p>
        </div>

        <div className="glass-card rounded-xl p-6 transition-all hover:-translate-y-1 hover:border-primary/40">
          <div className="mb-4 flex items-center gap-3">
            <div className="rounded-lg bg-primary/10 p-2 text-primary">
              <Award size={22} />
            </div>
            <h3 className="font-heading text-lg font-semibold">Certification</h3>
          </div>
          <p className="font-semibold">JavaScript (Basic)</p>
          <p className="mt-1 text-sm text-muted-foreground">HackerRank</p>
          <p className="mt-2 inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
            31 Dec 2023
          </p>
        </div>

        <div className="glass-card rounded-xl p-6 transition-all hover:-translate-y-1 hover:border-primary/40">
          <div className="mb-4 flex items-center gap-3">
            <div className="rounded-lg bg-primary/10 p-2 text-primary">
              <Presentation size={22} />
            </div>
            <h3 className="font-heading text-lg font-semibold">Workshop</h3>
          </div>
          <p className="font-semibold">Research & Development Cell</p>
          <p className="mt-1 text-sm text-muted-foreground">CMR Institute of Technology</p>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
            Attended a seminar on "Creating a Research Paper" — learned research writing,
            literature review, data analysis, citation styles, plagiarism avoidance, and the
            publication process.
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default EducationSection;
