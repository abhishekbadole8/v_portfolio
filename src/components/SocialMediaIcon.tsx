import Image from "next/image";
import Link from "next/link";

interface ISocialMedia {
  src: string;
  alt: string;
  link: string;
  isActive: boolean;
}

const SocialMediaIcon = ({ src, alt, link, isActive }: ISocialMedia) => (
  <Link href={link} target="_blank" rel="noopener noreferrer">
    <div
      className={`group p-4 min-w-12 min-h-12 
                  ${isActive ? "bg-gray-900" : "bg-transparent"} 
                  hover:bg-gray-900 hover:dark:bg-gray-900`}
    >
      <Image
        src={src}
        alt={alt}
        width="16"
        height="16"
        className={`${!isActive && "group-hover:invert"}`}
      />
    </div>
  </Link>
);

export default SocialMediaIcon;
