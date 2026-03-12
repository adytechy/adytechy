"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  image?: string;
  link?: string;
  index?: number;
}

const ProjectCard = ({ title, description, tags, image, link, index = 0 }: ProjectCardProps) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="group relative rounded-lg border border-border glass overflow-hidden hover:border-primary/30 hover:shadow-lg transition-all duration-300 cursor-pointer"
      onClick={() => setExpanded(!expanded)}
    >
      {image && (
        <div className="aspect-video overflow-hidden bg-muted">
          <img src={image} alt={title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
        </div>
      )}
      <div className="p-5">
        <div className="flex items-start justify-between mb-2">
          <h3 className="font-display text-lg font-semibold group-hover:text-primary transition-colors">{title}</h3>
          {link && (
            <ArrowUpRight className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0 mt-1" />
          )}
        </div>
        <p className={`text-sm text-muted-foreground mb-3 ${expanded ? '' : 'line-clamp-2'}`}>{description}</p>
        <div className="flex flex-wrap gap-1.5">
          {tags.map((tag) => (
            <span key={tag} className="px-2 py-0.5 text-xs font-mono rounded-full bg-accent text-accent-foreground">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
