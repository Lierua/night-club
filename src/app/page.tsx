import NavBar from "./components/utilityComponents/Navbar";
import HomeHero from "./components/homeComponents/HomeHero";
import TitleText from "./components/utilityComponents/TitleText";
import SubscriptionSection from "./components/homeComponents/SubscriptionSection/SubscriptionSection";
import SoMeIcons from "./components/utilityComponents/SoMeIcons";
import Footer from "./components/utilityComponents/footerComps/Footer";

import { FormState } from "./action/action";
import TestimonialData from "./components/homeComponents/testimonials/TestimonialData";
import EomData from "./components/homeComponents/eventsOfMonthSec/EomData";
import WelcomeSec from "./components/homeComponents/welcomeSecComps/WelcomeSec";
import BlogPosts from "./components/homeComponents/BlogPostSection/BlogPosts";
import VideoSection from "./components/homeComponents/RecentVidsSection/VideoSection";
import MusicPlayer from "./components/homeComponents/MusicPlayerSection/MusicPlayerComponent";
import GalleryData from "./components/homeComponents/GallerySection/GalleryData";

export type FormProps = {
  state?: FormState;
  postUser: (formData: FormData) => Promise<FormState>;
  children?: React.ReactNode;
};
export default function Home() {
  return (
    <div className="full-bleed">
      <HomeHero></HomeHero>
      <div className="grid grid-cols-[1fr_[content]_minmax(0,1440px)_1fr] full-bleed [&>*]:col-[content] mt-[-124px] w-full">
        <NavBar page="home" />
        <div className="flex flex-col justify-center items-center w-full h-fit py-[90px] gap-6 ">
          <TitleText text="welcome in nightclub" />
          <WelcomeSec />
        </div>
        <div className=" items-center justify-center full-bleed grid grid-cols-[1fr_minmax(0,1440px)_1fr] [&>*]:col-start-2 py-[90px] gap-6 bg-[url('/assets/bg/slider_bg_overlay.png')] bg-cover bg-center ">
          <TitleText text="Events of the Month" />
          <EomData />
        </div>
        <div className=" items-center justify-center full-bleed grid grid-cols-[1fr_minmax(0,1440px)_1fr] [&>*]:col-start-2 py-[90px] gap-6">
          <TitleText text="night club gallery" />
          <GalleryData />
        </div>
        <MusicPlayer />
        <VideoSection />
        <TestimonialData />
        <BlogPosts></BlogPosts>

        <SubscriptionSection></SubscriptionSection>
        <Footer />
      </div>
    </div>
  );
}
