import React from "react";

import { NavigationButton } from "../components/Buttons";
import { HeadingFour } from "../components/FontStyles";
import { EntriesTable } from "../components/Table";

import { PrimaryButton, SecondaryButton } from "../components/Buttons";
import data from "../components/MockData/entriesData.json";

const Teller = () => {
  const entriesHeaders = [
    { name: "Date" },

    { name: "Teller" },
    { name: "Total payments" },
    { name: "Total expenses" },
    { name: "Status" },
  ];
  return (
    <div className="flex flex-col w-full justify-between space-y-10">
      <div className="flex justify-between">
        <HeadingFour>Payment entries</HeadingFour>
        <div className="flex space-x-8 justify-between">
          <NavigationButton path="addStudent">Add</NavigationButton>

          <NavigationButton>Export</NavigationButton>
        </div>
      </div>
      <EntriesTable headers={entriesHeaders} data={data} />
      <div className="flex justify-between items-center">
        <div className="flex justify-between w-3/5  space-x-8">
          <PrimaryButton path="/dashboard/addPayment">Post Entry</PrimaryButton>
          <SecondaryButton path="/payments">Cancel</SecondaryButton>
        </div>
      </div>
    </div>
  );
};

export default Teller;
