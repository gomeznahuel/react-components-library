import React from "react";

interface ILabelProps {
  label: string;
}

const Label = ({ label }: ILabelProps) => {
  return <label>{label}</label>;
};

export default Label;
