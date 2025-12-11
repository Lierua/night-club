
import { Suspense } from "react";
import CarouselOne from "../../utilityComponents/CarouselOne";
import TestimonialSec from "./TestimonialSec";

type Testimonial = {
  id: number;
  name: string;
  content: string;
  asset: { url: string };
  facebook: string;
  twitter: string;
};

const TestimonialData = async ({}) => {
  const url = "http://localhost:4000/testimonials";
  const response = await fetch(url);
  const data = (await response.json()) as Testimonial[];

  const slides = data.map((testimonial) => ({
    id: testimonial.id,
    element: <TestimonialSec id={testimonial.id} name={testimonial.name} content={testimonial.content} link={testimonial.asset.url} facebook={testimonial.facebook} twitter={testimonial.twitter} />,
  }));

  return (
    <Suspense>
      <div
        className="items-center justify-center full-bleed grid grid-cols-subgrid 
      [&>*]:col-[content] p-12 bg-[url('/assets/bg/footerbg.jpg')] bg-cover bg-center relative before:z-10 before:absolute before:content-[''] before:inset-0 before:h-full before:w-full before:bg-black/70 bg-cover bg-center"
      >
        <CarouselOne pushStyle="z-20" slides={slides} />
      </div>
    </Suspense>
  );
};

export default TestimonialData;
