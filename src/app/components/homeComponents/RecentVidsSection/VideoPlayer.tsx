"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";
import Image from "next/image";

const VideoPlayer = ({ src }: { src: string }) => {
  const videoRef = useRef<HTMLVideoElement>(null); //refrences my video

  const [isPlaying, setIsPlaying] = useState(false);

  const isInView = useInView(videoRef, { amount: 0.5 });

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (isInView) {
      video
        .play()
        .then(() => setIsPlaying(true))
        .catch(() => {});
    } else {
      video.pause();
      setIsPlaying(false);
    }
  }, [isInView]);

  const handlePlay = () => {
    const video = videoRef.current;
    if (!video) return;

    video.play().then(() => setIsPlaying(true));
  };

  return (
    <div className=" w-full  aspect-video z-0 relative">
      <video src={src} ref={videoRef} playsInline className="w-full h-full object-contain relative z-20 " />

      {!isPlaying && (
        <div
          onClick={handlePlay}
          className="absolute z-20 w-[150px]  
        top-1/2 left-1/2 hover:cursor-pointer opacity-30 group aspect-square"
        >
          <Image src="/assets/icon/Play.svg" alt="play button" fill unoptimized className="opacity-70 group-hover:opacity-100 w-full h-full object-contain" />
        </div>
      )}
    </div>
  );
};

export default VideoPlayer;
