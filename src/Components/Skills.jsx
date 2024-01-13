import React from "react";
import { DataBaseOfIconLoop } from "./DataBaseOfIconLoop";

export const Skills = ({ dark }) => {
  return (
    <div className="w-full py-[64px] bg-white lg:h-100 lg:m-auto lg:py-[96px] dark:bg-black">
      <div className="px-4 lg:w-[1440px] lg:px-[80px] lg:m-auto">
        <div className="text-text-gray w-14 flex justify-center m-auto lg:mb-4 bg-[#e5e7eb] rounded-[12px] h-6 text-xs items-center dark:bg-blacktheme-bg02 dark:text-blacktheme-text">
          Skills
        </div>
        <div className="mt-4 mb-6 text-center lg:w-[400px] lg:m-auto lg:mb-12 text-[#4B5563] dark:text-blacktheme-text">
          The skills, tools and technologies I am really good at:
        </div>
        <DataBaseOfIconLoop dark={dark} />
      </div>
    </div>
  );
};

export default Skills;
