import React from "react";
import { SubmitButton } from "../Buttons/PrimaryButton";
const Form = ({ formTitle, details }) => {
  return (
    <form className="flex w-full justify-around  bg-pry-50 drop-shadow-md">
      <div className="flex p-12  flex-col w-full justify-around h-full">
        <p className="font-heading text-lg text-pry-100 ml-16">{formTitle}</p>

        <div className="flex justify-around p-4  gap-6 flex-wrap">
          {details.map((information, index) => (
            <div className="flex flex-col w-2/5" key={index}>
              <label
                htmlFor={information.id}
                className="text-md text-pry-100 font-normal"
              >
                {information.name}
              </label>
              <input
                placeholder={`Enter your ${information.name}`}
                name={information.name}
                id={information.id}
                className="px-8 py-2 w-full bg-pry-50 border border-pry-100"
              />
            </div>
          ))}
        </div>

        <div className="my-6">
          <SubmitButton title={`Make payment`} />
        </div>
      </div>
    </form>
  );
};

export default Form;
