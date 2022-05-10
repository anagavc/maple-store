import React from "react";
import hero from "../images/heroimg.jpg";
const Header = () => {
  return (
    <div className="bg-pry-100 py-36 px-24 h-3/5 flex justify-between">
      <div className="flex flex-col justify-between h-5/6 space-y-24">
        <h1 className="font-heading text-6xl text-gold uppercase">
          Luxury Made For You
          <span className="block mt-8">&amp; Inspired by you.</span>
        </h1>
        <p className="text-gold text-sm text-justify leading-loose">
          Jewellery that is designed to set you apart from the crowd, <br />
          durabality and uniqueness is the mantra we live by.
        </p>
        <button className="border w-2/5 border-gold py-4 px-4 uppercase font-body hover:bg-gold hover:text-pry-100 transition duration-300 text-gold">
          shop now
        </button>
      </div>
      <div className="rounded-t-full border border-gold  py-8  px-4  w-96 h-1/5 flex justify-center items-center">
        <img src={hero} alt="Hero" className="rounded-t-full h-2/5 w-4/5" />
      </div>
    </div>
  );
};

export default Header;
