"use client";

import { useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

const springValues = {
  damping: 30,
  stiffness: 100,
  mass: 2,
};

interface SpotlightCardProps {
  children: React.ReactNode;
  className?: string;
  spotlightColor?: string;
  scaleOnHover?: number;
  rotateAmplitude?: number;
  variant?: 'default' | 'transparent';
}

const SpotlightCard = ({ 
  children, 
  className = "", 
  spotlightColor = "rgba(238, 167, 109, 0.25)",
  scaleOnHover = 1.02,
  rotateAmplitude = 8,
  variant = 'default',
}: SpotlightCardProps) => {
  const divRef = useRef<HTMLDivElement>(null);
  const [isFocused, setIsFocused] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  // Framer Motion values for 3D tilt effect
  const rotateX = useSpring(useMotionValue(0), springValues);
  const rotateY = useSpring(useMotionValue(0), springValues);
  const scale = useSpring(1, springValues);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!divRef.current || isFocused) return;

    const rect = divRef.current.getBoundingClientRect();
    
    // Spotlight effect positioning
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });

    // 3D tilt effect calculations
    const offsetX = e.clientX - rect.left - rect.width / 2;
    const offsetY = e.clientY - rect.top - rect.height / 2;

    const rotationX = (offsetY / (rect.height / 2)) * -rotateAmplitude;
    const rotationY = (offsetX / (rect.width / 2)) * rotateAmplitude;

    rotateX.set(rotationX);
    rotateY.set(rotationY);
  };

  const handleFocus = () => {
    setIsFocused(true);
    setOpacity(0.6);
    scale.set(scaleOnHover);
  };

  const handleBlur = () => {
    setIsFocused(false);
    setOpacity(0);
    scale.set(1);
    rotateX.set(0);
    rotateY.set(0);
  };

  const handleMouseEnter = () => {
    setOpacity(0.6);
    scale.set(scaleOnHover);
  };

  const handleMouseLeave = () => {
    setOpacity(0);
    scale.set(1);
    rotateX.set(0);
    rotateY.set(0);
  };

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onFocus={handleFocus}
      onBlur={handleBlur}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`relative w-full h-full [perspective:800px] ${className}`}
    >
      <motion.div
        className={`relative [transform-style:preserve-3d] w-full h-full ${
          variant === 'transparent' 
            ? 'overflow-hidden' 
            : 'rounded-3xl border border-neutral-800 bg-neutral-900 overflow-hidden p-8'
        }`}
        style={{
          rotateX,
          rotateY,
          scale,
        }}
      >
        <div className="relative z-10 w-full h-full">
          {children}
        </div>
        <div
          className={`pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 ease-in-out ${
            variant === 'transparent' ? 'z-20' : 'rounded-3xl'
          }`}
          style={{
            opacity,
            background: `radial-gradient(circle at ${position.x}px ${position.y}px, ${spotlightColor}, transparent 80%)`,
          }}
        />
      </motion.div>
    </div>
  );
};

export default SpotlightCard; 