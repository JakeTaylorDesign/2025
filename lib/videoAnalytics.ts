// Video Analytics Utility Functions
export interface VideoEvent {
  videoId: string;
  event: 'play' | 'pause' | 'complete' | 'seek';
  timestamp: string;
  duration?: number;
  source: string;
}

// Track video play event
export const trackVideoPlay = (videoId: string, source: string = 'blog') => {
  const event: VideoEvent = {
    videoId,
    event: 'play',
    timestamp: new Date().toISOString(),
    source
  };
  
  // Log to console for demo purposes
  console.log('🎥 Video Play Event:', event);
  
  // In production, you would send this to your analytics service
  // analytics.track('video_played', event);
  
  return event;
};

// Track video pause event
export const trackVideoPause = (videoId: string, source: string = 'blog') => {
  const event: VideoEvent = {
    videoId,
    event: 'pause',
    timestamp: new Date().toISOString(),
    source
  };
  
  console.log('⏸️ Video Pause Event:', event);
  
  // In production, you would send this to your analytics service
  // analytics.track('video_paused', event);
  
  return event;
};

// Track video completion
export const trackVideoComplete = (videoId: string, duration: number, source: string = 'blog') => {
  const event: VideoEvent = {
    videoId,
    event: 'complete',
    timestamp: new Date().toISOString(),
    duration,
    source
  };
  
  console.log('✅ Video Complete Event:', event);
  
  // In production, you would send this to your analytics service
  // analytics.track('video_completed', event);
  
  return event;
};

// Get video ID from YouTube URL
export const extractVideoId = (url: string): string | null => {
  if (url.includes('youtube.com/embed/')) {
    const match = url.match(/youtube\.com\/embed\/([^?]+)/);
    return match ? match[1] : null;
  }
  
  if (url.includes('youtu.be/')) {
    const match = url.match(/youtu\.be\/([^?]+)/);
    return match ? match[1] : null;
  }
  
  if (url.includes('youtube.com/watch')) {
    const match = url.match(/[?&]v=([^&]+)/);
    return match ? match[1] : null;
  }
  
  return null;
};

// Generate thumbnail URL from video ID
export const getThumbnailUrl = (videoId: string, quality: 'default' | 'medium' | 'high' = 'high'): string => {
  const qualities = {
    default: 'default.jpg',
    medium: 'mqdefault.jpg',
    high: 'hqdefault.jpg'
  };
  
  return `https://img.youtube.com/vi/${videoId}/${qualities[quality]}`;
}; 