import { Cardo, Inter, Roboto_Mono } from "next/font/google";

export const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const roboto_mono = Roboto_Mono({
  subsets: ["latin"],
  display: "swap",
});

export const cardo = Cardo({
  subsets: ["latin"],
  variable: "--font-cardo",
  weight: '700',
});
