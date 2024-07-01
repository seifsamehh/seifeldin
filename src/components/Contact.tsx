"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { Dot } from "lucide-react";
import { useGSAP } from "@gsap/react";
import localFont from "next/font/local";

const manuka = localFont({
  src: "../../public/fonts/Manuka-Bold.otf",
  display: "swap",
});
const amsterdam = localFont({
  src: "../../public/fonts/amsterdam-four.ttf",
  display: "swap",
});

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const introRef = useRef<HTMLDivElement>(null);
  const paragraphRef = useRef<HTMLParagraphElement>(null);

  useGSAP(() => {
    const intro = introRef.current;
    const paragraph = paragraphRef.current;

    if (intro) {
      gsap.fromTo(
        intro.children,
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.2,
          scrollTrigger: {
            trigger: intro,
            start: "top 80%",
          },
        }
      );
    }

    if (paragraph) {
      gsap.fromTo(
        paragraph,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          scrollTrigger: {
            trigger: paragraph,
            start: "top 80%",
          },
        }
      );
    }
  }, []);

  return (
    <section className="contact min-h-screen flex flex-col justify-between items-center bg-foreground text-background py-4 overflow-hidden">
      <div
        ref={introRef}
        className="intro flex justify-center items-center gap-8 flex-wrap"
      >
        <h3
          className={`${manuka.className} text-8xl md:text-[15rem] uppercase`}
        >
          Let&apos;s
        </h3>
        <Image
          src="/images/seif-mini.webp"
          alt="seif"
          width={300}
          height={300}
          className="rounded-full"
        />
        <h3
          className={`${manuka.className} text-8xl md:text-[15rem] uppercase`}
        >
          Work
        </h3>
      </div>
      <div className="contact">
        <p
          ref={paragraphRef}
          className="text-muted-foreground text-2xl md:text-3xl text-center"
        >
          Feel free to reach out to me. I&apos;m always open to discuss new
          projects.
        </p>
        <div className="social-links flex items-center justify-start md:justify-center gap-2 md:gap-4 flex-wrap">
          <div className="email flex items-center">
            <Dot width={100} height={100} />
            <Link
              href="mailto:seiffsameh00@gmail.com"
              target="_blank"
              aria-label="Email"
              title="Email"
              className="text-xl md:text-3xl"
            >
              seiffsameh00@gmail.com
            </Link>
          </div>
          <div className="linkedin flex items-center">
            <Dot width={100} height={100} />
            <Link
              href="https://www.linkedin.com/in/seif-eldin-sameh/"
              target="_blank"
              aria-label="LinkedIn"
              title="LinkedIn"
              className="text-xl md:text-3xl"
            >
              LinkedIn
            </Link>
          </div>
        </div>
      </div>
      <div className="outro">
        <h3
          className={`${manuka.className} text-7xl md:text-[15rem] uppercase`}
        >
          Together
        </h3>
      </div>
      <div className="signature">
        <h4 className={`${amsterdam.className} text-2xl mt-8 md:mt-0`}>
          Seif Eldin Sameh
        </h4>
      </div>
    </section>
  );
};

export default Contact;
