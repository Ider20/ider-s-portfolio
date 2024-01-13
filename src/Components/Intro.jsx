import React from "react";
import { IconLocationDark } from "./Icons/IconLocationDark";
import { IconTwitterDark } from "./Icons/IconTwitterDark";
import { IconFigmaDark } from "./Icons/IconFigmaDark";
import { IconGithubDark } from "./Icons/IconGithubDark";
import { IconFigmaSmall } from "./Icons/IconFigmaSmall";
import { IconGitSmall } from "./Icons/IconGitSmall";
import { IconTwitterSmall } from "./Icons/IconTwitterSmall";

export const Intro = ({ dark }) => {
  return (
    <div className="w-full lg:flex lg:m-auto  bg-[#fff] dark:bg-[#030712] dark:ease-in-out duration-300">
      <div className="py-[64px] px-4 lg:w-[1440px] lg:py-[96px] lg:px-[80px] m-auto">
        <div className="flex flex-col-reverse lg:flex lg:flex-row lg:justify-between ">
          <div className="mt-12 lg:mt-0 lg:w-[768px]">
            <h1 className="text-4xl font-bold mb-2 lg:text-[60px] text-[#111827] lg:font-bold lg:mb-5 dark:text-blacktheme-bigtext dark:ease-in-out duration-300">
              Hi, I'm Ider
            </h1>
            <p className="flex text-justify mb-10 lg:mb-12 lg:text-base text-[#4B5563] lg:font-normal dark:text-blacktheme-text dark:ease-in-out duration-300">
              I'm a full stack developer (React.js & Node.js) with a focus on
              creating (and occasionally designing) exceptional digital
              experiences that are fast, accessible, visually appealing, and
              responsive. Even though I have been creating web applications for
              over 7 years, I still love it as if it was something new.{" "}
            </p>
            <ul>
              <li className="flex gap-x-1 text-xs mb-2 lg:mb-2 items-center dark:text-blacktheme-text dark:ease-in-out duration-300">
                <img src="/Home/Desktop/location.svg" className="dark:hidden" />
                <div className="hidden dark:flex">
                  <IconLocationDark />
                </div>
                Ulaanbaatar, Mongolia
              </li>
              <li className="flex ml-2 gap-x-3 text-xs mb-8 dark:text-blacktheme-text dark:ease-in-out duration-300">
                <img src="/Home/Desktop/dot.svg" />
                Available for new project
              </li>
            </ul>

            <div className="flex w-5 gap-x-3 ml-1">
              <div className="cursor-pointer hover:scale-125 ease-in-out duration-300 dark:hidden">
                <IconGitSmall />
              </div>
              <div className="hidden dark:flex cursor-pointer hover:scale-125 ease-in-out duration-300">
                <IconGithubDark />
              </div>
              <div className="cursor-pointer hover:scale-125 ease-in-out duration-300 dark:hidden">
                <IconTwitterSmall />
              </div>
              <div className="hidden dark:flex cursor-pointer hover:scale-125 ease-in-out duration-300 ">
                <IconTwitterDark />
              </div>
              <div className="cursor-pointer hover:scale-125 ease-in-out duration-300 dark:hidden">
                <IconFigmaSmall />
              </div>
              <div className="hidden dark:flex cursor-pointer hover:scale-125 ease-in-out duration-300">
                <IconFigmaDark />
              </div>
            </div>
          </div>
          <div className="m-auto shadow-mob-shad lg:mr-[30px] lg:flex lg:items-center lg:bg-[#fff] lg:shadow-3xl lg:border-black-100 dark:border-none dark:shadow-[#374151] dark:p-0 lg:dark:bg-[#030712]">
            {!dark ? (
              <img src="/Home/Desktop/pic.png" className="" />
            ) : (
              <img src="/Home/Desktop/Pic_dark.png" className="" />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
