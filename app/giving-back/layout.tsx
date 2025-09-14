import type { Metadata } from "next";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Giving Back - Jake Taylor",
  description: "Empowering the next generation of designers through mentorship, education, and community building. Learn about my design mentorship activities and community involvement.",
  keywords: ["design mentorship", "UX mentoring", "design education", "community workshops", "design leadership"],
};

export default function GivingBackLayout({
  children,
}: {
  children: ReactNode;
}) {
  return <>{children}</>;
} 