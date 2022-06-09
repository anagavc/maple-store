import React from "react";
import RecentPayment from "../components/RecentPayment";
import { HeadingFour } from "../components/FontStyles";
const PaymentEntries = () => {
  const recentPayments = [
    {
      category: "School fees",
      date: "02/02/2022",
      total: "N2,000,000",
      balance: "N0.00",
    },
    {
      category: "Lesson fees",
      date: "05/02/2022",
      total: "N1,000,000",
      balance: "N0.00",
    },
    {
      category: "Health fees",
      date: "09/02/2022",
      total: "N8,000",
      balance: "N0.00",
    },
    {
      category: "Dining fees",
      date: "12/02/2022",
      total: "N6,000,000",
      balance: "N20,0000.00",
    },
    {
      category: "Acceptance fees",
      date: "04/03/2022",
      total: "N7,000,000",
      balance: "N1000.00",
    },
    {
      category: "Labour fees",
      date: "02/02/2022",
      total: "N2,000,000",
      balance: "N100.00",
    },
  ];
  return (
    <div className="flex flex-col w-full mx-auto justify-between space-y-4">
      <div className="flex justify-start whitespace-pre items-center">
        <HeadingFour>Payment</HeadingFour>
        <span className="text-grey-500 font-normal "> / Entries</span>
      </div>
      <div class="flex flex-col space-y-6 px-4 lg:px-0 lg:space-y-0 lg:grid lg:grid-rows-2 lg:grid-flow-col lg:gap-4 ">
        {recentPayments.map((payment, index) => (
          <RecentPayment id={index} data={payment} entry={true} />
        ))}
      </div>
    </div>
  );
};

export default PaymentEntries;
