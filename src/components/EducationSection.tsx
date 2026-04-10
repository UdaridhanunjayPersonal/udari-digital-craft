import { GraduationCap, Award, BookOpen } from "lucide-react";

const EducationSection = () => (
  <section id="education" className="section-padding">
    <div className="container mx-auto max-w-5xl">
      <p className="section-subtitle text-center">Background</p>
      <h2 className="section-title text-center mt-2 mb-12">Education & Certifications</h2>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Education */}
        <div className="p-6 rounded-2xl bg-card border border-border">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
              <GraduationCap className="w-5 h-5 text-primary" />
            </div>
            <h3 className="font-heading font-semibold text-foreground">Education</h3>
          </div>
          <div className="border-l-2 border-primary/30 pl-5 space-y-2">
            <h4 className="font-semibold text-foreground">B.Tech in Computer Science & Engineering</h4>
            <p className="text-sm text-muted-foreground">CMR Institute of Technology, Hyderabad</p>
            <p className="text-xs text-primary font-medium">2023 – 2026</p>
          </div>
        </div>

        {/* Certifications */}
        <div className="p-6 rounded-2xl bg-card border border-border">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
              <Award className="w-5 h-5 text-primary" />
            </div>
            <h3 className="font-heading font-semibold text-foreground">Certifications</h3>
          </div>
          <div className="border-l-2 border-primary/30 pl-5 space-y-2">
            <h4 className="font-semibold text-foreground">JavaScript (Basic)</h4>
            <p className="text-sm text-muted-foreground">HackerRank</p>
            <p className="text-xs text-primary font-medium">December 31, 2023</p>
          </div>
        </div>

        {/* Experience / Workshop */}
        <div className="md:col-span-2 p-6 rounded-2xl bg-card border border-border">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
              <BookOpen className="w-5 h-5 text-primary" />
            </div>
            <h3 className="font-heading font-semibold text-foreground">Experience & Workshops</h3>
          </div>
          <div className="border-l-2 border-primary/30 pl-5 space-y-2">
            <h4 className="font-semibold text-foreground">Research and Development Cell</h4>
            <p className="text-sm text-muted-foreground">CMR Institute of Technology</p>
            <p className="text-sm text-muted-foreground mt-2">
              Attended a seminar on "Creating a Research Paper" — learned research writing,
              literature review, data analysis, citation styles, plagiarism avoidance, and
              publication process.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default EducationSection;
