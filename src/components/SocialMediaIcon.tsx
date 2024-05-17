import Image from "next/image";
import Link from "next/link";

interface ISocialMedia {
  src: string;
  alt: string;
  link: string;
  bgColor: string;
}

const SocialMediaIcon = ({ src, alt, link, bgColor }: ISocialMedia) => (
  <Link href={link} target="_blank" rel="noopener noreferrer">
    <div className={`p-4 ${bgColor} min-w-12 min-h-12 hover:bg-gray-900 `}>
      <Image src={src} alt={alt} width="16" height="16" className="hover:text-white"/>
    </div>
  </Link>
);

export default SocialMediaIcon;
