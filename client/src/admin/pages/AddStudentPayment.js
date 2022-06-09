import React, { useState } from "react";
import { PrimaryButton, SecondaryButton } from "../components/Buttons";
import { HeadingFour, Paragraph } from "../components/FontStyles";
import Input from "../components/Input";
import { Modal } from "../components/Modal/Modal";
// import { useForm } from "react-hook-form";
import DropBox from "../components/DropBox";
const AddStudentPayment = () => {
  const useForm = () => {};

  const [modal, setModal] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [studentPayment, setStudentPayment] = useState();
  const leftColumnInputs = [
    {
      name: "invoice_number",
      id: "Invoice number",
      placeholder: "Enter the invoice number",
      type: "text",
      register: register,
      errors: errors,
    },
    {
      name: "first_name",
      id: "First name",
      placeholder: "Enter first name",
      type: "text",
      register: register,
      errors: errors,
    },
    {
      name: "last_name",
      id: "Last name",
      placeholder: "Enter last name",
      type: "text",
      register: register,
      errors: errors,
    },
    {
      name: "arm",
      id: "Arm",
      type: "select",
      placeholder: "Select Arm",
      register: register,
      errors: errors,
    },
    {
      name: "bill_assigned",
      id: "Bill assigned",
      placeholder: "0.00",
      type: "text",
      register: register,
      errors: errors,
    },
    {
      name: "balance",
      id: "Balance",
      placeholder: "0.00",
      type: "text",
      register: register,
      errors: errors,
    },
  ];
  const rightColumnInputs = [
    {
      name: "date",
      id: "Date",
      type: "date",
      register: register,
      errors: errors,
    },
    {
      name: "middle_name",
      id: "Middle name",
      placeholder: "Enter student's middle name",
      type: "text",
      register: register,
      errors: errors,
    },
    {
      name: "class",
      id: "Class",
      placeholder: "Select class",
      type: "select",
      register: register,
      errors: errors,
    },
    {
      name: "payment_category",
      id: "Payment category",
      placeholder: "Select payment category",
      type: "select",
      register: register,
      errors: errors,
    },
    {
      name: "amount_paid",
      id: "Amount paid",
      placeholder: "0.00",
      type: "text",
      register: register,
      errors: errors,
    },
    {
      name: "payment_method",
      id: "Payment method",
      placeholder: "Select payment method",
      type: "select",
      register: register,
      errors: errors,
    },
  ];
  const onSubmit = (data) => {
    setStudentPayment(data);
    setModal(true);
    console.log(studentPayment);
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
            Post entry
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
        <span className="text-grey-500 font-normal "> / Add a payment</span>
      </div>

      <form
        className="flex flex-col lg:flex-row justify-center items-center w-full lg:justify-between lg:space-x-8"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="flex flex-col space-y-4 w-full px-6 lg:px-0">
          <div className="flex flex-col lg:flex-row justify-between lg:space-x-8">
            <div className="flex flex-col justify-between space-y-2">
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
            <div className="flex flex-col justify-between space-y-2">
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
          <Input
            type="text"
            id="Remarks"
            name="remark"
            placeholder="Enter remark"
            register={register}
            errors={errors}
            width="w-full"
          />

          <div className="flex justify-between space-x-8 mt-8">
            <PrimaryButton>Submit entry</PrimaryButton>
            <SecondaryButton>Cancel</SecondaryButton>
          </div>
        </div>
        <DropBox />
      </form>
    </div>
  );
};

export default AddStudentPayment;
