import { Code2, Globe, Wrench, Sparkles } from "lucide-react";

const categories = [
  {
    icon: Code2,
    title: "Programming Languages",
    skills: [
      { name: "Python", level: 80 },
      { name: "Java", level: 70 },
    ],
  },
  {
    icon: Globe,
    title: "Web Technologies",
    skills: [
      { name: "React.js", level: 75 },
      { name: "Node.js", level: 65 },
      { name: "Tailwind CSS", level: 85 },
      { name: "Bootstrap", level: 80 },
    ],
  },
  {
    icon: Wrench,
    title: "Developer Tools",
    skills: [
      { name: "Git", level: 80 },
      { name: "GitHub", level: 85 },
      { name: "VS Code", level: 90 },
    ],
  },
  {
    icon: Sparkles,
    title: "Other Skills",
    skills: [
      { name: "Prompt Engineering", level: 75 },
      { name: "Problem Solving", level: 85 },
      { name: "RESTful APIs", level: 70 },
    ],
  },
];

const SkillsSection = () => (
  <section id="skills" className="section-padding">
    <div className="container mx-auto max-w-5xl">
      <p className="section-subtitle text-center">Skills</p>
      <h2 className="section-title text-center mt-2 mb-12">My Technical Toolkit</h2>

      <div className="grid md:grid-cols-2 gap-8">
        {categories.map((cat) => (
          <div
            key={cat.title}
            className="p-6 rounded-2xl bg-card border border-border hover:border-primary/40 transition-all duration-300"
          >
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <cat.icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-heading font-semibold text-foreground">{cat.title}</h3>
            </div>
            <div className="space-y-4">
              {cat.skills.map((s) => (
                <div key={s.name}>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-foreground font-medium">{s.name}</span>
                    <span className="text-muted-foreground">{s.level}%</span>
                  </div>
                  <div className="h-2 rounded-full bg-muted overflow-hidden">
                    <div
                      className="h-full rounded-full bg-primary transition-all duration-700"
                      style={{ width: `${s.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default SkillsSection;
