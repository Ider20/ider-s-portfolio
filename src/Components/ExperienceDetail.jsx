import React from "react";
import { IconUpWork } from "./Icons/IconUpWork";

const experienceData = [
  {
    icon: <IconUpWork />,
    exp: "Sr. Frontend Developer",
    ability: [
      "Sed quis justo ac magna.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "Ut pretium arcu et massa semper, id fringilla leo semper.",
      "Sed quis justo ac magna.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    ],
    date: "Nov 2021 - Present",
  },
  {
    icon: <IconUpWork />,
    exp: "Team Lead.",
    ability: [
      "Sed quis justo ac magna.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "Sed quis justo ac magna.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    ],
    date: "Jul 2017 - Oct 2021",
  },
  {
    icon: <IconUpWork />,
    exp: "Full Stack Developer",
    ability: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. asdasdLorem ipsum dolor sit amet, consectetur adipiscing elit.",
    ],
    date: "Dec 2015 - May 2017",
  },
];
export const ExperienceDetail = () => {
  return (
    <>
      <div>
        {experienceData.map((exper, index) => {
          //   console.log(exper, "exper", index, "index");
          return (
            <div
              key={index}
              className="flex justify-between mb-2 bg-[#fff] p-8 gap-28 "
            >
              <div>
                <div className="w-[100px]">{exper.icon}</div>
              </div>
              <div>
                <h1 className="text-title-black w-[440px]">{exper.exp}</h1>
                <ul>
                  {exper.ability.map((aby, index) => (
                    <li
                      key={index}
                      className="text-text-gray w-[440px] list-disc list-inside"
                    >
                      {aby}
                    </li>
                  ))}
                </ul>
              </div>
              <p className="text-text-gray text-xs  flex justify-end">
                {exper.date}
              </p>
            </div>
          );
        })}
      </div>
    </>
  );
};
