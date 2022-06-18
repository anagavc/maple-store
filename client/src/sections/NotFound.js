import React from "react";
import PrimaryButton from "../components/UI/Buttons/PrimaryButton";
import { HeadingTwo } from "../components/UI/FontStyles/FontStyles";

const NotFound = () => {
  return (
    <div className="flex  py-12 md:px-36 justify-center items-center bg-pry-50  -z-10  w-full">
      <div className="flex flex-col bg-pry-100 mt-3 md:mt-6 -z-5 space-y-6 border border-gold drop-shadow p-12 md:p-24 h-2/5 justify-center w-4/5 md:w-3/4 items-center">
        <p className="text-gold text-lg font-normal text-center md:text-justify">
          The page you were trying to access could not be found
        </p>
        <HeadingTwo size="text-6xl" title="404" color="text-gold" />
        <p className="text-gold text-base font-normal">Something went wrong</p>
        <PrimaryButton title="Back to home" path="/" />
      </div>
    </div>
  );
};

export default NotFound;
