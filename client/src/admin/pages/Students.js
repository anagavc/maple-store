import React from "react";
import { NavigationButton } from "../components/Buttons";
import { HeadingFour } from "../components/FontStyles";
import { StudentsTable } from "../components/Table";

import data from "../components/MockData/StudentsData.json";
const Students = () => {
  const studentsHeaders = [
    { name: "First name" },

    { name: "Middle name" },
    { name: "Last name" },
    { name: "Class" },
    { name: "Arm" },
    { name: "Action" },
  ];
  return (
    <div className="flex flex-col w-full justify-between space-y-10">
      <div className="flex justify-between">
        <HeadingFour>Students</HeadingFour>
        <div className="flex space-x-8 justify-between">
          <NavigationButton path="/students/addStudent">
            Add a new student
          </NavigationButton>
          <NavigationButton>Import</NavigationButton>
          <NavigationButton>Export</NavigationButton>
        </div>
      </div>
      <StudentsTable headers={studentsHeaders} data={data} />
    </div>
  );
};

export default Students;
