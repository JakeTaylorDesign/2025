"use client";
import dynamic from "next/dynamic";
import { MDXRemoteSerializeResult } from "next-mdx-remote";

const MDXClientRenderer = dynamic(
  () => import("./MDXClientRenderer"),
  { ssr: false }
) as React.ComponentType<{ mdxSource: MDXRemoteSerializeResult }>;

export default function MDXClientWrapper({ mdxSource }: { mdxSource: MDXRemoteSerializeResult }) {
  return <MDXClientRenderer mdxSource={mdxSource} />;
}
