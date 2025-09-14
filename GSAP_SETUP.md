# GSAP Setup Guide

This project has been configured with GSAP and all the premium plugins you specified.

## 📦 Installed Packages

- `gsap` - Core GSAP library
- `@gsap/react` - React integration for GSAP

## 🔧 Configuration

All GSAP plugins are configured in `lib/gsap.ts`:

```typescript
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { EaselPlugin } from "gsap/EaselPlugin";
import { InertiaPlugin } from "gsap/InertiaPlugin";
import { MorphSVGPlugin } from "gsap/MorphSVGPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";

gsap.registerPlugin(
  useGSAP,
  EaselPlugin,
  InertiaPlugin,
  MorphSVGPlugin,
  ScrollTrigger,
  ScrollSmoother
);
```

## 🚀 Usage Examples

### Basic Animation

```typescript
import { gsap, useGSAP } from "@/lib/gsap";

export default function MyComponent() {
  const elementRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.fromTo(elementRef.current, 
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1 }
    );
  });

  return <div ref={elementRef}>Animated content</div>;
}
```

### ScrollTrigger Animation

```typescript
useGSAP(() => {
  gsap.fromTo(".scroll-element",
    { y: 100, opacity: 0 },
    { 
      y: 0, 
      opacity: 1, 
      duration: 1,
      scrollTrigger: {
        trigger: ".scroll-element",
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse"
      }
    }
  );
});
```

### Timeline Animation

```typescript
useGSAP(() => {
  const tl = gsap.timeline();
  
  tl.fromTo(element1, { x: -100 }, { x: 0, duration: 1 })
    .fromTo(element2, { y: 50 }, { y: 0, duration: 0.8 }, "-=0.5")
    .fromTo(element3, { scale: 0 }, { scale: 1, duration: 0.6 }, "-=0.3");
});
```

### Inertia Plugin (Physics-based)

```typescript
useGSAP(() => {
  gsap.to(element, {
    x: 200,
    duration: 2,
    ease: "inertia",
    inertia: { velocity: 0.8, resistance: 0.9 }
  });
});
```

### MorphSVG Plugin

```typescript
useGSAP(() => {
  gsap.to(svgPath, {
    morphSVG: "M0,0 L100,100",
    duration: 2,
    ease: "power2.inOut"
  });
});
```

## 🎯 Available Plugins

### Core Plugins
- **useGSAP** - React integration hook
- **ScrollTrigger** - Scroll-based animations
- **ScrollSmoother** - Smooth scrolling effects

### Premium Plugins
- **EaselPlugin** - Flash/EaselJS integration
- **InertiaPlugin** - Physics-based animations
- **MorphSVGPlugin** - SVG morphing animations

## 📁 Example Component

See `components/GSAPExample.tsx` for a complete example demonstrating:
- Initial mount animations
- ScrollTrigger animations
- Programmatic animations
- Timeline sequences

## 🔗 Resources

- [GSAP Documentation](https://greensock.com/docs/)
- [ScrollTrigger Guide](https://greensock.com/docs/v3/Plugins/ScrollTrigger)
- [React Integration](https://greensock.com/docs/v3/Installation?checked=core,react#react)

## ⚠️ Important Notes

1. **Import from lib/gsap**: Always import GSAP from `@/lib/gsap` to ensure plugins are registered
2. **useGSAP Hook**: Use the `useGSAP` hook for React components instead of `useEffect`
3. **Cleanup**: GSAP automatically cleans up animations when components unmount
4. **Performance**: GSAP is highly optimized, but avoid creating too many simultaneous animations

## 🎨 Animation Best Practices

1. **Use `useGSAP`** instead of `useEffect` for GSAP animations
2. **Scope animations** to prevent conflicts between components
3. **Leverage ScrollTrigger** for scroll-based animations
4. **Use timelines** for complex animation sequences
5. **Optimize for performance** by limiting simultaneous animations 