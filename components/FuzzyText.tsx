"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface FuzzyTextProps {
  children: string;
  className?: string;
  blurIntensity?: number;
  duration?: number;
  onHover?: boolean;
}

export default function FuzzyText({
  children,
  className = "",
  blurIntensity = 2,
  duration = 0.3,
  onHover = true,
}: FuzzyTextProps) {
  const [isFuzzy, setIsFuzzy] = useState(false);
  const [displayText, setDisplayText] = useState(children);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const originalText = children;

  const createFuzzyText = () => {
    const fuzzyChars = "!@#$%^&*()_+-=[]{}|;:,.<>?~`";
    return originalText
      .split("")
      .map((char) => {
        if (char === " ") return " ";
        return fuzzyChars[Math.floor(Math.random() * fuzzyChars.length)];
      })
      .join("");
  };

  const startFuzzyEffect = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }

    setIsFuzzy(true);
    let iterations = 0;
    const maxIterations = 15;

    intervalRef.current = setInterval(() => {
      setDisplayText(createFuzzyText());
      iterations++;

      if (iterations >= maxIterations) {
        if (intervalRef.current) {
          clearInterval(intervalRef.current);
        }
        setDisplayText(originalText);
        setIsFuzzy(false);
      }
    }, duration * 1000 / maxIterations);
  };

  const handleMouseEnter = () => {
    if (onHover) {
      startFuzzyEffect();
    }
  };

  const handleMouseLeave = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    setDisplayText(originalText);
    setIsFuzzy(false);
  };

  useEffect(() => {
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  useEffect(() => {
    setDisplayText(originalText);
  }, [originalText]);

  return (
    <motion.span
      className={className}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.2 }}
      style={{
        filter: isFuzzy ? `blur(${blurIntensity}px)` : "blur(0px)",
        transition: `filter ${duration}s ease-in-out`,
      }}
    >
      <AnimatePresence mode="wait">
        <motion.span
          key={displayText}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.1 }}
          className="inline-block"
        >
          {displayText}
        </motion.span>
      </AnimatePresence>
    </motion.span>
  );
} 