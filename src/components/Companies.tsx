"use client";

import { useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import CompanyImage from "@/components/CompanyImage";
import { imageData } from "@/constants/imageData";

gsap.registerPlugin(ScrollTrigger);

export default function Companies() {
  const companiesRef = useRef<HTMLDivElement | null>(null);

  useGSAP(() => {
    const companiesElement = companiesRef.current;

    if (companiesElement) {
      const images = companiesElement.querySelectorAll("img");

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: companiesElement,
          start: "top 80%",
          end: "bottom 60%",
          scrub: true,
        },
      });

      tl.from(images, {
        opacity: 0,
        y: 50,
        stagger: 0.2,
        ease: "power2.out",
        duration: 1,
      });
    }
  }, []);

  return (
    <div
      className="companies flex items-center justify-center gap-2 py-16 flex-wrap"
      ref={companiesRef}
    >
      {imageData.map((image, index) => (
        <CompanyImage
          key={index}
          src={image.src}
          alt={image.alt}
          width={image.width}
          height={image.height}
        />
      ))}
    </div>
  );
}
