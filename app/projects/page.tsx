"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";
import ProjectCard from "@/components/ProjectCard";

const categories = ["All", "AI", "Web", "Automation", "Blockchain", "Content Creation"];

const projects = [
  { title: "VeriChain – EIB Stratoc ID System", description: "Blockchain-backed ID verification system for EIB Stratoc. Managed DevOps, server configuration, and deployment on their servers to ensure reliability.", tags: ["Polygon Blockchain", "Node.js", "Express", "Docker", "Server Configuration", "Linux", "Reverse Proxy"], category: "Blockchain" },
  { title: "Digitizing Indigenous Certificates – Kano State", description: "Developed a digital workflow for issuing indigenous certificates using VeriChain to ensure authenticity via blockchain.", tags: ["VeriChain Blockchain", "Node.js", "React", "PostgreSQL", "Docker", "Server Deployment"], category: "Blockchain" },
  { title: "Hisba Workflow Automation System", description: "Automated internal compliance and operational processes, deployed on self-hosted servers with reverse proxy, improving efficiency and transparency.", tags: ["Node.js", "Express", "React", "PostgreSQL", "Docker", "Nginx Reverse Proxy", "Linux Server"], category: "Automation" },
  { title: "Enterprise-Scale Cloud & Infrastructure Systems", description: "Designed secure, scalable, multi-location applications and distributed systems with high availability and controlled data replication.", tags: ["AWS/GCP", "Docker", "Kubernetes", "CI/CD Pipelines", "Terraform", "Monitoring Tools"], category: "Automation" },
  { title: "Full-Stack Web Platforms with Resilient Architecture", description: "Built custom web platforms focusing on performance, scalability, and operational efficiency.", tags: ["React", "Node.js", "TailwindCSS", "Vite", "PostgreSQL", "REST/GraphQL APIs", "Docker"], category: "Web" },
  { title: "AI-Driven Web & Mobile Experiences", description: "Integrated AI features into applications to improve automation, analytics, and user experience.", tags: ["TensorFlow/PyTorch", "Node.js", "React", "Python", "Cloud Functions", "API Integration"], category: "AI" },
  { title: "Secure Backend & API Systems", description: "Developed enterprise-grade backend services with secure authentication, scalable business logic, and monitoring.", tags: ["Node.js", "Express", "PostgreSQL", "JWT Authentication", "REST/GraphQL", "Docker"], category: "Web" },
  { title: "Cloud Deployment & DevOps Pipelines", description: "End-to-end automated deployments using containers, CI/CD, and orchestration to ensure resilient production systems.", tags: ["Docker", "Kubernetes", "GitHub Actions", "Cloud Run", "Vercel", "Terraform"], category: "Automation" },
  { title: "Public/Private Verification Workflows", description: "Created systems where internal operations stay private while enabling secure public-facing verification.", tags: ["Node.js", "React", "PostgreSQL", "Blockchain Integration", "Cloud Deployment", "Security & Compliance"], category: "Blockchain" },
  { title: "Tech Content & Tutorials", description: "Shared AI, cloud, and full-stack engineering insights through YouTube videos, tutorials, and experiments, showing real-world engineering processes.", tags: ["Video Content Creation", "YouTube API", "React Embedded Players", "Documentation"], category: "Web" },
  { title: "Talk AI with Retink – Live Tech Session", description: "Delivered a public session on real AI use-cases, demonstrating system architecture, deployment, and problem-solving.", tags: ["Presentation + Demo", "Python AI Scripts", "Cloud Deployment", "Live Video Integration"], category: "AI" },
  { title: "ZainPay Developer Onboarding Video", description: "Produced a full-length onboarding video guiding developers through ZainPay integration. Includes step-by-step instructions, code demonstrations, and practical examples for smooth developer adoption.", tags: ["Video editing", "screen recording", "scripting tutorials", "content planning", "storytelling for tech audiences"], category: "Content Creation" },
  { title: "Power in a Minute Animated Series for Alfuttaim", description: "Created short, engaging animations that explain complex business and tech topics in under a minute. Series designed for social media and internal communication.", tags: ["2D animation", "motion graphics", "Adobe Animate", "After Effects", "scripting", "storytelling", "visual design"], category: "Content Creation" },
  { title: "Technical Courses: Data Analysis & Python Programming", description: "Developed and delivered structured courses on data analysis and Python programming. Includes video lectures, hands-on exercises, and downloadable resources for learners.", tags: ["Course design", "curriculum planning", "screen recording", "video editing", "Python", "data visualization libraries", "LMS integration"], category: "Content Creation" },
];

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered = activeCategory === "All" ? projects : projects.filter((p) => p.category === activeCategory);

  return (
    <div className="min-h-screen pt-24">
      <section className="py-16">
        <div className="container mx-auto px-4">
          <SectionHeading
            label="Portfolio"
            title="Projects"
            description="Engineering and software projects across AI and more."
          />

          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-1.5 text-sm font-mono rounded-full border transition-colors ${
                  activeCategory === cat
                    ? "bg-primary text-primary-foreground border-primary"
                    : "border-border text-muted-foreground hover:text-foreground hover:border-foreground/20"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto"
          >
            {filtered.map((project, i) => (
              <ProjectCard key={project.title} {...project} index={i} />
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
