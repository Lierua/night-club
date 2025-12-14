"use client";

import Image from "next/image";
import { motion, Variants } from "framer-motion";
const HomeHero = () => {
  const windowVariants: Variants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { delay: 2 } },
  };

  const textVariantOne: Variants = {
    flat: { rotateX: 90, opacity: 0 },
    block: { rotateX: 0, opacity: 1, transition: { delay: 1.6, duration: 0.8 } },
  };
  const textVariantTwo: Variants = {
    up: { y: "-75%", opacity: 0 },
    down: { y: 0, opacity: 1, transition: { delay: 2.6, duration: 0.8, ease: "easeInOut" } },
  };

  const gifVariant: Variants = {
    seen: { opacity: 1 },
    unseen: { opacity: 0, transition: { delay: 1.6, ease: "easeInOut" } },
  };

  return (
    <motion.div variants={windowVariants} className="h-screen w-full overflow-hidden full-bleed grid items-center relative">
      <motion.div className="col-[1/2] row-[1/2] z-1 mx-auto grid gap-3 perspective-distant">
        <motion.div variants={textVariantOne} initial="flat" animate="block" className=" relative z-20">
          <Image loading="eager" src={"/assets/HeroTitle.svg"} width={1000} height={170} alt={"hero logo"} className="w-[964px] mx-auto" />
        </motion.div>
        <motion.div variants={textVariantTwo} initial="up" animate="down" className="relative z-10">
          <Image loading="eager" src={"/assets/HeroUnderTitle.svg"} width={1000} height={170} alt={"hero logo"} className="" />
          <Image loading="eager" src={"/assets/bottom_line.png"} width={1000} height={170} alt={"hero logo"} className="mt-[-10px]" />
        </motion.div>
      </motion.div>
      <motion.div variants={windowVariants} initial="hidden" animate="show" className="w-full h-full col-[1/2] row-[1/2]">
        <Image loading="eager" src={"/assets/bg/header_bg_2.jpg"} width={1620} height={868} alt={"background"} className="w-full h-full object-center object-cover" />
      </motion.div>
      <motion.div variants={gifVariant} initial="seen" animate="unseen" className="w-[3%] aspect-square absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ">
        <Image loading="eager" src={"/assets/icon/music_loader.gif"} width={300} height={300} alt={"background"} className="w-full h-full object-center object-cover" />
      </motion.div>
    </motion.div>
  );
};

export default HomeHero;
