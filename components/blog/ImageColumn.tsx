"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface ImageColumnProps {
  images: {
    src: string;
    alt: string;
    caption?: string;
  }[];
}

export default function ImageColumn({ images = [] }: ImageColumnProps) {
  return (
    <motion.div
      className="mt-16 space-y-8"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {images.map((image, index) => (
        <motion.div
          key={index}
          className="group relative overflow-hidden rounded-xl bg-background/50 border border-border backdrop-blur-sm w-full"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <div className="relative w-full h-[400px] md:h-[500px]">
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            
            {/* Caption overlay */}
            {image.caption && (
              <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <p className="text-white text-sm font-medium">
                  {image.caption}
                </p>
              </div>
            )}
            
            {/* Hover effect overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-out"></div>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
}
