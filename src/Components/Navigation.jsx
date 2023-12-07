import React from "react";
const symbol = `<II/>`;

export const Navigation = () => {
  return (
    <nav class="flex w-9/12 m-auto justify-between bg-[#fff] h-24 px-20 items-center rounded-t-lg">
      <div class="text-3xl font-bold">{symbol}</div>
      <div class="flex gap-32 items-center">
        <div>
          <ul class="flex gap-10">
            <li class="hover:scale-110 cursor-pointer ease-in duration-100">
              About
            </li>
            <li class="hover:scale-110 cursor-pointer ease-in duration-100">
              Work
            </li>
            <li class="hover:scale-110 cursor-pointer ease-in duration-100">
              Testimonials
            </li>
            <li class="hover:scale-110 cursor-pointer ease-in duration-100">
              Contact
            </li>
          </ul>
        </div>
        <div class="flex gap-10">
          <img
            src="/Home/Desktop/theme_change.svg"
            class="hover:scale-110 cursor-pointer ease-in duration-100"
          />
          <img
            src="/Home/Desktop/download.svg"
            class="hover:scale-105 cursor-pointer ease-in duration-100"
          />
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
