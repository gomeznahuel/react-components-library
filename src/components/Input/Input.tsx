import React from "react";

interface InputProps {
  type: string;
  label?: string;
  value?: string;
  placeholder?: string;
  name?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input = (props: InputProps) => {
  return (
    <>
      <label>{props.label}</label>
      <input value={props.value} onChange={(e) => props.onChange(e)} placeholder={props.placeholder} name={props.name} />
    </>
  );
};

export default Input;
