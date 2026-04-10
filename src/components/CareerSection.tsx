import { Rocket } from "lucide-react";

const CareerSection = () => (
  <section className="section-padding bg-card">
    <div className="container mx-auto max-w-3xl text-center">
      <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
        <Rocket className="w-7 h-7 text-primary" />
      </div>
      <p className="section-subtitle">Career Objective</p>
      <h2 className="section-title mt-2 mb-6">My Vision</h2>
      <p className="text-lg text-muted-foreground leading-relaxed italic">
        "To obtain a challenging position in a growth-oriented organization where I can apply my
        technical skills, gain real-world experience, and contribute to innovative solutions."
      </p>
    </div>
  </section>
);

export default CareerSection;
