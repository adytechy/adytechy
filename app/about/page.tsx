"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";
import { Bot, Code, Cpu, Briefcase, Video } from "lucide-react";

const timelineEvents = [
  { year: "Feb 2026 - Present", title: "Chief Technology Officer at Alfuttaim Nigeria Limited", description: "I drive the company’s technology strategy and oversee the development of scalable digital platforms. I focus on system architecture, innovation, and the integration of modern technologies to support business growth and operational excellence.", icon: Briefcase },
  { year: "Jan 2026 - Feb 2026", title: "Administrative, Digital & Technical Support at Alfuttaim Nigeria Limited", description: "I support the organizational operations by delivering structured administrative services, managing digital platforms, and providing technical support to ensure operational efficiency and system continuity. My responsibilities include coordinating administrative processes, supporting digital workflows, and assisting with IT-related tasks while maintaining high standards of professionalism, accuracy, and compliance.", icon: Code },
  { year: "Dec 2024 - Present", title: "Chief Technology Officer at Brown Pigeon ICT", description: "I design and optimize end-to-end tech operations, ensuring performance, security, and scalability align with business growth. My expertise includes cloud deployment, systems integration, operational optimization, and resilient infrastructure design. In addition, I lead technical training initiatives, translating complex systems into practical, deployable knowledge for teams and learners.", icon: Briefcase },
  { year: "May 2018 - Feb 2024", title: "Management Information Systems at Dangote Industries Limited", description: "Skills: Logistics Management · Python (Programming Language) · Data Analytics · Microsoft PowerPoint · Microsoft Power BI · SharePoint · Operations Management · Problem Solving · Visualization · AppSheet No-Code App Development · R (Programming Language) · Dashboards · Analytics · Communication · Microsoft Outlook", icon: Cpu },
  { year: "Jun 2024 - Present", title: "Data Analysis instructor (Hausa) at Ady3m_Tech", description: "Skills: Tableau · Statistics · Microsoft Excel · PostgreSQL", icon: Code },
  { year: "Feb 2024 - Dec 2025", title: "Document Control Manager at Azman Air Services Limited", description: "Managed document control systems to ensure accurate organization, accessibility, and compliance of operational records. Also provided IT support by maintaining computer systems, troubleshooting technical issues, and ensuring reliable operation of office technology and networks. This role strengthened my foundation in system management and technology infrastructure", icon: Cpu },
  { year: "Jun 2024 - Nov 2024", title: "Data Analysis Faciliator at EnovateLab", description: "Skills: Data Analytics · Teacher Training", icon: Code },
  { year: "Nov 2022 - Feb 2024", title: "Head of Learning and Development at Vircademy", description: "Skills: Python (Programming Language) · Microsoft PowerPoint · Key Performance Indicators · Problem Solving · Visualization · Google Analytics · Analytics · Communication", icon: Video },
  { year: "Aug 2019 - Feb 2024", title: "Partner at EnvestLab", description: "Skills: Python (Programming Language) · Microsoft PowerPoint · Git · Problem Solving · Visualization · Analytics · Communication", icon: Code },
  { year: "May 2023 - Jun 2023", title: "AI Community Surfer at TELUS International AI Data Solutions", description: "AI Community Surfing", icon: Bot },
];

const skills = [
  { category: "AI & ML", items: ["TensorFlow", "PyTorch", "LLMs", "Computer Vision", "NLP"] },
  { category: "Web Development", items: ["React", "Next.js", "Node.js", "TypeScript", "PostgreSQL"] },
  { category: "Robotics & IoT", items: ["ROS", "Embedded C", "PCB Design", "MQTT", "Sensors"] },
  { category: "Cloud & DevOps", items: ["GCP", "Docker", "Kubernetes", "CI/CD", "Terraform"] },
];

const About = () => {
  return (
    <div className="min-h-screen pt-24">
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto"
          >
            <span className="font-mono text-xs font-semibold text-primary tracking-widest uppercase mb-4 block">About</span>
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">
              The Mind Behind <span className="text-gradient">AdyTechy</span>
            </h1>
            <div className="flex flex-col md:flex-row items-start gap-8">
              <img
                src="/photo.jpg"
                alt="Adnan Musa Ibrahim"
                className="w-72 h-96 rounded-xl object-cover shadow-lg flex-shrink-0 mx-auto md:mx-0"
              />
              <div className="flex-1">
                <p className="text-muted-foreground text-justify">
                  I'm <strong>Adnan Musa Ibrahim (AdyTechy)</strong> — a CTO, AI developer, full-stack cloud and infrastructure engineer, and tech content creator. I specialize in designing secure, scalable, multi-location applications and distributed systems, with robust architecture, high availability, and seamless public-facing verification workflows. My journey spans from writing my first lines of code to leading engineering teams and building complex autonomous and AI systems. I operate at the intersection of software and hardware, where innovation truly happens. Whether deploying AI models at scale, architecting modern web platforms, or designing resilient cloud infrastructure, I tackle every challenge with curiosity, engineering rigor, and operational efficiency. Through my content, I share the engineering process. the experiments, failures, and breakthroughs — because technology is best learned by building. My goal is to bridge complex internal systems with user-friendly public solutions, while inspiring others to explore, create, and engineer with confidence.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-16 surface-sunken">
        <div className="container mx-auto px-4">
          <SectionHeading label="Expertise" title="What I Do" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              { icon: Bot, title: "AI Development", desc: "Building intelligent systems from chatbots to computer vision pipelines." },
              { icon: Cpu, title: "Robotics & Automation", desc: "Designing and programming robotic systems for real-world applications." },
              { icon: Code, title: "Software Engineering", desc: "Architecting scalable web platforms and enterprise software." },
              { icon: Briefcase, title: "Technical Leadership", desc: "CTO experience leading teams and driving technical strategy." },
              { icon: Video, title: "Content Creation", desc: "Sharing engineering knowledge through tutorials and experiments." },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-6 rounded-lg border border-border bg-card"
              >
                <item.icon className="h-6 w-6 text-primary mb-3" />
                <h3 className="font-display text-base font-semibold mb-1">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <SectionHeading label="Journey" title="Experience Timeline" />
          <div className="max-w-2xl mx-auto">
            {timelineEvents.map((event, i) => (
              <motion.div
                key={event.year}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative flex gap-4 pb-8 last:pb-0"
              >
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 rounded-full border-2 border-primary bg-accent flex items-center justify-center flex-shrink-0">
                    <event.icon className="h-4 w-4 text-primary" />
                  </div>
                  {i < timelineEvents.length - 1 && (
                    <div className="w-px flex-1 bg-border mt-2" />
                  )}
                </div>
                <div className="pt-1.5">
                  <span className="font-mono text-xs text-primary">{event.year}</span>
                  <h3 className="font-display font-semibold mt-0.5">{event.title}</h3>
                  <p className="text-sm text-muted-foreground mt-1">{event.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 surface-sunken">
        <div className="container mx-auto px-4">
          <SectionHeading label="Skills" title="Tech Stack" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {skills.map((group, i) => (
              <motion.div
                key={group.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-5 rounded-lg border border-border bg-card"
              >
                <h3 className="font-display text-sm font-semibold text-primary mb-3">{group.category}</h3>
                <div className="flex flex-wrap gap-1.5">
                  {group.items.map((item) => (
                    <span key={item} className="px-2 py-1 text-xs font-mono rounded-md bg-accent text-accent-foreground">{item}</span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
