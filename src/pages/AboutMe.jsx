import React from "react";
import MainLayout from "../layouts/MainLayout";
import TextSvg from "../components/TextSvg";

const AboutMe = () => {

  return (
    <MainLayout>
      <div className="h-[50vh] relative">
        <img src="/images/about-me/natalie_walking.jpg" className="object-cover size-full rounded-b-[50px]" alt="" />
        <div className="absolute w-full top-1/4">
          <TextSvg />
        </div>
      </div>
    </MainLayout>
  );
};

export default AboutMe;
