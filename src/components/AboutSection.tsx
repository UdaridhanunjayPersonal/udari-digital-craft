import { GraduationCap, Target, Lightbulb } from "lucide-react";

const highlights = [
  { icon: GraduationCap, title: "B.Tech CSE", desc: "CMR Institute of Technology, Hyderabad (2023–2026)" },
  { icon: Target, title: "Career Focus", desc: "System Administration, Data Analytics & Machine Learning" },
  { icon: Lightbulb, title: "Passion", desc: "Networking, Troubleshooting & Data-Driven Applications" },
];

const AboutSection = () => (
  <section id="about" className="section-padding bg-card">
    <div className="container mx-auto max-w-5xl">
      <p className="section-subtitle text-center">About Me</p>
      <h2 className="section-title text-center mt-2 mb-6">
        Designing Solutions, Not Just Visuals
      </h2>
      <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed">
        I'm currently pursuing B.Tech in Computer Science and Engineering with a strong interest in
        networking, troubleshooting, and data-driven applications. I'm passionate about solving
        real-world problems using technology and aspire to grow in system administration, data
        analytics, and machine learning.
      </p>

      <div className="grid md:grid-cols-3 gap-6">
        {highlights.map((h) => (
          <div
            key={h.title}
            className="group p-6 rounded-2xl bg-background border border-border hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300"
          >
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition">
              <h.icon className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-heading font-semibold text-foreground mb-2">{h.title}</h3>
            <p className="text-sm text-muted-foreground">{h.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default AboutSection;
