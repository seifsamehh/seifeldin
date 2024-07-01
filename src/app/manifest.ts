import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Seif Eldin Sameh - Front End Developer ✨",
    short_name: "Seif Eldin Sameh",
    description:
      "Experienced web developer offering professional web design and development services. Let's build something amazing together.",
    start_url: "/",
    display: "standalone",
    background_color: "#fff",
    theme_color: "#fff",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
      {
        src: "/images/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/images/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
      {
        src: "/images/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
      {
        src: "/images/favicon-16x16.png",
        sizes: "16x16",
        type: "image/png",
      },
      {
        src: "/images/favicon-32x32.png",
        sizes: "32x32",
        type: "image/png",
      },
      {
        src: "/images/maskable_icon.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
  };
}
