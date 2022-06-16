import React from "react";
import { NavLink } from "react-router-dom";
import admin from "../../images/admin.jfif";
import {
  DashboardIcon,
  PaymentsIcon,
  StudentsIcon,
  ManagementIcon,
  LogoutIcon,
} from "./Icons";

import { HeadingTwo } from "../../components/UI/FontStyles/FontStyles";
const Sidebar = ({ isOpen, setIsOpen }) => {
  const navElements = [
    {
      title: "Dashboard",
      path: "dashboard",
      icon: <DashboardIcon />,
    },
    {
      title: "Products",
      path: "products",
      icon: <PaymentsIcon />,
    },
    {
      title: "Orders",
      path: "orders",
      icon: <StudentsIcon />,
    },
    {
      title: "Users",
      path: "users",
      icon: <ManagementIcon />,
    },
  ];
  const userActions = [
    {
      title: "Admin",
      path: "/user",
      image: admin,
    },
    {
      title: "Logout",
      path: "/logout",
      icon: <LogoutIcon />,
    },
  ];
  return (
    <aside
      className={`${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } absolute inset-0 transition-all duration-500 ease-in-out z-50 lg:translate-x-0 shadow-sm lg:relative lg:flex flex-col lg:w-[316px] w-72 overflow-y-auto space-y-8 py-2 bg-pry-100`}
    >
      <button
        onClick={() => setIsOpen(false)}
        className="text-gold lg:hidden absolute right-4 top-4"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      <div className=" flex justify-center ">
        <HeadingTwo title="Maple Stores" color="text-gold" size="text-3xl" />
      </div>
      <div className="flex flex-col justify-between">
        <div className="flex flex-col space-y-4 ">
          <p className="text-gold text-base font-body font-bold px-8">Menu</p>
          {navElements.map((element, index) => (
            <NavLink
              to={element.path}
              key={index}
              className={(navData) =>
                navData.isActive
                  ? "text-gold border-gold border inline-flex  items-center space-x-4 py-4 px-8  ml-4 mr-8 "
                  : "text-gold inline-flex  items-center space-x-4 py-4 px-8  hover:border mr-8 hover:border-gold transition duration-300 ml-2"
              }
            >
              <span>{element.icon}</span>
              <p>{element.title}</p>
            </NavLink>
          ))}
        </div>
        <div className="flex flex-col space-y-4 mt-12">
          <p className="text-gold text-base font-body font-bold px-8">
            Profile
          </p>
          {userActions.map((action, index) => (
            <NavLink
              to={action.path}
              key={index}
              className={(navData) =>
                navData.isActive
                  ? "text-gold border-gold border inline-flex  items-center space-x-4 py-4 px-8  ml-4 mr-8 "
                  : "text-gold inline-flex  items-center space-x-4 py-4 px-8  hover:border mr-8 hover:border-gold transition duration-300 ml-2"
              }
            >
              {!action.image && <span>{action.icon}</span>}
              {action.image && (
                <div className="w-10">
                  <img
                    src={action.image}
                    alt="The Admin"
                    className="rounded-full "
                  />
                </div>
              )}
              <p>{action.title}</p>
            </NavLink>
          ))}
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
