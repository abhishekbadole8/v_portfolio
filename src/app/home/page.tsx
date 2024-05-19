import Header from "@/components/Header";
import { cardo, inter } from "../fonts";
import Image from "next/image";

function Home() {
  const aboutAray = [
    { title: "YEARS OF EXPERIENCE", value: "19", icon: "/icons/Stack.svg" },
    { title: "COMPLETED PROJECTS", value: "514", icon: "/icons/Briefcase.svg" },
    { title: "HAPPY CLIENTS", value: "494", icon: "/icons/SmileyWink.svg" },
    { title: "AWARDS WINNERS", value: "52", icon: "/icons/Medal.svg" },
  ];

  const clients = [
    { name: "Amazon", path: "/amazon.svg" },
    { name: "LinkedIn", path: "/linkedin.svg" },
    { name: "Medium", path: "/medium.svg" },
    { name: "Dribbble", path: "/dribbble.svg" },
    { name: "Spotify", path: "/spotify.svg" },
    { name: "Tumblr", path: "/tumblr.svg" },
  ];

  const workProcess = [
    {
      title: "Introduction",
      context:
        "Vestibulum tempor enim metus, quis tepor urna facilisis sed. Sed nibh ipsum, molestie cursus dolor vitae.",
      path: "/Confetti.svg",
    },
    {
      title: "UX Design",
      context:
        "Vestibulum tempor enim metus, quis tepor urna facilisis sed. Sed nibh ipsum, molestie cursus dolor vitae.",
      path: "/UserCircle.svg",
    },
    {
      title: "UI Design",
      context:
        "Vestibulum tempor enim metus, quis tepor urna facilisis sed. Sed nibh ipsum, molestie cursus dolor vitae.",
      path: "/Crown.svg",
    },
    {
      title: "Delivery",
      context:
        "Vestibulum tempor enim metus, quis tepor urna facilisis sed. Sed nibh ipsum, molestie cursus dolor vitae.",
      path: "/Package.svg",
    },
  ];

  return (
    <div>
      <div className="w-screen h-screen bg-hero-background">
        <Header />

        {/* Hero Intro */}
        <div className="flex flex-col items-center gap-12 mt-12 text-center">
          <h6
            className={`${cardo.className} text-gray-900 font-normal text-5xl leading-22 `}
          >
            Hey, It’s Marvin Richard. <br />
            UI/UX & Product Designer
            <br />
            Based on Los Angeles.
          </h6>
          {/* Scroll */}
          <div className="rounded-full w-48 h-48 flex-col items-center content-center bg-white">
            <p className="text-gray-900 font-normal text-lg leading-6 mb-2 text-center">
              Scroll down
            </p>
            <Image
              src={"/icons/ArrowDown.svg"}
              alt="icon"
              width={24}
              height={24}
              className="m-auto"
            />
          </div>
        </div>

        {/* Dark Mode button */}
        <div className=" w-12 h-12 rounded-full absolute right-10 bottom-10 flex items-center justify-center hover:cursor-pointer group bg-gray-900 hover:dark:invert">
          <Image
            src={"/icons/Sun.svg"}
            alt="dark-icon"
            width={24}
            height={24}
            className=""
          />
        </div>
      </div>

      {/* About Page */}
      <div className="pt-12 pb-20 px-40 relative">
        <div className="flex justify-between ">
          {/* First column */}
          <div className="flex-none w-1/4">
            {/* Biography Section */}
            <div className="mb-12">
              <h5
                className={`${cardo.className} font-bold text-2xl leading-8 text-gray-900 mb-4`}
              >
                Biography
              </h5>
              <p
                className={`${inter.className} font-normal text-base leading-6 text-gray-500`}
              >
                Vestibulum tempor enim metus, quis tempor urna facilisis sed.
                Sed nibh ipsum, molestie cursus dolor vitae, molestie vestibulum
                quam.
              </p>
            </div>

            {/* My Services Section */}
            <div className="mb-12">
              <h5
                className={`${cardo.className} font-bold text-2xl leading-8 text-gray-900 mb-4`}
              >
                My Services
              </h5>
              <ul
                className={`${inter.className} font-normal text-base leading-6 text-gray-500 list-disc pl-5`}
              >
                <li className="mb-2">User Experience Design</li>
                <li className="mb-2">User Interface Design</li>
                <li>Usability Testing</li>
              </ul>
            </div>

            {/* My Locations Section */}
            <div className="mb-12">
              <h5
                className={`${cardo.className} font-bold text-2xl leading-8 text-gray-900 mb-4`}
              >
                My Locations
              </h5>
              <p
                className={`${inter.className} font-normal text-base leading-6 text-gray-500`}
              >
                4517 San Francisco Ave. Manchester, Kentucky 39495, Los Angeles,
                California, United States.
              </p>
            </div>
          </div>

          {/* Middle column */}
          <div className="grow absolute -top-52">
            {/* <Image
              src={"/avatar/Photo.svg"}
              alt="user"
              width={550}
              height={550}
            /> */}
            <div className="bg-gray-400" />
          </div>

          {/* Third column */}
          <div className="flex-none w-1/4 ">
            {aboutAray.map((item, index) => (
              <div
                key={index}
                className={`flex items-start justify-end gap-6 ${
                  index !== aboutAray.length - 1 ? "mb-12" : ""
                }`}
              >
                <div className="flex flex-col gap-3">
                  <h2
                    className={`${cardo.className} text-gray-900 font-normal text-5xl leading-10 text-right `}
                  >
                    {item.value}+
                  </h2>
                  <p
                    className={`${inter.className} text-gray-400 font-normal text-sm leading-5 text-right`}
                  >
                    {item.title}
                  </p>
                </div>
                <Image src={item.icon} alt="icon" width={45} height={45} />
              </div>
            ))}
          </div>
        </div>

        <p
          className={`${cardo.className} text-center font-normal text-2xl leading-6 text-gray-900 my-12`}
        >
          My clients all over the world
        </p>

        <div className="flex justify-center items-center gap-10">
          {clients.map((client, index) => (
            <div
              key={index}
              className="w-48 h-14  flex justify-center items-center"
            >
              <Image
                src={`/logo${client.path}`}
                alt="client-logo"
                width={113}
                height={24}
              />
            </div>
          ))}
        </div>
      </div>

      {/* My work Process */}
      <div className="bg-gray-50 text-center py-20 px-40">
        <h3
          className={`${cardo.className} text-gray-900 font-normal text-5xl leading-16 mb-8 `}
        >
          My work process
        </h3>
        <p
          className={`${inter.className} w-2/6 text-gray-500 font-normal text-base leading-6 mx-auto`}
        >
          Vestibulum tempor enim metus, quis tempor urna facilisis sed. Sed nibh
          ipsum, molestie cursus dolor vitae, molestie vestibulum quam.
        </p>

        <div className="mt-16 flex gap-6 text-left">
          {workProcess.map((work, index) => (
            <div
              key={index}
              className={`${index % 2 === 0 ? "mt-12 " : "mb-12"} bg-white p-7`}
            >
              <div className="flex justify-between">
                <Image
                  src={`/icons/${work.path}`}
                  alt="icon"
                  width={43}
                  height={43}
                  className="mb-auto"
                />

                <h1
                  className={`${cardo.className} text-hero-background font-bold text-6xl leading-16`}
                >
                  0{index + 1}
                </h1>
              </div>
              <h5
                className={`${cardo.className} text-gray-900 font-bold text-2xl leading-8  my-4`}
              >
                {work.title}
              </h5>
              <p
                className={`${inter.className} text-gray-500 font-normal text-sm leading-5 `}
              >
                {work.context}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
