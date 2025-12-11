"use client";

import Image from "next/image";
import { Suspense } from "react";
import SoMeIcons from "../../utilityComponents/SoMeIcons";

type Testimonial = {
  id: number;
  name: string;
  content: string;
  link: string;
  facebook: string;
  twitter: string;
};

const TestimonialSec = ({ id, name, content, facebook, twitter, link }: Testimonial) => {
  return (
    <div key={id} className="flex flex-col w-full p-4">
      <div className="flex flex-col gap-4 items-center">
        <div className="aspect-square">
          <Image src={link} width={200} height={200} alt={`picture of ${name}`} unoptimized className="object-cover object-center" />
        </div>
        <h2>{name}</h2>
      </div>
      <span className="col-span-full text-center justify-center">
        <p>{content}</p>
      </span>
      <div className="w-fit h-fit mx-auto col-start-2 mt-8">
        <SoMeIcons facebook={facebook} twitter={twitter} />
      </div>
    </div>
  );
};

export default TestimonialSec;
