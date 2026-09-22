import { Network, Target, Wrench, TrendingUp } from "lucide-react";

const highlights = [
  {
    icon: Wrench,
    title: "Hands-on Foundation",
    text: "Strong interest in networking, troubleshooting, and data-driven applications built during my B.Tech journey.",
  },
  {
    icon: Network,
    title: "Platform Focus",
    text: "Developing expertise in ServiceNow development — workflows, service portals, and business automation.",
  },
  {
    icon: TrendingUp,
    title: "Real-World Problems",
    text: "Passionate about solving real-world problems using technology and continuous learning.",
  },
  {
    icon: Target,
    title: "Career Goals",
    text: "Aiming to grow in ServiceNow development, system administration, data analytics, and machine learning.",
  },
];

const AboutSection = () => (
  <section id="about" className="py-24">
    <div className="container">
      <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-primary">About Me</p>
      <h2 className="mb-4 font-heading text-3xl font-bold sm:text-4xl">Who I Am</h2>
      <p className="mb-12 max-w-3xl leading-relaxed text-muted-foreground">
        I am currently pursuing my B.Tech in Computer Science and Engineering at CMR Institute of
        Technology, Hyderabad (2023–2026). I love exploring how systems work end to end — from
        networks and servers to modern web platforms — and turning that understanding into
        efficient, reliable solutions.
      </p>

      <div className="grid gap-6 sm:grid-cols-2">
        {highlights.map((h) => (
          <div
            key={h.title}
            className="glass-card group rounded-xl p-6 transition-all hover:-translate-y-1 hover:border-primary/40"
          >
            <h.icon className="mb-4 text-primary transition-transform group-hover:scale-110" size={28} />
            <h3 className="mb-2 font-heading text-lg font-semibold">{h.title}</h3>
            <p className="text-sm leading-relaxed text-muted-foreground">{h.text}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default AboutSection;
