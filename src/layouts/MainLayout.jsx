import React from "react";
import Header from "../components/Header";
import { Link } from "react-router-dom";
import { FaLinkedinIn } from "react-icons/fa";

const MainLayout = ({ children }) => {
  return (
    <div>
      <Header />
      <main className="bg-backgroundColor flex flex-col flex-grow">
        <div className=" mt-28">{children}</div>
        <footer className="my-8 flex flex-col items-center justify-center gap-3">
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
          <span>Website by her brother: <a href="">Matthew Catalfamo</a></span>
        </footer>
      </main>
    </div>
  );
};

export default MainLayout;
