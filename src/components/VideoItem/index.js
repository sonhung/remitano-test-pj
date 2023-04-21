import { AiOutlineDislike, AiOutlineLike } from "react-icons/ai";
import { useVideoInfo } from "@/hooks";
import VideoSkeleton from "./VideoSkeleton";
import Voting from "./Voting";

const VideoItem = ({
  link,
  description,
  like,
  dislike,
  vote,
  id,
  sharedBy,
}) => {
  const { data, isLoading } = useVideoInfo(link);

  if (isLoading) return <VideoSkeleton />;

  return (
    <div className="md:flex">
      <div
        className="flex justify-center"
        dangerouslySetInnerHTML={{
          __html: data?.html
            .replace(`width=\"200\"`, `width=\"300\"`)
            .replace(`height=\"113\"`, `height=\"169\"`),
        }}
      />
      <div className="w-[300px] mx-auto md:w-96 mt-4 md:pl-4 md:mt-0">
        <div className="text-rose-500 font-bold text-base mb-2 line-clamp-2">
          {data?.title}
        </div>
        <div className="flex justify-between">
          <div className="text-sm">
            Share by:
            <span className="font-bold ml-2">
              {sharedBy || data?.author_name}
            </span>
          </div>
          <Voting vote={vote} videoId={id} />
        </div>
        <div className="flex text-sm">
          <div className="flex items-center">
            <span data-testid="num-like">{like}</span>
            <AiOutlineLike size={16} />
          </div>
          <div className="flex items-center ml-2">
            <span data-testid="num-dislike">{dislike}</span>
            <AiOutlineDislike size={16} />
          </div>
        </div>
        <div className="text-xs">Description:</div>
        <div className="text-xs line-clamp-2 font-semi-bold">{description}</div>
      </div>
    </div>
  );
};

export default VideoItem;
