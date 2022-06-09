import React from "react";
import { NavLink } from "react-router-dom";

const PrimaryButton = ({ title, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="bg-pry-100  text-lg flex justify-center items-center space-x-3 w-full text-gold border border-gold font-heading py-4 px-8  hover:bg-gold hover:text-pry-100 font-medium transition duration-300"
    >
      {title}
    </button>
  );
};

export const SubmitButton = ({ title }) => {
  return (
    <button className="  flex justify-center w-full py-3  md:mx-auto text-gold  text-base bg-pry-100 font-heading p-2  hover:bg-pry-100 hover:text-gold hover:-translate-y-2  border-gold border  font-medium transition duration-300">
      {title}
    </button>
  );
};
export const HeaderButton = ({ buttonStyle }) => {
  return (
    <NavLink
      to="/shop"
      className={`${buttonStyle} border justify-center mt-6  border-gold py-4 px-4 uppercase font-body hover:bg-gold hover:text-pry-100 transition duration-300 text-gold`}
    >
      shop now
    </NavLink>
  );
};
export const CartButton = ({ click, children }) => {
  return (
    <button
      onClick={click}
      className="border border-pry-100 w-8 h-8 py-2 px-4 flex justify-center items-center hover:bg-pry-100  text-pry-100 transition duration-300 hover:text-gold"
    >
      {children}
    </button>
  );
};
export default PrimaryButton;
