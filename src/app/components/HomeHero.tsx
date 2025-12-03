import Image from "next/image";

const HomeHero = () => {
  return (
    <div className="h-screen w-full overflow-hidden full-bleed grid items-center">
      <div className="col-[1/2] row-[1/2] z-1 mx-auto grid gap-3">
        <Image
          loading="eager"
          src={"/assets/HeroTitle.svg"}
          width={1000}
          height={170}
          alt={"hero logo"}
          className="w-[964px] mx-auto"
        />
        <div>
          <Image
            loading="eager"
            src={"/assets/HeroUnderTitle.svg"}
            width={1000}
            height={170}
            alt={"hero logo"}
            className=""
          />
          <Image
            loading="eager"
            src={"/assets/bottom_line.png"}
            width={1000}
            height={170}
            alt={"hero logo"}
            className="mt-[-10px]"
          />
        </div>
      </div>
      <Image
        loading="eager"
        src={"/assets/bg/header_bg_2.jpg"}
        width={1620}
        height={868}
        alt={"background"}
        className="w-full h-full object-cover col-[1/2] row-[1/2]"
      />
    </div>
  );
};

export default HomeHero;
