import { TitleProps } from "@/interfaces/TitleProps";
import localFont from "next/font/local";

// Define font
const manuka = localFont({
  src: "../../public/fonts/Manuka-Bold.otf",
  display: "swap",
});

// Reusable Title component
const Title: React.FC<TitleProps> = ({ text, className }) => (
  <h2 className={`${manuka.className} ${className}`}>{text}</h2>
);

export default Title;
