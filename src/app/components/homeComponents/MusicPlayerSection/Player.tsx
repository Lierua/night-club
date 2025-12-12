"use client";

import Image from "next/image";

import AudioPlayer, { RHAP_UI } from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";

const Player = () => {
  return (
    <div className="grid grid-cols-[340px_minmax(0,1100px)]">
      <Image
        loading="eager"
        src={"/assets/track_thumb.jpg"}
        width={300}
        height={30}
        alt={"track image"}
        className="aspect-square"
      />
      <div className="Flex flex-col gap-4 px-8 py-10">
        <h2 className="ml-4">Song title</h2>
        <div className="my-player">
          <AudioPlayer
            src="/assets/media/black-box-funky.mp3"
            autoPlay={false}
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
