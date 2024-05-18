"use client";

import Nav from "./Nav";
import { cardo, inter } from "@/app/fonts";
import SocialMediaIcon from "./SocialMediaIcon";

interface INav {
  title: string;
  value: string;
}

function Header() {
  const navs: INav[] = [
    { title: "Home", value: "/home" },
    { title: "About", value: "/about" },
    { title: "Project", value: "/project" },
    { title: "Service", value: "/service" },
    { title: "Contact", value: "/contact" },
  ];

  const socialMediaLinks = [
    {
      src: "/icons/facebook.svg",
      alt: "Facebook",
      link: "https://www.facebook.com",
      active: false
    },
    {
      src: "/icons/x.svg",
      alt: "Twitter",
      link: "https://www.twitter.com",
      active: true
    },
    {
      src: "/icons/linkedin.svg",
      alt: "LinkedIn",
      link: "https://www.linkedin.com",
      active: false
    },
    {
      src: "/icons/instagram.svg",
      alt: "Instagram",
      link: "https://www.instagram.com",
      active: false
    },
    {
      src: "/icons/internet.svg",
      alt: "Website",
      link: "https://www.example.com",
      active: false
    },
  ];

  return (
    <div className="w-full py-9 px-40 flex items-center">
      {/* Nav */}
      <div className="flex gap-5">
        {navs.map((nav, index) => (
          <Nav key={index} title={nav.title} value={nav.value} />
        ))}
      </div>

      {/* Header Middle Heading  */}
      <div className="text-center m-auto">
        <h5
          className={`${cardo.className} text-gray-900 font-bold text-2xl leading-8`}
        >
          Marvin Richard
        </h5>
        <p
          className={`${inter.className} text-gray-500 font-normal text-sm leading-5`}
        >
          UI/UX & Product Designer
        </p>
      </div>

      {/* Social Media Card's */}
      <div className="flex gap-2.5">
        {socialMediaLinks.map((icon, index) => (
          <SocialMediaIcon
            key={index}
            src={icon.src}
            alt={icon.alt}
            link={icon.link}
            isActive={icon.active}
          />
        ))}
        
      </div>
    </div>
  );
}

export default Header;
