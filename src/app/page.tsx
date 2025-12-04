import Image from "next/image";
import NavBar from "./components/utilityComponents/Navbar";
import Button from "./components/utilityComponents/Button";
import HomeHero from "./components/homeComponents/HomeHero";
import TitleText from "./components/utilityComponents/TitleText";
import SoMeIcons from "./components/utilityComponents/SoMeIcons";
import Footer from "./components/utilityComponents/footerComps/Footer";

export default function Home() {
  return (
    <div className="full-bleed">
      <HomeHero></HomeHero>
      <div className="grid grid-cols-[1fr_[content]_minmax(0,1440px)_1fr] full-bleed [&>*]:col-[content] mt-[-124px] w-full gap-8">
        <NavBar page="home" />
        <Footer />
      </div>
    </div>
  );
}
