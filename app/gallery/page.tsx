"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Cpu } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";

const galleryItems = [
  { src: '/gallery/1.jpeg', title: 'Photo 1' },
  { src: '/gallery/2.jpeg', title: 'Photo 2' },
  { src: '/gallery/3.jpeg', title: 'Photo 3' },
  { src: '/gallery/4.jpeg', title: 'Photo 4' },
  { src: '/gallery/5.jpeg', title: 'Photo 5' },
  { src: '/gallery/6.jpeg', title: 'Photo 6' },
  { src: '/gallery/7.jpg', title: 'Photo 7' },
  { src: '/gallery/8.jpg', title: 'Photo 8' },
  { src: '/gallery/9.jpg', title: 'Photo 9' },
  { src: '/gallery/10.jpg', title: 'Photo 10' },
  { src: '/gallery/11.jpg', title: 'Photo 11' },
  { src: '/gallery/12.jpg', title: 'Photo 12' },
  { src: '/gallery/13.jpg', title: 'Photo 13' },
  { src: '/gallery/14.jpg', title: 'Photo 14' },
  { src: '/gallery/15.jpg', title: 'Photo 15' },
  { src: '/gallery/16.jpg', title: 'Photo 16' },
  { src: '/gallery/17.jpg', title: 'Photo 17' },
  { src: '/gallery/18.jpg', title: 'Photo 18' },
  { src: '/gallery/19.jpg', title: 'Photo 19' },
  { src: '/gallery/20.jpg', title: 'Photo 20' },
  { src: '/gallery/21.jpg', title: 'Photo 21' },
  { src: '/gallery/22.jpg', title: 'Photo 22' },
  { src: '/gallery/23.jpg', title: 'Photo 23' },
  { src: '/gallery/24.jpg', title: 'Photo 24' },
];

const Gallery = () => {
  const [selectedItem, setSelectedItem] = useState(null);

  return (
    <div className="min-h-screen pt-24">
      <section className="py-16">
        <div className="container mx-auto px-4">
          <SectionHeading
            label="Gallery"
            title="Behind the Builds"
            description="A visual journey through prototypes, engineering workspace, and experiments."
          />

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-6xl mx-auto auto-rows-[200px]">
            {galleryItems.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className={`group relative rounded-lg bg-muted border border-border overflow-hidden cursor-pointer hover:border-primary/30 transition-all`}
                onClick={() => setSelectedItem(item)}
              >
                <img
                  src={item.src}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                  <div>
                    <h3 className="text-sm font-semibold">{item.title}</h3>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

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

export default Gallery;
