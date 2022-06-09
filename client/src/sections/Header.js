import React from "react";
import { HeaderButton } from "../components/UI/Buttons/PrimaryButton";
import hero from "../images/welcomeImg2.jpg";
const Header = () => {
  return (
    <>
      <div className="bg-pry-100 md:py-36 py-24 px-8 md:px-24 h-4/5 items-center flex  flex-col md:flex-row justify-between">
        <div className="flex flex-col justify-between h-5/6 space-y-8 ">
          <h1 className="font-heading text-6xl text-gold uppercase hidden md:block">
            Luxury Made For You
            <span className="block mt-8">&amp; Inspired by you.</span>
          </h1>
          <p className="text-gold text-sm text-justify leading-loose hidden md:block">
            Jewellery that is designed to set you apart from the crowd, <br />
            durabality and uniqueness is the mantra we live by.
          </p>
          <h1 className="font-heading text-4xl text-center md:hidden md:text-justify md:text-6xl text-gold uppercase">
            Luxury Made For You
            <span className="block mt-8 lg:hidden">&amp;</span>
            <span className="block mt-8"> Inspired by you.</span>
          </h1>
          <p className="text-gold md:text-sm text-center md:hidden block text-xs md:text-justify leading-loose">
            Jewellery that is designed to set you apart from the crowd,
            durabality and uniqueness is the mantra we live by.
          </p>
          <HeaderButton buttonStyle="hidden md:flex w-2/5" />
        </div>
        <div className="rounded-t-full border border-gold  py-8 mt-6 md:mt-0 px-2 md:px-4  w-64 md:w-96 h-3/5 flex justify-center items-center">
          <img src={hero} alt="Hero" className="rounded-t-full h-2/5 w-4/5" />
        </div>
        <HeaderButton buttonStyle="mt-6 md:hidden flex w-full " />
      </div>
    </>
  );
};

export default Header;
