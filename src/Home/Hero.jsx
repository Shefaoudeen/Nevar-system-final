import React from "react";
import { Photon } from "../assets/Videos";

const Hero = () => {
  return (
    <section className="w-screen relative flex justify-center bg-[#F7F7F7]">
      <div className="pt-2 rounded-3xl relative">
        <video
          src={Photon}
          autoPlay
          muted
          loop
          className="object-fill rounded-[25px] h-[97.5vh] w-[97.5vw]"
        />
      </div>
    </section>
  );
};

export default Hero;
