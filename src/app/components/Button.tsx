type Variant = "submit" | "button";

export interface ButtonProps {
  text: string;
  type: Variant;
}

const Button = ({ text, type }: ButtonProps) => {
  return (
    <button
      type={type}
      className="hover:border-b-(--red) hover:border-t-(--red) hover:text-(--red) hover:text-[19px]! transition-all duration-200 ease
      border-t-3 border-b-3 border-b-(--white) border-t-(--white) h-[61px] w-[180px] items-center text-center uppercase"
    >
      {text}
    </button>
  );
};

export default Button;
