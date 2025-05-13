import React from "react";
import MainLayout from "../layouts/MainLayout";
import { NavLink } from "react-router-dom";
import "../assets/buttonLink.css";

const Home = () => {
  return (
    <MainLayout>
      <div className="relative flex items-center justify-center h-[75vh]">
        <div className="container mx-auto space-y-10">
          <div className="flex items-baseline text-xl justify-center gap-8">
            <span className="font-semibold text-5xl">Welcome,</span> to my world of design
          </div>
          <div className="flex justify-center gap-20">
            <NavLink id="buttonLink">
              My
              <br />
              Projects
            </NavLink>
            <NavLink id="buttonLink">
              About
              <br />
              Me
            </NavLink>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Home;
