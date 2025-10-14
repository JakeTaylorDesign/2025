"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import type { BlogPost } from "@/lib/mdx";
import { extractFirstImage } from "@/lib/mdx";

interface BlogCardProps {
  post: BlogPost;
  index: number;
}

export default function BlogCard({ post, index }: BlogCardProps) {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    });
  };

  const getReadingTime = (content: string) => {
    const wordsPerMinute = 200;
    const wordCount = content.split(' ').length;
    const readingTime = Math.ceil(wordCount / wordsPerMinute);
    return readingTime;
  };

  // Extract the first image from the blog post content
  const thumbnailImage = extractFirstImage(post.content);

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2, delay: index * 0.3 }}
      viewport={{ once: true }}
      className="group"
    >
      <Link href={`/blog/${post.slug}`}>
        <div className="group cursor-pointer bg-background border border-border rounded-xl overflow-hidden hover:border-accent transition-all duration-300">
          <div className="flex flex-col">
            {/* Blog Image - Same as Project Image */}
            <div className="relative h-48 overflow-hidden">
              {thumbnailImage ? (
                <img
                  src={thumbnailImage}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              ) : (
                <div className={`absolute inset-0 bg-gradient-to-br ${post.color || 'from-blue-500 to-purple-600'} flex items-center justify-center`}>
                  <div className="text-center">
                    <div className="w-16 h-16 mx-auto mb-4 bg-white/10 rounded-full flex items-center justify-center">
                      <div className="w-8 h-8 bg-white/20 rounded"></div>
                    </div>
                    <div className="text-white/60 text-sm font-medium">
                      {post.title.replace('®', '')}
                    </div>
                  </div>
                </div>
              )}
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>
            </div>
            
            {/* Blog Content - Same structure as Project Content */}
            <div className="p-8 flex flex-col">
              <div className="mb-6">
                <h3 className="text-2xl font-medium text-foreground group-hover:text-accent transition-colors mb-2">
                  {post.title}
                </h3>
                <div className="flex items-center justify-between">
                  <time className="text-sm text-accent font-medium tracking-wide uppercase">
                    {formatDate(post.date)}
                  </time>
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-accent font-medium tracking-wide uppercase">
                      {getReadingTime(post.content)} min read
                    </span>
                    {post.featured && (
                      <span className="px-2 py-1 text-xs bg-accent/20 text-accent rounded-full font-medium">
                        Featured
                      </span>
                    )}
                  </div>
                </div>
              </div>

              <p className="text-muted leading-relaxed mb-6">
                {post.excerpt && post.excerpt.length > 73 ? `${post.excerpt.substring(0, 73)}...` : post.excerpt}
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
    </motion.article>
  );
} 