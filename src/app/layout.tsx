import { Instrument_Sans } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";
import Script from "next/script";
import siteMetadata from "@/metadata";
import jsonLd from "@/jsonLd";
import Header from "@/components/Header";
import { Parallax } from "../hooks/useParallaxAnimation";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";

const instrument = Instrument_Sans({ subsets: ["latin"] });

export const metadata = siteMetadata;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={instrument.className}>
        <Parallax>
          <ThemeProvider attribute="class" defaultTheme="light">
            <Header />
            {children}
          </ThemeProvider>
        </Parallax>
        <SpeedInsights />
        <Analytics />
        <Script
          id="JSONLD"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
