import React from "react";

import { HeadingTwo } from "../components/UI/FontStyles/FontStyles";
import { SubmitButton } from "../components/UI/Buttons/PrimaryButton";
const ShippingInformation = () => {
  const contactInformation = [
    {
      name: "First name",
      id: "firstName",
    },
    {
      name: "Last name",
      id: "astName",
    },
    {
      name: "Phone number",
      id: "phoneNumber",
    },
    {
      name: "Email Address",
      id: "emailAddress",
    },
  ];
  const shippingInformation = [
    {
      name: "Country",
      id: "country",
    },
    {
      name: "State",
      id: "state",
    },
    {
      name: "City",
      id: "city",
    },
    {
      name: "Postal Code",
      id: "postalCode",
    },
    {
      name: "Street",
      id: "street",
    },
    {
      name: "Apartment number",
      id: "apartmentNumber",
    },
  ];
  return (
    <div className="bg-pry-50 px-8 md:px-24 py-24 flex flex-col justify-between  w-full space-y-4">
      <p className="text-pry-100  font-body text-base font-medium ">
        Home &gt; Shipping Information
      </p>
      <HeadingTwo
        title="Shipping information"
        color="text-pry-100"
        size="text-3xl tracking-loose"
      />
      <form className="flex w-full flex-col md:flex-row justify-around  bg-pry-50 md:border md:border-pry-100 drop-shadow-md">
        <div className="flex  px-2 py-4 md:p-12  flex-col w-full justify-around h-full">
          <p className="font-heading text-lg text-pry-100 ml-16">
            Contact information
          </p>

          <div className="flex flex-col md:flex-row justify-around p-4  gap-6 flex-wrap">
            {contactInformation.map((information, index) => (
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
                  className="px-4 md:px-8 py-2 w-full bg-pry-50 border border-pry-100"
                />
              </div>
            ))}
          </div>
          <p className="font-heading text-lg text-pry-100 ml-16">
            Shipping information
          </p>

          <div className="flex flex-col md:flex-row justify-around p-4  gap-6 flex-wrap">
            {shippingInformation.map((information, index) => (
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
                  className="px-4 md:px-8 py-2 w-full bg-pry-50 border border-pry-100"
                />
              </div>
            ))}
          </div>
          <div className="my-6 px-2 md:px-0">
            <SubmitButton title="Make payment" />
          </div>
        </div>
      </form>
    </div>
  );
};

export default ShippingInformation;
