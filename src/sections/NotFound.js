import React from "react";
import { SubmitButton } from "../components/UI/Buttons/PrimaryButton";
import { HeadingTwo } from "../components/UI/FontStyles/FontStyles";

const NotFound = () => {
  return (
    <div className="flex  py-12 px-36 justify-center items-center bg-pry-50    w-full">
      <div className="flex flex-col bg-pry-100 space-y-6 drop-shadow p-24 h-2/5 justify-between w-3/4 items-center">
        <p className="text-gold text-lg font-normal">
          The page you were trying to access could not be found
        </p>
        <HeadingTwo size="text-6xl" title="404" color="text-gold" />
        <p className="text-gold text-base font-normal">Something went wrong</p>
        <SubmitButton title="Back to home" />
      </div>
    </div>
  );
};

export default NotFound;
