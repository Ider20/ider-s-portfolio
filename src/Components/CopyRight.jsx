import React from "react";
import { IconCopyRight } from "./Icons/IconCopyRight";

export const CopyRight = () => {
  return (
    <div className="flex w-100 px-56 justify-center items-center text-xs text-text-gray gap-2 bg-[#f9fafb] py-6">
      <IconCopyRight />
      2023 | Designed and coded with ❤️️ by Sagar Shah
    </div>
  );
};

export default CopyRight;
