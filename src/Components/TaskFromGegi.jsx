import React from "react";

export const TaskFromGegi = (props) => {
  console.log(props, "props");
  return (
    <div className="lg:flex lg:justify-center lg:gap-10 bg-white lg:py-20 lg:items-center">
      <div
        onClick={props.plus}
        className="hover:shadow-hover-shad lg:p-2 rounded-lg active:scale-90 ease-in-out duration-300 cursor-pointer"
      >
        <i class="fa-regular fa-square-plus"></i>
      </div>
      <p
        style={{
          color: `rgb(1${props.count}, 1${props.count}, 1${props.count})`,
        }}
      >
        {props.count}
      </p>
      <div
        onClick={props.minus}
        className="hover:shadow-hover-shad lg:p-2 rounded-lg active:scale-90 ease-in-out duration-300 cursor-pointer"
      >
        <i class="fa-regular fa-square-minus"></i>
      </div>
    </div>
  );
};
