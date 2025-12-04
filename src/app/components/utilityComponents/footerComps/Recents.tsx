"use client";
import Image from "next/image";

const Recents = () => {
  return (
    <div className="grid grid-cols-[minmax(0,65px)_3fr] gap-4">
      <div className="aspect-square w-auto">
        <Image src="/assets/bg/header_bg_1.jpg" alt="recent post" width={100} height={100} className="w-full h-full object-cover" />
      </div>
      <div>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting.</p>
        <p className="text-xs text-(--red)">April 17, 2018</p>
      </div>
    </div>
  );
};

export default Recents;
