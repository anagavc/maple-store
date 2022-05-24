import { Badge } from "@mui/material";
import React from "react";
import { NavLink } from "react-router-dom";
const NavItem = ({ path, name, id, icon }) => {
  return (
    <>
      {icon ? (
        <NavLink
          to={path}
          className="md:mr-0 text-base  flex justify-between md:space-x-12 items-center py-2 font-heading md:my-0  text-gold  hover:text-pry-50 transition duration-500"
          key={id}
        >
          <Badge
            badgeContent={4}
            sx={{
              "& .MuiBadge-badge": {
                color: "#1E3330",
                backgroundColor: "#D2CAA2",
                fontWeight: "600",
              },
            }}
          >
            {icon}
          </Badge>
        </NavLink>
      ) : (
        <NavLink
          to={path}
          className="md:mr-0 text-base  flex md:justify-between justify-center border-b border-b-gold md:border-0 w-full md:w-auto  md:space-x-12 items-center py-2 font-heading md:my-0 my-7 text-gold  hover:text-pry-50 transition duration-500"
          key={id}
        >
          {name}
        </NavLink>
      )}
    </>
  );
};

export default NavItem;
