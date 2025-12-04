import Image from "next/image";
import NavBar from "./components/utilityComponents/Navbar";
import Button from "./components/utilityComponents/Button";
import HomeHero from "./components/homeComponents/HomeHero";
import TitleText from "./components/utilityComponents/TitleText";
import PageTitle from "./components/utilityComponents/PageTitle";
import InputField from "./components/utilityComponents/formUtility/InputField";
import SubscriptionSection from "./components/homeComponents/SubscriptionSection/SubscriptionSection";

export type FormProps = {
  state?: FormState;
  postUser: (formData: FormData) => Promise<FormState>;
  children?: React.ReactNode;
};
import SoMeIcons from "./components/utilityComponents/SoMeIcons";
import Footer from "./components/utilityComponents/footerComps/Footer";

export default function Home() {
  return (
    <div className="full-bleed">
      <HomeHero></HomeHero>
      <div className="grid grid-cols-[1fr_[content]_minmax(0,1440px)_1fr] full-bleed [&>*]:col-[content] mt-[-124px] w-full">
        <NavBar page="home" />
        <PageTitle></PageTitle>
        <SubscriptionSection></SubscriptionSection>
        <div className="h-[4000px]">hello</div>
        <Footer />
      </div>
    </div>
  );
}
