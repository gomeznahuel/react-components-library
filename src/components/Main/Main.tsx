import React from "react";

interface IMainProps {
  className?: string;
  children?: React.ReactNode;
}

const Main = ({ className, children }: IMainProps) => {
  return <main className={className}>{children}</main>;
};

export default Main;