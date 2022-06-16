import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { AddPaymentIcon, DailyEntry } from "../components/Icons";

import { Paragraph } from "../../components/UI/FontStyles/FontStyles";
import ProductGrid from "./ProductGrid";

const Dashboard = () => {
  const actions = [
    {
      title: "Add product",
      path: "../addProduct",
      icon: <AddPaymentIcon />,
      style: "text-green-100 hover:text-green-200",
    },
    {
      title: "Manage orders",
      path: "../product/:id",
      icon: <AddPaymentIcon />,
      style: "text-red-100 hover:text-red-200",
    },
    {
      title: "Manage users",
      path: "reviewDailyEntries",
      icon: <DailyEntry />,
      style: "text-blue-500 hover:text-blue-600",
    },
    {
      title: "Manage products",
      path: "postDailyEntries",
      icon: <DailyEntry />,
      style: "text-blue-500 hover:text-blue-600",
    },
  ];

  return (
    <div className="flex flex-col w-full justify-between space-y-10 bg-pry-50">
      <Paragraph>Dashboard</Paragraph>

      <div className="flex justify-center space-y-4 lg:space-y-0 lg:justify-between flex-col lg:flex-row lg:space-x-4">
        {actions.map((action, index) => (
          <NavLink
            key={index}
            to={action.path}
            className={`flex justify-center lg:space-x-2 rounded-sm ${action.style} font-body text-sm w-4/5 lg:w-2/5 lg:px-12 items-center transtition duration-300 py-8 bg-pry-50 text-pry-100 drop-shadow `}
          >
            <span>{action.icon}</span>
            <p>{action.title}</p>
          </NavLink>
        ))}
      </div>
      <div className="flex  flex-col justify-start  lg:justify-between">
        <Paragraph>Products</Paragraph>
        <ProductGrid />
      </div>
    </div>
  );
};

export default Dashboard;
