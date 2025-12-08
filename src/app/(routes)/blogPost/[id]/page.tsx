import NavBar from "@/app/components/utilityComponents/Navbar";
import PageTitle from "@/app/components/utilityComponents/PageTitle";
import Footer from "@/app/components/utilityComponents/footerComps/Footer";
import { Suspense } from "react";
import BlogPostContent from "@/app/components/blogPost/BlogPostContent";
import Comments from "@/app/components/blogPost/Comments";
import NewComment from "@/app/components/blogPost/NewComment/NewComment";

type BlogPost = {
  id: number;
  asset: { url: string };
  title: string;
  content: string;
  author: string;
};

type Commentdata = {
  id: number;
  blogpostid: number;
  name: string;
  content: string;
  date: string;
};

type CommentResponse = Commentdata[];

export default async function BlogPostSite({
  params,
}: {
  params: { id: number };
}) {
  const { id } = await params;
  console.log("id = ", id);

  const url = `http://localhost:4000/blogposts/${id}`;
  const response = await fetch(url);
  const post = (await response.json()) as BlogPost;

  const commentUrl = `http://localhost:4000/blogposts/${id}?embed=comments`;
  const commentResponse = await fetch(commentUrl);
  const data = await commentResponse.json();
  const comments = data.comments as CommentResponse;

  const postWithComments = {
    ...post,
    commentCount: comments.length,
  };

  return (
    <Suspense fallback={<div>Loading blog post...</div>}>
      <div className="[&>*]:col-[content]">
        <NavBar page="blog" />
        <PageTitle text="blog post" />
        <BlogPostContent post={postWithComments} />
        <Comments id={id} />
        <NewComment blogpostId={id} />
        <Footer />
      </div>
    </Suspense>
  );
}
