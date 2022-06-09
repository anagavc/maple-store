import React from "react";
import Form from "../components/Layouts/Form";
import { HeadingTwo } from "../components/UI/FontStyles/FontStyles";
const Payment = () => {
  const paymentDetails = [
    {
      name: "Cardnumber",
      id: "cardNumber",
    },
    {
      name: "Cardname",
      id: "cardName",
    },
    {
      name: "CVV",
      id: "cvv",
    },
    {
      name: "Expiration date",
      id: "expirationDate",
    },
  ];
  return (
    <div className="bg-pry-50 px-8 md:px-24 py-24 flex flex-col justify-between  w-full space-y-4">
      <p className="text-pry-100  font-body text-base font-medium ">
        Home &gt; Make payment
      </p>
      <HeadingTwo
        title="Payment information"
        color="text-pry-100"
        size="text-3xl tracking-loose"
      />
      <Form
        formTitle="Card information"
        details={paymentDetails}
        submitTitle="Make payment"
      />
    </div>
  );
};

export default Payment;
