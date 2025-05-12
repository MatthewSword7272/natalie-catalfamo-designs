import React from "react";
import MainLayout from "../layouts/MainLayout";

const Contact = () => {
  return (
    <MainLayout>
      <div className="h-[50vh] relative">
        <div className=" absolute inset-0 w-full bg-gray-500/30"></div>
        <img src="/images/contact.png" className="object-cover size-full" alt="" />
      </div>
      <section className="bg-white flex">
        <div className="flex flex-col py-9 px-7">
          <p>Area of Expertise</p>
          <div className="text-3xl">
            <p>Web Design</p>
            <p>Web Design</p>
            <p>Web Design</p>
            <p>Web Design</p>
          </div>
        </div>
        <div></div>
      </section>
    </MainLayout>
  );
};

export default Contact;
