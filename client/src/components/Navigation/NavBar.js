import { Close, Menu, ShoppingBagOutlined } from "@mui/icons-material";
import NavItem from "./NavItem";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../../api/apiCalls";
const NavBar = () => {
  const { currentUser } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const logoutHandler = () => {
    logout(dispatch, navigate);
  };
  let [open, setOpen] = useState(false);

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
  ];
  const quantity = useSelector((state) => state.cart.quantity);

  return (
    <div className="shadow-md md:flex md:justify-between w-full fixed top-0 left-0 bg-pry-100 px-12">
      <div className="md:flex justify-between items-center bg-pry-100 md:py-2 px-7 md:px-10 b py-4">
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
      </div>
      <div
        className={`md:hidden  md:items-center flex flex-col md:flex-row h-screen translate-x-0 justify-evenly  items-center px-12 md:py-2  absolute md:static bg-pry-100 md:z-40 z-40 left-0 w-full md:w-auto md:px-0 transition-all duration-500 ease-in ${
          open ? `translate-x-0` : `-translate-x-full`
        }`}
      >
        {navItems.map((link) => {
          return (
            <NavItem
              name={link.name}
              path={link.path}
              id={link.name}
              onClick={() => {
                setOpen(false);
              }}
            />
          );
        })}
        {!currentUser ? (
          <>
            <NavItem name="Register" path="/register" id="registerMobile" />
            <NavLink
              className="md:mr-0 text-base  flex md:justify-between justify-center border-b border-b-gold md:border-0 w-full md:w-auto  md:space-x-12 items-center py-2 font-heading md:my-0 my-7 text-gold  hover:text-pry-50 transition duration-500"
              key="loginMobile"
              to="/register"
            >
              Sign in
            </NavLink>
          </>
        ) : (
          <button
            className="md:mr-0 text-base  flex md:justify-between justify-center border-b border-b-gold md:border-0 w-full md:w-auto  md:space-x-12 items-center py-2 font-heading md:my-0 my-7 text-gold  hover:text-pry-50 transition duration-500"
            key="logoutMobile"
            onClick={logoutHandler}
          >
            Sign out
          </button>
        )}
      </div>
      <div className="md:flex justify-between items-center space-x-8 hidden">
        {navItems.map((link) => (
          <NavItem name={link.name} path={link.path} id={link.name} />
        ))}
      </div>
      <div className="md:flex  items-center hidden  space-x-8  justify-center  px-12 md:py-2 pb-12  md:static bg-pry-100 md:z-40 z-40 w-full md:w-auto md:px-0">
        <div className="flex justify-end items-center space-x-8">
          <NavItem
            path="/cart"
            id="cart"
            icon={<ShoppingBagOutlined />}
            qty={quantity}
          />

          {!currentUser ? (
            <>
              <NavItem name="Register" path="/register" id="register1" />
              <NavLink
                to="/login"
                className="md:mr-0 text-base border border-gold  flex md:justify-between justify-center   w-full md:w-auto  md:space-x-12 items-center py-2 px-8 font-heading md:my-0 my-7 text-gold  hover:text-pry-100 hover:bg-gold transition duration-500"
                key="loginButton"
              >
                Sign in
              </NavLink>
            </>
          ) : (
            <>
              <button
                className="md:mr-0 text-base border border-gold  flex md:justify-between justify-center   w-full md:w-auto  md:space-x-12 items-center py-2 px-8 font-heading md:my-0 my-7 text-gold  hover:text-pry-100 hover:bg-gold transition duration-500"
                key="logoutButton"
                onClick={logoutHandler}
              >
                Sign out
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default NavBar;