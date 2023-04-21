const VideoSkeleton = () => {
  return (
    <div className="animate-pulse">
      <div className="flex items-center space-x-4">
        <div className="h-40 w-56 bg-gray" />
        <div>
          <div className="h-3 w-20 mb-2 mb-2 bg-rose-500" />
          <div className="h-4 w-40 mb-2 bg-gray" />
          <div className="h-2 w-96 mb-2 bg-gray" />
          <div className="h-2 w-96 mb-2 bg-gray" />
          <div className="h-2 w-96 mb-2 bg-gray" />
          <div className="h-2 w-96 mb-2 bg-gray" />
        </div>
      </div>
    </div>
  );
};

export default VideoSkeleton;
