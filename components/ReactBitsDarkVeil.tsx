"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

interface ReactBitsDarkVeilProps {
  className?: string;
  style?: React.CSSProperties;
}

export default function ReactBitsDarkVeil({ className = "", style = {} }: ReactBitsDarkVeilProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const veilRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current || !veilRef.current) return;

    const ctx = gsap.context(() => {
      // Create a subtle floating animation for the veil
      gsap.to(veilRef.current, {
        y: -20,
        duration: 8,
        ease: "power2.inOut",
        yoyo: true,
        repeat: -1,
      });

      // Add a gentle opacity pulse
      gsap.to(veilRef.current, {
        opacity: 0.7,
        duration: 4,
        ease: "power2.inOut",
        yoyo: true,
        repeat: -1,
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div 
      ref={containerRef}
      className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}
      style={style}
    >
      {/* Dark Veil Background */}
      <div 
        ref={veilRef}
        className="absolute inset-0 bg-gradient-to-br from-black/40 via-purple-900/20 to-blue-900/30"
        style={{
          backdropFilter: 'blur(100px)',
          WebkitBackdropFilter: 'blur(100px)',
        }}
      />
      
      {/* Animated Particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white/10 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`,
            }}
          />
        ))}
      </div>

      {/* Subtle Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
        }}
      />

      {/* Radial Gradient Overlay */}
      <div className="absolute inset-0 bg-radial-gradient from-transparent via-transparent to-black/20" />
    </div>
  );
} 