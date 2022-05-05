import React from "react";

const PrimaryButton = ({ title }) => {
  return (
    <button className="bg-pry-100  flex justify-center w-full text-gold border-t border-y-gold font-heading py-4 px-8  hover:bg-gold hover:text-pry-100 font-medium transition duration-300">
      {title}
    </button>
  );
};

export default PrimaryButton;
