import React from "react";
import MainLayout from "../layouts/MainLayout";
import TextSvg from "../components/TextSvg";

const AboutMe = () => {
  return (
    <MainLayout>
      <div className="h-[50vh] relative overflow-hidden bg-gray-200">
        <img
          src="/images/about-me/natalie_walking.jpg"
          className="object-cover size-full rounded-b-[50px]"
          alt=""
        />
        <div className="absolute w-full top-1/4 max-md:top-1/3 max-lg:scale-150 max-md:scale-[2] max-sm:scale-[3.5]">
          <TextSvg />
        </div>
      </div>
      <section className={"bg-gray-200 h-full pt-20 px-10"}>
        <div className={"grid md:grid-cols-2 grid-cols-1"}>
          <div></div>
          <div className={"mb-10"}>
            <h2 className={"text-4xl mb-5"}>Hi There, I'm Natalie!</h2>
            <div className={"space-y-5"}>
              <p>
                but you can just call me Nat! I’m a bubbly and vibrant young
                visual communication designer based in Melbourne, and I’m here
                to sprinkle a little creativity and joy wherever I go! After
                wrapping up my high school years in 2020 with a flourish in
                visual communication design and studio arts, I went on to
                complete my Bachelor of Design (Communication Design) at RMIT
                University, graduating with Distinction. Wow how time flies!
              </p>
              <p>
                Currently, I’m honing my skills as a Junior Graphic Designer for
                the past year, where I’ve been diving headfirst into the world
                of marketing and design alongside an amazing team.{" "}
              </p>
              <p>
                When I’m not designing, you might find me channeling my inner
                superhero as a nanny, where I’ve learned the true meaning of
                leadership and kindness. Who knew that building LEGO towers and
                planning epic snack breaks could teach you so much!
              </p>
              <p>
                I also have a deep love for photography, capturing the world
                through my lens and freezing those special moments in time.
                Whether it's a stunning sunset or a silly candid shot with
                friends, photography allows me to express my creativity in yet
                another delightful way.
              </p>
              <p>
                And let’s not forget about my adventurous side! When I’m not
                crafting the next big design masterpiece, you can catch me
                soaking up the great outdoors, traveling to new destinations, or
                sipping on Aperols with friends, all while sharing a good laugh.
                I also have a strong passion for wildlife. My love for animals
                drives me to advocate for their well-being and create a better
                world for them and for us all.{" "}
              </p>
              <p>
                I believe life’s too short not to enjoy the little things! So,
                let’s create something amazing together and keep the good vibes
                rolling!
              </p>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default AboutMe;
