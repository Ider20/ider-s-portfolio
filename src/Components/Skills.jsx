import React from "react";
import { DataBaseOfIconLoop } from "./DataBaseOfIconLoop";

export const Skills = ({ dark }) => {
  return (
    <div className="py-10 px-8 pb-20 bg-white lg:h-100 lg:m-auto lg:py-10 lg:px-56 dark:bg-black">
      <div className="text-text-gray w-14 flex justify-center m-auto bg-[#e5e7eb] rounded-[12px] h-6 text-xs items-center dark:bg-blacktheme-bg02 dark:text-blacktheme-text">
        Skills
      </div>
      <div className="my-5 flex justify-center lg:w-[400px] lg:m-auto lg:my-10 text-text-gray dark:text-blacktheme-text">
        The skills, tools and technologies I am really good at:
      </div>
      <DataBaseOfIconLoop dark={dark} />
    </div>
  );
};

export default Skills;
