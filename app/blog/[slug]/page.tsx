import { use } from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getPostBySlug, getAllPosts } from "@/lib/mdx-server";
import AnimatedSection from "@/components/AnimatedSection";
import BlogNavigation from "@/components/blog/BlogNavigation";
import HeroImage from "@/components/blog/HeroImage";
import ImageLeft from "@/components/blog/ImageLeft";
import ImageRight from "@/components/blog/ImageRight";
import ImageGrid from "@/components/blog/ImageGrid";
import VideoEmbed from "@/components/blog/VideoEmbed";
import QuoteBlock from "@/components/blog/QuoteBlock";
import { MDXRemoteSerializeResult } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';
import MDXClientWrapper from '@/components/MDXClientWrapper';

// Simple markdown parser for excerpts (converts [text](url) to <a> tags)
function parseExcerptMarkdown(text: string): string {
  if (!text) return '';
  
  // Convert markdown links [text](url) to HTML <a> tags
  return text.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer" class="text-accent hover:text-foreground transition-colors duration-300 underline">$1</a>');
}

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  const allPosts = getAllPosts();

  if (!post) {
    notFound();
  }
  const safePost = post!;

  // Map custom components for MDX
  const components = {
    HeroImage: (props: any) => <></>,
    ImageLeft: (props: any) => <></>,
    ImageRight: (props: any) => <></>,
    ImageGrid: (props: any) => <ImageGrid {...props} />,
    VideoEmbed: (props: any) => <VideoEmbed {...props} />,
    QuoteBlock: (props: any) => <QuoteBlock {...props} />,
  };

  // Serialize the MDX content
  const mdxSource = await (await import('next-mdx-remote/serialize')).serialize(safePost.content);

  return (
    <main className="pt-24 pb-16 px-6">
      <div className="max-w-4xl mx-auto">
        <AnimatedSection>
          <div className="mb-8">
            <Link href="/blog" className="text-accent hover:text-accent/80 transition-colors">
              ← Back to Blog
            </Link>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <article className="prose prose-lg prose-invert max-w-none">
            <header className="mb-12">
              <h1 className="text-4xl md:text-5xl font-light text-foreground mb-6 leading-tight">
                {safePost.title}
              </h1>
              <div className="flex flex-wrap items-center gap-4 text-muted mb-8">
                <time dateTime={safePost.date}>
                  {new Date(safePost.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </time>
                {safePost.tags && safePost.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {safePost.tags.map((tag: string) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-sm bg-secondary text-foreground rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
              {safePost.excerpt && (
                <p 
                  className="text-xl text-muted leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: parseExcerptMarkdown(safePost.excerpt) }}
                />
              )}
            </header>

            <div className="content">
              <MDXClientWrapper mdxSource={mdxSource} />
            </div>
          </article>
        </AnimatedSection>

        {/* Blog Navigation */}
        <BlogNavigation currentSlug={slug} posts={allPosts} />
      </div>
    </main>
  );
} 