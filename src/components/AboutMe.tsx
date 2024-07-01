"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import localFont from "next/font/local";

// Define font
const manuka = localFont({
  src: "../../public/fonts/Manuka-Bold.otf",
  display: "swap",
});

gsap.registerPlugin(ScrollTrigger);

export default function AboutMe() {
  const firstParagraphRef = useRef<HTMLParagraphElement>(null);
  const secondParagraphRef = useRef<HTMLParagraphElement>(null);

  useGSAP(() => {
    const animateParagraph = (
      paragraphRef: React.RefObject<HTMLParagraphElement>,
      animation: gsap.TweenVars | gsap.TimelineVars
    ) => {
      const paragraph = paragraphRef.current;

      if (paragraph) {
        const words = paragraph.innerText.trim().split(" ");
        paragraph.innerHTML = ""; // Clear the existing text

        gsap.set(paragraph, { opacity: 0.5 });

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: paragraph,
            start: "top 80%",
            end: "bottom top",
            scrub: true,
          },
        });

        // Animation to change the paragraph opacity to 1
        tl.to(paragraph, { opacity: 1, duration: 0.5 }, 0);

        words.forEach((word, index) => {
          const span = document.createElement("span");
          span.textContent = `${word} `;
          span.style.opacity = "0.5";
          tl.to(
            span,
            {
              opacity: 1,
              ease: "power2.out",
              duration: 0.5,
            },
            index * 0.1 + 0.5
          );
          paragraph.appendChild(span);
        });
      }
    };

    const animateSecondParagraph = (
      paragraphRef: React.RefObject<HTMLParagraphElement>,
      animation: gsap.TweenVars | gsap.TimelineVars
    ) => {
      const paragraph = paragraphRef.current;

      if (paragraph) {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: paragraph,
            start: "bottom 80%", // Adjust the start position as needed
            end: "top 20%", // Adjust the end position as needed
            scrub: true,
          },
        });

        // Animation for second paragraph
        tl.fromTo(
          paragraph,
          { y: 100, opacity: 0 },
          { y: 0, opacity: 1, duration: 1, ease: "power2.out" }
        );
      }
    };

    animateParagraph(firstParagraphRef, { y: 100, opacity: 0 });
    animateSecondParagraph(secondParagraphRef, { y: 100, opacity: 0 });
  }, []);

  return (
    <div className="about-me flex justify-center md:justify-between items-start flex-wrap">
      <div className="left">
        <h3
          className={`${manuka.className} text-primary text-6xl flex justify-center items-center`}
        >
          About
        </h3>
      </div>
      <div className="right md:max-w-3xl">
        <p
          ref={firstParagraphRef}
          className="text-3xl md:text-5xl font-bold text-center md:text-left text-background"
        >
          I&apos;m a front-end developer with 2+ years of experience working
          with well-known brands and agencies.
        </p>
        <p
          className="mt-6 text-xl md:text-3xl text-center md:text-left"
          ref={secondParagraphRef}
        >
          Working collaboratively with brands and agencies worldwide. Designing
          and developing websites and applications with a focus on interaction,
          motion, and visual experience.
        </p>
      </div>
    </div>
  );
}
