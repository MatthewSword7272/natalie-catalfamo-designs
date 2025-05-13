import React, { useState } from "react";
import MainLayout from "../layouts/MainLayout";
import "../assets/buttonLink.css";
import EmailForm from "../components/EmailForm";

const Contact = () => {
  const [modelIsOpen, setModelIsOpen] = useState(false);
  return (
    <MainLayout>
      <EmailForm modelIsOpen={modelIsOpen} setModelIsOpen={setModelIsOpen} />

      <div className="h-[50vh] relative">
        <div className=" absolute inset-0 w-full bg-gray-500/30"></div>
        <img
          src="/images/college_makings.png"
          className="object-cover size-full"
          alt=""
        />
      </div>
      <section className="bg-white flex max-lg:flex-col justify-between px-12 pb-20 pt-10">
        <div className="flex w-2/3 flex-col justify-between gap-10 my-5">
          <p>Area of Expertise</p>
          <div className="text-4xl space-y-2">
            <p>Web Design</p>
            <p>Brand Design</p>
            <p>Packaging Design</p>
            <p>Publication Design</p>
          </div>
        </div>
        <div className="max-lg:text-xl break-all grid grid-cols-2 lg:w-1/2 gap-y-1 gap-x-10 lg:gap-x-20 mt-10">
          <div>
            <p className="font-bold">Email:</p>
            <p>natcatalfamo@gmail.com</p>
          </div>
          <div>
            <p className="font-bold">Phone:</p>
            <p>0417317992</p>
          </div>
          <div className="self-end">
            <button
              id="buttonLink"
              onClick={() => setModelIsOpen(true)}
              className="py-4 whitespace-nowrap"
            >
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
