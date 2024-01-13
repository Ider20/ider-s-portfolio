import React from "react";
import { IconCopyRight } from "./Icons/IconCopyRight";
import { IconCopyRightDark } from "./Icons/IconCopyRightDark";

export const CopyRight = () => {
  return (
    <div className="w-full text-sm flex w-100 lg:px-56 justify-center items-center lg:text-sm text-text-gray gap-2 bg-[#f9fafb] py-6 dark:bg-blacktheme-bg01 dark:text-blacktheme-text">
      <div className="dark:hidden">
        <IconCopyRight />
      </div>
      <div className="hidden dark:flex">
        <IconCopyRightDark />
      </div>
      2023 | Designed and coded with ❤️️ by Sagar Shah
    </div>
  );
};

export default CopyRight;
