import React from "react";
import Footer from "../sections/Footer";
import Navbar from "./Navigation/Navbar";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
