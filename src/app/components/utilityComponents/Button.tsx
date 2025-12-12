type Variant = "submit" | "button";

export interface ButtonProps {
  text: string;
  type: Variant;
  pending?: boolean;
}

const Button = ({ text, type, pending = false }: ButtonProps) => {
  return (
    <button
      type={type}
      disabled={pending}
      className={`hover:border-b-(--red) hover:border-t-(--red) hover:text-(--red) hover:text-[19px]! transition-all 
      duration-200 ease border-t-2 border-b-2 border-b-(--white) border-t-(--white) h-[60px] w-[180px] 
      items-center text-center uppercase ${
        pending ? "opacity-50 cursor-not-allowed" : ""
      }`}
    >
      {pending ? "Sending..." : text}
    </button>
  );
};

export default Button;
