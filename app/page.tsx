"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Play, Bot, Code, Cpu, Briefcase, Camera, Youtube } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import ProjectCard from "@/components/ProjectCard";
import ServiceCard from "@/components/ServiceCard";
import { DonateButton } from "@/components/DonateButton";

const featuredProjects = [
  { title: "AI Content Assistant", description: "GPT-powered content creation tool that generates and schedules social media posts automatically.", tags: ["AI", "React", "Node.js"], image: "" },
  { title: "Smart Home Automation", description: "IoT automation platform connecting 50+ devices with voice control and predictive scheduling.", tags: ["IoT", "MQTT", "React"], image: "" },
  { title: "Blockchain Supply Chain", description: "Decentralized supply chain tracking system with real-time verification and smart contracts.", tags: ["Blockchain", "Solidity", "Web3"], image: "" },
  { title: "Computer Vision Inspector", description: "Industrial quality inspection system using deep learning for defect detection on production lines.", tags: ["TensorFlow", "Python", "Edge AI"], image: "" },
];

const services = [
  { title: "AI System Development", description: "Custom AI solutions from chatbots to computer vision systems.", icon: Bot },
  { title: "Web Applications", description: "Modern, scalable web platforms built with cutting-edge tech.", icon: Code },
  { title: "Robotics & Automation", description: "Custom robotic systems and automation for industrial use.", icon: Cpu },
  { title: "Technical Consulting", description: "Architecture reviews, tech strategy, and engineering mentorship.", icon: Briefcase },
];

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden hero-bg">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-[120px] animate-pulse-glow" />
        
        <div className="container mx-auto px-4 pt-16 md:pt-0 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-block font-mono text-xs font-semibold text-primary tracking-widest uppercase mb-4 px-3 py-1 rounded-full border border-primary/20 bg-accent">
              CTO · AI Developer · Content Creator
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            whileHover={{ scale: 1.05 }}
            className="text-4xl sm:text-5xl md:text-5xl font-display font-bold leading-tight mb-6 max-w-4xl mx-auto hover:text-yellow-500 transition-colors cursor-pointer"
          >
            I'm <span className="text-primary">Adnan Musa Ibrahim</span> creating AI-driven applications,{" "}
            <br className="hidden md:block" />
            resilient web platforms, and insightful tech content.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-lg text-foreground max-w-2xl mx-auto mb-8"
          >
            Engineering the future through code, circuits, and creativity. 
            From AI systems to modern software — turning ideas into reality.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-wrap justify-center gap-3"
          >
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-primary text-primary-foreground font-medium text-sm hover:opacity-90 transition-opacity glow-primary"
            >
              View Projects <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-md border border-border bg-card text-foreground font-medium text-sm hover:bg-secondary transition-colors"
            >
              Contact Me
            </Link>
            <Link
              href="/content"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-md border border-border bg-card text-foreground font-medium text-sm hover:bg-secondary transition-colors"
            >
              <Play className="h-4 w-4" /> Watch My Content
            </Link>
            <DonateButton />
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="mt-16 inline-flex items-center gap-2 font-mono text-xs text-foreground"
          >
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span>systems.status: operational</span>
          </motion.div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 surface-sunken">
        <div className="container mx-auto px-4">
          <SectionHeading
            label="Portfolio"
            title="Featured Projects"
            description="A selection of engineering and software projects pushing the boundaries of technology."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {featuredProjects.map((project, i) => (
              <ProjectCard key={project.title} {...project} index={i} />
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/projects" className="inline-flex items-center gap-2 text-sm text-primary font-medium hover:underline">
              View all projects <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <SectionHeading
            label="Services"
            title="What I Do"
            description="Professional engineering and development services tailored to your needs."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {services.map((service, i) => (
              <ServiceCard key={service.title} {...service} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Experience Highlights */}
      <section className="py-20 surface-sunken">
        <div className="container mx-auto px-4">
          <SectionHeading
            label="Experience"
            title="Engineering Milestones"
          />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {[
              { value: "10+", label: "Years Experience", icon: Briefcase },
              { value: "50+", label: "Projects Delivered", icon: Code },
              { value: "15+", label: "AI Models Deployed", icon: Bot },
              { value: "100K+", label: "Content Reach", icon: Camera },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center p-6 rounded-lg border border-border glass"
              >
                <stat.icon className="h-5 w-5 text-primary mx-auto mb-2" />
                <div className="font-display text-3xl font-bold text-primary mb-1">{stat.value}</div>
                <div className="text-xs text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Content by AdyTechy */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <SectionHeading
            label="Content Creator"
            title="Tech Content by AdyTechy"
            description="AI experiments, engineering tutorials, and tech discussions — shared across platforms."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              { title: "Deploying LLMs at Scale: A Practical Guide", category: "AI", type: "YouTube" },
              { title: "Building a Smart Home Automation System", category: "IoT", type: "YouTube" },
              { title: "Modern Web Architecture Patterns", category: "Engineering", type: "Short" },
            ].map((post, i) => (
              <motion.div
                key={post.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group p-5 rounded-lg border border-border glass hover:border-primary/30 transition-all cursor-pointer"
              >
                <div className="aspect-video rounded-md bg-muted mb-4 flex items-center justify-center relative">
                  <Play className="h-8 w-8 text-muted-foreground group-hover:text-primary transition-colors" />
                  <span className="absolute top-2 right-2 px-2 py-0.5 text-xs font-mono rounded bg-background/80 text-muted-foreground flex items-center gap-1">
                    <Youtube className="h-3 w-3" /> {post.type}
                  </span>
                </div>
                <span className="font-mono text-xs text-primary">{post.category}</span>
                <h3 className="font-display text-sm font-semibold mt-1 group-hover:text-primary transition-colors">{post.title}</h3>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/content" className="inline-flex items-center gap-2 text-sm text-primary font-medium hover:underline">
              View all content <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Gallery Preview */}
      <section className="py-20 surface-sunken">
        <div className="container mx-auto px-4">
          <SectionHeading
            label="Gallery"
            title="Behind the Builds"
            description="A glimpse into the engineering workspace and project builds."
          />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-5xl mx-auto">
            {[1, 2, 3, 4].map((i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="aspect-square rounded-lg bg-muted border border-border flex items-center justify-center"
              >
                <Cpu className="h-8 w-8 text-muted-foreground/30" />
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/gallery" className="inline-flex items-center gap-2 text-sm text-primary font-medium hover:underline">
              View full gallery <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center p-10 rounded-xl border border-primary/20 bg-accent/30 border-glow"
          >
            <h2 className="font-display text-3xl font-bold mb-3">Let's Build Something Together</h2>
            <p className="text-muted-foreground mb-6">
              Have a project idea? Need technical consulting? Let's talk.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-primary text-primary-foreground font-medium text-sm hover:opacity-90 transition-opacity"
              >
                Get in Touch <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href="https://wa.me/1234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-md border border-border bg-card text-foreground font-medium text-sm hover:bg-secondary transition-colors"
              >
                WhatsApp Me
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Index;
