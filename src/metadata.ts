import type { Metadata } from "next";

const siteMetadata: Metadata = {
  title: {
    default: "Seif Eldin Sameh - Front End Developer ✨",
    template: "%s | Seif Eldin Sameh - Front End Developer ✨",
  },
  description:
    "Experienced web developer offering professional web design and development services. Let's build something amazing together.",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/images/favicon-16x16.png",
    apple: "/images/apple-touch-icon.png",
  },
  manifest: "/src/app/manifest.ts",
  metadataBase: new URL("https://seifeldin.vercel.app"),
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/en-US",
    },
  },
  keywords: [
    "web developer",
    "web design",
    "web development",
    "front-end development",
    "back-end development",
    "full-stack development",
    "responsive design",
    "user experience",
    "user interface",
    "JavaScript",
    "React",
    "Node.js",
  ],
  publisher: "Seif Eldin Sameh",
  openGraph: {
    title: "Seif Eldin Sameh - Front End Developer ✨",
    description:
      "Experienced web developer offering professional web design and development services. Let's build something amazing together.",
    url: "https://seifeldin.vercel.app",
    siteName: "Seif Eldin Sameh - Front End Developer ✨",
    images: [
      {
        url: "/images/android-chrome-192x192.png",
        width: 192,
        height: 192,
        alt: "Seif Eldin Sameh - Web Developer",
      },
      {
        url: "/images/android-chrome-512x512.png",
        width: 512,
        height: 512,
        alt: "Seif Eldin Sameh - Web Developer",
      },
      {
        url: "/images/maskable_icon.png",
        width: 512,
        height: 512,
        alt: "Seif Eldin Sameh - Web Developer",
      },
    ],
    locale: "en-US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    title: "Seif Eldin Sameh - Front End Developer ✨",
    card: "summary_large_image",
    images: [
      {
        url: "/images/android-chrome-192x192.png",
        width: 192,
        height: 192,
        alt: "Seif Eldin Sameh - Web Developer",
      },
      {
        url: "/images/android-chrome-512x512.png",
        width: 512,
        height: 512,
        alt: "Seif Eldin Sameh - Web Developer",
      },
      {
        url: "/images/maskable_icon.png",
        width: 512,
        height: 512,
        alt: "Seif Eldin Sameh - Web Developer",
      },
    ],
    description:
      "Experienced web developer offering professional web design and development services.",
  },
  verification: {
    google: "YOUR_GOOGLE_SEARCH_CONSOLE_VERIFICATION_CODE",
  },
};

export default siteMetadata;
