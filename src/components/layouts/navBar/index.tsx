import React, { useState } from "react";

import NavbarButtom from "./NavbarButtom";
import NavbarLinks from "./NavbarLinks";
import NavbarSocialLinks from "./NavbarSocialLinks";

export default function Navbar() {
  const [toggle, setTogle] = useState(false);
  const handleTogle = () => setTogle(!toggle);
  return (
    <>
      <NavbarButtom handleTogle={handleTogle} toggle={toggle} />
      <div
        className={`fixed z-40 -left-40 transition-all duration-500 ease-in ${
          toggle ? "translate-x-full" : ""
        }`}
      >
        <div
          className={`h-screen w-40 bg-t_white flex justify-center items-end relative transition-all duration-300 ease-in-out`}
        >
          <div className="w-full h-11/12 p-4">
            <NavbarLinks closeMenu={handleTogle}/>
            <NavbarSocialLinks/>
          </div>
        </div>
      </div>
    </>
  );
}
