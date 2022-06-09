import React from "react";
import About from "./About";
import Categories from "./Categories";
import Products from "./Products";
import Reviews from "./Reviews";
import Contact from "./Contact";
import Welcome from "./Welcome";

const Main = () => {
  return (
    <>
      <Welcome />
      <Categories />
      <About />
      <Products />
      <Reviews />
      <Contact />
    </>
  );
};

export default Main;
