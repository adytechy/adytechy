"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Play, ExternalLink } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import SectionHeading from "@/components/SectionHeading";
import { SOCIAL_LINKS } from "@/lib/constants";
import { DonateButton } from "@/components/DonateButton";

const videos = [
  { id: "j98jg_Hu0F0", title: "Prox Mox 1", description: "Description coming soon.", thumbnail: "https://i.ytimg.com/vi/j98jg_Hu0F0/hqdefault.jpg", tags: ["Virtualization", "Proxmox"] },
  { id: "NumJx4DumFY", title: "TELEGRAM AI AGENT DA N8N HAUSA", description: "Description coming soon.", thumbnail: "https://i.ytimg.com/vi/NumJx4DumFY/hqdefault.jpg", tags: ["AI", "Automation", "Telegram"] },
  { id: "FlAnqHyidh4", title: "Yadda akayi Amfani Da Large Language Model Locally", description: "Description coming soon.", thumbnail: "https://i.ytimg.com/vi/FlAnqHyidh4/hqdefault.jpg", tags: ["AI", "LLM"] },
  { id: "5jGmYHvJ3Oc", title: "KALI LINUX INSTALLATION", description: "Description coming soon.", thumbnail: "https://i.ytimg.com/vi/5jGmYHvJ3Oc/hqdefault.jpg", tags: ["Linux", "Kali Linux", "Installation"] },
  { id: "mUvBW-AE-1Y", title: "Data Science Rating", description: "Description coming soon.", thumbnail: "https://i.ytimg.com/vi/mUvBW-AE-1Y/hqdefault.jpg", tags: ["Data Science"] },
  { id: "6GQqv-oHHas", title: "loops ady", description: "Description coming soon.", thumbnail: "https://i.ytimg.com/vi/6GQqv-oHHas/hqdefault.jpg", tags: ["Programming"] },
];

const socialLinks = [
  { name: "YouTube", url: SOCIAL_LINKS.youtube, description: "Engineering tutorials and experiments" },
  { name: "LinkedIn", url: SOCIAL_LINKS.linkedin, description: "Professional updates and articles" },
  { name: "GitHub", url: SOCIAL_LINKS.github, description: "Open source projects and code" },
  { name: "TikTok", url: SOCIAL_LINKS.tiktok, description: "Short tech content and tips" },
  { name: "Instagram", url: SOCIAL_LINKS.instagram, description: "Behind-the-scenes builds" },
  { name: "Facebook", url: SOCIAL_LINKS.facebook, description: "Community and updates" },
];

const ContentPage = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);

  return (
    <div className="min-h-screen pt-24">
      <section className="py-16">
        <div className="container mx-auto px-4">
          <SectionHeading
            label="Content"
            title="Tech Content"
            description="Engineering experiments, AI discussions, tutorials, and behind-the-scenes builds."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {videos.map((video, i) => (
              <motion.div
                key={video.id + i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
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
            <DonateButton />
          </div>

          <SectionHeading label="Connect" title="Find Me Online" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {socialLinks.map((link, i) => (
              <motion.a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-center justify-between p-4 rounded-lg border border-border glass hover:border-primary/30 transition-all group"
              >
                <div>
                  <h3 className="font-display text-sm font-semibold group-hover:text-primary transition-colors">{link.name}</h3>
                  <p className="text-xs text-muted-foreground mt-0.5">{link.description}</p>
                </div>
                <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-primary flex-shrink-0 transition-colors" />
              </motion.a>
            ))}
          </div>
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
    </div>
  );
};

export default ContentPage;
