"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Bot, Code, Settings, Cpu, Building, Video } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import { CONTACT_EMAIL } from "@/lib/constants";

const services = [
  { icon: Bot, title: "AI System Development", description: "Custom AI solutions including chatbots, recommendation engines, computer vision systems, and LLM integrations. From prototype to production-ready deployment.", features: ["Custom LLM integrations", "Computer vision pipelines", "NLP & text analytics", "AI-powered automation"] },
  { icon: Code, title: "Web Application Development", description: "Modern, scalable web platforms built with React, Next.js, and Node.js. From MVPs to enterprise-grade applications with clean architecture.", features: ["Full-stack development", "API design & integration", "Database architecture", "Performance optimization"] },
  { icon: Settings, title: "Automation Systems", description: "End-to-end automation solutions for business processes, IoT systems, and industrial operations. Reduce manual work and increase efficiency.", features: ["Workflow automation", "IoT integration", "Data pipeline design", "Process optimization"] },
  { icon: Building, title: "Technical Consulting", description: "Architecture reviews, technology strategy, team mentorship, and engineering leadership. Helping companies make the right technical decisions.", features: ["Architecture review", "Tech stack selection", "Team mentorship", "Code audits"] },
  { icon: Cpu, title: "Robotics & Automation Systems", description: "Custom robotic systems design and autonomous solutions for industrial, research, and commercial applications.", features: ["Robotic system design", "Autonomous navigation", "Sensor integration", "Control systems"] },
  { icon: Code, title: "Software Architecture", description: "Designing scalable, maintainable software systems. Microservices, event-driven architectures, and cloud-native solutions.", features: ["System design", "Microservices architecture", "Cloud-native solutions", "Scalability planning"] },
  { icon: Video, title: "Content Creation & Technical Communication", description: "Sharing insights and tutorials that help teams and developers learn engineering and AI best practices.", features: ["Tech tutorials & engineering walkthroughs", "AI and cloud experiment documentation", "YouTube and social media content", "Public speaking & live tech sessions"] },
  { icon: Code, title: "Blockchain & Verification Systems", description: "Projects like VeriChain and certificate digitization can be highlighted here.", features: ["Blockchain-backed ID and verification systems", "Secure, decentralized record management", "Integration with enterprise and public-facing workflows"] },
];

const Services = () => {
  return (
    <div className="min-h-screen pt-24">
      <section className="py-16">
        <div className="container mx-auto px-4">
          <SectionHeading
            label="Services"
            title="Professional Services"
            description="Engineering and development services tailored to bring your vision to life."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {services.map((service, i) => (
              <Link
                key={service.title}
                href={`mailto:${CONTACT_EMAIL}?subject=Inquiry about ${service.title}&body=Hi, I'm interested in your ${service.title} service.`}
                className="block"
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="p-6 rounded-lg border border-border bg-card hover:border-primary/30 transition-all"
                >
                  <service.icon className="h-8 w-8 text-primary mb-4" />
                  <h3 className="font-display text-xl font-semibold mb-2">{service.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{service.description}</p>
                  <ul className="space-y-1.5">
                    {service.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <span className="w-1 h-1 rounded-full bg-primary flex-shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </Link>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <p className="text-muted-foreground mb-4">Interested in working together?</p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-primary text-primary-foreground font-medium text-sm hover:opacity-90 transition-opacity"
            >
              Get in Touch <ArrowRight className="h-4 w-4" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Services;
