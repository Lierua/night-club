import ReserveForm from "@/app/components/bookComponents/ReserveForm";
import Tables from "@/app/components/bookComponents/Tables";
import NavBar from "@/app/components/utilityComponents/Navbar";
import PageTitle from "@/app/components/utilityComponents/PageTitle";
import Footer from "@/app/components/utilityComponents/footerComps/Footer";
import { useState } from "react";

export type Prop = {
  Date: string;
};

export default async function BlogPostSite({ Date }Date: string) {
  const url = `http://localhost:4000/reservations?date=2025-03-15T20:00:00.000Z`;
  const response = await fetch(url);
  const reservations = await response.json();
  console.log(reservations);

  const [Date, setDate] = useState({});
  return (
    <div className="[&>*]:col-[content]">
      <NavBar page="book" />
      <PageTitle text="Book table" />
      <Tables Date={Date}></Tables>
      <ReserveForm Date={Date} setDate={setDate}></ReserveForm>
      <Footer />
    </div>
  );
}
