import React, { useState } from "react";

export const OnOffButton = () => {
  const [isOn, setIsOn] = useState(true);

  const handleClick = () => {
    setIsOn(!isOn);
  };

  return (
    <div className={`lg:flex lg:justify-center lg:py-20 bg-white`}>
      <button
        onClick={handleClick}
        className={`lg:w-20 lg:h-20 lg:rounded-lg ${
          isOn ? "bg-blue-400" : "bg-red-400"
        }`}
      >
        {isOn ? "ON" : `OFF`}
      </button>
    </div>
  );
};

export default OnOffButton;
