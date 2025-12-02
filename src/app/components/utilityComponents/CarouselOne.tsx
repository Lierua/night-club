"use client";

import { useState } from "react";

/*skal finde ud af hvilke type man skal sætte disse slots til */
const CarouselOne = ({ slot1, slot2, slot3 }: { slot1: any; slot2: any; slot3: any }) => {
  const [currentImg, setCurrentImg] = useState<string>("secondImg");

  const handleCarousel = (id: number) => {
    if (id === 1) {
      setCurrentImg("firstImg");
    } else if (id === 2) {
      setCurrentImg("secondImg");
    } else if (id === 3) {
      setCurrentImg("thirdImg");
    }
  };
  return (
    <div className="flex flex-col w-fit items-center gap-4">
      <div
        className="overflow-hidden w-[650px] h-[400px] [&>*]:h-full [&>*]:w-full relative
      
      "
      >
        <div
          className={`absolute inset-0 transition-transform duration-500 
            ${currentImg === "firstImg" ? "translate-x-0" : "-translate-x-full"} bg-red-300! `}
        >
          {slot1}
        </div>
        <div
          className={`absolute inset-0 transition-transform duration-500 
            ${currentImg === "secondImg" ? "translate-x-0" : currentImg === "firstImg" ? "translate-x-full" : "-translate-x-full"} bg-blue-300!`}
        >
          {slot2}
        </div>
        <div
          className={`absolute inset-0 transition-transform duration-500 
            ${currentImg === "thirdImg" ? "translate-x-0" : "translate-x-full"} bg-yellow-300!`}
        >
          {slot3}
        </div>
      </div>

      <div className="max-w-[120px] justify-between [&>*]:aspect-square [&>*]:min-w-4 [&>*]:bg-(--white) [&>*]:hover:scale-105 [&>*]:hover:cursor-pointer transition-all ease-in-out duration-100 gap-5 flex flex-nowrap">
        <div onClick={() => handleCarousel(1)} className={`${currentImg === "firstImg" ? "bg-(--red)!" : ""}`}></div>
        <div onClick={() => handleCarousel(2)} className={`${currentImg === "secondImg" ? "bg-(--red)!" : ""}`}></div>
        <div onClick={() => handleCarousel(3)} className={`${currentImg === "thirdImg" ? "bg-(--red)!" : ""}`}></div>
      </div>
    </div>
  );
};

export default CarouselOne;
