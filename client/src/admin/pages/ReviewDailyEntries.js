import React, { useState } from "react";
import { HeadingFour, Paragraph } from "../components/FontStyles";
import PaymentsTable, { ExpensesTables } from "../components/Table";
import { PrimaryButton, SecondaryButton } from "../components/Buttons";
import paymentData from "../components/MockData/MOCK_DATA.json";
import expensesData from "../components/MockData/Expenses_Data.json";

import { Modal } from "../components/Modal/Modal";

const ReviewDailyEntries = () => {
  const paymentsHeaders = [
    { name: "Date" },

    { name: "Invoice Number" },
    { name: "Category" },
    { name: "Student name" },
    { name: "Class" },
    { name: "Bill assigned" },
    { name: "Amount paid" },
    { name: "Balance" },
    { name: "Payment method" },
  ];
  const expensesHeaders = [
    { name: "Invoice Number" },
    { name: "Date" },
    { name: "Category" },

    { name: "Amount paid" },
    { name: "Description" },
    { name: "Remark" },
  ];
  const [tableData, setTableData] = useState(paymentData);
  const [tableHeaders, setTableHeaders] = useState(paymentsHeaders);
  const [expenses, setExpenses] = useState(false);
  const [payments, setPayments] = useState(true);
  const [modal, setModal] = useState(false);
  return (
    <div className="flex flex-col w-full mx-auto justify-between space-y-4">
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
        <span className="text-grey-500 font-normal ">
          {" "}
          / Review daily entries
        </span>
      </div>
      <div className="flex items-center justify-center space-x-4">
        <button
          onClick={() => {
            setPayments(true);
            setExpenses(false);
            setTableHeaders(paymentsHeaders);
            setTableData(paymentData);
          }}
          className={`outline-none border-0 font-semibold text-sm transition duration-300 ${
            payments ? "text-blue-500" : "text-grey-400"
          }`}
        >
          Payments
        </button>
        <button
          className={`outline-none border-0 font-semibold text-sm transition duration-300 ${
            expenses ? "text-blue-500" : "text-grey-400"
          }`}
          onClick={() => {
            setExpenses(true);
            setPayments(false);
            setTableHeaders(expensesHeaders);

            setTableData(expensesData);
          }}
        >
          Expenses
        </button>
      </div>
      <div>
        {payments ? (
          <PaymentsTable headers={tableHeaders} data={tableData} />
        ) : (
          <ExpensesTables headers={tableHeaders} data={tableData} />
        )}
      </div>

      <div className="flex justify-between">
        <div className="flex justify-between w-3/5  space-x-8">
          {payments ? (
            <PrimaryButton path="/dashboard/addPayment">
              Add payment
            </PrimaryButton>
          ) : (
            <PrimaryButton path="/dashboard/addExpense">
              {" "}
              Add expense
            </PrimaryButton>
          )}
          <SecondaryButton path="/dashboard">Back</SecondaryButton>
        </div>
      </div>
    </div>
  );
};

export default ReviewDailyEntries;
