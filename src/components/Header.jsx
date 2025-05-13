import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { HiBars2 } from "react-icons/hi2";
import { IoCloseOutline } from "react-icons/io5";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Header = () => {
  const [headerExpand, setHeaderExpand] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  gsap.registerPlugin(useGSAP);

  const handleScroll = () => {
    if (window.pageYOffset > 50) {
      setHeaderExpand(true);
    } else {
      setHeaderExpand(false);
    }
  };

  const handleClick = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useGSAP(() => {
    if (mobileMenuOpen) {
      gsap.from("#navMenu", { opacity: 0, y: 20 });
    }
  }, [mobileMenuOpen]);

  return (
    <header
      className={`flex justify-between items-center px-8 fixed top-0 w-full bg-white z-20 duration-300 max-lg:py-9 ${
        headerExpand ? "py-9" : "py-5"
      }`}
    >
      <img src="/images/nat_logo.png" alt="" className="size-14 z-30" />
      <nav className="space-x-5 max-lg:hidden">
        <NavLink to={"/"}>Welcome</NavLink>
        <NavLink to={"/"}>Projects</NavLink>
        <NavLink to={"/about-me"}>About Me</NavLink>
        <NavLink to={"/contact"}>Contact</NavLink>
        <NavLink to={"/Natalie+Catalfamo+CV.pdf"} target="_blank">
          Resume
        </NavLink>
      </nav>
      <button onClick={handleClick} className="lg:hidden z-30">
        {mobileMenuOpen ? (
          <IoCloseOutline size={45} className="opacity-50" />
        ) : (
          <HiBars2 size={45} className="opacity-50" />
        )}
      </button>

      <div
        id="navMenu"
        className={`${!mobileMenuOpen ? "hidden" : ""} fixed overscroll-none bg-white inset-0 size-full`}
      >
        <nav className="flex flex-col items-center justify-center h-full text-5xl gap-y-12">
          <NavLink to={"/"}>Welcome</NavLink>
          <NavLink to={"/"}>Projects</NavLink>
          <NavLink to={"/about-me"}>About Me</NavLink>
          <NavLink to={"/contact"}>Contact</NavLink>
          <NavLink to={"/Natalie+Catalfamo+CV.pdf"} target="_blank">
            Resume
          </NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Header;
