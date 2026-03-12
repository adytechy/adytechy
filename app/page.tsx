"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Play, Bot, Code, Cpu, Briefcase, Camera, Youtube } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import ProjectCard from "@/components/ProjectCard";
import ServiceCard from "@/components/ServiceCard";
import { DonateButton } from "@/components/DonateButton";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

const featuredProjects = [
  { title: "AI Content Assistant", description: "GPT-powered content creation tool that generates and schedules social media posts automatically.", tags: ["AI", "React", "Node.js"], image: "" },
  { title: "Smart Home Automation", description: "IoT automation platform connecting 50+ devices with voice control and predictive scheduling.", tags: ["IoT", "MQTT", "React"], image: "" },
  { title: "Blockchain Supply Chain", description: "Decentralized supply chain tracking system with real-time verification and smart contracts.", tags: ["Blockchain", "Solidity", "Web3"], image: "" },
  { title: "Computer Vision Inspector", description: "Industrial quality inspection system using deep learning for defect detection on production lines.", tags: ["TensorFlow", "Python", "Edge AI"], image: "" },
];

const galleryItems = [
  { src: '/gallery/1.jpeg', title: 'Photo 1' },
  { src: '/gallery/2.jpeg', title: 'Photo 2' },
  { src: '/gallery/3.jpeg', title: 'Photo 3' },
  { src: '/gallery/4.jpeg', title: 'Photo 4' },
  { src: '/gallery/5.jpeg', title: 'Photo 5' },
  { src: '/gallery/6.jpeg', title: 'Photo 6' },
  { src: '/gallery/7.jpg', title: 'Photo 7' },
  { src: '/gallery/8.jpg', title: 'Photo 8' },
];

const videos = [
  { id: "j98jg_Hu0F0", title: "Prox Mox 1", description: "Description coming soon.", thumbnail: "https://i.ytimg.com/vi/j98jg_Hu0F0/hqdefault.jpg", tags: ["Virtualization", "Proxmox"] },
  { id: "NumJx4DumFY", title: "TELEGRAM AI AGENT DA N8N HAUSA", description: "Description coming soon.", thumbnail: "https://i.ytimg.com/vi/NumJx4DumFY/hqdefault.jpg", tags: ["AI", "Automation", "Telegram"] },
  { id: "FlAnqHyidh4", title: "Yadda akayi Amfani Da Large Language Model Locally", description: "Description coming soon.", thumbnail: "https://i.ytimg.com/vi/FlAnqHyidh4/hqdefault.jpg", tags: ["AI", "LLM"] },
  { id: "5jGmYHvJ3Oc", title: "KALI LINUX INSTALLATION", description: "Description coming soon.", thumbnail: "https://i.ytimg.com/vi/5jGmYHvJ3Oc/hqdefault.jpg", tags: ["Linux", "Kali Linux", "Installation"] },
  { id: "mUvBW-AE-1Y", title: "Data Science Rating", description: "Description coming soon.", thumbnail: "https://i.ytimg.com/vi/mUvBW-AE-1Y/hqdefault.jpg", tags: ["Data Science"] },
  { id: "6GQqv-oHHas", title: "loops ady", description: "Description coming soon.", thumbnail: "https://i.ytimg.com/vi/6GQqv-oHHas/hqdefault.jpg", tags: ["Programming"] },
];

const services = [
  { title: "AI System Development", description: "Custom AI solutions from chatbots to computer vision systems.", icon: Bot },
  { title: "Web Applications", description: "Modern, scalable web platforms built with cutting-edge tech.", icon: Code },
  { title: "Robotics & Automation", description: "Custom robotic systems and automation for industrial use.", icon: Cpu },
  { title: "Technical Consulting", description: "Architecture reviews, tech strategy, and engineering mentorship.", icon: Briefcase },
];

const Index = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [selectedItem, setSelectedItem] = useState(null);

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
            {videos.slice(0, 3).map((video, i) => (
              <motion.div
                key={video.id + i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group rounded-lg border border-border glass overflow-hidden hover:border-primary/30 transition-all cursor-pointer"
                onClick={() => setSelectedVideo(video)}
              >
                <div className="aspect-video rounded-md mb-4 overflow-hidden relative">
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity">
                    <Play className="h-12 w-12 text-white" />
                  </div>
                </div>
                <div className="p-4">
                  <span className="font-mono text-xs text-primary">{video.tags.join(', ')}</span>
                  <h3 className="font-display text-sm font-semibold mt-1">{video.title}</h3>
                  <p className="text-xs text-muted-foreground mt-1">{video.description}</p>
                </div>
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
            {galleryItems.slice(0, 4).map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="aspect-square rounded-lg bg-muted border border-border overflow-hidden group hover:border-primary/30 transition-all cursor-pointer"
                onClick={() => setSelectedItem(item)}
              >
                <img
                  src={item.src}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
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

      <Dialog open={!!selectedVideo} onOpenChange={() => setSelectedVideo(null)}>
        <DialogContent className="max-w-4xl">
          <DialogHeader>
            <DialogTitle>{selectedVideo?.title}</DialogTitle>
          </DialogHeader>
          <iframe
            src={`https://www.youtube.com/embed/${selectedVideo?.id}`}
            title={selectedVideo?.title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full aspect-video"
          />
        </DialogContent>
      </Dialog>

      {selectedItem && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
          onClick={() => setSelectedItem(null)}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="max-w-6xl mx-4 bg-background rounded-lg p-6 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-center mb-6">
              <img
                src={selectedItem.src}
                alt={selectedItem.title}
                className="max-w-full h-auto object-cover rounded"
              />
            </div>
            <div className="text-center">
              <h3 className="text-2xl font-semibold">{selectedItem.title}</h3>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default Index;
