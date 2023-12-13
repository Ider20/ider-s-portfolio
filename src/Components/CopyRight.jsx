import React from "react";
import { IconCopyRight } from "./Icons/IconCopyRight";

export const CopyRight = () => {
  return (
    <div className="text-[10px] px-8 flex w-100 lg:px-56 justify-center items-center lg:text-xs text-text-gray gap-2 bg-[#f9fafb] py-6">
      <IconCopyRight />
      2023 | Designed and coded with ❤️️ by Sagar Shah
    </div>
  );
};

export default CopyRight;
