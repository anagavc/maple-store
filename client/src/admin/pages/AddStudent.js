import React, { useState } from "react";
import Input from "../components/Input";
import { PrimaryButton, SecondaryButton } from "../components/Buttons";
import { HeadingFour, Paragraph } from "../components/FontStyles";

import DropBox from "../components/DropBox";
import { Modal } from "../components/Modal/Modal";
// import { useForm } from "react-hook-form";

const AddStudent = () => {
  const useForm = () => {};

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [studentDetails, setStudentDetails] = useState();

  const [modal, setModal] = useState(false);

  const upperLeftColumnInputs = [
    {
      name: "class",
      id: "Class",
      type: "select",
      placeholder: "Select class",
      register: register,
      errors: errors,
    },
    {
      name: "first_name",
      id: "First name",
      type: "text",
      placeholder: "Enter student's first name",
      register: register,
      errors: errors,
    },

    {
      name: "last_name",
      id: "Last name",
      type: "text",

      placeholder: "Enter student's last name",
      register: register,
      errors: errors,
    },

    {
      name: "home_address",
      id: "Home address",
      placeholder: "Enter student's home address",
      register: register,
      type: "text",

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
      name: "nationality",
      id: "Nationality",
      placeholder: "Enter student's nationality",
      register: register,
      type: "text",

      errors: errors,
    },
    {
      name: "lga",
      id: "Local Government Area",
      placeholder: "Enter student's LGA",
      register: register,
      type: "text",

      errors: errors,
    },
  ];
  const upperRightColumnInputs = [
    {
      name: "arm",
      id: "Arm",
      type: "select",
      placeholder: "Select arm",
      register: register,
      errors: errors,
    },
    {
      name: "middle_name",
      id: "Middle name",
      placeholder: "Enter student's middle name",
      register: register,
      type: "text",
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
      type: "text",
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
    {
      name: "state_of_origin",
      id: "State of origin",
      placeholder: "Select student's state of origin",
      type: "select",
      register: register,
      errors: errors,
    },
  ];
  const lowerLeftColumnInputs = [
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
  ];
  const lowerRightColumnInputs = [
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
  const onSubmit = (data) => {
    setModal(true);
    setStudentDetails(data);
  };
  return (
    <div className="flex flex-col w-full justify-between space-y-4 ">
      {modal && (
        <Modal
          onClose={() => {
            setModal(false);
          }}
        >
          <h4 className="text-[#1B1E20] font-medium text-base font-body px-8 lg:px-0">
            Post daily entry
          </h4>
          <Paragraph>Please review the entry before posting</Paragraph>
          <div className="flex justify-between space-x-2 w-full">
            <SecondaryButton
              onClick={() => {
                setModal(false);
              }}
            >
              Review entry
            </SecondaryButton>
            <PrimaryButton>Post entry</PrimaryButton>
          </div>
        </Modal>
      )}
      <div className="flex justify-start whitespace-pre items-center">
        <HeadingFour>Dashboard</HeadingFour>
        <span className="text-grey-500 font-normal "> / Add a new student</span>
      </div>

      <form
        className="flex flex-col lg:flex-row justify-center  w-full lg:justify-between lg:space-x-8"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="flex flex-col space-y-4 w-full px-6 lg:px-0">
          <Paragraph fontStyle="text-sm text-grey-700 font-normal">
            Student 's Information
          </Paragraph>
          <div className="flex flex-col lg:flex-row justify-between lg:items-start lg:space-x-8">
            <div className="flex flex-col justify-between space-y-4 ">
              {upperLeftColumnInputs.map((input, index) => (
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
            <div className="flex flex-col justify-between space-y-4">
              {upperRightColumnInputs.map((input, index) => (
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
          <Paragraph fontStyle="text-sm text-grey-700 font-normal mt-12">
            Parent's and Guardian's Information
          </Paragraph>
          <div className="flex flex-col lg:flex-row justify-between lg:items-start  lg:space-x-8">
            <div className="flex flex-col justify-between space-y-4 ">
              {lowerLeftColumnInputs.map((input, index) => (
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
            <div className="flex flex-col justify-between space-y-4">
              {lowerRightColumnInputs.map((input, index) => (
                <Input
                  key={input.id}
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

          <div className="flex justify-between space-x-8 mt-8">
            <PrimaryButton>Submit entry</PrimaryButton>
            <SecondaryButton path="/students">Cancel</SecondaryButton>
          </div>
        </div>
        <DropBox />
      </form>
    </div>
  );
};

export default AddStudent;
