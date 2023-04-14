import React, { useRef, useState } from "react";

const Demo2 = () => {
  const [b, setB] = useState(0);
  let c = useRef(0);
  let a = 0;

  console.log("state", b);

  const handleClick = () => {
    a++;
    console.log("let", a);
  };
  const handleRef = () => {
    c.current++;
    console.log("ref", c);
  };

  return (
    <div className="border border-black w-96 h-96  ">
      <div className="flex ">
        <h1 className="font-bold">let -{a} </h1>
        <button className="ml-5 text-green-500 text-xl" onClick={handleClick}>
          Increase
        </button>
      </div>

      <div className="flex">
        <h1 className="font-bold">state - {b}</h1>
        <button
          className="ml-5 text-green-500 text-xl"
          onClick={(e) => setB(b + 1)}
        >
          State increase
        </button>
      </div>

      <div className="flex">
        <h1 className="font-bold">ref -{c.current}</h1>
        {/* <button
          onClick={(e) => {
            c.current++;
          }}
        > */}
        <button className="ml-5 text-green-500 text-xl" onClick={handleRef}>
          Ref increase
        </button>
      </div>
    </div>
  );
};

export default Demo2;
