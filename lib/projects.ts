export interface Project {
  slug: string;
  title: string;
  description: string;
  year: string;
  role: string;
  duration: string;
  client?: string;
  placeholderImage: string;
  placeholderColor: string;
  // Production image structure
  images: {
    hero: string;
    gallery: string[];
    thumbnail: string;
  };
  // Video content
  videos?: {
    demo?: {
      src: string;
      title: string;
      caption?: string;
      videoType?: 'youtube' | 'vimeo' | 'self-hosted';
    };
    process?: {
      src: string;
      title: string;
      caption?: string;
      videoType?: 'youtube' | 'vimeo' | 'self-hosted';
    };
    testimonial?: {
      src: string;
      title: string;
      caption?: string;
      videoType?: 'youtube' | 'vimeo' | 'self-hosted';
    };
  };
  overview: string;
  challenge: string;
  approach: string[];
  results: string[];
  metrics: {
    label: string;
    value: string;
  }[];
  testimonial?: {
    quote: string;
    author: string;
    role: string;
    company: string;
  };
}

export const projects: Project[] = [
  {
    slug: "maven-genai-survival-guide",
    title: "Maven Course - The GenAI Survival Guide for Creatives",
    description: "Excited to share that I completed The GenAI Survival Guide for Creatives this week! Taught by Martin Gent on Maven, this course is a game-changer for anyone exploring creative AI tools but struggling to find the right process or workflow.",
    year: "2024",
    role: "Course Completion",
    duration: "4 weeks",
    client: "Maven",
    placeholderImage: "/images/blog/Maven_video_post/thumbnail.png",
    placeholderColor: "bg-purple-500",
    images: {
      hero: "/images/blog/Maven_video_post/thumbnail.png",
      gallery: [
        "/images/blog/Maven_video_post/1.png",
        "/images/blog/Maven_video_post/2.png",
        "/images/blog/Maven_video_post/3.png",
        "/images/blog/Maven_video_post/4.png",
        "/images/blog/Maven_video_post/5.png",
        "/images/blog/Maven_video_post/6.png",
        "/images/blog/Maven_video_post/7.png",
        "/images/blog/Maven_video_post/8.png"
      ],
      thumbnail: "/images/blog/Maven_video_post/thumbnail.png"
    },
    videos: {
      demo: {
        src: "https://www.youtube.com/embed/8kTov5cbI1g",
        title: "GenAI Survival Guide for Creatives - Final Project",
        caption: "A comprehensive video demonstrating AI tool integration and creative workflow",
        videoType: "youtube"
      }
    },
    overview: "Completed The GenAI Survival Guide for Creatives course on Maven, learning how to blend multiple AI tools in a cohesive creative workflow.",
    challenge: "Understanding how to effectively combine different AI tools for creative projects.",
    approach: [
      "Story creation and refinement with Claude (Anthropic)",
      "Character imagery generation with Midjourney", 
      "Voiceover narration with ElevenLabs",
      "Visual animation with Runway & Pika",
      "Final editing and assembly with CapCut"
    ],
    results: [
      "Created a comprehensive video demonstrating AI tool integration",
      "Learned effective workflows for creative AI projects",
      "Gained hands-on experience with multiple AI platforms"
    ],
    metrics: [
      { label: "AI Tools Mastered", value: "6+" },
      { label: "Course Completion", value: "100%" },
      { label: "Final Project", value: "Video Created" }
    ]
  },
  {
    slug: "april-images-midjourney",
    title: "April's Images",
    description: "A collection of AI-generated artwork created in April using Midjourney.",
    year: "2024",
    role: "Midjourney",
    duration: "1 month",
    client: "Personal Project",
    placeholderImage: "/images/blog/midjourney_april/hero.jpg",
    placeholderColor: "bg-blue-500",
    // Image paths for production
    images: {
      hero: "/images/blog/midjourney_april/hero.jpg",
      gallery: [
        "/images/blog/midjourney_april/1.jpg",
        "/images/blog/midjourney_april/2.jpg",
        "/images/blog/midjourney_april/3.jpg",
        "/images/blog/midjourney_april/4.jpg",
        "/images/blog/midjourney_april/6.jpg",
        "/images/blog/midjourney_april/7.jpg",
        "/images/blog/midjourney_april/8.jpg",
        "/images/blog/midjourney_april/9.jpg",
        "/images/blog/midjourney_april/10.jpg",
        "/images/blog/midjourney_april/11.jpg",
        "/images/blog/midjourney_april/12.jpg",
        "/images/blog/midjourney_april/13.jpg"
      ],
      thumbnail: "/images/blog/midjourney_april/hero.jpg"
    },
    overview: "",
    challenge: "",
    approach: [],
    results: [],
    metrics: []
  },
  {
    slug: "february-images-midjourney",
    title: "February's Images",
    description: "A collection of AI-generated artwork created in February using Midjourney.",
    year: "2024",
    role: "Midjourney",
    duration: "1 month",
    client: "Personal Project",
    placeholderImage: "/images/blog/midjourney_feb/hero.jpg",
    placeholderColor: "bg-blue-500",
    images: {
      hero: "/images/blog/midjourney_feb/hero.jpg",
      gallery: [
        "/images/blog/midjourney_feb/1.jpg",
        "/images/blog/midjourney_feb/2.jpg",
        "/images/blog/midjourney_feb/3.jpg",
        "/images/blog/midjourney_feb/4.jpg",
        "/images/blog/midjourney_feb/5.jpg",
        "/images/blog/midjourney_feb/6.jpg",
        "/images/blog/midjourney_feb/7.jpg",
        "/images/blog/midjourney_feb/8.jpg",
        "/images/blog/midjourney_feb/9.jpg",
        "/images/blog/midjourney_feb/10.jpg",
        "/images/blog/midjourney_feb/jaketaylor2112_a_tech_designer_wearing_headphones_green_backg_4f9a994c-5171-4f79-bc2d-af0006be8d3f_0.jpg"
      ],
      thumbnail: "/images/blog/midjourney_feb/hero.jpg"
    },
    overview: "",
    challenge: "",
    approach: [],
    results: [],
    metrics: []
  },
  {
    slug: "june-images-midjourney",
    title: "June's Images",
    description: "A collection of AI-generated artwork created in June using Midjourney.",
    year: "2024",
    role: "Midjourney",
    duration: "1 month",
    client: "Personal Project",
    placeholderImage: "/images/blog/midjourney_june/hero.jpg",
    placeholderColor: "bg-blue-500",
    images: {
      hero: "/images/blog/midjourney_june/hero.jpg",
      gallery: [
        "/images/blog/midjourney_june/1.jpg",
        "/images/blog/midjourney_june/2.jpg",
        "/images/blog/midjourney_june/3.jpg",
        "/images/blog/midjourney_june/4.jpg",
        "/images/blog/midjourney_june/5.jpg",
        "/images/blog/midjourney_june/6.jpg",
        "/images/blog/midjourney_june/7.jpg",
        "/images/blog/midjourney_june/8.jpg",
        "/images/blog/midjourney_june/9.jpg",
        "/images/blog/midjourney_june/10.jpg",
        "/images/blog/midjourney_june/11.jpg",
        "/images/blog/midjourney_june/12.jpg",
        "/images/blog/midjourney_june/13.jpg",
        "/images/blog/midjourney_june/14.jpg",
        "/images/blog/midjourney_june/15.jpg",
        "/images/blog/midjourney_june/16.jpg"
      ],
      thumbnail: "/images/blog/midjourney_june/hero.jpg"
    },
    overview: "",
    challenge: "",
    approach: [],
    results: [],
    metrics: []
  },
  {
    slug: "march-images-midjourney",
    title: "March's Images",
    description: "A collection of AI-generated artwork created in March using Midjourney.",
    year: "2024",
    role: "Midjourney",
    duration: "1 month",
    client: "Personal Project",
    placeholderImage: "/images/blog/midjourney_mar/hero.jpg",
    placeholderColor: "bg-blue-500",
    images: {
      hero: "/images/blog/midjourney_mar/hero.jpg",
      gallery: [
        "/images/blog/midjourney_mar/1.jpg",
        "/images/blog/midjourney_mar/2.jpg",
        "/images/blog/midjourney_mar/3.jpg",
        "/images/blog/midjourney_mar/4.jpg",
        "/images/blog/midjourney_mar/5.jpg",
        "/images/blog/midjourney_mar/6.jpg",
        "/images/blog/midjourney_mar/7.jpg",
        "/images/blog/midjourney_mar/8.jpg",
        "/images/blog/midjourney_mar/9.jpg",
        "/images/blog/midjourney_mar/10.jpg",
        "/images/blog/midjourney_mar/11.jpg",
        "/images/blog/midjourney_mar/12.jpg",
        "/images/blog/midjourney_mar/13.jpg",
        "/images/blog/midjourney_mar/14.jpg",
        "/images/blog/midjourney_mar/15.jpg"
      ],
      thumbnail: "/images/blog/midjourney_mar/hero.jpg"
    },
    overview: "",
    challenge: "",
    approach: [],
    results: [],
    metrics: []
  },
  {
    slug: "magnific-images-may",
    title: "Magnific – May's Images",
    description: "A collection of AI-generated artwork created in May using Magnific.",
    year: "2024",
    role: "Magnific",
    duration: "1 month",
    client: "Personal Project",
    placeholderImage: "/images/blog/magnific_may/hero.jpg",
    placeholderColor: "bg-blue-500",
    images: {
      hero: "/images/blog/magnific_may/hero.jpg",
      gallery: [
        "/images/blog/magnific_may/1.jpg",
        "/images/blog/magnific_may/2.jpg",
        "/images/blog/magnific_may/3.jpg",
        "/images/blog/magnific_may/4.jpg"
      ],
      thumbnail: "/images/blog/magnific_may/hero.jpg"
    },
    overview: "",
    challenge: "",
    approach: [],
    results: [],
    metrics: []
  },
  {
    slug: "reactbits",
    title: "ReactBits",
    description: "A collection of interactive React components and UI elements showcasing modern web development patterns and animations.",
    year: "2025",
    role: "Frontend Developer",
    duration: "Ongoing",
    client: "Personal Project",
    placeholderImage: "/api/placeholder/600/400",
    placeholderColor: "from-blue-500/20 to-purple-500/20",
    images: {
      hero: "/images/projects/reactbits/hero.jpg",
      gallery: [
        "/images/projects/reactbits/1.jpg",
        "/images/projects/reactbits/2.jpg",
        "/images/projects/reactbits/3.jpg"
      ],
      thumbnail: "/images/projects/reactbits/thumbnail.jpg"
    },
    overview: "ReactBits is an ongoing collection of interactive React components, UI patterns, and animations that demonstrate modern web development techniques. This playground serves as both a learning exercise and a showcase of cutting-edge frontend development practices.",
    challenge: "Creating reusable, performant, and accessible interactive components while maintaining clean code architecture and smooth animations across different devices and browsers.",
    approach: [
      "Component-driven development with React and TypeScript",
      "Performance optimization using React hooks and memoization",
      "Smooth animations with Framer Motion and CSS transitions",
      "Responsive design principles for cross-device compatibility",
      "Accessibility-first development practices"
    ],
    results: [
      "Built a library of 20+ interactive components",
      "Achieved 95+ Lighthouse performance scores",
      "Implemented smooth 60fps animations",
      "Created fully accessible components with ARIA support",
      "Developed reusable patterns for future projects"
    ],
    metrics: [
      { label: "Components Built", value: "20+" },
      { label: "Performance Score", value: "95+" },
      { label: "Animation Frame Rate", value: "60fps" },
      { label: "Accessibility Score", value: "100%" }
    ]
  }
];

export function getProjectBySlug(slug: string): Project | null {
  return projects.find(project => project.slug === slug) || null;
}

export function getAllProjects(): Project[] {
  return projects;
} 