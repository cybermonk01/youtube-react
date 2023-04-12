import React from "react";
import { Outlet } from "react-router-dom";
import ButtonList from "./ButtonList";
import VideoContainer from "./VideoContainer";

const MainContainer = () => {
  return (
    <div className="-ml-12">
      <ButtonList />

      <VideoContainer />
    </div>
  );
};

export default MainContainer;
