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
    title: 'Building High-Performing Teams in Mexico: A Design Leader\'s Perspective',
    date: '2024-02-10',
    excerpt: 'Insights and strategies for building successful design teams in Mexico\'s vibrant tech landscape, from cultural integration to collaborative innovation.',
    featured: true,
    tags: ['team building', 'mexico', 'remote work', 'cultural leadership', 'design teams'],
    content: `# Building High-Performing Teams in Mexico: A Design Leader's Perspective

Mexico's tech landscape is a vibrant blend of tradition and innovation, where rich cultural heritage meets cutting-edge technology. As a design leader working with teams across Mexico, I've discovered that successful team building here requires a unique approach that honors cultural values while fostering creative excellence.

<HeroImage 
  src="/images/blog/mexico/hero_mexico.jpg" 
  alt="Team collaboration in Mexico" 
  caption="Modern design teams in Mexico blend traditional values with innovative approaches"
/>

## The Cultural Foundation

Mexico's rich cultural heritage provides a unique foundation for building design teams. The concept of "familismo" (family-centered values) translates beautifully into collaborative design environments.

### Understanding Cultural Nuances

> "In Mexico, relationships and trust are the foundation of successful collaboration. Building genuine connections is the first step to building great teams."

Mexican work culture emphasizes:

- **Personal Relationships**: Building strong interpersonal connections before focusing on tasks
- **Collective Achievement**: Celebrating team success over individual recognition
- **Respect for Hierarchy**: Balancing traditional respect with modern collaborative structures

## Remote Collaboration

Mexico's strategic position as a nearshore tech hub means design teams often collaborate across multiple time zones with North American partners. This presents both challenges and opportunities.

<ImageLeft 
  src="/images/blog/mexico/IMG_0185.jpg" 
  alt="Team members engaged in a discussion" 
  caption="Modern collaboration tools bridge geographical and cultural gaps"
/>

Effective remote team building in Mexico requires:

- **Flexible Scheduling**: Accommodating family commitments and cultural celebrations
- **Cultural Sensitivity**: Understanding Mexican holidays, traditions, and work-life balance
- **Technology Integration**: Using tools that work reliably across different internet infrastructures

## Design Leadership

Leading design teams in Mexico requires adapting management principles to local cultural contexts.

<ImageRight 
  src="/images/blog/mexico/IMG_0273.jpg" 
  alt="Local leadership in action" 
  caption="Effective leadership adapts to cultural context while maintaining design excellence"
/>

Successful design leaders in Mexico:

- **Lead with Empathy**: Understanding and respecting personal and family commitments
- **Provide Clear Direction**: Mexican teams often prefer explicit guidance and clear expectations
- **Build Trust Relationships**: Traditional "confianza" (trust) relationships translate well to design mentorship

## Conclusion

Building high-performing design teams in Mexico is both an art and a science. It requires understanding cultural nuances, adapting global best practices to local contexts, and creating environments where creativity can flourish within the framework of Mexican values.

The most successful teams I've worked with in Mexico have been those that honor tradition while embracing innovation, that build strong relationships while delivering excellent work, and that celebrate both individual achievement and collective success.

## Team Building in Action

Here's a visual journey through the collaborative spirit and cultural richness that defines successful team building in Mexico's dynamic tech landscape.

<ImageGrid />`,
    image: '/api/placeholder/600/400',
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
  {
    slug: 'design-culture-transformation',
    title: 'Transforming Organizational Culture Through Design Leadership',
    date: '2024-01-29',
    excerpt: 'How design leaders can drive cultural change, build design maturity, and create organizations that truly value user-centered thinking.',
    featured: false,
    tags: ['culture change', 'design maturity', 'organizational transformation', 'leadership'],
    content: `# Transforming Organizational Culture Through Design Leadership

Design leadership isn't just about managing design teams—it's about transforming how entire organizations think about and value design. The most impactful design leaders I've worked with understand that their role extends far beyond the design department.

## The Cultural Challenge

Many organizations view design as a service function, something that happens after the "real" work is done. This mindset creates fundamental problems:

- Design decisions made without design input
- User needs considered as an afterthought
- Innovation stifled by process and hierarchy
- Design teams isolated from strategic conversations

The challenge for design leaders is to shift this mindset from "design as decoration" to "design as strategy."

## Building Design Maturity

I've found that organizations progress through predictable stages of design maturity. Understanding where your organization sits helps tailor your approach:

### Stage 1: Design as Service
- Designers work on individual projects
- No design strategy or systematic approach
- Design decisions made by non-designers
- Focus on aesthetics over user experience

### Stage 2: Design as Process
- Design processes and methodologies adopted
- User research and testing implemented
- Design teams growing in size and influence
- Still reactive rather than strategic

### Stage 3: Design as Strategy
- Design integrated into business strategy
- Design leaders at executive level
- User-centered decision making
- Design thinking across organization

### Stage 4: Design as Culture
- Design embedded in organizational DNA
- Innovation driven by user insights
- Design excellence as competitive advantage
- Continuous learning and improvement

## Strategies for Cultural Transformation

### 1. Start with Education
Design literacy is the foundation of cultural change. I've found success with:

**Executive Education**
- Design thinking workshops for leadership
- Case studies showing design's business impact
- Regular design reviews with executives
- Design metrics in business reporting

**Cross-Functional Training**
- Design principles for product managers
- User research methods for engineers
- Design critique skills for stakeholders
- Design system training for all teams

### 2. Create Design Champions
Cultural change requires advocates throughout the organization:

**Identifying Champions**
- People who naturally think user-first
- Leaders who understand design's value
- Team members who can translate design to business
- Stakeholders who can influence others

**Supporting Champions**
- Providing resources and training
- Creating opportunities to showcase design impact
- Recognizing and rewarding design advocacy
- Building networks of design supporters

### 3. Embed Design in Processes
Design becomes cultural when it's part of how work gets done:

**Strategic Planning**
- Design input in business strategy development
- User research informing product roadmaps
- Design metrics in OKRs and KPIs
- Design reviews in major decision processes

**Product Development**
- Design sprints and workshops
- User testing integrated into development cycles
- Design system governance and maintenance
- Continuous user feedback loops

### 4. Measure and Communicate Impact
Cultural change requires evidence of success:

**Design Metrics**
- User satisfaction and engagement
- Design system adoption rates
- Time-to-market improvements
- Design debt reduction

**Business Impact**
- Revenue impact of design improvements
- Customer retention and acquisition
- Operational efficiency gains
- Competitive differentiation

## Overcoming Resistance

Cultural transformation inevitably faces resistance. Here are strategies I've found effective:

### Addressing Common Concerns
**"Design takes too long"**
- Show how good design reduces rework
- Demonstrate faster time-to-market with design systems
- Share examples of design preventing costly mistakes

**"Design is subjective"**
- Establish clear design principles and criteria
- Use data and research to support decisions
- Create design review processes with clear guidelines

**"We can't afford design"**
- Calculate ROI of design investments
- Show cost savings from reduced rework
- Demonstrate competitive advantage of good design

### Building Alliances
Cultural change requires allies across the organization:

**Engineering Partnerships**
- Collaborative design and development processes
- Shared ownership of user experience
- Technical feasibility in design decisions
- Design system implementation support

**Product Management Alignment**
- User research informing product strategy
- Design metrics in product success criteria
- Design input in feature prioritization
- Shared responsibility for user outcomes

**Executive Sponsorship**
- Design leaders at executive table
- Regular design impact reporting
- Design investment in budget planning
- Design excellence as organizational priority

## Sustaining Cultural Change

Cultural transformation isn't a one-time event—it requires ongoing effort:

### Continuous Learning
- Regular design workshops and training
- Industry best practices and trends
- Design team skill development
- Cross-functional design education

### Recognition and Rewards
- Celebrating design successes
- Recognizing design champions
- Including design in performance metrics
- Design awards and recognition programs

### Feedback and Iteration
- Regular assessment of design maturity
- Feedback from stakeholders and users
- Continuous improvement of design processes
- Adaptation to organizational changes

## The Long-Term Vision

The goal of cultural transformation is to create organizations where:

**Design is Strategic**
- Design leaders participate in strategic planning
- User insights drive business decisions
- Design excellence is a competitive advantage
- Innovation is user-centered

**Design is Collaborative**
- Cross-functional teams work together
- Design thinking is everyone's responsibility
- User needs are considered in all decisions
- Design processes are transparent and inclusive

**Design is Measurable**
- Design impact is tracked and reported
- Design investments show clear ROI
- Design quality is consistently high
- Design maturity continues to grow

## Moving Forward

Transforming organizational culture through design leadership is a long-term commitment that requires patience, persistence, and strategic thinking. The organizations that succeed are those that understand that design isn't just about making things look good—it's about creating value for users and businesses through thoughtful, strategic design decisions.

The key is to start small, build momentum, and never stop advocating for the value of design in creating better products, services, and experiences.

---

*What strategies have you found most effective for driving cultural change around design in your organization? I'd love to hear about your experiences and lessons learned.*`,
    image: '/api/placeholder/600/400',
    color: 'from-purple-500/20 to-pink-500/20',
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