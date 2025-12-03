import Image from "next/image";

const TitleText = ({ text }: { text: string }) => {
  return (
    <div className="flex flex-col gap-1 mx-auto my-8">
      <h1 className="w-fit uppercase text-center">{text}</h1>
      <Image
        loading="eager"
        src={"/assets/bottom_line.png"}
        width={240}
        height={20}
        alt={"hero logo"}
        className="w-full"
      />
    </div>
  );
};

export default TitleText;
