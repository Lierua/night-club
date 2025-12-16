"use client";

import Image from "next/image";
import { motion, Variants, useInView, useAnimation } from "framer-motion";
import { ReactNode, useEffect, useRef, useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Button from "../../utilityComponents/Button";

export interface GalleryItem {
  id: number;
  url: string;
  description: string;
}

type GalleryProps = {
  gallery: GalleryItem[];
};

const GalleryDisplay = ({ gallery }: GalleryProps) => {
  /*Handling on scroll animation */
  const ref = useRef<HTMLDivElement>(null);

  const isInView = useInView(ref, { once: true });

  //   const toggle = useAnimation();

  //   useEffect(() => {
  //     if (isInView) {
  //       toggle.start("show");
  //     }
  //   }, [isInView, toggle]);

  /*Lightbox */
  const [open, setOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const slides = gallery.map((item) => ({
    src: item.url,
    alt: item.description,
  }));

  /*Variants */

  const parentVariants: Variants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0,
      },
    },
  };

  const childrenVariants: Variants = {
    hidden: { x: "-100%", opacity: 0 },
    show: { x: 0, opacity: 1, transition: { delay: 0.4, duration: 0.8, ease: "easeInOut" } },
  };

  /*bento grid controller */
  const gridAreas: string[] = ["a", "b", "c", "d", "e", "f", "g"];

  return (
    <div className="flex w-full h-fit lg:h-[800px] full-bleed overflow-hidden">
      <motion.div ref={ref} variants={parentVariants} initial="hidden" animate={isInView ? "show" : "hidden"} className=" grid gallery-grid w-full h-full min-h-full shrink-0 gap-0  *:hover:cursor-pointer">
        {gallery.map((item, index) => (
          <motion.div
            key={item.id}
            variants={childrenVariants}
            style={{ gridArea: gridAreas[index] }}
            onClick={() => {
              setCurrentIndex(index);
              setOpen(true);
            }}
            className="flex flex-col"
          >
            <div className="relative flex-2 overflow-hidden hover-tag-top hover-border hover-tag-bottom ">
              <Image src={item.url} alt={item.description} fill unoptimized className="object-cover object-center" />
            </div>
          </motion.div>
        ))}
      </motion.div>

      <Lightbox
        open={open}
        close={() => setOpen(false)}
        index={currentIndex}
        slides={slides}
        styles={{ container: { backgroundColor: "rgba(0, 0, 0, 0.9)" }, button: { border: "1px solid white", padding: "5px" }, navigationNext: { right: "15%" }, navigationPrev: { left: "15%" } }}
        render={{
          slide: ({ slide }) => (
            <div className="relative w-full overflow-y-auto elegant-scrollbar lg:w-[860px] flex flex-col h-full bg-black">
              <div className="flex w-full flex-1 lg:flex-2">
                <img src={slide.src} alt={slide.alt} className="lg:object-contain object-cover w-full h-full" />
              </div>
              <div className="flex flex-col flex-1 gap-2 w-full h-full justify-center p-2 lg:p-6">
                <h2 className="uppercase">Night club</h2>
                <span className="flex gap-2 items-center w-full">
                  <p className="overflow-x-auto">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don’t look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn’t anything embarassing hidden in the middle of the text.</p>
                </span>
                <a href="/blogPost" className="self-end">
                  <Button text="Read More" type="button" />
                </a>
              </div>
            </div>
          ),
        }}
      />
    </div>
  );
};

export default GalleryDisplay;

// <div className={`items-center gap-4 h-[650px] md:h-[500px] flex flex-col justify-between lg:h-[650px] w-full relative ${pushStyle}`}>
//   <div className="overflow-x-scroll snap-x snap-mandatory w-full h-100 lg:relative flex flex-5 lg:flex-row lg:overflow-hidden ">
//     {slides.map((slide, index) => (
//       <div
//         key={slide.id}
//         className={`min-w-full h-full flex items-center justify-center snap-center
//           lg:absolute inset-0 min-w-0  transition-transform duration-500 ${index === isCurrent ? "translate-x-0" : index < isCurrent ? "-translate-x-full" : "translate-x-full"}
//           `}
//       >
//         {slide.element}
//       </div>
//     ))}
//   </div>
//   {/* -----contntroller boxes----- */}
//   <div className="w-fit mx-auto [&>*]:min-w-4 [&>*]:bg-(--white) [&>*]:hover:scale-105 [&>*]:hover:cursor-pointer transition-all ease-in-out duration-100 gap-5 flex flex-1 items-center  flex-nowrap">
//     {slides.map((e, i) => (
//       <div key={e.id} onClick={() => handleSlide(i)} className={`w-6 h-6  ${i === isCurrent ? "bg-(--red)! h-5!" : ""}`}></div>
//     ))}
//   </div>
// </div>;
