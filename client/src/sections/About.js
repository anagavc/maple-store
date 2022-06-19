import React from "react";
import { NavLink } from "react-router-dom";

import {
  HeadingFour,
  HeadingTwo,
} from "../components/UI/FontStyles/FontStyles";
import aboutImage from "../images/about.jpg";
const About = () => {
  return (
    <div className="bg-gold  flex flex-col md:flex-row justify-between items-center w-full ">
      <div className="flex flex-col bg-pry-100 py-32 px-8 md:px-24 space-y-8 w-full md:w-3/5">
        <HeadingFour title="About" color="gold" textColor="text-gold" />
        <HeadingTwo
          title="About Maple Stores"
          color="text-gold"
          size="text-5xl"
        />
        <p className="font-heading text-gold text-base text-justify leading-loose hidden md:block">
          We offer you jewelleries that are made with the rarest precious stones
          obtainable on earth, every piece is custom made with your exact
          specification. We offer you jewelleries that are made with the rarest
          precious stones obtainable on earth, every piece is custom made with
          your exact specification. We offer you jewelleries that are made with
          the rarest precious stones obtainable on earth, every piece is custom
          made with your exact specification. your exact specification. We offer
          you jewelleries that are made with the rarest precious stones
          obtainable on earth, every piece is custom made with your exact
          specification. your exact specification. We offer you jewelleries that
          are made with the rarest precious stones obtainable on earth, every
          piece is custom made with your exact specification.
        </p>
        <p className="font-heading text-gold text-base text-justify leading-loose md:hidden block">
          We offer you jewelleries that are made with the rarest precious stones
          obtainable on earth, every piece is custom made with your exact
          specification. We offer you jewelleries that are made with the rarest
          precious stones obtainable on earth, every piece is custom made with
          your exact specification.
        </p>
        <NavLink
          to="/categories"
          className="bg-pry-100  flex justify-center w-full text-gold border-t border-t-gold font-heading py-4 px-8  hover:bg-gold hover:text-pry-100 font-medium transition duration-300"
        >
          EXPLORE OUR COLLECTIONS
        </NavLink>
      </div>
      <div className="bg-pry-100 px-6  py-6 border-2 border-gold md:border-0 md:py-12 md:px-12 w-4/5 -mt-24 md:mt-0 md:w-2/5 md:-ml-72 z-10">
        <img src={aboutImage} alt="about" />
      </div>
    </div>
  );
};

export default About;
