export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  featured?: boolean;
  tags?: string[];
  content: string;
  image?: string;
  color?: string;
  draft?: boolean;
}

// Color schemes for blog posts
const colorSchemes = [
  'from-blue-500/20 to-purple-500/20',
  'from-green-500/20 to-emerald-500/20',
  'from-orange-500/20 to-red-500/20',
  'from-purple-500/20 to-pink-500/20',
  'from-cyan-500/20 to-blue-500/20',
  'from-emerald-500/20 to-teal-500/20',
];

// Blog posts data - manually synced with actual MDX files
const blogPosts: BlogPost[] = [

  {
    slug: 'team-building-india',
    title: 'Bangalore, India - Team Building',
    date: '2025-05-05',
    excerpt: 'I had the opportunity to join a large cross-functional team event filled with Software Engineers, Designers, PMs, and executive leadership. Getting to meet people in person after leading remotely for the last 2 years is always a pleasure and a privilege. India is a country rich in culture and traditions with warm and welcoming people. After executive presentations and engaging in team building activities with almost 200 peers, we were able to spend time together as a design team; walking the streets of Bangalore, sampling local delicacies and exploring the [Museum of Art & Photography (MAP)](https://map-india.org/).',
    featured: true,
    tags: ['team building', 'india', 'collaboration', 'innovation', 'leadership'],
    content: `<HeroImage 
  src="/images/blog/India/IMG_1613.jpg" 
  alt="Team collaboration in India" 
  caption="Modern design teams in India blend traditional values with innovative approaches"
/>

<ImageColumn
  images={[
    { src: "/images/blog/India/IMG_1578.jpg", alt: "Team collaboration in India" },
    { src: "/images/blog/India/IMG_1580.jpg", alt: "Team building activities" },
    { src: "/images/blog/India/IMG_1594.jpg", alt: "Local leadership in action" },
    { src: "/images/blog/India/IMG_1611.jpg", alt: "Cultural immersion" },
    { src: "/images/blog/India/IMG_1613.jpg", alt: "Modern design teams in India" },
    { src: "/images/blog/India/IMG_1623.jpg", alt: "Team building experience" },
    { src: "/images/blog/India/IMG_1625.jpg", alt: "Collaborative spirit" },
    { src: "/images/blog/India/IMG_1627.jpg", alt: "Design team activities" },
    { src: "/images/blog/India/IMG_1639.jpg", alt: "Cultural richness" },
    { src: "/images/blog/India/IMG_1640.jpg", alt: "Team connections" },
    { src: "/images/blog/India/IMG_1643.jpg", alt: "Bangalore team building" },
  ]}
/>`,
    image: '/images/blog/India/IMG_1613.jpg',
    color: 'from-orange-500/20 to-red-500/20',
  },
  {
    slug: 'team-building-mexico',
    title: 'Team Building - Mexico City',
    date: '2024-11-12',
    excerpt: 'Mexico City delivered everything we hoped for in a team retreat and so much more. Between diving deep into ancient civilizations at the [Museum of Anthropology](https://museu.ms/museum/details/16762/national-museum-of-anthropology), exploring the historic grandeur of [Chapultepec Castle](https://mnh.inah.gob.mx/), and savoring incredible meals together, we experienced the kind of cultural immersion that bonds a team in ways no conference room ever could. The warmth and vibrancy of the city and its people made every shared moment feel both adventurous and grounding.',
    featured: true,
    tags: ['team building', 'mexico', 'remote work', 'cultural leadership', 'design teams'],
    content: `<HeroImage 
  src="/images/blog/mexico/hero_mexico.jpg" 
  alt="Team collaboration in Mexico" 
  caption="Modern design teams in Mexico blend traditional values with innovative approaches"
/>



<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
  <HeroImage 
    src="/images/blog/mexico/IMG_0012.jpg" 
    alt="Mexico Team Building 1" 
    caption=""
  />
  <HeroImage 
    src="/images/blog/mexico/IMG_0014.jpg" 
    alt="Mexico Team Building 2" 
    caption=""
  />
</div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
  <HeroImage 
    src="/images/blog/mexico/IMG_0185.jpg" 
    alt="Mexico Team Building 3" 
    caption=""
  />
  <HeroImage 
    src="/images/blog/mexico/IMG_0186.jpg" 
    alt="Mexico Team Building 4" 
    caption=""
  />
</div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
  <HeroImage 
    src="/images/blog/mexico/IMG_0188.jpg" 
    alt="Mexico Team Building 5" 
    caption=""
  />
  <HeroImage 
    src="/images/blog/mexico/IMG_0190.jpg" 
    alt="Mexico Team Building 6" 
    caption=""
  />
</div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
  <HeroImage 
    src="/images/blog/mexico/IMG_0248.jpg" 
    alt="Mexico Team Building 7" 
    caption=""
  />
  <HeroImage 
    src="/images/blog/mexico/IMG_0273.jpg" 
    alt="Mexico Team Building 8" 
    caption=""
  />
</div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
  <HeroImage 
    src="/images/blog/mexico/IMG_0306.jpg" 
    alt="Mexico Team Building 9" 
    caption=""
  />
  <HeroImage 
    src="/images/blog/mexico/IMG_0318.jpg" 
    alt="Mexico Team Building 10" 
    caption=""
  />
</div>

<div className="mt-6">
  <HeroImage 
    src="/images/blog/mexico/IMG_0320.jpg" 
    alt="Mexico Team Building 11" 
    caption=""
  />
</div>`,
    image: '/images/blog/mexico/hero_mexico.jpg',
    color: 'from-green-500/20 to-emerald-500/20',
  },
  {
    slug: 'built-in-colorado-ai-interview',
    title: 'Built In - Colorado: AI, Powerful Tool or Passing Fad?',
    date: '2023-08-17',
    excerpt: '[BuiltIn-Colorado](https://builtin.com/) reached out for my thoughts on the current and future state of AI. My portion of the article below, [full article](https://www.builtincolorado.com/articles/powerful-tool-or-passing-fad-two-colorado-pros-weigh-future-ai)',
    featured: true,
    tags: ['team building', 'colorado', 'startup culture', 'innovation', 'design teams'],
    content: `<HeroImage 
  src="/images/blog/built_in/built-in-colorado-logo-vector.png" 
  alt="Built In Colorado - Team collaboration" 
  caption="Modern design teams in Colorado blend startup culture with innovative approaches"
/>


## Q&A: Insights from the Field

### Give us some background on your experience and what you do in your current role at your company.

I'm a seasoned UX and product design professional with over 18 years of expertise in the field. Over the years, I have sharpened my skills through valuable experiences with Fortune 500 companies, top-tier agencies and dynamic startups. Currently, I am a product design director at JumpCloud, leading a talented team of product designers dedicated to shaping our cutting-edge global IT security platform.

### In your opinion, what impact will AI have on the future of design as a profession?

As UX and product designers, we must understand that we are entirely in control and responsible for all of these relationships as the user of these AI tools and services. Recognizing that we are the driving force behind this seemingly infinite source of imagination and productivity unlocks the true potential of AI and how it can enhance our workflows and creative outputs.

Alternatively, as designers become more ingrained in the AI and ML spaces, we are responsible for raising the red flag when AI is being misused. This can happen when it excludes groups of people or data or when poor design renders products unusable for their base.

> "Recognizing that we are the driving force behind this infinite source of imagination unlocks the true potential of AI."

### What do you think design professionals should do now to prepare for the integration of AI into workflows?

As a designer, it's critical to understand the capabilities of any tool we intend to use in our projects, creative processes or workflows. Once we know their power and usefulness, we can integrate these new technologies and evaluate how to use them to fit our needs.

When I begin learning about a new topic, I search for the professionals at the cutting edge and follow them on the social platforms they frequent the most. I'm also a big fan of newsletters that I can quickly scan to catch up on the latest news and trends.

As someone who has worked in design for a while, I have never been the type to jump on trendy bandwagons just for the sake of it. But in this case, AI is only getting started and will not fade into the abyss anytime soon. As designers, now is the time to learn and grow alongside this technology.

By being part of AI's evolution, we can influence its growth and help to ensure these technologies mature with a focus on usability, ethics and inclusivity. Whether you view AI as a partner or a tool within your field, I would suggest that you explore how it can benefit you personally, professionally, or competitively.

`,
    image: '/api/placeholder/600/400',
    color: 'from-blue-500/20 to-teal-500/20',
  },
  {
    slug: 'team-building-uncommon',
    title: 'Uncommon Group Presentation - How to Build Your Creative Brand',
    date: '2024-02-15',
    excerpt: 'Over the years of working closely with [Uncommon](https://uncommon.org/), I\'ve come to genuinely anticipate meeting each incoming class of designers and developers—it\'s always an energizing opportunity to share perspectives and learn from their fresh approaches.',
    featured: true,
    tags: ['team building', 'uncommon', 'creative leadership'],
    content: `<HeroImage 
  src="/images/blog/Uncommon/hero.jpeg" 
  alt="Team collaboration in Uncommon" 
  caption="Modern design teams in Uncommon blend creativity with innovation"
/>

### A few select slides from the presentation below:

<HeroImage 
  src="/images/blog/Uncommon/1.jpg" 
  alt="Uncommon Presentation Slide 1" 
  caption=""
/>

<HeroImage 
  src="/images/blog/Uncommon/2.jpg" 
  alt="Uncommon Presentation Slide 2" 
  caption=""
/>

<HeroImage 
  src="/images/blog/Uncommon/3.jpg" 
  alt="Uncommon Presentation Slide 3" 
  caption=""
/>

<HeroImage 
  src="/images/blog/Uncommon/4.jpg" 
  alt="Uncommon Presentation Slide 4" 
  caption=""
/>

<HeroImage 
  src="/images/blog/Uncommon/5.jpg" 
  alt="Uncommon Presentation Slide 5" 
  caption=""
/>

<HeroImage 
  src="/images/blog/Uncommon/6.jpg" 
  alt="Uncommon Presentation Slide 6" 
  caption=""
/>

<HeroImage 
  src="/images/blog/Uncommon/7.jpg" 
  alt="Uncommon Presentation Slide 7" 
  caption=""
/>

<HeroImage 
  src="/images/blog/Uncommon/8.jpg" 
  alt="Uncommon Presentation Slide 8" 
  caption=""
/>

<HeroImage 
  src="/images/blog/Uncommon/9.jpg" 
  alt="Uncommon Presentation Slide 9" 
  caption=""
/>

<HeroImage 
  src="/images/blog/Uncommon/10.jpg" 
  alt="Uncommon Presentation Slide 10" 
  caption=""
/>

<HeroImage 
  src="/images/blog/Uncommon/11.jpg" 
  alt="Uncommon Presentation Slide 11" 
  caption=""
/>

<HeroImage 
  src="/images/blog/Uncommon/12.jpg" 
  alt="Uncommon Presentation Slide 12" 
  caption=""
/>`,
    image: '/images/blog/Uncommon/hero.jpeg',
    color: 'from-cyan-500/20 to-blue-500/20',
  },
  {
    slug: 'team-empowerment',
    title: 'Empowering Design Teams: Beyond Process and Tools',
    date: '2024-01-08',
    excerpt: 'How thoughtful leadership creates environments where designers thrive, take ownership, and deliver their best work.',
    featured: false,
    tags: ['leadership', 'team building', 'culture', 'empowerment'],
    content: `# Empowering Design Teams: Beyond Process and Tools

The best design teams I've had the privilege to lead weren't defined by their tools or processes—they were defined by their sense of ownership, creative confidence, and shared purpose. Building these qualities requires intentional leadership that goes far beyond project management.

## Creating Psychological Safety

Before teams can do their best work, they need to feel safe to take creative risks, share half-formed ideas, and admit when they're stuck. As leaders, we set the tone through:

### Embracing Productive Failure

> "The goal isn't to avoid failure—it's to fail fast, learn quickly, and iterate toward better solutions."

When team members feel safe to experiment and potentially fail, they're more likely to push boundaries and discover breakthrough solutions.

### Encouraging Diverse Perspectives

The most innovative solutions emerge when team members with different backgrounds, experiences, and thinking styles collaborate. This means:

- Actively seeking out dissenting opinions
- Creating space for introverted team members to contribute
- Valuing questions as much as answers

## Developing Individual Strengths

Each designer brings unique talents to the team. Effective leadership means recognizing these strengths and creating opportunities for people to lean into what they do best.

### Tailored Growth Paths

Rather than one-size-fits-all development plans, I work with each team member to understand:

- What energizes them about design work
- Which skills they want to develop next
- How they prefer to learn and receive feedback
- What type of projects align with their career goals

### Ownership and Autonomy

When designers feel genuine ownership over their work, everything changes. They:

- Advocate more strongly for user needs
- Take initiative to solve problems before they escalate
- Feel more invested in project outcomes
- Develop stronger design intuition through practice

## Building Collaborative Relationships

Design doesn't happen in isolation. The most successful teams I've led understood that great design emerges from collaboration, not just within the design team, but across the entire organization.

### Cross-Functional Partnerships

Strong relationships with engineering, product, and business stakeholders amplify design impact. This requires:

- Regular relationship-building outside of project work
- Shared understanding of each discipline's constraints and goals
- Clear communication about design decisions and rationale

### Knowledge Sharing Culture

Teams that actively share knowledge grow faster and deliver more consistent work. We foster this through:

- Design critiques that focus on learning, not judgment
- Documentation of design patterns and decisions
- Regular team learning sessions and skill shares

## Measuring Team Health

Team empowerment isn't just a nice-to-have—it directly impacts business outcomes. I track team health through:

- **Engagement scores** - How energized team members feel about their work
- **Retention rates** - Are we keeping great people?
- **Internal feedback** - What do cross-functional partners say about working with design?
- **Design quality** - Are we consistently delivering work we're proud of?

## The Ripple Effect

When design teams feel empowered, the impact extends far beyond individual projects. Empowered teams:

- Become advocates for design thinking throughout the organization
- Attract other talented designers who want to work in that environment
- Build stronger products because they deeply understand user needs
- Create more innovative solutions because they're not afraid to experiment

## Practical Steps

Building an empowered team culture doesn't happen overnight, but every leader can start with small changes:

1. **Ask more questions than you give answers** - Help team members develop their own problem-solving skills
2. **Celebrate learning moments** - Share stories of productive failures and what was learned
3. **Give credit generously** - Highlight individual contributions in team and stakeholder communications
4. **Invest in relationships** - Spend time understanding what motivates each team member
5. **Model vulnerability** - Share your own learning moments and areas where you're growing

---

*Leadership is ultimately about creating conditions where others can do their best work. What practices have you found most effective for empowering your teams?*`,
    image: '/api/placeholder/600/400',
    color: 'from-green-500/20 to-emerald-500/20',
  },
];

export function getAllPosts(): BlogPost[] {
  return blogPosts.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}



export function getPostBySlug(slug: string): BlogPost | null {
  return blogPosts.find(post => post.slug === slug) || null;
}

// Function to extract the first image from blog post content
export function extractFirstImage(content: string): string | null {
  // Look for HeroImage first (more flexible with whitespace and line breaks)
  const heroImageMatch = content.match(/<HeroImage[\s\S]*?src="([^"]*)"[^>]*>/);
  if (heroImageMatch) {
    return heroImageMatch[1];
  }
  
  // Look for ImageLeft (more flexible with whitespace and line breaks)
  const imageLeftMatch = content.match(/<ImageLeft[\s\S]*?src="([^"]*)"[^>]*>/);
  if (imageLeftMatch) {
    return imageLeftMatch[1];
  }
  
  // Look for ImageRight (more flexible with whitespace and line breaks)
  const imageRightMatch = content.match(/<ImageRight[\s\S]*?src="([^"]*)"[^>]*>/);
  if (imageRightMatch) {
    return imageRightMatch[1];
  }
  
  return null;
}

export function getFeaturedPosts(): BlogPost[] {
  return getAllPosts().filter(post => post.featured);
} 