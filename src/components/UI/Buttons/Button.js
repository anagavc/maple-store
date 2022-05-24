import React from "react";

const Button = ({ children }) => {
  return (
    <button className="bg-gold text-pry-100 py-2 px-8 text-lg  md:ml-8 hover:bg-pry-50 hover:text-pry-100 duration-500">
      {children}
    </button>
  );
};

export default Button;
