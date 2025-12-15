"use client";

import { useActionState } from "react";
import { submitMail, type FormState } from "@/app/action/action";
import SubscriptionInput from "./SubscriptionInput";
import Button from "../../utilityComponents/Button";
import Error from "../../utilityComponents/formUtility/Error";
import Success from "../../utilityComponents/formUtility/Success";
import { useFormStatus } from "react-dom";

const initialState: FormState = {
  success: false,
  data: undefined,
  error: {},
};

const SubmitBtn = () => {
  const { pending } = useFormStatus();

  return <Button text="Submit" type="submit" pending={pending} />;
};

const Subscription = () => {
  const [state, formAction] = useActionState(submitMail, initialState);

  return (
    <div className="w-full justify-center px-[2rem] text-center flex flex-col gap-4">
      <form
        action={formAction}
        className="flex flex-col sm:flex-row gap-8 justify-center"
      >
        <SubscriptionInput
          state={state}
          dataInput="subscriptionMail"
          type="text"
          placeholder="Enter Your Mail"
          defaultValue={state?.data?.subscriptionMail ?? ""}
        />
        <div className="mx-auto sm:mx-0">
          <SubmitBtn />
        </div>
      </form>

      <Error<FormState> state={state} stateType="subscriptionMail" />
      <Success<FormState>
        state={state}
        text="You have succussfully signed up for our newsletter"
      ></Success>
    </div>
  );
};

export default Subscription;
