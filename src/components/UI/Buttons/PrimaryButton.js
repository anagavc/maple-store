import React from "react";

const PrimaryButton = ({ title }) => {
  return (
    <button className="bg-pry-100  flex justify-center w-full text-gold border border-gold font-heading py-4 px-8  hover:bg-gold hover:text-pry-100 font-medium transition duration-300">
      {title}
    </button>
  );
};

export const SubmitButton = ({ title }) => {
  return (
    <button className="bg-pry-100  flex justify-center w-4/5 mx-auto text-gold border border-gold font-heading py-4 px-8  hover:bg-gold hover:text-pry-100 font-medium transition duration-300">
      {title}
    </button>
  );
};
export default PrimaryButton;