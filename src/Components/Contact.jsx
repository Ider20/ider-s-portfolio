import React from "react";
import { IconEmail } from "./Icons/IconEmail";
import { IconPhone } from "./Icons/IconPhone";
import { IconBtn } from "./Icons/IconBtn";

export const Contact = () => {
  return (
    <div className="bg-[#fff] w-100 px-56 flex flex-col items-center">
      <div className="w-[100px] m-auto text-text-gray bg-[#e5e7eb] rounded-[12px] h-6 text-xs items-center flex justify-center">
        Get in touch
      </div>
      <div className="w-2/4 my-8 text-text-gray">
        What’s next? Feel free to reach out to me if you're looking for a
        developer, have a query, or simply want to connect.
      </div>
      <div className="flex items-center gap-4 mb-4">
        <IconEmail />
        <div className="text-3xl">reachsagarshah@gmail.com</div>
        <IconBtn />
      </div>
      <div className="flex items-center gap-4 mb-10">
        <IconPhone />
        <div className="text-3xl">+91 8980500565</div>
        <IconBtn />
      </div>
      <div className="text-text-gray text-sm mb-5">
        You may also find me on these platforms!
      </div>
      <div className="flex gap-x-3 ml-1 mb-24">
        <img
          src="/Home/Desktop/github.svg"
          className="cursor-pointer hover:scale-125 ease-in-out duration-300"
        />
        <img
          src="/Home/Desktop/twitter.svg"
          className="cursor-pointer hover:scale-125 ease-in-out duration-300"
        />
        <img
          src="/Home/Desktop/figma.svg"
          className="cursor-pointer hover:scale-125 ease-in-out duration-300"
        />
      </div>
    </div>
  );
};

export default Contact;
