# 🚀 Vercel Deployment Guide

This guide will walk you through deploying your Design Leadership Portfolio to Vercel.

## 📋 Prerequisites

- GitHub account with your repository pushed
- Vercel account (free tier available)
- OpenWeatherMap API key (optional, for weather widget)

## 🎯 Step-by-Step Deployment

### 1. Push to GitHub

First, ensure your code is pushed to GitHub:

```bash
# Add your GitHub remote (replace YOUR_USERNAME with your GitHub username)
git remote add origin https://github.com/YOUR_USERNAME/design-portfolio.git

# Push your code
git branch -M main
git push -u origin main
```

### 2. Connect to Vercel

1. **Go to [Vercel.com](https://vercel.com)** and sign in
2. **Click "New Project"**
3. **Import your GitHub repository**:
   - Select your `design-portfolio` repository
   - Vercel will auto-detect it's a Next.js project

### 3. Configure Project Settings

Vercel will automatically detect the correct settings, but verify:

- **Framework Preset**: Next.js
- **Root Directory**: `./` (leave empty)
- **Build Command**: `npm run build` (auto-detected)
- **Output Directory**: `.next` (auto-detected)
- **Install Command**: `npm install` (auto-detected)

### 4. Set Environment Variables

In the Vercel project settings, add these environment variables:

#### Required (for weather widget):
```
NEXT_PUBLIC_OPENWEATHER_API_KEY=your_openweather_api_key_here
```

#### Optional:
```
NEXT_PUBLIC_SITE_URL=https://your-domain.vercel.app
```

### 5. Deploy

1. **Click "Deploy"**
2. **Wait for build** (usually 2-3 minutes)
3. **Your site will be live** at `https://your-project-name.vercel.app`

## 🔧 Post-Deployment

### Custom Domain (Optional)

1. Go to your Vercel project dashboard
2. Click **"Settings"** → **"Domains"**
3. Add your custom domain
4. Follow DNS configuration instructions

### Environment Variables

To update environment variables after deployment:

1. Go to **Project Settings** → **Environment Variables**
2. Add or modify variables
3. Redeploy (automatic with Vercel)

## 📊 Performance Monitoring

Vercel provides built-in analytics:

- **Performance**: Core Web Vitals
- **Analytics**: Page views, visitors
- **Functions**: Serverless function performance
- **Edge Network**: Global CDN performance

## 🔄 Continuous Deployment

Vercel automatically deploys on:

- **Push to main branch**: Production deployment
- **Pull requests**: Preview deployments
- **Manual deployment**: From Vercel dashboard

## 🛠 Troubleshooting

### Build Failures

If your build fails:

1. **Check build logs** in Vercel dashboard
2. **Test locally**: `npm run build`
3. **Common issues**:
   - Missing environment variables
   - TypeScript errors
   - Missing dependencies

### Environment Variables

If the weather widget isn't working:

1. **Verify API key** is set in Vercel
2. **Check variable name**: `NEXT_PUBLIC_OPENWEATHER_API_KEY`
3. **Redeploy** after adding variables

### Performance Issues

- **Enable Vercel Analytics** for monitoring
- **Check Core Web Vitals** in Google PageSpeed Insights
- **Optimize images** using Next.js Image component

## 🎉 Success!

Your portfolio is now live and will automatically update whenever you push changes to GitHub!

### Next Steps

1. **Share your portfolio** with the design community
2. **Add analytics** (Google Analytics, Vercel Analytics)
3. **Set up custom domain** for professional branding
4. **Monitor performance** and optimize as needed

---

**Need help?** Check out [Vercel's documentation](https://vercel.com/docs) or the [Next.js deployment guide](https://nextjs.org/docs/deployment). 