"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { getProjectBySlug } from "@/lib/projects";
import AnimatedSection from "@/components/AnimatedSection";

// Import interactive components for the demo
import ReactBitsDarkVeil from "@/components/ReactBitsDarkVeil";
import SpotlightCard from "@/components/SpotlightCard";
import TiltedCard from "@/components/TiltedCard";
import ScrollFloat from "@/components/ScrollFloat";

export default function ReactBitsProject() {
  const project = getProjectBySlug("reactbits");
  const [activeDemo, setActiveDemo] = useState("dark-veil");

  if (!project) {
    return <div>Project not found</div>;
  }

  const demos = [
    {
      id: "dark-veil",
      title: "Dark Veil Effect",
      description: "Interactive particle system with mouse tracking and dynamic lighting effects.",
      component: <ReactBitsDarkVeil />
    },
    {
      id: "spotlight-card",
      title: "Spotlight Card",
      description: "Card component with mouse-following spotlight effect and smooth animations.",
      component: (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <SpotlightCard className="bg-secondary/50 border border-border p-6">
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Interactive Component</h3>
              <p className="text-muted">Hover over this card to see the spotlight effect in action.</p>
            </div>
          </SpotlightCard>
          <SpotlightCard className="bg-secondary/50 border border-border p-6">
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Another Example</h3>
              <p className="text-muted">Each card responds independently to mouse interactions.</p>
            </div>
          </SpotlightCard>
        </div>
      )
    },
    {
      id: "tilted-card",
      title: "3D Tilted Card",
      description: "Card with 3D tilt effect that follows mouse movement for depth perception.",
      component: (
        <div className="flex justify-center">
          <TiltedCard className="w-64 h-40 bg-gradient-to-br from-blue-500/20 to-purple-500/20 border border-border">
            <div className="p-6 text-center">
              <h3 className="text-lg font-medium text-foreground mb-2">3D Tilt Effect</h3>
              <p className="text-muted">Move your mouse over this card</p>
            </div>
          </TiltedCard>
        </div>
      )
    },
    {
      id: "scroll-float",
      title: "Scroll Float Animation",
      description: "Elements that float and animate based on scroll position and viewport visibility.",
      component: (
        <div className="space-y-8">
          <ScrollFloat delay={0}>
            <div className="bg-secondary/50 border border-border p-6 rounded-xl">
              <h3 className="text-lg font-medium text-foreground mb-2">First Element</h3>
              <p className="text-muted">Animates in first</p>
            </div>
          </ScrollFloat>
          <ScrollFloat delay={0.2}>
            <div className="bg-secondary/50 border border-border p-6 rounded-xl">
              <h3 className="text-lg font-medium text-foreground mb-2">Second Element</h3>
              <p className="text-muted">Follows with a delay</p>
            </div>
          </ScrollFloat>
          <ScrollFloat delay={0.4}>
            <div className="bg-secondary/50 border border-border p-6 rounded-xl">
              <h3 className="text-lg font-medium text-foreground mb-2">Third Element</h3>
              <p className="text-muted">Creates a cascading effect</p>
            </div>
          </ScrollFloat>
        </div>
      )
    }
  ];

  return (
    <main className="pt-24 pb-16 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Back Navigation */}
        <AnimatedSection>
          <div className="mb-8">
            <Link href="/" className="text-accent hover:text-accent/80 transition-colors">
              ← Back to Home
            </Link>
          </div>
        </AnimatedSection>

        {/* Project Header */}
        <AnimatedSection delay={0.1}>
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-light text-foreground mb-6">
              {project.title}
            </h1>
            <p className="text-xl text-muted max-w-3xl mx-auto leading-relaxed">
              {project.description}
            </p>
            <div className="flex flex-wrap justify-center gap-6 mt-8 text-sm text-muted">
              <div><span className="text-foreground">Role:</span> {project.role}</div>
              <div><span className="text-foreground">Year:</span> {project.year}</div>
              <div><span className="text-foreground">Duration:</span> {project.duration}</div>
            </div>
          </div>
        </AnimatedSection>

        {/* Interactive Demo Section */}
        <AnimatedSection delay={0.2}>
          <div className="mb-16">
            <h2 className="text-3xl font-light text-foreground mb-8 text-center">
              Interactive Components
            </h2>
            
            {/* Demo Navigation */}
            <div className="flex flex-wrap justify-center gap-2 mb-8">
              {demos.map((demo) => (
                <button
                  key={demo.id}
                  onClick={() => setActiveDemo(demo.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    activeDemo === demo.id
                      ? "bg-accent text-background"
                      : "bg-secondary/50 text-muted hover:text-foreground border border-border hover:border-accent"
                  }`}
                >
                  {demo.title}
                </button>
              ))}
            </div>

            {/* Active Demo */}
            <div className="bg-secondary/30 border border-border rounded-xl overflow-hidden">
              <div className="p-6 border-b border-border">
                <h3 className="text-xl font-medium text-foreground mb-2">
                  {demos.find(d => d.id === activeDemo)?.title}
                </h3>
                <p className="text-muted">
                  {demos.find(d => d.id === activeDemo)?.description}
                </p>
              </div>
              <div className="p-8 min-h-[300px] relative">
                {demos.find(d => d.id === activeDemo)?.component}
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Project Details */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <AnimatedSection delay={0.3}>
            <div>
              <h3 className="text-2xl font-light text-foreground mb-6">Overview</h3>
              <p className="text-muted leading-relaxed mb-8">
                {project.overview}
              </p>
              
              <h4 className="text-lg font-medium text-foreground mb-4">Challenge</h4>
              <p className="text-muted leading-relaxed">
                {project.challenge}
              </p>
            </div>
          </AnimatedSection>
          
          <AnimatedSection delay={0.4}>
            <div>
              <h4 className="text-lg font-medium text-foreground mb-4">Approach</h4>
              <ul className="space-y-3 mb-8">
                {project.approach.map((item, index) => (
                  <li key={index} className="flex items-start gap-3 text-muted">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                    {item}
                  </li>
                ))}
              </ul>
              
              <h4 className="text-lg font-medium text-foreground mb-4">Results</h4>
              <ul className="space-y-3">
                {project.results.map((result, index) => (
                  <li key={index} className="flex items-start gap-3 text-muted">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                    {result}
                  </li>
                ))}
              </ul>
            </div>
          </AnimatedSection>
        </div>

        {/* Metrics */}
        <AnimatedSection delay={0.5}>
          <div className="bg-secondary/30 border border-border rounded-xl p-8 mb-16">
            <h3 className="text-2xl font-light text-foreground mb-8 text-center">
              Project Metrics
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {project.metrics.map((metric, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl md:text-3xl font-light text-accent mb-2">
                    {metric.value}
                  </div>
                  <div className="text-sm text-muted">
                    {metric.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* Call to Action */}
        <AnimatedSection delay={0.6}>
          <div className="text-center">
            <h3 className="text-2xl font-light text-foreground mb-6">
              Interested in the Code?
            </h3>
            <p className="text-muted mb-8 max-w-2xl mx-auto">
              All components are built with modern React patterns, TypeScript, and performance optimization in mind. 
              Each component is fully documented and ready for production use.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-accent text-background font-medium rounded-full hover:bg-foreground transition-colors">
                View Source Code
              </button>
              <Link href="/">
                <button className="px-8 py-4 border border-border text-foreground font-medium rounded-full hover:border-accent hover:text-accent transition-all duration-300">
                  Back to Projects
                </button>
              </Link>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </main>
  );
}
