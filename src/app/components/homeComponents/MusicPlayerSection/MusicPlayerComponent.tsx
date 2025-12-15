"use client";

import { useState } from "react";
import TitleText from "../../utilityComponents/TitleText";
import MusicListCarousel from "./MusicListCarousel";
import Player from "./Player";

export type Track = {
  img: string;
  title: string;
  song: string;
};

const musicList: Track[] = [
  {
    img: "/assets/musicImg/track_thumb.jpg",
    title: "black box funky",
    song: "/assets/media/black-box-funky.mp3",
  },
  {
    img: "/assets/musicImg/track5.jpg",
    title: "euphoria",
    song: "/assets/media/euphoria.mp3",
  },
  {
    img: "/assets/musicImg/track2.jpg",
    title: "fashion red tape",
    song: "/assets/media/fashion-red-tape.mp3",
  },
  {
    img: "/assets/musicImg/track_thumb.jpg",
    title: "black box funky",
    song: "/assets/media/black-box-funky.mp3",
  },
  {
    img: "/assets/musicImg/track4.jpg",
    title: "euphoria",
    song: "/assets/media/euphoria.mp3",
  },
  {
    img: "/assets/musicImg/track1.jpg",
    title: "fashion red tape",
    song: "/assets/media/fashion-red-tape.mp3",
  },
];

const MusicPlayer = () => {
  const [current, setCurrent] = useState<number>(0);
  const [show, setShow] = useState(false);

  return (
    <div className="full-bleed bg-black h-[936px] w-full py-[90px]">
      <div className="w-fit mx-auto">
        <TitleText text="Night Club Track" />
      </div>
      <div className="w-fit mx-auto">
        <Player musicList={musicList} current={current} />
      </div>

      <MusicListCarousel
        musicList={musicList}
        current={current}
        setCurrent={setCurrent}
      />
    </div>
  );
};

export default MusicPlayer;
