import {
  Braces,
  Code,
  Globe,
  Lightbulb,
  MonitorSmartphone,
  Puzzle,
  Server,
  Terminal,
  Wrench,
} from "lucide-react";

const categories = [
  {
    title: "Programming Languages",
    icon: Braces,
    skills: [
      { name: "Python", level: 85 },
      { name: "Java", level: 75 },
    ],
  },
  {
    title: "Web Technologies",
    icon: Globe,
    skills: [
      { name: "React.js", level: 80 },
      { name: "Node.js", level: 70 },
      { name: "Tailwind CSS", level: 85 },
      { name: "Bootstrap", level: 75 },
    ],
  },
  {
    title: "Developer Tools",
    icon: Terminal,
    skills: [
      { name: "Git", level: 80 },
      { name: "GitHub", level: 80 },
      { name: "VS Code", level: 90 },
    ],
  },
];

const otherSkills = [
  { icon: Server, name: "ServiceNow Platform" },
  { icon: Puzzle, name: "Prompt Engineering" },
  { icon: Lightbulb, name: "Problem Solving" },
  { icon: Wrench, name: "RESTful APIs" },
  { icon: MonitorSmartphone, name: "Responsive Design" },
  { icon: Code, name: "Troubleshooting" },
];

const SkillBar = ({ name, level }: { name: string; level: number }) => (
  <div>
    <div className="mb-1 flex items-center justify-between text-sm">
      <span>{name}</span>
      <span className="text-muted-foreground">{level}%</span>
    </div>
    <div className="h-2 overflow-hidden rounded-full bg-muted">
      <div
        className="h-full rounded-full bg-gradient-to-r from-primary to-accent transition-all duration-1000"
        style={{ width: `${level}%` }}
      />
    </div>
  </div>
);

const SkillsSection = () => (
  <section id="skills" className="bg-card/40 py-24">
    <div className="container">
      <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-primary">Skills</p>
      <h2 className="mb-12 font-heading text-3xl font-bold sm:text-4xl">What I Work With</h2>

      <div className="grid gap-6 lg:grid-cols-3">
        {categories.map((cat) => (
          <div key={cat.title} className="glass-card rounded-xl p-6 transition-all hover:-translate-y-1 hover:border-primary/40">
            <div className="mb-6 flex items-center gap-3">
              <div className="rounded-lg bg-primary/10 p-2 text-primary">
                <cat.icon size={22} />
              </div>
              <h3 className="font-heading text-lg font-semibold">{cat.title}</h3>
            </div>
            <div className="space-y-4">
              {cat.skills.map((s) => (
                <SkillBar key={s.name} name={s.name} level={s.level} />
              ))}
            </div>
          </div>
        ))}
      </div>

      <h3 className="mb-6 mt-12 font-heading text-xl font-semibold">Other Skills</h3>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
        {otherSkills.map((s) => (
          <div
            key={s.name}
            className="glass-card flex flex-col items-center gap-2 rounded-xl p-4 text-center transition-all hover:-translate-y-1 hover:border-primary/40"
          >
            <s.icon className="text-primary" size={24} />
            <span className="text-xs font-medium sm:text-sm">{s.name}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default SkillsSection;
