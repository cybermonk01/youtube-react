import React, { useEffect, useState } from "react";
import { YOUTUBE_API } from "../utils/constants";

const VideoCard = ({ videos }) => {
  console.log("vidoeoeoeoeoeo", videos);

  const handleVideo = () => {};

  return (
    <div className="w-72 p-2 m-2 shadow ">
      <img
        src={videos.snippet.thumbnails.medium.url}
        alt=""
        onClick={handleVideo}
      />
      <h4>{videos.snippet.title}</h4>
      <p>{videos.statistics.viewCount} views</p>
    </div>
  );
};

export default VideoCard;
