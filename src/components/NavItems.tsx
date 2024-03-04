import React from "react";
import { navItems } from "../utils/constants";
import NavLinks from "./NavLinks";

const NavItems = () => {
  return (
    <div className="flex justify-between w-full">
      {navItems.map((nav) => (
        <NavLinks navItem={nav} />
      ))}
    </div>
  );
};

export default NavItems;
