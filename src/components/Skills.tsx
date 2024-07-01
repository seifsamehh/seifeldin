"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { webSkills } from "@/constants/skills";
import localFont from "next/font/local";

const manuka = localFont({
  src: "../../public/fonts/Manuka-Bold.otf",
  display: "swap",
});

gsap.registerPlugin(ScrollTrigger);

const Skills = () => {
  const skillsGridRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const skillsGrid = skillsGridRef.current;

    if (skillsGrid) {
      gsap.fromTo(
        Array.from(skillsGrid.children) as HTMLElement[],
        {
          y: 50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          stagger: 0.1,
          scrollTrigger: {
            trigger: skillsGrid,
            start: "top 80%",
          },
        }
      );
    }
  }, []);

  return (
    <div className="skills flex justify-center md:justify-between items-start flex-wrap">
      <div className="left mb-8 md:mb-0">
        <h3
          className={`${manuka.className} text-primary text-6xl flex justify-center items-center`}
        >
          Techniques
        </h3>
      </div>
      <div className="right">
        <div
          className="grid grid-cols-2 md:grid-cols-4 gap-4"
          ref={skillsGridRef}
        >
          {webSkills.map((skill, index) => (
            <div key={index} className="border-b-2 border-background pl-2">
              <p className="text-3xl">{skill}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
