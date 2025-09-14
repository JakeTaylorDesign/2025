import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { BlogPost, getAllPosts as getAllHardcodedPosts, getPostBySlug as getHardcodedPost } from './mdx';

const postsDirectory = path.join(process.cwd(), 'content/blog');

export function getPostsFromFiles(): BlogPost[] {
  if (!fs.existsSync(postsDirectory)) {
    return [];
  }
  
  const filenames = fs.readdirSync(postsDirectory);
  const posts = filenames
    .filter((name) => name.endsWith('.mdx'))
    .map((name) => {
      const fullPath = path.join(postsDirectory, name);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const { data, content } = matter(fileContents);
      const slug = name.replace(/\.mdx$/, '');
      
      return {
        slug,
        title: data.title || '',
        date: data.date || '',
        excerpt: data.excerpt || '',
        featured: data.featured || false,
        tags: data.tags || [],
        content,
        image: data.image,
        color: data.color,
        draft: data.draft || false,
      } as BlogPost;
    });
  
  // Filter out draft posts
  return posts.filter(post => !post.draft);
}

export function getAllPosts(): BlogPost[] {
  const postsFromFiles = getPostsFromFiles();
  const hardcodedPosts = getAllHardcodedPosts();
  const allPosts = [...postsFromFiles, ...hardcodedPosts];
  
  // Remove duplicates (file posts take precedence)
  const uniquePosts = allPosts.filter((post, index, self) => 
    index === self.findIndex(p => p.slug === post.slug)
  );
  
  return uniquePosts.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}

export function getPostBySlug(slug: string): BlogPost | null {
  // First try to get from MDX files (getPostsFromFiles already filters drafts)
  const postsFromFiles = getPostsFromFiles();
  const filePost = postsFromFiles.find(post => post.slug === slug);
  
  if (filePost) {
    return filePost;
  }
  
  // Fallback to hardcoded posts if not found in files
  return getHardcodedPost(slug);
}
