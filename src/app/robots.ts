import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        disallow: [
          "/private/",
          "/admin/",
          "/cgi-bin/",
          "/tmp/",
          "/backup/",
          "/logs/",
          "/uploads/",
        ],
      },
      {
        userAgent: "Googlebot",
        allow: "/",
        disallow: ["/search", "/search/*?"],
        crawlDelay: 2,
      },
      {
        userAgent: "Bingbot",
        allow: "/",
        crawlDelay: 3,
      },
    ],
    sitemap: "https://seifeldin.vercel.app/sitemap.xml",
    host: "https://seifeldin.vercel.app",
  };
}
