import Image from "next/image";
import NavBar from "./components/Navbar";
import Button from "./components/Button";
import HomeHero from "./components/HomeHero";
import TitleText from "./components/TitleText";

export default function Home() {
  return (
    <div className="full-bleed">
      <HomeHero></HomeHero>
      <div className="grid grid-cols-[1fr_[content]_minmax(0,1440px)_1fr] full-bleed [&>*]:col-[content] mt-[-124px] w-full gap-8">
        <NavBar page="home" />
      </div>
    </div>
  );
}
