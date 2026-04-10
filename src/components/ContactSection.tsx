import { useState } from "react";
import { Mail, Phone, Linkedin, Github, Send } from "lucide-react";

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // placeholder submit
    alert("Thank you for your message! I'll get back to you soon.");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="section-padding">
      <div className="container mx-auto max-w-5xl">
        <p className="section-subtitle text-center">Get In Touch</p>
        <h2 className="section-title text-center mt-2 mb-12">Contact Me</h2>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Info */}
          <div className="space-y-6">
            <p className="text-muted-foreground leading-relaxed">
              Feel free to reach out! Whether it's a project idea, collaboration, or just a
              friendly hello — I'd love to hear from you.
            </p>

            <div className="space-y-4">
              {[
                { icon: Mail, label: "udari.dhanunjay@email.com", href: "mailto:udari.dhanunjay@email.com" },
                { icon: Phone, label: "+91 XXXXX XXXXX", href: "tel:+91" },
                { icon: Linkedin, label: "LinkedIn Profile", href: "#" },
                { icon: Github, label: "GitHub Profile", href: "#" },
              ].map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="flex items-center gap-4 group"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-sm text-muted-foreground group-hover:text-foreground transition">
                    {item.label}
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            <input
              type="text"
              placeholder="Your Name"
              required
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full px-4 py-3 rounded-xl bg-card border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition"
            />
            <input
              type="email"
              placeholder="Your Email"
              required
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full px-4 py-3 rounded-xl bg-card border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition"
            />
            <textarea
              placeholder="Your Message"
              rows={5}
              required
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="w-full px-4 py-3 rounded-xl bg-card border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition resize-none"
            />
            <button
              type="submit"
              className="flex items-center gap-2 px-7 py-3 rounded-full bg-primary text-primary-foreground font-semibold hover:opacity-90 transition shadow-lg shadow-primary/30"
            >
              <Send size={16} /> Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
