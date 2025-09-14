"use client";

import { useEffect, useState } from "react";

export default function PerformanceMonitor() {
  const [fps, setFps] = useState(0);
  const [memory, setMemory] = useState<{ used: number; total: number } | null>(null);

  useEffect(() => {
    let frameCount = 0;
    let lastTime = performance.now();
    let animationId: number;

    const measureFPS = () => {
      frameCount++;
      const currentTime = performance.now();
      
      if (currentTime - lastTime >= 1000) {
        setFps(Math.round((frameCount * 1000) / (currentTime - lastTime)));
        frameCount = 0;
        lastTime = currentTime;
      }

      // Check memory usage if available
      if ('memory' in performance) {
        const mem = (performance as any).memory;
        setMemory({
          used: Math.round(mem.usedJSHeapSize / 1024 / 1024),
          total: Math.round(mem.totalJSHeapSize / 1024 / 1024)
        });
      }

      animationId = requestAnimationFrame(measureFPS);
    };

    animationId = requestAnimationFrame(measureFPS);

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, []);

  // Only show in development
  if (process.env.NODE_ENV !== 'development') {
    return null;
  }

  return (
    <div className="fixed bottom-4 right-4 bg-black/80 text-white p-3 rounded-lg text-xs font-mono z-50">
      <div>FPS: {fps}</div>
      {memory && (
        <div>Memory: {memory.used}MB / {memory.total}MB</div>
      )}
    </div>
  );
} 