"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";
import SpotlightCard from "@/components/SpotlightCard";

export default function GivingBackPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  const givingBackTestimonials = [
    {
      quote: "Jake reviewed my design portfolio when he graciously acted as a panelist for the Flatiron School's Portfolio Review event recently. He is incredibly knowledgeable about design, and that clearly came through in the feedback he gave me which was extremely actionable, insightful, and specific. More than that though, he took it upon himself to follow up afterward to see how everything worked out, which speaks volumes to not only his commitment to his craft but also his commitment to helping those around him become the best designers possible. I feel very fortunate to have heard his insight into design, and very much hope to learn more from him in the future.",
      author: "Joey Sbarro",
      role: "UX Student",
      company: "Flatiron Bootcamp",
      image: "/images/testimonials/joey.png"
    },
    {
      quote: "Jake has been an instrumental piece of the design educational equation at Flatiron School. We look for mentors like Jake who are not only willing to give back to the design community but can be thoughtful and actionable with their feedback. I'd be happy camper being able to collaborate and work with Jake in future initiatives.",
      author: "Jancy Liu",
      role: "Director, Product Design",
      company: "Bank of America",
      image: "/images/testimonials/jancy.png"
    }
  ];

  const mentorshipActivities = [
    {
      title: "Uncommon",
      subtitle: "UX Curriculum Advisor & Design Mentor",
      description: "Contributing to a 501(c)(3) nonprofit providing free computer coding education to underserved youth in Zimbabwe",
      image: "/images/giving-back/uncommon_back.jpg",
      details: [
        "Curriculum development for coding education programs",
        "UX/UI design mentorship for program participants",
        "Supporting educational technology initiatives in Zimbabwe",
        "Helping expand coding education nationwide for youth surviving on less than $5/day"
      ],
      link: "https://uncommon.org"
    },
    {
      title: "Avocademy",
      subtitle: "Product Design & UX, Course Mentor",
      description: "One-on-one mentoring for aspiring designers transitioning into UX/UI careers",
      image: "/images/giving-back/avoacademy.jpg",
      details: [
        "Portfolio reviews and career guidance",
        "Interview preparation and soft skills coaching", 
        "Industry insights and networking introductions",
        "Technical skill development in Figma and design systems"
      ],
      link: "https://www.avocademy.com/"
    },
    {
      title: "Flatiron School",
      subtitle: "Graduate Portfolio Reviewer & Design Mentor",
      description: "Effective learning comes from connecting with people who are learning and teaching it. Since 2012, we've brought together passionate, experienced instructors and driven students to achieve incredible outcomes and careers.",
      image: "/images/giving-back/flatiron_School.jpg",
      details: [
        "Introduction to UX/UI design principles",
        "Hands-on Figma training sessions",
        "Design thinking and user research methods",
        "Building accessible and inclusive digital experiences"
      ],
      link: "https://flatironschool.com/"
    },
    {
      title: "KCC Design Works",
      subtitle: "Design Mentor",
      description: "KCC Design works connects New Yorkers coming from backgrounds under-represented-in-tech to opportunities as a UX/Design professional via no-cost, applied skills training.",
      image: "/images/giving-back/KCC_designworks.jpg",
      details: [
        "Conference talks on design leadership",
        "Design process articles and case studies",
        "Podcast appearances discussing industry trends",
        "Social media content educating emerging designers"
      ],
      link: "https://cewdkbcc.com/about/past-programs-and-initiatives/design-works/"
    }
  ];

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

  return (
    <main className="pt-24 pb-16 px-6">
      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="pt-32 pb-20 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <AnimatedSection>
              <motion.h1 
                className="text-4xl md:text-6xl font-bold text-foreground mb-6"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                Giving Back
              </motion.h1>
            </AnimatedSection>
            
            <AnimatedSection delay={0.2}>
              <motion.p 
                className="text-xl md:text-2xl text-muted leading-relaxed max-w-3xl mx-auto"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              >
                From mentoring designers in career transitions to supporting coding education 
                for underserved youth in Zimbabwe. Creating opportunities and building bridges 
                through design, education, and community impact.
              </motion.p>
            </AnimatedSection>
          </div>
        </section>

        {/* Mentorship Activities */}
        <section className="py-20 px-6">
          <div className="max-w-5xl mx-auto">
            <AnimatedSection delay={0.4}>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-16 text-center">
                How I&apos;m Making an Impact
              </h2>
            </AnimatedSection>
            
            <div className="space-y-16">
              {mentorshipActivities.map((activity, index) => (
                <AnimatedSection key={activity.title} delay={0.1 * index}>
                  <motion.div 
                    className="group"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="rounded-2xl border transition-all duration-300 overflow-hidden bg-secondary/20 border-border hover:border-accent/50">
                      <div className="flex flex-col md:flex-row">
                        {/* Image Section - Square on left */}
                        {activity.image && (
                          <div className="relative w-full md:w-80 h-80 md:h-80 overflow-hidden flex-shrink-0">
                            <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-transparent z-10"></div>
                            <img 
                              src={activity.image} 
                              alt={activity.title}
                              className="w-full h-full object-cover"
                            />
                          </div>
                        )}
                        
                        {/* Content Section - On right */}
                        <div className="p-8 md:p-12 flex-1">
                        <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                          <div className="mb-4 md:mb-0 flex-1">
                            <div className="flex flex-col md:flex-row md:items-center md:space-x-4 mb-3">
                              <h3 className="text-2xl md:text-3xl font-bold text-foreground">
                                {activity.title}
                              </h3>
                              {activity.link && (
                                <motion.a
                                  href={activity.link}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="inline-flex items-center space-x-2 text-accent hover:text-accent/80 transition-colors mt-2 md:mt-0"
                                  whileHover={{ scale: 1.05 }}
                                  whileTap={{ scale: 0.95 }}
                                >
                                  <span className="text-sm font-medium">Visit Site</span>
                                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                  </svg>
                                </motion.a>
                              )}
                            </div>
                            {activity.subtitle && (
                              <div className="text-accent font-semibold mb-3">
                                {activity.subtitle}
                              </div>
                            )}
                            <p className="text-lg text-muted mb-4">
                              {activity.description}
                            </p>
                          </div>
                        </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <AnimatedSection delay={0.5}>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-16 text-center">
                What People Are Saying
              </h2>
            </AnimatedSection>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto items-start">
              {givingBackTestimonials.map((testimonial, index) => (
                <AnimatedSection key={index} delay={index * 0.1}>
                  <SpotlightCard className="mb-8 h-fit" spotlightColor="rgba(238, 167, 109, 0.25)">
                    <div className="flex flex-col">
                      <blockquote className="text-lg text-white leading-relaxed mb-6">
                        &ldquo;{testimonial.quote}&rdquo;
                      </blockquote>
                      <div className="border-t border-neutral-700 pt-6">
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 overflow-hidden">
                            {testimonial.image ? (
                              <img 
                                src={testimonial.image} 
                                alt={`${testimonial.author}`}
                                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-300 ease-in-out"
                                onError={(e) => {
                                  // Fallback to placeholder if image fails to load
                                  const target = e.target as HTMLImageElement;
                                  target.style.display = 'none';
                                  target.nextElementSibling?.classList.remove('hidden');
                                }}
                              />
                            ) : null}
                            {/* Fallback placeholder */}
                            <div className={`w-full h-full bg-gradient-to-br from-blue-400/20 to-cyan-400/10 rounded-full flex items-center justify-center ${testimonial.image ? 'hidden' : ''}`}>
                              <div className="w-6 h-6 bg-blue-400/30 rounded-full"></div>
                            </div>
                          </div>
                          <div className="flex-1">
                            <div className="font-medium" style={{ color: '#EEA76D' }}>
                              {testimonial.author}
                            </div>
                            <div className="text-gray-300">
                              {testimonial.role}
                            </div>
                            <div className="text-sm text-gray-400">
                              {testimonial.company}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </SpotlightCard>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 px-6 bg-accent/10">
          <div className="max-w-4xl mx-auto text-center">
            <AnimatedSection delay={0.6}>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Want to Get Involved?
              </h2>
              <p className="text-lg text-muted mb-8 max-w-2xl mx-auto">
                Whether you&apos;re looking for mentorship, want to collaborate on community initiatives, 
                or have ideas for supporting emerging designers, I&apos;d love to hear from you.
              </p>
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <a 
                  href="mailto:hello@jaketaylor.design" 
                  className="inline-flex items-center px-8 py-4 bg-accent text-background font-semibold rounded-full hover:bg-accent/90 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  Get in Touch
                </a>
              </motion.div>
            </AnimatedSection>
          </div>
        </section>
      </div>
    </main>
  );
} 