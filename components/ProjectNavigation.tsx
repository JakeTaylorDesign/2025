"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import type { Project } from "@/lib/projects";

interface ProjectNavigationProps {
  currentSlug: string;
  projects: Project[];
}

export default function ProjectNavigation({ currentSlug, projects }: ProjectNavigationProps) {
  const currentIndex = projects.findIndex(project => project.slug === currentSlug);
  const prevProject = currentIndex > 0 ? projects[currentIndex - 1] : null;
  const nextProject = currentIndex < projects.length - 1 ? projects[currentIndex + 1] : null;

  if (!prevProject && !nextProject) {
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
        More Projects
      </h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Previous Project */}
        {prevProject && (
          <Link href={`/projects/${prevProject.slug}`}>
            <motion.article
              className="group p-6 bg-secondary/30 rounded-xl border border-border hover:border-accent transition-all duration-300"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="relative w-16 h-16 rounded-lg overflow-hidden">
                    <Image
                      src={prevProject.images.thumbnail}
                      alt={prevProject.title}
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
                </div>
                
                <div className="flex-1 min-w-0">
                  <p className="text-xs text-muted mb-2">Previous Project</p>
                  <h4 className="text-sm font-semibold text-foreground group-hover:text-accent transition-colors line-clamp-2 mb-2">
                    {prevProject.title}
                  </h4>
                  <p className="text-xs text-muted line-clamp-2">
                    {prevProject.description}
                  </p>
                </div>
              </div>
            </motion.article>
          </Link>
        )}

        {/* Next Project */}
        {nextProject && (
          <Link href={`/projects/${nextProject.slug}`}>
            <motion.article
              className="group p-6 bg-secondary/30 rounded-xl border border-border hover:border-accent transition-all duration-300"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <div className="flex items-start gap-4">
                <div className="flex-1 min-w-0">
                  <p className="text-xs text-muted mb-2">Next Project</p>
                  <h4 className="text-sm font-semibold text-foreground group-hover:text-accent transition-colors line-clamp-2 mb-2">
                    {nextProject.title}
                  </h4>
                  <p className="text-xs text-muted line-clamp-2">
                    {nextProject.description}
                  </p>
                </div>
                
                <div className="flex-shrink-0">
                  <div className="relative w-16 h-16 rounded-lg overflow-hidden">
                    <Image
                      src={nextProject.images.thumbnail}
                      alt={nextProject.title}
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
                </div>
              </div>
            </motion.article>
          </Link>
        )}
      </div>
    </motion.div>
  );
} 