import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { openMenu } from "../utils/appSlice";
import { YOUTUBE_API } from "../utils/constants";
import { getAllVideos } from "../utils/videoSlice";
import { AdVideoCard } from "./AdVideoCard";
import Shimmer from "./Shimmer";
import VideoCard from "./VideoCard";
import { setVideos, setFilteredVideos } from "../utils/videoSlice";

const VideoContainer = () => {
  // const [videos, setVideos] = useState([]);
  // const [filteredVideos, setFilteredVideos] = useState([]);

  const { videos, filteredVideos } = useSelector((state) => state.videos);
  // const content = useSelector((state) => state.videos);
  // console.log("content", content);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(openMenu());
    getVideos();
  }, []);

  const getVideos = async () => {
    const data = await fetch(YOUTUBE_API);

    const json = await data.json();

    console.log(json.items);
    dispatch(setVideos(json.items));
    dispatch(setFilteredVideos(json.items));

    console.log("filtered videos", filteredVideos);
  };
  return (
    <div className="flex flex-wrap">
      {filteredVideos?.length === 0 ? (
        <Shimmer />
      ) : (
        <>
          {videos[0] && <AdVideoCard videos={videos[0]} />}
          {filteredVideos.map((video) => (
            <Link to={`/watch?v=` + video.id} key={video.id}>
              <VideoCard videos={video} />
            </Link>
          ))}
        </>
      )}
    </div>
  );
};

export default VideoContainer;
