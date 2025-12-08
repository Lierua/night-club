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
  function breakText(text: string | undefined, n: number) {
    if (!text) return [];
    const regex = new RegExp(`(.{1,${n}})(\\s|$)`, "g");
    return text.match(regex)?.map((line) => line.trim()) || [text];
  }
  const lines = breakText(post.content, 2000);
  return (
    <div className="grid gap-2 max-w-[1440px] mx-auto py-[90px]">
      <Image
        className="h-[608px] w-full object-cover"
        loading="eager"
        src={post.asset?.url ?? "/placeholder.png"}
        width={1440}
        height={608}
        alt="{post.title}"
        unoptimized
      />
      <h2 className="uppercase mt-8">{post.title}</h2>
      <div className="flex text-(--red) gap-2 items-center">
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
      {lines.map((line, idx) => (
        <p key={idx} className="leading-8 text-[16px] mt-4">
          {line}
        </p>
      ))}
    </div>
  );
};

export default BlogPostContent;
