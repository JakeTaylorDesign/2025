# Design Leadership Portfolio

A modern, responsive portfolio website built for design leaders to showcase their work, share insights, and connect with the community.

## ✨ Features

- **Modern Design System** - Clean, minimalist design with dark theme and high contrast
- **Responsive Layout** - Mobile-first approach with smooth animations
- **Blog System** - MDX-powered blog with custom components
- **Project Showcase** - Dynamic project pages with testimonials
- **Real-time Weather** - Live weather widget in navigation
- **Performance Optimized** - Built with Next.js 15 and Turbopack
- **TypeScript** - Full type safety and strict mode compliance
- **SEO Ready** - Meta tags, structured data, and optimized for search engines

## 🛠 Tech Stack

- **Framework**: Next.js 15.4.2 with App Router
- **Language**: TypeScript (strict mode)
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Content**: MDX with custom components
- **Icons**: Material-UI Icons
- **Deployment**: Vercel-ready

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/JakeTaylorDesign/design-portfolio.git
   cd design-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   ```
   
   Add your API keys:
   ```env
   NEXT_PUBLIC_OPENWEATHER_API_KEY=your_openweather_api_key
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
design-portfolio/
├── app/                    # Next.js App Router pages
│   ├── blog/              # Blog pages and MDX content
│   ├── projects/          # Project showcase pages
│   ├── testimonials/      # Client testimonials
│   └── giving-back/       # Community involvement
├── components/            # Reusable React components
│   ├── blog/             # Blog-specific components
│   └── ...               # General UI components
├── content/              # MDX content files
│   └── blog/             # Blog posts
├── lib/                  # Utility functions
├── public/               # Static assets
└── styles/               # Global styles
```

## 🎨 Customization

### Adding Blog Posts

1. Create a new `.mdx` file in `content/blog/`
2. Add frontmatter with metadata:
   ```mdx
   ---
   title: "Your Post Title"
   date: "2024-01-01"
   excerpt: "Brief description of your post"
   featured: true
   tags: ["design", "leadership"]
   ---
   ```
3. Write your content using MDX syntax

### Adding Projects

1. Edit `lib/projects.ts` to add new projects
2. Include project metadata, images, and testimonials
3. Projects will automatically appear on the projects page

### Styling

- Modify `app/globals.css` for global styles
- Use Tailwind CSS classes for component styling
- Customize the design system in `tailwind.config.js`

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically on every push

### Manual Deployment

```bash
npm run build
npm start
```

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript checks

## 🔧 Configuration

### Environment Variables

- `OPENWEATHER_API_KEY` - Required for weather widget
- `NEXT_PUBLIC_SITE_URL` - Your site URL for meta tags

### Next.js Config

- MDX support enabled
- Image optimization configured
- TypeScript strict mode enabled

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- Icons from [Material-UI](https://mui.com/)
- Animations with [Framer Motion](https://www.framer.com/motion/)

---

**Built with ❤️ for the design community**
