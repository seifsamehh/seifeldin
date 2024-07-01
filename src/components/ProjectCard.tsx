import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { CardProps } from "@/interfaces/CardProps";
import localFont from "next/font/local";
import { CircleArrowRight } from "lucide-react";

const manuka = localFont({
  src: "../../public/fonts/Manuka-Bold.otf",
  display: "swap",
});

export const ProjectCard: React.FC<CardProps> = ({
  imageSource,
  imageAlt,
  heading,
  linkHref,
}) => {
  return (
    <Card className="p-4">
      <CardContent>
        <Image
          src={imageSource}
          alt={imageAlt}
          width={500}
          height={500}
          className="rounded-md"
        />
        <h3 className={`${manuka.className} text-5xl mt-4`}>{heading}</h3>
      </CardContent>
      <CardFooter>
        <Link
          href={linkHref}
          className="flex items-center gap-3"
          title={heading}
          aria-label={heading}
          target="_blank"
        >
          preview
          <CircleArrowRight />
        </Link>
      </CardFooter>
    </Card>
  );
};
