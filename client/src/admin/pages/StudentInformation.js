import React, { useState } from "react";
import { PrimaryButton, SecondaryButton } from "../components/Buttons";
import { HeadingFour, Paragraph } from "../components/FontStyles";
import student from "../../images/student.jfif";
import Input from "../components/Input";
// import { useForm } from "react-hook-form";
import RecentPayment from "../components/RecentPayment";
const StudentInformation = () => {
  const useForm = () => {};

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [studentDetails, setStudentDetails] = useState();
  const leftColumnInputs = [
    {
      name: "first_name",
      id: "First name",
      placeholder: "Enter student's first name",
      register: register,
      errors: errors,
    },
    {
      name: "middle_name",
      id: "Middle name",
      placeholder: "Enter student's middle name",
      register: register,
      errors: errors,
    },

    {
      name: "last_name",
      id: "Last name",
      placeholder: "Enter student's last name",
      register: register,
      errors: errors,
    },
    {
      name: "class",
      id: "Class",
      type: "select",
      placeholder: "Select class",
      register: register,
      errors: errors,
    },

    {
      name: "home_address",
      id: "Home address",
      placeholder: "Enter student's home address",
      register: register,
      errors: errors,
    },
    {
      name: "nationality",
      id: "Nationality",
      placeholder: "Enter student's nationality",
      register: register,
      errors: errors,
    },

    {
      name: "arm",
      id: "Arm",
      type: "select",
      placeholder: "Select arm",
      register: register,
      errors: errors,
    },
    {
      name: "dob",
      id: "Date of birth",
      type: "date",
      register: register,
      errors: errors,
    },
    {
      name: "blood_group",
      id: "Blood group",
      placeholder: "Select student's blood group",
      register: register,
      errors: errors,
    },
    {
      name: "genotype",
      id: "Genotype",
      placeholder: "Select student's genotype",
      type: "select",
      register: register,
      errors: errors,
    },
    {
      name: "religion",
      id: "Religion",
      placeholder: "Select student's religion",
      type: "select",
      register: register,
      errors: errors,
    },
  ];
  const rightColumnInputs = [
    {
      name: "state_of_origin",
      id: "State of origin",
      placeholder: "Select student's state of origin",
      type: "select",
      register: register,
      errors: errors,
    },
    {
      name: "lga",
      id: "Local Government Area",
      placeholder: "Enter student's LGA",
      register: register,
      errors: errors,
    },
    {
      name: "father_name",
      id: "Name of Father",
      placeholder: "Enter father's name",
      type: "text",
      register: register,
      errors: errors,
    },
    {
      name: "father_phone",
      id: "Phone number of Father ",
      placeholder: "Phone number of Father ",
      type: "text",
      register: register,
      errors: errors,
    },

    {
      name: "father_email",
      id: "Email address of Father",
      placeholder: "Email address of Father",
      type: "text",
      register: register,
      errors: errors,
    },

    {
      name: "mother_name",
      id: "Name of Mother",
      placeholder: "Name of Mother",
      type: "text",
      register: register,
      errors: errors,
    },
    {
      name: "mother_phone",
      id: "Phone number of Mother ",
      placeholder: "Phone number of Mother",
      type: "text",
      register: register,
      errors: errors,
    },
    {
      name: "mother_email",
      id: "Email address of Mother",
      placeholder: "Email address of Mother",
      type: "email",
      register: register,
      errors: errors,
    },
    {
      name: "guardian_name",
      id: "Name of guardian",
      placeholder: "Enter guardian's name",
      type: "text",
      register: register,
      errors: errors,
    },
    {
      name: "guardian_phone",
      id: "Phone number of guardian",
      placeholder: "Enter guardian's phone",
      type: "text",
      register: register,
      errors: errors,
    },
    {
      name: "guardian_email",
      id: "Email address of guardian",
      placeholder: "Enter guardian's email",
      type: "email",
      register: register,
      errors: errors,
    },
  ];
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
  const onSubmit = (data) => {
    setStudentDetails(data);
  };
  return (
    <div className="flex flex-col w-full justify-between space-y-4 ">
      <div className="flex justify-start whitespace-pre items-center">
        <HeadingFour>Student</HeadingFour>
        <span className="text-grey-500 font-normal">
          {" "}
          / View student information
        </span>
      </div>
      <div className="flex flex-col lg:flex-row lg:justify-start justify-center items-center lg:space-x-12">
        <div className="w-52">
          <img
            src={student}
            alt="The student"
            className="rounded-full  max-w-full h-auto align-middle border-none"
          />
        </div>
        <div className="flex flex-col space-y-4 w-full justify-center my-8 lg:my-0 items-center lg:w-3/5">
          <PrimaryButton>Edit Student Information</PrimaryButton>
          <SecondaryButton>Delete student information</SecondaryButton>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row justify-between w-full">
        <div className=" w-full lg:w-2/5 flex flex-col lg:flex-row justify-between">
          <form
            className="flex flex-col justify-center  lg:justify-between "
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="flex flex-col lg:flex-row px-4 lg:px-0 w-full justify-between lg:space-x-6">
              <div className="flex flex-col justify-between space-y-5 ">
                {leftColumnInputs.map((input, index) => (
                  <Input
                    type={input.type}
                    id={input.id}
                    placeholder={input.placeholder}
                    name={input.name}
                    register={input.register}
                    errors={input.errors}
                  />
                ))}
              </div>
              <div className="flex flex-col justify-between space-y-5 ">
                {rightColumnInputs.map((input, index) => (
                  <Input
                    type={input.type}
                    id={input.id}
                    placeholder={input.placeholder}
                    name={input.name}
                    register={input.register}
                    errors={input.errors}
                  />
                ))}
              </div>
            </div>
            <div className="flex flex-col items-center w-full lg:flex-row lg:justify-between space-y-2  lg:space-x-6  mt-8">
              <PrimaryButton>Save</PrimaryButton>
              <SecondaryButton path="/students">Cancel</SecondaryButton>
            </div>
          </form>
        </div>
        <div className="flex flex-col mt-6 lg:mt-0 justify-center px-2 lg:justify-start items-start w-full lg:w-2/5">
          <Paragraph
            fontStyle="font-semibold text-sm text-grey-700 mb-4"
            textalign="text-left"
          >
            Recent payments
          </Paragraph>
          <div className="space-y-4 w-full">
            {recentPayments.map((payment, index) => (
              <RecentPayment id={index} data={payment} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentInformation;
