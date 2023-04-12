import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { openMenu } from "../utils/appSlice";
import { YOUTUBE_API } from "../utils/constants";
import { AdVideoCard } from "./AdVideoCard";
import VideoCard from "./VideoCard";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(openMenu());
    getVideos();
  }, []);

  const getVideos = async () => {
    const data = await fetch(YOUTUBE_API);

    const json = await data.json();

    console.log(json.items);
    await setVideos(json.items);

    console.log(videos);
  };
  return (
    <div className="flex flex-wrap">
      {videos[0] && <AdVideoCard videos={videos[0]} />}
      {videos.map((video) => (
        <Link to={`/watch?v=` + video.id} key={video.id}>
          <VideoCard videos={video} />
        </Link>
      ))}
    </div>
  );
};

export default VideoContainer;
