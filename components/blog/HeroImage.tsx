"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface HeroImageProps {
  src: string;
  alt: string;
  caption?: string;
}

export default function HeroImage({ src, alt, caption }: HeroImageProps) {
  return (
    <motion.div
      className="relative w-full mb-12"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="relative w-full h-96 md:h-[500px] overflow-hidden rounded-2xl">
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
      </div>
      
      {caption && (
        <motion.p
          className="mt-4 text-sm text-muted text-center italic"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          {caption}
        </motion.p>
      )}
    </motion.div>
  );
} 