import { Suspense } from "react";
import Recents from "./Recents";
import Link from "next/link";

type Blog = {
  id: number;
  titles: string;
  author: string;
  content: string;
  asset: { url: string };
};

const RecentPosts = async () => {
  const url = "http://localhost:4000/blogposts?limit=2";
  const response = await fetch(url);
  const blogs = (await response.json()) as Blog[];

  const truncate = (text: string, maxLength = 60) => (text.length > maxLength ? text.slice(0, maxLength) + "…" : text);

  console.log("recent blogs:", blogs);

  return (
    <Suspense>
      <div className="flex flex-col gap-12">
        <h2>Recent posts</h2>
        {blogs.map((blog) => (
           <Link
            href={`/blogPost/${blog.id}`}
            key={blog.id}
            className="flex flex-col gap-1"
          >
          <Recents desc={truncate(blog.content)} image={blog.asset.url} />
          </Link>
        ))}
      </div>
    </Suspense>
  );
};

export default RecentPosts;
