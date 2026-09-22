import { Github, Heart, Linkedin, Mail } from "lucide-react";

const Footer = () => (
  <footer className="border-t border-border py-10">
    <div className="container flex flex-col items-center gap-4 text-center">
      <a href="#home" className="font-heading text-lg font-bold">
        <span className="text-primary">Udari</span> Dhanunjay
      </a>
      <div className="flex gap-4">
        {[
          { icon: Mail, href: "mailto:UdaridhanujayPersonal@gmail.com", label: "Email" },
          { icon: Linkedin, href: "https://www.linkedin.com/in/dhanunjay-udari-0a0672324", label: "LinkedIn" },
          { icon: Github, href: "https://github.com/udaridhanunjayPersonal", label: "GitHub" },
        ].map((s) => (
          <a
            key={s.label}
            href={s.href}
            target={s.href.startsWith("http") ? "_blank" : undefined}
            rel="noreferrer"
            aria-label={s.label}
            className="rounded-lg border border-border p-2.5 text-muted-foreground transition-all hover:-translate-y-0.5 hover:border-primary hover:text-primary"
          >
            <s.icon size={18} />
          </a>
        ))}
      </div>
      <p className="flex items-center gap-1.5 text-xs text-muted-foreground">
        © {new Date().getFullYear()} Udari Dhanunjay · Crafted with
        <Heart className="text-primary" size={12} fill="currentColor" />
      </p>
    </div>
  </footer>
);

export default Footer;
