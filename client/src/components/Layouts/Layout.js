import React from "react";
import Footer from "../../sections/Footer";
import NavBar from "../Navigation/NavBar";

const Layout = ({ children }) => {
  return (
    <>
      <NavBar />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
