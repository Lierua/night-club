"use client";

import { useActionState } from "react";
import { submitContact, type ContactFormState } from "@/app/action/action";
import Button from "@/app/components/utilityComponents/Button";
import InputField from "@/app/components/utilityComponents/formUtility/InputField";
import InputBox from "@/app/components//utilityComponents/formUtility/InputBox";
import Error from "@/app/components//utilityComponents/formUtility/Error";
import Success from "@/app/components//utilityComponents/formUtility/Success";
import { useFormStatus } from "react-dom";

const initialState: ContactFormState = {
  success: false,
  data: undefined,
  error: {},
};

const SubmitContactBtn = () => {
  const { pending } = useFormStatus();

  return <Button text="Submit" type="submit" pending={pending} />;
};

const ContactMessage = () => {
  const [state, formAction] = useActionState(submitContact, initialState);

  return (
    <form
      action={formAction}
      className="grid grid-cols-[1fr_minmax(0,704px)_1fr] gap-8 py-[90px] [&>*]:col-[2/3] "
    >
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-2 w-full">
          <Error<ContactFormState> state={state} stateType="userName" />
          <InputField<ContactFormState>
            state={state}
            dataInput="userName"
            type="text"
            placeholder="Your Name"
            defaultValue={state?.data?.userName ?? ""}
          />
        </div>
        <div className="flex flex-col gap-2 w-full">
          <Error<ContactFormState> state={state} stateType="userMail" />
          <InputField<ContactFormState>
            state={state}
            dataInput="userMail"
            type="text"
            placeholder="Your Mail"
            defaultValue={state?.data?.userMail ?? ""}
          />
        </div>
        <div className="flex flex-col gap-2 w-full">
          <Error<ContactFormState> state={state} stateType="comment" />
          <InputBox<ContactFormState>
            state={state}
            dataInput="comment"
            placeholder="Your Comment"
            defaultValue={state?.data?.comment ?? ""}
          />
        </div>
      </div>

      <div className="flex justify-between">
        <Success<ContactFormState> state={state} text="Comment added!" />
        <div className="ml-auto">
          <SubmitContactBtn />
        </div>
      </div>
    </form>
  );
};

export default ContactMessage;
