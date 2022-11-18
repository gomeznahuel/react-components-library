import React from "react";

interface IButtonProps {
  label: string;
  type?: "button" | "submit" | "reset";
  className?: string;
  onClick?: () => void;
  onKeyPress?: (event: React.KeyboardEvent<HTMLButtonElement>) => void;
}

const Button = ({ label, type, className, onClick, onKeyPress }: IButtonProps) => {
  return (
    <button className={className} onClick={onClick} type={type} onKeyPress={onKeyPress}>
      {label}
    </button>
  );
};

export default Button;
