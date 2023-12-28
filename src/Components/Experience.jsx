import React from "react";
import { ExperienceDetail } from "./ExperienceDetail";

export const Experience = () => {
  return (
    <div className="px-8 py-10 lg:m-auto bg-[#f9fafb] lg:px-56 lg:py-10 dark:bg-blacktheme-bg01">
      <div className="w-[100px] m-auto mb-8 text-text-gray bg-[#e5e7eb] rounded-[12px] h-6 text-xs items-center flex justify-center dark:bg-blacktheme-bg02 dark:text-blacktheme-text">
        Experience
      </div>
      <p className="flex justify-center mb-10 lg:w-[450px] lg:m-auto lg:mb-12 text-text-gray dark:text-blacktheme-text">
        Here is a quick summary of my most recent experiences:
      </p>
      <ExperienceDetail />
    </div>
  );
};
