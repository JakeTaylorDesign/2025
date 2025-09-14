"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import type { BlogPost } from "@/lib/mdx";
import { extractFirstImage } from "@/lib/mdx";

interface BlogNavigationProps {
  currentSlug: string;
  posts: BlogPost[];
}

export default function BlogNavigation({ currentSlug, posts }: BlogNavigationProps) {
  const currentIndex = posts.findIndex(post => post.slug === currentSlug);
  const prevPost = currentIndex > 0 ? posts[currentIndex - 1] : null;
  const nextPost = currentIndex < posts.length - 1 ? posts[currentIndex + 1] : null;

  // Extract hero images for navigation thumbnails
  const prevHeroImage = prevPost ? extractFirstImage(prevPost.content) : null;
  const nextHeroImage = nextPost ? extractFirstImage(nextPost.content) : null;

  if (!prevPost && !nextPost) {
    return null;
  }

  return (
    <motion.div
      className="mt-16 pt-8 border-t border-border"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <h3 className="text-xl font-semibold text-foreground mb-6">
        Continue Reading
      </h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Previous Post */}
        {prevPost && (
          <Link href={`/blog/${prevPost.slug}`}>
            <motion.article
              className="group p-6 bg-secondary/30 rounded-xl border border-border hover:border-accent transition-all duration-300"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  {prevHeroImage ? (
                    <div className="relative w-16 h-16 rounded-lg overflow-hidden">
                      <Image
                        src={prevHeroImage}
                        alt={prevPost.title}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-black/20"></div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                      </div>
                    </div>
                  ) : (
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-lg flex items-center justify-center">
                      <svg className="w-6 h-6 text-muted" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                      </svg>
                    </div>
                  )}
                </div>
                
                <div className="flex-1 min-w-0">
                  <p className="text-xs text-muted mb-2">Previous</p>
                  <h4 className="text-sm font-semibold text-foreground group-hover:text-accent transition-colors line-clamp-2 mb-2">
                    {prevPost.title}
                  </h4>
                  <p className="text-xs text-muted line-clamp-2">
                    {prevPost.excerpt}
                  </p>
                </div>
              </div>
            </motion.article>
          </Link>
        )}

        {/* Next Post */}
        {nextPost && (
          <Link href={`/blog/${nextPost.slug}`}>
            <motion.article
              className="group p-6 bg-secondary/30 rounded-xl border border-border hover:border-accent transition-all duration-300"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <div className="flex items-start gap-4">
                <div className="flex-1 min-w-0">
                  <p className="text-xs text-muted mb-2">Next</p>
                  <h4 className="text-sm font-semibold text-foreground group-hover:text-accent transition-colors line-clamp-2 mb-2">
                    {nextPost.title}
                  </h4>
                  <p className="text-xs text-muted line-clamp-2">
                    {nextPost.excerpt}
                  </p>
                </div>
                
                <div className="flex-shrink-0">
                  {nextHeroImage ? (
                    <div className="relative w-16 h-16 rounded-lg overflow-hidden">
                      <Image
                        src={nextHeroImage}
                        alt={nextPost.title}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-black/20"></div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>
                  ) : (
                    <div className="w-16 h-16 bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-lg flex items-center justify-center">
                      <svg className="w-6 h-6 text-muted" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  )}
                </div>
              </div>
            </motion.article>
          </Link>
        )}
      </div>
    </motion.div>
  );
} 