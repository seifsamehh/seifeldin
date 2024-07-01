"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Title from "@/components/Title";

// Register GSAP plugin
gsap.registerPlugin(ScrollTrigger);

export default function AboutTitle() {
  const titleRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const titles = titleRef.current?.querySelectorAll("h2");

    if (titles) {
      gsap.fromTo(
        titles,
        {
          y: 100,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          stagger: 0.2,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: titleRef.current,
            start: "top 80%",
          },
        }
      );
    }
  }, []);

  return (
    <div ref={titleRef}>
      <Title
        text="Creative"
        className="text-7xl md:text-[20rem] text-center uppercase title"
      />
      <Title
        text="Developer"
        className="text-7xl md:text-[20rem] text-center uppercase title"
      />
    </div>
  );
}
