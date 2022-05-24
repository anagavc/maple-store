import React from "react";
import { SubmitButton } from "../Buttons/PrimaryButton";
const Form = ({ formTitle, details, submitTitle }) => {
  return (
    <form className="flex w-full flex-col md:flex-row justify-around  bg-pry-50 md:border md:border-pry-100 drop-shadow-md">
      <div className="flex  px-2 py-4 md:p-12  flex-col w-full justify-around h-full">
        <p className="font-heading text-lg text-pry-100">
          <p className="font-heading text-lg text-pry-100 ml-16">{formTitle}</p>
        </p>

        <div className="flex flex-col md:flex-row justify-around p-4  gap-6 flex-wrap">
          {details.map((information, index) => (
            <div className="flex flex-col w-full md:w-2/5" key={index}>
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
                type={information.type}
                className="px-4 md:px-8 py-2 w-full bg-pry-50 border border-pry-100"
              />
            </div>
          ))}
        </div>

        <div className="my-6 px-2 md:px-0">
          <SubmitButton title={submitTitle} />
        </div>
      </div>
    </form>
  );
};

export default Form;
