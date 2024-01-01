import React, { useEffect } from "react";
import { useState } from "react";
import { TaskFromGegi } from "./TaskFromGegi";

export const AddOrSub = () => {
  const [count, setCount] = useState(0);

  function handlePlus() {
    setCount(count + 1);
    console.log("handlePlus");
  }

  useEffect(() => {
    handlePlus();
  }, []);

  function handleSub() {
    if (count === 0) {
      return;
    } else {
      setCount(count - 1);
    }
  }
  return (
    <div>
      <div className="bg-white flex justify-center pt-10 text-2xl font-semibold text-orange-500">
        ADDITIONAL TASKS
      </div>
      <div className="flex justify-center bg-white py-6 font-semibold text-orange-500">
        1. Add or Sub
      </div>
      <TaskFromGegi count={count} plus={handlePlus} minus={handleSub} />
      <hr />
    </div>
  );
};
