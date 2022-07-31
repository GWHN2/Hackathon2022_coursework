import React from "react";
interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  className?: string;
  layoutClassName?: string;
}
const Button = ({
  children,
  className,
  layoutClassName,
  ...props
}: IButtonProps) => {
  return (
    <div
      className={`px-2 py-2 rounded-lg gradient-background my-5 ${layoutClassName}`}
    >
      <button className={`text-white font-semibold ${className}`} {...props}>
        {children}
      </button>
    </div>
  );
};

export default Button;
