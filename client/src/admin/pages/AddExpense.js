import React, { useState } from "react";
import { PrimaryButton, SecondaryButton } from "../components/Buttons";
import { HeadingFour, Paragraph } from "../components/FontStyles";
import Input from "../components/Input";
// import { useForm } from "react-hook-form";
import DropBox from "../components/DropBox";
import { Modal } from "../components/Modal/Modal";

const AddExpense = () => {
  const [modal, setModal] = useState(false);
  const useForm = () => {};
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [expense, setExpense] = useState();
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
      name: "payment_category",
      id: "Payment category",
      placeholder: "Select payment category",
      type: "select",
      register: register,
      errors: errors,
    },
    {
      name: "description",
      id: "Description",
      placeholder: "Enter the description of the payment",
      type: "select",
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
      name: "amount_paid",
      id: "Amount paid",
      type: "text",
      placeholder: "0.00",
      register: register,
      errors: errors,
    },
    {
      name: "remark",
      id: "Remark",
      placeholder: "Enter a remark",
      register: register,
      type: "text",
      errors: errors,
    },
  ];
  const onSubmit = (data) => {
    setExpense(data);
    setModal(true);
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
        <span className="text-grey-500 font-normal "> / Add an expense</span>
      </div>

      <form
        className="flex flex-col lg:flex-row justify-center items-center w-full lg:justify-between lg:space-x-8"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="flex flex-col space-y-4 w-full px-6 lg:px-0">
          <div className="flex flex-col lg:flex-row justify-between lg:space-x-8">
            <div className="flex flex-col justify-between space-y-6">
              {leftColumnInputs.map((input, index) => (
                <Input
                  name={input.name}
                  type={input.type}
                  id={input.id}
                  placeholder={input.placeholder}
                  register={input.register}
                  errors={input.errors}
                />
              ))}
            </div>
            <div className="flex flex-col justify-between space-y-2">
              {rightColumnInputs.map((input, index) => (
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
            <SecondaryButton path="/dashboard">Back</SecondaryButton>
          </div>
        </div>
        <DropBox />
      </form>
    </div>
  );
};

export default AddExpense;
