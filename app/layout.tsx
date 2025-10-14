import type { Metadata } from "next";
import { Geist, Geist_Mono, Space_Mono, Crimson_Text, Courier_Prime, Tilt_Prism, MuseoModerno, Nothing_You_Could_Do, IBM_Plex_Mono, Besley } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Script from "next/script";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
});

const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
  variable: "--font-space-mono",
});

const crimsonText = Crimson_Text({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-crimson-text",
});

const courierPrime = Courier_Prime({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-courier-prime",
});

const tiltPrism = Tilt_Prism({
  subsets: ["latin"],
  variable: "--font-tilt-prism",
});

const museoModerna = MuseoModerno({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-museo-moderna",
});

const nothingYouCouldDo = Nothing_You_Could_Do({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-nothing-you-could-do",
});

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-ibm-plex-mono",
});

const besley = Besley({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-besley",
});

export const metadata: Metadata = {
          title: "Jake Taylor - Product Strategy & Design Leadership",
        description: "A modern portfolio showcasing product strategy, design leadership, and community impact.",
        keywords: ["product strategy", "design leadership", "UX design", "design systems", "portfolio"],
      authors: [{ name: "Jake Taylor" }],
      icons: {
        icon: '/favicon.svg',
        shortcut: '/favicon.svg',
        apple: '/favicon.svg',
      },
      openGraph: {
      title: "Jake Taylor - Product Strategy & Design Leadership",
      description: "A modern portfolio showcasing product strategy, design leadership, and community impact.",
    type: "website",
  },
      twitter: {
      card: "summary_large_image",
      title: "Jake Taylor - Product Strategy & Design Leadership",
      description: "A modern portfolio showcasing product strategy, design leadership, and community impact.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${geist.variable} ${geistMono.variable} ${spaceMono.variable} ${crimsonText.variable} ${courierPrime.variable} ${tiltPrism.variable} ${museoModerna.variable} ${nothingYouCouldDo.variable} ${ibmPlexMono.variable} ${besley.variable}`}>
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Nothing+You+Could+Do&display=swap" rel="stylesheet" />
        <Script 
          src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.29/dist/unicornStudio.umd.js"
          strategy="beforeInteractive"
        />
      </head>
      <body className="bg-background text-foreground antialiased" suppressHydrationWarning={true}>
        <Navigation />
        {children}
      </body>
    </html>
  );
}
