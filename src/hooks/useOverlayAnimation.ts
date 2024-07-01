// useOverlayAnimation.ts
import { RefObject } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export const useOverlayAnimation = (overlayRef: RefObject<HTMLElement>) => {
  useGSAP(() => {
    const overlay = overlayRef.current;
    if (overlay) {
      gsap.set(overlay, { autoAlpha: 1 });

      const tl = gsap.timeline({
        defaults: { duration: 1, ease: "bounce.out" },
      });
      tl.to(overlay, { x: 0, delay: 1 }).to(overlay, { x: "-100%" });
    }
  }, [overlayRef]);
};
