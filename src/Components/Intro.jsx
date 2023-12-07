import React from "react";

export const Intro = () => {
  return (
    <div className="flex w-3/4 m-auto px-20 py-6 gap-10  bg-[#fff] ]">
      <div className="w-3/4">
        <div>
          <h1 className="text-4xl font-bold mb-5">Hi, I'm Ider</h1>
          <p className="mb-5 text-xs font-normal">
            I'm a full stack developer (React.js & Node.js) with a focus on
            creating (and occasionally designing) exceptional digital
            experiences that are fast, accessible, visually appealing, and
            responsive. Even though I have been creating web applications for
            over 7 years, I still love it as if it was something new.{" "}
          </p>
          <ul>
            <li className="flex gap-x-1 text-xs mb-2 items-center">
              <img src="/Home/Desktop/location.svg" />
              Ulaanbaatar, Mongolia
            </li>
            <li className="flex ml-2 gap-x-3 text-xs mb-8">
              <img src="/Home/Desktop/dot.svg" />
              Available for new project
            </li>
          </ul>
        </div>
        <div className="flex w-5 gap-x-3 ml-1">
          <img src="/Home/Desktop/github.svg" />
          <img src="/Home/Desktop/twitter.svg" />
          <img src="/Home/Desktop/figma.svg" />
        </div>
      </div>
      <div className="flex items-center bg-[#fff] shadow-3xl border-solid border-2 border-black-100 ">
        <img src="/Home/Desktop/pic.png" className="" />
      </div>
    </div>
  );
};

export default Intro;
