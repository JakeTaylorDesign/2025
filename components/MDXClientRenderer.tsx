"use client";
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import HeroImage from './blog/HeroImage';
import ImageLeft from './blog/ImageLeft';
import ImageRight from './blog/ImageRight';
import ImageGrid from './blog/ImageGrid';
import ImageColumn from './blog/ImageColumn';
import VideoEmbed from './blog/VideoEmbed';
import ExternalLinkButton from './blog/ExternalLinkButton';
import QuoteBlock from './blog/QuoteBlock';

interface MDXClientRendererProps {
  mdxSource: MDXRemoteSerializeResult;
}

export default function MDXClientRenderer({ mdxSource }: MDXClientRendererProps) {
  const components = {
    HeroImage,
    ImageLeft,
    ImageRight,
    ImageGrid,
    ImageColumn,
    VideoEmbed,
    ExternalLinkButton,
    QuoteBlock,
  };
  return <MDXRemote {...mdxSource} components={components} />;
}
