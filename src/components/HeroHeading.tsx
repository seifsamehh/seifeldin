import { HeroHeadingProps } from "@/interfaces/HeroHeadingProps";
import localFont from "next/font/local";

// Define font
const manuka = localFont({
  src: "../../public/fonts/Manuka-Bold.otf",
  display: "swap",
});

// Reusable HeroHeading component
const HeroHeading: React.FC<HeroHeadingProps> = ({
  text,
  className,
  refProp,
}) => (
  <h1 ref={refProp} className={`${manuka.className} ${className}`}>
    {text}
  </h1>
);

export default HeroHeading;
