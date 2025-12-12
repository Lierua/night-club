import NavBar from "@/app/components/utilityComponents/Navbar";
import PageTitle from "@/app/components/utilityComponents/PageTitle";
import Footer from "@/app/components/utilityComponents/footerComps/Footer";
import ContactMessage from "@/app/components/contactComponents/ContactMessage";

export default async function BlogPostSite() {
  return (
    <div className="[&>*]:col-[content]">
      <NavBar page="contact" />
      <PageTitle text="Contact Us" />
      <ContactMessage></ContactMessage>
      <Footer />
    </div>
  );
}
