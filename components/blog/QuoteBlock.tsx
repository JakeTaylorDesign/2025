"use client";

import { motion } from "framer-motion";

interface QuoteBlockProps {
  quote: string;
  author?: string;
  role?: string;
  company?: string;
}

export default function QuoteBlock({ quote, author, role, company }: QuoteBlockProps) {
  return (
    <motion.blockquote
      className="relative my-12 p-8 bg-secondary/50 border-l-4 border-accent rounded-r-xl"
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="absolute top-0 left-0 w-8 h-8 bg-accent rounded-full -translate-x-4 -translate-y-4 flex items-center justify-center">
        <svg className="w-4 h-4 text-background" fill="currentColor" viewBox="0 0 24 24">
          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
        </svg>
      </div>
      
      <div className="relative z-10">
        <p className="text-lg md:text-xl text-foreground font-medium leading-relaxed mb-4">
          "{quote}"
        </p>
        
        {(author || role || company) && (
          <footer className="flex items-center gap-2">
            {author && (
              <cite className="text-accent font-semibold not-italic">
                {author}
              </cite>
            )}
            {(role || company) && (
              <span className="text-muted text-sm">
                {role && <span>{role}</span>}
                {role && company && <span> at </span>}
                {company && <span>{company}</span>}
              </span>
            )}
          </footer>
        )}
      </div>
    </motion.blockquote>
  );
} 