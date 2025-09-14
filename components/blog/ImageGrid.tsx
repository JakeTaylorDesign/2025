"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { usePathname } from "next/navigation";

interface ImageGridProps {
  images?: {
    src: string;
    alt: string;
    caption?: string;
  }[];
}

export default function ImageGrid({ images = [] }: ImageGridProps) {
  const pathname = usePathname();
  
  // Auto-detect images based on the current page
  const autoImages = () => {
    if (pathname.includes('team-building-india')) {
      return [
        { src: '/images/blog/India/IMG_1578.jpg', alt: 'Team collaboration in India' },
        { src: '/images/blog/India/IMG_1580.jpg', alt: 'Team building activities' },
        { src: '/images/blog/India/IMG_1594.jpg', alt: 'Local leadership in action' },
        { src: '/images/blog/India/IMG_1611.jpg', alt: 'Cultural immersion' },
        { src: '/images/blog/India/IMG_1613.jpg', alt: 'Modern design teams in India' },
        { src: '/images/blog/India/IMG_1623.jpg', alt: 'Team building experience' },
        { src: '/images/blog/India/IMG_1625.jpg', alt: 'Collaborative spirit' },
        { src: '/images/blog/India/IMG_1627.jpg', alt: 'Design team activities' },
        { src: '/images/blog/India/IMG_1639.jpg', alt: 'Cultural richness' },
        { src: '/images/blog/India/IMG_1640.jpg', alt: 'Team connections' },
        { src: '/images/blog/India/IMG_1643.jpg', alt: 'Bangalore team building' },
      ];
    }
    return images;
  };

  const displayImages = autoImages();
  return (
    <motion.div
      className="mt-16"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr">
        {displayImages.map((image, index) => (
          <motion.div
            key={index}
            className={`group relative overflow-hidden rounded-xl bg-background/50 border border-border backdrop-blur-sm ${
              index === 0 ? 'md:col-span-2 md:row-span-2' : 
              index === 1 ? 'md:col-span-1 md:row-span-2' :
              index === 2 ? 'md:col-span-1 md:row-span-1' :
              index === 3 ? 'md:col-span-1 md:row-span-1' :
              index === 4 ? 'md:col-span-2 md:row-span-1' :
              index === 5 ? 'md:col-span-1 md:row-span-1' :
              index === 6 ? 'md:col-span-1 md:row-span-1' :
              index === 7 ? 'md:col-span-1 md:row-span-1' :
              'md:col-span-1 md:row-span-1'
            }`}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className="relative w-full h-full min-h-[200px] md:min-h-[250px]">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              {/* Caption overlay */}
              {image.caption && (
                <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
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
      </div>
    </motion.div>
  );
} 