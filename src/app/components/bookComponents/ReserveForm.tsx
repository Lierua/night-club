"use client";

import { useActionState } from "react";
import { submitReserve, type ReserveFormState } from "@/app/action/action";
import InputField from "../utilityComponents/formUtility/InputField";
import InputBox from "../utilityComponents/formUtility/InputBox";
import Button from "../utilityComponents/Button";
import Success from "../utilityComponents/formUtility/Success";
import Error from "../utilityComponents/formUtility/Error";
import { useFormStatus } from "react-dom";
import { Prop } from "@/app/(routes)/book/page";

const initialState: ReserveFormState = {
  success: false,
  data: undefined,
  error: {},
};
const SubmitReserveBtn = () => {
  const { pending } = useFormStatus();

  return <Button text="Submit" type="submit" pending={pending} />;
};

const ReserveForm = ({ Date, setDate }) => {
  const [state, formAction] = useActionState(submitReserve, initialState);

  return (
    <form action={formAction} className="flex flex-col gap-6 mb-[90px]">
      <h1 className="uppercase text-(44px) mb-6">Book a table</h1>
      <div className="flex flex-col gap-6">
        <div className="flex gap-6">
          <div className="flex flex-col gap-2 w-full">
            <Error<ReserveFormState> state={state} stateType="userName" />
            <InputField<ReserveFormState>
              state={state}
              dataInput="userName"
              type="text"
              placeholder="Your Name"
              defaultValue={state?.data?.userName ?? ""}
            />
          </div>
          <div className="flex flex-col gap-2 w-full">
            <Error<ReserveFormState> state={state} stateType="userMail" />
            <InputField<ReserveFormState>
              state={state}
              dataInput="userMail"
              type="text"
              placeholder="Your Email"
              defaultValue={state?.data?.userMail ?? ""}
            />
          </div>
        </div>
        <div className="flex gap-6">
          <div className="flex flex-col gap-2 w-full">
            <Error<ReserveFormState> state={state} stateType="userTable" />
            <InputField<ReserveFormState>
              state={state}
              dataInput="userTable"
              type="text"
              placeholder="Table Number"
              defaultValue={state?.data?.userTable ?? ""}
            />
          </div>
          <div className="flex flex-col gap-2 w-full">
            <Error<ReserveFormState> state={state} stateType="guestNumber" />
            <InputField<ReserveFormState>
              state={state}
              dataInput="guestNumber"
              type="text"
              placeholder="Number of Guests"
              defaultValue={state?.data?.guestNumber ?? ""}
            />
          </div>
        </div>
        <div className="flex gap-6">
          <div
            onClick={() => setDate(dataInput)}
            className="flex flex-col gap-2 w-full"
          >
            <Error<ReserveFormState> state={state} stateType="userDate" />
            <InputField<ReserveFormState>
              state={state}
              dataInput="userDate"
              type="date"
              placeholder="Select Date"
              defaultValue={state?.data?.userDate ?? ""}
            />
          </div>
          <div className="flex flex-col gap-2 w-full">
            <Error<ReserveFormState> state={state} stateType="userContact" />
            <InputField<ReserveFormState>
              state={state}
              dataInput="userContact"
              type="text"
              placeholder="Your Contact Number"
              defaultValue={state?.data?.userContact ?? ""}
            />
          </div>
        </div>
        <div className="flex flex-col gap-2 w-full">
          <Error<ReserveFormState> state={state} stateType="comment" />
          <InputBox<ReserveFormState>
            state={state}
            dataInput="comment"
            placeholder="Your Comment"
            defaultValue={state?.data?.comment ?? ""}
            Optional={true}
          />
        </div>
      </div>

      <div className="flex justify-between">
        <Success<ReserveFormState>
          state={state}
          text="Your Reservation is set up."
        />
        <div className="ml-auto">
          <SubmitReserveBtn />
        </div>
      </div>
    </form>
  );
};

export default ReserveForm;
