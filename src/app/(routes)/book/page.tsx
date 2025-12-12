import ReserveForm from "@/app/components/bookComponents/ReserveForm";
import Tables from "@/app/components/bookComponents/Tables";
import NavBar from "@/app/components/utilityComponents/Navbar";
import PageTitle from "@/app/components/utilityComponents/PageTitle";
import Footer from "@/app/components/utilityComponents/footerComps/Footer";

export default async function BlogPostSite() {
  return (
    <div className="[&>*]:col-[content]">
      <NavBar page="book" />
      <PageTitle text="Book table" />
      <Tables></Tables>
      <ReserveForm></ReserveForm>
      <Footer />
    </div>
  );
}
