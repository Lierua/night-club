"use client";

import { useActionState } from "react";
import { submitComment, type CommentFormState } from "@/app/action/action";
import Button from "@/app/components/utilityComponents/Button";
import InputField from "../../utilityComponents/formUtility/InputField";
import InputBox from "../../utilityComponents/formUtility/InputBox";
import Error from "../../utilityComponents/formUtility/Error";
import Success from "../../utilityComponents/formUtility/Success";
import { useFormStatus } from "react-dom";

const initialState: CommentFormState = {
  success: false,
  data: undefined,
  error: {},
};
const SubmitBtn = () => {
  const { pending } = useFormStatus();

  return <Button text="Submit" type="submit" pending={pending} />;
};
const NewComment = ({ blogpostId }: { blogpostId: number }) => {
  const [state, formAction] = useActionState(submitComment, initialState);
  return (
    <form action={formAction} className="flex flex-col gap-8 pb-[90px]">
      <h1 className="text-[44px] uppercase">Leave a Comment</h1>

      <input type="hidden" name="blogpostId" value={blogpostId} />

      <div className="flex flex-col gap-6">
        <div className="flex gap-6">
          <div className="flex flex-col gap-2 w-full">
            <Error<CommentFormState> state={state} stateType="userName" />
            <InputField<CommentFormState>
              state={state}
              dataInput="userName"
              type="text"
              placeholder="Your Name"
              defaultValue={state?.data?.userName ?? ""}
            />
          </div>
          <div className="flex flex-col gap-2 w-full">
            <Error<CommentFormState> state={state} stateType="userMail" />
            <InputField<CommentFormState>
              state={state}
              dataInput="userMail"
              type="text"
              placeholder="Your Mail"
              defaultValue={state?.data?.userMail ?? ""}
            />
          </div>
        </div>
        <div className="flex flex-col gap-2 w-full">
          <Error<CommentFormState> state={state} stateType="comment" />
          <InputBox<CommentFormState>
            state={state}
            dataInput="comment"
            placeholder="Your Comment"
            defaultValue={state?.data?.comment ?? ""}
          />
        </div>
      </div>

      <div className="flex justify-between">
        <Success<CommentFormState> state={state} text="Comment added!" />
        <div className="ml-auto">
          <SubmitBtn />
        </div>
      </div>
    </form>
  );
};

export default NewComment;
