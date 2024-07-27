"use client";

import Link from "next/link";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ModeToggle } from "./ModeToogle";
import localFont from "next/font/local";

const manuka = localFont({
  src: "../../public/fonts/Manuka-Bold.otf",
  display: "swap",
});

export default function Header() {
  useGSAP(() => {
    const tl = gsap.timeline();

    tl.from(".branding", {
      y: -50,
      duration: 1,
      ease: "expo.out",
      delay: 3,
    }).from(
      ".branding-2",
      {
        y: -50,
        duration: 1,
        ease: "expo.out",
      },
      "-=0.5"
    );
  });

  return (
    <header className="fixed w-full z-40 bg-background/30 backdrop-filter backdrop-blur-lg">
      <div className="container mx-auto flex justify-between items-center p-4 md:p-0">
        <div className="left flex items-center gap-8">
          <Link href="/">
            <p className={`${manuka.className} text-5xl text-primary branding`}>
              Seif
            </p>
          </Link>
          <span className="branding-2 hidden md:block">
            Creative Frontend Developer
          </span>
        </div>
        <div className="right flex items-center gap-2">
          <p className="md:flex items-center hidden">
            Not Available{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#d62c2f"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-dot"
            >
              <circle cx="12.1" cy="12.1" r="1" />
            </svg>
          </p>
          <Link
            href="mailto:seiffsameh00@gmail.com"
            aria-label="Get in touch"
            title="Get in touch"
            target="_blank"
            className="bg-primary text-primary-foreground font-bold rounded-full py-2 px-4"
          >
            Get in touch
          </Link>
          <ModeToggle />
        </div>
      </div>
    </header>
  );
}
