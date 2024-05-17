import { usePathname } from "next/navigation";
import { inter } from "@/app/fonts";

interface INav {
  title: string;
  value: string;
}

function Nav({ title, value }: INav) {
  const pathname = usePathname();

  return (
    <div
      className={`${inter.className} text-base text-gray-400 leading-6  ${
        pathname === value ? "text-gray-900 font-semibold" : "font-normal"
      } cursor-pointer hover:text-gray-900 hover:font-semibold`}
    >
      {title}
    </div>
  );
}

export default Nav;
