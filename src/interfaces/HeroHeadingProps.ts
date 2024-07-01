import { RefObject } from "react";

export interface HeroHeadingProps {
  text: string;
  className: string;
  refProp: RefObject<HTMLHeadingElement>;
}
