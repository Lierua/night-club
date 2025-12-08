"use client";

import { useActionState } from "react";
import { submitMail, type FormState } from "@/app/action/action";
import SubscriptionInput from "./SubscriptionInput";
import Button from "../../utilityComponents/Button";
import Error from "../../utilityComponents/formUtility/Error";
import Success from "../../utilityComponents/formUtility/Success";

const initialState: FormState = {
  success: false,
  data: undefined,
  error: {},
};

const Subscription = () => {
  const [state, formAction] = useActionState(submitMail, initialState);

  return (
    <div className="w-full justify-center px-[2rem] text-center flex flex-col gap-4">
      <form action={formAction} className="flex gap-8 justify-center">
        <SubscriptionInput
          state={state}
          dataInput="subscriptionMail"
          type="text"
          placeholder="Enter Your Mail"
          defaultValue={state?.data?.subscriptionMail ?? ""}
        />

        <Button text="Subscribe" type="submit" />
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
