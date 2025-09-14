"use client";

import { memo } from "react";
import Image from "next/image";
import SpotlightCard from "@/components/SpotlightCard";

// Static testimonials data - no animations
const testimonials = [
  {
    quote: "He is very capable managing a large design team that has to juggle a ton of different programs we would throw his way - he is strong at both understanding the problem to be solved as well as managing expectations.",
    author: "Greg Armanini",
    role: "VP, Product Management",
    company: "JumpCloud",
    image: "/images/testimonials/greg.png"
  },
  {
    quote: "As a leader, I appreciate Jake's empathetic and clear style. In our work together, he excelled at building relationships with his business and engineering partners.",
    author: "Kim Wachtel",
    role: "VP, Product Design",
    company: "JumpCloud",
    image: "/images/testimonials/kim.png"
  },
  {
    quote: "Jake is an exceptional UX leader. His empathetic and visionary design leadership sets him apart. Jake's servant-leader approach is remarkable.",
    author: "Erica Wilhelmy",
    role: "Director, Product Design",
    company: "JumpCloud",
    image: "/images/testimonials/erica.png"
  }
];

function AboutApproach() {
  return (
    <section className="py-24 px-6 relative overflow-hidden bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        {/* Main About Content */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-light text-foreground mb-8 font-museo-moderna">
            About Me
          </h2>
          <p className="text-xl text-muted max-w-4xl mx-auto leading-relaxed">
            A seasoned product and design leader with 20 years of experience driving innovation and growth in SaaS and enterprise applications. Proven ability to define and execute product vision, build high-performing cross-functional teams, and deliver data-driven solutions that solve complex business problems and delight users.
          </p>
        </div>


        {/* Static Testimonials Grid */}
        {/* Temporarily hidden
        <div className="text-center mb-12">
          <h3 className="text-2xl md:text-3xl font-light text-foreground mb-4">
            What Colleagues Say
          </h3>
          <p className="text-muted max-w-2xl mx-auto">
            Insights from leaders and collaborators I've had the privilege to work with.
          </p>
        </div>
        */}
        
        <div className="grid md:grid-cols-3 gap-4 mb-12 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <SpotlightCard 
              key={`${testimonial.author}-${index}`}
              className="bg-background/50 rounded-xl p-4 backdrop-blur-sm transition-all duration-300"
              spotlightColor="rgba(238, 167, 109, 0.25)"
            >
              <div className="space-y-4">
                {/* Quote */}
                <blockquote className="text-base text-white leading-relaxed">
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
                          className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-300"
                          loading="lazy"
                        />
                      ) : (
                        <div className="w-full h-full bg-gradient-to-br from-accent/20 to-accent/10 rounded-full flex items-center justify-center">
                          <div className="w-6 h-6 bg-accent/30 rounded-full"></div>
                        </div>
                      )}
                    </div>
                    <div className="flex-1">
                      <div className="font-medium" style={{ color: '#EEA76D' }}>
                        {testimonial.author}
                      </div>
                      <div className="text-xs text-gray-300">
                        {testimonial.role}
                      </div>
                      <div className="text-xs text-gray-400">
                        {testimonial.company}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SpotlightCard>
          ))}
        </div>
        
        {/* Call to Action */}
        <div className="text-center">
          <a 
            href="/testimonials" 
            className="inline-flex items-center text-accent hover:text-foreground transition-colors duration-300 text-sm font-medium"
          >
            View All
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}

// Memoize the component to prevent unnecessary re-renders
export default memo(AboutApproach);