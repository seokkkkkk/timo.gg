interface InputProps {
  type: string;
  placeholder: string;
  width?: number;
}

export const Input = ({ type, placeholder, width }: InputProps) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className="h-[53px] bg-white px-[15px] rounded-[10px] text-[#5c667b] outline-none text-[15px]"
      style={{ width: width }}
    />
  );
};
