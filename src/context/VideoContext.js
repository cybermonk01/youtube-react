import { createContext, useContext } from "react";

const VideoContext = createContext();
const useVideos = () => useContext(VideoContext);

function VideoContextProvider(props) {
  const value = {};

  return (
    <VideoContext.Provider values={value}>
      {props.children}
    </VideoContext.Provider>
  );
}

export default VideoContextProvider;
