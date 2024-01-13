import React from "react";
import { ExperienceDetail } from "./ExperienceDetail";

export const Experience = () => {
  return (
    <div className="w-full py-[64px] lg:m-auto bg-[#f9fafb] lg:py-[96px] dark:bg-blacktheme-bg01">
      <div className="px-4 lg:w-[1440px] lg:px-[80px] m-auto">
        <div className="w-[100px] m-auto mb-8 text-text-gray bg-[#e5e7eb] rounded-[12px] h-6 text-xs items-center flex justify-center dark:bg-blacktheme-bg02 dark:text-blacktheme-text">
          Experience
        </div>
        <p className="text-center mb-10 lg:w-[450px] lg:m-auto lg:mb-12 text-[#4B5563] dark:text-blacktheme-text">
          Here is a quick summary of my most recent experiences:
        </p>
        <ExperienceDetail />
      </div>
    </div>
  );
};
