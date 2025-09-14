# Blog Template Guide

This guide explains how to use the enhanced blog template system with reusable components for creating rich, engaging blog posts.

## 🎯 Features Overview

- **Hero Images** - Full-width images with captions
- **Flexible Image Layouts** - Left/right aligned images with text wrapping
- **Quote Blocks** - Styled quote components with attribution
- **Enhanced Typography** - H1, H2, H3 headers with proper styling
- **Blog Navigation** - Next/previous post thumbnails
- **Responsive Design** - Works beautifully on all devices

## 📝 Creating a New Blog Post

### 1. Create the MDX File

Create a new `.mdx` file in `content/blog/` with the following frontmatter:

```mdx
---
title: "Your Blog Post Title"
date: "2024-02-05"
excerpt: "Brief description of your post that appears in previews"
featured: true
tags: ["tag1", "tag2", "tag3"]
---
```

### 2. Add Content

Write your content using standard Markdown with enhanced styling:

```mdx
# Main Title (H1)

## Section Title (H2)

### Subsection Title (H3)

Regular paragraph text with **bold** and *italic* formatting.

- Bullet point 1
- Bullet point 2
- Bullet point 3

1. Numbered list item 1
2. Numbered list item 2
3. Numbered list item 3

> This is a blockquote that will be styled automatically.

[Link text](https://example.com)

**Bold text** and *italic text* for emphasis.
```

### 3. Update the MDX Library

Add your new post to `lib/mdx.ts` in the `blogPosts` array:

```typescript
{
  slug: 'your-post-slug',
  title: 'Your Blog Post Title',
  date: '2024-02-05',
  excerpt: 'Brief description of your post',
  featured: true,
  tags: ['tag1', 'tag2', 'tag3'],
  content: `Your full blog post content here...`,
  image: '/api/placeholder/600/400',
  color: 'from-blue-500/20 to-purple-500/20',
}
```

## 🖼️ Using Blog Components

### Hero Image

For a full-width hero image at the start of your post:

```jsx
<HeroImage 
  src="/images/blog/hero-image.jpg" 
  alt="Descriptive alt text"
  caption="Optional caption for the image"
/>
```

### Left-Aligned Image with Text

```jsx
<ImageLeft 
  src="/images/blog/left-image.jpg" 
  alt="Descriptive alt text"
  caption="Optional caption"
>
  <p>Your text content here that will wrap around the image on the right.</p>
  <p>You can include multiple paragraphs and other content.</p>
</ImageLeft>
```

### Right-Aligned Image with Text

```jsx
<ImageRight 
  src="/images/blog/right-image.jpg" 
  alt="Descriptive alt text"
  caption="Optional caption"
>
  <p>Your text content here that will wrap around the image on the left.</p>
  <p>You can include multiple paragraphs and other content.</p>
</ImageRight>
```

### Quote Block

```jsx
<QuoteBlock 
  quote="Your quote text here"
  author="Author Name"
  role="Author Role"
  company="Company Name"
/>
```

## 📊 Typography Hierarchy

### Headers

- **H1** (`# Title`) - Main post title, large and prominent
- **H2** (`## Section`) - Major sections, medium size
- **H3** (`### Subsection`) - Subsections, smaller size

### Text Formatting

- **Bold**: `**text**` or `__text__`
- **Italic**: `*text*` or `_text_`
- **Links**: `[text](url)`
- **Code**: `` `code` `` (inline) or ``` ``` ``` (block)

### Lists

- **Bullet lists**: `- item` or `* item`
- **Numbered lists**: `1. item`

### Blockquotes

```markdown
> This is a blockquote that will be styled with a left border and background.
```

## 🎨 Styling Features

### Automatic Styling

The blog template automatically applies:

- **Typography**: Clean, readable fonts with proper hierarchy
- **Colors**: Consistent with your design system
- **Spacing**: Proper margins and padding
- **Responsive**: Works on all screen sizes
- **Animations**: Smooth scroll animations for images

### Custom Styling

You can override styles by modifying:

- `app/globals.css` - Global typography styles
- Component files - Individual component styling
- `app/blog/[slug]/page.tsx` - Blog post page layout

## 🔗 Blog Navigation

The blog navigation component automatically:

- Shows previous/next post thumbnails
- Displays post titles and excerpts
- Links to the actual posts
- Handles edge cases (first/last post)
- Provides smooth hover animations

## 📱 Responsive Design

All components are fully responsive:

- **Desktop**: Full layout with side-by-side content
- **Tablet**: Adjusted spacing and sizing
- **Mobile**: Stacked layout for optimal reading

## 🚀 Best Practices

### Content Structure

1. **Start with a compelling title** (H1)
2. **Use H2 for major sections**
3. **Use H3 for subsections**
4. **Include relevant images** with proper alt text
5. **End with a call to action**

### Image Guidelines

- **Hero images**: 1200x600px minimum
- **Content images**: 800x600px minimum
- **Format**: JPG for photos, PNG for graphics
- **Alt text**: Descriptive and accessible
- **Captions**: Optional but recommended

### Writing Tips

- **Keep paragraphs short** (2-3 sentences max)
- **Use bullet points** for lists
- **Include quotes** for emphasis
- **Add relevant links** to external resources
- **End with a question** to encourage engagement

## 🔧 Technical Details

### File Structure

```
design-portfolio/
├── content/blog/           # MDX files
├── components/blog/        # Blog components
│   ├── HeroImage.tsx
│   ├── ImageLeft.tsx
│   ├── ImageRight.tsx
│   ├── QuoteBlock.tsx
│   └── BlogNavigation.tsx
├── lib/mdx.ts             # Blog data
└── app/blog/[slug]/       # Blog post pages
```

### Component Props

#### HeroImage
```typescript
interface HeroImageProps {
  src: string;        // Image URL
  alt: string;        // Alt text
  caption?: string;   // Optional caption
}
```

#### ImageLeft/ImageRight
```typescript
interface ImageProps {
  src: string;        // Image URL
  alt: string;        // Alt text
  caption?: string;   // Optional caption
  children: React.ReactNode; // Content to wrap
}
```

#### QuoteBlock
```typescript
interface QuoteBlockProps {
  quote: string;      // Quote text
  author?: string;    // Author name
  role?: string;      // Author role
  company?: string;   // Company name
}
```

## 🎯 Example Blog Post

See `content/blog/design-leadership-example.mdx` for a complete example that demonstrates all features.

## 🚀 Getting Started

1. **Create your MDX file** in `content/blog/`
2. **Add frontmatter** with title, date, excerpt, etc.
3. **Write your content** using Markdown
4. **Add to MDX library** in `lib/mdx.ts`
5. **Test your post** by visiting `/blog/your-slug`

The blog template system is designed to be flexible, maintainable, and easy to use while providing a rich, engaging reading experience for your audience. 