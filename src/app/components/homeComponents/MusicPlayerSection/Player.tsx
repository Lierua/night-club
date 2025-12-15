"use client";

import Image from "next/image";
import AudioPlayer, { RHAP_UI } from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import { Track } from "./MusicPlayerComponent";

type PlayerProps = {
  musicList: Track[];
  current: number;
};

const Player = ({ musicList, current }: PlayerProps) => {
  const track = musicList[current];

  if (!track) return null;

  return (
    <div className="grid sm:grid-cols-[340px_minmax(0,1100px)]">
      <div className="w-[340px] h-[300px] overflow-hidden hidden sm:block">
        <Image
          loading="eager"
          src={track.img}
          width={340}
          height={300}
          alt={"track image"}
          className=""
        />
      </div>
      <div className="Flex flex-col gap-4 sm:px-8 py-10 w-full">
        <h2 className="sm:ml-4 ml-0 mx-auto uppercase text-center sm:text-left">
          {track.title}
        </h2>
        <div className="my-player">
          <AudioPlayer
            src={track.song}
            autoPlay={false}
            volume={0.4}
            customIcons={{
              play: (
                <img
                  src="/assets/icon/Play.svg"
                  className="h-[52px] w-[52px] p-1 pl-2 rounded-[50%]  border-5 border-(--white)"
                />
              ),
              rewind: (
                <img src="/assets/icon/fast-backward.svg" className="w-8" />
              ),
              forward: (
                <img src="/assets/icon/fast-forward.svg" className="w-8" />
              ),
            }}
            customAdditionalControls={[]}
            customProgressBarSection={[
              RHAP_UI.CURRENT_TIME,
              <div className="mx-2"> / </div>,
              RHAP_UI.DURATION,
              RHAP_UI.PROGRESS_BAR,
            ]}
          />
        </div>
      </div>
    </div>
  );
};

export default Player;
