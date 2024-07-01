import { CompanyImageProps } from "@/interfaces/CompanyImageProps";
import Image from "next/image";

const CompanyImage: React.FC<CompanyImageProps> = ({
  src,
  alt,
  width,
  height,
}) => (
  <Image
    src={src}
    alt={alt}
    width={width}
    height={height}
    className="rounded-full"
  />
);

export default CompanyImage;
