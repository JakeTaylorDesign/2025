"use client";

import { motion } from "framer-motion";

interface ExternalLinkButtonProps {
  href: string;
  children: React.ReactNode;
  target?: string;
  rel?: string;
}

export default function ExternalLinkButton({ 
  href, 
  children, 
  target = "_blank", 
  rel = "noopener noreferrer" 
}: ExternalLinkButtonProps) {
  return (
    <div className="text-center mt-12">
      <motion.a
        href={href}
        target={target}
        rel={rel}
        className="inline-block px-8 py-4 border border-border text-foreground font-medium rounded-full hover:border-accent hover:text-accent transition-colors"
        whileHover={{ scale: 1.05, y: -2 }}
        whileTap={{ scale: 0.95 }}
      >
        <span className="inline-flex items-center gap-2">
          {children}
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 16 16"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M4 12L12 4" />
            <path d="M8 4h4v4" />
          </svg>
        </span>
      </motion.a>
    </div>
  );
}
