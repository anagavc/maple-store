import React from "react";
import { Paragraph } from "./FontStyles";
import { NavigationButton } from "./Buttons";
const RecentPayment = ({ id, data, entry }) => {
  return (
    <div
      className="flex justify-between rounded bg-blue-50 even:bg-grey-50 py-4 px-4 w-full"
      key={id}
    >
      <div className="flex flex-col space-y-4 ">
        <Paragraph fontStyle="font-medium text-md text-grey-700 font-semibold">
          {data.category}
        </Paragraph>
        <Paragraph fontStyle="font-normal text-sm text-grey-400">
          {data.date}
        </Paragraph>
        {entry && (
          <div className="flex space-x-2 justify-between">
            <NavigationButton path="addPayment">Edit</NavigationButton>

            <button className="outline-none border-0 font-semibold text-sm transition duration-300 text-grey-500 hover:text-grey-4000">
              Export
            </button>
            <NavigationButton path="/permissions">Permissions</NavigationButton>
          </div>
        )}
      </div>
      <div className="flex flex-col">
        <div className="justify-between flex space-x-8">
          <Paragraph fontStyle="font-medium text-sm text-grey-700 font-semibold">
            Total payments
          </Paragraph>
          <Paragraph fontStyle="font-normal text-sm text-grey-400">
            {data.total}
          </Paragraph>
        </div>
        <div className="justify-between flex">
          <Paragraph fontStyle="font-medium text-sm text-grey-700 font-semibold">
            Balance payment
          </Paragraph>
          <Paragraph fontStyle="font-normal text-sm text-grey-400 ">
            {data.balance}
          </Paragraph>
        </div>
      </div>
    </div>
  );
};

export default RecentPayment;
