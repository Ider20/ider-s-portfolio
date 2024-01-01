import React from "react";
import { IconLocationDark } from "./Icons/IconLocationDark";
import { IconTwitterDark } from "./Icons/IconTwitterDark";
import { IconFigmaDark } from "./Icons/IconFigmaDark";
import { IconGithubDark } from "./Icons/IconGithubDark";

export const Intro = () => {
  return (
    <div className="flex px-8 flex-col-reverse py-5 pb-10 lg:flex lg:flex-row  lg:m-auto lg:px-56 lg:py-6 lg:gap-10 bg-[#fff] dark:bg-[#030712] dark:ease-in-out duration-300">
      <div className="">
        <div>
          <h1 className="text-4xl font-bold mb-5 lg:text-4xl lg:font-bold lg:mb-5 dark:text-blacktheme-bigtext dark:ease-in-out duration-300">
            Hi, I'm Ider
          </h1>
          <p className="flex text-justify mb-10 lg:mb-5 lg:text-xs lg:font-normal dark:text-blacktheme-text dark:ease-in-out duration-300">
            I'm a full stack developer (React.js & Node.js) with a focus on
            creating (and occasionally designing) exceptional digital
            experiences that are fast, accessible, visually appealing, and
            responsive. Even though I have been creating web applications for
            over 7 years, I still love it as if it was something new.{" "}
          </p>
          <ul>
            <li className="flex gap-x-1 text-xs mb-2 items-center dark:text-blacktheme-text dark:ease-in-out duration-300">
              <img src="/Home/Desktop/location.svg" className="dark:hidden" />
              <div className="hidden dark:flex">
                <IconLocationDark />
              </div>
              Ulaanbaatar, Mongolia
            </li>
            <li className="flex ml-2 gap-x-3 text-xs mb-8 dark:text-blacktheme-text">
              <img src="/Home/Desktop/dot.svg" />
              Available for new project
            </li>
          </ul>
        </div>
        <div className="flex w-5 gap-x-3 ml-1">
          <img
            src="/Home/Desktop/github.svg"
            className="cursor-pointer hover:scale-125 ease-in-out duration-300 dark:hidden"
          />
          <div className="hidden dark:flex cursor-pointer hover:scale-125 ease-in-out duration-300">
            <IconGithubDark />
          </div>
          <img
            src="/Home/Desktop/twitter.svg"
            className="cursor-pointer hover:scale-125 ease-in-out duration-300 dark:hidden"
          />
          <div className="hidden dark:flex cursor-pointer hover:scale-125 ease-in-out duration-300">
            <IconTwitterDark />
          </div>
          <img
            src="/Home/Desktop/figma.svg"
            className="cursor-pointer hover:scale-125 ease-in-out duration-300 dark:hidden"
          />
          <div className="hidden dark:flex cursor-pointer hover:scale-125 ease-in-out duration-300">
            <IconFigmaDark />
          </div>
        </div>
      </div>
      <div className="flex justify-center shadow-mob-shad border-solid border-2 py-2 mb-20 lg:flex lg:items-center lg:w-3/4 lg:bg-[#fff] lg:shadow-3xl lg:border-solid lg:py-0 lg:border-black-100 dark:border-none dark:border-0 dark:shadow-[#374151] dark:p-0 ">
        <img src="/Home/Desktop/pic.png" className="" />
      </div>
    </div>
  );
};

export default Intro;
