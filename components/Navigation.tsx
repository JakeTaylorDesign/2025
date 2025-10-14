"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import WeatherTime from "./WeatherTimeMemo";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/playground", label: "Playground" },
  { href: "/blog", label: "Thoughts" },
  { href: "/giving-back", label: "Giving Back" },
  { href: "/testimonials", label: "Kind Words" },
];

export default function Navigation() {
  const pathname = usePathname();
  const [showName, setShowName] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    // Only run on homepage
    if (pathname !== "/") {
      setShowName(true);
      return;
    }

    // On homepage, start with name hidden
    setShowName(false);

    // Set up intersection observer to detect when hero is out of view
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Show name when hero is NOT intersecting (out of view)
        const shouldShow = !entry.isIntersecting;
        console.log('Hero intersection:', entry.isIntersecting, 'Show name:', shouldShow);
        setShowName(shouldShow);
      },
      {
        // Trigger when hero is completely out of view
        threshold: 0,
        // Add some margin so it triggers slightly before hero is completely gone
        rootMargin: "-100px 0px 0px 0px"
      }
    );

    // Find the hero section - look for the section with min-h-screen
    const heroSection = document.querySelector('section[class*="min-h-screen"]');
    if (heroSection) {
      observer.observe(heroSection);
    } else {
      console.log('Hero section not found');
    }

    return () => {
      if (heroSection) {
        observer.unobserve(heroSection);
      }
    };
  }, [pathname]);

  // Close mobile menu when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  return (
    <>
      <motion.nav
        className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center">
            {/* Logo/Brand with conditional rendering */}
            <div className="flex-shrink-0">
              <Link href="/">
                <div className="relative h-6 w-32 flex items-center">
                  <AnimatePresence>
                    {showName && (
                      <motion.div
                        className="text-xl font-ibm-plex-mono text-foreground hover:text-accent transition-colors absolute whitespace-nowrap"
                        initial={{ 
                          opacity: 0, 
                          y: 30 // Start from further below for more dramatic effect
                        }}
                        animate={{ 
                          opacity: 1, 
                          y: 0 
                        }}
                        exit={{ 
                          opacity: 0, 
                          y: 30 
                        }}
                        transition={{ 
                          duration: 0.6, 
                          ease: "easeOut" 
                        }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        Jake Taylor
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </Link>
            </div>

            {/* Centered Weather Widget */}
            <div className="hidden md:flex flex-1 justify-center">
              <WeatherTime />
            </div>

            {/* Desktop Navigation Links */}
            <div className="flex items-center flex-shrink-0">
              <div className="hidden md:flex items-center space-x-6">
                {navItems.map((item) => {
                  const isActive = pathname === item.href;
                  return (
                    <Link key={item.href} href={item.href}>
                      <div className="relative px-4 py-2 text-sm font-ibm-plex-mono transition-colors whitespace-nowrap min-w-fit">
                        <span
                          className={isActive ? "text-accent" : "text-muted hover:text-foreground"}
                        >
                          {item.label}
                        </span>
                        {isActive && (
                          <motion.div
                            className="absolute bottom-0 left-0 right-0 h-0.5"
                            style={{ backgroundColor: '#EEA76D' }}
                            layoutId="activeTab"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.3 }}
                          />
                        )}
                      </div>
                    </Link>
                  );
                })}
              </div>

              {/* Mobile Menu Button */}
              <div className="md:hidden">
                <button
                  className="relative w-16 h-16 focus:outline-none flex items-center justify-center"
                  aria-label="Toggle mobile menu"
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                  <svg
                    viewBox="0 0 100 100"
                    className="w-12 h-12"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      className={`fill-none stroke-foreground stroke-[3px] transition-all duration-500 ease-in-out ${
                        mobileMenuOpen ? "opacity-0" : ""
                      }`}
                      style={{
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        strokeDasharray: "24 126.642",
                        strokeDashoffset: mobileMenuOpen ? "-38" : "0",
                      }}
                      d="M0 40h62c13 0 6 28-4 18L35 35"
                    />
                    <path
                      className="fill-none stroke-foreground stroke-[3px] transition-all duration-500 ease-in-out"
                      style={{
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        strokeDasharray: "24 70",
                        strokeDashoffset: mobileMenuOpen ? "-38" : "0",
                      }}
                      d="M0 50h70"
                    />
                    <path
                      className={`fill-none stroke-foreground stroke-[3px] transition-all duration-500 ease-in-out ${
                        mobileMenuOpen ? "opacity-0" : ""
                      }`}
                      style={{
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        strokeDasharray: "24 126.642",
                        strokeDashoffset: mobileMenuOpen ? "-38" : "0",
                      }}
                      d="M0 60h62c13 0 6-28-4-18L35 65"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="fixed inset-0 z-40 bg-background/95 backdrop-blur-md md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <div className="flex flex-col items-center justify-center min-h-screen space-y-8">
              {navItems.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link key={item.href} href={item.href}>
                    <motion.div
                      className="text-2xl font-ibm-plex-mono transition-colors"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <span className={isActive ? "text-accent" : "text-foreground"}>
                        {item.label}
                      </span>
                    </motion.div>
                  </Link>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
} 