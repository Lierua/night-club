"use client";

import Image from "next/image";
import WelcomeCard from "./WelcomeCard";
import { GiHotMeal } from "react-icons/gi";
import { PiCheersFill } from "react-icons/pi";

const WelcomeSec = () => {
  return (
    <div className="flex flex-col lg:grid lg:grid-cols-3 gap-8 w-full h-fit lg:h-[650px] mt-12">
      <WelcomeCard
        title="night club"
        backgroundImg="/assets/wlmeP1png.png"
        desc="There are many variations of passages of Lorem Ipsum available, 
        but the majority have suffered alteration in some form, by injected humour, or randomised words which don’t look even slightly believable"
        icon={<Image src="assets/icon/favicon-red.svg" height={50} width={50} alt="dancing icon" unoptimized className="w-full aspect-square object-center" />}
      />
      <WelcomeCard
        title="restaurant"
        backgroundImg="/assets/wlcmP2.png"
        desc="There are many variations of passages of Lorem Ipsum available, 
        but the majority have suffered alteration in some form, by injected humour, or randomised words which don’t look even slightly believable"
        icon={<GiHotMeal size={30} style={{ color: "var(--red)" }} className="object-cover w-full h-full" />}
      />
      <WelcomeCard
        title="bar"
        backgroundImg="/assets/wlcmP3.png"
        desc="There are many variations of passages of Lorem Ipsum available, 
        but the majority have suffered alteration in some form, by injected humour, or randomised words which don’t look even slightly believable"
        icon={<PiCheersFill size={30} style={{ color: "var(--red)" }} className="object-cover w-full h-full" />}
      />
      {/* <div className="relative w-full aspect-[3/4]">
        <Image src="/assets/wlmeP1png.png" alt="logo" fill className="object-cover" />
      </div>
      <div className="relative w-full aspect-[3/4]">
        <Image src="/assets/wlcmP2.png" alt="logo" fill className="object-cover" />
      </div>
      <div className="relative w-full aspect-[3/4]">
        <Image src="/assets/wlcmP3.png" alt="logo" fill className="object-cover" />
      </div> */}
    </div>
  );
};

export default WelcomeSec;
