"use client";

import { useEffect, useState, useRef } from "react";
import { gsap } from "gsap";

export default function UnicornStudioHero() {
  const [isMounted, setIsMounted] = useState(false);
  const [showFallback, setShowFallback] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const unicornStudioRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsMounted(true);
    
    // Fallback timeout - if Unicorn Studio doesn't load within 3 seconds, show fallback
    const fallbackTimer = setTimeout(() => {
      setShowFallback(true);
    }, 3000);

    return () => clearTimeout(fallbackTimer);
  }, []);

  // Show loading state during SSR and initial client render
  if (!isMounted) {
    return (
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
        <div className="absolute inset-0 flex items-center justify-center bg-background">
          <div className="text-center">
            <div className="w-16 h-16 border-2 border-accent border-t-transparent rounded-full animate-spin mb-4"></div>
            <p className="text-muted">Loading...</p>
          </div>
        </div>
      </section>
    );
  }

  // Show fallback content if Unicorn Studio fails to load
  if (showFallback) {
    return (
      <section ref={sectionRef} className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background pt-32">
        <div className="text-center max-w-4xl mx-auto px-6">
          <h1 className="text-5xl md:text-7xl font-light text-foreground mb-8">
            <span className="font-crimson-bold">Jake Taylor</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted mb-12 max-w-3xl mx-auto">
            Product Strategy & Design Leadership
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-accent text-background font-medium rounded-full hover:bg-foreground transition-colors">
              View Projects
            </button>
            <button className="px-8 py-4 border border-border text-foreground font-medium rounded-full hover:border-accent hover:text-accent transition-all duration-300">
              Read Insights
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section ref={sectionRef} className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background pt-32">
      {/* Unicorn Studio Embed */}
      <div 
        ref={unicornStudioRef}
        data-us-project="XCezUDx8vD1RUo9QgCOd" 
        style={{ width: "1440px", height: "900px" }}
      />
      
      {/* Fallback content overlay */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="text-center max-w-4xl mx-auto px-6">
          <h1 className="text-5xl md:text-7xl font-light text-foreground mb-8 opacity-0">
            <span className="font-crimson-bold">Jake Taylor</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted mb-12 max-w-3xl mx-auto opacity-0">
            Product Strategy & Design Leadership
          </p>
        </div>
      </div>
    </section>
  );
} 