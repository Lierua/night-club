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
    <div className="flex w-full h-[950px] lg:h-[800px] full-bleed overflow-hidden">
      <motion.div ref={ref} variants={parentVariants} initial="hidden" animate={isInView ? "show" : "hidden"} className=" grid gallery-grid w-full h-full min-h-full flex-shrink-0 gap-0 hover-tag-top hover-tag-bottom *:hover:cursor-pointer">
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
