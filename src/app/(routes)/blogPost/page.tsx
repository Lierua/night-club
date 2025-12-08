import Image from "next/image";
import NavBar from "@/app/components/utilityComponents/Navbar";
import Button from "@/app/components/utilityComponents/Button";
import HomeHero from "@/app/components/homeComponents/HomeHero";
import TitleText from "@/app/components/utilityComponents/TitleText";
import PageTitle from "@/app/components/utilityComponents/PageTitle";
import InputField from "@/app/components/utilityComponents/formUtility/InputField";
import SubscriptionSection from "@/app/components/homeComponents/SubscriptionSection/SubscriptionSection";
import SoMeIcons from "@/app/components/utilityComponents/SoMeIcons";
import Footer from "@/app/components/utilityComponents/footerComps/Footer";

import { FormState } from "@/app/action/action";
import BlogPosts from "@/app/components/homeComponents/BlogPostSection/BlogPosts";
import Blogs from "@/app/components/blogComponents/Blogs";

export type FormProps = {
  state?: FormState;
  postUser: (formData: FormData) => Promise<FormState>;
  children?: React.ReactNode;
};
export default function Home() {
  return (
    <div className="[&>*]:col-[content]">
      <NavBar page="blog" />
      <PageTitle text="Blog"></PageTitle>
      <Blogs></Blogs>
      <Footer />
    </div>
  );
}
