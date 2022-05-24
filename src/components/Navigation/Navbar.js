import { Close, Menu, ShoppingBagOutlined } from "@mui/icons-material";
import NavItem from "./NavItem";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  const navItems = [
    {
      name: "About",
      path: "/about",
    },
    {
      name: "Categories",
      path: "/categories",
    },
    {
      name: "Contact",
      path: "/contact",
    },
    {
      name: "Shop",
      path: "shop",
    },
    {
      name: "Login",
      path: "/login",
    },

    {
      name: "Register",
      path: "/register",
    },
  ];

  let [open, setOpen] = useState(false);

  return (
    <div className="shadow-md w-full fixed top-0 left-0 ">
      <div className="md:flex justify-between items-center bg-pry-100 md:py-2 px-7 md:px-10 border-b border-b-gold py-4">
        <div
          className="text-3xl text-gold absolute left-4 ml-6 top-2 cursor-pointer md:hidden"
          onClick={() => setOpen(!open)}
        >
          {open ? <Close /> : <Menu />}
        </div>
        <NavLink
          to="/"
          className="text-xl  cursor-pointer text-gold font-heading justify-center  flex items-center"
        >
          Maple Store
        </NavLink>
        <div className="md:hidden absolute right-4 mr-6 top-3 cursor-pointer ">
          <NavItem path="/cart" id="cart" icon={<ShoppingBagOutlined />} />
        </div>

        <div
          className={`md:hidden  md:items-center flex flex-col md:flex-row h-screen translate-x-0 justify-between py-6 items-center px-12 md:py-2 pb-12 absolute md:static bg-pry-100 md:z-40 z-40 left-0 w-full md:w-auto md:px-0 transition-all duration-500 ease-in ${
            open ? "translate-x-0" : "-translate-x-full"
          } `}
        >
          {navItems.map((link) => (
            <NavItem name={link.name} path={link.path} id={link.name} />
          ))}
        </div>
        <div className="md:flex justify-between items-center space-x-8 hidden">
          {navItems.splice(0, 4).map((link) => (
            <NavItem name={link.name} path={link.path} id={link.name} />
          ))}
        </div>
        <div
          className={`md:flex  items-center hidden  space-x-8  justify-center  px-12 md:py-2 pb-12  md:static bg-pry-100 md:z-40 z-40 w-full md:w-auto md:px-0`}
        >
          <div className="flex justify-end items-center space-x-8">
            <NavItem path="/cart" id="cart" icon={<ShoppingBagOutlined />} />

            {navItems.splice(0, 3).map((link) => (
              <NavItem name={link.name} path={link.path} id={link.name} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
