import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="flex justify-between items-center py-5 px-8 fixed top-0 w-full bg-white z-20">
      <img src="/images/nat_logo.png" alt="" className="size-14" />
      <nav className="space-x-5">
        <NavLink to={"/"}>Welcome</NavLink>
        <NavLink to={"/"}>Projects</NavLink>
        <NavLink to={"/"}>About Me</NavLink>
        <NavLink to={"/contact"}>Contact</NavLink>
        <NavLink to={"/Natalie+Catalfamo+CV.pdf"} target="_blank">
          Resume
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;
