"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { getProjectBySlug, getAllProjects, Project } from "@/lib/projects";
import AnimatedSection from "@/components/AnimatedSection";
import VideoEmbed from "@/components/blog/VideoEmbed";
import ProjectNavigation from "@/components/ProjectNavigation";
import Link from "next/link";

interface ProjectPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [project, setProject] = useState<Project | null>(null);
  const router = useRouter();

  useEffect(() => {
    // Remove authentication requirement
    setIsAuthenticated(true);
    setIsLoading(false);
  }, []);

  useEffect(() => {
    const loadProject = async () => {
      const { slug } = await params;
      const projectData = getProjectBySlug(slug);
      setProject(projectData);
    };
    
    if (isAuthenticated) {
      loadProject();
    }
  }, [params, isAuthenticated]);

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

  if (!isAuthenticated || !project) {
    return null;
  }

  return (
    <main className="pt-24 pb-16 px-6">
      <div className="max-w-4xl mx-auto">
        <AnimatedSection>
          <div className="mb-8">
            <Link href="/playground" className="text-accent hover:text-accent/80 transition-colors">
              ← Back to Playground
            </Link>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-light text-foreground mb-4">
              {project.title}
            </h1>
            <p className="text-xl text-accent font-medium mb-4">
              {project.role}
            </p>
            <div className="flex flex-wrap items-center gap-4 text-muted mb-6">
              <time dateTime="2025-04-30">
                {new Date('2025-04-30').toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </time>
            </div>
            <p className="text-lg text-muted leading-relaxed">
              {project.description}
            </p>
          </div>
        </AnimatedSection>

        {/* Hero Video/Image Section */}
        <AnimatedSection delay={0.15}>
          <div className="mb-16">
            {project.videos?.demo ? (
              <VideoEmbed
                src={project.videos.demo.src}
                title={project.videos.demo.title}
                caption={project.videos.demo.caption}
                className="w-full"
                analytics={true}
              />
            ) : (
              <div className="w-full h-96 md:h-[500px] overflow-hidden rounded-lg">
                <img
                  src={project.images.hero}
                  alt={`${project.title} - Hero Image`}
                  className="w-full h-full object-cover"
                />
              </div>
            )}
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-2xl font-light text-foreground mb-6">
                Project Overview
              </h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-medium text-foreground mb-2">Challenge</h3>
                  <p className="text-muted">
                    {project.challenge || "Design and implement a comprehensive solution that addresses user needs while meeting business objectives."}
                  </p>
                </div>
                <div>
                  <h3 className="font-medium text-foreground mb-2">Approach</h3>
                  {project.approach && project.approach.length > 0 ? (
                    <ul className="space-y-2 text-muted">
                      {project.approach.map((item, index) => {
                        // Extract tool names and create links
                        const toolLinks = {
                          'Claude (Anthropic)': 'https://www.anthropic.com',
                          'Midjourney': 'https://midjourney.com',
                          'ElevenLabs': 'https://elevenlabs.io',
                          'Runway': 'https://runwayml.com',
                          'Pika': 'https://pika.art',
                          'CapCut': 'https://capcut.com'
                        };
                        
                        // Emoji mapping for each tool
                        const toolEmojis = {
                          'Claude (Anthropic)': '🎥',
                          'Midjourney': '🎨',
                          'ElevenLabs': '🎙️',
                          'Runway & Pika': '🎞️',
                          'CapCut': '🎬'
                        };
                        
                        // Find the emoji for this item
                        let emoji = '';
                        Object.entries(toolEmojis).forEach(([toolName, emojiChar]) => {
                          if (item.includes(toolName)) {
                            emoji = emojiChar;
                          }
                        });
                        
                        // Replace tool names with links
                        let formattedItem = item;
                        Object.entries(toolLinks).forEach(([toolName, url]) => {
                          // Escape special regex characters and handle parentheses properly
                          const escapedToolName = toolName.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
                          const regex = new RegExp(escapedToolName, 'g');
                          formattedItem = formattedItem.replace(regex, `<a href="${url}" target="_blank" rel="noopener noreferrer" class="text-accent hover:text-accent/80 underline transition-colors">${toolName}</a>`);
                        });
                        
                        return (
                          <li key={index} className="flex items-start gap-2">
                            {emoji && <span className="mr-2">{emoji}</span>}
                            <span dangerouslySetInnerHTML={{ __html: formattedItem }} />
                          </li>
                        );
                      })}
                    </ul>
                  ) : (
                    <p className="text-muted">
                      Developed a strategic approach combining user research, design systems, and iterative development to create impactful user experiences.
                    </p>
                  )}
                </div>
                <div>
                  <h3 className="font-medium text-foreground mb-2">Results</h3>
                  {project.results && project.results.length > 0 ? (
                    <ul className="space-y-2 text-muted">
                      {project.results.map((result, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></span>
                          <span>{result}</span>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-muted">
                      Delivered measurable improvements in user engagement, satisfaction, and business metrics through thoughtful design leadership.
                    </p>
                  )}
                </div>
              </div>
            </div>
            
            <div>
              <h2 className="text-2xl font-light text-foreground mb-6">
                Project Details
              </h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-medium text-foreground mb-2">Year</h3>
                  <p className="text-muted">{project.year}</p>
                </div>
                <div>
                  <h3 className="font-medium text-foreground mb-2">Duration</h3>
                  <p className="text-muted">{project.duration}</p>
                </div>
                {project.client && (
                  <div>
                    <h3 className="font-medium text-foreground mb-2">Client</h3>
                    <p className="text-muted">{project.client}</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Image Gallery Section */}
        <div className="mb-16">
          <h2 className="text-2xl font-light text-foreground mb-8">
            Gallery
          </h2>
          
          {/* Full-width hero-style image */}
          <AnimatedSection delay={0.1}>
            <div className="w-full h-96 md:h-[500px] overflow-hidden rounded-lg mb-6">
              <img
                src={project.images.gallery[0]}
                alt={`${project.title} - Featured Image`}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          </AnimatedSection>
          
          {/* Two-column layout for medium images */}
          <AnimatedSection delay={0.2}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="h-80 overflow-hidden rounded-lg">
                <img
                  src={project.images.gallery[1]}
                  alt={`${project.title} - Image 2`}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="h-80 overflow-hidden rounded-lg">
                <img
                  src={project.images.gallery[2]}
                  alt={`${project.title} - Image 3`}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </AnimatedSection>
          
          {/* Full-width landscape image */}
          <AnimatedSection delay={0.3}>
            <div className="w-full h-64 md:h-80 overflow-hidden rounded-lg mb-6">
              <img
                src={project.images.gallery[3]}
                alt={`${project.title} - Image 4`}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          </AnimatedSection>
          
          {/* Three-column layout for smaller images */}
          <AnimatedSection delay={0.4}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              <div className="h-64 overflow-hidden rounded-lg">
                <img
                  src={project.images.gallery[4]}
                  alt={`${project.title} - Image 5`}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="h-64 overflow-hidden rounded-lg">
                <img
                  src={project.images.gallery[5]}
                  alt={`${project.title} - Image 6`}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="h-64 overflow-hidden rounded-lg">
                <img
                  src={project.images.gallery[6]}
                  alt={`${project.title} - Image 7`}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </AnimatedSection>
          
          {/* Two-column layout for remaining images */}
          <AnimatedSection delay={0.5}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="h-80 overflow-hidden rounded-lg">
                <img
                  src={project.images.gallery[7]}
                  alt={`${project.title} - Image 8`}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </AnimatedSection>
        </div>



        {/* Project Navigation */}
        <ProjectNavigation currentSlug={project.slug} projects={getAllProjects()} />

        <AnimatedSection delay={0.5}>
          <div className="text-center pt-16 border-t border-border">
            <h2 className="text-2xl font-light text-foreground mb-6">
              Let&apos;s Work Together
            </h2>
            <p className="text-lg text-muted mb-8 max-w-2xl mx-auto">
              Interested in collaborating on a similar project or discussing 
              how we can bring your vision to life?
            </p>
            <button className="px-8 py-4 bg-accent text-background font-medium rounded-full hover:bg-foreground transition-colors">
              Start a Conversation
            </button>
          </div>
        </AnimatedSection>
      </div>
    </main>
  );
} 