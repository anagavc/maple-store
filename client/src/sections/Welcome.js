import React from "react";
import { NavLink } from "react-router-dom";
import {
  FadeUpAnimation,
  FadeDownAnimation,
} from "../components/UI/Animations/Animations";
import {
  HeadingFour,
  HeadingTwo,
} from "../components/UI/FontStyles/FontStyles";
import welcomeimg2 from "../images/heroimg.jpg";
import welcomeimg3 from "../images/welcomeImg3.jpg";
const Welcome = () => {
  return (
    <div className="bg-pry-50 px-8 md:px-24 py-16 md:py-48 flex flex-col md:flex-row justify-around  h-3/5 w-full  ">
      <div className="flex justify-center items-center  w-full md:w-auto">
        <FadeUpAnimation className="border border-pry-100 px-2 py-2">
          <img
            src={welcomeimg3}
            className="md:w-64 md:h-64 w-64 h-64"
            alt="welcome 1"
          />
        </FadeUpAnimation>
        <FadeUpAnimation className="-ml-40 -mb-48 border border-pry-100 px-2 py-2">
          <img
            src={welcomeimg2}
            className="md:w-64 md:h-64 w-64 h-64"
            alt="welcome 2"
          />
        </FadeUpAnimation>
      </div>
      <FadeUpAnimation className="flex flex-col justify-between z-20 mt-36 md:mt-0 space-y-8 w-full md:w-2/5">
        <HeadingFour
          title="Welcome to Maple stores"
          textColor="text-pry-100 text-center md:text-justify"
          color="pry-100"
        />
        <HeadingTwo
          title="Bespoke Collections"
          color="text-pry-100"
          size="text-5xl"
        />
        <p className="font-body text-pry-100 text-base text-justify text-wrap">
          We offer you jewelleries that are made with the rarest precious stones
          obtainable on earth, every piece is custom made with your exact
          specification, our goal is to make you choose us as your number one
          online shopping destination with the premium services that we offer.
        </p>
        <NavLink
          to="products/allProducts"
          className="bg-pry-100 text-gold text-center font-body py-4 px-8 uppercase hover:bg-gold hover:text-pry-100 font-medium transition duration-300"
        >
          Explore
        </NavLink>
      </FadeUpAnimation>
    </div>
  );
};

export default Welcome;
