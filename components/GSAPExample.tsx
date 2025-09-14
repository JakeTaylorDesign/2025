"use client";

import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";

export default function GSAPExample() {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);

  useGSAP(() => {
    // Initial animation when component mounts
    const tl = gsap.timeline();
    
    tl.fromTo(titleRef.current, 
      { 
        y: 50, 
        opacity: 0 
      },
      { 
        y: 0, 
        opacity: 1, 
        duration: 1, 
        ease: "power2.out" 
      }
    )
    .fromTo(textRef.current,
      { 
        y: 30, 
        opacity: 0 
      },
      { 
        y: 0, 
        opacity: 1, 
        duration: 0.8, 
        ease: "power2.out" 
      },
      "-=0.5"
    );

    // ScrollTrigger example
    gsap.fromTo(".scroll-animate",
      { 
        y: 100, 
        opacity: 0 
      },
      { 
        y: 0, 
        opacity: 1, 
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".scroll-animate",
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse"
        }
      }
    );

  }, { scope: containerRef });

  return (
    <div ref={containerRef} className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 
          ref={titleRef}
          className="text-4xl md:text-5xl font-light text-foreground mb-8 text-center"
        >
          GSAP Animation Example
        </h2>
        
        <p 
          ref={textRef}
          className="text-lg text-muted text-center mb-16"
        >
          This demonstrates GSAP animations with ScrollTrigger and other plugins.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="scroll-animate bg-background border border-border rounded-xl p-8">
            <h3 className="text-xl font-medium text-foreground mb-4">
              ScrollTrigger
            </h3>
            <p className="text-muted">
              This element animates when it comes into view during scrolling.
            </p>
          </div>

          <div className="scroll-animate bg-background border border-border rounded-xl p-8">
            <h3 className="text-xl font-medium text-foreground mb-4">
              Inertia Plugin
            </h3>
            <p className="text-muted">
              Perfect for smooth, physics-based animations with momentum.
            </p>
          </div>

          <div className="scroll-animate bg-background border border-border rounded-xl p-8">
            <h3 className="text-xl font-medium text-foreground mb-4">
              MorphSVG Plugin
            </h3>
            <p className="text-muted">
              Great for morphing between different SVG shapes seamlessly.
            </p>
          </div>
        </div>

        <div className="mt-16 text-center">
          <button 
            className="px-8 py-4 bg-accent text-background font-medium rounded-full hover:bg-foreground transition-colors"
            onClick={() => {
              // Example of programmatic animation
              gsap.to(titleRef.current, {
                scale: 1.1,
                duration: 0.3,
                ease: "power2.out",
                yoyo: true,
                repeat: 1
              });
            }}
          >
            Trigger Animation
          </button>
        </div>
      </div>
    </div>
  );
} 