import React from "react";
import Header from "./header";
import Footer from "./footer";
import SEO from "./seo";
import { motion } from "framer-motion";
type Props = {
  children?: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <>
      {/* <Header /> */}
      <SEO title="Ecommerce website" />
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        {children}
      </motion.main>
      <Footer />
    </>
  );
};

export default Layout;
