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
      <TaskFromGegi count={count} plus={handlePlus} minus={handleSub} />
    </div>
  );
};
