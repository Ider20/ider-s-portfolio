import React, { useEffect, useState } from "react";
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
import { Input } from "../Components/Input";
import { StopWatch } from "@/Components/StopWatch";
import { Timer } from "@/Components/Timer";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  // const [articles, setArticles] = useState([]);
  const [dark, setDark] = useState(false);
  // const [light, setLight] = useState(false);

  // useEffect(() => {
  //   fetch("https://dev.to/api/articles")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setArticles(data);
  //     })
  //     .catch((error) => alert("error: " + error.message));
  // }, []);

  // const darkMode = () => {
  //   setDark(true);
  // };

  return (
    <div className={`${dark ? "dark" : ""}`}>
      <div className={`bg-[#b5b5b5] `}>
        <header className="w-full">
          <Navigation
            setDark={setDark}
            dark={dark}
            // setLight={setLight}
            // light={light}
          />
          <Intro />
        </header>
        {/* {console.log(articles)} */}
        <section>
          <AboutMe />
          <Skills setDark={setDark} dark={dark} />
          <Experience />
          <Work />
          <Contact />
          <CopyRight />
          {/* <AddOrSub /> */}
          {/* <OnOffButton /> */}
          {/* <hr /> */}
          {/* <Input /> */}
          {/* <hr /> */}
          {/* <StopWatch /> */}
          {/* <hr /> */}
          {/* <Timer /> */}
        </section>
      </div>
    </div>
  );
}
