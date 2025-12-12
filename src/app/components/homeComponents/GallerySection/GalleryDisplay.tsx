"use client";

import Image from "next/image";
import { motion, Variants, useInView, useAnimation } from "framer-motion";
import { ReactNode, useEffect, useRef, useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

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
    show: {},
  };

  const childrenVariants: Variants = {
    hidden: { x: "-100%", opacity: 0 },
    show: { x: 0, opacity: 1, transition: { type: "tween", duration: 0.8, ease: "easeIn" } },
  };

  /*bento grid controller */
  const gridAreas: string[] = ["a", "b", "c", "d", "e", "f", "g"];

  return (
    <div className="flex w-full h-[800px] full-bleed overflow-hidden">
      <motion.div ref={ref} variants={parentVariants} initial="hidden" animate={isInView ? "show" : "hidden"} className="grid gallery-grid w-full h-full min-h-full flex-shrink-0 gap-0 hover-tag-top hover-tag-bottom *:hover:cursor-pointer">
        {gallery.map((item, index) => (
          <motion.div
            key={item.id}
            variants={childrenVariants}
            style={{ gridArea: gridAreas[index] }}
            onClick={() => {
              setCurrentIndex(index);
              setOpen(true);
            }}
            className="flex relative overflow-hidden hover-tag-top hover-border hover-tag-bottom"
          >
            <Image src={item.url} alt={item.description} fill unoptimized className="object-cover object-center" />
          </motion.div>
        ))}
      </motion.div>

      <Lightbox open={open} close={() => setOpen(false)} index={currentIndex} slides={slides} />
    </div>
  );
};

export default GalleryDisplay;
