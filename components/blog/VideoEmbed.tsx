"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { trackVideoPlay, trackVideoPause, extractVideoId } from "@/lib/videoAnalytics";

interface VideoEmbedProps {
  src: string;
  title: string;
  caption?: string;
  className?: string;
  customControls?: boolean;
  analytics?: boolean;
  onPlay?: () => void;
  onPause?: () => void;
}

export default function VideoEmbed({ 
  src, 
  title, 
  caption, 
  className = "",
  customControls = false,
  analytics = false,
  onPlay,
  onPause
}: VideoEmbedProps) {
  const [isPlaying, setIsPlaying] = useState(true);

  // Enhanced YouTube URL with custom parameters
  const getEnhancedSrc = (originalSrc: string) => {
    if (originalSrc.includes('youtube.com/embed')) {
      const baseUrl = originalSrc.split('?')[0];
      const params = new URLSearchParams();
      
      // Custom YouTube parameters for better user experience
      params.set('rel', '0'); // Don't show related videos
      params.set('modestbranding', '1'); // Minimal YouTube branding
      params.set('controls', '1'); // Show player controls
      params.set('showinfo', '0'); // Hide video title and uploader info
      params.set('iv_load_policy', '3'); // Hide video annotations
      params.set('cc_load_policy', '1'); // Show closed captions if available
      params.set('fs', '1'); // Allow fullscreen
      
      return `${baseUrl}?${params.toString()}`;
    }
    return originalSrc;
  };

  const handlePlay = () => {
    setIsPlaying(true);
    if (analytics && onPlay) {
      onPlay();
    }
    // Track video play for analytics
    if (analytics) {
      const videoId = extractVideoId(src);
      if (videoId) {
        trackVideoPlay(videoId, 'blog');
      }
    }
  };

  const handlePause = () => {
    if (analytics && onPause) {
      onPause();
    }
    // Track video pause for analytics
    if (analytics) {
      const videoId = extractVideoId(src);
      if (videoId) {
        trackVideoPause(videoId, 'blog');
      }
    }
  };

  return (
    <div className={`my-8 ${className}`}>
      <AnimatePresence>
        {!isPlaying ? (
          <motion.div
            key="thumbnail"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="relative cursor-pointer group"
            onClick={handlePlay}
          >
            <div className="relative aspect-video bg-secondary rounded-lg overflow-hidden shadow-lg">
              <Image
                src={`/api/placeholder/800/450?text=${encodeURIComponent(title)}`}
                alt={title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors"></div>
              
              {/* Enhanced Play Button */}
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  className="w-20 h-20 bg-white/95 rounded-full flex items-center justify-center shadow-2xl group-hover:scale-110 transition-all duration-300 border-4 border-white/20"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <svg className="w-10 h-10 text-black ml-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </motion.div>
              </div>
              
              {/* Video Info Overlay */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                <h3 className="text-lg font-semibold text-white mb-1">
                  {title}
                </h3>
                {caption && (
                  <p className="text-sm text-white/80">
                    {caption}
                  </p>
                )}
              </div>
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="video"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            className="relative aspect-video bg-secondary rounded-lg overflow-hidden shadow-xl"
          >
            <iframe
              src={getEnhancedSrc(src)}
              title={title}
              className="w-full h-full"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              onLoad={handlePlay}
            />
            
            {/* Custom Controls Overlay (if enabled) */}
            {customControls && (
              <div className="absolute top-4 right-4 flex gap-2">
                <button
                  onClick={handlePause}
                  className="w-8 h-8 bg-black/50 hover:bg-black/70 text-white rounded-full flex items-center justify-center transition-colors"
                  title="Pause"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
                  </svg>
                </button>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* Enhanced Caption Display */}
      {caption && !isPlaying && (
        <motion.p 
          className="text-sm text-muted mt-3 text-center italic"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          {caption}
        </motion.p>
      )}
    </div>
  );
} 