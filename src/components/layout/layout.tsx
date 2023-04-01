import { Props } from "next/script";
import React from "react";

const Layout = ({ children }: Props) => {
  return <div>{children}</div>;
};

export default Layout;
