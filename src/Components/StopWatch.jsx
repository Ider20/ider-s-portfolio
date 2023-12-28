import React from "react";
import { useState, useEffect } from "react";

export const StopWatch = () => {
  const [sec, setSec] = useState(0);
  const [min, setMin] = useState(0);
  const [hour, setHour] = useState(0);
  const [stop, setStop] = useState(true);

  const Seconds = () => {
    setSec(sec + 1);
  };

  function handleStopWatch() {
    setStop(!stop);
  }

  useEffect(() => {
    const interval = setInterval(() => {
      if (!stop) {
        setSec(sec + 1);
        if (sec == 59) {
          setSec(0);
          setMin(min + 1);
        } else {
          setSec(sec + 1);
        }
        if (min == 59) {
          setMin(0);
          setHour(hour + 1);
        }
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [sec, min, hour, stop]);

  return (
    <div className="flex justify-center py-10 flex-col items-center gap-5">
      <div>
        {hour}
        <span className="mr-4 ml-4">{hour <= 1 ? `hour` : `hours`}</span>
        {min}
        <span className="mr-4 ml-4">{min <= 1 ? `minute` : `minutes`}</span>
        {sec}
        <span className="ml-4">{sec <= 1 ? `second` : `seconds`}</span>
      </div>
      <button
        onClick={handleStopWatch}
        className="w-36 border-solid border-black border p-2 rounded-md hover:shadow-hover-shad ease-in-out duration-200 active:scale-95"
      >
        {!stop ? `Stop watch` : `Resume watch`}
      </button>
    </div>
  );
};
