import React, { useEffect, useState } from "react";
import { Photon } from "../assets/Videos";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap/gsap-core";

const Hero = () => {
  const [blur, setBlur] = useState(true);

  setTimeout(() => {
    setBlur(false);
  }, 1000);

  useGSAP(() => {
    gsap.to("#info", {
      opacity: "100%",
      duration: 3,
      translateY: 0,
    });
  });

  return (
    <section
      id="landing"
      className={`w-screen relative duration-1000 ease-linear flex justify-center bg-[#F7F7F7]`}
    >
      <div className="pt-2 rounded-3xl relative">
        <div
          id="info"
          className="absolute hidden translate-y-[200px] opacity-0 bg-black/75 px-5 py-5 min-h-[200px] flex flex-col gap-5 justify-center items-center min-w-[400px] max-w-[400px] bottom-0 rounded-bl-3xl"
        >
          <h1 className="text-white poppins-bold">Photon</h1>
          <h1 className="text-white poppins-regular text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. A,
            voluptatum illo veniam ut optio blanditiis quidem esse impedit
            reprehenderit at omnis aliquam possimus asperiores incidunt,
            aspernatur minima officiis temporibus odio?
          </h1>
          <div className="flex">
            <button className="bg-yellow-300 px-3 py-1 rounded-lg cursor-pointer poppins-regular">
              Learn More
            </button>
          </div>
        </div>
        <video
          src={Photon}
          autoPlay
          muted
          loop
          className="object-fill -mt-2 h-[100vh] w-[100vw]"
        />
      </div>
    </section>
  );
};

export default Hero;
