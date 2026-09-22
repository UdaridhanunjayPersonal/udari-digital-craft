import { Quote, Target } from "lucide-react";

const CareerSection = () => (
  <section id="career" className="py-24">
    <div className="container">
      <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-primary">
        Career Objective
      </p>
      <h2 className="mb-12 font-heading text-3xl font-bold sm:text-4xl">Where I'm Headed</h2>

      <div className="glass-card relative mx-auto max-w-3xl rounded-2xl p-8 sm:p-10">
        <Target className="absolute -top-5 left-8 rounded-lg bg-primary p-2.5 text-primary-foreground" size={40} />
        <Quote className="mb-4 text-primary/40" size={32} />
        <blockquote className="font-heading text-lg leading-relaxed sm:text-xl">
          "To obtain a challenging position in a growth-oriented organization where I can apply my
          technical skills, gain real-world experience, and contribute to innovative solutions."
        </blockquote>
        <p className="mt-6 text-sm font-medium text-muted-foreground">
          — Udari Dhanunjay
        </p>
      </div>
    </div>
  </section>
);

export default CareerSection;
