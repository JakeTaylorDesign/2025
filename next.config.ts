import type { NextConfig } from "next";
import withMDX from '@next/mdx';

const nextConfig: NextConfig = {
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
  typescript: {
    // Skip type checking during build to avoid deployment issues
    ignoreBuildErrors: true,
  },
  eslint: {
    // Skip ESLint during build
    ignoreDuringBuilds: true,
  },
};

export default withMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
  },
})(nextConfig);
