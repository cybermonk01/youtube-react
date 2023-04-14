import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams, useSearchParams } from "react-router-dom";
import { closeMenu, toggleMenu } from "../utils/appSlice";
import CommentContainer from "./CommentContainer";
import LiveChat from "./LiveChat";

const WatchPage = () => {
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();

  console.log(searchParams.get("v"));
  const searchText = searchParams.get("v");

  useEffect(() => {
    dispatch(closeMenu());
  }, []);

  return (
    <div className=" flex-column w-full">
      <div className="flex ">
        <div className="ml-12 mt-5">
          <iframe
            width="1100"
            height="500"
            src={`https://www.youtube.com/embed/${searchText}`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
        <div className="w-full border border-black rounded-lg m-2 p-3">
          <h1 className="font-bold">Live Chat</h1>
          <LiveChat />
        </div>
      </div>
      <div className="">
        <CommentContainer />
      </div>
    </div>
  );
};

export default WatchPage;
