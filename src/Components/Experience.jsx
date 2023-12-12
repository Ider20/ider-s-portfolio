import React from "react";
import { ExperienceDetail } from "./ExperienceDetail";

export const Experience = () => {
  return (
    <div className="w-100 m-auto bg-[#f9fafb] px-56 py-10">
      <div className="w-[100px] m-auto text-text-gray bg-[#e5e7eb] rounded-[12px] h-6 text-xs items-center flex justify-center">
        Experience
      </div>
      <p className="w-[450px] m-auto my-8 text-text-gray">
        Here is a quick summary of my most recent experiences:
      </p>
      <ExperienceDetail />
    </div>
  );
};
