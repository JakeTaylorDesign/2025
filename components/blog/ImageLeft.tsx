"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface ImageLeftProps {
  src: string;
  alt: string;
  caption?: string;
  children: React.ReactNode;
}

export default function ImageLeft({ src, alt, caption, children }: ImageLeftProps) {
  return (
    <motion.div
      className="my-8"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {/* Floating image on the left */}
      <div className="float-left mr-6 mb-4 w-64 md:w-80 flex-shrink-0">
        <div className="relative w-full h-48 md:h-64 overflow-hidden rounded-xl">
          <Image
            src={src}
            alt={alt}
            fill
            className="object-cover"
          />
        </div>
        {caption && (
          <p className="mt-3 text-sm text-muted italic">
            {caption}
          </p>
        )}
      </div>
      
      {/* Content that wraps around the image */}
      <div className="prose prose-invert max-w-none">
        {children}
      </div>
      
      {/* Clear the float */}
      <div className="clear-left"></div>
    </motion.div>
  );
} 