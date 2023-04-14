import React from "react";

const Shimmer = () => {
  return Array(50)
    .fill("")
    .map((e, index) => {
      return (
        <div
          className="flex flex-row m-2 h-[200px] w-[200px] bg-slate-300 border border-red-400"
          key={index}
        ></div>
      );
    });
};

export default Shimmer;
