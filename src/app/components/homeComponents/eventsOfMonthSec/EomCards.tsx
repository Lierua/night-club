"use client";
import Image from "next/image";
import { motion } from "framer-motion";

type CardProps = {
  desc: string;
  date: string;
  location: string;
  time: string;
  title: string;
  url: string;
};

const EomCard = ({ desc, time, location, title, date, url }: CardProps) => {
  // const myVariants = {
  //   rest: { opacity: 1, y: 0 },
  //   hiddenDown: { opacity: 0, y: 100 },
  //   hiddenUp: { opacity: 0, y: -100 },
  //   toOrigin: { y: 0 },
  //   hover: { opacity: 1, y: 0, transition: { duration: 0.2 } },
  // };

  const parentVariants = {
    rest: {},
    hover: {},
  };

  const topVariants = {
    rest: { opacity: 0, y: -100 },
    hover: { opacity: 1, y: 0 },
  };
  const bottomVariants = {
    rest: { opacity: 0, y: 100 },
    hover: { opacity: 1, y: 0 },
  };

  return (
    <motion.div variants={parentVariants} initial="rest" whileHover="hover" className=" group w-full max-h-[350px] lg:max-h-full flex flex-col overflow-hidden ">
      {/* billede og Tekst layer--------------------------------------------------*/}
      <div
        className="grid flex:7 grid-cols-1 grid-rows-1 [&>*]:row-span-full [&>*]:col-span-full relative z-5 border-b-1 border-(--black) hover:before:content-[''] hover:before:absolute 
          hover:before:w-[50px] hover:before:h-[150px] hover:before:bg-(--red) hover:before:bottom-[-40]  hover:before:right-[-25] before:z-15 hover:before:rotate-45 overflow-hidden"
      >
        {/*tetx layer------------------------------------>*/}

        {/*(Top elements)----->*/}
        <div className="w-full h-full flex flex-col relative z-10 group-hover:border-t group-hover:border-(--red) ">
          <motion.span variants={topVariants} className="flex w-full h-[70%]  items-center before:content-[''] before:absolute before:w-[120px] before:h-[200px] before:bg-(--red) before:top-[-100] before:left-[-75] before:rotate-45 relative">
            <a className="px-4 py-2 mx-auto bg-(--red) text-(--white)" href="/book">
              Book Now
            </a>
          </motion.span>

          {/*(bottom elements)----->*/}
          <motion.div variants={bottomVariants} className="h-[30%] flex w-full relative">
            <span className="flex flex-col p-4 bg-background/90 h-full overflow-y-auto ">
              <h2 className="">{title}</h2>
              <p>{desc}</p>
            </span>
          </motion.div>
        </div>

        {/*billede layer------------------------------------>*/}
        <div
          className="group-hover:border-t group-hover:border-b border-(--red) min-h-0 after:content-[''] after:absolute after:inset-0 after:w-full after:h-full 
        after:bg-black/0 after:pointer-events-none group-hover:after:bg-black/50 h-auto"
        >
          <Image src={url} alt="event of month" width={400} height={400} unoptimized className="w-full h-full object-cover" />
        </div>
      </div>

      {/* Description layer--------------------------------------------------*/}
      <span className="bg-(--red) p-2 lg:p-4 relative justify-center lg:justify-start h-fit z-100 flex md:flex-[1] my-auto">
        <ul className="flex flex-nowrap self-center gap-4 list-none">
          <li>{date}</li>
          <li>{time} PM</li>
          <li>{location}</li>
        </ul>
      </span>
    </motion.div>
  );
};

export default EomCard;
