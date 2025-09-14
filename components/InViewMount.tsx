"use client";

import { useEffect, useRef, useState } from "react";

type InViewMountProps = {
  children: React.ReactNode;
  rootMargin?: string;
  once?: boolean;
};

export default function InViewMount({ children, rootMargin = "0px 0px 0px 0px", once = true }: InViewMountProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setIsVisible(true);
            if (once) observer.disconnect();
          } else if (!once) {
            setIsVisible(false);
          }
        }
      },
      { root: null, rootMargin, threshold: 0.01 }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [rootMargin, once]);

  return <div ref={ref}>{isVisible ? children : null}</div>;
}

