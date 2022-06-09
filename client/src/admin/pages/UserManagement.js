import React from "react";

import { PrimaryButton, SecondaryButton } from "../components/Buttons";
import { HeadingFour } from "../components/FontStyles";
import { UserTable } from "../components/Table";

import data from "../components/MockData/users.json";

const UserManagement = () => {
  const userHeaders = [
    { name: "Username" },

    { name: "Email address" },
    { name: "Designation" },
    { name: "Password" },
    { name: "Status" },
  ];
  return (
    <div className="flex flex-col w-full justify-between space-y-10">
      <div className="flex justify-between">
        <HeadingFour>User management</HeadingFour>
      </div>
      <UserTable headers={userHeaders} data={data} />
      <div className="flex justify-between items-center">
        <div className="flex justify-between w-3/5  space-x-8">
          <PrimaryButton>Add user</PrimaryButton>
          <SecondaryButton path="/dashboard">Cancel</SecondaryButton>
        </div>
      </div>
    </div>
  );
};

export default UserManagement;
