import React from "react";
import NavItem from "./NavItem";
const Navbar = () => {
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
  const accountActions = [
    {
      name: "Login",
      path: "/login",
    },
    {
      name: "Register",
      path: "/register",
    },
  ];
  return (
    <nav className="py-4 fixed px-24 bg-pry-100 flex justify-between border-b border-gold w-full z-40">
      <p className="font-heading text-lg text-gold uppercase">Maple Stores</p>
      <div className="flex justify-between space-x-8">
        {navItems.map((item, index) => {
          return <NavItem name={item.name} path={item.path} id={index} />;
        })}
      </div>
      <div className="flex justify-between space-x-8">
        {accountActions.map((action, index) => {
          return <NavItem name={action.name} path={action.path} id={index} />;
        })}
      </div>
    </nav>
  );
};

export default Navbar;
