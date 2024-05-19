import Header from "@/components/Header";
import { cardo, inter } from "../fonts";
import Image from "next/image";

function Home() {


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

    </div>
  );
}

export default Home;
