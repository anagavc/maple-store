import React from "react";
import { NavLink } from "react-router-dom";
const NavItem = ({ path, name, id }) => {
  return (
    <NavLink
      to={path}
      className="font-heading text-base text-gold hover:text-pry-50 transition duration-300"
      key={id}
    >
      {name}
    </NavLink>
  );
};

export default NavItem;
