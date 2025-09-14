"use client";

import { useEffect, useState } from "react";
import dynamic from 'next/dynamic';
import { motion } from "framer-motion";

// Lazy load heavy WebGL component
const FaultyTerminal = dynamic(() => import("@/components/FaultyTerminal"), {
  ssr: false,
  loading: () => (
    <div className="absolute inset-0 bg-background/50 flex items-center justify-center">
      <div className="text-center">
        <div className="w-8 h-8 border-2 border-accent border-t-transparent rounded-full animate-spin mb-2"></div>
        <p className="text-sm text-muted">Loading...</p>
      </div>
    </div>
  )
});
import AnimatedSection from "@/components/AnimatedSection";
import BlogCard from "@/components/BlogCard";
import AboutApproach from "@/components/AboutApproachOptimized";
import PerformanceMonitor from "@/components/PerformanceMonitor";
import SpotlightCard from "@/components/SpotlightCard";
import { getAllProjects } from "@/lib/projects";
import { getAllPosts } from "@/lib/mdx";
import Link from "next/link";

export default function HomePage() {
  const [componentError, setComponentError] = useState<string | null>(null);
  const projects = getAllProjects();
  const posts = getAllPosts().slice(0, 3); // Get latest 3 posts

  useEffect(() => {
    // Component initialization if needed
  }, []);

  // Show error state if component failed to load
  if (componentError) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-900 to-purple-900 flex items-center justify-center">
        <div className="text-center">
          <div className="text-red-400 text-xl mb-4">Component Error</div>
          <div className="text-white/80 mb-4">{componentError}</div>
          <button 
            onClick={() => setComponentError(null)}
            className="px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white hover:bg-white/20 transition-colors"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <main className="relative">
      {/* Hero Section with Faulty Terminal Background */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background pt-32">
        <div style={{ width: '100%', height: '100%', position: 'absolute', top: 0, left: 0 }}>
          <FaultyTerminal
            scale={2.0}
            gridMul={[2, 1]}
            digitSize={2.0}
            timeScale={1.0}
            pause={false}
            scanlineIntensity={0.6}
            glitchAmount={0.8}
            flickerAmount={0.5}
            noiseAmp={0.4}
            chromaticAberration={0.1}
            dither={0.2}
            curvature={0.2}
            tint="#EEA76D"
            mouseReact={true}
            mouseStrength={0.3}
            pageLoadAnimation={true}
            brightness={0.4}
            dpr={1}
            className=""
            style={{}}
          />
        </div>
        <motion.div 
          className="text-center max-w-4xl mx-auto px-6 relative z-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <motion.h1 
            className="text-5xl md:text-7xl font-light text-foreground mb-8"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <span className="font-ibm-plex-mono">Jake Taylor</span>
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl text-gray-200 mb-12 max-w-3xl mx-auto font-courier-prime"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            Product Strategy & Design Leadership
          </motion.p>
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.6 }}
          >
            <motion.button 
              className="px-8 py-4 bg-accent text-background font-medium rounded-full hover:bg-foreground transition-colors"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              View Projects
            </motion.button>
            <motion.button 
              className="px-8 py-4 border border-border text-foreground font-medium rounded-full hover:border-accent hover:text-accent transition-all duration-300"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Read Insights
            </motion.button>
          </motion.div>
        </motion.div>
      </section>
      
      {/* About My Approach Section - Performance Optimized */}
      <AboutApproach />

      {/* Featured Projects Section - Performance Optimized */}
      <section className="py-24 px-6 bg-secondary/30">
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light text-foreground mb-6 font-tilt-prism">
              Playground
            </h2>
            <p className="text-xl text-muted max-w-3xl mx-auto">
              Learnings, explorations, and artifacts created using GenAI & IDEs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.slice(0, 6).map((project, index) => (
              <SpotlightCard key={project.slug} className="h-full" spotlightColor="rgba(238, 167, 109, 0.25)">
                <Link href={`/projects/${project.slug}`}>
                  <div className="group cursor-pointer bg-background border border-border rounded-xl overflow-hidden hover:border-accent transition-all duration-300 h-full">
                    <div className="flex flex-col h-full">
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
                      <div className="p-8 flex flex-col flex-grow">
                        <div className="mb-6">
                          <h3 className="text-2xl font-medium text-foreground group-hover:text-accent transition-colors mb-2">
                            {project.title}
                          </h3>
                          <p className="text-sm text-accent font-medium tracking-wide uppercase">
                            {project.role}
                          </p>
                        </div>

                        <p className="text-muted leading-relaxed flex-grow">
                          {project.description.length > 73 ? `${project.description.substring(0, 73)}...` : project.description}
                        </p>
                        
                        <div className="mt-6 pt-6 border-t border-border">
                          <span className="text-sm text-muted group-hover:text-accent transition-colors">
                            View Case Study →
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </SpotlightCard>
            ))}
          </div>

          <div className="text-center mt-16">
            <button className="px-8 py-4 border border-border text-foreground font-medium rounded-full hover:border-accent hover:text-accent transition-all duration-300">
              View All Projects
            </button>
          </div>
        </div>
      </section>

      {/* Latest Insights Section - Performance Optimized */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light text-foreground mb-6 font-nothing-you-could-do">
              Thoughts
            </h2>
            <p className="text-xl text-muted max-w-3xl mx-auto">
              Thoughts on design leadership, building teams, and creating 
              meaningful digital experiences that drive business impact.
            </p>
          </div>

          {posts.length > 0 ? (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {posts.map((post, index) => (
                  <SpotlightCard key={post.slug} className="h-full" spotlightColor="rgba(238, 167, 109, 0.25)">
                    <BlogCard key={post.slug} post={post} index={index} />
                  </SpotlightCard>
                ))}
              </div>

              <div className="text-center mt-16">
                <p className="text-lg text-muted mb-8">
                  Exploring the intersection of design, strategy, and leadership.
                </p>
                <Link href="/blog">
                  <button className="px-8 py-4 border border-border text-foreground font-medium rounded-full hover:border-accent hover:text-accent transition-all duration-300">
                    View All Articles
                  </button>
                </Link>
              </div>
            </>
          ) : (
            <div className="text-center py-16">
              <p className="text-xl text-muted">
                Articles coming soon! Check back for insights on design leadership.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Call to Action - Performance Optimized */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-light text-foreground mb-8">
            Let&apos;s Create Something Together
          </h2>
          <p className="text-xl text-muted mb-12 max-w-2xl mx-auto">
            I&apos;m always interested in discussing new opportunities, 
            sharing insights, or collaborating on meaningful projects.
          </p>
          <button className="px-8 py-4 bg-accent text-background font-medium rounded-full hover:bg-foreground transition-colors">
            Get In Touch
          </button>
        </div>
      </section>
      
      {/* Performance Monitor - Development Only */}
      <PerformanceMonitor />
    </main>
  );
}
