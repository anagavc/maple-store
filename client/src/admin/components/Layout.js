import React, { useState } from "react";
import Header from "./Header";
import { Route, Routes } from "react-router-dom";
import AddPayment from "../pages/AddPayment";
import Sidebar from "./Sidebar";
import Dashboard from "../pages/Dashboard";
import ReviewDailyEntries from "../pages/ReviewDailyEntries";
import AddExpense from "../pages/AddExpense";
import Students from "../pages/Students";
import AddStudent from "../pages/AddStudent";
import StudentInformation from "../pages/StudentInformation";
import AddStudentPayment from "../pages/AddStudentPayment";
import Payments from "../pages/Payments";
import PaymentEntries from "../pages/PaymentEntries";
import Teller from "./Teller";
import UserManagement from "../pages/UserManagement";
import PostDailyEntries from "../pages/PostDailyEntries";

const Layout = () => {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <div className="h-screen flex flex-1 overflow-hidden w-full">
      <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
      <main className="flex flex-col flex-1 bg-white  ">
        <Header setIsOpen={setIsOpen} />
        <div className="flex flex-col flex-1 overflow-y-auto">
          <div className="lg:px-12 px-0 pb-10">
            <Routes>
              <Route path="/dashboard/*" element={<Dashboard />} />
              <Route path="dashboard/addPayment" element={<AddPayment />} />
              <Route path="dashboard/addExpense" element={<AddExpense />} />
              <Route
                path="dashboard/reviewDailyEntries"
                element={<ReviewDailyEntries />}
              />
              <Route
                path="dashboard/postDailyEntries"
                element={<PostDailyEntries />}
              />

              <Route path="students">
                <Route index element={<Students />} />
                <Route path="addStudent" element={<AddStudent />} />

                <Route path=":id">
                  <Route index element={<StudentInformation />} />
                  <Route path="addPayment" element={<AddStudentPayment />} />
                </Route>
              </Route>

              <Route path="/payments/*" element={<Payments />} />
              <Route
                path="/payments/addPayment"
                element={<AddPayment />}
              ></Route>
              <Route path="/payments/entries" element={<PaymentEntries />} />
              <Route path="/payments/tellers" element={<Teller />} />
              <Route path="/userManagement" element={<UserManagement />} />
            </Routes>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Layout;
