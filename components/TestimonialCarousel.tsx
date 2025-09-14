"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import AnimatedSection from "./AnimatedSection";

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
    quote: "Jake is a designer that understands that ultimately design is about solving problems and not about making things look pretty. He is a critical thinker that is not afraid to ask the difficult questions, reform his own opinions and approach problems from an angle that others may have missed.",
    author: "Jonathan Jaynes",
    role: "UX Director",
    company: "CQG",
    image: "/images/testimonials/JJ.png"
  }
];

export default function TestimonialCarousel() {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Auto-advance carousel
      const interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
      }, 5000);

      return () => clearInterval(interval);
    }, carouselRef);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    if (carouselRef.current) {
      const container = carouselRef.current;
      const cardWidth = container.offsetWidth;
      const scrollPosition = currentIndex * cardWidth;
      
      // Use requestAnimationFrame for better performance
      requestAnimationFrame(() => {
        gsap.to(container, {
          scrollLeft: scrollPosition,
          duration: 0.8,
          ease: "power2.out"
        });
      });
    }
  }, [currentIndex]);

  return (
    <AnimatedSection delay={0.8}>
      <div className="mt-20">
        <h3 className="text-2xl font-light text-foreground mb-8 text-center">
          Kind Words from Colleagues
        </h3>
        
        <div className="relative">
          {/* Carousel Container */}
          <div 
            ref={carouselRef}
            className="flex overflow-x-hidden scroll-smooth snap-x snap-mandatory"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className="flex-shrink-0 w-full snap-start px-4"
              >
                <div className="max-w-2xl mx-auto">
                  <div className="bg-background/50 border border-border rounded-xl p-8 backdrop-blur-sm">
                    <blockquote className="text-lg text-muted leading-relaxed mb-6">
                      &ldquo;{testimonial.quote}&rdquo;
                    </blockquote>
                    <div className="border-t border-border pt-6">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 overflow-hidden">
                          {testimonial.image ? (
                            <img 
                              src={testimonial.image} 
                              alt={`${testimonial.author}`}
                              className="w-full h-full object-cover"
                              onError={(e) => {
                                // Fallback to placeholder if image fails to load
                                const target = e.target as HTMLImageElement;
                                target.style.display = 'none';
                                target.nextElementSibling?.classList.remove('hidden');
                              }}
                            />
                          ) : null}
                          {/* Fallback placeholder */}
                          <div className={`w-full h-full bg-gradient-to-br from-accent/20 to-accent/10 rounded-full flex items-center justify-center ${testimonial.image ? 'hidden' : ''}`}>
                            <div className="w-6 h-6 bg-accent/30 rounded-full"></div>
                          </div>
                        </div>
                        <div className="flex-1">
                          <div className="font-medium text-foreground">
                            {testimonial.author}
                          </div>
                          <div className="text-muted">
                            {testimonial.role}
                          </div>
                          <div className="text-sm text-muted">
                            {testimonial.company}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center mt-8 gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-accent w-6' 
                    : 'bg-border hover:bg-muted'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
} 