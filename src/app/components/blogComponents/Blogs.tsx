import { Suspense } from "react";
import Image from "next/image";
import Link from "next/link";
import Button from "../utilityComponents/Button";
import { PaginationWithLinks } from "@/app/components/ui/pagination-with-links";

type BlogPost = {
  id: number;
  asset: {
    url: string;
  };
  title: string;
  content: string;
  author: string;
  searchParams: { [key: string]: string | undefined };
};

type Commentdata = {
  id: number;
  blogpostid: number;
  name: string;
  content: string;
  date: string;
};

interface BlogProps {
  searchParams: { [key: string]: string | string[] | undefined };
}

type CommentResponse = Commentdata[];
type BlogResponse = BlogPost[];

const Blogs = async ({ searchParams }: BlogProps) => {
  return (
    <Suspense>
      <FetchPosts searchParams={searchParams} />
    </Suspense>
  );
};

const FetchPosts = async ({ searchParams }: BlogProps) => {
  "use server";

  const url = "http://localhost:4000/blogposts";
  const response = await fetch(url);
  const posts = (await response.json()) as BlogPost[];

  const currentPage = parseInt(searchParams.page ?? "1", 10);
  const pageSize = 3;

  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;

  const postsWithComments = await Promise.all(
    posts.slice(startIndex, endIndex).map(async (post) => {
      const commentUrl = `http://localhost:4000/blogposts/${post.id}?embed=comments`;
      const commentResponse = await fetch(commentUrl);
      const data = await commentResponse.json();
      const comments = data.comments as Commentdata[];
      return {
        ...post,
        commentCount: comments.length,
      };
    })
  );

  const totalCount = posts.length;

  return (
    <div className="grid items-center py-[90px] full-bleed">
      {postsWithComments.map((post) => (
        <div
          key={post.id}
          className="grid min-h-[530px] grid-cols-[1fr_minmax(0,_720px)_minmax(0,_720px)_1fr] bg-black"
        >
          <div
            className={`h-full w-full overflow-hidden ${
              post.id % 2 !== 0 ? "col-[1/3]" : "col-[3/5] row-[1]"
            } `}
          >
            <Image
              className="h-full w-full object-cover bg-(--blue)/60"
              loading="eager"
              src={post.asset.url}
              width={1000}
              height={530}
              alt={post.title}
              unoptimized
            />
          </div>

          <div
            className={`py-10 flex flex-col gap-2 ${
              post.id % 2 !== 0 ? " pl-10" : " pr-10 col-[2/3] row-[1]"
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
            <p className="leading-8 text-[16px]! w-[95%] mt-4 mb-4">
              {post.content.slice(0, 700)}
            </p>
            <Link
              href={`/blogPost/${post.id}`}
              className="flex flex-col gap-1 w-fit ml-auto mt-auto mb-8"
            >
              <Button text="Read More" type="button" />
            </Link>
          </div>
        </div>
      ))}

      {/* Pagination */}
      <div className="mt-8">
        <PaginationWithLinks
          page={currentPage}
          pageSize={pageSize}
          totalCount={totalCount}
          pageSearchParam="page"
        />
      </div>
    </div>
  );
};

export default Blogs;
