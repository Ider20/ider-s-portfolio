import React, { useState } from "react";

export const OnOffButton = () => {
  const [isOn, setIsOn] = useState(false);

  const handleClick = () => {
    setIsOn(!isOn);
  };

  return (
    <div className={`lg:flex lg:justify-center lg:py-20 bg-white`}>
      <button
        onClick={handleClick}
        className={`lg:w-20 lg:h-20 lg:rounded-lg active:scale-90 ease-linear duration-300 hover:shadow-hover-shad ${
          isOn ? "bg-blue-400" : "bg-red-400"
        }`}
      >
        {isOn ? "ON" : `OFF`}
      </button>
    </div>
  );
};

export default OnOffButton;
