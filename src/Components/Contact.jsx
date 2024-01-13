import React, { useState } from "react";
import Copy from "clipboard-copy";
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
  const [isCopy, setIsCopy] = useState(false);
  const [textToCopyEmail, setTextToCopyEmail] = useState(
    "reachsagarshah@gmail.com"
  );
  const [copyPhone, setCopyPhone] = useState("+91 8980500565");

  const handleCopyEmail = async () => {
    try {
      await Copy(textToCopyEmail);
      setIsCopy(true);
      setTimeout(() => {
        setIsCopy(false);
      }, 1500);
    } catch (error) {
      console.error("Failed", error);
    }
  };

  const handleCopyPhone = async () => {
    try {
      await Copy(copyPhone);
      setIsCopy(true);
      setTimeout(() => {
        setIsCopy(false);
      }, 1500);
    } catch (error) {
      console.error("Failed", error);
    }
  };

  return (
    <div className="w-full py-[64px] bg-[#fff] lg:py-[96px]   dark:bg-black">
      <div className="lg:w-[1440px] m-auto px-4 lg:px-[80px]">
        <div className="m-auto w-[110px] px-3 text-text-gray bg-[#e5e7eb] rounded-[12px] h-6 text-xs items-center flex justify-center dark:bg-blacktheme-bg02 dark:text-blacktheme-text">
          Get in touch
        </div>
        <div className="lg:w-2/4 text-center my-8 text-text-gray dark:text-blacktheme-text text-xl m-auto ">
          What’s next? Feel free to reach out to me if you're looking for a
          developer, have a query, or simply want to connect.
        </div>
        <div className="flex mb-2 lg:flex items-center gap-4 lg:mb-5 justify-center">
          <div className="dark:hidden">
            <IconEmail />
          </div>
          <div className="hidden dark:flex">
            <IconEmailDark />
          </div>
          <div className="text-lg lg:text-4xl font-semibold dark:text-blacktheme-bigtext">
            {textToCopyEmail}
          </div>
          <button
            className="dark:hidden flex gap-2 items-center"
            onClick={handleCopyEmail}
          >
            <IconBtn />
            {/* {isCopy ? "" : "Copied Text"} */}
          </button>
          <button className="hidden dark:flex" onClick={handleCopyEmail}>
            <IconBtnDark />
          </button>
        </div>
        <div className="flex lg:flex items-center gap-4 mb-12 justify-center">
          <div className="dark:hidden">
            <IconPhone />
          </div>
          <div className="hidden dark:flex">
            <IconPhoneDark />
          </div>
          <div className="text-lg lg:text-4xl font-semibold dark:text-blacktheme-bigtext">
            {copyPhone}
          </div>
          <button className="dark:hidden" onClick={handleCopyPhone}>
            <IconBtn />
          </button>
          <button className="hidden dark:flex" onClick={handleCopyPhone}>
            <IconBtnDark />
          </button>
        </div>
        <div className="text-text-gray text-sm mb-2 dark:text-blacktheme-text flex justify-center">
          You may also find me on these platforms!
        </div>
        <div className="flex gap-x-3 lg:mt-2 justify-center">
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
    </div>
  );
};

export default Contact;
