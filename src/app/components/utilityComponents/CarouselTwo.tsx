"use client";
import Image from "next/image";
import { ReactNode, useState } from "react";
import { MdOutlineArrowRight } from "react-icons/md";
import { MdOutlineArrowLeft } from "react-icons/md";

type Slide = {
  id: number;
  element: ReactNode;
};

type CarouselProps = {
  slides: Slide[];
  pushStyle?: string;
};

const CarouselTwo = ({ slides, pushStyle }: CarouselProps) => {
  const [isCurrent, setCurrent] = useState(0);

  const length = slides.length;

  const prev = () => {
    setCurrent((prev) => (prev === 0 ? length - 1 : prev - 1));
  };

  const next = () => {
    setCurrent((prev) => (prev === length - 1 ? 0 : prev + 1));
  };

  return (
    <div className={`items-center h-[400px] md:h-[500px] gap-6 lg:h-[550px] w-full relative ${pushStyle}`}>
      <div className="w-full h-full relative flex flex-row overflow-hidden ">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`w-full h-full flex items-center 
          absolute inset-0 transition-transform duration-500 ${index === isCurrent ? "translate-x-0" : index < isCurrent ? "-translate-x-full" : "translate-x-full"}
          `}
          >
            {slide.element}
          </div>
        ))}
      </div>
      <div className="*:border *:p-1 flex flex-row w-fit mt-8 gap-4 mx-auto">
        <div onClick={prev} className="flex items-center justify-center  transition-all duration-200 group border(--white) hover:scale-105 hover:border-(--red) ">
          <MdOutlineArrowLeft size={35} className="text(--white) transition-colors  group-hover:text-(--red)" />
        </div>
        <div onClick={next} className="flex items-center justify-center  transition-all duration-200 group border(--white) hover:scale-105 hover:border-(--red)">
          <MdOutlineArrowRight size={35} className="text(--white) transition-colors  group-hover:text-(--red)" />
        </div>
      </div>
    </div>
  );
};

export default CarouselTwo;
