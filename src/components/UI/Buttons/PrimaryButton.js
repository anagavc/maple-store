import React from "react";
import { NavLink } from "react-router-dom";

const PrimaryButton = ({ title }) => {
  return (
    <button className="bg-pry-100  text-lg flex justify-center items-center space-x-3 w-full text-gold border border-gold font-heading py-4 px-8  hover:bg-gold hover:text-pry-100 font-medium transition duration-300">
      {title}
    </button>
  );
};

export const SubmitButton = ({ title }) => {
  return (
    <button className="bg-pry-100  flex justify-center w-full md:w-4/5 md:mx-auto text-gold border border-gold font-heading py-4 px-8  hover:bg-gold hover:text-pry-100 font-medium transition duration-300">
      {title}
    </button>
  );
};
export const HeaderButton = ({ style }) => {
  return (
    <NavLink
      to="/shop"
      className={`${style} border justify-center mt-6  border-gold py-4 px-4 uppercase font-body hover:bg-gold hover:text-pry-100 transition duration-300 text-gold`}
    >
      shop now
    </NavLink>
  );
};
export default PrimaryButton;
