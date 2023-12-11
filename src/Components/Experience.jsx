import React from "react";
import { ExperienceDetail } from "./ExperienceDetail";

export const Experience = () => {
  return (
    <div className="w-3/4 m-auto bg-[#f9fafb] px-20 py-10">
      <div className="w-[100px] m-auto">Experience</div>
      <p className="w-[450px] m-auto">
        Here is a quick summary of my most recent experiences:
      </p>
      <ExperienceDetail />
    </div>
  );
};
