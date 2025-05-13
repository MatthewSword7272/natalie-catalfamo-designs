import React from "react";
import Header from "../components/Header";
import { Link } from "react-router-dom";
import { FaLinkedinIn } from "react-icons/fa";

const MainLayout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="bg-backgroundColor flex-grow mt-[5.5rem]">{children}</main>
      <footer className=" bg-backgroundColor py-8 flex flex-col items-center justify-center gap-3 min-h-48 h-[20vh]">
        <Link className="text-2xl" to="mailto:natcatalfamo@gmail.com">
          natcatalfamo@gmail.com
        </Link>
        <a
          href="https://www.linkedin.com/in/natalie-catalfamo-b16a90209/"
          target="_blank"
          className="bg-black p-3.5 rounded-lg"
        >
          <FaLinkedinIn className="text-backgroundColor" size={25} />
        </a>
        <span>
          Website by her brother:{" "}
          <a className="underline hover:text-blue-400" href="https://matthewcatalfamoportfolio.netlify.app/">
            Matthew Catalfamo
          </a>
        </span>
      </footer>
    </div>
  );
};

export default MainLayout;
