import React from "react";

interface HeaderProps {
  className?: string;
  children?: React.ReactNode;
}

const Header = ({ className, children }: HeaderProps) => {
  return <header className={className}>{children}</header>;
};

export default Header;