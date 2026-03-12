"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MessageCircle, Github, Linkedin, Youtube, Send, ExternalLink, Instagram, Facebook } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import { z } from "zod";
import { SOCIAL_LINKS, CONTACT_EMAIL } from "@/lib/constants";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Invalid email address").max(255),
  subject: z.string().trim().min(1, "Subject is required").max(200),
  message: z.string().trim().min(1, "Message is required").max(2000),
});

const TikTokIcon = () => (
  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.88-2.88 2.89 2.89 0 0 1 2.88-2.88c.28 0 .56.04.81.11v-3.5a6.37 6.37 0 0 0-.81-.05A6.34 6.34 0 0 0 3.15 15.2a6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.34-6.34V8.87a8.16 8.16 0 0 0 4.76 1.52v-3.4a4.85 4.85 0 0 1-1-.3z"/></svg>
);

const socialLinks = [
  { name: "WhatsApp", icon: MessageCircle, href: SOCIAL_LINKS.whatsapp, description: "Quick message" },
  { name: "Email", icon: Mail, href: `mailto:${CONTACT_EMAIL}`, description: CONTACT_EMAIL },
  { name: "LinkedIn", icon: Linkedin, href: SOCIAL_LINKS.linkedin, description: "Professional network" },
  { name: "GitHub", icon: Github, href: SOCIAL_LINKS.github, description: "Open source" },
  { name: "YouTube", icon: Youtube, href: SOCIAL_LINKS.youtube, description: "Tech content" },
  { name: "Instagram", icon: Instagram, href: SOCIAL_LINKS.instagram, description: "Behind the scenes" },
  { name: "Facebook", icon: Facebook, href: SOCIAL_LINKS.facebook, description: "Community" },
  { name: "TikTok", icon: TikTokIcon, href: SOCIAL_LINKS.tiktok, description: "Short videos" },
];

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = contactSchema.safeParse(form);
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.issues.forEach((issue) => {
        if (issue.path[0]) fieldErrors[issue.path[0] as string] = issue.message;
      });
      setErrors(fieldErrors);
      return;
    }
    setErrors({});
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(form.subject)}&body=${encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`)}`;
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen pt-24">
      <section className="py-16">
        <div className="container mx-auto px-4">
          <SectionHeading
            label="Contact"
            title="Get in Touch"
            description="Have a project idea, need consulting, or just want to chat about tech? Reach out."
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
            >
              {submitted ? (
                <div className="p-8 rounded-lg border border-primary/20 bg-accent/30 text-center">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                    <Send className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="font-display text-xl font-semibold mb-2">Message Sent!</h3>
                  <p className="text-sm text-muted-foreground">Thank you for reaching out. I'll get back to you soon.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {(["name", "email", "subject"] as const).map((field) => (
                    <div key={field}>
                      <label className="block text-sm font-medium mb-1.5 capitalize">{field}</label>
                      <input
                        type={field === "email" ? "email" : "text"}
                        value={form[field]}
                        onChange={(e) => setForm({ ...form, [field]: e.target.value })}
                        className="w-full px-3 py-2.5 rounded-md border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                        placeholder={`Your ${field}`}
                      />
                      {errors[field] && <p className="text-xs text-destructive mt-1">{errors[field]}</p>}
                    </div>
                  ))}
                  <div>
                    <label className="block text-sm font-medium mb-1.5">Message</label>
                    <textarea
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      rows={5}
                      className="w-full px-3 py-2.5 rounded-md border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring resize-none"
                      placeholder="Tell me about your project..."
                    />
                    {errors.message && <p className="text-xs text-destructive mt-1">{errors.message}</p>}
                  </div>
                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-md bg-primary text-primary-foreground font-medium text-sm hover:opacity-90 transition-opacity"
                  >
                    Send Message <Send className="h-4 w-4" />
                  </button>
                </form>
              )}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-4"
            >
              <h3 className="font-display text-lg font-semibold mb-4">Connect Directly</h3>
              {socialLinks.map((link, i) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center gap-4 p-4 rounded-lg border border-border bg-card hover:border-primary/30 transition-all group"
                >
                  <div className="w-10 h-10 rounded-md bg-accent flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <link.icon className="h-5 w-5" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-sm font-semibold group-hover:text-primary transition-colors">{link.name}</h4>
                    <p className="text-xs text-muted-foreground">{link.description}</p>
                  </div>
                  <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                </motion.a>
              ))}

              {/* TikTok separate since custom icon */}
              <motion.a
                href="https://tiktok.com"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                className="flex items-center gap-4 p-4 rounded-lg border border-border bg-card hover:border-primary/30 transition-all group"
              >
                <div className="w-10 h-10 rounded-md bg-accent flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <TikTokIcon />
                </div>
                <div className="flex-1">
                  <h4 className="text-sm font-semibold group-hover:text-primary transition-colors">TikTok</h4>
                  <p className="text-xs text-muted-foreground">Short tech content</p>
                </div>
                <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
              </motion.a>

              <div className="p-5 rounded-lg border border-primary/20 bg-accent/30 mt-6">
                <h4 className="font-display text-sm font-semibold mb-1">Prefer WhatsApp?</h4>
                <p className="text-xs text-muted-foreground mb-3">For quick responses, send me a message on WhatsApp.</p>
                <a
                  href="https://wa.me/1234567890"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-primary text-primary-foreground text-sm font-medium hover:opacity-90 transition-opacity"
                >
                  <MessageCircle className="h-4 w-4" /> Chat on WhatsApp
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
