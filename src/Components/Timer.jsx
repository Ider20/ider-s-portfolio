import React from "react";
import { useState, useEffect } from "react";

export const Timer = () => {
  const [timer, setTimer] = useState(36000);

  const sec = Math.floor(timer / 1000) % 60;
  console.log(sec, "sec");

  useEffect;
  return <div>Timer</div>;
};
