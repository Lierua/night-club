import NavBar from "@/app/components/utilityComponents/Navbar";
import PageTitle from "@/app/components/utilityComponents/PageTitle";
import Footer from "@/app/components/utilityComponents/footerComps/Footer";

import { FormState } from "@/app/action/action";
import Blogs from "@/app/components/blogComponents/Blogs";

export type FormProps = {
  state?: FormState;
  postUser: (formData: FormData) => Promise<FormState>;
  children?: React.ReactNode;
};

interface BlogProps {
  searchParams: { [key: string]: string | undefined };
}

export default function Blog({ searchParams }: BlogProps) {
  return (
    <div className="[&>*]:col-[content]">
      <NavBar page="blog" />
      <PageTitle text="Blog"></PageTitle>
      <Blogs searchParams={searchParams}></Blogs>
      <Footer />
    </div>
  );
}
