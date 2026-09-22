import { useState } from "react";
import emailjs from "@emailjs/browser";
import { Github, Linkedin, Loader2, Mail, MapPin, Phone, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const SERVICE_ID = "service_gxmf6op";
const TEMPLATE_ID = "template_59pgeld";
const PUBLIC_KEY = "frIiErDx40RVaZboA";

const contactItems = [
  {
    icon: Mail,
    label: "Email",
    value: "UdaridhanujayPersonal@gmail.com",
    href: "mailto:UdaridhanujayPersonal@gmail.com",
  },
  { icon: Phone, label: "Phone", value: "+91 8074247911", href: "tel:+918074247911" },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "www.linkedin.com/in/dhanunjay-udari-0a0672324",
    href: "https://www.linkedin.com/in/dhanunjay-udari-0a0672324",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/udaridhanunjayPersonal",
    href: "https://github.com/udaridhanunjayPersonal",
  },
  { icon: MapPin, label: "Location", value: "Hyderabad, India", href: undefined },
];

const ContactSection = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ from_name: "", from_email: "", message: "" });
  const [sending, setSending] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    try {
      await emailjs.send(SERVICE_ID, TEMPLATE_ID, form, PUBLIC_KEY);
      toast({
        title: "Message sent!",
        description: "Thanks for reaching out — I'll get back to you soon.",
      });
      setForm({ from_name: "", from_email: "", message: "" });
    } catch {
      toast({
        title: "Something went wrong",
        description: "Couldn't send your message. Please try again or email me directly.",
        variant: "destructive",
      });
    } finally {
      setSending(false);
    }
  };

  const inputClass =
    "w-full rounded-lg border border-input bg-background px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted-foreground focus:border-primary focus:ring-1 focus:ring-primary";

  return (
    <section id="contact" className="bg-card/40 py-24">
      <div className="container">
        <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-primary">Contact</p>
        <h2 className="mb-4 font-heading text-3xl font-bold sm:text-4xl">Get In Touch</h2>
        <p className="mb-12 max-w-2xl text-muted-foreground">
          Have an opportunity, a question, or just want to say hello? My inbox is always open.
        </p>

        <div className="grid gap-10 lg:grid-cols-2">
          <div className="space-y-4">
            {contactItems.map((item) => {
              const content = (
                <>
                  <div className="rounded-lg bg-primary/10 p-2.5 text-primary">
                    <item.icon size={20} />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs text-muted-foreground">{item.label}</p>
                    <p className="truncate text-sm font-medium">{item.value}</p>
                  </div>
                </>
              );
              return item.href ? (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer"
                  className="glass-card flex items-center gap-4 rounded-xl p-4 transition-all hover:-translate-y-0.5 hover:border-primary/40"
                >
                  {content}
                </a>
              ) : (
                <div key={item.label} className="glass-card flex items-center gap-4 rounded-xl p-4">
                  {content}
                </div>
              );
            })}
          </div>

          <form onSubmit={handleSubmit} className="glass-card space-y-4 rounded-xl p-6 sm:p-8">
            <div>
              <label htmlFor="name" className="mb-1.5 block text-sm font-medium">
                Name
              </label>
              <input
                id="name"
                required
                value={form.from_name}
                onChange={(e) => setForm({ ...form, from_name: e.target.value })}
                placeholder="Your name"
                className={inputClass}
              />
            </div>
            <div>
              <label htmlFor="email" className="mb-1.5 block text-sm font-medium">
                Email
              </label>
              <input
                id="email"
                type="email"
                required
                value={form.from_email}
                onChange={(e) => setForm({ ...form, from_email: e.target.value })}
                placeholder="your@email.com"
                className={inputClass}
              />
            </div>
            <div>
              <label htmlFor="message" className="mb-1.5 block text-sm font-medium">
                Message
              </label>
              <textarea
                id="message"
                required
                rows={5}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                placeholder="Your message..."
                className={`${inputClass} resize-none`}
              />
            </div>
            <button
              type="submit"
              disabled={sending}
              className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3 font-semibold text-primary-foreground transition-transform hover:scale-[1.02] disabled:cursor-not-allowed disabled:opacity-60"
            >
              {sending ? (
                <>
                  <Loader2 className="animate-spin" size={18} /> Sending...
                </>
              ) : (
                <>
                  <Send size={18} /> Send Message
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
