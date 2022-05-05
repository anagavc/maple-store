import React from "react";
import welcomeimg2 from "../images/welcomeImg2.jpg";
import welcomeimg3 from "../images/welcomeImg3.jpg";
const Welcome = () => {
  return (
    <div className="bg-pry-50 px-24 py-48 flex justify-around  h-4/5 w-full  ">
      <div className="flex justify-center items-center h-4/5">
        <div className="">
          <img src={welcomeimg3} className="w-64 h-64" />
        </div>
        <div className="-ml-40 -mb-48">
          <img src={welcomeimg2} className="w-64 h-64" />
        </div>
      </div>
      <div className="flex flex-col justify-between space-y-8 w-2/5">
        <div className="flex justify-between items-center space-x-4">
          <div className="w-40 h-1 bg-pry-100 h"></div>
          <p className="text-pry-100 font-body text-base">
            Welcome to Maple stores
          </p>
          <div className="w-40 h-1 bg-pry-100"></div>
        </div>
        <h2 className="font-heading text-5xl  text-pry-100 ">
          Luxurious Collections
        </h2>
        <p className="font-body text-pry-100 text-base text-justify text-wrap">
          We offer you jewelleries that are made with the rarest precious stones
          obtainable on earth, every piece is custom made with your exact
          specification.
        </p>
        <button className="bg-pry-100 text-gold font-body py-4 px-8 uppercase hover:bg-gold hover:text-pry-100 font-medium transition duration-300">
          Explore
        </button>
      </div>
    </div>
  );
};

export default Welcome;
