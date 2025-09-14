"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Link from "next/link";
import Image from "next/image";

const testimonials = [
  {
    quote: "He is very capable managing a large design team that has to juggle a ton of different programs we would throw his way - he is strong at both understanding the problem to be solved as well as managing expectations so that we could manage the pace of portfolio development with few surprises.",
    author: "Greg Armanini",
    role: "VP, Product Management",
    company: "JumpCloud",
    image: "/images/testimonials/greg.png"
  },
  {
    quote: "As a leader, I appreciate Jake's empathetic and clear style. In our work together, he excelled at building relationships with his business and engineering partners. Within the UX team, he built solid relationships with his peer managers, his team, and the entire UX team.",
    author: "Kim Wachtel",
    role: "VP, Product Design",
    company: "JumpCloud",
    image: "/images/testimonials/kim.png"
  },
  {
    quote: "Jake is an exceptional UX leader. His empathetic and visionary design leadership sets him apart. Jake's servant-leader approach is remarkable – he guides his team with expertise and empowers them to flourish. His deep understanding of design thinking and user research is evident in his consistently bringing a user-centered design approach to every project.",
    author: "Erica Wilhelmy",
    role: "Director, Product Design",
    company: "JumpCloud",
    image: "/images/testimonials/erica.png"
  },
  {
    quote: "As a Design Leader at JumpCloud, he excelled at guiding a team of designers toward a consistent and excellent user experience throughout our Devices functionality. He mentored designers and brought them up to new skill levels, and enabled his most talented designers to flourish throughout the organization and help them see where they could hone their craft even further.",
    author: "Tom Bridge",
    role: "Director, Product Management",
    company: "JumpCloud",
    image: "/images/testimonials/john.png"
  },
  {
    quote: "Jake is a designer that understands that ultimately design is about solving problems and not about making things look pretty. He is a critical thinker that is not afraid to ask the difficult questions, reform his own opinions and approach problems from an angle that others may have missed. I was impressed with his grasp of complex user interface and interaction issues and how quickly he was able to translate his experience into true knowledge.",
    author: "Jonathan Jaynes",
    role: "UX Director",
    company: "CQG",
    image: "/images/testimonials/JJ.png"
  }
];

export default function ContinuousTestimonialCarousel() {
  const containerRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<gsap.core.Timeline | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    const cards = container.querySelectorAll('.testimonial-card');
    
    // Only clone if not already cloned (prevent multiple cloning)
    const existingClones = container.querySelectorAll('[data-cloned="true"]');
    if (existingClones.length === 0) {
      cards.forEach(card => {
        const clone = card.cloneNode(true) as HTMLElement;
        clone.setAttribute('data-cloned', 'true');
        container.appendChild(clone);
      });
    }

    // Calculate total width for infinite scroll
    const cardWidth = (cards[0] as HTMLElement)?.offsetWidth || 400;
    const totalCards = cards.length;
    const totalWidth = cardWidth * totalCards;

    // Create infinite scroll animation with slower speed and better performance
    const tl = gsap.timeline({ 
      repeat: -1,
      // Use force3D for hardware acceleration
      force3D: true
    });
    
    tl.to(container, {
      x: -totalWidth,
      duration: 60, // 60 seconds for one complete cycle (slower)
      ease: "none",
      // Optimize for performance
      force3D: true,
    });

    timelineRef.current = tl;

    return () => {
      tl.kill();
      timelineRef.current = null;
    };
  }, []);

  return (
    <div className="mt-20 relative overflow-hidden">
      {/* Gradient overlays for fade effect */}
      <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
      
      {/* Carousel container */}
      <div 
        ref={containerRef}
        className="flex gap-6 py-8"
        style={{ 
          width: 'max-content',
          willChange: 'transform',
          // Add additional GPU optimization
          backfaceVisibility: 'hidden',
          perspective: '1000px'
        }}
      >
        {testimonials.map((testimonial, index) => (
          <div 
            key={`${testimonial.author}-${index}`}
            className="testimonial-card flex-shrink-0 w-80 bg-background/50 border border-border rounded-xl p-6 backdrop-blur-sm hover:border-accent/50 transition-all duration-300 group"
          >
            <div className="space-y-4">
              {/* Quote */}
              <blockquote className="text-sm text-muted leading-relaxed line-clamp-4">
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>
              
              {/* Author info */}
              <div className="border-t border-border pt-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 overflow-hidden">
                    {testimonial.image ? (
                      <Image 
                        src={testimonial.image}
                        alt={`${testimonial.author}`}
                        width={48}
                        height={48}
                        className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-300 ease-in-out"
                        loading="lazy"
                      />
                    ) : null}
                    {/* Fallback placeholder */}
                    <div className={`w-full h-full bg-gradient-to-br from-accent/20 to-accent/10 rounded-full flex items-center justify-center ${testimonial.image ? 'hidden' : ''}`}>
                      <div className="w-6 h-6 bg-accent/30 rounded-full"></div>
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="font-medium text-foreground group-hover:text-accent transition-colors">
                      {testimonial.author}
                    </div>
                    <div className="text-muted text-sm">
                      {testimonial.role}
                    </div>
                    <div className="text-xs text-muted">
                      {testimonial.company}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* View All Link */}
      <div className="text-center mt-8">
        <Link 
          href="/testimonials" 
          className="text-accent hover:text-foreground transition-colors duration-300 text-sm font-medium"
        >
          View All
        </Link>
      </div>
    </div>
  );
} 