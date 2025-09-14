"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

interface ScrollFloatProps {
  children: React.ReactNode;
  className?: string;
  floatDistance?: number;
  duration?: number;
  ease?: string;
  threshold?: number;
  delay?: number;
  parallax?: boolean;
  parallaxStrength?: number;
}

export default function ScrollFloat({
  children,
  className = "",
  floatDistance = 30,
  duration = 1.2,
  ease = "power2.out",
  threshold = 0.1,
  delay = 0,
  parallax = false,
  parallaxStrength = 0.5,
}: ScrollFloatProps) {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    // Register ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger);

    // Set initial state - element starts slightly up and transparent
    gsap.set(element, {
      y: -floatDistance,
      opacity: 0,
    });

    // Create the floating animation
    const animation = gsap.to(element, {
      y: 0,
      opacity: 1,
      duration,
      ease,
      delay,
      scrollTrigger: {
        trigger: element,
        start: `top ${(1 - threshold) * 100}%`,
        end: "bottom 20%",
        toggleActions: "play none none none",
        // Add a subtle floating effect during scroll (throttled for performance)
        onUpdate: (self) => {
          // Throttle updates to improve performance
          if (self.progress % 0.1 < 0.05) {
            const progress = self.progress;
            const floatOffset = Math.sin(progress * Math.PI * 2) * 3;
            
            if (parallax) {
              // Add parallax effect
              const scrollProgress = self.progress;
              const parallaxOffset = scrollProgress * parallaxStrength * 30;
              gsap.set(element, {
                y: floatOffset + parallaxOffset,
              });
            } else {
              gsap.set(element, {
                y: floatOffset,
              });
            }
          }
        },
      },
    });

    // Add parallax effect if enabled
    if (parallax) {
      const parallaxAnimation = gsap.to(element, {
        y: parallaxStrength * 100,
        ease: "none",
        scrollTrigger: {
          trigger: element,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });

      return () => {
        animation.kill();
        parallaxAnimation.kill();
        ScrollTrigger.getAll().forEach((trigger) => {
          if (trigger.trigger === element) {
            trigger.kill();
          }
        });
      };
    }

    return () => {
      animation.kill();
      ScrollTrigger.getAll().forEach((trigger) => {
        if (trigger.trigger === element) {
          trigger.kill();
        }
      });
    };
  }, [floatDistance, duration, ease, threshold, delay, parallax, parallaxStrength]);

  return (
    <div ref={elementRef} className={className}>
      {children}
    </div>
  );
} 