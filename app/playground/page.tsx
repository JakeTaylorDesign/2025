"use client";

import { useEffect, useState } from "react";
import { getAllProjects } from "@/lib/projects";
import AnimatedSection from "@/components/AnimatedSection";
import SpotlightCard from "@/components/SpotlightCard";
import Link from "next/link";

export default function PlaygroundPage() {
  const [isLoading, setIsLoading] = useState(true);
  const projects = getAllProjects();

  useEffect(() => {
    // Simulate loading for smooth animation
    const timer = setTimeout(() => setIsLoading(false), 500);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-accent mx-auto mb-4"></div>
          <p className="text-muted">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <main className="pt-24 pb-16 px-6">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <AnimatedSection>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              <span className="font-crimson-bold">Project Playground</span>
            </h1>
          </AnimatedSection>
          
          <AnimatedSection delay={0.2}>
            <p className="text-xl md:text-2xl text-muted leading-relaxed max-w-3xl mx-auto">
              Explore a collection of strategic design projects, team transformations, and 
              innovative solutions that showcase design leadership in action.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Projects Grid Section */}
      <section className="max-w-7xl mx-auto">
        <AnimatedSection delay={0.3}>
          <div className="text-center mb-16">
            <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-4">
              Recent Projects
            </h2>
            <p className="text-muted max-w-2xl mx-auto">
              Strategic design initiatives that transformed teams, processes, and outcomes.
            </p>
          </div>
        </AnimatedSection>

                {projects.length > 0 ? (
          <>
            <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
              {projects.map((project, index) => (
                <AnimatedSection key={project.slug} delay={0.1 * (index + 1)}>
                  <SpotlightCard className="break-inside-avoid mb-8" spotlightColor="rgba(238, 167, 109, 0.25)">
                    <Link href={`/projects/${project.slug}`}>
                      <div className="group cursor-pointer bg-background border border-border rounded-xl overflow-hidden hover:border-accent transition-all duration-300">
                        <div className="flex flex-col">
                          {/* Project Image */}
                          <div className="relative h-48 overflow-hidden">
                            {project.images?.hero ? (
                              <img
                                src={project.images.hero}
                                alt={project.title}
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                              />
                            ) : (
                              <div className={`absolute inset-0 bg-gradient-to-br ${project.placeholderColor} flex items-center justify-center`}>
                                <div className="text-center">
                                  <div className="w-16 h-16 mx-auto mb-4 bg-white/10 rounded-full flex items-center justify-center">
                                    <div className="w-8 h-8 bg-white/20 rounded"></div>
                                  </div>
                                  <div className="text-white/60 text-sm font-medium">
                                    {project.title.replace('®', '')}
                                  </div>
                                </div>
                              </div>
                            )}
                            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>
                          </div>
                          
                          {/* Project Content */}
                          <div className="p-8 flex flex-col">
                            <div className="mb-6">
                              <h3 className="text-2xl font-medium text-foreground group-hover:text-accent transition-colors mb-2">
                                {project.title}
                              </h3>
                              <p className="text-sm text-accent font-medium tracking-wide uppercase">
                                {project.role}
                              </p>
                            </div>

                            <p className="text-muted leading-relaxed mb-6">
                              {project.description}
                            </p>
                            
                            <div className="pt-6 border-t border-border">
                              <span className="text-sm text-muted group-hover:text-accent transition-colors">
                                View Post →
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </SpotlightCard>
                </AnimatedSection>
              ))}
            </div>


          </>
        ) : (
          <div className="text-center py-16">
            <p className="text-muted">No projects available at the moment.</p>
          </div>
        )}
      </section>
    </main>
  );
} 