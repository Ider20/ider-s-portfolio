import Image from "next/image";
import { Inter } from "next/font/google";
import { Navigation } from "../Components/Navigation";
import { Intro } from "../Components/Intro";
import { AboutMe } from "../Components/AboutMe";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <body class="bg-[#b5b5b5] pt-20">
        <header class="w-full">
          <Navigation />
          <Intro />
        </header>
        <section>
          <AboutMe />
        </section>
      </body>
    </>
  );
}
