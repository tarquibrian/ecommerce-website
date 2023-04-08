import React from "react";
import Header from "./header";
import Footer from "./footer";
import SEO from "./seo";

type Props = {
  children?: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <>
      {/* <Header /> */}
      <SEO title="Ecommerce website" />
      <main>{children}</main>
      {/* <Footer /> */}
    </>
  );
};

export default Layout;
