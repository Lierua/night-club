type ErrorState = {
  error?: Record<string, string[]>;
};

type InputProps<T extends ErrorState> = {
  dataInput: string;
  placeholder?: string;
  defaultValue?: string | number;
  state?: T;
};

const InputField = <T extends ErrorState>({
  state,
  dataInput,
  placeholder,
  defaultValue,
}: InputProps<T>) => {
  const hasError = state?.error?.[dataInput];

  return (
    <textarea
      className={`border-2 p-6 pl-5 w-full h-[366px] transition-all ${
        hasError ? "border-(--red)" : "border-(--white)"
      }`}
      name={dataInput}
      placeholder={placeholder}
      defaultValue={defaultValue ?? ""}
    />
  );
};

export default InputField;
