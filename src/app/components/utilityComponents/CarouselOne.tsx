"use client";
import Image from "next/image";
import { ReactNode, useState } from "react";

type Slide = {
  id: number;
  element: ReactNode;
};

type CarouselProps = {
  slides: Slide[];
  pushStyle?: string;
};

const CarouselOne = ({ slides, pushStyle }: CarouselProps) => {
  const [isCurrent, setCurrent] = useState(0);

  const handleSlide = (i: number) => {
    setCurrent(i);
  };

  return (
    <div className={`items-center gap-4 h-[400px] md:h-[500px] flex flex-col justify-between lg:h-[650px] w-full relative ${pushStyle}`}>
      <div className="overflow-x-scroll snap-x snap-mandatory  lg:w-full h-100 lg:relative flex flex-5 lg:flex-row lg:overflow-hidden ">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`min-w-full h-full flex items-center justify-center snap-center
          lg:absolute lg:inset-0 lg:min-w-0  transition-transform duration-500 ${index === isCurrent ? "translate-x-0" : index < isCurrent ? "-translate-x-full" : "translate-x-full"}
          `}
          >
            {slide.element}
          </div>
        ))}
      </div>
      {/* -----contntroller boxes----- */}
      <div className="w-fit mx-auto [&>*]:min-w-4 [&>*]:bg-(--white) [&>*]:hover:scale-105 [&>*]:hover:cursor-pointer transition-all ease-in-out duration-100 gap-5 flex flex-1 items-center  flex-nowrap">
        {slides.map((e, i) => (
          <div key={e.id} onClick={() => handleSlide(i)} className={`w-6 h-6  ${i === isCurrent ? "bg-(--red)! h-5!" : ""}`}></div>
        ))}
      </div>
    </div>
  );
};

export default CarouselOne;

// import { div } from "framer-motion/client";
// import Image from "next/image";
// import { ReactNode, useState } from "react";

// type CarouselProps = {
//   slot1: React.ReactNode;
//   slot2: React.ReactNode;
//   slot3: React.ReactNode;
//   pushStyle?: string;
// };

// const CarouselOne = ({ slot1, slot2, slot3, pushStyle }: CarouselProps) => {
//   const [currentImg, setCurrentImg] = useState<string>("secondImg");

//   const handleCarousel = (id: number) => {
//     if (id === 1) {
//       setCurrentImg("firstImg");
//     } else if (id === 2) {
//       setCurrentImg("secondImg");
//     } else if (id === 3) {
//       setCurrentImg("thirdImg");
//     }
//   };
//   return (
//     <div className={`items-center h-[400px] md:h-[500px] lg:h-[550px] w-full gap-8 flex flex-col relative ${pushStyle}`}>
//       <div className="overflow-hidden w-full  aspect-[2/1] [&>*]:h-full [&>*]:w-full relative ">
//         <div
//           className={`absolute inset-0 transition-transform  duration-500
//             ${currentImg === "firstImg" ? "translate-x-0" : "-translate-x-full"} `}
//         >
//           {slot1}
//         </div>
//         <div
//           className={`absolute inset-0 transition-transform duration-500
//             ${currentImg === "secondImg" ? "translate-x-0" : currentImg === "firstImg" ? "translate-x-full" : "-translate-x-full"}`}
//         >
//           {slot2}
//         </div>
//         <div
//           className={`absolute inset-0 transition-transform duration-500
//             ${currentImg === "thirdImg" ? "translate-x-0" : "translate-x-full"}`}
//         >
//           {slot3}
//         </div>
//       </div>

//       <div className="max-w-[120px] justify-between [&>*]:aspect-square [&>*]:min-w-4 [&>*]:bg-(--white) [&>*]:hover:scale-105 [&>*]:hover:cursor-pointer transition-all ease-in-out duration-100 gap-5 flex flex-nowrap">
//         <div onClick={() => handleCarousel(1)} className={`${currentImg === "firstImg" ? "bg-(--red)!" : ""}`}></div>
//         <div onClick={() => handleCarousel(2)} className={`${currentImg === "secondImg" ? "bg-(--red)!" : ""}`}></div>
//         <div onClick={() => handleCarousel(3)} className={`${currentImg === "thirdImg" ? "bg-(--red)!" : ""}`}></div>
//       </div>
//     </div>
//   );
// };
