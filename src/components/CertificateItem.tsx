import { CertificateItemProps } from "@/interfaces/CertificateItemProps";

const CertificateItem = ({ year, name, place }: CertificateItemProps) => (
  <div className="certificate flex items-center justify-center md:justify-between gap-6 my-6 flex-wrap md:flex-nowrap">
    <div className="time-name text-center md:text-left">
      <span className="time text-3xl md:text-4xl font-bold mr-4">{year}</span>
      <span className="name text-3xl md:text-4xl font-bold">{name}</span>
    </div>
    <div className="place">
      <span>{place}</span>
    </div>
  </div>
);

export default CertificateItem;
