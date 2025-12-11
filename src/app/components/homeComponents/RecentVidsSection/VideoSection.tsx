import VideoPlayer from "./VideoPlayer";
import CarouselTwo from "../../utilityComponents/CarouselTwo";
import TitleText from "../../utilityComponents/TitleText";

const VideoSection = () => {
  const slides = [
    {
      id: 1,
      element: <VideoPlayer src="/assets/media/video-crowd.mp4" />,
    },
    {
      id: 2,
      element: <VideoPlayer src="/assets/media/video-dj-crowd1.mp4" />,
    },
    {
      id: 3,
      element: <VideoPlayer src="/assets/media/video-dj-crowd-2.mp4" />,
    },
  ];

  return (
    <div className="flex flex-col h-full py-[90px] gap-6 w-full relative">
      <TitleText text="latest video" />
      <CarouselTwo slides={slides} />
    </div>
  );
};

export default VideoSection;
