import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { EaselPlugin } from "gsap/EaselPlugin";
import { InertiaPlugin } from "gsap/InertiaPlugin";
import { MorphSVGPlugin } from "gsap/MorphSVGPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";
// ScrollSmoother requires ScrollTrigger
// import { ScrollSmoother } from "gsap/ScrollSmoother";

gsap.registerPlugin(
  useGSAP,
  EaselPlugin,
  InertiaPlugin,
  MorphSVGPlugin,
  ScrollTrigger
  // ScrollSmoother
);

export { gsap, useGSAP }; 