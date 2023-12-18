import React, { useEffect } from "react";
import Image from "next/image";
import { Inter } from "next/font/google";
import { Navigation } from "../Components/Navigation";
import { Intro } from "../Components/Intro";
import { AboutMe } from "../Components/AboutMe";
import { Skills } from "../Components/Skills";
import { Experience } from "../Components/Experience";
import { Work } from "../Components/Work";
import { Contact } from "../Components/Contact";
import { CopyRight } from "../Components/CopyRight";
import { TaskFromGegi } from "../Components/TaskFromGegi";
import { AddOrSub } from "@/Components/AddOrSub";
import { OnOffButton } from "../Components/OnOffExample";
import { StopWatch } from "@/Components/StopWatch";
import { Timer } from "@/Components/Timer";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <div className="bg-[#b5b5b5]">
        <header className="w-full">
          <Navigation />
          <Intro />
        </header>
        <section>
          <AboutMe />
          <Skills />
          <Experience />
          <Work />
          <Contact />
          <CopyRight />
          <AddOrSub />
          <OnOffButton bg />
          <StopWatch />
          <Timer />
        </section>
      </div>
    </>
  );
}
