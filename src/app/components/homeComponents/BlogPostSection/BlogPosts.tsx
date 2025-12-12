import { Suspense } from "react";
import TitleText from "../../utilityComponents/TitleText";
import Image from "next/image";
import Link from "next/link";

type BlogPost = {
  id: number;
  asset: {
    url: string;
  };
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
type BlogResponse = BlogPost[];

const BlogPosts = async () => {
  return (
    <Suspense>
      <FetchPosts />
    </Suspense>
  );
};

const FetchPosts = async () => {
  "use server";

  const url = "http://localhost:4000/blogposts?limit=3";
  const response = await fetch(url);
  const posts = (await response.json()) as BlogResponse;

  const postsWithComments = await Promise.all(
    posts.map(async (post) => {
      const commentUrl = `http://localhost:4000/blogposts/${post.id}?embed=comments`;
      const commentResponse = await fetch(commentUrl);
      const data = await commentResponse.json();
      const comments = data.comments as CommentResponse;
      return {
        ...post,
        commentCount: comments.length,
      };
    })
  );

  console.log(postsWithComments);

  return (
    <div className="grid items-center py-[90px]">
      <TitleText text="recent blog" />

      <div className="grid grid-cols-3 gap-6">
        {postsWithComments.map((post) => (
          <Link
            href={`/blogPost/${post.id}`}
            key={post.id}
            className="flex flex-col gap-1"
          >
            <Image
              className="hover:scale-105 transition-all ease-in-out duration-300 h-full w-full object-contain bg-(--blue)/60"
              loading="eager"
              src={post.asset.url}
              width={459}
              height={240}
              alt={post.title}
              unoptimized
            />
            <h2 className="uppercase mt-4">{post.title}</h2>
            <div className="flex text-(--red) gap-2">
              <p>BY: {post.author}</p>
              <span>/</span>
              <p>{post.commentCount} Comments</p>
              <span>/</span>
              <p>
                {new Date().toLocaleDateString("en-GB", {
                  day: "numeric",
                  month: "short",
                  year: "numeric",
                })}
              </p>
            </div>
            <p className="leading-8 text-[16px]! w-[95%] mt-4">
              {post.content.slice(0, 150)}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
};
export default BlogPosts;
