import React, { useMemo, useState } from "react";
import { findPrime } from "../utils/helper";

const Demo = () => {
  const [text, setText] = useState(0);
  const [isDarkMode, setIsDarkMode] = useState(false);

  console.log("Rendering...");

  // const prime = findPrime(text);

  const prime = useMemo(() => findPrime(text), [text]);

  return (
    <>
      <div
        className={`w-96 border border-black  h-96 mr-5
          ${isDarkMode && `bg-slate-900 h-72`}`}
      >
        <button onClick={(e) => setIsDarkMode(!isDarkMode)}> Toggle</button>
        <div>
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>

        <h1>nth Prime : {prime}</h1>
      </div>
    </>
  );
};

export default Demo;
