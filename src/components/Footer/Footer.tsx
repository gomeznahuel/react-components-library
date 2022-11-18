import React, { Children } from "react";

interface IFooterProps {
  className?: string;
  children?: React.ReactNode;
}

const Footer = ({ children, className }: IFooterProps) => {
  return <footer className={className}>{children}</footer>;
};

export default Footer;
