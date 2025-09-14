"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import AnimatedSection from "@/components/AnimatedSection";
import SpotlightCard from "@/components/SpotlightCard";

const testimonials = [
  {
    quote: "He is very capable managing a large design team that has to juggle a ton of different programs we would throw his way - he is strong at both understanding the problem to be solved as well as managing expectations so that we could manage the pace of portfolio development with few surprises.",
    author: "Greg Armanini",
    role: "VP, Product Management",
    company: "JumpCloud",
    image: "/images/testimonials/greg.png"
  },
  {
    quote: "As a leader, I appreciate Jake's empathetic and clear style. In our work together, he excelled at building relationships with his business and engineering partners. Within the UX team, he built solid relationships with his peer managers, his team, and the entire UX team.",
    author: "Kim Wachtel",
    role: "VP, Product Design",
    company: "JumpCloud",
    image: "/images/testimonials/kim.png"
  },
  {
    quote: "Jake is an exceptional UX leader. His empathetic and visionary design leadership sets him apart. Jake's servant-leader approach is remarkable – he guides his team with expertise and empowers them to flourish. His deep understanding of design thinking and user research is evident in his consistently bringing a user-centered design approach to every project.",
    author: "Erica Wilhelmy",
    role: "Director, Product Design",
    company: "JumpCloud",
    image: "/images/testimonials/erica.png"
  },
  {
    quote: "As a Design Leader at JumpCloud, he excelled at guiding a team of designers toward a consistent and excellent user experience throughout our Devices functionality. He mentored designers and brought them up to new skill levels, and enabled his most talented designers to flourish throughout the organization and help them see where they could hone their craft even further.",
    author: "Tom Bridge",
    role: "Director, Product Management",
    company: "JumpCloud",
    image: "/images/testimonials/tom.png"
  },
  {
    quote: "Jake is a designer that understands that ultimately design is about solving problems and not about making things look pretty. He is a critical thinker that is not afraid to ask the difficult questions, reform his own opinions and approach problems from an angle that others may have missed. I was impressed with his grasp of complex user interface and interaction issues and how quickly he was able to translate his experience into true knowledge.",
    author: "Jonathan Jaynes",
    role: "UX Director",
    company: "CQG",
    image: "/images/testimonials/JJ.png"
  },
  {
    quote: "A skilled practitioner of his craft, Jake also has the appetite and acumen to understand the business as a whole; creating value far beyond the average designer. Jake's solid grasp of design fundamentals and his 'can do' attitude allow him to easily adapt to new mediums and tasks. Case in point, he was wholly responsible for the design of our mobile application - an award winning app that was lauded by customers, analysts, and investors.",
    author: "Nathan Bobbin",
    role: "SVP, Product Management",
    company: "eWise",
    image: "/images/testimonials/nathan.png"
  },
  {
    quote: "Smart, hardworking, and focused. 3 things that don't begin to describe Jake Taylor. Exceptionally smart, the most hardworking, focused like a NASA engineer. During my time with Jake at Merkle, any time I entrusted him with a UX analysis or new interaction solution, I was always given a result that exceeded my lofty expectations. Jake is a great asset for any UX team.",
    author: "Kevin Walsh",
    role: "VP, Experience Design",
    company: "Merkle",
    image: "/images/testimonials/kevin.png"
  },
  {
    quote: "Jake has been an invaluable teammate on every project we've worked on together. He's an exceptional team leader; under his direction, designers and researchers can maximize their value add and their own professional development. I'm always impressed by both his ease and professionalism when client facing, as well as the spirit of collaboration and support he brings to project groups.",
    author: "Beki Liford",
    role: "Program Management",
    company: "Rocket Communications",
    image: "/images/testimonials/beki.png"
  },
  {
    quote: "I've had the pleasure of working with Jake directly and indirectly on a number of different projects and activities at Pitney Bowes. He's a skilled and inventive craftsman who deeply understands UX design components and what it takes to create useful and intuitive software applications. He is responsive, smart and easy to get along with. Jake is great at balancing progress with cost effective use of engineering hours.",
    author: "Darin Gachne",
    role: "VP, SW Engineering",
    company: "Pitney Bowes",
    image: "/images/testimonials/darin.png"
  },
  {
    quote: "I have had the pleasure of working with Jake on multiple projects over the past two years. Not only is Jake an excellent UX/UI designer, he is an awesome person to work with. I have worked with many UX/UI designers over my 25+ years of development and I can honestly say: Jake is one of the best. What makes Jake valuable is not just his UX experience, but his personality and communication skills.",
    author: "Ron Michaud",
    role: "Principal SW Engineer",
    company: "Pitney Bowes",
    image: "/images/testimonials/ron.png"
  },
  {
    quote: "I've reported to Jake as my manager and project lead over the last year. He is a very knowledgeable UX designer, articulate professional and effective listener. As a manager, he knows how to bring the best out of his teammates, by inspiring, encouraging and mentoring them. I gained a variety of skills that helped me grow as a professional under his guidance.",
    author: "Sonia Ghazali",
    role: "Senior UX Researcher",
    company: "Rocket Communications",
    image: "/images/testimonials/sonia.png"
  },
  {
    quote: "Jake is a multi dimensional Information Architect. His skills and insights far exceed the typical skills of his craft and profession. He is quick to ideas and imaginative in his approach. He was a huge asset when it came time for business development projects. Beyond that, Jake is truly a golden personality that gives optimism and joy to any team. His 'can do' attitude gave his manager, and myself a tremendous amount of confidence.",
    author: "John Roberts",
    role: "VP, Creative Group",
    company: "Merkle",
    image: "/images/testimonials/john_VP.png"
  },
  {
    quote: "Working as a member of Jake's team, I have found him to be an invaluable leader and manager. As a team lead, his ability to understand the scope of a project and cross-communicate with both customers and team members has ensured successful development of project deliverables. As a personnel manager, he enables his reports to succeed and thrive in their roles, and encourages their professional growth and development. Jake would be an asset to any team, I highly recommend him.",
    author: "Steve Goodwin",
    role: "Design Lead",
    company: "Rocket Communications",
    image: "/images/testimonials/steve-1.png"
  },
  {
    quote: "Jake reviewed my design portfolio when he graciously acted as a panelist for the Flatiron School's Portfolio Review event recently. He is incredibly knowledgeable about design, and that clearly came through in the feedback he gave me which was extremely actionable, insightful, and specific. More than that though, he took it upon himself to follow up afterward to see how everything worked out, which speaks volumes to not only his commitment to his craft but also his commitment to helping those around him become the best designers possible. I feel very fortunate to have heard his insight into design, and very much hope to learn more from him in the future.",
    author: "Joey Sbarro",
    role: "UX Student",
    company: "Flatiron Bootcamp",
    image: "/images/testimonials/joey.png"
  },
  {
    quote: "Jake has been an instrumental piece of the design educational equation at Flatiron School. We look for mentors like Jake who are not only willing to give back to the design community but can be thoughtful and actionable with their feedback. I'd be happy camper being able to collaborate and work with Jake in future initiatives.",
    author: "Jancy Liu",
    role: "Director, Product Design",
    company: "Bank of America",
    image: "/images/testimonials/jancy.png"
  },
  {
    quote: "As a designer and leader, Jake was always calm, cool, and collected. He was also the first to reach out to me and ask me to lunch so we could get to know each other professionally. Little things like that coupled with Jake's professionalism are some of the things I like most about him. He always brings a level of diplomacy and insight to every discussion which is something I valued and learned from. Any product team would be lucky to have Jake as a leader and mentor.",
    author: "Nick Conflitti",
    role: "Senior Product Designer",
    company: "JumpCloud",
    image: "/images/testimonials/nick.png"
  },
  {
    quote: "Jake was a delightful team members. I was lucky to work with him and see his passion for design, leadership and mentorship. He is dedicated, thorough and detailed orientation. Working with Jake I got to learn a lot about myself and about leadership. He's a an exemplary Director, designer and human being. Again, I was lucky to work with him.",
    author: "Alexis Marino",
    role: "Sr Manager, Design Systems",
    company: "JumpCloud",
    image: "/images/testimonials/alexis.png"
  },
  {
    quote: "I consider myself lucky to have crossed paths with Jake at the right time in my career. As an early career designer, I leaned on Jake for advice, expertise and guidance which paved the way for my own growth. I'm always impressed by the way Jake handled difficult situations and decisions related to design, by connecting the decision making back to user goals and company missions. When designing and leading he considers all viewpoints to give a thoughtful and level approach.",
    author: "Isaac Kazin",
    role: "Product Designer",
    company: "JumpCloud",
    image: "/images/testimonials/isaac.jpeg"
  }
];

