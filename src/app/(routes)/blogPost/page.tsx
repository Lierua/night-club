import NavBar from "@/app/components/utilityComponents/Navbar";
import PageTitle from "@/app/components/utilityComponents/PageTitle";
import Footer from "@/app/components/utilityComponents/footerComps/Footer";
import { Suspense } from "react";

import Blogs from "@/app/components/blogComponents/Blogs";

async function BlogsPage({ page }: { page: number }) {
  return (
    <div className="[&>*]:col-[content]">
      <NavBar page="blog" />
      <PageTitle text="Blog" />

      <Suspense>
        <Blogs page={page} />
      </Suspense>

      <Footer />
    </div>
  );
}

export default async function ProductListContainer({
  searchParams,
}: {
  searchParams: { page: number };
}) {
  const { page } = await searchParams;
  console.log(page);
  return <BlogsPage page={page} />;
}
