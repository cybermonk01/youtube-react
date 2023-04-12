import VideoCard from "./VideoCard";

export const AdVideoCard = ({ videos }) => {
  return (
    <div className="m-1 p-1 border border-red-600">
      <VideoCard videos={videos} />
    </div>
  );
};
