"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

interface EnhancedVideoEmbedProps {
  src: string;
  title: string;
  caption?: string;
  className?: string;
  poster?: string;
  videoType?: 'youtube' | 'vimeo' | 'self-hosted' | 'external';
  autoplay?: boolean;
  muted?: boolean;
  loop?: boolean;
  controls?: boolean;
  aspectRatio?: '16:9' | '4:3' | '1:1' | '21:9';
}

export default function EnhancedVideoEmbed({ 
  src, 
  title, 
  caption, 
  className = "",
  poster,
  videoType = 'external',
  autoplay = false,
  muted = true,
  loop = false,
  controls = true,
  aspectRatio = '16:9'
}: EnhancedVideoEmbedProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [thumbnailSrc, setThumbnailSrc] = useState<string>('');

  // Generate aspect ratio classes
  const aspectRatioClasses = {
    '16:9': 'aspect-video',
    '4:3': 'aspect-4/3',
    '1:1': 'aspect-square',
    '21:9': 'aspect-21/9'
  };

  // Extract video ID and generate embed URL
  const getEmbedUrl = (url: string, type: string) => {
    if (type === 'youtube') {
      const videoId = url.match(/(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/)?.[1];
      if (videoId) {
        const params = new URLSearchParams({
          autoplay: autoplay ? '1' : '0',
          mute: muted ? '1' : '0',
          loop: loop ? '1' : '0',
          controls: controls ? '1' : '0',
          rel: '0',
          modestbranding: '1'
        });
        return `https://www.youtube.com/embed/${videoId}?${params.toString()}`;
      }
    } else if (type === 'vimeo') {
      const videoId = url.match(/vimeo\.com\/(?:.*#|.*\/videos\/)?([0-9]+)/)?.[1];
      if (videoId) {
        const params = new URLSearchParams({
          autoplay: autoplay ? '1' : '0',
          muted: muted ? '1' : '0',
          loop: loop ? '1' : '0',
          controls: controls ? '1' : '0',
          title: '0',
          byline: '0',
          portrait: '0'
        });
        return `https://player.vimeo.com/video/${videoId}?${params.toString()}`;
      }
    }
    return url;
  };

  // Generate thumbnail for external videos
  useEffect(() => {
    if (poster) {
      setThumbnailSrc(poster);
    } else if (videoType === 'youtube') {
      const videoId = src.match(/(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/)?.[1];
      if (videoId) {
        setThumbnailSrc(`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`);
      }
    } else if (videoType === 'vimeo') {
      const videoId = src.match(/vimeo\.com\/(?:.*#|.*\/videos\/)?([0-9]+)/)?.[1];
      if (videoId) {
        // Vimeo requires API call for thumbnails, using placeholder for now
        setThumbnailSrc(`/api/placeholder/800/450?text=${encodeURIComponent(title)}`);
      }
    } else {
      setThumbnailSrc(`/api/placeholder/800/450?text=${encodeURIComponent(title)}`);
    }
  }, [src, poster, videoType, title]);

  const handlePlay = () => {
    setIsLoading(true);
    setIsPlaying(true);
  };

  const handleIframeLoad = () => {
    setIsLoading(false);
  };

  const handleVideoLoad = () => {
    setIsLoading(false);
    if (videoRef.current) {
      videoRef.current.play();
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
            <div className={`relative ${aspectRatioClasses[aspectRatio]} bg-secondary rounded-lg overflow-hidden`}>
              <Image
                src={thumbnailSrc}
                alt={title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
              
              {/* Play Button */}
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <svg className="w-8 h-8 text-black ml-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </motion.div>
              </div>

              {/* Video Type Badge */}
              <div className="absolute top-4 right-4">
                <span className="px-2 py-1 text-xs font-medium bg-black/60 text-white rounded-md">
                  {videoType === 'youtube' ? 'YouTube' : 
                   videoType === 'vimeo' ? 'Vimeo' : 
                   videoType === 'self-hosted' ? 'Video' : 'External'}
                </span>
              </div>
            </div>
            
            {title && (
              <h3 className="text-lg font-medium text-foreground mt-4 mb-2">
                {title}
              </h3>
            )}
          </motion.div>
        ) : (
          <motion.div
            key="video"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className={`relative ${aspectRatioClasses[aspectRatio]} bg-secondary rounded-lg overflow-hidden`}
          >
            {/* Loading State */}
            {isLoading && (
              <div className="absolute inset-0 flex items-center justify-center bg-secondary z-10">
                <div className="text-center">
                  <div className="w-8 h-8 border-2 border-accent border-t-transparent rounded-full animate-spin mb-2"></div>
                  <p className="text-sm text-muted">Loading video...</p>
                </div>
              </div>
            )}

            {/* Self-hosted video */}
            {videoType === 'self-hosted' ? (
              <video
                ref={videoRef}
                src={src}
                poster={poster}
                controls={controls}
                autoPlay={autoplay}
                muted={muted}
                loop={loop}
                className="w-full h-full object-cover"
                onLoadedData={handleVideoLoad}
              >
                Your browser does not support the video tag.
              </video>
            ) : (
              /* External video (YouTube, Vimeo, etc.) */
              <iframe
                src={getEmbedUrl(src, videoType)}
                title={title}
                className="w-full h-full"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                onLoad={handleIframeLoad}
              />
            )}
          </motion.div>
        )}
      </AnimatePresence>
      
      {caption && (
        <p className="text-sm text-muted mt-3 text-center italic">
          {caption}
        </p>
      )}
    </div>
  );
} 