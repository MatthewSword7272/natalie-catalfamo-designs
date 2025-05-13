import React from "react";
import MainLayout from "../layouts/MainLayout";
import "../assets/buttonLink.css";

const Contact = () => {
  return (
    <MainLayout>
      <div className="h-[50vh] relative">
        <div className=" absolute inset-0 w-full bg-gray-500/30"></div>
        <img src="/images/college_makings.png" className="object-cover size-full" alt="" />
      </div>
      <section className="bg-white flex justify-between px-12 pb-20 pt-10">
        <div className="flex w-2/3 flex-col justify-between gap-10 my-5">
          <p>Area of Expertise</p>
          <div className="text-4xl">
            <p>Web Design</p>
            <p>Brand Design</p>
            <p>Packaging Design</p>
            <p>Publication Design</p>
          </div>
        </div>
        <div className="grid grid-cols-2 w-1/2 gap-x-20 mt-10">
          <div>
            <p className="font-bold">Email:</p>
            <p>natcatalfamo@gmail.com</p>
          </div>
          <div>
            <p className="font-bold">Phone:</p>
            <p>0417317992</p>
          </div>
          <div className="self-end">
            <button id="buttonLink" className="py-4 whitespace-nowrap">
              Let's Work Together
            </button>
          </div>
        </div>
        <div></div>
      </section>
    </MainLayout>
  );
};

export default Contact;
