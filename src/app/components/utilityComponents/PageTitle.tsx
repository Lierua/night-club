import Image from "next/image";
import TitleText from "./TitleText";

const PageTitle = ({ text }: { text: string }) => {
  return (
    <div className="full-bleed overflow-hidden h-[224px] w-full grid">
      <div className="col-[1/2] row-[1/2] z-10 mx-auto my-auto">
        <TitleText text={text}></TitleText>
      </div>
      <div className="col-[1/2] row-[1/2] bg-black/85 z-2"></div>
      <Image
        loading="eager"
        src={"/assets/bg/footerbg.jpg"}
        width={1920}
        height={224}
        alt={"background "}
        className="w-[3220px] h-[224px] object-cover col-[1/2] row-[1/2] "
      />
    </div>
  );
};

export default PageTitle;
