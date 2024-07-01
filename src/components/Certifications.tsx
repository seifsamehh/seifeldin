"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import CertificateItem from "./CertificateItem";
import { certifications } from "@/constants/certifications";
import localFont from "next/font/local";

const manuka = localFont({
  src: "../../public/fonts/Manuka-Bold.otf",
  display: "swap",
});

gsap.registerPlugin(ScrollTrigger);

const Certifications = () => {
  const certificatesContainerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const certificatesContainer = certificatesContainerRef.current;

    if (certificatesContainer) {
      const certificateItems =
        certificatesContainer.querySelectorAll(".certificate");

      gsap.set(certificateItems, { opacity: 0, y: 50 }); // Set initial state

      certificateItems.forEach((item, index) => {
        gsap.to(item, {
          opacity: 1,
          y: 0,
          stagger: 0.3,
          scrollTrigger: {
            trigger: item,
            start: "top 80%",
            end: "bottom 20%",
            scrub: true,
          },
        });
      });
    }
  }, []);

  return (
    <div className="certifications flex justify-center md:justify-between items-start flex-wrap md:flex-nowrap py-16">
      <div className="left">
        <h3 className={`${manuka.className} text-primary text-6xl`}>
          Certifications
        </h3>
      </div>
      <div className="right md:max-w-5xl" ref={certificatesContainerRef}>
        {certifications.map((cert, index) => (
          <CertificateItem
            key={index}
            year={cert.year}
            name={cert.name}
            place={cert.place}
          />
        ))}
      </div>
    </div>
  );
};

export default Certifications;
