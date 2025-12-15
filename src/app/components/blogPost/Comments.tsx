import { Suspense } from "react";

type Commentdata = {
  id: number;
  blogpostid: number;
  name: string;
  content: string;
  date: string;
};

type CommentResponse = Commentdata[];

type CommentsProps = {
  id: number;
};

const Comments = ({ id }: CommentsProps) => {
  return (
    <Suspense fallback={<div>Loading comments...</div>}>
      <FetchComments id={id} />
    </Suspense>
  );
};

const FetchComments = async ({ id }: { id: number }) => {
  "use server";

  const url = `http://localhost:4000/blogposts/${id}?embed=comments`;
  const response = await fetch(url);
  const data = await response.json();
  const comments = data.comments as CommentResponse; // <-- make sure this is an array

  console.log(comments);

  return (
    <div className="grid items-center gap-12 pb-[90px]">
      <h1 className="uppercase px-[1.5rem] sm:px-0">
        {comments.length} Comments
      </h1>

      {comments.map((comment) => (
        <div key={comment.id} className="flex flex-col gap-6 ">
          <div className="flex sm:flex-row flex-col gap-2 sm:items-center px-[1.5rem] sm:px-0">
            <h2>{comment.name} -</h2>
            <p className="text-(--red)">
              Posted{" "}
              {new Date(comment.date).toLocaleDateString("en-GB", {
                day: "numeric",
                month: "short",
                year: "numeric",
              })}
            </p>
          </div>
          <p className="px-[1.5rem] sm:px-0">{comment.content}</p>
        </div>
      ))}
    </div>
  );
};

export default Comments;
