import React from "react";
import Button from "./Button";

const ButtonList = () => {
  return (
    <div className="flex w-12 p-2 ">
      <Button name="All" />
      <Button name="Music" />
      <Button name="News" />
      <Button name="Sports" />
      <Button name="Games" />
    </div>
  );
};

export default ButtonList;
