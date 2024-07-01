import { Instrument_Sans } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";
import { AptabaseProvider } from "@aptabase/react";
import Script from "next/script";
import siteMetadata from "@/metadata";
import jsonLd from "@/jsonLd";
import Header from "@/components/Header";
import { Parallax } from "../hooks/useParallaxAnimation";
import { SpeedInsights } from "@vercel/speed-insights/next";

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
          <AptabaseProvider appKey="A-EU-6456644329">
            <ThemeProvider attribute="class" defaultTheme="light">
              <Header />
              {children}
            </ThemeProvider>
          </AptabaseProvider>
        </Parallax>
        <SpeedInsights />
        <Script
          id="JSONLD"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-SMPRGW6SKR"
          strategy="afterInteractive"
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-SMPRGW6SKR');
            `,
          }}
        />
      </body>
    </html>
  );
}
