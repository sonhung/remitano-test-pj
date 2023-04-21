import { useVideoList } from "@/hooks";
import { Spin } from "@/components/base";
import VideoItem from "@/components/VideoItem";

export default function Home() {
  const { data, loading } = useVideoList();

  if (loading)
    return (
      <div className="h-80 flex justify-center items-center">
        <Spin />
      </div>
    );

  return (
    <div className="w-full mt-10">
      <div className="mx-auto">
        {(data || []).map((video) => (
          <div className="flex justify-center mb-10" key={video?.id}>
            <VideoItem {...video} />
          </div>
        ))}
      </div>
    </div>
  );
}
