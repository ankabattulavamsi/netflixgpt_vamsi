import React from "react";

const NavLinks = ({ navItem }: any) => {
  return (
    <div className="">
      <a className="text-white cursor-pointer">{navItem.name}</a>
    </div>
  );
};

export default NavLinks;
