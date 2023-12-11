import Image from "next/image";
import { Inter } from "next/font/google";
import { Navigation } from "../Components/Navigation";
import { Intro } from "../Components/Intro";
import { AboutMe } from "../Components/AboutMe";
import { Skills } from "../Components/Skills";
import { Experience } from "../Components/Experience";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <div className="bg-[#b5b5b5] pt-20">
        <header className="w-full">
          <Navigation />
          <Intro />
        </header>
        <section>
          <AboutMe />
          <Skills />
          <Experience />
        </section>
      </div>
    </>
  );
}
