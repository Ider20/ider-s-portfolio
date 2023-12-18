import React from "react";
import { useState } from "react";

export const Input = () => {
  const [inputValue, setINputValue] = useState("");
  const [displayValue, setDisplayValue] = useState("");
  const handleINputChange = (event) => {
    setINputValue(event.target.value);
  };
  const handleDisplayValue = () => {
    setDisplayValue(inputValue);
  };
  const handleKeyValue = (event) => {
    if (event.key === "Enter") {
      setDisplayValue(inputValue);
    }
  };
  return (
    <div className="lg:flex lg:justify-center lg:py-20 gap-2 lg:flex-col items-center">
      <input
        type="text"
        value={inputValue}
        onChange={handleINputChange}
        onKeyPress={handleKeyValue}
        placeholder="Type something ..."
        className="rounded-lg border-solid border-1 border-black p-1 "
      ></input>
      <button
        onClick={handleDisplayValue}
        className="border-solid border-black border-2 p-2 hover:shadow-hover-shad ease-in-out duration-300 active:scale-95 rounded-md"
      >
        Clickasd
      </button>
      <div className="w-1/2 p-2 bg-white rounded-lg flex gap-2">
        <p className="text-justify">Value: </p>
        <span className="text-orange-500">{displayValue}</span>
      </div>
    </div>
  );
};

export default Input;
