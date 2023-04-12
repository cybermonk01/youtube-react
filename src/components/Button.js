import React from "react";

const Button = ({ name }) => {
  return (
    <div className="bg-gray-300 hover:bg-gray-700 mt-2 ml-2 rounded-lg p-2  ">
      {name}
    </div>
  );
};

export default Button;
