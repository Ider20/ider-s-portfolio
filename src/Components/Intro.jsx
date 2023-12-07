import React from "react";

export const Intro = () => {
  return (
    <div class="flex w-3/4 m-auto px-20 py-6 gap-10 rounded-b-lg bg-[#fff]">
      <div class="w-3/4">
        <div>
          <h1 class="text-4xl font-bold mb-5">Hi, I'm Ider</h1>
          <img />
          <p class="mb-5 text-xs">
            I'm a full stack developer (React.js & Node.js) with a focus on
            creating (and occasionally designing) exceptional digital
            experiences that are fast, accessible, visually appealing, and
            responsive. Even though I have been creating web applications for
            over 7 years, I still love it as if it was something new.{" "}
          </p>
          <ul>
            <li class="flex gap-x-1 text-xs mb-2 items-center">
              <img src="/Home/Desktop/location.svg" />
              Ulaanbaatar, Mongolia
            </li>
            <li class="flex ml-2 gap-x-3 text-xs mb-8">
              <img src="/Home/Desktop/dot.svg" />
              Available for new project
            </li>
          </ul>
        </div>
        <div class="flex w-5 gap-x-3 ml-1">
          <img src="/Home/Desktop/github.svg" />
          <img src="/Home/Desktop/twitter.svg" />
          <img src="/Home/Desktop/figma.svg" />
        </div>
      </div>
      <div class="w-1/4 flex items-center bg-[#fff] shadow-3xl border-solid border-2 border-black-100 p-3">
        <img src="/next.svg" className="profile-photo" />
      </div>
    </div>
  );
};

export default Intro;
