import React from "react";

const NavLinks = ({ navItem, navOnclick }: any) => {
  return (
    <div className="">
      <a
        href={navItem.link}
        onClick={() => navOnclick(navItem._id)}
        className={`text-white cursor-pointer ${
          navItem.active ? "active" : undefined
        }`}
      >
        {navItem.name}
      </a>
    </div>
  );
};

export default NavLinks;
