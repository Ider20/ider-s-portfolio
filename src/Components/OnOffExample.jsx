import React, { useState } from "react";

export const OnOffButton = () => {
  const [isOn, setIsOn] = useState(false);

  const handleClick = () => {
    setIsOn(!isOn);
  };

  return (
    <div className={`flex justify-center py-6 bg-white flex-col items-center`}>
      <div className="flex justify-center  bg-white py-6 font-semibold text-orange-500">
        2. On and Off
      </div>
      <button
        onClick={handleClick}
        className={`w-20 lg:h-20 rounded-lg active:scale-90 ease-linear duration-300 hover:shadow-hover-shad ${
          isOn ? "bg-blue-500" : "bg-red-500"
        } text-white`}
      >
        {isOn ? "ON" : `OFF`}
      </button>
      <hr />
    </div>
  );
};

export default OnOffButton;
