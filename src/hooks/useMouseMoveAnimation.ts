// useMouseMoveAnimation.ts
import { RefObject } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

type UseMouseMoveAnimationProps = RefObject<HTMLElement>[];

export const useMouseMoveAnimation = (refs: UseMouseMoveAnimationProps) => {
  useGSAP(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const xOffset = (clientX / window.innerWidth - 0.5) * 100;
      const yOffset = (clientY / window.innerHeight - 0.5) * 100;

      refs.forEach((ref) => {
        if (ref.current) {
          gsap.to(ref.current, { x: xOffset, y: yOffset, duration: 0.5 });
        }
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [refs]);
};
