import React from "react";
import { NavLink, Link } from "react-router-dom";
export const PrimaryButton = ({ children, onClick, path }) => {
  return (
    <>
      {path ? (
        <NavLink
          to={{ pathname: path }}
          className="bg-pry-100 w-full  py-2 flex justify-center px-4 text-gold text-base hover:bg-gold hover:text-pry-100 transition duration-300"
        >
          {children}
        </NavLink>
      ) : (
        <button
          onClick={onClick}
          className="bg-pry-100 w-full  py-2 px-4 text-gold text-base hover:bg-gold hover:text-pry-100 transition duration-300"
        >
          {children}
        </button>
      )}
    </>
  );
};
export const SecondaryButton = ({ children, onClick, path }) => {
  return (
    <>
      {path ? (
        <NavLink
          to={{ pathname: path }}
          className="border border-pry-100 text-pry-100 w-full  py-2 px-4 flex justify-center text-base hover:bg-pry-100 hover:text-gold transition duration-300"
        >
          {children}
        </NavLink>
      ) : (
        <button
          onClick={onClick}
          className="border border-pry-100 text-pry-100 w-full  py-2 px-4  text-base hover:bg-pry-100 hover:text-gold transition duration-300"
        >
          {children}
        </button>
      )}
    </>
  );
};

export const SwitchButton = ({ textStyle, children }) => {
  return (
    <button
      className={`outline-none border-0 font-semibold text-sm ${textStyle}`}
    >
      {children}
    </button>
  );
};

export const NavigationButton = ({ children, path }) => {
  return (
    <Link
      to={{ pathname: path }}
      className=" text-grey-500 border-0 hover:text-blue-500 font-semibold text-sm transition duration-300 "
    >
      {children}
    </Link>
  );
};
