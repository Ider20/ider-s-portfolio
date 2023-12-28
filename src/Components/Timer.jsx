import React from "react";
import { useState, useEffect, useRef } from "react";
import ReactAudioPlayer from "react-audio-player";

export const Timer = () => {
  const [timer, setTimer] = useState(36000);
  const [stop, setStop] = useState(true);
  const [second, setSecond] = useState(Math.floor(timer / 1000) % 60);
  const [minute, setMinute] = useState(Math.floor(timer / 1000 / 60) % 60);
  const [hour, setHour] = useState(Math.floor(timer / 1000 / 60 / 60) % 60);
  const audioRef = useRef();

  // const sec = Math.floor(timer / 1000) % 60;
  // const min = Math.floor(timer / 1000 / 60) % 60;
  // const hour = Math.floor(timer / 1000 / 60 / 60) % 60;
  // console.log(second, "second");
  // console.log(minute, "minute");
  // console.log(hour, "hour");

  // function sound() {
  //   new Audio("../assets/stoptimer.mp3");
  // }

  function handleStopTimer() {
    setStop(!stop);
  }

  useEffect(() => {
    const interval = setInterval(() => {
      if (!stop) {
        if (hour == 0 && minute == 0 && second == 0) {
          return audioRef.current.play();
        } else {
          setSecond(second - 1);
          if (second == 0) {
            setSecond(59);
            setMinute(minute - 1);
            if (minute == 0) {
              setMinute(59);
              setHour(hour - 1);
            }
          }
        }
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [second, minute, hour, stop]);
  return (
    <div className="flex flex-col items-center gap-2 p-5">
      <div className="flex justify-center gap-6">
        <div className="flex gap-2">
          <span>{hour}</span>
          <span>{hour <= 1 ? `hour` : `hours`}</span>
        </div>
        <div className="flex gap-2">
          <span>{minute}</span>
          <span>{minute <= 1 ? `minute` : `minutes`}</span>
        </div>
        <div className="flex gap-2">
          <span>{second}</span>
          <span>{second <= 1 ? `second` : `seconds`}</span>
        </div>
      </div>
      <button
        onClick={handleStopTimer}
        className="w-36 order-solid border border-black p-2 rounded-md hover:shadow-hover-shad ease-in-out duration-300 active:scale-95"
      >
        {!stop ? `Stop timer` : `Resume timer`}
      </button>
      <audio src="stoptimer.mp3" ref={audioRef} controls />
      {/* <ReactAudioPlayer src="stoptimer.mp3" autoPlay controls /> */}
    </div>
  );
};
