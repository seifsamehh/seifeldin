"use client";

import Lenis from "@studio-freight/lenis";
import { useEffect } from "react";

function useParallaxAnimation() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      // easing: (t) => t * t * (3 - 2 * t),
    });

    function raf(time: any) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);
}

export function Parallax({ children }: { children: React.ReactNode }) {
  useParallaxAnimation();
  return <>{children}</>;
}
