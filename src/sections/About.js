import React from "react";
import {
  HeadingFour,
  HeadingTwo,
} from "../components/UI/FontStyles/FontStyles";
import aboutImage from "../images/about.jpg";
const About = () => {
  return (
    <div className="bg-gold  flex justify-between items-center w-full ">
      <div className="flex flex-col bg-pry-100 py-32 px-24 space-y-8 w-3/5">
        <HeadingFour title="About" color="gold" textColor="text-gold" />
        <HeadingTwo
          title="About Maple Stores"
          color="text-gold"
          size="text-5xl"
        />
        <p className="font-heading text-gold text-base text-justify leading-loose">
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
        <button className="bg-pry-100  flex justify-center w-full text-gold border-t border-t-gold font-heading py-4 px-8  hover:bg-gold hover:text-pry-100 font-medium transition duration-300">
          EXPLORE OUR COLLECTIONS
        </button>
      </div>
      <div className="bg-pry-100  py-12 px-12 w-2/5 -ml-72 z-50">
        <img src={aboutImage} alt="about" />
      </div>
    </div>
  );
};

export default About;
