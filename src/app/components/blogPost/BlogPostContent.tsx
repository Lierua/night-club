import Image from "next/image";

type BlogPostProps = {
  post: {
    id: number;
    asset?: { url?: string };
    title: string;
    content: string;
    author: string;
    commentCount: number;
  };
};

const BlogPostContent = ({ post }: BlogPostProps) => {
  return (
    <div className="grid gap-2 max-w-[1440px] mx-auto sm:py-[90px] py-[30px]">
      <Image
        className="sm:h-[608px] w-full object-cover"
        loading="eager"
        src={post.asset?.url ?? "/placeholder.png"}
        width={1440}
        height={608}
        alt="{post.title}"
        unoptimized
      />
      <h2 className="uppercase mt-8 px-[1.5rem] sm:px-0">{post.title}</h2>
      <div className="flex text-(--red) gap-2 items-center p-scale px-[1.5rem] sm:px-0">
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
      <p className="leading-8  mt-4 px-[1.5rem] sm:px-0">{post.content}</p>
    </div>
  );
};

export default BlogPostContent;
