import Image from "next/image";

const TitleText = ({ text }: { text: string }) => {
  return (
    <div className="flex flex-col gap-1 mx-auto sm:mb-8 mb-auto ">
      <h1 className="w-fit uppercase text-center mx-auto">{text}</h1>
      <Image
        loading="eager"
        src={"/assets/bottom_line.png"}
        width={240}
        height={20}
        alt={"hero logo"}
        className="sm:w-full w-100px mx-auto mt-[-10px] sm:mt-[0px]"
      />
    </div>
  );
};

export default TitleText;
