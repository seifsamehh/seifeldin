"use client";

import Image from "next/image";
import { useRef } from "react";
import { MoveDown } from "lucide-react";
import localFont from "next/font/local";
import { useMouseMoveAnimation } from "@/hooks/useMouseMoveAnimation";
import { useOverlayAnimation } from "@/hooks/useOverlayAnimation";
import HeroHeading from "./HeroHeading";

// Define fonts
const amsterdam = localFont({
  src: "../../public/fonts/amsterdam-four.ttf",
  display: "swap",
});
const manuka = localFont({
  src: "../../public/fonts/Manuka-Bold.otf",
  display: "swap",
});

export default function Hero() {
  const overlayRef = useRef(null);
  const seifRef = useRef(null);
  const eldinRef = useRef(null);
  const samehRef = useRef(null);

  useMouseMoveAnimation([seifRef, eldinRef, samehRef]);
  useOverlayAnimation(overlayRef);

  return (
    <section className="hero h-screen flex justify-center relative">
      <Image
        src="/images/seif.png"
        alt="seif"
        width={600}
        height={600}
        className="object-cover"
      />
      <HeroHeading
        text="Seif"
        refProp={seifRef}
        className="text-9xl md:text-[14rem] text-primary absolute top-[5%] md:top-[10%] left-[2%] md:left-[35%] -z-10"
      />
      <HeroHeading
        text="Eldin"
        refProp={eldinRef}
        className="text-9xl md:text-[14rem] text-primary absolute top-[25%] md:top-[40%] -right-[14%] md:right-[25%] -z-10"
      />
      <HeroHeading
        text="Sameh"
        refProp={samehRef}
        className="text-9xl md:text-[14rem] text-primary absolute top-[50%] md:top-[60%] left-[20%] md:left-[35%] z-10"
      />
      <p
        className={`${manuka.className} absolute top-[50%] left-[20%] text-5xl max-w-sm uppercase hidden md:block para`}
      >
        Creative Frontend developer from Egypt
      </p>
      <p
        className={`${manuka.className} absolute bottom-[10%] right-8 text-3xl uppercase hidden md:flex items-center gap-2`}
      >
        Scroll to see more
        <MoveDown />
      </p>
      {/* Overlay */}
      <div
        ref={overlayRef}
        className="fixed inset-0 z-50 bg-primary flex items-center justify-center text-foreground"
      >
        <h1 className={`${amsterdam.className} text-5xl md:7xl text-center`}>
          Seif Eldin Sameh
        </h1>
      </div>
    </section>
  );
}
