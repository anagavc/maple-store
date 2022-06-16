import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { AddPaymentIcon, DailyEntry } from "../components/Icons";
import AddBoxIcon from "@mui/icons-material/AddBox";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

import { Paragraph } from "../../components/UI/FontStyles/FontStyles";
import ProductGrid from "./ProductGrid";
import Comment from "@mui/icons-material/Comment";
import { LocalPostOffice } from "@mui/icons-material";

const Dashboard = () => {
  const actions = [
    {
      title: "Add product",
      path: "../addProduct",
      icon: <AddBoxIcon />,
      style: "text-pry-100 hover:text-grey",
    },
    {
      title: "Manage orders",
      path: "../orders",
      icon: <AddShoppingCartIcon />,
      style: "text-pry-100 hover:text-grey",
    },
    {
      title: "Manage enquiries",
      path: "../enquiries",
      icon: <Comment />,
      style: "text-pry-100 hover:text-grey",
    },
    {
      title: "Manage subscribers",
      path: "../subscribers",
      icon: <LocalPostOffice />,
      style: "text-pry-100 hover:text-grey",
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
