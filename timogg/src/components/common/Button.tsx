import { JSX } from 'react';

export interface ButtonProps {
  label: string;
  type?: 'button' | 'submit' | 'reset' | undefined;
  width?: number;
  height?: number;
}

function Button({
  label,
  type = 'button',
  width = 131,
  height = 56,
}: ButtonProps): JSX.Element {
  return (
    <button
      // eslint-disable-next-line react/button-has-type
      type={type}
      style={{
        width: `${width}px`,
        height: `${height}px`,
      }}
      className="bg-[#46cfa7] rounded-[10px] font-bold mt-8"
    >
      {label}
    </button>
  );
}

Button.defaultProps = {
  type: 'button',
  width: 131,
  height: 56,
};

export default Button;
