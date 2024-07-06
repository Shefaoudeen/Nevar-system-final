import React from "react";
import { Photon } from "../assets/Videos";

const Hero = () => {
  return (
    <section className="w-screen h-screen relative">
      <video
        src={Photon}
        autoPlay
        muted
        loop
        className="w-screen h-screen object-fill"
      />
      <div className="absolute bottom-12 w-screen flex justify-center">
        <button className="bg-yellow-400 text-xl px-4 py-2 rounded-xl shadow-xl shadow-black">
          Learn More
        </button>
      </div>
    </section>
  );
};

export default Hero;