export default function TestimonialsPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    // Remove authentication requirement
    setIsAuthenticated(true);
    setIsLoading(false);
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-accent mx-auto mb-4"></div>
          <p className="text-muted">Loading...</p>
        </div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return null;
  }

  return (
    <main className="pt-24 pb-16 px-6">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <AnimatedSection>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Kind Words
            </h1>
          </AnimatedSection>
          
          <AnimatedSection delay={0.2}>
            <p className="text-xl md:text-2xl text-muted leading-relaxed max-w-3xl mx-auto">
              Reflections from colleagues, clients, and team members on our 
              collaborations and the impact of strategic design leadership.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Content Section */}
      <div className="max-w-6xl mx-auto">
        <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
          {testimonials.map((testimonial, index) => (
            <AnimatedSection key={index} delay={index * 0.1}>
                              <SpotlightCard className="break-inside-avoid mb-8" spotlightColor="rgba(238, 167, 109, 0.25)">
                <div className="flex flex-col">
                  <blockquote className="text-lg text-white leading-relaxed mb-6">
                    &ldquo;{testimonial.quote}&rdquo;
                  </blockquote>
                  <div className="border-t border-neutral-700 pt-6">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 overflow-hidden">
                        {testimonial.image ? (
                          <img 
                            src={testimonial.image} 
                            alt={`${testimonial.author}`}
                            className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-300 ease-in-out"
                            onError={(e) => {
                              // Fallback to placeholder if image fails to load
                              const target = e.target as HTMLImageElement;
                              target.style.display = 'none';
                              target.nextElementSibling?.classList.remove('hidden');
                            }}
                          />
                        ) : null}
                        {/* Fallback placeholder */}
                        <div className={`w-full h-full bg-gradient-to-br from-blue-400/20 to-cyan-400/10 rounded-full flex items-center justify-center ${testimonial.image ? 'hidden' : ''}`}>
                          <div className="w-6 h-6 bg-blue-400/30 rounded-full"></div>
                        </div>
                      </div>
                      <div className="flex-1">
                        <div className="font-medium" style={{ color: '#EEA76D' }}>
                          {testimonial.author}
                        </div>
                        <div className="text-gray-300">
                          {testimonial.role}
                        </div>
                        <div className="text-sm text-gray-400">
                          {testimonial.company}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </SpotlightCard>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={0.8}>
          <div className="text-center mt-16 pt-16 border-t border-border">
            <h2 className="text-2xl md:text-3xl font-light text-foreground mb-6">
              Work With Me
            </h2>
            <p className="text-lg text-muted mb-8 max-w-2xl mx-auto">
              Interested in collaborating? I&apos;m always open to discussing new 
              opportunities and meaningful projects.
            </p>
            <button className="px-8 py-4 bg-accent text-background font-medium rounded-full hover:bg-foreground transition-colors">
              Start a Conversation
            </button>
          </div>
        </AnimatedSection>
      </div>
    </main>
  );
} 