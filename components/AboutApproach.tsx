"use client";

import { memo } from "react";
import ContinuousTestimonialCarousel from "./ContinuousProjectCarousel";

function AboutApproach() {
  return (
    <section className="about-section py-64 px-6 relative overflow-hidden">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-light text-foreground mb-20 text-center font-museo-moderna">
          About Me
        </h2>
        
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div className="space-y-8">
            <p className="text-lg text-muted leading-relaxed">
              I believe great design starts with understanding people, their needs, 
              and the context in which they&apos;ll interact with our products. As a design 
              leader, I focus on building systems, processes, and teams that deliver 
              consistent, meaningful experiences.
            </p>
            <p className="text-lg text-muted leading-relaxed">
              My approach combines strategic thinking with hands-on execution, 
              always keeping the user at the center while balancing business objectives 
              and technical constraints.
            </p>
          </div>
          <div className="space-y-8">
            <div className="border-l-2 border-accent pl-6">
              <h3 className="text-xl font-medium text-foreground mb-3">Strategy</h3>
              <p className="text-muted">
                Aligning design decisions with business goals and user needs
              </p>
            </div>
            <div className="border-l-2 border-border pl-6">
              <h3 className="text-xl font-medium text-foreground mb-3">Systems</h3>
              <p className="text-muted">
                Building scalable design systems and efficient workflows
              </p>
            </div>
            <div className="border-l-2 border-border pl-6">
              <h3 className="text-xl font-medium text-foreground mb-3">Leadership</h3>
              <p className="text-muted">
                Empowering teams to do their best work and grow professionally
              </p>
            </div>
          </div>
        </div>
        
        {/* Continuous Testimonial Carousel */}
        <ContinuousTestimonialCarousel />
      </div>
    </section>
  );
}

// Memoize the component to prevent unnecessary re-renders
export default memo(AboutApproach); 