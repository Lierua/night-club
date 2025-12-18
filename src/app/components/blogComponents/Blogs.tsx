import Image from "next/image";
import Link from "next/link";
import Button from "../utilityComponents/Button"; // Blogs.tsx

import { Suspense } from "react";
import Pagination from "./Pagination";

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
type BlogResponse = BlogPost[];

const Blogs = async ({ page }: { page: number }) => {
  return (
    <Suspense>
      <FetchPosts page={page} />
    </Suspense>
  );
};

const FetchPosts = async ({
  page,
  limit = 3,
}: {
  page: number;
  limit?: number;
}) => {
  "use server";

  const url = `http://localhost:4000/blogposts?page=${page}&limit=${limit}&sort=id&order=desc`;
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

  return (
    <div className="grid items-center sm:py-[90px] py-[30px] full-bleed">
      {postsWithComments.map((post) => (
        <div
          key={post.id}
          className="sm:grid min-h-[530px] sm:grid-cols-[1fr_minmax(0,_720px)_minmax(0,_720px)_1fr] bg-black"
        >
          <div
            className={`h-full w-full overflow-hidden ${
              post.id % 2 !== 0 ? "col-[1/3]" : "col-[3/5] row-[1]"
            }`}
          >
            <Image
              className="h-full w-full object-cover"
              loading="eager"
              src={post.asset.url}
              width={1000}
              height={530}
              alt={post.title}
              unoptimized
            />
          </div>

          <div
            className={`px-4 py-10 flex flex-col gap-2 ${
              post.id % 2 !== 0 ? " sm:pl-10" : " sm:pr-10 col-[2/3] row-[1]"
            }`}
          >
            <h2 className="uppercase">{post.title}</h2>

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

            <p className="leading-8 w-[95%] mt-4 mb-4">
              {post.content.slice(0, 700)}
            </p>

            <Link
              href={`/blogPost/${post.id}`}
              className="flex flex-col gap-1 w-fit mt-auto mb-8 mx-auto sm:ml-auto sm:mx-0"
            >
              <Button text="Read More" type="button" />
            </Link>
          </div>
        </div>
      ))}

      <div className="mt-8 mx-auto">
        <Pagination page={page} />
      </div>
    </div>
  );
};

export default Blogs;
