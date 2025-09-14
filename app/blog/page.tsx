"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { getAllPosts } from "@/lib/mdx";
import BlogCard from "@/components/BlogCard";
import AnimatedSection from "@/components/AnimatedSection";

export default function BlogPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();
  const posts = getAllPosts();

  useEffect(() => {
    // Remove authentication requirement
    setIsAuthenticated(true);
    setIsLoading(false);
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

  if (!isAuthenticated) {
    return null;
  }

  const featuredPosts = posts.filter(post => post.featured);
  const regularPosts = posts.filter(post => !post.featured);

  return (
    <main className="pt-24 pb-16 px-6">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <AnimatedSection>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              <span className="font-crimson-bold">Product Strategy & Design Leadership</span>
            </h1>
          </AnimatedSection>
          
          <AnimatedSection delay={0.2}>
            <p className="text-xl md:text-2xl text-muted leading-relaxed max-w-3xl mx-auto">
              Strategic thinking, team empowerment, and cultural transformation through 
              design leadership. Real insights from real challenges.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Featured Posts Section */}
      {featuredPosts.length > 0 && (
        <section className="mb-20">
          <div className="max-w-7xl mx-auto">
            <AnimatedSection delay={0.3}>
              <div className="text-center mb-12">
                <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-4">
                  Featured Articles
                </h2>
                <p className="text-muted max-w-2xl mx-auto">
                  Deep dives into design leadership, strategy, and organizational transformation.
                </p>
              </div>
            </AnimatedSection>

            <div className="columns-1 lg:columns-2 gap-8 space-y-8">
              {featuredPosts.map((post, index) => (
                <div key={post.slug} className="break-inside-avoid mb-8">
                  <BlogCard post={post} index={index} />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* All Posts Section */}
      <section className="max-w-7xl mx-auto">
        <AnimatedSection delay={0.4}>
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-4">
              All Articles
            </h2>
            <p className="text-muted max-w-2xl mx-auto">
              Complete collection of insights on design leadership, team building, and strategic thinking.
            </p>
          </div>
        </AnimatedSection>

        {posts.length > 0 ? (
          <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
            {posts.map((post, index) => (
              <div key={post.slug} className="break-inside-avoid mb-8">
                <BlogCard post={post} index={index + featuredPosts.length} />
              </div>
            ))}
          </div>
        ) : (
          <AnimatedSection>
            <div className="text-center py-16">
              <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-muted" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">
                More Articles Coming Soon
              </h3>
              <p className="text-muted max-w-md mx-auto">
                I&apos;m working on new insights about design leadership, team building, and strategic thinking. 
                Check back soon for fresh perspectives.
              </p>
            </div>
          </AnimatedSection>
        )}
      </section>

      {/* Newsletter Signup */}
      <section className="mt-20 py-16 bg-secondary/50 rounded-3xl">
        <div className="max-w-4xl mx-auto text-center px-6">
          <AnimatedSection>
            <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-4">
              Stay Updated
            </h2>
            <p className="text-muted mb-8 max-w-2xl mx-auto">
              Get notified when new articles are published. Insights on design leadership, 
              team building, and strategic thinking delivered to your inbox.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-background border border-border rounded-lg text-foreground placeholder-muted focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
              />
              <button className="px-6 py-3 bg-accent text-background font-medium rounded-lg hover:bg-accent/90 transition-colors">
                Subscribe
              </button>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </main>
  );
} 