"use client";
import Image from "next/image";

type RecentProps = {
  desc: string;
  image: string;
};

const Recents = ({desc, image }: RecentProps) => {
  const currentDate = new Date().toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });


  return (
    <div className="grid grid-cols-[minmax(0,65px)_3fr] gap-4">
      <div className="aspect-square w-auto">
        <Image src={image} alt="recent post" unoptimized width={100} height={100} className="w-full h-full object-cover" />
      </div>
      <div>
        <p>{desc}</p>
        <p className="text-xs text-(--red)">{currentDate}</p>
      </div>
    </div>
  );
};

export default Recents;
