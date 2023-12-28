import React from "react";
import { IconEmail } from "./Icons/IconEmail";
import { IconPhone } from "./Icons/IconPhone";
import { IconBtn } from "./Icons/IconBtn";
import { IconGithubDark } from "./Icons/IconGithubDark";
import { IconTwitterDark } from "./Icons/IconTwitterDark";
import { IconFigmaDark } from "./Icons/IconFigmaDark";
import { IconEmailDark } from "./Icons/IconEmailDark";
import { IconPhoneDark } from "./Icons/IconPhoneDark";
import { IconBtnDark } from "./Icons/IconBtnDark";

export const Contact = () => {
  return (
    <div className="bg-[#fff] pt-5 lg:px-56 flex flex-col items-center dark:bg-black">
      <div className="w-[100px] m-auto text-text-gray bg-[#e5e7eb] rounded-[12px] h-6 text-xs items-center flex justify-center dark:bg-blacktheme-bg02 dark:text-blacktheme-text">
        Get in touch
      </div>
      <div className="flex px-8 lg:w-2/4 my-8 text-text-gray dark:text-blacktheme-text">
        What’s next? Feel free to reach out to me if you're looking for a
        developer, have a query, or simply want to connect.
      </div>
      <div className="flex lg:flex items-center gap-4 mb-4">
        <div className="dark:hidden">
          <IconEmail />
        </div>
        <div className="hidden dark:flex">
          <IconEmailDark />
        </div>
        <div className="text-lg lg:text-3xl dark:text-blacktheme-bigtext">
          reachsagarshah@gmail.com
        </div>
        <div className="dark:hidden">
          <IconBtn />
        </div>
        <div className="hidden dark:flex">
          <IconBtnDark />
        </div>
      </div>
      <div className="flex lg:flex items-center gap-4 mb-10">
        <div className="dark:hidden">
          <IconPhone />
        </div>
        <div className="hidden dark:flex">
          <IconPhoneDark />
        </div>
        <div className="text-lg lg:text-3xl dark:text-blacktheme-bigtext">
          +91 8980500565
        </div>
        <div className="dark:hidden">
          <IconBtn />
        </div>
        <div className="hidden dark:flex">
          <IconBtnDark />
        </div>
      </div>
      <div className="text-text-gray text-sm mb-5 dark:text-blacktheme-text">
        You may also find me on these platforms!
      </div>
      <div className="flex gap-x-3 ml-1 mb-24">
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
  );
};

export default Contact;
