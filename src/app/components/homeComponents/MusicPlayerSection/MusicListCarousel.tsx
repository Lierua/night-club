"use client";

import React from "react";
import { MdOutlineArrowRight, MdOutlineArrowLeft } from "react-icons/md";
import Image from "next/image";
import { Track } from "./MusicPlayerComponent";

const ITEM_WIDTH = 288;
const VIEWPORT_WIDTH = 1440;

const clamp = (value: number, min: number, max: number) =>
  Math.min(Math.max(value, min), max);

type CarouselProps = {
  musicList: Track[];
  current: number;
  setCurrent: React.Dispatch<React.SetStateAction<number>>;
};

const MusicListCarousel = ({
  musicList,
  current,
  setCurrent,
}: CarouselProps) => {
  const prev = () => {
    setCurrent((prev) => (prev === 0 ? 0 : prev - 1));
  };

  const next = () => {
    setCurrent((prev) => (prev === musicList.length - 1 ? prev : prev + 1));
  };

  const trackWidth = musicList.length * ITEM_WIDTH;

  const idealOffset =
    current * ITEM_WIDTH - (VIEWPORT_WIDTH / 2 - ITEM_WIDTH / 2);

  const offset = clamp(idealOffset, 0, trackWidth - VIEWPORT_WIDTH);

  return (
    <div className="full-bleed flex items-center justify-center gap-6">
      <button onClick={prev} className="border p-2 hover:scale-105 transition">
        <MdOutlineArrowLeft size={35} />
      </button>

      <div className="relative max-w-(--content-width) overflow-hidden">
        <div
          className="flex items-center transition-transform duration-300 ease-out"
          style={{ transform: `translateX(${-offset}px)` }}
        >
          {musicList.map((song, index) => {
            const isActive = index === current;

            return (
              <div
                key={`${song.title}-${index}`}
                onClick={() => setCurrent(index)}
                className={`shrink-0 cursor-pointer transition-all duration-300
                  ${isActive ? "scale-110 opacity-100 z-10" : "opacity-50"}
                `}
                style={{ width: ITEM_WIDTH }}
              >
                <div className="relative w-[288px] h-[264px] grid">
                  <Image
                    src={song.img}
                    width={288}
                    height={264}
                    alt={song.title}
                    className="h-full w-full object-contain"
                    unoptimized
                  />
                  {isActive && (
                    <div className="absolute inset-0 grid overflow-hidden">
                      <h2 className="uppercase text-[20px]! text-center text-sm mt-auto h-[4rem] py-2 w-full bg-black/90">
                        {song.title}
                      </h2>
                      <img
                        src="/assets/icon/Play.svg"
                        className="h-[52px] w-[52px] p-1 pl-2 rounded-[50%]  border-5 border-(--red) absolute top-[40%] left-[40%]"
                      />
                      <span className="w-[84px] h-[84px] bg-(--red) absolute rotate-45 bottom-[-30px] right-[-42px]" />
                      <span className="w-[84px] h-[84px] bg-(--red) absolute rotate-45 top-[-30px] left-[-42px]" />
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <button onClick={next} className="border p-2 hover:scale-105 transition">
        <MdOutlineArrowRight size={35} />
      </button>
    </div>
  );
};

export default MusicListCarousel;
